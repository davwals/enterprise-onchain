'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/layout/Sidebar'
import { Chart, registerables } from 'chart.js'

// Register Chart.js components
if (typeof window !== 'undefined') {
  Chart.register(...registerables)
}

const newsItems = [
  { ticker: "JPM", tag: "BREAKING", tagColor: "emerald", time: "2 hours ago", title: "J.P. Morgan Launches MONY Tokenized Money Market Fund", desc: "The banking giant announces its first tokenized fund product on Ethereum." },
  { ticker: "SC", tag: "RESEARCH", tagColor: "blue", time: "5 hours ago", title: "Standard Chartered Raises ETH Price Target to $40,000", desc: "Analysts cite growing institutional adoption and ETF inflows." },
  { ticker: "MS", tag: "ADOPTION", tagColor: "purple", time: "8 hours ago", title: "Morgan Stanley Goes All-In on Crypto", desc: "The $1.8T bank launches crypto ETFs and announces tokenization wallet." },
  { ticker: "BLK", tag: "MILESTONE", tagColor: "orange", time: "12 hours ago", title: "BlackRock's BUIDL Fund Surpasses $500M AUM", desc: "The tokenized treasury fund becomes the largest of its kind." },
  { ticker: "SEC", tag: "REGULATORY", tagColor: "red", time: "Yesterday", title: "SEC Signals Openness to ETH Staking ETFs", desc: "New commissioner comments suggest pathway for staking yields." },
  { ticker: "GS", tag: "ADOPTION", tagColor: "purple", time: "Yesterday", title: "Goldman Sachs Expands Digital Assets Trading Desk", desc: "The investment bank doubles headcount in crypto division." },
  { ticker: "FID", tag: "ETF", tagColor: "emerald", time: "Yesterday", title: "Fidelity's FBTC Sees Record $312M Single-Day Inflow", desc: "Bitcoin ETF competition heats up." },
  { ticker: "FT", tag: "TOKENIZATION", tagColor: "blue", time: "2 days ago", title: "Franklin Templeton's BENJI Fund Crosses $400M", desc: "Tokenized money market fund adds 15 new institutional investors." },
  { ticker: "EU", tag: "REGULATORY", tagColor: "red", time: "2 days ago", title: "MiCA Stablecoin Rules Take Effect Across EU", desc: "Circle's USDC becomes first fully compliant stablecoin." },
  { ticker: "CME", tag: "DERIVATIVES", tagColor: "orange", time: "2 days ago", title: "CME Bitcoin Futures Hit Record Open Interest", desc: "Institutional demand pushes open interest past $8B." },
  { ticker: "VIS", tag: "PAYMENTS", tagColor: "purple", time: "2 days ago", title: "Visa Expands Stablecoin Settlement to 10 New Markets", desc: "Payment giant accelerates USDC settlement rollout." },
  { ticker: "SWF", tag: "INVESTMENT", tagColor: "emerald", time: "3 days ago", title: "Norway Sovereign Wealth Fund Discloses Indirect BTC Exposure", desc: "World's largest sovereign fund holds $500M+ in Bitcoin." },
  { ticker: "UBS", tag: "TOKENIZATION", tagColor: "blue", time: "3 days ago", title: "UBS Launches Tokenized Bond on Ethereum", desc: "Swiss bank issues $100M digital bond." },
  { ticker: "CB", tag: "CUSTODY", tagColor: "purple", time: "3 days ago", title: "Coinbase Prime Crosses $200B in Custodied Assets", desc: "Institutional custody platform sees record growth." },
  { ticker: "PYP", tag: "STABLECOIN", tagColor: "orange", time: "3 days ago", title: "PayPal's PYUSD Supply Hits $1B Milestone", desc: "Dollar-backed stablecoin sees rapid adoption." },
  { ticker: "HK", tag: "REGULATORY", tagColor: "red", time: "4 days ago", title: "Hong Kong Approves Retail Crypto ETFs", desc: "SFC greenlights spot Bitcoin and Ethereum ETFs." },
  { ticker: "BNY", tag: "CUSTODY", tagColor: "purple", time: "4 days ago", title: "BNY Mellon Expands Crypto Custody to Ethereum", desc: "World's largest custodian adds ETH support." },
  { ticker: "SBI", tag: "PARTNERSHIP", tagColor: "blue", time: "4 days ago", title: "SBI Holdings Partners with Circle for USDC in Japan", desc: "Japanese financial giant to offer stablecoin services." },
  { ticker: "WF", tag: "ETF", tagColor: "emerald", time: "5 days ago", title: "WisdomTree Files for Multi-Crypto ETF", desc: "Asset manager seeks approval for diversified crypto index." },
  { ticker: "CIT", tag: "CUSTODY", tagColor: "purple", time: "5 days ago", title: "Citi Launches Digital Asset Custody Platform", desc: "Major bank enters crypto custody space." },
  { ticker: "ARK", tag: "RESEARCH", tagColor: "blue", time: "5 days ago", title: "ARK Invest Predicts $1M Bitcoin by 2030", desc: "Cathie Wood's firm releases updated Big Ideas report." },
  { ticker: "SG", tag: "REGULATORY", tagColor: "red", time: "5 days ago", title: "Singapore MAS Finalizes Stablecoin Framework", desc: "Monetary Authority establishes comprehensive regime." },
  { ticker: "DTG", tag: "INFRASTRUCTURE", tagColor: "blue", time: "6 days ago", title: "DTCC Completes Blockchain Settlement Pilot", desc: "Depository Trust clears $1T+ in simulated trades." },
  { ticker: "SWF", tag: "INFRASTRUCTURE", tagColor: "purple", time: "6 days ago", title: "SWIFT Expands Tokenization Interoperability Network", desc: "Banking network adds 20+ institutions." },
  { ticker: "AXA", tag: "INSURANCE", tagColor: "orange", time: "6 days ago", title: "AXA Launches Crypto Insurance Products", desc: "French insurer offers comprehensive coverage." },
  { ticker: "DB", tag: "CUSTODY", tagColor: "purple", time: "1 week ago", title: "Deutsche Bank Receives Crypto Custody License", desc: "German banking giant cleared for EU markets." },
  { ticker: "INV", tag: "ETF", tagColor: "emerald", time: "1 week ago", title: "Invesco Enters Tokenized ETF Race", desc: "Asset manager files for tokenized fund structure." },
  { ticker: "BIS", tag: "RESEARCH", tagColor: "blue", time: "1 week ago", title: "BIS Report: Tokenization Could Transform Finance", desc: "Central bank group highlights $16T opportunity." },
  { ticker: "MC", tag: "PAYMENTS", tagColor: "purple", time: "1 week ago", title: "Mastercard Tests Crypto Credential System", desc: "Payment network pilots blockchain identity." },
  { ticker: "SOC", tag: "TOKENIZATION", tagColor: "blue", time: "1 week ago", title: "Société Générale Issues Digital Green Bond", desc: "French bank tokenizes €100M sustainability bond." },
  { ticker: "FCA", tag: "REGULATORY", tagColor: "red", time: "1 week ago", title: "UK FCA Proposes New Crypto Regime", desc: "Regulator outlines comprehensive framework." },
  { ticker: "NOM", tag: "INFRASTRUCTURE", tagColor: "blue", time: "2 weeks ago", title: "Nomura's Laser Digital Launches Staking", desc: "Japanese bank offers Ethereum staking." },
  { ticker: "STT", tag: "CUSTODY", tagColor: "purple", time: "2 weeks ago", title: "State Street Explores Tokenized Fund Services", desc: "Custodian develops digital infrastructure." },
  { ticker: "OND", tag: "TOKENIZATION", tagColor: "blue", time: "2 weeks ago", title: "Ondo Finance Crosses $300M in Tokenized Treasuries", desc: "DeFi protocol sees institutional demand surge." },
  { ticker: "BR", tag: "CBDC", tagColor: "red", time: "2 weeks ago", title: "Brazil Central Bank Launches DREX Phase 2", desc: "CBDC project expands to tokenized assets." },
  { ticker: "VAN", tag: "ETF", tagColor: "emerald", time: "2 weeks ago", title: "VanEck Reduces Bitcoin ETF Fees to 0.20%", desc: "Fee war intensifies among asset managers." },
  { ticker: "HSBC", tag: "TOKENIZATION", tagColor: "purple", time: "2 weeks ago", title: "HSBC Tokenizes Gold for Hong Kong Investors", desc: "Bank offers blockchain-based gold ownership." },
  { ticker: "G7", tag: "REGULATORY", tagColor: "red", time: "2 weeks ago", title: "G7 Nations Agree on Stablecoin Framework", desc: "Finance ministers coordinate global approach." },
  { ticker: "KKR", tag: "TOKENIZATION", tagColor: "blue", time: "3 weeks ago", title: "KKR Tokenizes Private Equity Fund Stake", desc: "PE giant pilots blockchain secondary trading." },
  { ticker: "RBC", tag: "RESEARCH", tagColor: "purple", time: "3 weeks ago", title: "RBC: Institutional Adoption at Inflection Point", desc: "Canadian bank forecasts accelerating adoption." },
  { ticker: "UAE", tag: "REGULATORY", tagColor: "red", time: "3 weeks ago", title: "UAE Approves Dirham-Backed Stablecoin", desc: "First regulated stablecoin in Gulf region." },
  { ticker: "ABN", tag: "TOKENIZATION", tagColor: "blue", time: "3 weeks ago", title: "ABN AMRO Tests Digital Mortgage Bonds", desc: "Dutch bank pilots tokenized MBS." },
  { ticker: "21S", tag: "ETF", tagColor: "emerald", time: "3 weeks ago", title: "21Shares ETP Assets Surpass $5B", desc: "Swiss crypto ETP provider sees record growth." },
  { ticker: "JPX", tag: "INFRASTRUCTURE", tagColor: "purple", time: "3 weeks ago", title: "Japan Exchange Tests Security Token Trading", desc: "TSE operator pilots digital securities." },
  { ticker: "SCB", tag: "LENDING", tagColor: "orange", time: "1 month ago", title: "Standard Chartered Launches Crypto Lending", desc: "Bank offers BTC and ETH collateralized loans." },
  { ticker: "PWC", tag: "RESEARCH", tagColor: "blue", time: "1 month ago", title: "PwC: 60% of Hedge Funds Now Hold Crypto", desc: "Survey shows sharp increase in allocations." },
  { ticker: "CAL", tag: "PENSION", tagColor: "purple", time: "1 month ago", title: "CalPERS Explores 1% Bitcoin Allocation", desc: "Largest US pension considers crypto exposure." },
  { ticker: "ECB", tag: "CBDC", tagColor: "red", time: "1 month ago", title: "ECB Digital Euro Enters Preparation Phase", desc: "European central bank advances CBDC timeline." },
  { ticker: "CHG", tag: "DERIVATIVES", tagColor: "orange", time: "1 month ago", title: "Cboe Launches ETH Options Trading", desc: "Exchange expands crypto derivatives suite." },
  { ticker: "TET", tag: "STABLECOIN", tagColor: "emerald", time: "1 month ago", title: "Tether Treasury Holdings Exceed $100B", desc: "Largest stablecoin becomes major Treasury holder." }
]

