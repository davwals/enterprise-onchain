---
title: "Tether Is Not a Stablecoin Company (Deep Dive)"
subtitle: "The $10 Billion Machine Nobody Updated Their Mental Model For"
date: 2026-03-26
slug: tether-is-not-a-stablecoin-company
type: deep-dive
tags: [Regulation, Stablecoins]
substack_url: https://enterpriseonchain.substack.com/p/tether-is-not-a-stablecoin-company
---

*Most people’s understanding of Tether is three to five years out of date.*A woman walks into a phone credit kiosk to buy airtime. The kiosk is owned by Tether.  
  
North Carolina, a former White House official, is running a federally regulated stablecoin backed by US Treasuries and custodied by Cantor Fitzgerald. That's also Tether.  
  
A publicly traded agricultural conglomerate just had its board replaced by a company that didn't exist twelve years ago. Also Tether *The crypto press still treats it as a stablecoin issuer with trust issues. The mainstream press still treats it as a possible fraud. Neither frame explains what Tether actually became while everyone was busy arguing about the old version.  
  
What I found is a company that generated over $10 billion in profit last year with just 300 employees, holds more US Treasuries than Germany, and is quietly building a technology conglomerate funded entirely by the interest on other people's dollars.*

This piece is long. It has to be. Tether is operating at a scale that requires you to hold several ideas in your head at once, some of them in tension with each other.  
  
**Context**

Tether reported over $13 billion of profit in 2024 and over $10 billion in 2025. With approximately 300 employees. No external investors. No transaction fees on secondary-market USDT transfers (more on that in a moment).

For context: that’s roughly $33 million in profit per employee per year.

Tether doesn’t monetize ordinary USDT transfers the way card networks do. There are issuer fees for direct minting and redemption (0.1% in some cases, with minimums), but the billions of peer-to-peer and exchange transfers that make up daily USDT volume generate zero revenue for Tether. In 2014, when the company was being designed, they debated whether to take 1 to 10 basis points per transaction, the way Visa and Mastercard do.

They chose zero. Paolo Ardoino, Tether’s CEO, has said in interviews that this was a deliberate decision to prioritize adoption over revenue.

