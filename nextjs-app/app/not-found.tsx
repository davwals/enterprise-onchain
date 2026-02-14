import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">404</p>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
          Page not found
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 dark:bg-white px-6 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
