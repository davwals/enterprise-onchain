'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/layout/Sidebar'

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [exitPopupOpen, setExitPopupOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode
  const [popupShown, setPopupShown] = useState(false)

  useEffect(() => {
    // Check if popup was already shown this session
    if (typeof window !== 'undefined' && localStorage.getItem('exitPopupShown')) {
      setPopupShown(true)
    }

    // Exit intent detection
    const handleMouseOut = (e: MouseEvent) => {
      if (!popupShown && e.clientY < 10 && e.relatedTarget === null) {
        setExitPopupOpen(true)
        setPopupShown(true)
        localStorage.setItem('exitPopupShown', 'true')
      }
    }

    document.addEventListener('mouseout', handleMouseOut)
    return () => document.removeEventListener('mouseout', handleMouseOut)
  }, [popupShown])

  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const showThankYou = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const button = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const input = form.querySelector('input[type="email"]') as HTMLInputElement
    const originalText = button.textContent

    button.textContent = '✓ Subscribed!'
    button.disabled = true
    button.classList.add('bg-emerald-600', 'dark:bg-emerald-600', 'text-white', 'dark:text-white')
    input.value = ''

    setTimeout(() => {
      button.textContent = originalText
      button.disabled = false
      button.classList.remove('bg-emerald-600', 'dark:bg-emerald-600')
    }, 3000)
  }

  return (
    <>
      <style jsx global>{`
        body { font-family: 'Manrope', sans-serif; }

        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
            height: 6px;
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #e4e4e7;
            border-radius: 9999px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #3f3f46;
        }

        /* Grid Pattern */
        .bg-grid-pattern {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
        }
        .dark .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
        }

        /* Building elements for cityscape */
        .building {
            position: absolute;
            bottom: 0;
            background-color: currentColor;
            opacity: 0.1;
        }
        .dark .building {
            opacity: 0.2;
        }

        /* Scroll animations */
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Staggered animation delays */
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
        .delay-600 { transition-delay: 600ms; }
        .delay-700 { transition-delay: 700ms; }

        /* Exit popup animation */
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

      <div className={darkMode ? 'dark' : ''}>
        <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased">
          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          {/* Navigation */}
          <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors md:hidden"
                  aria-label="Open menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
                <img src="https://i.imgur.com/LJ0gSjb.jpeg" alt="Enterprise Onchain" className="w-6 h-6 rounded-full" />
                <span className="text-sm font-semibold tracking-tight">Enterprise Onchain</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                    </svg>
                  )}
                </button>

                <a
                  href="#waitlist"
                  onClick={(e) => {
                    e.preventDefault()
                    setExitPopupOpen(true)
                  }}
                  className="hidden sm:inline-flex h-8 items-center justify-center rounded-md bg-zinc-900 dark:bg-white px-4 text-xs font-medium text-white dark:text-zinc-900 shadow transition-all hover:bg-zinc-700 dark:hover:bg-zinc-200"
                >
                  Join Community
                </a>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <main className="pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-zinc-100 dark:border-zinc-800 relative">
            <div className="absolute inset-0 -z-10 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] dark:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),transparent)]"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="max-w-xl">
                {/* Badges row */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {/* Launch badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Live Now</span>
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl font-manrope text-zinc-900 dark:text-white mb-6 leading-[1.1]">
                  Track Institutional Adoption of Crypto<br />
                  <span className="text-zinc-400 dark:text-zinc-500">in One Place.</span>
                </h1>

                <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-md mb-8 leading-relaxed">
                  Intelligence built for decision makers. Track tokenization, adoption, and regulatory shifts from one place.
                </p>

                {/* Substack Newsletter Form - Hero */}
                <form
                  action="https://enterpriseonchain.substack.com/api/v1/free?nojs=true"
                  method="post"
                  target="hidden_iframe"
                  onSubmit={showThankYou}
                  className="flex gap-2 max-w-sm mb-4"
                >
                  <input type="email" name="email" placeholder="name@organization.com" required className="flex-1 h-10 px-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 placeholder:text-zinc-400 transition-all shadow-sm" />
                  <button type="submit" className="h-10 px-4 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap">
                    Join Free
                  </button>
                </form>
                <iframe name="hidden_iframe" style={{display:'none'}}></iframe>

                {/* Subscriber count badge */}
                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-300 dark:bg-zinc-700 border-2 border-white dark:border-zinc-950"></div>
                    <div className="w-6 h-6 rounded-full bg-zinc-400 dark:bg-zinc-600 border-2 border-white dark:border-zinc-950"></div>
                    <div className="w-6 h-6 rounded-full bg-zinc-500 dark:bg-zinc-500 border-2 border-white dark:border-zinc-950"></div>
                  </div>
                  <span>Join <strong className="text-zinc-900 dark:text-white">8,443</strong> subscribers from leading institutions</span>
                </div>
              </div>

              {/* Right: Chart Graphic */}
              <div className="relative h-64 lg:h-96 w-full bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex items-end justify-center animate-on-scroll">
                {/* Abstract Cityscape */}
                <div className="absolute inset-0 text-zinc-300 dark:text-zinc-700 pointer-events-none">
                  <div className="building" style={{left: '1rem', width: '2rem', height: '6rem'}}></div>
                  <div className="building" style={{left: '3.5rem', width: '3rem', height: '10rem'}}></div>
                  <div className="building" style={{left: '7rem', width: '4rem', height: '8rem'}}></div>
                  <div className="building" style={{left: '12rem', width: '2.5rem', height: '14rem'}}></div>
                  <div className="building" style={{left: '16rem', width: '3.5rem', height: '7rem'}}></div>
                  <div className="building" style={{left: '20rem', width: '5rem', height: '12rem'}}></div>
                  <div className="building" style={{right: '2.5rem', width: '3rem', height: '9rem'}}></div>
                  <div className="building" style={{right: '6rem', width: '4rem', height: '5rem'}}></div>
                  <div className="building" style={{right: '11rem', width: '2rem', height: '11rem'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white dark:from-zinc-950/10 dark:to-zinc-950 opacity-50"></div>
                </div>

                {/* Line Chart SVG */}
                <div className="absolute inset-0 p-8 flex items-end">
                  <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-lg">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.2"></stop>
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="1" strokeDasharray="4"></line>
                    <line x1="0" y1="100" x2="400" y2="100" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="1" strokeDasharray="4"></line>
                    <line x1="0" y1="50" x2="400" y2="50" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="1" strokeDasharray="4"></line>

                    {/* The Line */}
                    <path d="M0,160 Q40,150 80,110 T160,120 T240,80 T320,40 T400,20" fill="url(#chartGradient)" stroke="#10b981" strokeWidth="2" strokeLinecap="round"></path>

                    {/* Data Point */}
                    <circle cx="320" cy="40" r="3" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2"></circle>
                    <rect x="280" y="10" width="80" height="24" rx="4" className="fill-white dark:fill-zinc-800 stroke-zinc-200 dark:stroke-zinc-700" strokeWidth="1"></rect>
                    <text x="320" y="26" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" className="fill-zinc-900 dark:fill-white font-medium">$2.4T TVL</text>
                  </svg>
                </div>
              </div>
            </div>
          </main>

          {/* Trust Bar */}
          <section className="bg-zinc-50/50 dark:bg-zinc-900/30 border-b border-zinc-100 dark:border-zinc-800/50 py-8">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-center text-xs font-medium text-zinc-400 mb-6 uppercase tracking-wider">Trusted by teams at</p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 opacity-60 grayscale">
                <span className="text-lg tracking-tight text-zinc-800 dark:text-zinc-300" style={{fontFamily: 'serif'}}>J.P.Morgan</span>
                <span className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Morgan Stanley</span>
                <span className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Microsoft</span>
                <span className="text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-300">Google</span>
                <span className="text-lg font-semibold tracking-tighter text-zinc-800 dark:text-zinc-300">BARCLAYS</span>
                <span className="text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-300">PwC</span>
              </div>
            </div>
          </section>

          {/* Market Coverage Grid */}
          <section className="bg-white dark:bg-zinc-950 py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12 animate-on-scroll">
                <h2 className="text-2xl font-manrope mb-3 tracking-tight">Market Coverage</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">Covering areas such as:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>, title: 'Institutional Adoption', delay: '100' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="14" y="2" width="8" height="8" rx="1"/><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/></svg>, title: 'Tokenization & RWAs', delay: '200' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6"/></svg>, title: 'Stablecoins', delay: '300' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7"/></svg>, title: 'DeFi', delay: '400' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>, title: 'ETF / ETP Flows', delay: '100' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>, title: 'Staking Info', delay: '200' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>, title: 'L2 Ecosystem', delay: '300' },
                  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18m7-13 3 8a5 5 0 0 1-6 0z"/><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0z"/><path d="M3 21h18"/></svg>, title: 'Regulatory Updates', delay: '400' }
                ].map((card, i) => (
                  <div
                    key={i}
                    onClick={() => setExitPopupOpen(true)}
                    className={`group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 hover:shadow-sm animate-on-scroll delay-${card.delay} cursor-pointer`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-zinc-50 dark:bg-zinc-800 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 flex items-center justify-center mb-4 text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="font-medium text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">{card.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Enterprise Onchain Section */}
          <section id="enterprise" className="py-24 bg-zinc-950 text-white overflow-hidden relative border-y border-zinc-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950 to-zinc-950"></div>
            <div className="absolute inset-0 opacity-5" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%221%22%3E%3Cpath d=%22M3 3v18h18%22/%3E%3C/svg%3E')", backgroundRepeat: 'repeat'}}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

              {/* Left: Text */}
              <div className="animate-on-scroll">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 uppercase">Enterprise Onchain Podcast</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-manrope mb-4 text-white">Enterprise Onchain</h2>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                  Podcast with leaders from the space. Hear directly from executives driving institutional crypto adoption.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://www.youtube.com/@enterpriseonchain" target="_blank" rel="noopener noreferrer" className="h-11 inline-flex items-center justify-center px-6 rounded-lg bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                    Watch
                  </a>
                  <a href="https://open.spotify.com/show/6piY0ttC8ZSgYQX1YRuP36?si=5680061a22954b6b" target="_blank" rel="noopener noreferrer" className="h-11 inline-flex items-center justify-center px-6 rounded-lg border border-zinc-800 bg-zinc-900/50 text-white text-sm font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"/><rect width="6" height="13" x="9" y="2" rx="3"/></svg>
                    Listen
                  </a>
                </div>
              </div>

              {/* Right: Podcast Card Only */}
              <div className="relative animate-on-scroll delay-200">
                <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full"></div>

                <div className="relative">
                  {/* Podcast Card */}
                  <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-md shadow-2xl hover:-translate-y-1 transition-transform duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded">EP. 07</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">Why Traditional Finance is Moving Onchain</h3>
                    <p className="text-xs text-zinc-500 mb-4">Featuring Head of Digital Assets @ Large Bank</p>
                    <div className="flex items-center gap-3">
                      <button className="w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center hover:scale-105 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>
                      </button>
                      <div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-zinc-500 rounded-full"></div>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono">14:20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Live News Monitor Section */}
          <section className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800 py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 animate-on-scroll">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">Live News Monitor</h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Latest institutional crypto news and announcements.</p>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-950 overflow-hidden shadow-sm animate-on-scroll delay-100">
                <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {/* News Item 1 */}
                  <div onClick={() => setExitPopupOpen(true)} className="p-5 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold shrink-0">JPM</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">J.P. Morgan Launches MONY Tokenized Money Market Fund</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">The banking giant announces its first tokenized fund product on Ethereum, targeting institutional investors.</p>
                        <div className="flex items-center gap-3 text-xs text-zinc-400">
                          <span>2 hours ago</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Tokenization</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* News Item 2 */}
                  <div onClick={() => setExitPopupOpen(true)} className="p-5 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold shrink-0">SC</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">Standard Chartered Raises ETH Price Target to $40,000</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">Analysts cite growing institutional adoption and ETF inflows as key drivers for the bullish outlook.</p>
                        <div className="flex items-center gap-3 text-xs text-zinc-400">
                          <span>5 hours ago</span>
                          <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">Research</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* News Item 3 */}
                  <div onClick={() => setExitPopupOpen(true)} className="p-5 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0">MS</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">Morgan Stanley Goes All-In on Crypto</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">The $1.8T bank launches crypto ETFs and announces tokenization wallet.</p>
                        <div className="flex items-center gap-3 text-xs text-zinc-400">
                          <span>Yesterday</span>
                          <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">Adoption</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer / CTA */}
          <footer id="waitlist" className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-12">
            <div className="max-w-2xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-manrope text-zinc-900 dark:text-white mb-4 tracking-tight">Don&apos;t Miss the Institutional Crypto Revolution</h2>
              <p className="text-zinc-500 mb-8">Stay ahead with the latest news, insights, and analysis on institutional adoption.</p>

              {/* Substack Newsletter Form - Footer */}
              <form action="https://enterpriseonchain.substack.com/api/v1/free?nojs=true" method="post" target="hidden_iframe2" onSubmit={showThankYou} className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto mb-6">
                <input type="email" name="email" placeholder="name@organization.com" required className="flex-1 h-11 px-4 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all" />
                <button type="submit" className="h-11 px-6 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap">
                  Join Free
                </button>
              </form>
              <iframe name="hidden_iframe2" style={{display:'none'}}></iframe>

              {/* Subscriber count */}
              <p className="text-sm text-zinc-500 mb-16">
                <strong className="text-zinc-700 dark:text-zinc-300">8,443</strong> executives already subscribed
              </p>

              <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <div className="mb-4 md:mb-0">
                  © 2025 Enterprise Onchain. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                  <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Newsletter</Link>
                  <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
                  <div className="flex items-center gap-4 ml-2">
                    {/* YouTube */}
                    <a href="https://www.youtube.com/@enterpriseonchain" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                    </a>
                    {/* X/Twitter */}
                    <a href="https://x.com/enteronchain?s=20" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/company/enterpriseonchain/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    {/* Mail/Substack */}
                    <a href="https://enterpriseonchain.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          {/* Exit Intent Popup */}
          <div className={`popup-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm ${exitPopupOpen ? 'active' : ''}`}>
            <div className="popup-content bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-zinc-200 dark:border-zinc-800">
              {/* Close button */}
              <button
                onClick={() => setExitPopupOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>

              {/* Content */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                </div>

                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Don&apos;t miss out!</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                  Join 8,443 executives staying ahead of institutional crypto adoption.
                </p>

                {/* Substack Newsletter Form - Popup */}
                <form action="https://enterpriseonchain.substack.com/api/v1/free?nojs=true" method="post" target="hidden_iframe3" onSubmit={showThankYou} className="flex flex-col gap-3 w-full">
                  <input type="email" name="email" placeholder="name@organization.com" required className="h-11 px-4 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all w-full" />
                  <button type="submit" className="h-11 px-6 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors w-full">
                    Join Free
                  </button>
                </form>
                <iframe name="hidden_iframe3" style={{display:'none'}}></iframe>

                <p className="text-xs text-zinc-400 mt-4">No spam. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
