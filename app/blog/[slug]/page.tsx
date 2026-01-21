import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const session = await getServerSession(authOptions)

  const article = await prisma.article.findUnique({
    where: { slug },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  })

  if (!article || !article.isPublished) {
    notFound()
  }

  const contentLength = article.content.length
  const previewLength = Math.floor(contentLength * 0.3)
  const previewContent = article.content.substring(0, previewLength)
  const isAuthenticated = !!session

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://i.imgur.com/LJ0gSjb.jpeg"
              alt="Enterprise Onchain"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">Enterprise Onchain</span>
          </Link>

          <div className="flex items-center gap-3">
            {!isAuthenticated && (
              <Link
                href="/login"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
              >
                Sign In
              </Link>
            )}
            <Link
              href="/subscribe"
              className="h-8 px-4 rounded-md bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-700 transition-colors inline-flex items-center"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-4 uppercase tracking-wide">
            {article.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 text-sm">
            <span>{article.author.name}</span>
            <span>•</span>
            <span>{new Date(article.publishedAt || '').toLocaleDateString()}</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-zinc-900 dark:prose-headings:text-white prose-p:text-zinc-600 dark:prose-p:text-zinc-400">
          <div dangerouslySetInnerHTML={{ __html: isAuthenticated ? article.content : previewContent }} />
        </div>

        {!isAuthenticated && (
          <div className="mt-8 relative">
            <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-zinc-950 pointer-events-none" />

            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Continue Reading
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Sign in to read the full article and access our complete archive of institutional crypto insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={`/login?callbackUrl=/blog/${article.slug}`}
                  className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  Sign In to Continue
                </Link>
                <Link
                  href="/subscribe"
                  className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
