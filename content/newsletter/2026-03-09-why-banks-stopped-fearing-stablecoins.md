---
title: "Why Banks Stopped Fearing Stablecoins"
subtitle: "Enterprise Onchain"
date: 2026-03-09
slug: why-banks-stopped-fearing-stablecoins
type: deep-dive
tags: [Tokenisation, Regulation, Stablecoins]
substack_url: https://enterpriseonchain.substack.com/p/why-banks-stopped-fearing-stablecoins
---

*How a Citi veteran concluded that the $300 billion deposit threat is actually a $36 billion revenue gift, and built the clearing system to prove it.*

I first spoke with Tony McLaughlin last year, not long after he’d left Citi and founded a company called Ubyx. What struck me immediately was how someone with two decades inside one of the world’s largest banks could talk about public blockchains with the conviction of a crypto native, while simultaneously grounding every argument in the mechanics of check clearing and correspondent banking.   
  
McLaughlin was a payments lifer who had genuinely concluded that the infrastructure he’d spent his career operating was about to be replaced.

McLaughlin is not the startup founder we’d all imagine (a good thing, I think).

He’s a career payments executive who was inside one of the world’s largest banks, and his approach to building a company reflects that: form a thesis, put it in the market, and let the market tell you if you’re right.

**How do stablecoins actually become normal money?**

Normal, boring, show-up-in-your-bank-account, cash-equivalent money.

His answer involves a piece of infrastructure so mundane that most people in crypto have never thought about it. And most people in banking haven’t realized they need it yet.

## **The Guy Who Built the Thing, Then Walked Away From It**

Here’s the TLDR on McLaughlin’s career arc, because the biography matters for the story.

Nearly two decades at Citigroup, rising to Managing Director in Treasury and Trade Solutions, focused on emerging payments. During that time, he became the primary architect of the Regulated Liability Network (RLN), which is probably one of the most influential institutional blockchain concepts of the last five years.   
  
The RLN proposed a shared, private ledger where central banks, commercial banks, and e-money institutions could all issue tokenized versions of their liabilities on a single platform, aka the regulated sector’s answer to public crypto.

McLaughlin ran proofs of concept with the Federal Reserve and UK Finance, and the concept informed work at the Monetary Authority of Singapore. The BIS acknowledged the RLN as an inspiration for its own “Unified Ledger” concept. Project Agorá brought together seven central banks and over 40 financial institutions around a similar architecture. By any measure, this was serious infrastructure work.

And then McLaughlin quit and walked away from the whole thing.

McLaughlin spent years building the case for private permissioned blockchains as the future of regulated money. The technology worked fine.

The problem was that nobody could solve the cold-start problem.

You’re asking every major bank and central bank on earth to join a network that doesn’t exist yet, and none of them wants to go first. On a podcast, he called it the “boot problem.” You have to boot the network before anyone will use it, but nobody will help you boot it because nobody’s using it yet.

Public blockchains had already solved this. They have users. They have liquidity. They have developers. The cold start is behind them.

The moment that made it click for him was the 2024 U.S. election. He looked at the political trajectory and concluded that stablecoin legislation was inevitable, which meant banks would inevitably be permitted to operate on public chains, because that’s where stablecoins live. The GENIUS Act, signed into law in July 2025, proved him right.

He has described the decision with characteristic bluntness. He “decided on that day not to spend another second of my life on private permissioned blockchain adoption.” He left Citi, and in March 2025 he founded Ubyx.

