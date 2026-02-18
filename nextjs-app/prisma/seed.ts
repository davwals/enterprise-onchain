import { PrismaClient } from '../app/generated/prisma'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  // Create a sample user
  const user = await prisma.user.upsert({
    where: { email: 'author@enterpriseonchain.com' },
    update: {},
    create: {
      email: 'author@enterpriseonchain.com',
      name: 'Enterprise Onchain Team',
    },
  })

  // Create sample articles
  await prisma.article.createMany({
    data: [
      {
        slug: 'jp-morgan-tokenization',
        title: 'J.P. Morgan Launches Tokenized Money Market Fund',
        excerpt: 'The banking giant announces its first tokenized fund product on Ethereum, targeting institutional investors.',
        content: '<p>J.P. Morgan has officially launched MONY, its first tokenized money market fund on the Ethereum blockchain.</p><p>This marks a significant milestone in institutional crypto adoption, as one of the world\'s largest banks enters the tokenization space.</p><p>The fund will provide institutional investors with on-chain access to traditional financial products, combining the security of traditional finance with blockchain efficiency.</p><p>Key features include 24/7 trading, instant settlement, and programmable money capabilities that enable automated compliance and distribution.</p><p>The move signals growing confidence in blockchain technology from traditional financial institutions and could pave the way for broader adoption of tokenized assets.</p>',
        category: 'news',
        isPublished: true,
        publishedAt: new Date(),
        authorId: user.id,
      },
      {
        slug: 'eth-institutional-adoption-2024',
        title: 'Institutional Ethereum Adoption Reaches New Heights in 2024',
        excerpt: 'Major banks and financial institutions are increasingly adopting Ethereum for tokenization and smart contract applications.',
        content: '<p>2024 has been a breakthrough year for institutional Ethereum adoption, with major financial institutions launching blockchain initiatives.</p><p>Morgan Stanley, BlackRock, and Citigroup have all announced significant Ethereum-based projects this quarter.</p><p>The trend toward tokenization of real-world assets (RWAs) continues to accelerate, with over $2 billion in assets now tokenized on Ethereum.</p><p>Key drivers include regulatory clarity, improved infrastructure, and growing demand for 24/7 settlement capabilities.</p><p>Industry analysts predict this trend will continue, with institutional adoption expected to triple by 2025.</p>',
        category: 'insight',
        isPublished: true,
        publishedAt: new Date(Date.now() - 86400000),
        authorId: user.id,
      },
      {
        slug: 'blackrock-buidl-500m',
        title: 'BlackRock\'s BUIDL Fund Surpasses $500M AUM',
        excerpt: 'The world\'s largest asset manager continues to expand its tokenized treasury offerings on Ethereum.',
        content: '<p>BlackRock\'s USD Institutional Digital Liquidity Fund (BUIDL) has crossed the $500 million mark in assets under management.</p><p>Launched earlier this year, BUIDL provides qualified investors with access to tokenized U.S. Treasury securities on the Ethereum blockchain.</p><p>The fund offers instant settlement and 24/7 trading, making it attractive to institutional investors seeking efficient treasury management.</p><p>This milestone demonstrates growing institutional confidence in blockchain technology for traditional asset management.</p><p>BlackRock CEO Larry Fink has called tokenization "the next generation for markets" and a multi-trillion dollar opportunity.</p>',
        category: 'news',
        isPublished: true,
        publishedAt: new Date(Date.now() - 172800000),
        authorId: user.id,
      },
    ],
  })

  console.log('Database seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
