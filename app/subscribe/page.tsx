import Link from 'next/link'
import SignupForm from '@/components/auth/SignupForm'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'Subscribe | Enterprise Onchain',
  description: 'Join 9,000+ institutional readers staying ahead of the curve.',
}

const benefits = [
  'Weekly institutional crypto insights',
  'Morning Brief updates (Morning Brew style)',
  'Exclusive data analysis and metrics',
  'Podcast episode summaries',
  'Curated job opportunities',
  'Access to full article archive',
]

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://i.imgur.com/LJ0gSjb.jpeg"
                alt="Enterprise Onchain"
                className="h-8 w-8 rounded"
              />
              <span className="font-bold text-xl">ENTERPRISE ONCHAIN</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Value prop */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-700 text-sm font-medium">
                  9,000+ Subscribers
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Join the leading institutional crypto newsletter
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Stay ahead with weekly insights on enterprise blockchain, tokenization, and the onchain economy.
              </p>

              {/* Social proof */}
              <div className="mb-8">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
                  Trusted by teams at
                </p>
                <div className="flex flex-wrap gap-4 text-gray-700 font-medium">
                  <span>BlackRock</span>
                  <span>•</span>
                  <span>JPMorgan</span>
                  <span>•</span>
                  <span>McKinsey</span>
                  <span>•</span>
                  <span>Microsoft</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Signup form */}
            <div>
              <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Create your free account
                </h2>
                <p className="text-gray-600 mb-6">
                  No credit card required. Unsubscribe anytime.
                </p>

                <SignupForm source="subscribe-page" />

                <p className="mt-6 text-center text-sm text-gray-500">
                  Already have an account?{' '}
                  <Link href="/login" className="text-emerald-600 hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </div>

              <p className="mt-6 text-center text-xs text-gray-500">
                By subscribing, you agree to receive our newsletter and updates.
                We respect your privacy and will never share your email.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
