'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/layout/Sidebar'

const metricsData = [
  { id: 'crypto-mcap', label: 'Crypto Market Cap', value: '$3.42T', change: '+5.2%', period: '7d', source: 'CoinGecko' },
  { id: 'eth-mcap', label: 'ETH Market Cap', value: '$385.00B', change: '+3.1%', period: '7d', source: 'CoinGecko' },
  { id: 'eth-staked', label: 'Staked ETH (USD)', value: '$109.44B', subValue: '34.20M ETH', change: '+2.8%', period: '30d', source: 'StakingRewards' },
  { id: 'rwa-tvl', label: 'RWA TVL', value: '$2.41T', change: '+8.5%', period: '30d', source: 'RWA.xyz' },
  { id: 'etf-flows', label: 'ETF Flows (24h)', value: 'BTC +$487M', subValue: 'ETH +$124M', change: '+12.3%', period: '24h', source: 'Bloomberg' },
  { id: 'staking-yield', label: 'Staking Yield', value: '3.75%', subValue: 'APR', change: '+0.15%', period: '7d', source: 'StakingRewards' },
  { id: 'eth-staked-pct', label: 'ETH Supply Staked', value: '28.40%', change: '+1.2%', period: '30d', source: 'Ethereum.org' },
  { id: 'stablecoin-supply', label: 'Stablecoin Supply', value: '$178.00B', change: '+2.3%', period: '30d', source: 'DefiLlama' },
  { id: 'defi-tvl', label: 'DeFi TVL', value: '$89.20B', change: '+1.9%', period: '7d', source: 'DefiLlama' },
  { id: 'l2-tvl', label: 'L2 TVL', value: '$42.50B', change: '+4.7%', period: '7d', source: 'L2Beat' },
  { id: 'active-validators', label: 'Active Validators', value: '1.05M', change: '+0.8%', period: '30d', source: 'Beaconcha.in' },
  { id: 'eth-burned', label: 'ETH Burned (24h)', value: '1,247 ETH', change: '-3.2%', period: '24h', source: 'Ultrasound.money' },
]

const newsItems = [
  { ticker: 'JPM', tag: 'Tokenization', tagColor: 'bg-emerald-900/40 text-emerald-400', title: 'J.P. Morgan Launches MONY Tokenized Money Market Fund on Ethereum', time: '2 hours ago' },
  { ticker: 'SC', tag: 'Research', tagColor: 'bg-blue-900/40 text-blue-400', title: 'Standard Chartered Raises ETH Price Target to $40,000', time: '5 hours ago' },
  { ticker: 'MS', tag: 'Adoption', tagColor: 'bg-purple-900/40 text-purple-400', title: 'Morgan Stanley Launches Crypto ETFs and Tokenization Wallet', time: '8 hours ago' },
  { ticker: 'BLK', tag: 'Funds', tagColor: 'bg-orange-900/40 text-orange-400', title: "BlackRock's BUIDL Fund Surpasses $2B AUM in Record Time", time: '12 hours ago' },
  { ticker: 'GS', tag: 'Trading', tagColor: 'bg-cyan-900/40 text-cyan-400', title: 'Goldman Sachs Expands Digital Asset Trading Desk to Europe', time: '1 day ago' },
  { ticker: 'CITI', tag: 'Infrastructure', tagColor: 'bg-indigo-900/40 text-indigo-400', title: 'Citi Completes First Cross-Border Tokenized Deposit Transfer', time: '1 day ago' },
  { ticker: 'HSBC', tag: 'Custody', tagColor: 'bg-pink-900/40 text-pink-400', title: 'HSBC Launches Institutional Digital Asset Custody Platform', time: '1 day ago' },
  { ticker: 'FT', tag: 'Funds', tagColor: 'bg-orange-900/40 text-orange-400', title: 'Franklin Templeton Tokenizes $300M Government Bond Fund', time: '2 days ago' },
  { ticker: 'UBS', tag: 'Adoption', tagColor: 'bg-purple-900/40 text-purple-400', title: 'UBS Pilots Blockchain-Based Payment System for Wealth Clients', time: '2 days ago' },
  { ticker: 'BNY', tag: 'Custody', tagColor: 'bg-pink-900/40 text-pink-400', title: 'BNY Mellon Reports 300% Growth in Digital Asset Custody AUM', time: '3 days ago' },
  { ticker: 'VIS', tag: 'Payments', tagColor: 'bg-teal-900/40 text-teal-400', title: 'Visa Expands USDC Settlement to 5 New Blockchain Networks', time: '3 days ago' },
  { ticker: 'DB', tag: 'Infrastructure', tagColor: 'bg-indigo-900/40 text-indigo-400', title: 'Deutsche Bank Joins Canton Network for Institutional DeFi', time: '3 days ago' },
  { ticker: 'SOC', tag: 'Research', tagColor: 'bg-blue-900/40 text-blue-400', title: 'Société Générale Issues €10M Digital Green Bond on Ethereum', time: '4 days ago' },
  { ticker: 'FID', tag: 'Staking', tagColor: 'bg-emerald-900/40 text-emerald-400', title: 'Fidelity Adds Ethereum Staking to Institutional Platform', time: '4 days ago' },
  { ticker: 'SWF', tag: 'Adoption', tagColor: 'bg-purple-900/40 text-purple-400', title: 'SWIFT Completes Multi-Asset Tokenized Settlement Pilot', time: '5 days ago' },
]

