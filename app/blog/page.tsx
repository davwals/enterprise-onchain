import { prisma } from '@/lib/prisma'
import ArticleList from '@/components/blog/ArticleList'
import Link from 'next/link'
import { Menu } from 'lucide-react'

// Force dynamic rendering
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

  // Fetch articles from database
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
          email: true,
        },
      },
    },
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-30">
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

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/blog" className="text-gray-900 font-medium">
                Newsletter
              </Link>
              <Link
                href="https://institutions.ethereum.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                Tracker ↗
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-gray-700 hover:text-gray-900 hidden sm:block"
              >
                Sign In
              </Link>
              <Link
                href="/subscribe"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Subscribe
              </Link>
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Newsletter Archive
          </h1>
          <p className="text-xl text-gray-600">
            Insights on institutional crypto adoption, tokenization, and enterprise blockchain.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/blog${category.id !== 'all' ? `?category=${category.id}` : ''}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </Link>
          ))}
        </div>

        {/* Articles grid */}
        <ArticleList articles={articles as any} />

        {/* Empty state */}
        {articles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">
              No articles found in this category yet.
            </p>
            <Link
              href="/blog"
              className="text-emerald-600 hover:underline font-medium"
            >
              View all articles
            </Link>
          </div>
        )}
      </main>

      {/* Footer CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Never miss an update
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join 9,000+ institutional readers staying ahead of the curve.
          </p>
          <Link
            href="/subscribe"
            className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium text-lg"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </div>
  )
}
