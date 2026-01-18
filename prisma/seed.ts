import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create a default user
  const user = await prisma.user.upsert({
    where: { email: 'admin@enterpriseonchain.com' },
    update: {},
    create: {
      email: 'admin@enterpriseonchain.com',
      name: 'Enterprise Onchain',
      role: 'admin',
    },
  })

  console.log('✓ Created user:', user.email)

  // Sample articles
  const articles = [
    {
      slug: 'institutional-adoption-accelerates-2024',
      title: 'Institutional Adoption Accelerates in 2024',
      subtitle: 'Major financial institutions double down on blockchain infrastructure',
      excerpt: 'BlackRock, JPMorgan, and Goldman Sachs lead significant initiatives in tokenization and digital asset infrastructure.',
      category: 'news',
      readTime: 4,
      isFeatured: true,
      coverImage: 'https://i.imgur.com/LJ0gSjb.jpeg',
      content: `
<p>Major financial institutions are accelerating their blockchain adoption strategies in 2024, with BlackRock, JPMorgan, and Goldman Sachs leading significant initiatives in tokenization and digital asset infrastructure.</p>

<p>According to recent data from institutional tracking platforms, over $4.2 billion in real-world assets have been tokenized on Ethereum-based networks, representing a 340% increase from last year.</p>

<p>Industry experts suggest this momentum signals a fundamental shift in how traditional finance views blockchain technology - moving from skepticism to strategic implementation.</p>

<p>The convergence of regulatory clarity and technological maturity has created an environment where institutional players feel confident deploying capital into blockchain-based solutions.</p>

<h2>BlackRock's BUIDL Fund Milestone</h2>

<p>BlackRock's BUIDL fund has reached $500 million in assets under management, marking a significant milestone for tokenized treasury products. The fund, which launched earlier this year, provides institutional investors with exposure to U.S. Treasury bills through blockchain-based tokens.</p>

<p>This achievement demonstrates the growing institutional appetite for tokenized financial products that combine the stability of traditional assets with the efficiency of blockchain settlement.</p>

<h2>JPMorgan's Onyx Expansion</h2>

<p>JPMorgan's Onyx platform processed over $300 billion in transactions this year, demonstrating the growing institutional appetite for blockchain-based settlement infrastructure.</p>

<p>The platform has expanded beyond pilot programs to become a core part of JPMorgan's operational infrastructure, handling real client transactions across multiple asset classes.</p>

<h2>Goldman Sachs Digital Asset Platform</h2>

<p>Goldman Sachs recently announced plans to expand its digital asset platform, focusing on tokenized securities and smart contract-based derivatives. The investment bank is positioning itself as a leader in the convergence of traditional finance and blockchain technology.</p>

<p>Their platform aims to provide institutional clients with seamless access to digital assets while maintaining the regulatory compliance and risk management standards expected from a tier-one financial institution.</p>

<h2>Market Implications</h2>

<p>Industry analysts suggest this institutional momentum could accelerate significantly in 2025 as regulatory clarity improves and more traditional finance firms launch blockchain products.</p>

<p>The infrastructure being built today by these major institutions is laying the groundwork for a future where tokenized assets are a standard part of investment portfolios across all asset classes.</p>

<p>As more firms announce blockchain initiatives and move from pilot programs to production systems, the industry is witnessing a transformation in financial market infrastructure that could reshape global capital markets.</p>
      `,
    },
    {
      slug: 'tokenization-rwa-quarterly-report',
      title: 'Real-World Asset Tokenization: Q4 2024 Report',
      subtitle: 'Breaking down the $4.2B in tokenized assets on-chain',
      excerpt: 'Comprehensive analysis of tokenized treasury bills, real estate, and commodities driving institutional blockchain adoption.',
      category: 'insight',
      readTime: 6,
      isFeatured: true,
      content: `
<p>The tokenization of real-world assets (RWAs) has emerged as one of the most significant use cases for blockchain technology in institutional finance. As of Q4 2024, over $4.2 billion in assets have been tokenized across various categories.</p>

<p>This report provides a comprehensive breakdown of the tokenized asset landscape, examining the key drivers, major players, and future growth projections.</p>

<p>Understanding the current state of RWA tokenization is critical for institutional investors looking to capitalize on this emerging trend.</p>

<p>The data reveals clear patterns in which asset classes are gaining traction and which blockchain networks institutions prefer for tokenization.</p>

<h2>Tokenized Treasury Bills Lead the Way</h2>

<p>U.S. Treasury bills represent the largest category of tokenized assets, accounting for $2.8 billion or approximately 67% of all tokenized RWAs. This dominance reflects institutional preference for starting with the most liquid and stable asset class.</p>

<p>Major providers include BlackRock's BUIDL fund ($500M), Franklin Templeton's BENJI ($380M), and Ondo Finance's OUSG ($280M). These products offer institutional investors yield on short-term government debt with the added benefits of 24/7 settlement and programmability.</p>

<h2>Tokenized Real Estate</h2>

<p>Real estate tokenization has grown to $850 million, with projects ranging from commercial properties to residential developments. This category has seen particular growth in markets where traditional real estate investment faces high barriers to entry.</p>

<p>The ability to fractionalize ownership and provide liquidity to traditionally illiquid assets has attracted both institutional and retail investors to tokenized real estate products.</p>

<h2>Commodities and Carbon Credits</h2>

<p>Tokenized commodities, including gold and carbon credits, represent $450 million in on-chain value. This category is expected to see significant growth as sustainability-focused investors seek transparent tracking of carbon offset purchases.</p>

<h2>Infrastructure Preferences</h2>

<p>Ethereum remains the dominant blockchain for institutional tokenization, hosting approximately 75% of all tokenized RWAs. Its mature ecosystem of institutional-grade infrastructure providers and regulatory familiarity make it the preferred choice for traditional finance firms.</p>

<p>Layer 2 solutions and private blockchain networks are gaining traction for specific use cases where transaction costs or privacy requirements favor alternative infrastructure.</p>

<h2>Looking Ahead to 2025</h2>

<p>Industry projections suggest tokenized RWAs could reach $15-20 billion by the end of 2025, driven by increasing regulatory clarity, expanding product offerings, and growing institutional adoption.</p>

<p>The infrastructure being built today is laying the foundation for a future where tokenized assets are a standard component of institutional portfolios across all major asset classes.</p>
      `,
    },
    {
      slug: 'enterprise-blockchain-podcast-episode-12',
      title: 'Podcast: Building Institutional Infrastructure with Circle',
      subtitle: 'Episode 12 - Conversation with Jeremy Allaire, CEO of Circle',
      excerpt: 'Deep dive into stablecoin infrastructure, USDC adoption, and the future of programmable money with Circle CEO Jeremy Allaire.',
      category: 'podcast',
      readTime: 3,
      content: `
<p>In this episode of the Enterprise Onchain Podcast, we sit down with Jeremy Allaire, CEO of Circle, to discuss the evolution of stablecoin infrastructure and its role in institutional finance.</p>

<p>Circle's USDC has become the second-largest stablecoin by market capitalization, with over $35 billion in circulation and growing adoption among institutional users.</p>

<p>This conversation covers the technical infrastructure powering USDC, regulatory developments, and Circle's vision for programmable money.</p>

<p>Listen to learn how traditional finance institutions are integrating stablecoins into their operations and what this means for the future of money movement.</p>

<h2>Episode Highlights</h2>

<p><strong>USDC Infrastructure [00:08:30]</strong> - Jeremy explains the technical architecture behind USDC issuance and redemption, including the real-time attestations that provide transparency into reserve backing.</p>

<p><strong>Institutional Adoption [00:18:45]</strong> - Discussion of how major financial institutions are integrating USDC for cross-border payments, treasury management, and settlement operations.</p>

<p><strong>Regulatory Framework [00:32:15]</strong> - Jeremy shares insights on working with regulators globally and Circle's approach to compliance in different jurisdictions.</p>

<p><strong>Programmable Money [00:45:20]</strong> - Exploring the concept of programmable money and how smart contract integration enables new financial products and services.</p>

<p><strong>Future of Stablecoins [00:58:00]</strong> - Jeremy's vision for how stablecoins will evolve over the next 5-10 years and their role in the broader financial system.</p>

<h2>Key Takeaways</h2>

<p>Institutional adoption of stablecoins is accelerating as firms recognize the efficiency gains in payment processing and settlement. The ability to move value 24/7 with near-instant settlement is transforming how businesses think about treasury operations.</p>

<p>Regulatory clarity is improving in major markets, with frameworks emerging that provide institutions confidence in compliance when using stablecoins.</p>

<p>The integration of stablecoins with smart contracts enables entirely new categories of financial products that weren't possible with traditional payment rails.</p>

<h2>Listen Now</h2>

<p>Available on Spotify, Apple Podcasts, and YouTube. Subscribe to never miss an episode of the Enterprise Onchain Podcast.</p>
      `,
    },
    {
      slug: 'blockchain-engineer-jpmorgan',
      title: 'Job: Senior Blockchain Engineer - JPMorgan Onyx',
      subtitle: 'New York, NY • Full-time • $180k-$250k',
      excerpt: 'Join JPMorgan\'s Onyx blockchain platform team building the future of institutional settlement infrastructure.',
      category: 'jobs',
      readTime: 2,
      content: `
<p>JPMorgan's Onyx blockchain platform is seeking an experienced Senior Blockchain Engineer to join our team building institutional-grade blockchain infrastructure.</p>

<p>Onyx has processed over $300 billion in transactions and continues to expand its capabilities across multiple asset classes and use cases.</p>

<p>This role offers the opportunity to work on production blockchain systems used by major financial institutions globally.</p>

<p>You'll be working with cutting-edge blockchain technology while maintaining the rigorous standards expected in traditional finance.</p>

<h2>About the Role</h2>

<p>As a Senior Blockchain Engineer on the Onyx platform team, you will design and implement core blockchain infrastructure components used for institutional settlement and tokenization.</p>

<p>You'll work closely with traders, operations teams, and other technologists to ensure the platform meets the demanding requirements of enterprise users.</p>

<h2>Key Responsibilities</h2>

<ul>
<li>Design and develop smart contracts for institutional use cases including tokenization, settlement, and collateral management</li>
<li>Build and maintain blockchain infrastructure supporting high-value financial transactions</li>
<li>Implement security best practices and conduct code reviews to ensure system integrity</li>
<li>Collaborate with compliance and legal teams to ensure regulatory compliance</li>
<li>Optimize system performance and scalability to handle growing transaction volumes</li>
<li>Contribute to architecture decisions for new blockchain-based products and services</li>
</ul>

<h2>Required Qualifications</h2>

<ul>
<li>5+ years of software engineering experience, with 2+ years focused on blockchain development</li>
<li>Strong proficiency in Solidity and Ethereum development tools</li>
<li>Experience with production smart contract deployment and management</li>
<li>Understanding of blockchain security best practices and common vulnerabilities</li>
<li>Familiarity with financial markets and institutional trading operations</li>
<li>Bachelor's degree in Computer Science or related field</li>
</ul>

<h2>Preferred Qualifications</h2>

<ul>
<li>Experience with private/permissioned blockchain networks (Quorum, Hyperledger)</li>
<li>Knowledge of tokenization standards and protocols</li>
<li>Understanding of regulatory requirements for financial institutions</li>
<li>Contributions to open-source blockchain projects</li>
<li>Advanced degree in Computer Science or related field</li>
</ul>

<h2>Compensation & Benefits</h2>

<p>Base salary range: $180,000 - $250,000, with additional performance-based bonuses. Comprehensive benefits package including health insurance, 401(k) matching, and equity participation.</p>

<h2>How to Apply</h2>

<p>Submit your resume and GitHub profile to blockchain-careers@jpmorgan.com with subject line "Senior Blockchain Engineer - Onyx".</p>

<p>JPMorgan Chase is an equal opportunity employer committed to diversity and inclusion in the workplace.</p>
      `,
    },
    {
      slug: 'ethereum-layer2-institutional-guide',
      title: 'Deep Dive: Layer 2 Solutions for Institutional Use Cases',
      subtitle: 'Evaluating Arbitrum, Optimism, Base, and Polygon for enterprise deployment',
      excerpt: 'Comprehensive technical analysis of Layer 2 scaling solutions and their suitability for institutional blockchain applications.',
      category: 'deep-dive',
      readTime: 12,
      isFeatured: false,
      content: `
<p>Layer 2 scaling solutions have emerged as critical infrastructure for institutions looking to deploy blockchain applications at scale. This deep dive examines the major Layer 2 networks and evaluates their suitability for different institutional use cases.</p>

<p>As transaction costs on Ethereum mainnet can be prohibitive for high-frequency applications, Layer 2s offer a path to scaling while maintaining security and decentralization.</p>

<p>Understanding the tradeoffs between different Layer 2 approaches is essential for architects designing institutional blockchain systems.</p>

<p>This analysis focuses on the technical architecture, security models, and operational considerations relevant to institutional adoption.</p>

<h2>Overview of Layer 2 Approaches</h2>

<p>Layer 2 solutions fall into several categories: optimistic rollups, zero-knowledge rollups, validiums, and hybrid approaches. Each has different tradeoffs regarding security, performance, and complexity.</p>

<p>Optimistic rollups (Arbitrum, Optimism, Base) assume transactions are valid by default and use a challenge period for fraud proofs. ZK-rollups (zkSync, Starknet, Polygon zkEVM) use zero-knowledge proofs to verify batches of transactions.</p>

<p>For institutional users, the choice of Layer 2 depends on specific requirements around transaction finality, security guarantees, and ecosystem compatibility.</p>

<h2>Arbitrum: Dominant L2 by TVL</h2>

<p>Arbitrum leads Layer 2 networks with over $18 billion in total value locked, making it the largest L2 by market share. Its optimistic rollup design offers high compatibility with Ethereum while significantly reducing transaction costs.</p>

<p>The Arbitrum network uses a unique multi-round fraud proof system that allows for efficient dispute resolution. This design choice provides strong security guarantees while maintaining performance.</p>

<p>For institutions, Arbitrum offers mature infrastructure, extensive DeFi liquidity, and strong developer tools. The network has proven its reliability through over two years of mainnet operation without major security incidents.</p>

<p>Key institutional use cases on Arbitrum include decentralized derivatives trading, lending protocols, and tokenized asset management.</p>

<h2>Optimism and the OP Stack</h2>

<p>Optimism pioneered optimistic rollup technology and has expanded its vision to become a platform for launching customized Layer 2 networks through the OP Stack.</p>

<p>The OP Stack allows institutions to deploy their own Layer 2 chains while inheriting Ethereum's security. This approach is particularly attractive for enterprises requiring dedicated blockchain infrastructure with specific governance or compliance requirements.</p>

<p>Base, launched by Coinbase using the OP Stack, demonstrates the viability of this approach. The network provides Coinbase users with low-cost access to on-chain applications while maintaining strong security guarantees.</p>

<p>For institutions, Optimism offers a proven rollup design with the flexibility to customize chain parameters and governance structures.</p>

<h2>Base: Coinbase's Enterprise L2</h2>

<p>Base represents Coinbase's entry into Layer 2 infrastructure, leveraging the OP Stack to provide users with low-cost access to on-chain applications. The network benefits from Coinbase's distribution and compliance infrastructure.</p>

<p>Base's rapid growth to over $2 billion in TVL demonstrates the value of combining strong distribution with solid technical infrastructure. For institutional users, Base offers seamless integration with Coinbase's regulated exchange and custody services.</p>

<p>The network's focus on consumer and institutional accessibility makes it an attractive platform for applications requiring both retail and institutional participation.</p>

<h2>Polygon: Established Enterprise Adoption</h2>

<p>Polygon has established strong enterprise partnerships and offers multiple scaling solutions including a PoS sidechain and zkEVM rollup. The network's flexibility allows institutions to choose the right solution for their specific requirements.</p>

<p>Polygon's zkEVM brings the benefits of zero-knowledge proofs to Ethereum scaling, offering faster finality compared to optimistic rollups. This can be critical for use cases requiring quick settlement.</p>

<p>Major enterprises including Reddit, Stripe, and Adobe have deployed on Polygon, demonstrating its viability for production systems at scale.</p>

<h2>Security Considerations</h2>

<p>When evaluating Layer 2s for institutional use, security is paramount. Optimistic rollups require a challenge period (typically 7 days) before withdrawals to mainnet are final, while ZK-rollups can offer faster finality through cryptographic proofs.</p>

<p>Institutions must also evaluate the maturity of the bridge contracts connecting L2s to mainnet, as these represent critical security dependencies. Bridge exploits have resulted in hundreds of millions in losses across the industry.</p>

<p>The degree of decentralization in the sequencer (the entity ordering transactions) varies across L2s and impacts censorship resistance and liveness guarantees.</p>

<h2>Operational Considerations</h2>

<p>Running infrastructure on Layer 2s requires different operational expertise compared to Ethereum mainnet. Institutions should evaluate the maturity of node software, availability of RPC providers, and quality of developer tooling.</p>

<p>Transaction finality characteristics differ between L2s and impact application design. Applications requiring fast finality may prefer ZK-rollups, while those optimizing for cost may accept longer finality times.</p>

<p>Ecosystem liquidity is a practical consideration, as fragmentation across L2s can complicate treasury management and user experience. Cross-L2 bridging solutions are improving but add complexity.</p>

<h2>Recommendations for Institutional Deployment</h2>

<p>For most institutional use cases, Arbitrum and Optimism offer the best combination of security, ecosystem maturity, and operational track record. These networks have demonstrated their ability to handle significant value and transaction volume.</p>

<p>Base provides an attractive option for institutions already working with Coinbase, offering tight integration with regulated on/off ramps and custody solutions.</p>

<p>Applications requiring custom governance or compliance features should evaluate deploying their own L2 using the OP Stack or similar infrastructure.</p>

<p>ZK-rollups like Polygon zkEVM and zkSync are worth considering for use cases where fast finality is critical, though these networks are generally less mature than optimistic rollups.</p>

<h2>Looking Forward</h2>

<p>Layer 2 infrastructure is rapidly evolving, with improvements in interoperability, shared sequencing, and proof systems on the roadmap. Institutions should design systems with cross-L2 compatibility in mind.</p>

<p>The trend toward app-specific rollups and customizable L2s suggests a future where institutions can deploy dedicated blockchain infrastructure while maintaining Ethereum's security guarantees.</p>

<p>As this technology matures, Layer 2s will become the primary scaling solution for institutional blockchain applications, combining the security of Ethereum with the performance requirements of enterprise systems.</p>
      `,
    },
  ]

  // Create articles
  for (const article of articles) {
    const created = await prisma.article.upsert({
      where: { slug: article.slug },
      update: {},
      create: {
        ...article,
        authorId: user.id,
        isPublished: true,
        publishedAt: new Date(),
        tags: [],
      },
    })
    console.log('✓ Created article:', created.title)
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
