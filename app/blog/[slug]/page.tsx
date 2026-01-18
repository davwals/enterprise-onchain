import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { getPreviewContent } from '@/lib/newsletter'
import ContentGate from '@/components/blog/ContentGate'
import Link from 'next/link'
import { Clock, Calendar, ArrowLeft, Share2 } from 'lucide-react'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await prisma.article.findUnique({
    where: { slug },
  })

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Enterprise Onchain`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [article.coverImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [article.coverImage] : [],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await prisma.article.findUnique({
    where: { slug },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  })

  if (!article || !article.isPublished) {
    notFound()
  }

  // Generate preview content (first 4 paragraphs)
  const previewHtml = getPreviewContent(article.content, 4)

  const categoryColors: Record<string, string> = {
    news: 'bg-blue-100 text-blue-700',
    insight: 'bg-purple-100 text-purple-700',
    podcast: 'bg-orange-100 text-orange-700',
    jobs: 'bg-emerald-100 text-emerald-700',
    'deep-dive': 'bg-red-100 text-red-700',
  }

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
            </div>
          </div>
        </div>
      </header>

      {/* Article content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to articles
        </Link>

        {/* Category badge */}
        <div className="mb-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              categoryColors[article.category] || 'bg-gray-100 text-gray-700'
            }`}
          >
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </span>
        </div>

        {/* Title and meta */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="text-xl text-gray-600 mb-6">{article.subtitle}</p>
        )}

        {/* Author and metadata */}
        <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <span>By {article.author.name || 'Enterprise Onchain'}</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {article.publishedAt
              ? new Date(article.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              : 'Draft'}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTime} min read
          </span>
        </div>

        {/* Cover image */}
        {article.coverImage && (
          <div className="mb-12 rounded-xl overflow-hidden">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content with gate */}
        <ContentGate previewHtml={previewHtml} fullHtml={article.content} />

        {/* Share buttons */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-medium">Share this article:</span>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </main>

      {/* Related articles section - placeholder */}
      <section className="border-t border-gray-200 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <p className="text-gray-600">More articles coming soon...</p>
        </div>
      </section>
    </div>
  )
}
