import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // Create a sample user
  const user = await prisma.user.upsert({
    where: { email: 'author@enterpriseonchain.com' },
    update: {},
    create: {
      email: 'author@enterpriseonchain.com',
      name: 'Enterprise Onchain Team',
    },
  })

  console.log('Created user:', user.email)

  // Create sample articles
  const article1 = await prisma.article.upsert({
    where: { slug: 'jp-morgan-tokenization' },
    update: {},
    create: {
      slug: 'jp-morgan-tokenization',
      title: 'J.P. Morgan Launches Tokenized Money Market Fund',
      excerpt: 'The banking giant announces its first tokenized fund product on Ethereum, targeting institutional investors.',
      content: '<p>J.P. Morgan has officially launched MONY, its first tokenized money market fund on the Ethereum blockchain.</p><p>This marks a significant milestone in institutional crypto adoption, as one of the world\'s largest banks enters the tokenization space.</p><p>The fund will provide institutional investors with on-chain access to traditional financial products, combining the security of traditional finance with blockchain efficiency.</p><p>Industry experts view this as a watershed moment that could accelerate mainstream adoption of blockchain technology in traditional finance.</p><p>The move follows similar announcements from other major financial institutions exploring tokenization of real-world assets.</p>',
      category: 'news',
      isPublished: true,
      publishedAt: new Date('2024-01-15'),
      authorId: user.id,
    },
  })

  const article2 = await prisma.article.upsert({
    where: { slug: 'eth-institutional-adoption-2024' },
    update: {},
    create: {
      slug: 'eth-institutional-adoption-2024',
      title: 'Institutional Ethereum Adoption Reaches New Heights in 2024',
      excerpt: 'Major banks and financial institutions are increasingly adopting Ethereum for tokenization and smart contract applications.',
      content: '<p>2024 has been a breakthrough year for institutional Ethereum adoption, with major financial institutions launching blockchain initiatives.</p><p>Morgan Stanley, BlackRock, and Citigroup have all announced significant Ethereum-based projects this quarter.</p><p>The trend toward tokenization of real-world assets (RWAs) continues to accelerate, with over $2 billion in assets now tokenized on Ethereum.</p><p>Key drivers include regulatory clarity, improved scalability solutions, and growing confidence in the technology\'s security and reliability.</p><p>Analysts predict this trend will continue to accelerate throughout 2024 and beyond.</p>',
      category: 'insight',
      isPublished: true,
      publishedAt: new Date('2024-01-10'),
      authorId: user.id,
    },
  })

  const article3 = await prisma.article.upsert({
    where: { slug: 'stablecoin-regulations-2024' },
    update: {},
    create: {
      slug: 'stablecoin-regulations-2024',
      title: 'New Stablecoin Regulations Reshape the Market',
      excerpt: 'Comprehensive regulatory framework brings clarity to stablecoin issuers and users.',
      content: '<p>Regulators have introduced comprehensive guidelines for stablecoin operations, marking a turning point for the industry.</p><p>The new framework provides clear requirements for reserves, transparency, and consumer protection.</p><p>Major stablecoin issuers have welcomed the clarity, viewing it as essential for institutional adoption.</p><p>Industry participants expect increased institutional participation as regulatory uncertainty diminishes.</p><p>The regulations are expected to serve as a model for other jurisdictions worldwide.</p>',
      category: 'news',
      isPublished: true,
      publishedAt: new Date('2024-01-08'),
      authorId: user.id,
    },
  })

  console.log('Created articles:')
  console.log('  -', article1.title)
  console.log('  -', article2.title)
  console.log('  -', article3.title)

  console.log('\nDatabase seeded successfully!')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
