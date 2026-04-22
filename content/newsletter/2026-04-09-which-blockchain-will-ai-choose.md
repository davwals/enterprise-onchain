---
title: "Which Blockchain Will AI Choose?"
subtitle: "Enterprise Onchain"
date: 2026-04-09
slug: which-blockchain-will-ai-choose
tags: [Stablecoins]
substack_url: https://enterpriseonchain.substack.com/p/which-blockchain-will-ai-choose
---

Autonomous AI agents will need to find one another, pay one another, and decide whether to trust one another, all without a human in the loop.

Davide Crapis, the AI lead at the Ethereum Foundation, talked about this on the Defi Dad podcast recently. The question Crapis keeps coming back to is one that most people in payments haven’t fully internalized yet:

*If AI agents need to move money, discover services, and trust counterparties without asking a human for permission, what infrastructure will they actually run on?*

![](https://substack-post-media.s3.amazonaws.com/public/images/305a8496-515c-42fb-99f4-76675b8cda71_900x650.png)

**The rational agent problem**

Crapis’s central claim is simple: AI agents are rational economic actors. They will always choose the tools and infrastructure that let them execute tasks most efficiently. If you accept that premise, you can derive most of what follows.

Today’s agents are limited. An autonomous agent instance wakes up every hour to run API calls and make micro-decisions. Early experiments with this pattern failed not because the reasoning was flawed, but because the agents burned through too many API tokens too quickly. They were economically unviable. The bottleneck wasn’t intelligence. It was a payment infrastructure.

Credit cards don’t work for this. An AI agent executing 10,000 microtransactions per day across 50 countries can’t maintain a bank account, manage chargebacks, or navigate the per-merchant setup required by traditional rails. The architecture assumed a human on one end of every transaction. That assumption is broken.

This is where Crapis’s framework gets interesting. He breaks the nebulous concept of an “agent economy” into three solvable engineering problems: payments, discovery, and trust.

**Payments:** how do agents compensate each other for services?

**Discovery:** How does agent A find agent B in the first place?

**Trust:** once found, how does agent A know agent B won’t take the money and deliver garbage?

Each of these has an answer now under active development.

![](https://substack-post-media.s3.amazonaws.com/public/images/f3397af1-5dc7-4f3d-a211-146d164d96b9_1226x682.png)

For payments, the most prominent open protocol is x402. Coinbase launched it in May 2025, reviving the long-dormant HTTP status code 402 (”Payment Required”) as a machine-readable payment gate baked directly into web requests. A server responds with a 402 status code and payment terms. The client constructs a stablecoin payment, resends the request with a payment header, and the server verifies settlement on-chain. No subscription tiers, no billing cycles, no merchant onboarding.

By December 2025, Coinbase reported that x402 had processed over 100 million payments. Cloudflare co-launched the x402 Foundation in September. Stripe began testing machine payments using x402 on Base in February 2026. Google Cloud’s Agent Payments Protocol (AP2) uses x402 as one extension for on-chain settlement, though AP2 itself is payment-agnostic and supports cards, bank transfers, and stablecoins.

The numbers demand some honesty, though. A CoinDesk analysis published today reports that x402’s daily volume sits around $28,000, with an average payment of roughly $0.20. An Artemis analyst called the agent payments boom “still mostly a mirage” in February, estimating that about half of observed x402 transactions reflect testing or gamified activity rather than genuine commerce. The gap between the protocol’s backing (Coinbase, Cloudflare, Stripe, Google) and its actual throughput is wide.

Although this is very early, in my opinion, not much can be found in the volume yet.

x402 solves a structural problem that card networks were never designed to address: sub-cent, high-frequency payments. If agent commerce scales even modestly, the infrastructure needs to already exist. You don’t build highways after traffic appears.

For identity and trust, the answer is ERC-8004. Proposed in August 2025 by co-authors from MetaMask, the Ethereum Foundation, Google, and Coinbase, ERC-8004’s registry contracts deployed to Ethereum mainnet on January 29, 2026 (the standard itself remains in Draft status, still undergoing peer review). It defines three lightweight on-chain registries: identity (each agent gets an ERC-721 token serving as a portable, censorship-resistant ID), reputation (a standard interface for posting and fetching feedback), and validation (hooks for independent third-party verification of agent work).

Crapis describes it like a passport system for machines.  
  
ERC-8004 isn't only for agents.   
  
The registry also covers agentic services, APIs and tools that aren't autonomous agents themselves but are built specifically for agents to consume. A price feed, a compute endpoint, a data verification service. These don't make decisions on their own, but they're essential infrastructure that agents need to discover and evaluate. The registry treats both the same way: by registering, advertising capabilities, and building a track record.

An agent registers, advertises its capabilities and endpoints, and builds a track record over time. Other agents can look up that track record before transacting. The registries can be deployed on any L2 or on mainnet, with the vision that more sophisticated scoring and cross-chain aggregation will happen through ecosystem services built on top. Payment history from x402 transactions could feed into reputation over time, though the two protocols are designed as complementary layers rather than tightly coupled systems.

Over 2,000 community members discussed the proposal on the Ethereum Magicians forum within three weeks. More than 75 projects were involved. In the first two to three days after the registries were deployed, more than 20,000 agent registrations appeared (many of them tests, Crapis acknowledged on the Bankless podcast). Between one and two thousand builders have joined development groups since the specification was published.

ERC-8004 is now confirmed to expand to Base, Coinbase’s Layer 2, with BNB Chain also publishing support messaging in February 2026.

**Why Ethereum?**

Crapis’s argument for Ethereum specifically, rather than blockchain generically, turns on a framework he calls risk-adjusted chain selection.

Right now, agents prioritize low fees. If an agent needs to make ten trades a minute, it lives on Solana or Base, where the cost per transaction is negligible. This is fine for small stakes, the equivalent of letting an agent manage a $200 budget for API calls. But Crapis argues that as agents are trusted with meaningful capital (thousands, eventually millions of dollars), the calculus shifts. Agents will factor in counterparty risk, security guarantees, and decentralization. High-stakes agent commerce will require the kind of battle-tested, maximally decentralized settlement that Ethereum Layer 1 provides.

Think of it like a startup choosing between a checking account at a neobank and custody at a prime broker. For petty cash, you optimize for convenience. For institutional capital, you optimize for security. The chain selection follows the same logic.

Crapis frames the strategy in defensive terms: rather than building bigger models, Ethereum focuses on the cryptographic guarantees, zero-knowledge proofs, and sovereign environments that let users interact with highly capable AI without surrendering control of their assets or data. The heavy compute stays off-chain, on traditional servers.

But the identity, reputation, payments, and cryptographic proofs that anchor trust between agents? Those live on Ethereum.

As Crapis put it in a recent CoinDesk interview: “In a world where AI is in the wild, we want Ethereum to be the place with the big lock.”

This is as much a philosophical bet as a technical one. If the AI economy runs through centralized chokepoints (OpenAI’s infrastructure, Google’s agent registry, a single company’s payment rails), then whoever controls the choke point sets the terms. The Ethereum bet is that neutral, permissionless infrastructure will attract agents the same way the open internet attracted developers: not because it was the easiest option, but because no one could unilaterally change the rules.

![](https://substack-post-media.s3.amazonaws.com/public/images/c584d35a-1bdb-43ec-8c3b-c1c50ead0eae_1204x716.png)

**The agent numbers**  
  
The scale of what’s already happening is easy to miss if you’re only tracking token prices.

State of Agents 2026, the most comprehensive report on the onchain agent economy, tallies over 140 million transactions and $43 million in volume from AI agents operating on blockchain rails. Those numbers are tiny relative to traditional payments, but they represent a category that barely existed 18 months ago. The report tracks how agents are building what amounts to a parallel financial infrastructure: discovering services, executing micropayments, and accumulating on-chain track records, all programmatically.

The broader AI-crypto market has expanded from roughly $14 billion in late 2024 to an estimated $20-39 billion by mid-2025, with projections of $47 billion by 2034. VC funding for AI-related crypto deals accounted for 37% of total crypto investments in 2024-2025.

METR, a nonprofit focused on measuring autonomous AI capabilities, tracks what they call “task-completion time horizons”: the length of task (measured by how long it takes human professionals) that an AI agent can complete with 50% reliability. That metric has been doubling approximately every seven months since 2019. As of early 2025, frontier models had a 50% time horizon of around 50 minutes. If the trend holds, agents capable of sustaining autonomous work across multi-hour and eventually multi-day tasks are not far off.

The implication for financial infrastructure is direct. Agents that can work for hours or days without human oversight will generate orders of magnitude more transactions than today’s supervised systems.

Each of those transactions needs settlement. According to LangChain’s State of Agent Engineering survey of 1,300 professionals, 57% of respondents already have agents in production. The challenge has shifted from “should we build agents” to “how do we deploy them reliably at scale.”

Meanwhile, the competitive field for agent payment infrastructure is filling up. Chainlink has built the CRE (Chainlink Runtime Environment) as an orchestration layer connecting agents to external APIs and on-chain smart contracts. Visa launched its Trusted Agent Protocol for cryptographic agent recognition. PayPal partnered with OpenAI to enable agent-initiated checkout in ChatGPT. Stripe’s machine payments preview uses x402 on Base for USDC settlement.

The question of which blockchain AI agents will choose may end up being less binary than the podcast title suggests. Agents will likely be multi-chain by default, using cheap L2s for high-frequency microtransactions and Ethereum L1 for high-stakes settlement, the same way companies today use different banks for different purposes.

**The gap**

x402 has serious backing and an elegant design, but its daily volume would barely register as a rounding error at Visa. ERC-8004’s registries are deployed on mainnet but most of its 20,000+ registrations are tests. The stablecoin industry is positioning agentic payments as the use case that justifies the entire infrastructure buildout, but as one payments analyst told Bloomberg, projections of agentic commerce reaching 20% of e-commerce are “kind of aggressive.”

Crapis himself acknowledged on the DeFi Dad podcast that the current agent economy is still in its infrastructure-building phase, having graduated from the meme-coin hype of Phase 1 into Phase 2. The legitimate teams (Eliza OS, Virtuals, the projects building on ERC-8004) survived the speculation and are now building. But the revenue-generating applications, the ones where agents conduct real commerce at meaningful scale, haven’t arrived yet.

The counterargument to all of this remains the simplest one: centralized AI giants could build walled-garden agent economies that simply work better for most users. If OpenAI builds internal fiat payment rails and an App Store for agents, the frictionless user experience might outcompete decentralized alternatives regardless of the philosophical tradeoffs. Most businesses, given the choice between “ideologically correct infrastructure” and “the thing that just works,” will choose the latter.

But markets are starting to price this in, even if clumsily. In late February, a speculative Substack post by Citrini Research, modeling a scenario where AI agents route around card interchange fees to settle in stablecoins, became one of several catalysts in a broad selloff that dragged Visa, Mastercard, and AmEx down 4-7% in a single session. The post was explicitly framed as a thought exercise, not a prediction, and the selloff had other contributors (Anthropic’s Claude Code COBOL announcement, a Nassim Taleb warning about software bankruptcies). But the underlying logic resonated: if software controls the transaction, software optimizes for cost. And stablecoin rails are cheaper than interchange.

Circle’s CEO argued on the company’s February earnings call that stablecoins could become the native currency of machine-to-machine commerce. Stripe, with Paradigm, raised $500 million for Tempo, a blockchain built specifically for stablecoin payments. Bloomberg reported this month that both companies are racing to build payment systems for a world that doesn’t yet exist.

Whether Ethereum specifically wins this race, or whether a patchwork of L2s, Solana, and purpose-built chains like Stripe’s Tempo absorb the volume, is genuinely unclear.

What’s becoming harder to argue is that the architecture of internet payments can remain unchanged in a world where the buyer is no longer human.

---

[Follow Us on LinkedIn](https://www.linkedin.com/company/enterpriseonchain/)

**Contact Us**

Want to sponsor? Reach out to us at our contact form [here](https://link.sbstck.com/redirect/666a6dfa-c2e4-45e3-8cb9-2c757d4ab113?j=eyJ1IjoiNDRtcDIifQ.4_JeNjZe7A6pZ1lrs0Iqz-3a-XcJMv2d-CHsWiy9nLE).

***Thanks for reading - until next week!***

Until next week,

[James Smith](https://www.linkedin.com/in/jamesmith/)
