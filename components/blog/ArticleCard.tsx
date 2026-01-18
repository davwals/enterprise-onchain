import Link from 'next/link'
import { Clock, Calendar } from 'lucide-react'

interface ArticleCardProps {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: Date
  readTime: number
  coverImage?: string
  isFeatured?: boolean
}

const categoryColors: Record<string, string> = {
  news: 'bg-blue-100 text-blue-700',
  insight: 'bg-purple-100 text-purple-700',
  podcast: 'bg-orange-100 text-orange-700',
  jobs: 'bg-emerald-100 text-emerald-700',
  'deep-dive': 'bg-red-100 text-red-700',
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  publishedAt,
  readTime,
  coverImage,
  isFeatured,
}: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`block group h-full ${
        isFeatured ? 'md:col-span-2' : ''
      }`}
    >
      <article className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
        {coverImage && (
          <div className="aspect-video w-full overflow-hidden bg-gray-100">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-6">
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                categoryColors[category] || 'bg-gray-100 text-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
            {isFeatured && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className={`font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors ${
            isFeatured ? 'text-2xl' : 'text-xl'
          }`}>
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime} min read
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
