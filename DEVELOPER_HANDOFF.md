# Enterprise Onchain Website - Developer Handoff

## Overview

This is a complete website for **Enterprise Onchain**, featuring:
- Modern Next.js 16 landing page with dark mode
- Blog system with authentication and content gating
- Terminal dashboard for institutional crypto metrics
- Mobile-responsive hamburger menu
- Professional design with zinc color palette and emerald accents

---

## 🎯 DEVELOPER PROMPT

**Create the Enterprise Onchain website with these specifications:**

1. **Landing Page** (`/`)
   - Hero: "Track Institutional Crypto Adoption" headline
   - Live badge with pulsing green dot
   - Email signup forms (Substack integration)
   - Trust bar with company logos (J.P.Morgan, Morgan Stanley, Microsoft, etc.)
   - Market coverage grid (8 cards: Institutional Adoption, Tokenization & RWAs, Stablecoins, DeFi, ETF/ETP Flows, Staking Info, L2 Ecosystem, Regulatory Updates)
   - Podcast section with dark background and card UI
   - Live News Monitor with 3 recent articles
   - Footer with social links and additional signup form
   - Exit-intent popup for email capture
   - Dark mode toggle
   - Mobile hamburger menu

2. **Blog System** (`/blog`)
   - Newsletter archive with category filters
   - Article pages with 30% preview paywall
   - Full access for authenticated users
   - Categories: news, insight, podcast, jobs, deep-dive

3. **Authentication** (`/login`)
   - Google OAuth sign-in
   - Magic link (passwordless email login)
   - NextAuth.js v4 implementation

4. **Terminal Dashboard** (`/terminal`)
   - Institutional crypto metrics dashboard
   - Live news feed with 50+ stories
   - Chart.js visualizations
   - Sidebar widgets (Newsletter, Podcast, Treasury data, ETF AUM)

5. **Tech Stack**
   - Next.js 16 with App Router
   - TypeScript
   - Tailwind CSS v4
   - Prisma ORM with PostgreSQL
   - NextAuth.js v4

6. **Design System**
   - Colors: Zinc palette (zinc-50 to zinc-950), emerald accents (emerald-500/600)
   - Typography: Manrope font for body, JetBrains Mono for code/metrics
   - Dark mode: Enabled by default with toggle
   - Navigation height: h-14 (56px)
   - Border style: `border-zinc-200 dark:border-zinc-800`

---

## 📁 Complete Code Files

### 1. Next.js Landing Page (`nextjs-app/app/page.tsx`)

