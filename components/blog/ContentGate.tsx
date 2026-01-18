'use client'

import { useSession } from 'next-auth/react'
import SignupForm from '@/components/auth/SignupForm'

interface ContentGateProps {
  previewHtml: string
  fullHtml: string
}

export default function ContentGate({ previewHtml, fullHtml }: ContentGateProps) {
  const { data: session, status } = useSession()

  // Loading state
  if (status === 'loading') {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    )
  }

  // Authenticated - show full content
  if (session) {
    return (
      <article
        className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: fullHtml }}
      />
    )
  }

  // Not authenticated - show preview + gate
  return (
    <div>
      {/* Preview content with fade */}
      <div className="relative mb-16">
        <article
          className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: previewHtml }}
        />
        {/* Gradient fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
      </div>

      {/* Signup CTA */}
      <div className="mt-8 p-8 bg-gray-50 rounded-xl border border-gray-200 text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">
          Create a free account to continue reading
        </h3>
        <p className="text-gray-600 mb-6">
          Join 9,000+ institutional readers from BlackRock, JPMorgan, McKinsey & more
        </p>

        <div className="max-w-md mx-auto">
          <SignupForm source="content-gate" />
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Already have an account?{' '}
          <button
            onClick={() => window.location.href = '/login'}
            className="text-emerald-600 hover:underline font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}
