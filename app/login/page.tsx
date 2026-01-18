import Link from 'next/link'
import SignupForm from '@/components/auth/SignupForm'

export const metadata = {
  title: 'Sign In | Enterprise Onchain',
  description: 'Sign in to access exclusive content and insights.',
}

export default function LoginPage() {
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
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600">
              Sign in to access exclusive content and insights
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm">
            <SignupForm source="login-page" />
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link href="/subscribe" className="text-emerald-600 hover:underline font-medium">
              Subscribe for free
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
