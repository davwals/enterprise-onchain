---
title: "Rain.xyz: The Stablecoin Settlement Layer"
subtitle: "The Startup That Eliminated the Sponsor Bank"
date: 2026-02-26
slug: rainxyz-the-stablecoin-settlement
type: deep-dive
tags: [Tokenisation, Regulation, Stablecoins]
substack_url: https://enterpriseonchain.substack.com/p/rainxyz-the-stablecoin-settlement
---

**DEEP DIVE**

*How Rain became a Visa Principal Member, a status usually held by banks and a small set of highly regulated payments institutions, and turned that into a $1.95B platform that lets any fintech issue stablecoin-powered cards without a single banking relationship.*

*I’ve spent the last few days going down the Rain rabbit hole, and the deeper I got, the more I realised this isn’t a crypto story. It’s a payments infrastructure story that happens to settle on a blockchain. That distinction matters.*

![](https://substack-post-media.s3.amazonaws.com/public/images/cb8d3e56-7c05-4a49-b78f-6b2541bc083e_884x384.png)

*Fair warning: when a company is called Rain, the puns write themselves. I could not help myself. You have been warned.*

# **The Bottom Line**

JPMorgan Chase has 300,000 employees, $4 trillion in assets, and more than 200 years of history. It is one of a small number of banks that sit directly on the Visa network as a Principal Member. This gives it the ability to issue cards, settle transactions, and sponsor other companies’ card programs without any intermediary.

Rain, a startup founded in 2021, now holds that same status.

That alone would be remarkable. But Rain did something even more unusual with that access: it opened it up. Through a single API, any fintech, crypto wallet, neobank, or enterprise can now launch a full Visa card program without a single banking relationship.  
  
One integration. Live in as little as two months (That’s fast). Cards accepted at 150+ million merchants in 150+ countries. And then it settled those transactions in stablecoins.  
  
This translates to Rain using 80% less working capital to run a card program than a traditional setup.

And then it went further.

When someone taps a Rain-powered Visa card at a coffee shop, Visa pays the merchant through the acquiring bank. But Rain, as the card issuer, now owes Visa for that transaction.  
  
Rain must settle that obligation to Visa within the settlement cycle. That means Rain needs working capital. Every card tap creates a liability that Rain must fund.

At $3B+ in annualized volume, that’s a massive, continuous capital requirement. Traditionally, a card issuer would go to a bank and say, “We’re processing $50M a week in Visa transactions, lend us the working capital to cover settlement.”  
  
The lender does due diligence, looks at spreadsheets, trusts your accounting, and lends you the money. It is slow, opaque, and expensive because the lender can’t see in real time what transaction flows are backing their capital.

Rain did something different.  
  
It tokenized its payment flows onchain. Instead of showing lenders a spreadsheet that says “we’re processing $50M a week through Visa,” Rain gives capital providers real-time, blockchain-level visibility into the transaction volumes flowing through its system.

Onchain lenders, including protocols like Huma Finance and Credit Coop, provide USDC to fund Rain’s settlement obligations to Visa. In return, they can see on the blockchain exactly what transaction activity backs their capital, updated in real time. No quarterly audits. No trusting the spreadsheet. Smart contracts manage the capital cycle, automating the flow between lenders, Rain, and Visa settlement.

**The result: cheaper capital.**  
  
When lenders have more visibility and less risk, they charge less. When repayment is automatic, operational overhead drops. That lower cost of capital flows through Rain’s entire business, enabling cheaper card programs for partners, cheaper products for consumers, and potentially credit access in markets that couldn’t get it before.  
  
Think of it as supply chain finance, but transparent, real-time, and programmable. People have tokenized real estate, bonds, and art. But tokenizing live payment flows from the world’s largest card network and using DeFi capital to fund settlement is new.

![](https://substack-post-media.s3.amazonaws.com/public/images/524ca486-8077-4fc5-9f20-3a59596c32b0_1186x640.png)

The underlying activity is not static. It is a continuous stream of commercial transactions flowing through Visa, giving lenders unprecedented visibility into the payment flows backing their capital. It is, as far as we can tell, the first mechanism of its kind.

![](https://substack-post-media.s3.amazonaws.com/public/images/9827e0bc-6ed4-4fc9-8421-ea8aeb156625_1194x638.png)

To understand why, you need to know what it replaces.   
  
If you want to issue a Visa card today, you almost certainly need a **BIN sponsor**: a licensed bank that holds the BIN (Bank Identification Number, the first six to eight digits on a payment card that identify the issuer and route transactions through the network).  
  
The BIN sponsor sits between you and Visa, controls the relationship, charges a per-transaction take rate and layered fees, dictates compliance terms, and can pull out at any time.  
  
We saw this play out painfully across fintech in 2023–2024. The poster child was Synapse Financial Technologies, an Andreessen Horowitz-backed middleware company that connected about 100 fintechs to small banks.

In April 2024, Synapse filed for bankruptcy. In May, it switched off the dashboard that its partner bank used to process transactions.  
  
Overnight, over 200,000 accounts were frozen. People could not pay rent. Could not make mortgage payments. Around $85 million in customer funds went missing.  
  
A bankruptcy judge called it a “hot mess.”  
  
Meanwhile, regulators cracked down hard: Formal enforcement actions tripled, and by early 2024, enforcement actions against fintech partner banks accounted for 35% of all regulatory notices, up from 10% a year earlier.  
  
Unsurprisingly, Enthusiasm for the BIN sponsor model was dampened

The result is a $1.95B company processing $3B+ in annualized volume, with the majority of its new customers not being crypto companies.  
  
They are traditional financial institutions. **Why are they all running to Rain?**  
  
The traditional card issuance hierarchy is a rigid and expensive:

1. **Visa** operates the network and sets the rules.
2. **Principal Members** (major banks) hold BINs and have direct settlement relationships with Visa.
3. **BIN Sponsors** (a subset of Principal Members) rent out their BIN access to fintechs and program managers, charging fees and imposing constraints.
4. **Fintechs** build the consumer-facing products but are entirely dependent on their sponsor bank’s risk appetite, regulatory standing, and willingness to support them.

   ![](https://substack-post-media.s3.amazonaws.com/public/images/efc15ce3-e14d-4108-9104-a3eecb2b6747_1376x752.png)

   This hierarchy creates three critical problems for fintechs.  
     
   First, **cost**: BIN sponsorship commonly adds a per-transaction take rate and layered fees, a significant margin hit at scale.  
     
   Second, **control**: the sponsor bank dictates program terms, can restrict features, and imposes compliance requirements that may not fit the fintech’s business model.  
     
   Third, and most dangerously, **counterparty risk**: if the sponsor bank runs into regulatory trouble, changes strategy, or simply decides that crypto-adjacent programs are too risky, the fintech’s entire card program could be shut down with little notice.

   Rain’s Visa Principal Membership eliminates all three problems. Rain *becomes* the BIN sponsor for its 200+ partner companies.  
     
   A fintech in Latin America, a crypto exchange in Asia, or a gig-economy platform in Africa doesn’t need to find a willing bank. They integrate one API with Rain and get: card issuance (physical and virtual), transaction routing, real-time crypto-to-fiat conversion, compliance and KYC, FX, onchain settlement, Apple Pay and Google Pay support, and dispute/chargeback handling. All from a single partner.

![](https://substack-post-media.s3.amazonaws.com/public/images/384ecdf7-880a-460c-a4bd-76abaaeb7b64_1374x752.png)

This is why Rain’s partner count doubled from 100+ to 200+ in roughly six months, and why Malik (CEO) reports the majority of new sign-ups are now TradFi programs, not crypto-native ones. The value proposition transcends crypto: any company that has struggled with BIN sponsor access, cost, or reliability has a reason to evaluate Rain.

> *The winning infrastructure companies in payments won’t be crypto companies that “add TradFi.” They’ll be payment companies that happen to settle on blockchain rails. Rain doesn’t lead with Blockchain or USDC. It leads with Visa Principal Membership, 200+ partners, and $3B in volume. The blockchain is the engine, not the brand.*

# **Who’s Behind It**

Rain was founded in 2021 by **Farooq Malik (CEO)** and **Charles Yoo-Naut (CTO)**.   
  
They met through the On-Deck Founder Fellowship and started with an entirely different product: a document-generation tool for angel investments called Sign and Wire.

When customers requested USDC payments and settlement happened instantly, rather than the 7–10-day ACH purgatory, the founders had what Malik calls their “aha moment.”   
  
They showed the proof of concept to potential customers, and people asked for the login link within five minutes. As Malik puts it: “Sometimes you just have to be wrong until you’re right.   
  
If you’re confident that you’re directionally correct, you just have to stick around long enough and not die.”

Remember Tiny Speck? I thought not. They built an internal chat tool while making a video game nobody remembers, and are now called Slack.  
  
Rain built a payment rail while making a document tool nobody remembers. The best infrastructure companies are often discovered rather than planned.

Their backgrounds are complementary. Malik served as **Treasurer & Investment Officer at the North American Development Bank**, where he built deep expertise in regulatory frameworks, cross-border transactions, and the painful reality of moving billions of dollars via email, PDF, and wire.   
  
That TradFi fluency proved critical for securing Visa Principal Member status, a process that typically takes years for established banks and is almost unheard-of for a startup.

Yoo-Naut brings the engineering depth. He started as a product manager at **Microsoft**, founded **PlaybookHR (acquired by Intuit)**, and served as a principal engineer on the QuickBooks team. He architected Rain’s multi-chain settlement infrastructure from scratch.

Sapphire Ventures, which led the Series B, described the founding team as the kind “this space desperately needs, one that can navigate both the technical complexity of blockchain infrastructure and the regulatory intricacies of traditional finance.”   
  
Norwest Venture Partners, an investor since the seed stage, noted they’ve been partners since the company “was just an idea and a Notion doc.”

A few details that reveal the culture. Rain stayed at 11 to 15 people for the first two years, scaling to ~75 only when business dynamics required it. They never had a single down quarter, even through Luna, FTX, SVB, and the full bear market.

In one interview, Malik said he hired a dedicated critic, someone whose job was specifically not to say positive things about the business, but to stress-test every assumption.  
  
That kind of discipline is rare in a startup, and it shows in how they navigated the regulatory gray area that killed most of their peers.

## **Company Snapshot**

**Founded -** 2021 (New York, NY)

**Founders -** Farooq Malik (CEO), Charles Yoo-Naut (CTO)

**Employees -** Growing rapidly (”Rainmakers”)

**Valuation** $1.95B (Jan 2026), 17x increase in 10 months

**Total Funding** $338M across Seed, Series A, B, and C

**Key Investors**

ICONIQ (led C), Sapphire (led B), Norwest (led A), Lightspeed, Dragonfly, Bessemer, Galaxy, Coinbase Ventures, Samsung Next, Endeavor Catalyst, FirstMark

**Visa Status -** Principal Member (direct card issuance, no bank sponsor needed)

**Ann. Transaction Vol. -** $3B+ across 200+ partners

**Geographic Reach -** Cards accepted in 150+ countries

**Key Partners -** Western Union, Nuvei, KAST, Wyoming (FRNT stablecoin)

# **Growth Metrics**

The numbers Rain reported at its Series C announcement on January 9, 2026 show a company in hypergrowth:

- **30x** increase in active card base (in 2025)
- **38x** increase in annualized payment volume (in 2025)
- **$3B+** in annualized transaction volume
- **200+** partners signed (up from 100+ at Series B)
- **10x** transaction volume growth between Jan–Aug 2025 alone
- **15x** company growth in the 12 months before Series A (per Norwest)
- Cards operational in **150+ countries** at Visa-accepting merchants

This growth sits within a broader stablecoin tailwind: total stablecoin transaction volume jumped 72% in 2025, hitting $33 trillion according to Artemis Analytics.   
  
USDC led with $18.3 trillion, followed by USDT at $13.3 trillion. Total stablecoin supply now exceeds $290–300 billion.

# **How It Actually Works**

Rain’s core innovation is a proprietary settlement stack that enables Visa card transactions to be interoperable with stablecoins across multiple blockchains. Here’s the flow:

1. **User taps card.** A consumer or business uses a Rain-issued Visa card (physical, virtual, Apple Pay, Google Pay) at any of 150M+ Visa-accepting merchants.
2. **Visa routes the authorization.** The transaction hits Visa’s network and is routed to Rain as the issuer.
3. **Rain queries onchain.** Rain’s system queries the cardholder’s onchain balance across supported blockchains, verifies funds, prevents double-spending, and authorizes the transaction, all in under 200 milliseconds.

   ![](https://substack-post-media.s3.amazonaws.com/public/images/8995e03f-1a51-4463-afad-d160d0f4ba84_1366x718.png)
4. **Merchant gets paid normally.** Visa settles with the merchant acquirer in local fiat as usual. The merchant experience is identical to any other Visa transaction.
5. **Rain settles with Visa in stablecoins.** This is the breakthrough: Rain settles its obligations to Visa using USDC onchain, 7 days a week, 365 days a year, including weekends and holidays. According to Rain, it was the first partner to achieve a fully automated seven-day settlement with Visa.

## **Why Seven-Day Settlement Matters**

Traditional Visa settlement operates on a five-day cycle constrained by banking hours and holidays. The system is, quite literally, under the weather: Cuy Sheffield, Visa’s Head of Crypto, has noted that different countries observe different holidays, creating random gaps when value simply cannot move through the system. Credit risk accumulates during those gaps. Rain’s stablecoin-native settlement delivers a 40% increase in settlement availability, reducing credit risk and dramatically improving capital efficiency.

As Malik put it: stablecoins’ merge money movement and reconciliation into a single digital packet.” Traditional “instant” payments still rely on layered IOUs and pre-funding.   
  
Stablecoins collapse that structure.   
  
Ensuring a transaction “flows into your financial statements, is audit-ready, and GAAP compliant” is the expensive part, and that’s precisely what onchain settlement simplifies.

![](https://substack-post-media.s3.amazonaws.com/public/images/9299129a-594a-4c5f-80cc-d95d91588d5f_1372x734.png)

## **Multi-Chain Architecture**

A critical strategic decision: Rain is **blockchain-agnostic and stablecoin-agnostic**.   
  
Rather than betting on a single chain, they built an omni-chain stack supporting native settlement on multiple networks, including **Ethereum, Base, Polygon, Optimism, Avalanche, Arbitrum, ZKsync, Solana, Stellar, and Tron**.   
  
  
This flexibility proved essential as different markets show a preference for different chains and as Visa expanded support beyond USDC on Ethereum.

One part that excites me the most is Rain's platform has tokenized its card payment flows onchain, enabling more transparent capital management and giving onchain lenders like Huma Finance and Credit Coop direct blockchain-level visibility into the transaction activity backing their capital.

> *Two things I want to flag here. First, chain agnosticism is smart business, but it means Ethereum is one settlement option among many, competing with Solana, Base, and others on speed, cost, and liquidity for each corridor.   
>   
> As Stripe’s Tempo and Circle’s Arc launch purpose-built payment chains, the question of which settlement layer wins enterprise payments volume is genuinely open.   
>   
> Second, the tokenized receivables we described above are the quiet story with the loudest long-term implications. Rain has proved the mechanism works with lenders like Huma Finance and Credit Coop. The next question is whether more DeFi protocols start competing to provide that settlement capital, driving Rain's borrowing costs down even further.   
>   
> If that happens, you are looking at a genuinely new credit market.*

# **Business Model & Revenue**

Rain monetizes through two primary channels:

- **Interchange revenue:** As the card issuer, Rain earns interchange on every transaction processed through its cards. With $3B+ in annualized volume and growing, this is a significant and scaling revenue stream.
- **Subscription/platform fees:** Partners pay for access to Rain’s API-driven platform, which includes card issuance, compliance layers, settlement logic, FX, KYC, and onchain wallet infrastructure.

The model feels structurally similar to Brex or Ramp, but with dramatically lower underlying infrastructure costs thanks to stablecoin rails.

Where traditional card programs require multiple banking partners, pre-funding, and complex correspondent banking relationships, Rain’s stablecoin-native approach eliminates several layers of cost. Malik has emphasized that the hidden working-capital costs embedded in traditional fintech flows (layered IOUs, pre-funding, multi-day settlement float) are drastically reduced when settlement occurs in real time with digital cash.

Exact margin figures are not publicly disclosed. However, the structural advantages are clear:   
  
As a Visa Principal Member, Rain doesn’t pay a sponsoring bank’s per-transaction take rate or layered fees (a meaningful cost for BIN-sponsored programs that can amount to millions per year at Rain’s volume).   
  
  
Stablecoin settlement eliminates pre-funding requirements and reduces working capital needs. The company’s ability to raise $338M at a $1.95B valuation suggests strong unit economics and a path to profitability that investors find compelling.

> ***Back-of-envelope economics (estimates, not disclosed figures):** On $3B annualized volume, if Rain’s net issuer interchange averages 0.7–1.8% (varying by region, debit vs. credit, card-present vs. CNP), that implies $21M–$54M in gross interchange revenue before chargebacks, processing, compliance, and any revenue share to program partners.*
>
> *The sponsor-bank cost headroom they avoid, estimated at $3M–$15M per year at their volume, is either retained as margin or deployed to undercut competitors on pricing.*
>
> *Platform and SaaS fees (compliance workflow, onboarding, risk tooling) likely carry significantly higher gross margins than interchange and become the real profit engine at scale. Interchange scales with spend but has pass-through costs; platform fees are stickier, higher-margin, and price-discriminate by complexity.*

# **What Use Cases Rain Enables:**

Rain is a B2B infrastructure play. Their technology disappears behind consumer-facing products built by their 200+ partners:

- **USD neobanks:** Consumers hold dollar-denominated balances and spend with Visa cards, replacing expensive remittances and volatile local currencies. The term “dollar cards” is entering everyday vocabulary in LatAm.
- **Freelancer payment platforms:** Gig workers earn and hold dollars globally, with instant settlement instead of multi-day wire delays.
- **Enterprise expense management:** Crypto-native companies (exchanges, DAOs, protocols) spend their stablecoin treasuries on real-world expenses like cloud infrastructure, travel, and advertising.
- **Cross-border payroll:** Earned wage access and salary disbursement in markets that previously lacked such capabilities.
- **Traditional finance programs:** Health spending accounts (HSAs/FSAs), commuter benefits, and conventional card programs, all upgraded with 24/7 stablecoin settlement underneath.
- **State-issued stablecoins:** Rain partnered with Wyoming and Avalanche to enable spending of the Frontier Stable Token (FRNT), the first U.S. state-issued stablecoin, anywhere Visa is accepted.

Enterprise partners reportedly include **Western Union, Nuvei, KAST, and Rizon**. Notably, Malik has said that the majority of new customers signing up are now TradFi programs, not crypto-native ones, a powerful signal of mainstream adoption.

# **Rain Is Hard to Replicate**

To summarize Rain’s defensibility. The Visa Principal Membership is the moat that matters most, and historically, that’s been nearly impossible to replicate.   
  
Layer on chain-agnostic architecture, two acquisitions (Uptop for rewards, Fern for FX) that complete the full-stack offering, regulatory licenses across multiple jurisdictions, and emerging closed-loop network effects, and you have an infrastructure position that gets more defensible as it scales.   
  
You can copy the software, but you cannot easily copy the position. For every fintech that didn’t pursue direct licensing when the window was open, *that’s looking like a missed opportunity.*

Malik puts it bluntly: “The only true moat that anybody can really build is a technical moat. A partner moat or a price moat, these are not really moats. If you want to build this and you want to compete with us, you have to relearn all the things that we learned over the last four years and you’d have to speedrun them all.”

One stat that illustrates the structural advantage: Rain’s stablecoin-native settlement reduces the working capital required for a card program by roughly 80% compared to a traditional setup. That’s not an incremental improvement.   
  
That’s a fundamentally different cost structure. And 60% of the programs Rain powers today don’t even look like crypto products. They look like standard dollar payment apps, HSA cards, commuter benefit programs.   
  
The blockchain is completely invisible to the end user, which is exactly how Malik wants it: “Consumers should not have to change their behaviour to facilitate a change in technology infrastructure.”

As Malik said in a recent interview, “Everything that Rain has done has been built for the day after regulatory clarity. And now that that’s here, we’re ready.”

![](https://substack-post-media.s3.amazonaws.com/public/images/cc749993-3e65-44b0-a849-4afa9d7e4327_1348x732.png)

# **Market Context**

Rain sits at the intersection of two massive trends: the $12+ trillion global payments industry and the explosive growth of stablecoins.   
  
Total stablecoin supply has grown from $208 billion in January 2025 to over $300 billion by early 2026, with industry projections pointing to $400 billion by year-end 2026 and potentially $2.8 trillion by 2028.

Cross-border stablecoin payment fees have dropped to as low as 0.5%, compared to traditional remittance costs of 6–7%.

Cuy Sheffield at Visa frames stablecoins as “the first global banking-as-a-service layer”, enabling fintech entrepreneurs to build dollar-denominated products that work in any country, without a single traditional banking relationship.

# **What To Watch**

- **ACH and SEPA integration:** Rain is building connections to U.S. ACH and European SEPA networks through partner banks, bridging stablecoin rails to traditional banking systems.
- **Further M&A:** The company has signaled more acquisitions are coming to deepen the platform stack. With $250M in fresh capital, they have significant firepower.
- **Tokenized bank deposits:** Malik expects the interplay between stablecoins and tokenized bank deposits to be a dominant narrative, and Rain is building to support both.
- **State stablecoin expansion:** Following Wyoming’s FRNT, North Dakota and Nebraska are developing their own state-issued stablecoins. Rain’s existing FRNT partnership positions it as the infrastructure partner of choice.
- **Onchain capital markets:** Rain's model of using DeFi lenders to fund Visa settlement obligations is the groundwork for a broader onchain credit market for payment infrastructure.

# **My Take**

Sapphire Ventures compared Rain to “what Stripe did for online payments: abstracting complexity into elegant APIs and unleashing innovation on top.” I think that’s the right frame, but with one crucial addition. Stripe abstracted away payment processing complexity. Rain abstracts away the *banking relationship itself*.

For hundreds of fintechs, exchanges, and platforms globally, Rain is the answer to the question: “How do I issue Visa cards without spending two years finding a BIN sponsor who’ll work with me?”

That’s why the Visa Principal Membership is the moat that matters most. It’s not just a technical integration. It’s a regulatory and institutional position that takes years to achieve and gives Rain the ability to be the BIN sponsor for an entire ecosystem of companies.   
  
Combined with chain-agnostic architecture, a full-stack platform, 7-day stablecoin settlement, and regulatory readiness across multiple jurisdictions, Rain has built the kind of infrastructure position that becomes increasingly defensible as it scales. Every new partner adds transaction volume. Every new market adds licensing moats. Every new stablecoin integration extends the network.

When Visa’s Head of Crypto says the company may become “a layer two on top of stablecoins as a new settlement network,” Rain is the company actually building that bridge.

The open question, and the one I’ll be watching closely, is whether Rain’s chain-agnostic model wins the infrastructure layer, or whether purpose-built payment chains like Stripe’s Tempo and Circle’s Arc capture the settlement volume directly.   
  
I think onchain payment infrastructure financing will be a standalone asset class within two years. Rain and its lending partners like Huma Finance have the first proof point….

Either way, the BIN sponsor model is being unbundled in real time, and the companies that move fastest into the gap will define the next decade of payments. Rain is currently setting the pace. And when it rains, it pours.

**Enterprise Onchain** covers the institutional adoption of blockchain technology. Subscribe for weekly analysis of enterprise blockchain, stablecoins, tokenization, and onchain infrastructure.

***Thanks for reading***

[James Smith](https://www.linkedin.com/in/jamesmith/)
