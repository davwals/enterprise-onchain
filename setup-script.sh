#!/bin/bash

# Navigate to project directory
cd ~/Downloads/enterprise-onchain-claude-add-blog-gated-content-9SesN

echo "Creating terminal page..."
mkdir -p app/terminal
cat > app/terminal/page.tsx << 'ENDOFTERMINAL'
export default function TerminalPage() {
  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl mb-4">$ Institutional Tracker Terminal</h1>
        <p className="mb-2">Coming soon...</p>
        <div className="mt-8">
          <p className="opacity-50">Track institutional crypto adoption in real-time</p>
        </div>
      </div>
    </div>
  )
}
ENDOFTERMINAL

echo "Creating simple blog page (no database needed)..."
cat > app/blog/page.tsx << 'ENDOFBLOG'
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
ENDOFBLOG

echo "Cleaning cache and restarting..."
rm -rf .next

echo ""
echo "✅ Setup complete!"
echo ""
echo "Now run: npm run dev"
echo ""
echo "Then visit:"
echo "  - http://localhost:3000 (Homepage)"
echo "  - http://localhost:3000/blog (Blog - no database needed)"
echo "  - http://localhost:3000/terminal (Terminal tracker)"
echo ""
