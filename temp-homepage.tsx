'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true)
  const [exitPopupOpen, setExitPopupOpen] = useState(false)

  const showThankYou = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const button = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const originalText = button.textContent
    button.textContent = '✓ Subscribed!'
    button.disabled = true
    setTimeout(() => {
      button.textContent = originalText
      button.disabled = false
    }, 3000)
  }

  return (
    <>
      <style jsx global>{`
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
        }
        .building {
          position: absolute;
          bottom: 0;
          background-color: currentColor;
          opacity: 0.1;
        }
      `}</style>

      <div className={darkMode ? 'dark' : ''}>
        <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen">

          {/* Navigation */}
          <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="https://i.imgur.com/LJ0gSjb.jpeg" alt="Logo" className="w-6 h-6 rounded-full" />
                <span className="text-sm font-semibold">Enterprise Onchain</span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => setDarkMode(!darkMode)} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">
                  {darkMode ? '☀️' : '🌙'}
                </button>
                <button onClick={() => setExitPopupOpen(true)} className="hidden sm:inline-flex h-8 px-4 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-medium">
                  Join Community
                </button>
              </div>
            </div>
          </nav>

          {/* Hero */}
          <main className="pt-32 pb-16 relative">
            <div className="absolute inset-0 -z-10 bg-grid-pattern"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">Live Now</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                  Track Institutional Adoption of Crypto<br />
                  <span className="text-zinc-400 dark:text-zinc-500">in One Place.</span>
                </h1>

                <p className="text-zinc-500 dark:text-zinc-400 mb-8">
                  Intelligence built for decision makers. Track tokenization, adoption, and regulatory shifts from one place.
                </p>

                <form onSubmit={showThankYou} className="flex gap-2 mb-4">
                  <input type="email" placeholder="name@organization.com" required className="flex-1 h-10 px-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900" />
                  <button type="submit" className="h-10 px-4 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium">
                    Join Free
                  </button>
                </form>

                <p className="text-sm text-zinc-500">
                  Join <strong className="text-zinc-900 dark:text-white">8,443</strong> subscribers from leading institutions
                </p>
              </div>

              <div className="h-64 lg:h-96 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 text-zinc-300 dark:text-zinc-700">
                  <div className="building" style={{left: '1rem', width: '2rem', height: '6rem'}}></div>
                  <div className="building" style={{left: '4rem', width: '3rem', height: '10rem'}}></div>
                  <div className="building" style={{left: '8rem', width: '4rem', height: '8rem'}}></div>
                </div>
              </div>
            </div>
          </main>

          {/* Trust Bar */}
          <section className="border-y border-zinc-100 dark:border-zinc-800 py-8">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-center text-xs text-zinc-400 mb-6 uppercase">Trusted by teams at</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                <span>JPMorgan</span>
                <span>Morgan Stanley</span>
                <span>Microsoft</span>
                <span>Google</span>
                <span>Barclays</span>
                <span>PwC</span>
              </div>
            </div>
          </section>

          {/* Exit Popup */}
          {exitPopupOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 max-w-md relative">
                <button onClick={() => setExitPopupOpen(false)} className="absolute top-4 right-4">✕</button>
                <h3 className="text-xl font-bold mb-2">Don't miss out!</h3>
                <p className="text-sm text-zinc-500 mb-6">Join 8,443 executives staying ahead.</p>
                <form onSubmit={showThankYou}>
                  <input type="email" placeholder="name@organization.com" required className="w-full h-11 px-4 rounded-md border mb-3" />
                  <button type="submit" className="w-full h-11 rounded-md bg-emerald-600 text-white">Join Free</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
