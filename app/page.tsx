'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import Sidebar from '@/components/layout/Sidebar'

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <Link href="/" className="flex items-center gap-2">
                <img
                  src="https://i.imgur.com/LJ0gSjb.jpeg"
                  alt="Enterprise Onchain"
                  className="h-8 w-8 rounded"
                />
                <span className="font-bold text-xl hidden sm:inline">
                  ENTERPRISE ONCHAIN
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                Newsletter
              </Link>
              <Link
                href="https://institutions.ethereum.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Tracker ↗
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-gray-300 hover:text-white transition-colors hidden sm:block"
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

      {/* Hero section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/10 border border-emerald-600/20 rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-sm font-medium">
              9,000+ Institutional Readers
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Institutional Crypto
            <br />
            <span className="text-emerald-500">Intelligence</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            Weekly insights on enterprise blockchain adoption, tokenization, and the onchain economy.
            <br />
            Trusted by teams at BlackRock, JPMorgan, McKinsey, and more.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/subscribe"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium text-lg"
            >
              Subscribe to Newsletter
            </Link>
            <Link
              href="/blog"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors font-medium text-lg"
            >
              Read Articles
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-16">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              <span className="text-gray-400 font-mono text-sm">JPMorgan</span>
              <span className="text-gray-400 font-mono text-sm">BlackRock</span>
              <span className="text-gray-400 font-mono text-sm">Morgan Stanley</span>
              <span className="text-gray-400 font-mono text-sm">McKinsey</span>
              <span className="text-gray-400 font-mono text-sm">Microsoft</span>
              <span className="text-gray-400 font-mono text-sm">Google</span>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <div className="w-12 h-12 bg-emerald-600/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📰</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Morning Brief</h3>
            <p className="text-gray-400">
              Daily institutional crypto news in a Morning Brew style format
            </p>
          </div>

          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Data Insights</h3>
            <p className="text-gray-400">
              Weekly deep dives into institutional adoption metrics and trends
            </p>
          </div>

          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <div className="w-12 h-12 bg-orange-600/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎙️</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Podcast</h3>
            <p className="text-gray-400">
              Conversations with enterprise blockchain leaders and innovators
            </p>
          </div>

          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Job Board</h3>
            <p className="text-gray-400">
              Curated opportunities in enterprise blockchain and tokenization
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-400 text-sm">
              © 2024 Enterprise Onchain. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://x.com/enterpriseonchain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                𝕏
              </a>
              <a
                href="https://linkedin.com/company/enterprise-onchain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://open.spotify.com/show/enterpriseonchain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Spotify
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