```typescript
'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/layout/Sidebar'

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupShown, setPopupShown] = useState(false)

  useEffect(() => {
    // Check if popup was already shown
    const wasShown = localStorage.getItem('exitPopupShown')
    if (wasShown) {
      setPopupShown(true)
    }

    // Apply dark mode
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))

    // Exit intent detection
    const handleMouseOut = (e: MouseEvent) => {
      if (!popupShown && e.clientY < 10 && e.relatedTarget === null) {
        setIsPopupOpen(true)
        setPopupShown(true)
        localStorage.setItem('exitPopupShown', 'true')
      }
    }

    document.addEventListener('mouseout', handleMouseOut)

    // Escape key handler
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPopupOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      observer.disconnect()
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [popupShown, isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const showThankYou = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const button = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const input = form.querySelector('input[type="email"]') as HTMLInputElement
    const originalText = button.textContent || ''

    button.textContent = '✓ Subscribed!'
    button.disabled = true
    button.classList.add('!bg-emerald-600', 'dark:!bg-emerald-600', '!text-white', 'dark:!text-white')
    input.value = ''

    setTimeout(() => {
      button.textContent = originalText
      button.disabled = false
      button.classList.remove('!bg-emerald-600', 'dark:!bg-emerald-600', '!text-white', 'dark:!text-white')
    }, 3000)
  }

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors md:hidden"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <img src="https://i.imgur.com/LJ0gSjb.jpeg" alt="Enterprise Onchain" className="w-6 h-6 rounded-full" />
              <span className="text-sm font-semibold tracking-tight">Enterprise Onchain</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              )}
            </button>
            <button onClick={openPopup} className="hidden sm:inline-flex h-8 items-center justify-center rounded-md bg-zinc-900 dark:bg-white px-4 text-xs font-medium text-white dark:text-zinc-900 shadow transition-all hover:bg-zinc-700 dark:hover:bg-zinc-200">
              Join Community
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 bg-grid-pattern" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Live Now</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-manrope font-bold text-zinc-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
              Track Institutional Crypto Adoption
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md mb-8 leading-relaxed">
              Intelligence built for decision makers. Track tokenization, adoption, and regulatory shifts from one place.
            </p>
            <form
              action="https://enterpriseonchain.substack.com/api/v1/free?nojs=true"
              method="post"
              target="hidden_iframe"
              onSubmit={showThankYou}
              className="flex gap-2 max-w-sm mb-4"
            >
              <input
                type="email"
                name="email"
                placeholder="name@organization.com"
                required
                className="flex-1 h-10 px-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 placeholder:text-zinc-400 transition-all shadow-sm"
              />
              <button
                type="submit"
                className="h-10 px-4 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap"
              >
                Join Free
              </button>
            </form>
            <iframe name="hidden_iframe" style={{ display: 'none' }} />
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-zinc-300 dark:bg-zinc-700 border-2 border-white dark:border-zinc-950" />
                <div className="w-6 h-6 rounded-full bg-zinc-400 dark:bg-zinc-600 border-2 border-white dark:border-zinc-950" />
                <div className="w-6 h-6 rounded-full bg-zinc-500 dark:bg-zinc-500 border-2 border-white dark:border-zinc-950" />
              </div>
              <span>
                Join <strong className="text-zinc-900 dark:text-white">9,000+</strong> subscribers
              </span>
            </div>
          </div>
          <div className="relative h-64 lg:h-96 w-full bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex items-end justify-center animate-on-scroll">
            <svg viewBox="0 0 400 200" className="w-full h-full p-6" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <path d="M 0 150 Q 50 140 100 120 T 200 80 T 300 60 T 400 30 L 400 200 L 0 200 Z" fill="url(#chartGradient)" />
              <path d="M 0 150 Q 50 140 100 120 T 200 80 T 300 60 T 400 30" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
              <circle cx="400" cy="30" r="4" fill="#10b981" />
              <circle cx="400" cy="30" r="8" fill="#10b981" opacity="0.3">
                <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="320" y="26" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" className="fill-zinc-900 dark:fill-white font-medium">
                $2.4T TVL
              </text>
            </svg>
          </div>
        </div>
      </main>

      {/* Trust Bar, Market Coverage, Podcast, News, Footer sections... */}
      {/* (Full code continues - truncated for length, but includes all sections from original file) */}

      <style jsx>{\`
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      \`}</style>
    </>
  )
}
```

*Note: Full component is 632 lines - see GitHub repo for complete code*

---

### 2. Hamburger Menu Sidebar (`nextjs-app/components/layout/Sidebar.tsx`)

```typescript
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={\`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden \${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }\`}
      >
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <img
              src="https://i.imgur.com/LJ0gSjb.jpeg"
              alt="Enterprise Onchain"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold text-lg text-zinc-900 dark:text-white">Enterprise Onchain</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <Link
              href="/"
              onClick={onClose}
              className="block px-4 py-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              onClick={onClose}
              className="block px-4 py-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Newsletter
            </Link>
            <a
              href="https://institutions.ethereum.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Tracker ↗
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <Link
              href="/login"
              onClick={onClose}
              className="block w-full px-4 py-2 text-center rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/subscribe"
              onClick={onClose}
              className="block w-full px-4 py-2 text-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-medium"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
```

---

### 3. Blog Listing Page (`nextjs-app/app/blog/page.tsx`)

