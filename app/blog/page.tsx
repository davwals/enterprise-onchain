import Link from 'next/link'

export default function BlogPage() {
  const articles = [
    {
      slug: 'coming-soon-1',
      title: 'Institutional Adoption Accelerates in 2024',
      excerpt: 'Database setup required to view full content.',
      category: 'news',
    },
    {
      slug: 'coming-soon-2',
      title: 'Real-World Asset Tokenization Report',
      excerpt: 'Database setup required to view full content.',
      category: 'insight',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold">Enterprise Onchain</Link>
            <div className="text-sm text-gray-500">Blog</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Newsletter & Articles</h1>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-yellow-800">
            <strong>Database not configured.</strong> To view blog articles with content gating,
            set up your database connection and run the seed script.
          </p>
        </div>

        <div className="grid gap-6">
          {articles.map((article) => (
            <div key={article.slug} className="border border-gray-200 rounded-lg p-6">
              <div className="text-xs text-gray-500 uppercase mb-2">{article.category}</div>
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
