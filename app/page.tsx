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

          {/* Market Coverage Grid */}
          <section className="bg-white dark:bg-zinc-950 py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-3">Market Coverage</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Covering areas such as:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Institutional Adoption', icon: '🏦' },
                  { title: 'Tokenization & RWAs', icon: '📊' },
                  { title: 'Stablecoins', icon: '💵' },
                  { title: 'DeFi', icon: '🏛️' },
                  { title: 'ETF / ETP Flows', icon: '📈' },
                  { title: 'Staking Info', icon: '⏱️' },
                  { title: 'L2 Ecosystem', icon: '📚' },
                  { title: 'Regulatory Updates', icon: '⚖️' },
                ].map((card, i) => (
                  <div
                    key={i}
                    onClick={() => setExitPopupOpen(true)}
                    className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all cursor-pointer"
                  >
                    <div className="text-2xl mb-3">{card.icon}</div>
                    <h3 className="font-medium text-sm">{card.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Enterprise Onchain Podcast */}
          <section className="py-24 bg-zinc-950 text-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-semibold text-zinc-300 uppercase">Enterprise Onchain Podcast</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Onchain</h2>

                <p className="text-zinc-400 mb-8">
                  Podcast with leaders from the space. Hear directly from executives driving institutional crypto adoption.
                </p>

                <div className="flex gap-4">
                  <a href="https://www.youtube.com/@enterpriseonchain" target="_blank" rel="noopener noreferrer" className="h-11 inline-flex items-center px-6 rounded-lg bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200">
                    ▶ Watch
                  </a>
                  <a href="https://open.spotify.com/show/6piY0ttC8ZSgYQX1YRuP36?si=5680061a22954b6b" target="_blank" rel="noopener noreferrer" className="h-11 inline-flex items-center px-6 rounded-lg border border-zinc-800 bg-zinc-900/50 text-white text-sm font-medium hover:bg-zinc-800">
                    🎙️ Listen
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/80">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white">
                    🌊
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded">EP. 07</span>
                </div>
                <h3 className="text-sm font-semibold mb-1">Why Traditional Finance is Moving Onchain</h3>
                <p className="text-xs text-zinc-500 mb-4">Featuring Head of Digital Assets @ Large Bank</p>
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center">▶</button>
                  <div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-zinc-500 rounded-full"></div>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">14:20</span>
                </div>
              </div>
            </div>
          </section>

          {/* Live News Monitor */}
          <section className="bg-zinc-50 dark:bg-zinc-900 py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-8">
                <h2 className="text-xl font-semibold">Live News Monitor</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Latest institutional crypto news and announcements.</p>
              </div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-950 overflow-hidden">
                <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    { company: 'JPM', title: 'J.P. Morgan Launches MONY Tokenized Money Market Fund', desc: 'The banking giant announces its first tokenized fund product on Ethereum, targeting institutional investors.', time: '2 hours ago', tag: 'Tokenization' },
                    { company: 'SC', title: 'Standard Chartered Raises ETH Price Target to $40,000', desc: 'Analysts cite growing institutional adoption and ETF inflows as key drivers for the bullish outlook.', time: '5 hours ago', tag: 'Research' },
                    { company: 'MS', title: 'Morgan Stanley Goes All-In on Crypto', desc: 'The $1.8T bank launches crypto ETFs and announces tokenization wallet.', time: 'Yesterday', tag: 'Adoption' },
                  ].map((news, i) => (
                    <div key={i} onClick={() => setExitPopupOpen(true)} className="p-5 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold shrink-0">{news.company}</div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium mb-1">{news.title}</h3>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">{news.desc}</p>
                          <div className="flex items-center gap-3 text-xs text-zinc-400">
                            <span>{news.time}</span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">{news.tag}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-12">
            <div className="max-w-2xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Don&apos;t Miss the Institutional Crypto Revolution</h2>
              <p className="text-zinc-500 mb-8">Stay ahead with the latest news, insights, and analysis on institutional adoption.</p>

              <form onSubmit={showThankYou} className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto mb-6">
                <input type="email" placeholder="name@organization.com" required className="flex-1 h-11 px-4 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" />
                <button type="submit" className="h-11 px-6 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium">
                  Join Free
                </button>
              </form>

              <p className="text-sm text-zinc-500 mb-16">
                <strong className="text-zinc-700 dark:text-zinc-300">8,443</strong> executives already subscribed
              </p>

              <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <div className="mb-4 md:mb-0">
                  © 2025 Enterprise Onchain. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                  <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-white">Newsletter</Link>
                  <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Privacy</a>
                  <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
                  <div className="flex items-center gap-4 ml-2">
                    <a href="https://www.youtube.com/@enterpriseonchain" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white">▶️</a>
                    <a href="https://x.com/enteronchain?s=20" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white">𝕏</a>
                    <a href="https://www.linkedin.com/company/enterpriseonchain/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white">in</a>
                    <a href="https://enterpriseonchain.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white">✉️</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          {/* Exit Popup */}
          {exitPopupOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 max-w-md relative">
                <button onClick={() => setExitPopupOpen(false)} className="absolute top-4 right-4">✕</button>
                <h3 className="text-xl font-bold mb-2">Don&apos;t miss out!</h3>
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