```typescript
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
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">Enterprise Onchain</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm hidden sm:block"
            >
              Sign In
            </Link>
            <Link
              href="/subscribe"
              className="h-8 px-4 rounded-md bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-700 transition-colors inline-flex items-center"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
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
              href={\`/blog\${category.id !== 'all' ? \`?category=\${category.id}\` : ''}\`}
              className={\`px-4 py-2 rounded-full text-sm font-medium transition-colors \${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }\`}
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
              href={\`/blog/\${article.slug}\`}
              className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-emerald-500 dark:hover:border-emerald-600 transition-all hover:shadow-sm bg-white dark:bg-zinc-900/50"
            >
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium uppercase mb-2">
                {article.category}
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                {article.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">{article.excerpt}</p>
              <div className="text-sm text-zinc-500 dark:text-zinc-500">
                {article.author.name} • {new Date(article.publishedAt || '').toLocaleDateString()}
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
              className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
            >
              View all articles
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
```

---

### 4. Article Page with Paywall (`nextjs-app/app/blog/[slug]/page.tsx`)

```typescript
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
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

  // Calculate content preview (first 30%)
  const contentLength = article.content.length
  const previewLength = Math.floor(contentLength * 0.3)
  const previewContent = article.content.substring(0, previewLength)
  const isAuthenticated = !!session

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header - matches homepage nav */}
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

      {/* Article Content */}
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

        {/* Article body */}
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-zinc-900 dark:prose-headings:text-white prose-p:text-zinc-600 dark:prose-p:text-zinc-400">
          <div dangerouslySetInnerHTML={{ __html: isAuthenticated ? article.content : previewContent }} />
        </div>

        {/* Paywall for non-authenticated users */}
        {!isAuthenticated && (
          <div className="mt-8 relative">
            {/* Fade gradient */}
            <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-zinc-950 pointer-events-none" />

            {/* Paywall card */}
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
                  href={\`/login?callbackUrl=/blog/\${article.slug}\`}
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
```

---

### 5. Login Page (`nextjs-app/app/login/page.tsx`)

```typescript
'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    await signIn('email', {
      email,
      redirect: false,
      callbackUrl,
    })

    setSent(true)
    setLoading(false)
  }

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl })
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Check your email</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            We sent a magic link to <strong className="text-zinc-900 dark:text-white">{email}</strong>. Click the link in your email to sign in.
          </p>
          <Link
            href="/"
            className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
          >
            Return to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/">
            <img
              src="https://i.imgur.com/LJ0gSjb.jpeg"
              alt="Enterprise Onchain"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
          </Link>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Welcome back</h1>
          <p className="text-zinc-600 dark:text-zinc-400">Sign in to access premium content</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm">
          <form onSubmit={handleMagicLink} className="space-y-4 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="name@organization.com"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send magic link'}
            </button>
          </form>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-zinc-900 text-zinc-500">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-zinc-700 dark:text-zinc-300">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  )
}
```

---

### 6. Database Schema (`nextjs-app/prisma/schema.prisma`)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
}

// NextAuth.js Models
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  articles      Article[]
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

// Blog Models
model Article {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  excerpt     String
  content     String   @db.Text
  category    String
  isPublished Boolean  @default(false)
  publishedAt DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  authorId    String
  author      User     @relation(fields: [authorId], references: [id])
}
```

---

### 7. Package.json

```json
{
  "name": "nextjs-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@next-auth/prisma-adapter": "^1.0.7",
    "@prisma/client": "^7.2.0",
    "next": "16.1.3",
    "next-auth": "^4.24.13",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.3",
    "prisma": "^7.2.0",
    "tailwindcss": "^4",
    "ts-node": "^10.9.2",
    "typescript": "^5"
  },
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  }
}
```

---

### 8. Environment Variables (`.env`)

```bash
# Database (Supabase PostgreSQL)
DATABASE_URL="your-postgresql-connection-string"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email Provider (optional)
EMAIL_SERVER="smtp://user:pass@smtp.example.com:587"
EMAIL_FROM="noreply@enterpriseonchain.com"
```

---

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
cd nextjs-app
npm install
```

### 2. Set Up Database

```bash
# Push schema to database
npx prisma db push

# Seed with sample articles
npx prisma db seed
```

### 3. Generate NextAuth Secret

```bash
openssl rand -base64 32
```

Copy the output to `.env` as `NEXTAUTH_SECRET`

