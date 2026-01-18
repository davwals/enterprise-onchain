import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { syncToLoops } from '@/lib/newsletter'

export async function POST(request: Request) {
  try {
    const { email, name, source } = await request.json()

    // 1. Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // 2. Save to your database
    const subscriber = await prisma.subscriber.upsert({
      where: { email },
      update: {
        status: 'active',
        name: name || undefined,
        source: source || 'website',
      },
      create: {
        email,
        name,
        source: source || 'website',
      },
    })

    // 3. Sync to newsletter platform (Loops)
    const syncSuccess = await syncToLoops(email, name)

    if (syncSuccess) {
      await prisma.subscriber.update({
        where: { email },
        data: {
          platformSyncedAt: new Date(),
        },
      })
    }

    return NextResponse.json({
      success: true,
      subscriber: {
        id: subscriber.id,
        email: subscriber.email,
      },
    })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