const tokenizedTreasuries = [
  { name: 'BUIDL', issuer: 'BlackRock', aum: '$2.1B', yield: '5.25%' },
  { name: 'BENJI', issuer: 'Franklin Templeton', aum: '$435M', yield: '5.10%' },
  { name: 'USDY', issuer: 'Ondo Finance', aum: '$315M', yield: '5.30%' },
  { name: 'USTB', issuer: 'Superstate', aum: '$180M', yield: '5.15%' },
]

const etfRankings = [
  { name: 'iShares Bitcoin Trust', ticker: 'IBIT', aum: '$52.8B' },
  { name: 'Grayscale Bitcoin Trust', ticker: 'GBTC', aum: '$22.1B' },
  { name: 'Fidelity Wise Origin BTC', ticker: 'FBTC', aum: '$18.4B' },
  { name: 'ARK 21Shares Bitcoin ETF', ticker: 'ARKB', aum: '$4.8B' },
  { name: 'iShares Ethereum Trust', ticker: 'ETHA', aum: '$3.2B' },
]

export default function TerminalPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    document.documentElement.classList.add('dark')

    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-40 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-4 h-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-zinc-500 hover:text-white transition-colors md:hidden"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <Link href="/" className="flex items-center gap-2">
              <img src="https://i.imgur.com/LJ0gSjb.jpeg" alt="Enterprise Onchain" className="w-6 h-6 rounded-full" />
              <span className="text-sm font-semibold tracking-tight text-white">Enterprise Onchain</span>
            </Link>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-900/40 text-emerald-400 border border-emerald-800/50">
              TERMINAL
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-zinc-500 hidden sm:block">{currentTime}</span>
            <Link href="/" className="text-xs text-zinc-500 hover:text-white transition-colors hidden sm:block">
              ← Back to site
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 pb-12 px-4 max-w-[1600px] mx-auto">
        {/* Metrics Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {metricsData.map((metric) => (
              <div
                key={metric.id}
                className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors"
              >
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-2 font-medium">{metric.label}</div>
                <div className="text-lg font-mono font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                  {metric.value}
                </div>
                {metric.subValue && (
                  <div className="text-xs font-mono text-zinc-400 mb-1" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                    {metric.subValue}
                  </div>
                )}
                <div className="flex items-center justify-between mt-2">
                  <span className={`text-xs font-mono ${metric.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`} style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                    {metric.change}
                  </span>
                  <span className="text-[9px] text-zinc-600">{metric.source}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Charts Section */}
        <section className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-zinc-300">Total Crypto Market Cap</h3>
              <span className="text-[10px] font-mono text-emerald-400" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>$3.42T</span>
            </div>
            <div className="h-48">
              <svg viewBox="0 0 500 180" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="mcapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                <path d="M 0 140 C 40 135, 80 130, 100 125 C 120 120, 140 110, 160 105 C 180 100, 200 95, 220 85 C 240 80, 260 90, 280 80 C 300 70, 320 65, 340 55 C 360 50, 380 45, 400 35 C 420 30, 440 25, 460 20 C 480 18, 500 15, 500 15 L 500 180 L 0 180 Z" fill="url(#mcapGrad)" />
                <path d="M 0 140 C 40 135, 80 130, 100 125 C 120 120, 140 110, 160 105 C 180 100, 200 95, 220 85 C 240 80, 260 90, 280 80 C 300 70, 320 65, 340 55 C 360 50, 380 45, 400 35 C 420 30, 440 25, 460 20 C 480 18, 500 15, 500 15" fill="none" stroke="#10b981" strokeWidth="2" />
                {/* X-axis labels */}
                <text x="0" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Mar</text>
                <text x="85" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>May</text>
                <text x="170" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Jul</text>
                <text x="250" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Sep</text>
                <text x="335" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Nov</text>
                <text x="420" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Jan</text>
                <text x="480" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Feb</text>
              </svg>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-zinc-300">Tokenized RWA TVL</h3>
              <span className="text-[10px] font-mono text-blue-400" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>$2.41T</span>
            </div>
            <div className="h-48">
              <svg viewBox="0 0 500 180" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="rwaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                <path d="M 0 150 C 30 148, 60 145, 100 140 C 140 135, 160 130, 200 120 C 240 110, 260 100, 300 85 C 340 70, 360 55, 400 40 C 440 28, 460 22, 500 15 L 500 180 L 0 180 Z" fill="url(#rwaGrad)" />
                <path d="M 0 150 C 30 148, 60 145, 100 140 C 140 135, 160 130, 200 120 C 240 110, 260 100, 300 85 C 340 70, 360 55, 400 40 C 440 28, 460 22, 500 15" fill="none" stroke="#3b82f6" strokeWidth="2" />
                <text x="0" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Mar</text>
                <text x="85" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>May</text>
                <text x="170" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Jul</text>
                <text x="250" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Sep</text>
                <text x="335" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Nov</text>
                <text x="420" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Jan</text>
                <text x="480" y="175" fontSize="8" fill="#71717a" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>Feb</text>
              </svg>
            </div>
          </div>
        </section>

        {/* Content Grid: News + Sidebar */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* News Feed */}
          <div className="lg:col-span-2 rounded-lg border border-zinc-800 bg-zinc-900/50">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <h3 className="text-sm font-medium text-zinc-300">Live News Feed</h3>
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] text-zinc-500">{newsItems.length} stories</span>
              </span>
            </div>
            <div className="divide-y divide-zinc-800/50 max-h-[600px] overflow-y-auto">
              {newsItems.map((item, idx) => (
                <div key={idx} className="p-4 hover:bg-zinc-800/30 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded bg-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold text-zinc-300 shrink-0" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                      {item.ticker}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-zinc-200 mb-1.5 leading-snug">{item.title}</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${item.tagColor}`}>{item.tag}</span>
                        <span className="text-[10px] text-zinc-600">{item.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Tokenized Treasuries */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50">
              <div className="p-4 border-b border-zinc-800">
                <h3 className="text-sm font-medium text-zinc-300">Tokenized Treasuries</h3>
              </div>
              <div className="divide-y divide-zinc-800/50">
                {tokenizedTreasuries.map((fund, idx) => (
                  <div key={idx} className="p-3 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-mono font-semibold text-white" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>{fund.name}</span>
                      <span className="text-[10px] text-zinc-500 ml-2">{fund.issuer}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono text-white" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>{fund.aum}</div>
                      <div className="text-[10px] text-emerald-400 font-mono" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>{fund.yield} APY</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BTC ETF Rankings */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50">
              <div className="p-4 border-b border-zinc-800">
                <h3 className="text-sm font-medium text-zinc-300">BTC/ETH ETF AUM Rankings</h3>
              </div>
              <div className="divide-y divide-zinc-800/50">
                {etfRankings.map((etf, idx) => (
                  <div key={idx} className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-zinc-600 w-4" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>{idx + 1}</span>
                      <div>
                        <span className="text-xs text-zinc-300">{etf.name}</span>
                        <span className="text-[10px] font-mono text-zinc-500 ml-1.5" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>{etf.ticker}</span>
                      </div>
                    </div>
                    <span className="text-sm font-mono text-white" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>{etf.aum}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Podcast Card */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2" />
                    <rect width="6" height="13" x="9" y="2" rx="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Enterprise Onchain Podcast</h3>
                  <p className="text-[10px] text-zinc-500">Latest episodes</p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/@enterpriseonchain"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 transition-colors"
              >
                Watch on YouTube →
              </a>
            </div>

            {/* Newsletter CTA */}
            <div className="rounded-lg border border-emerald-800/50 bg-emerald-900/10 p-4">
              <h3 className="text-sm font-medium text-white mb-1">Stay ahead of the market</h3>
              <p className="text-[10px] text-zinc-400 mb-3">Join 9,000+ executives getting institutional crypto intelligence.</p>
              <a
                href="https://enterpriseonchain.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-xs text-white font-medium transition-colors"
              >
                Subscribe Free
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 px-4">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
          <span>© 2025 Enterprise Onchain. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://www.youtube.com/@enterpriseonchain" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
            <a href="https://x.com/enteronchain" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
            <a href="https://www.linkedin.com/company/enterpriseonchain/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://enterpriseonchain.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Substack</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