![](https://substack-post-media.s3.amazonaws.com/public/images/3b494bf9-f839-4f7e-84b9-0335b5a56258_2752x1536.png)

## **What Banks Actually Get Wrong About Stablecoins**

On March 3, 2026, President Trump publicly accused American banks of “undermining” the GENIUS Act and holding his crypto agenda “hostage.” The fight was over yield.

Banks had been lobbying hard against interest-bearing stablecoins, arguing they’d drain deposits out of the traditional banking system.

The Bank of England was floating holding limits on “systemic stablecoins” for the same reason. The fear is real; global stablecoin supply has passed $300 billion, and if that represents deposits leaving commercial bank balance sheets, the implications for lending capacity are significant.

But McLaughlin thinks the question is backwards. He’s spent the last year making a single argument on every stage and podcast that will have him: stablecoins are not a threat to deposits.

They are a revenue gift.

And the framing error starts with how people categorize the instrument itself.

He says, “If a regulator defines a stable coin as a crypto asset with reference to fiat currency, I think they’ve made a fundamental mistake.

That to me is equivalent to saying that a check is defined as being a piece of paper with reference to fiat currency.”

He’s saying regulators are making the same mistake with stablecoins that they’d never make with checks. They’re defining them as “a crypto asset with reference to fiat currency,” which defines the instrument by the technology (crypto token) rather than by what it actually does (promises to pay you money at par). The technology is incidental. The promise is the point.

Write “I owe you $10” on a clay tablet, a piece of paper, or an ERC-20 token on Ethereum. The legal instrument is the same. What matters is who made the promise and whether it’s enforceable.

A stablecoin, in his framework, is not a novel crypto-native construct. It’s the latest representation of one of the oldest instruments in commercial law: the negotiable instrument.

He draws the parallel specifically to the American Express traveler’s check from 1891.

If you’re under 35, you’ve probably never used or heard of one.

Before debit cards and ATMs went global, traveler’s checks were how you carried money abroad. You’d buy them from American Express or your bank before a trip, pre-paying face value.

Then you’d spend them like cash anywhere in the world, and the merchant or local bank would accept them at par because a clearing network guaranteed they could collect the money from the issuer.

I remember using them backpacking around Asia and still shudder at the experience: queuing at bank counters, signing and countersigning, waiting for someone to call the issuer, and getting a bad rate.

No wonder the moment cards caught up, traveler’s checks died almost overnight.

The properties, though, were identical to a stablecoin. A U.S. dollar instrument, issued by a non-bank, pre-funded, fully collateralized, bearing no interest, transferable to the holder, redeemable at par.

McLaughlin’s analogy is correct, but it probably doesn’t hit home for most of the people he tells.

The very reason most people can’t see the clearing problem with stablecoins is that most people have never used the instrument that solved it last time. Traveler’s checks are extinct.

The clearing infrastructure behind them is invisible history. So when McLaughlin says “stablecoins need what traveler’s checks had,” the audience nods politely but doesn’t feel it.

![](https://substack-post-media.s3.amazonaws.com/public/images/83e1c863-6f5f-4c89-a94f-7a2c917d1ae7_2752x1536.png)

Once you see it that way, the question stops being “how do we protect deposits from stablecoins?” and starts being “how do we process stablecoins the way we’ve processed every other negotiable instrument for the last 200 years?”

## **The Boring, Critical Piece**

Traveler’s checks achieved global, par-value acceptance not because of anything special about the paper. They worked because American Express, Visa, and Thomas Cook built clearing networks that guaranteed any merchant, in any country, could convert those checks to cash at face value.

When the acceptance networks eroded, traveler’s check usage collapsed. The instrument didn’t fail. The plumbing did.

Stablecoins are in exactly this position right now. They can cross borders in seconds on public blockchains. But there is no universal mechanism to redeem them at par value through a regulated financial institution.

If you’re a stablecoin issuer, you have to build your own distribution network from scratch, one bilateral relationship at a time. If you’re a bank that wants to accept stablecoins for your customers, you have to negotiate with each issuer individually. The complexity scales geometrically.

McLaughlin’s favorite example is credit cards. There are thousands of different banks issuing credit cards worldwide. That sounds like it should be chaos.

But I bet you rarely walk into a shop and are told: “Sorry, we don’t accept cards from your bank.”

The fragmentation is invisible to the user because Visa and Mastercard sit in the middle and make every card work everywhere.

Stablecoins have the fragmentation but not the clearing network. That’s the gap Ubyx is trying to fill.

![](https://substack-post-media.s3.amazonaws.com/public/images/d1cc75b7-2b8a-42b7-9117-db49d452eef3_2816x1536.png)

## **How the Clearing Actually Works**

The mechanics are deliberately simple, and the distinction from a crypto exchange is the whole point.

On an exchange, stablecoins are bought and sold at variable market prices. There’s no guarantee you get par. The exchange is a trading venue. If demand drops, the price drops with it.

Ubyx doesn’t do that. It operates a collection model, not a sale model. The goal is par-value redemption, the same thing you get when you deposit a check at your bank.   
  
You don’t care who issued the check. You don’t care what bank it was drawn on. You hand it to your bank, your bank credits your account for the face value, and somewhere behind the scenes, a clearing system collects the money from the issuing bank. If the check bounces, you get it back. Simple.

The Ubyx flow works the same way. A customer deposits a stablecoin (say, USDC) into a hosted wallet at their bank. The bank submits the token to Ubyx. Ubyx routes it to the issuer (Circle, in this case).

The issuer verifies the token is legitimate and releases fiat dollars from pre-funded reserves at a settlement bank. Those dollars flow back through Ubyx to the receiving bank, which credits the customer’s account, often in local currency after taking an FX spread.

If the issuer fails to pay, the bank returns the token to the customer. Like a bounced check. The bank assumes no balance-sheet risk in the clearing process itself.

McLaughlin describes the system as a “black box” with three modes:

> Stablecoins in, cash out (redemption).
>
> Cash in, stablecoins out (issuance).
>
> Stablecoin A in, stablecoin B out (conversion).

It’s designed to be agnostic to the issuer, the blockchain, and the currency. At launch, the issuer roster includes Paxos, Ripple, Agora, Transfero, Monerium, GMO Trust, BiLira, and roughly a dozen others covering USD, GBP, EUR, and emerging-market currencies, across multiple chains.

For banks, the technical lift is intentionally minimal. Most won’t build blockchain infrastructure in-house (and then they have the problem of getting other banks to trust it anyway).

![](https://substack-post-media.s3.amazonaws.com/public/images/2f90c6d4-b888-49d6-90df-225f1a0e0a3f_2816x1536.png)

## **The $36 Billion Number**

Here’s where the deposit-fear narrative flips.

McLaughlin’s back-of-envelope math: take a $1 trillion stablecoin market (we’re at $300 billion and growing). Assume 0.5% of outstanding tokens are redeemed per day, which is a conservative velocity for a payments instrument. That gives you roughly $1.8 trillion in annual redemptions. If banks earn 100 basis points in processing fees plus another 100 basis points in FX spread on cross-border redemptions, the revenue pool is $36 billion a year. The assumptions are his, and they’re assumptions. But the arithmetic checks out and the question for any given bank is just how much of that they want.

The economics are particularly attractive for non-U.S. banks.

Every dollar-denominated stablecoin that enters the European or Asian banking system and is converted to local currency is pure foreign exchange revenue for the receiving institution. FX is like crack for banks.

McLaughlin has been calling foreign stablecoins “little bundles of joy” and “gifts” in every appearance for the last year. His shorthand for the strategy is the “Pokémon strategy: gotta catch ‘em all.”

The alignment with central bank objectives is what makes this compelling beyond just the revenue math.

When stablecoins are redeemed through regulated institutions into hosted wallets, they become visible to the tax system, go through AML/KYC screening, and convert into domestic currency sitting on the local banking system’s balance sheet. The central bank gets compliance and monetary visibility. The commercial bank earns fee income and grows its balance sheet. The customer gets a par-value conversion.

McLaughlin’s advice to bank CEOs is specific: receive first, issue second. “In the case of stable coins, it’s better to receive than give. Why is that? Because you can make a lot of lovely money by receiving.”

The immediate business case is in accepting and converting third-party stablecoins. Once a mutualized acceptance network is in place, and any bank can clear any stablecoin the way it clears any Visa transaction, the barrier to issuance collapses.

At that point, issuing your own stablecoin becomes as straightforward as issuing your own credit card. You don’t need to build the acceptance network. You just plug in.

## **Who Believes the Thesis**

The cap table is worth reading as a signal map, because the names on it tell you which constituencies think this is real.

Ubyx raised a $10 million seed in June 2025 led by Galaxy Ventures. The rest of the round is a who’s-who of people you wouldn’t normally see on the same cap table: Peter Thiel’s Founders Fund, Coinbase Ventures, VanEck, and LayerZero.   
  
That’s Silicon Valley libertarian capital sitting alongside one of the biggest crypto exchanges and a major traditional asset manager, all writing checks into stablecoin clearing infrastructure. Several investors are also network participants: Paxos and Monerium both invested and are integrated as issuers on the network, while Payoneer and Boku invested as strategic partners.   
  
The alignment of investors who are also network users is deliberate. McLaughlin has explicitly compared it to the early ownership structure of Visa and Mastercard, where the banks that used the network were also the banks that owned it.

Then, in January 2026, Barclays made a strategic investment. That’s the UK’s second-largest bank by market cap, making its first-ever stake in a stablecoin company. Ryan Hayward, Barclays’ Head of Digital Assets and Strategic Investments, said that “interoperability is essential to unlock the full potential of digital assets.”

Read between the lines: one of Europe’s most systemically important banks looked at the stablecoin clearing thesis and decided to put money behind it.

A month later, AB Xelerate, Arab Bank’s fintech accelerator, followed with its own strategic investment. So you now have American venture capital, European banking, and Middle Eastern financial infrastructure all backing the same bet.

## **What could go wrong?**

Circle launched its own Circle Payments Network in mid-2025, providing proprietary infrastructure for USDC settlement. Circle has the scale to build distribution alone. The market question is whether we end up with a single-issuer network (Circle’s approach) or a multi-issuer clearing system (Ubyx’s approach). McLaughlin’s argument is that history favors the pluralistic clearing model. But Circle’s head start and dominant market share are real.

The yield fight between banks and crypto firms is unresolved. The OCC’s proposed rules include a rebuttable presumption against yield arrangements on stablecoins.

If yield is prohibited, banks breathe easier because stablecoins stay inferior to savings accounts for anyone parking cash. But that also means stablecoins stay confined to payments and settlement use cases, which is a smaller market and a slower ramp for Ubyx.

If yield is allowed, the market explodes because stablecoins start competing directly with deposits, money market funds, and treasuries for idle cash. Banks would have every reason to build infrastructure fast, both defensively (to keep customers from leaving) and offensively (to capture the FX and fees).

Ubyx has committed to an open-source rulebook with eventual DAO governance through a token. That’s philosophically coherent with the decentralized networks it connects to. But it’s untested for the regulated financial market infrastructure that banks depend on.

![](https://substack-post-media.s3.amazonaws.com/public/images/836ac7ef-9ec4-491b-8cc5-abd1e03db72d_820x768.png)

## **Six Words**

McLaughlin spent the first phase of his career defending the fiat system against the crypto challenge. He spent the second phase building a private blockchain for the banking establishment. He spent the third phase concluding that private blockchains can’t solve the adoption problem.

Through all of that, what changed is where he thinks that money should live. On public blockchains, in wallets, cleared through infrastructure that makes every regulated stablecoin as boring and reliable as a check.

He believes the entire transition hinges on six words. They’re not technical.

*Banks can process stablecoins like checks.*

If someone with the authority to say those words does, every bank and fintech on earth will know exactly what to do.

Ubyx is a bet that someone will say those words soon.
