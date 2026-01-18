import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Enterprise Onchain - Institutional Crypto Intelligence',
  description:
    'Weekly newsletter tracking institutional adoption of Ethereum and blockchain technology. Trusted by 9,000+ readers at BlackRock, JPMorgan, McKinsey, and more.',
  keywords: [
    'institutional crypto',
    'enterprise blockchain',
    'Ethereum',
    'tokenization',
    'RWA',
    'stablecoins',
    'DeFi',
  ],
  authors: [{ name: 'Enterprise Onchain' }],
  openGraph: {
    title: 'Enterprise Onchain - Institutional Crypto Intelligence',
    description:
      'Weekly newsletter tracking institutional adoption of Ethereum and blockchain technology.',
    url: 'https://www.enterpriseonchain.com',
    siteName: 'Enterprise Onchain',
    images: [
      {
        url: 'https://i.imgur.com/LJ0gSjb.jpeg',
        width: 1200,
        height: 630,
        alt: 'Enterprise Onchain',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Onchain - Institutional Crypto Intelligence',
    description:
      'Weekly newsletter tracking institutional adoption of Ethereum and blockchain technology.',
    images: ['https://i.imgur.com/LJ0gSjb.jpeg'],
    creator: '@enterpriseonchain',
  },
  icons: {
    icon: 'https://i.imgur.com/LJ0gSjb.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-manrope">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
