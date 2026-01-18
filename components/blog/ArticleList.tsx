import ArticleCard from './ArticleCard'

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: Date
  readTime: number
  coverImage?: string
  isFeatured: boolean
}

interface ArticleListProps {
  articles: Article[]
}

export default function ArticleList({ articles }: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No articles found.</p>
      </div>
    )
  }

  // Separate featured articles from regular ones
  const featuredArticles = articles.filter((a) => a.isFeatured)
  const regularArticles = articles.filter((a) => !a.isFeatured)

  return (
    <div className="space-y-8">
      {/* Featured articles */}
      {featuredArticles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      )}

      {/* Regular articles */}
      {regularArticles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      )}
    </div>
  )
}