### 4. Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
6. Copy Client ID and Client Secret to `.env`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Terminal Dashboard (Separate HTML File)

The terminal dashboard is a standalone HTML file located at `/terminal/index.html`. It includes:

- 8 metric cards (BTC ETF, ETH ETF, Market Cap, RWA TVL, etc.)
- Chart.js visualizations
- Live news feed with 50+ stories
- Sidebar widgets
- Dark mode by default

To view: Navigate to `/terminal/` on your website.

---

## 📱 Mobile Responsiveness

- Hamburger menu appears on screens < 768px
- All components stack vertically on mobile
- Touch-friendly button sizes (min 44x44px)
- Sidebar slides in from left with backdrop overlay

---

## 🎨 Design Tokens

```css
/* Colors */
--zinc-50: #fafafa
--zinc-100: #f4f4f5
--zinc-200: #e4e4e7
--zinc-300: #d4d4d8
--zinc-400: #a1a1aa
--zinc-500: #71717a
--zinc-600: #52525b
--zinc-700: #3f3f46
--zinc-800: #27272a
--zinc-900: #18181b
--zinc-950: #09090b

--emerald-500: #10b981
--emerald-600: #059669

/* Typography */
font-family: 'Manrope', sans-serif
font-family: 'JetBrains Mono', monospace (for metrics/code)

/* Spacing */
Navigation height: h-14 (56px)
Max content width: max-w-7xl (1280px)
```

---

## 🔐 Authentication Flow

1. User visits `/blog/article-slug`
2. Sees 30% of article content
3. Paywall appears with sign-in prompt
4. User clicks "Sign In to Continue"
5. Redirected to `/login?callbackUrl=/blog/article-slug`
6. Signs in with Google or magic link
7. Redirected back to article
8. Sees full content

---

## 📊 Category System

Articles support these categories:
- `news` - Breaking news and announcements
- `insight` - Weekly insights and analysis
- `podcast` - Podcast episodes
- `jobs` - Job postings
- `deep-dive` - In-depth analysis

Filter by category: `/blog?category=news`

---

## 🚢 Deployment Checklist

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `DATABASE_URL`
   - `NEXTAUTH_URL` (your production domain)
   - `NEXTAUTH_SECRET`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `EMAIL_SERVER` (optional)
   - `EMAIL_FROM` (optional)
4. Deploy

### Post-Deployment

1. Update Google OAuth redirect URIs
2. Test authentication flow
3. Seed production database with real articles
4. Monitor Prisma logs for errors

---

## 🐛 Common Issues

### Issue: "Can't connect to database"
**Solution:** Check `DATABASE_URL` in `.env`. Ensure PostgreSQL is running and connection string is correct.

### Issue: "NextAuth redirect mismatch"
**Solution:** Add your deployment URL to Google OAuth authorized redirect URIs:
`https://yourdomain.com/api/auth/callback/google`

### Issue: "Articles not showing"
**Solution:** Run `npx prisma db seed` to add sample articles, or create articles manually via Prisma Studio (`npx prisma studio`)

### Issue: "Dark mode not working"
**Solution:** Check that `<html lang="en">` tag doesn't have hardcoded `class="dark"` in `layout.tsx`. The theme toggle should dynamically add/remove this class.

---

## 📞 Support

For implementation questions:
- Check the README in the repository
- Review commit messages for context
- Compare with the original HTML files for design reference

---

## 📄 License

Proprietary - Enterprise Onchain

---

## ✅ Final Checklist

Before deploying to your business partner:

- [ ] All code files included and tested
- [ ] Environment variables configured
- [ ] Database schema pushed
- [ ] Sample articles seeded
- [ ] Google OAuth configured
- [ ] All pages render correctly
- [ ] Mobile menu works
- [ ] Dark mode toggle functions
- [ ] Authentication flow tested
- [ ] Paywall shows for unauthenticated users
- [ ] Forms submit to Substack successfully
- [ ] Charts render on terminal dashboard
- [ ] All links work (YouTube, Spotify, social media)

---

**END OF DOCUMENTATION**
