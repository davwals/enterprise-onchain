---
title: "Sony's Entertainment layer 2 Explored"
subtitle: ""
date: 2025-01-25
slug: sonys-entertainment-layer-2-explored
tags: [Infrastructure]
substack_url: https://enterpriseonchain.substack.com/p/sonys-entertainment-layer-2-explored
---

## Welcome to Enterprise On-Chain

In this issue, we dive into Sony’s groundbreaking Layer 2 (L2) launch, exploring:

- **Why Sony chose an L2** and what it means for their blockchain strategy
- **Plans to revolutionize entertainment** on the blockchain
- **The censorship controversy** sparking debate

“Businesses can make very fine-grained choices around how much control they keep vs. give to users. Whatever rules they choose, those are the rules.” – *Vitalik Buterin on Sony’s bold L2 move*

![](https://substack-post-media.s3.amazonaws.com/public/images/d78094da-0877-41e5-87cc-093b57d8a622_1200x60.jpeg)

*Davos is the week. Today, Robin Vince, CEO of $50 trillion bank BNY Mellon says "digital assets represent a new interesting, innovative technology, which we think could be important to the financial system over the next 10, 20 years.”*

### **Spotlight Story**

**Exploring Soneium: Sony's Bold Step into Web3**

Sony's recent launch of **Soneium**, its Ethereum Layer-2 (L2) blockchain, has ignited significant debate within the Web3 community.

Positioned as a transformative platform for creators and the entertainment industry, Soneium aims to merge blockchain innovation with real-world use cases. Yet, its rollout has not been without controversy.

### **The Vision Behind Soneium**

Sota Watanabe, director of Sony’s blockchain initiative and CEO of Startale, outlined Soneium’s ambitious vision. Built on the **OP Stack**, this L2 balances **transparency**, **decentralization**, and **customizable controls**—a result of two years of intensive research and development.

**Core Goals of Soneium:**

1. **Revolutionizing Royalty Distribution**: Blockchain simplifies and automates royalty payments, ensuring efficiency and transparency. For example, Microsoft has cut royalty costs by 99% using similar systems.
2. **Empowering Creators**: Soneium enables artists to retain intellectual property rights while exploring new monetization avenues.
3. **Driving Web3 Adoption in Asia**: Watanabe emphasizes Asia’s leadership in blockchain innovation and its integration of technology with culture.

![](https://substack-post-media.s3.amazonaws.com/public/images/705c3b05-3aed-493c-bef4-4364087ff8d7_1137x1352.png)

1. **Bridging Technology and Culture**

Sony’s approach avoids terms like “NFT” or “blockchain,” opting for a user-friendly experience.  
  
This strategy seems to be working: **Soneium gained 15 million users within 24 hours of launch.**

Notable blockchain use cases from Sony Music Japan include:

- **NFT Loyalty Programs**: Concert attendees receive exclusive NFTs, rewarding consistent fan support and visualizing loyalty on-chain.
- **Interactive Content Distribution**: Sony Pictures offers NFT-based digital tickets for Amazon Prime Video purchases, bridging entertainment and digital ownership.

### **The Blacklisting Controversy**

Soneium stirred controversy by blocking certain memecoins, citing **intellectual property (IP) infringement** concerns. Critics argue this undermines Ethereum’s decentralization ethos.

"All corporate L2s fall short... Today’s Soneium launch with IP and contract restrictions is a clear example."

*DeFi Ignis*

In response, Watanabe defended the platform’s stance, highlighting Sony’s dual commitment to decentralization and creator rights. The blacklisting decision, he explained, ensures compliance with IP laws and protects creators from exploitation.

Vitalik also stated that this is an excellent example of how layer2s can choose the rules, and a user can choose to interact with them.  
  
Sony released post detailing their response:  
  
*The blacklisting does not freeze user assets; it only affects specific smart contracts on Soneium’s public RPCs. This approach aims to minimize disruption while protecting creator rights.*

*All blacklisting actions at RPC level are temporary and fully reversible. Once compliance is ensured, the restrictions are lifted, and normal functionality is restored.*

*Soneium supports a wide range of creative projects, including memecoins, as part of its vision to empower creators, fans, and developers. However, specific contracts were flagged at launch due to unauthorized use of Intellectual Property (IP). Protecting creators’ rights is central to Soneium’s vision, and this action was taken to safeguard the rightful IP owner.*  
  
*They released: [https://soneium.org/en/suspicious-address](https://soneium.org/en/suspicious-address)* to be transparent and work with developers.

### **How Transactions Can Be Forced Through to Layer 1**

One notable aspect of Soneium, built on the Optimism (OP) stack, is its forced transaction mechanism, which allows users to bypass sequencer censorship. This feature was demonstrated by @donnoh\_eth, who successfully purchased a censored token using this mechanism. Here’s how the process works:

1. **Crafting the Call Data:** The user encoded the transaction details (e.g., token address, swap amount, and deadline) to interact directly with the L2 DEX contract.

   - Tools like ABI encoders and call data decoders were used to format the transaction correctly.

![](https://substack-post-media.s3.amazonaws.com/public/images/7e029ead-b3be-4cb6-9d05-3b48ea939657_1276x1228.png)

1. **Interacting with the OptimismPortal on L1:**

   - The user submitted the crafted transaction to the OptimismPortal smart contract on L1.
   - Key parameters included:

     - **Target Address:** The L2 contract with which to interact.
     - **Value:** The ETH amount to be swapped.
     - **Call Data:** Encoded details of the swap transaction.
2. **Waiting for Execution:** The transaction was processed on L1 and forwarded to L2. Within minutes, it appeared on the Soneium L2 and was visible on trading platforms.

This process demonstrates the censorship resistance of L2 solutions, ensuring user transactions can always be finalized on L1 despite sequencer restrictions.

### **Looking Ahead: The Future of Soneium**

The launch of Soneium reflects a growing trend of corporate involvement in blockchain technology. While the platform’s initial reception has been polarizing, it’s worth considering the broader implications:

1. **Balancing Decentralization and Corporate Interests:** Soneium’s approach highlights the tension between decentralization and IP protection. Its success will depend on its ability to navigate this delicate balance.
2. **Mainstream Adoption through User-Friendly Interfaces:** By avoiding blockchain jargon and focusing on seamless user experiences, Soneium has the potential to attract mainstream users.
3. **Pioneering Web3 Innovation in Entertainment:** With use cases like NFT-based loyalty programs and interactive content, Sony is setting a precedent for how blockchain can enhance the entertainment industry.

### **Final Thoughts**

Soneium’s journey is just beginning. As Sony continues to refine its approach, it will face scrutiny from the Web3 community and traditional entertainment stakeholders. The controversy surrounding its launch serves as a reminder of the challenges and opportunities in bridging corporate innovation with decentralized principles.

What are your thoughts on Soneium? Can corporate Layer-2 solutions coexist with Ethereum’s ethos? Reply to this newsletter and share your perspective.

Ni

### **Curated Resources**

#### Highlights this week:

Here are three high-value resources to help you better understand enterprise blockchain adoption:

1. Stablecoin Market Cap Hits Historic High of $213 Billion
2. Circle (USDC issuer) buys the largest tokenized MMF issuer, Hashnote
3. *[ethereumadoption.com](https://ethereumadoption.com/)* adds a telegram notification