![](https://substack-post-media.s3.amazonaws.com/public/images/65c565e1-f621-4ee4-876d-74d0f186e8ae_2752x1536.png)

The result is a business model that looks nothing like a payments company, even though it functions like one. Tether makes money the same way a money market fund does: it takes in dollars, invests them in short-duration US Treasury bills, and keeps the yield. The difference is that a money market fund passes most of that yield back to its investors. Tether keeps all of it.

As of December 31, 2025, Tether held $122 billion in direct US Treasury positions and $141 billion in total Treasury exposure (including indirect holdings through money market funds and repo agreements). At a ~5% Fed rate, that’s roughly $6-7 billion in baseline yield before accounting for any other income.   
The rest comes from gold (127.5 metric tons in reserves at year-end, with Ardoino indicating the position grew to approximately 140 tons by early 2026), Bitcoin (96,184 BTC), and a growing portfolio of venture investments and commodity positions.

![](https://substack-post-media.s3.amazonaws.com/public/images/dd7b9c5b-2c86-420a-9562-ac65c625de10_1122x1308.png)

Tether estimates over 550 million users globally as of early 2026, using a methodology that combines onchain wallet data with estimates for centralized platforms. That’s not a verified count of distinct humans, but even with generous discounting, the scale is massive. In 2025, $13.3 trillion in USDT moved onchain, within total stablecoin flows of $33 trillion. $156 billion of that was in payments under $1,000, the kind of everyday transfers that suggest real economic activity, not just trading.

McKinsey gives a reality check to those numbers - estimated in 2025 that identifiable real payment activity in stablecoins (B2B, remittances, settlement, card-linked spending) was closer to $390 billion annualized, far smaller than the raw onchain flow figures suggest. The gap between “value moved onchain” and “actual payments for goods and services” is enormous.

![](https://substack-post-media.s3.amazonaws.com/public/images/30fcb383-fe9a-4ff3-aa7c-fb8a7f83fc56_2752x1536.png)

Most of the balance-sheet figures come from BDO assurance reports, including reasonable-assurance engagements at year-end, but Tether still does not publish full audited financial statements in the usual public-company sense. (We’ll get to this.) But the scale is corroborated by sufficient third-party data (onchain analytics, Treasury market data, counterparty confirmations from Cantor Fitzgerald) that dismissing it entirely would be crazy.

# **A Money Machine**

The cleanest way to understand Tether’s economics: imagine you run a savings account for hundreds of millions of people, mostly in countries where the local currency is losing value. Those people deposit dollars with you. You invest those dollars in the safest, most liquid instrument on earth (short-term US T-bills). You give them back a token that trades at $1 on every crypto exchange worldwide.   
  
You keep all the interest.

Your customers don’t mind, because they weren’t earning interest on their dollars anyway.

In Nigeria, where local financial rails are maybe 20% efficient, just holding a stable dollar is worth far more than a 4% annualized yield. In Argentina, where inflation ran above 100% in recent years, the ability to hold something that doesn’t depreciate is the product. The yield is Tether’s fee, but no one experiences it as such.

Ardoino has talked directly about this dynamic. On a podcast, he put it bluntly: the US financial system is already 90% efficient, so a stablecoin only pushes it to 95%. In emerging markets where efficiency is 10-30%, USDT pushes it to 50%. The 5% margin game in America doesn’t interest him. The 30-40% margin game everywhere else does.

Usage patterns also show an interesting story, one I suspect will continue to evolve. Tether’s Q4 2025 market report shows that 63.6% of transferred USDT value in the quarter was in single-asset transfers (pure dollar movements, not part of multi-token DeFi transactions), and that roughly 67% of market cap sat in lower-velocity “savings”-type wallets. Those aren’t the same metric, but together they paint a picture of a product being used as money rather than as a trading instrument.

There’s independent support for this from BIS researchers, who found that stablecoin use correlates more strongly with remittance costs and transactional needs than Bitcoin or Ether does, especially in emerging and developing economies. (not a surprise to literally anyone).  
  
Standard Chartered projected that stablecoin savings in emerging markets could rise dramatically by 2028, arguing that stablecoins effectively give people access to a synthetic dollar bank account, and there are hundreds of millions of unbanked people who this helps. The value proposition isn’t yielding. It’s escaping local currency weakness and friction.

And Tether spent less than $10 million on marketing globally between 2020 and 2024, less than a single Super Bowl ad : )   
  
The growth was organic, crisis-driven. Ardoino says they didn’t even understand why their market cap went parabolic in 2020 until they ran an internal analysis years later: when COVID lockdowns shut down physical black markets where people in emerging economies bought paper US dollars, tech-savvy teenagers introduced their parents to USDT on smartphones. The global black market for dollars moved onto Tether’s rails and never moved back.

> *The rate-sensitivity question is the most important analytical question about Tether’s business, and the 2025 numbers provide real data. Profit dropped from over $13 billion in 2024 to roughly $10 billion in 2025, a decline of roughly 23%.   
>   
> Tether’s own disclosures show that Treasuries and repo agreements contributed about $7 billion of 2024’s profit. A rough model: a 200 basis point drop in yields on $122 billion in direct Treasuries would reduce annual interest income by approximately $2.4 billion. That’s meaningful but not existential, especially given the hard-asset hedge (gold and Bitcoin holdings that tend to appreciate in rate-cutting environments). But it does mean the profitability narrative is partly a function of the rate cycle, and Ardoino knows it.   
>   
> He’s described the R&D push into AI, energy, and telecoms explicitly as a hedge against eventual rate cuts.*
>
> [Share](/newsletter/tether-is-not-a-stablecoin-company/)

# **What’s In The Vault (And What Isn’t)**

Tether publishes quarterly attestations prepared by BDO Italia, one of the top five global accounting firms. The quarterly reports provide limited assurance under ISAE 3000. The year-end reports (including Q4 2024 and Q4 2025) are stronger: reasonable-assurance engagements, which involve more rigorous testing. But neither is the same thing as a full set of audited financial statements in the public-company sense. BDO reviews Tether’s assertions about its reserves and reports whether those assertions are materially misstated. It does not produce the kind of full financial audit that institutional allocators typically require.

As of December 31, 2025, BDO’s reasonable-assurance report confirmed: total assets exceeding $192.8 billion, total liabilities of $186.5 billion (of which $186.4 billion relates to issued tokens), and excess reserves of approximately $6.3 billion.

Brookings found that stablecoin issuers have become a meaningful marginal buyer of US Treasuries, effectively ranking behind only a couple of foreign jurisdictions during one recent period. Tether alone holds more US Treasuries than Germany, the UAE, Spain, or Australia. This stopped being a crypto story a while ago. Tether is part of the plumbing of demand for short-duration US government debt.

The reserve composition tells its own story. Based on the attestation and supplementary disclosures, approximately 82% US Treasuries, 10% money market funds, 5% repo agreements, with the remainder in gold, Bitcoin, secured loans, and corporate bonds.

In 2021, 49% of reserves were in commercial paper. Actual cash sat at roughly 3%.

That’s a real transformation, driven by regulatory pressure and well-documented. But the trust deficit is real and earned. A short history:

In 2019, the New York Attorney General found that Bitfinex (Tether’s sister exchange) had taken $850 million from Tether’s reserves to cover losses from a payment processor whose funds were seized by authorities. Tether settled for $18.5 million. The CFTC separately fined Tether $41 million for misrepresenting that USDT was “fully backed” during a period when it wasn’t. At one point, Tether’s website quietly changed its language from “100% backed by USD” to “100% backed by our reserves, which may include affiliated entities.”

On the audit question specifically, Ardoino has been more candid than most coverage suggests, and also more defensive. In a CNBC interview, pressed on why no Big Four firm has audited Tether, he admitted: “They have not even started to look at our numbers.” He attributed the delay to the previous US administration creating “reputational risk” that made major firms afraid to touch crypto. He then pivoted to pointing out that Silicon Valley Bank, Silvergate, Credit Suisse, and Wirecard all had clean audits before they collapsed.

In early 2025, Tether hired a new CFO from LetterOne who specializes in “contentious audits,” a signal that they’re staffing up for an eventual Big Four engagement. But “eventual” is doing a lot of work in that sentence.

![](https://substack-post-media.s3.amazonaws.com/public/images/5bfdcf65-8ba6-421f-ad28-57029ad4dace_2752x1536.png)

Tether’s cash and bank deposits are near zero.   
  
The Q1 2025 attestation showed $64 million in cash (0.04% of total assets). T-bills are the most liquid instrument on earth, and Cantor Fitzgerald can liquidate positions same-day. The argument for why it’s a risk: in a severe stress event, Tether needs the T-bill market to function normally and Cantor to execute at speed.

In 2022, coordinated short-sellers triggered $7 billion in USDT redemptions within 48 hours and $25 billion within 20 days. Tether honored every redemption. But that was at $80 billion in circulation. At $186 billion, the stress test hasn’t been run.

> *The S&P Global downgrade to their lowest stability score (”5”) in late 2025 specifically cited rising exposure to higher-risk assets (Bitcoin, gold, corporate bonds, secured loans) now at 24% of reserves, up from 17% a year earlier. Ardoino’s response on the record: “We wear your loathing with pride.” Make of that what you will.*

# **USA₮: The American Play**

On January 27, 2026, Tether launched USA₮, a federally regulated dollar-backed stablecoin designed for the US market. The product is structured to comply with the GENIUS Act (signed into law July 18, 2025), though implementation timelines under the law are staggered and the full regulatory regime is still being built out.

USA₮ is issued by Anchorage Digital Bank, the first federally chartered crypto bank in the US, operating under OCC oversight. Cantor Fitzgerald serves as reserve custodian and preferred primary dealer. Bo Hines, former Executive Director of the Presidential Council of Advisors for Digital Assets (the White House Crypto Council), is CEO of Tether USA₮, headquartered in Charlotte, North Carolina.

This is not Tether slapping a new label on USDT. It’s a structurally separate product with a different issuer, different regulatory framework, and different reserve requirements. Anchorage and Cantor are shareholders in the US entity and will share revenue, though the economics haven’t been publicly finalized.

The strategic logic is bifurcation. USD₮ remains the offshore product, issued from El Salvador, serving hundreds of millions of users globally, particularly in emerging markets. USA₮ is the onshore product, purpose-built for US institutional settlement, issued by a nationally chartered bank under federal supervision.

Bo Hines, in an interview, described the relationship as “reciprocity,” adding that “it’s just Tether at the end of the day.” But the two products face completely different competitive dynamics.

In the US, Ardoino expects a “race to the bottom” on stablecoin profitability. As bank-issued stablecoins enter the market under the GENIUS Act, they’ll compete by sharing yield with holders, effectively becoming tokenized money market funds. USA₮ can’t win on margin. It has to win on programmability, institutional services, and Tether’s distribution advantage.

Offshore, USD₮ faces almost no competition at its price point (zero yield to holders) because its users don’t have better alternatives. The product is the stable dollar itself. That’s a monopoly position that’s hard to attack.

Hines also has confidence that the US Treasury will eventually establish “reciprocity standards” under the GENIUS Act that would allow offshore USD₮ to be legally recognized in the US market. Tether is running two structurally separate businesses under one brand.

> *The bear case that rarely gets articulated clearly: by launching a highly regulated, transparent US product, Tether is implicitly acknowledging that offshore USD₮ isn’t built to the same standards. If institutional markets start treating the two products as proxies for each other’s reputation, the opacity around USD₮ could contaminate USA₮ by association.*

# **The Conglomerate**

The way I found Tether’s investment portfolio makes it look like a list of random bets. It’s not.

Tether’s proprietary investment arm manages over $20 billion (segregated from USDT reserves, funded from profits and excess capital). Ardoino said in July 2025 that they’d invested in over 120 companies. The recent deployments include $200 million into Whop (an internet marketplace with 18.4 million users), $150 million into Gold.com (a 12% stake), $100 million into Anchorage Digital, $50 million into Eight Sleep, and smaller positions in LayerZero, Ark Labs, and Axiym.

The through-line, as Ardoino articulates it, is what he calls “the stable company” thesis. Four pillars: stable money (USD₮), stable communications (Keet, a peer-to-peer messaging app), stable energy (solar kiosks in Africa, Bitcoin mining), and stable intelligence (QVAC, a decentralized AI platform).

Strip away the branding and what you see is a distribution strategy disguised as a conglomerate. Every investment is evaluated as a channel to embed USD₮ deeper into global commerce. Whop’s 18.4 million users get WDK (Tether’s Wallet Development Kit) integration. Rumble’s 51-70 million users get a native wallet supporting Bitcoin, USD₮, USA₮, and Tether Gold. And in mid-March, USA₮ ran a Times Square brand activation where 25,000 people scanned a QR code, downloaded the Rumble Wallet, and claimed $10 in USA₮.

That’s the ecosystem in action: portfolio investment funds the distribution channel that onboards the stablecoin user.

The conglomerate story has shifted since even a few months ago. Tether isn’t writing checks and integrating wallets anymore. It’s taking operational control.

In 2025, Tether acquired a 70% controlling stake in Adecoagro, a major South American agricultural company. They overhauled the board of directors, installing Juan Sartori (Tether’s Head of Special Projects) as Executive Chairman (not subtle). That’s not a venture bet. That’s a takeover of a publicly traded agricultural conglomerate.

The pattern is repeating. After the $150 million investment in Gold.com in February, Tether secured a board nomination, and Sartori was appointed to the Gold.com board on March 16. They hold a minority stake in Juventus FC and recently acquired a 30.4% stake in the Italian media company Be Water. In each case, the trajectory runs from investment to board representation to operational influence.

Most unusually, Tether has been buying chains of bodegas, kiosks, and phone credit shops across Latin America, Africa, and Asia. These are the physical locations where locals traditionally buy prepaid phone credit. By owning that infrastructure, Tether controls the literal cash-to-crypto on-ramps in emerging markets, bypassing banking systems entirely. The physical control is a very interesting play that creates a bigger moat for Tether.

Whether you view this as visionary infrastructure or overextension depends on whether you think a 300-person company can competently manage a $20 billion portfolio spanning stablecoins, gold, Bitcoin mining, AI, robotics, brain-computer interfaces, sleep technology, agriculture, a football club, a media company, and a video platform.

Ardoino’s framing in interviews: Tether provides capital and distribution, and lets portfolio companies run themselves. But the Adecoagro board takeover and the Sartori appointments tell a different story. This is beginning to look less like a strategic fund and more like an operating conglomerate with a stablecoin engine at the center. The CIO transition announced this week (Richard Heathcote stepping to an advisory role, replaced by his deputy Zachary Lyons) suggests the investment operation is maturing into something that needs more institutional structure, not less.

![](https://substack-post-media.s3.amazonaws.com/public/images/131cb973-9fcb-4670-be74-f536cfabd3a7_2816x1536.png)

# **The Platform Layer**

The underlying infrastructure products are what could make Tether’s technology sticky, regardless of what happens to the token.

**WDK (Wallet Development Kit):** Open-source, non-custodial wallet infrastructure. The strategic goal is to become the default financial layer for every connected device. Ardoino’s most concrete example: a smart fridge that holds $50 in USDT, manages its own grocery budget, and pays autonomously (yes, he’s serious). More practically, WDK already integrates with Whop and is being built into the Rumble wallet. Its most interesting feature is cross-chain routing: algorithms that automatically sweep a user’s USD₮ to whichever blockchain has the lowest fees at any given moment, forcing Layer 1s to compete on cost to capture Tether’s volume.

**QVAC:** Tether’s decentralized AI platform. Announced May 2025, with products already shipped: Genesis I (a 41-billion-token synthetic dataset for STEM-focused AI training), QVAC Workbench (a local AI app supporting on-device model inference across mobile and desktop), and QVAC Health (a privacy-focused wellness app that aggregates wearable data without sending anything to the cloud). The SDK supports Llama, Qwen, and Whisper models running fully on-device. No user adoption numbers have been published.

**Hadron:** Tether’s tokenization platform, launched November 2024. It powers USA₮ issuance and supports tokenizing stocks, bonds, commodities, and funds. Integrations with Chainalysis and Crystal Intelligence provide institutional-grade compliance tooling. A strategic agreement with KraneShares and Bitfinex Securities (November 2025) targets tokenized exchange-traded products. But like QVAC, there are no published adoption metrics beyond Tether’s own products.

**Keet / Holepunch:** A peer-to-peer messaging app built on rewritten BitTorrent architecture. Serverless, no central infrastructure. Ardoino claims a chat room called “Keet News” supports 12,000+ daily active users streaming media with zero servers. Because there’s no infrastructure to maintain, he argues it could theoretically scale to a billion users at near-zero cost to Tether.

> *The platform products are real (the code is open-source, the apps are downloadable, the SDK is documented). But none of them have independent usage metrics, revenue figures, or third-party validation. Everything I can verify comes from Tether’s own announcements. The platform layer is a bet on the future, not a proven revenue diversifier. The question is whether WDK’s integration with Whop (18.4M users) and Rumble (51-70M users) will yield real adoption.*

# **Risks**

Rate sensitivity is already showing up in the numbers. A sustained decline in Fed rates directly compresses Tether’s core revenue. The gold and Bitcoin hedge partially offsets this, but it introduces new volatility (gold dropped 20% in three days during a January 2026 selloff).

TRON dependency: approximately 44% of USDT supply (~$82 billion) sits on TRON. The chain dominates retail transfers, handling roughly 65% of all sub-$1,000 USDT transactions. Tether’s counter is WDK’s cross-chain routing, but until that’s widely deployed, the concentration is real.

The audit gap persists.

Until a Big Four firm publishes a full audit, institutional buyers will discount everything else. The “contentious audits” CFO hire signals intent.

The competitive picture with Circle is more nuanced than either side admits. In adjusted transaction volume, USDC has now overtaken USDT for the first time since 2019. Visa’s onchain analytics show the reversal: USDT’s share of stablecoin transaction volume went from 87% in 2019 to 36% in 2026. USDC went from 13% to 64%. Institutions, AI agents, payment providers, and DeFi protocols are choosing USDC. Circle is publicly listed on the NYSE and has regulatory clarity in the US. USDC’s supply grew 73% in 2025 versus USDT’s 36%.

![](https://substack-post-media.s3.amazonaws.com/public/images/b4666d79-ea2f-4b77-97c1-e2eb10b8bb45_1108x396.png)

But the volume flip doesn’t translate into a profit threat. Circle surrenders roughly 60% of its revenue to distribution partners (Coinbase alone received over $900 million in 2024). Tether owns its distribution network organically and is now physically buying more of it (bodegas, kiosks, Rumble, Whop).

Tether generated over $10 billion in profit in 2025. Circle’s entire revenue for 2024 was roughly $1.7 billion. USDC is the product institutions route through. USDT is the product that prints the money. They’re playing different games entirely, and Tether’s game is more profitable by an order of magnitude.

And the conglomerate question: is a company that’s simultaneously managing $190 billion in stablecoin reserves, buying football clubs, investing in brain-computer interfaces, building an AI platform, and running solar kiosks in Africa creating resilience, or creating the conditions for an operational accident?

### **Stablecoin Infrastructure**

If you’re operating in emerging markets, USD₮ remains the dominant dollar-denominated settlement instrument by a wide margin. Its distribution network (550M+ estimated users, physical on-ramps, exchange integrations) is unmatched.

If you’re a US institution, USA₮ gives you a way into Tether’s ecosystem through a federally regulated vehicle. But it’s just getting started and competing directly with USDC’s established institutional relationships. The case for USA₮ over USDC today is Tether’s global liquidity network. The case against it is Circle’s longer compliance track record.

If you’re a bank considering issuing your own stablecoin, Bo Hines had a pointed observation: “Banks are starting to realize it’s probably not the best idea to issue their own stable considering that other banks don’t want to settle with them in their own product.” The neutral, agnostic incumbent wins the interbank settlement game. That’s Tether’s position.

And if you’re watching the platform layer (Hadron, WDK, QVAC), the honest assessment is that these are early-stage infrastructure bets with real technology behind them but not yet having a meaningful impact (to be expected).

The right comparison for Tether in 2026 probably isn’t Circle or Paxos. It might be something closer to Berkshire Hathaway (a yield-generating float funding a diversified conglomerate where 95% of profits are retained) crossed with Visa (settlement rails that every participant uses because they’re agnostic and ubiquitous).

I started this piece expecting to write about a stablecoin. I ended up writing about a company that is trying to build parallel financial infrastructure for the half of the world that the existing system forgot. The reserves question is real. But the ambition, and the speed at which it’s being executed with 300 people and zero external capital, is unlike anything else I’ve come across in this space.

If tether delivers on even half of what Ardonio is building toward, the rest of the industry will spend the next decade catching up.  
  
**Enjoyed this deep dive? Share on socials and with someone you know because most of our subscribers come from referrals.**

James
