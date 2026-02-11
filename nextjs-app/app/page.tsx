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

      {/* Trust Bar */}
      <section className="bg-zinc-50/50 dark:bg-zinc-900/30 border-b border-zinc-100 dark:border-zinc-800/50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-medium text-zinc-400 mb-6 uppercase tracking-wider">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 opacity-60 grayscale">
            <span className="text-lg tracking-tight text-zinc-800 dark:text-zinc-300" style={{ fontFamily: 'serif' }}>J.P.Morgan</span>
            <span className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Morgan Stanley</span>
            <span className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Citi</span>
            <span className="text-lg font-semibold tracking-tighter text-zinc-800 dark:text-zinc-300">BARCLAYS</span>
            <span className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Franklin Templeton</span>
            <span className="text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-300">Google</span>
            <span className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Microsoft</span>
            <span className="text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-300">Amazon</span>
            <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-300">World Bank</span>
            <span className="text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-300">Pfizer</span>
            <span className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Mercedes-Benz</span>
            <span className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Vodafone</span>
            <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-300">McKinsey</span>
            <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-300">Deloitte</span>
            <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-300">PwC</span>
            <span className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Stanford</span>
            <span className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Harvard</span>
            <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-300">S&P Global</span>
          </div>
        </div>
      </section>

      {/* Market Coverage */}
      <section className="bg-white dark:bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 animate-on-scroll">
            <h2 className="text-2xl font-manrope mb-3 tracking-tight">Market Coverage</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">Covering areas such as:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3" />
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                  </svg>
                ),
                title: 'Institutional Adoption',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="14" y="2" width="8" height="8" rx="1" />
                    <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
                  </svg>
                ),
                title: 'Tokenization & RWAs',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6" />
                  </svg>
                ),
                title: 'Stablecoins',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" />
                  </svg>
                ),
                title: 'DeFi',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                ),
                title: 'ETF / ETP Flows',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="8" cy="8" r="6" />
                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4" />
                    <path d="m16.71 13.88.7.71-2.82 2.82" />
                  </svg>
                ),
                title: 'Staking Info',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
                  </svg>
                ),
                title: 'L2 Ecosystem',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v18m7-13 3 8a5 5 0 0 1-6 0z" />
                    <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0z" />
                    <path d="M3 21h18" />
                  </svg>
                ),
                title: 'Regulatory Updates',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={openPopup}
                className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 cursor-pointer market-card"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-50 dark:bg-zinc-800 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 flex items-center justify-center mb-4 text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-medium text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="enterprise" className="py-24 bg-zinc-950 text-white overflow-hidden relative border-y border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-zinc-300 uppercase">Enterprise Onchain Podcast</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-manrope mb-4 text-white">Enterprise Onchain</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Podcast with leaders from the space. Hear directly from executives driving institutional crypto adoption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.youtube.com/@enterpriseonchain"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 inline-flex items-center justify-center px-6 rounded-lg bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                Watch
              </a>
              <a
                href="https://open.spotify.com/show/6piY0ttC8ZSgYQX1YRuP36?si=5680061a22954b6b"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 inline-flex items-center justify-center px-6 rounded-lg border border-zinc-800 bg-zinc-900/50 text-white text-sm font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2" />
                  <rect width="6" height="13" x="9" y="2" rx="3" />
                </svg>
                Listen
              </a>
            </div>
          </div>
          <div className="relative animate-on-scroll delay-200">
            <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full" />
            <div className="relative p-5 rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-md shadow-2xl">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2" />
                    <rect width="6" height="13" x="9" y="2" rx="3" />
                  </svg>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded">EP. 07</span>
              </div>
              <h3 className="text-sm font-medium text-white mb-1">Why Traditional Finance is Moving Onchain</h3>
              <p className="text-xs text-zinc-500 mb-4">Featuring Head of Digital Assets @ Large Bank</p>
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-emerald-500 rounded-full" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500">32:14</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Monitor */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 animate-on-scroll">
            <h2 className="text-2xl font-manrope mb-3 tracking-tight">Live News Monitor</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Real-time institutional blockchain activity and announcements.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-950 overflow-hidden shadow-sm animate-on-scroll delay-100">
            <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {[
                {
                  logo: 'JPM',
                  logoBg: 'bg-zinc-900',
                  title: 'J.P. Morgan Launches MONY Tokenized Money Market Fund',
                  description: 'The banking giant announces its first tokenized fund product on Ethereum, targeting institutional investors.',
                  time: '2 hours ago',
                  tag: 'Tokenization',
                  tagColor: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
                },
                {
                  logo: 'SC',
                  logoBg: 'bg-blue-900',
                  title: 'Standard Chartered Raises ETH Price Target to $40,000',
                  description: 'Analysts cite growing institutional adoption and ETF inflows as key drivers for the bullish outlook.',
                  time: '5 hours ago',
                  tag: 'Research',
                  tagColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
                },
                {
                  logo: 'MS',
                  logoBg: 'bg-indigo-600',
                  title: 'Morgan Stanley Goes All-In on Crypto',
                  description: 'The $1.8T bank launches crypto ETFs and announces tokenization wallet.',
                  time: 'Yesterday',
                  tag: 'Adoption',
                  tagColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
                },
              ].map((item, idx) => (
                <div key={idx} onClick={openPopup} className="p-5 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors cursor-pointer news-item">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full ${item.logoBg} text-white flex items-center justify-center text-xs font-bold shrink-0`}>
                      {item.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">{item.description}</p>
                      <div className="flex items-center gap-3 text-xs text-zinc-400">
                        <span>{item.time}</span>
                        <span className={`px-2 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
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
      <footer id="waitlist" className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-manrope text-zinc-900 dark:text-white mb-4 tracking-tight">
            Don't Miss the Institutional Crypto Revolution
          </h2>
          <p className="text-zinc-500 mb-8">Stay ahead with the latest news, insights, and analysis on institutional adoption.</p>
          <form
            action="https://enterpriseonchain.substack.com/api/v1/free?nojs=true"
            method="post"
            target="hidden_iframe2"
            onSubmit={showThankYou}
            className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto mb-6"
          >
            <input
              type="email"
              name="email"
              placeholder="name@organization.com"
              required
              className="flex-1 h-11 px-4 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all"
            />
            <button
              type="submit"
              className="h-11 px-6 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap"
            >
              Join Free
            </button>
          </form>
          <iframe name="hidden_iframe2" style={{ display: 'none' }} />
          <p className="text-sm text-zinc-500 mb-16">
            <strong className="text-zinc-700 dark:text-zinc-300">9,000+</strong> executives already subscribed
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="mb-4 md:mb-0">© 2025 Enterprise Onchain. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Contact
              </a>
              <div className="flex items-center gap-4 ml-2">
                <a href="https://www.youtube.com/@enterpriseonchain" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
                <a href="https://x.com/enteronchain?s=20" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/enterpriseonchain/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://enterpriseonchain.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Exit Popup */}
      {isPopupOpen && (
        <div className="popup-overlay active fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && setIsPopupOpen(false)}>
          <div className="popup-content bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-600 dark:text-emerald-400">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Don't miss out!</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">Join 9,000+ executives staying ahead of institutional crypto adoption.</p>
              <form
                action="https://enterpriseonchain.substack.com/api/v1/free?nojs=true"
                method="post"
                target="hidden_iframe3"
                onSubmit={showThankYou}
                className="flex flex-col gap-3 w-full"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="name@organization.com"
                  required
                  className="h-11 px-4 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all w-full"
                />
                <button type="submit" className="h-11 px-6 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors w-full">
                  Join Free
                </button>
              </form>
              <iframe name="hidden_iframe3" style={{ display: 'none' }} />
              <p className="text-xs text-zinc-400 mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
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
        .delay-100 {
          transition-delay: 100ms;
        }
        .delay-200 {
          transition-delay: 200ms;
        }
        .delay-300 {
          transition-delay: 300ms;
        }
        .delay-400 {
          transition-delay: 400ms;
        }
        .popup-overlay {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .popup-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        .popup-content {
          transform: scale(0.9) translateY(20px);
          transition: transform 0.3s ease;
        }
        .popup-overlay.active .popup-content {
          transform: scale(1) translateY(0);
        }
      `}</style>
    </>
  )
}
