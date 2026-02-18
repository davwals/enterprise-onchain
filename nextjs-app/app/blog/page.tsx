import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const categories = [
  { id: 'all', label: 'All Articles' },
  { id: 'news', label: 'News' },
  { id: 'insight', label: 'Insight of the Week' },
  { id: 'podcast', label: 'Podcast' },
  { id: 'jobs', label: 'Jobs' },
  { id: 'deep-dive', label: 'Deep Dives' },
]

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const selectedCategory = params.category || 'all'

  const articles = await prisma.article.findMany({
    where: {
      isPublished: true,
      ...(selectedCategory !== 'all' && { category: selectedCategory }),
    },
    orderBy: {
      publishedAt: 'desc',
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  })

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://i.imgur.com/LJ0gSjb.jpeg"
              alt="Enterprise Onchain"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm tracking-tight text-zinc-900 dark:text-white">Enterprise Onchain</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm hidden sm:block"
            >
              Sign In
            </Link>
            <Link
              href="/"
              className="h-8 px-4 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors inline-flex items-center"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl text-zinc-900 dark:text-white mb-4 tracking-tight">
            Newsletter Archive
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            Insights on institutional crypto adoption, tokenization, and enterprise blockchain.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/blog${category.id !== 'all' ? `?category=${category.id}` : ''}`}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category.id
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {category.label}
            </Link>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:shadow-sm bg-white dark:bg-zinc-900/50"
            >
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase mb-2">
                {article.category}
              </div>
              <h2 className="text-2xl text-zinc-900 dark:text-white mb-2 tracking-tight">
                {article.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">{article.excerpt}</p>
              <div className="text-sm text-zinc-500 dark:text-zinc-500">
                {article.author.name} · {new Date(article.publishedAt || '').toLocaleDateString()}
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {articles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-4">
              No articles found in this category yet.
            </p>
            <Link
              href="/blog"
              className="text-zinc-700 dark:text-zinc-300 hover:underline font-medium"
            >
              View all articles
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
