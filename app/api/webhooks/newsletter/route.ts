import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/**
 * Webhook endpoint for newsletter platform (Loops/Resend/ConvertKit)
 * to sync unsubscribe events back to our database
 */
export async function POST(request: Request) {
  try {
    const payload = await request.json()

    // TODO: Verify webhook signature based on your platform
    // Example for Loops:
    // const signature = request.headers.get('x-loops-signature')
    // if (!verifyLoopsSignature(signature, payload)) {
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    // }

    // Handle unsubscribe event
    if (payload.type === 'contact.unsubscribed' || payload.eventType === 'unsubscribed') {
      const email = payload.email || payload.data?.email

      if (email) {
        await prisma.subscriber.update({
          where: { email },
          data: {
            status: 'unsubscribed',
            unsubscribedAt: new Date(),
          },
        })

        console.log(`Unsubscribed: ${email}`)
      }
    }

    // Handle other events as needed
    // - contact.subscribed
    // - contact.bounced
    // etc.

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