const tagColors: Record<string, string> = {
  emerald: "text-emerald-500",
  blue: "text-blue-500",
  purple: "text-purple-500",
  orange: "text-orange-500",
  red: "text-red-500"
}

export default function TerminalPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    // Initialize charts after component mounts
    const marketCapCtx = document.getElementById('marketCapChart') as HTMLCanvasElement
    const rwaCtx = document.getElementById('rwaChart') as HTMLCanvasElement

    if (marketCapCtx && rwaCtx) {
      // Set Chart.js defaults
      Chart.defaults.color = '#71717a'
      Chart.defaults.borderColor = '#27272a'

      // Market Cap Chart
      new Chart(marketCapCtx.getContext('2d')!, {
        type: 'line',
        data: {
          labels: ['Dec 15', 'Dec 18', 'Dec 21', 'Dec 24', 'Dec 27', 'Dec 30', 'Jan 2', 'Jan 5', 'Jan 8', 'Jan 11', 'Jan 14'],
          datasets: [{
            data: [2.89, 2.95, 3.02, 3.15, 3.08, 3.18, 3.25, 3.31, 3.28, 3.38, 3.42],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { font: { size: 10 } }
            },
            y: {
              grid: { color: '#27272a' },
              ticks: {
                font: { size: 10 },
                callback: (value) => '$' + value + 'T'
              }
            }
          }
        }
      })

      // RWA Chart
      new Chart(rwaCtx.getContext('2d')!, {
        type: 'line',
        data: {
          labels: ['Dec 15', 'Dec 18', 'Dec 21', 'Dec 24', 'Dec 27', 'Dec 30', 'Jan 2', 'Jan 5', 'Jan 8', 'Jan 11', 'Jan 14'],
          datasets: [{
            data: [1.94, 1.98, 2.05, 2.12, 2.15, 2.19, 2.24, 2.28, 2.32, 2.37, 2.41],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { font: { size: 10 } }
            },
            y: {
              grid: { color: '#27272a' },
              ticks: {
                font: { size: 10 },
                callback: (value) => '$' + value + 'T'
              }
            }
          }
        }
      })
    }
  }, [])

  return (
    <div className="bg-zinc-950 text-zinc-100 antialiased min-h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <img src="https://i.imgur.com/LJ0gSjb.jpeg" alt="Enterprise Onchain" className="w-6 h-6 rounded-full" />
              <span className="text-sm font-semibold tracking-tight">Enterprise Onchain</span>
              <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded ml-2">TERMINAL</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 text-sm">
              <a href="#" className="px-3 py-1.5 rounded-md bg-zinc-800 text-white font-medium">Dashboard</a>
              <a href="#" className="px-3 py-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors">News</a>
              <Link href="/blog" className="px-3 py-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors">Newsletter</Link>
              <a href="#" className="px-3 py-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors">Podcast</a>
              <a href="#" className="px-3 py-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors">Data</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Hamburger menu button for mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-zinc-500 hover:text-white transition-colors md:hidden"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <Link href="/" className="text-xs text-zinc-500 hover:text-white transition-colors hidden sm:block">← Back to site</Link>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">DW</div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-14">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-1">gm, James</h1>
            <p className="text-sm text-zinc-400">Here&apos;s what&apos;s happening in institutional crypto today. <span className="text-zinc-500">Jan 14, 2025</span></p>
          </div>

          {/* Metrics grid - 8 cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wide">BTC ETF Flows (24h)</div>
              <div className="text-lg font-mono font-bold text-emerald-500">+$487M</div>
              <div className="text-[10px] text-emerald-500/70">↑ 12.3%</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wide">ETH ETF Flows (24h)</div>
              <div className="text-lg font-mono font-bold text-emerald-500">+$124M</div>
              <div className="text-[10px] text-emerald-500/70">↑ 8.7%</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wide">Crypto Market Cap</div>
              <div className="text-lg font-mono font-bold text-white">$3.42T</div>
              <div className="text-[10px] text-emerald-500/70">↑ 2.1%</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wide">RWA TVL</div>
              <div className="text-lg font-mono font-bold text-white">$2.41T</div>
              <div className="text-[10px] text-emerald-500/70">↑ 0.8%</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wide">Stablecoin Supply</div>
              <div className="text-lg font-mono font-bold text-white">$178B</div>
              <div className="text-[10px] text-zinc-500">ATH</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wide">DeFi TVL</div>
              <div className="text-lg font-mono font-bold text-white">$89.2B</div>
              <div className="text-[10px] text-emerald-500/70">↑ 3.4%</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wide">ETH Staked</div>
              <div className="text-lg font-mono font-bold text-white">28.4%</div>
              <div className="text-[10px] text-zinc-500">34.2M ETH</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
              <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wide">L2 TVL</div>
              <div className="text-lg font-mono font-bold text-white">$42.1B</div>
              <div className="text-[10px] text-emerald-500/70">↑ 5.2%</div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-medium text-white">Crypto Market Cap</div>
                  <div className="text-xs text-zinc-500">Last 30 days</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-mono font-bold text-white">$3.42T</div>
                  <div className="text-xs text-emerald-500">+18.4% MTD</div>
                </div>
              </div>
              <div className="h-48">
                <canvas id="marketCapChart"></canvas>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-medium text-white">Tokenized RWA TVL</div>
                  <div className="text-xs text-zinc-500">Last 30 days</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-mono font-bold text-white">$2.41T</div>
                  <div className="text-xs text-emerald-500">+24.2% MTD</div>
                </div>
              </div>
              <div className="h-48">
                <canvas id="rwaChart"></canvas>
              </div>
            </div>
          </div>

          {/* News feed and sidebar widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* News feed - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between sticky top-0 bg-zinc-900 z-10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-medium">Live News Feed</span>
                    <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">50 stories</span>
                  </div>
                  <span className="text-xs text-zinc-500">Updated 2 min ago</span>
                </div>
                <div className="divide-y divide-zinc-800 max-h-[800px] overflow-y-auto">
                  {newsItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block p-4 hover:bg-zinc-800/50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400 shrink-0">
                          {item.ticker}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs font-mono ${tagColors[item.tagColor]}`}>{item.tag}</span>
                            <span className="text-xs text-zinc-500">{item.time}</span>
                          </div>
                          <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                          <p className="text-xs text-zinc-500 line-clamp-2">{item.desc}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar widgets - 1/3 width */}
            <div className="space-y-6">
              {/* Latest Newsletter */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-zinc-800">
                  <span className="text-sm font-medium">Latest Newsletter</span>
                </div>
                <div className="p-4">
                  <div className="text-xs text-zinc-500 mb-2">Issue #47 • Jan 13, 2025</div>
                  <h3 className="text-sm font-medium text-white mb-3">Morgan Stanley Goes All-In + BlackRock&apos;s BUIDL Hits $500M</h3>
                  <Link
                    href="/blog"
                    className="block w-full text-center text-sm font-medium text-emerald-500 hover:text-emerald-400 py-2 border border-zinc-800 rounded-lg hover:bg-zinc-800/50 transition-colors"
                  >
                    Read Full Issue →
                  </Link>
                </div>
              </div>

              {/* Latest Podcast */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-zinc-800">
                  <span className="text-sm font-medium">Latest Podcast</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-zinc-500">EP. 07</span>
                    <span className="text-xs text-zinc-600">•</span>
                    <span className="text-xs text-zinc-500">32 min</span>
                  </div>
                  <h3 className="text-sm font-medium text-white mb-2">Why Traditional Finance is Moving Onchain</h3>
                  <div className="flex gap-2">
                    <a
                      href="https://www.youtube.com/@enterpriseonchain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs font-medium text-zinc-400 hover:text-white py-2 border border-zinc-800 rounded-lg hover:bg-zinc-800/50"
                    >
                      YouTube
                    </a>
                    <a
                      href="https://open.spotify.com/show/6piY0ttC8ZSgYQX1YRuP36"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs font-medium text-zinc-400 hover:text-white py-2 border border-zinc-800 rounded-lg hover:bg-zinc-800/50"
                    >
                      Spotify
                    </a>
                  </div>
                </div>
              </div>

              {/* Tokenized Treasuries */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-zinc-800">
                  <span className="text-sm font-medium">Tokenized Treasuries</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">BUIDL</span>
                    <span className="text-sm font-mono text-emerald-500">$514M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">BENJI</span>
                    <span className="text-sm font-mono">$412M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">USDY</span>
                    <span className="text-sm font-mono">$318M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">USTB</span>
                    <span className="text-sm font-mono">$124M</span>
                  </div>
                </div>
              </div>

              {/* BTC ETF AUM */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-zinc-800">
                  <span className="text-sm font-medium">BTC ETF AUM</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">IBIT <span className="text-xs text-zinc-600">BlackRock</span></span>
                    <span className="text-sm font-mono text-emerald-500">$21.4B</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">FBTC <span className="text-xs text-zinc-600">Fidelity</span></span>
                    <span className="text-sm font-mono">$12.1B</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">ARKB <span className="text-xs text-zinc-600">ARK</span></span>
                    <span className="text-sm font-mono">$3.2B</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">BITB <span className="text-xs text-zinc-600">Bitwise</span></span>
                    <span className="text-sm font-mono">$2.4B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
