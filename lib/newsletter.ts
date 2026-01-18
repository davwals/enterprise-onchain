/**
 * Newsletter Platform Integration
 * Syncs subscribers to Loops/Resend/ConvertKit
 */

export async function syncToLoops(email: string, name?: string) {
  if (!process.env.LOOPS_API_KEY) {
    console.warn('LOOPS_API_KEY not configured')
    return
  }

  try {
    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName: name,
        source: 'website',
        subscribed: true,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Loops sync failed:', error)
    }

    return response.ok
  } catch (error) {
    console.error('Error syncing to Loops:', error)
    return false
  }
}

export async function syncToResend(email: string, name?: string) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured')
    return
  }

  // Placeholder for Resend integration
  // Implementation depends on your Resend audience ID
  console.log('Resend sync not yet implemented')
  return false
}

export async function syncToConvertKit(email: string, name?: string) {
  if (!process.env.CONVERTKIT_API_KEY || !process.env.CONVERTKIT_FORM_ID) {
    console.warn('ConvertKit not configured')
    return
  }

  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: process.env.CONVERTKIT_API_KEY,
          email,
          first_name: name,
        }),
      }
    )

    return response.ok
  } catch (error) {
    console.error('Error syncing to ConvertKit:', error)
    return false
  }
}

// Helper to get preview content (first N paragraphs)
export function getPreviewContent(htmlContent: string, paragraphCount: number = 4): string {
  const paragraphs = htmlContent.split('</p>')
  return paragraphs.slice(0, paragraphCount).join('</p>') + '</p>'
}

// Calculate estimated read time
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const text = content.replace(/<[^>]*>/g, '') // Strip HTML
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}
