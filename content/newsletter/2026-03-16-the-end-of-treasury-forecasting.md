---
title: "The End of Treasury Forecasting"
subtitle: "Enterprise Onchain"
date: 2026-03-16
slug: the-end-of-treasury-forecasting
type: deep-dive
tags: []
substack_url: https://enterpriseonchain.substack.com/p/the-end-of-treasury-forecasting
---

### 

![](https://substack-post-media.s3.amazonaws.com/public/images/f50d5fc8-5fe4-48d8-9ecf-e1bc492ad1fc_878x340.png)

“If you have real-time availability to funds anywhere in the world, you don’t need forecasting anymore.”

That quote comes from a bank executive interviewed for Cambridge University’s new report on tokenised money. It sounds like hyperbole. It isn’t.

Forecasting exists because moving money is slow. Make money instant and programmable, and you don’t eliminate the treasury function. You eliminate the *reason* the treasury function exists in its current form.

This is not a technology story. It’s an org chart story. And the numbers behind it are enormous.

---

## The Scale of the Problem Nobody Talks About

Start with the banking system. Correspondent banks maintain pre-funded nostro and vostro accounts across jurisdictions to facilitate cross-border payments. The global nostro/vostro system ties up somewhere between $400 billion and over $1 trillion in low-yielding capital, depending on the estimate. Some analyses put the figure at $28 trillion when you include the full scope of defensive liquidity positions.

Swift’s own data indicates that roughly 35% of the cost of an international payment transaction is related to nostro/vostro reconciliation and liquidity, including the opportunity cost of trapped capital. A single major correspondent bank like JPMorgan probably has $15-25 billion tied up in nostro accounts globally. That’s capital earning central bank rates when it could be deployed in higher-yielding activities.

Now layer on the corporate side. PricewaterhouseCoopers examined approximately 14,700 publicly traded companies and found $1.5 trillion worth of capital trapped by working capital inefficiencies alone. That’s over $100 million per company. US corporate cash holdings have ballooned from $1.6 trillion at the turn of the century to about $5.8 trillion, according to Northwestern’s Kellogg School of Management. Much of that is “defensive” cash, parked across jurisdictions because companies can’t move it quickly or cheaply enough when they need it.

Deloitte’s 2024 Global Corporate Treasury Survey tells the human side. 58% of respondents identified visibility into global operations and cash as their single most critical challenge. 83% cited lack of visibility to FX exposures and unreliable forecasts as their top concern. 62% said improving liquidity management was their top priority for the next 12 months.

These aren’t technology problems. They’re latency problems. Every dollar sitting in a nostro buffer, every hour spent on cash forecasting, every FX hedge placed “just in case” exists for one reason: money moves too slowly.

## What Corporate Treasurers Actually Do All Day

To understand what changes, you need to understand what a multinational treasury operation actually looks like.

A Fortune 500 company operating in 30+ countries maintains bank accounts across dozens of jurisdictions and currencies. The treasury team’s core job is answering a deceptively simple question: “Where is our money, and where will we need it?”

That question drives an enormous amount of operational activity. Cash flow forecasting models project where funds will be needed days or weeks ahead. Pre-funding positions move capital into country accounts before it’s needed, because it can’t be moved fast enough when it is. Nostro buffers provide cushion in case forecasts are wrong, which they often are. FX hedging locks in exchange rates speculatively, because you’re converting currencies before you know the exact amount you’ll need. Manual reconciliation verifies that money has actually arrived where it was supposed to.

The Cambridge report found that treasury and liquidity management is the second most important use case for tokenised money, behind only cross-border payments. One of the bank executives interviewed described how constant availability of funds “may eliminate or materially reduce the need for complex treasury forecasting and pre-positioning of liquidity.”

The logic is straightforward. If your Singapore subsidiary needs $10 million for a Tuesday payment, the current process starts the previous Thursday. Treasury forecasts the need, initiates a wire on Friday, hopes it clears Monday, and builds in buffer capital in case it doesn’t. Each step involves cost, delay, and risk.

With 24/7 programmable money, Tuesday morning Singapore time, the payment triggers. Funds move from the global liquidity pool. FX conversion happens atomically. Settlement is instant. No forecast needed. No buffer needed. No manual reconciliation needed.

As the Cambridge report puts it, the transformation is from “just in case” to “just in time.”

## The Toyota Parallel

That language isn’t accidental. It maps directly to the most significant operational transformation in manufacturing over the last 50 years.

Before Toyota revolutionised manufacturing in the 1970s and 80s, every factory ran on “just in case” inventory. You kept warehouses full of parts because your supply chain was too slow and unreliable to deliver what you needed when you needed it. Entire departments existed to forecast demand, manage inventory buffers, and reconcile what you had against what you thought you had.

Toyota’s insight was that inventory management wasn’t the problem. Inventory management was a symptom of slow, unreliable supply chains. Fix the supply chain, make it fast and reliable enough to deliver parts just in time, and you don’t need the warehouses. You don’t need the forecasting models. You don’t need the buffer stock.

The results were staggering. Toyota didn’t just reduce inventory costs. It eliminated entire categories of operational overhead. Companies that adopted just-in-time manufacturing saw inventory carrying costs drop by 20-50%. But the bigger impact was second-order: freed-up warehouse space, reduced working capital requirements, simplified operations, and faster response to market changes.

Corporate treasury is in the “pre-Toyota” era of money movement. The nostro accounts are the warehouses. The forecasting models are the demand planning teams. The FX hedges are the buffer stock. They all exist because the supply chain for money is slow and unreliable.

Programmable, 24/7 tokenised money is the equivalent of Toyota’s production system for capital flows. It doesn’t optimise the forecasting. It eliminates the need for it.

## The Second-Order Effects

The first-order effect (faster payments, lower transaction costs) is what most people focus on. It’s also the least interesting part.

The second-order effects are where the real value sits.

**Working capital release.** When you no longer need to pre-fund accounts across 30 jurisdictions “just in case,” that capital comes off the balance sheet. For a large multinational, we’re talking about hundreds of millions, potentially billions, in freed-up working capital. That’s capital that can be redeployed into operations, returned to shareholders, or invested in growth. That’s not a treasury efficiency gain. That’s a material balance sheet event.

**The yield gap closes.** The Cambridge report identified a critical dynamic: institutional clients won’t hold non-yielding tokenised money for treasury purposes. This creates natural demand for dynamic swapping between stablecoins (for movement) and tokenised money market funds (for yield at rest). The practical implication is that idle cash stops being idle. Every dollar is either in motion or earning yield. The gap between “money at rest” and “money working” collapses toward zero.

**FX hedging simplifies radically.** A huge portion of corporate FX hedging exists because you’re converting currencies speculatively, before you know the exact amount and timing of the transaction. If FX conversion happens atomically at the moment of payment, you hedge against actual exposures rather than forecasted ones. The hedging book shrinks. The complexity drops. The cost falls.

**Reconciliation becomes automatic.** The Cambridge report notes that tokenised deposits enable “straight through processing programmability” with “encumbrance of value.” In practice, that means payments are self-reconciling. The ledger is the record. There’s no separate step where someone checks that the money arrived and matches the invoice. This alone eliminates enormous operational overhead.

**The treasury function transforms.** None of this means treasury teams disappear. It means they get redeployed from operational firefighting to strategic capital allocation. Instead of spending 80% of their time on forecasting, reconciliation, and liquidity management, they spend 80% of their time on investment strategy, risk management, and business enablement. The Deloitte survey already shows this shift in aspiration: 49% of respondents now prioritise creating a “scalable corporate treasury,” up from 39% in 2022. The constraint isn’t ambition. It’s infrastructure.

## The Barriers Are Real but Temporary

None of this happens overnight. The Cambridge report is clear-eyed about the barriers.

Interoperability is the biggest one. If tokenised money systems become 100 new walled gardens, you’ve just replaced the correspondent banking problem with a different version of the same problem. The report rates interoperability at 8.9 out of 10 in importance across all industry interviews.

Regulatory fragmentation is the second. Different jurisdictions are taking fundamentally different approaches to tokenised money. The EU is protecting monetary sovereignty. The US is promoting dollar dominance. Singapore and Hong Kong are competing for hub status. Until these frameworks converge enough to enable cross-border institutional use, the full treasury transformation remains constrained.

The yield prohibition is the third. In most jurisdictions, yield-bearing stablecoins are prohibited by regulation. This forces awkward workarounds: dynamic swapping between stablecoins and tokenised MMFs, or using tokenised deposits that are yield-bearing but limited to single-bank networks. The regulatory framework hasn’t caught up with the institutional use case.

And integration with legacy systems is the fourth. As the Cambridge report notes, successful implementations must bridge traditional and tokenised systems rather than requiring complete replacement. This means a lengthy period of coexistence, which is a cost the industry will need to bear during the transition.

## The Timeline

Cross-border payments are already happening. J.P. Morgan’s Kinexys has processed over $1.5 trillion cumulatively. DBS Token Services is commercially live. Stablecoins are settling trades and remittances globally. The infrastructure exists.

Treasury management is next. The Cambridge report shows it as the second most cited use case, with banks rating their readiness between 3 and 10 out of 10. That range tells you everything: some institutions are already deploying, others are still exploring. The variance will close over the next 2-3 years as regulatory frameworks solidify and interoperability solutions mature.

The full transformation, where programmable money eliminates treasury forecasting as a core function, is a 5-7 year horizon for early adopters and probably a decade for broad adoption. That sounds slow until you remember that Toyota’s production system took 20 years to reshape global manufacturing.

The difference is that money moves faster than car parts. And the incentive, hundreds of billions in trapped capital, is impossible to ignore indefinitely.

## What This Means for Enterprise Leaders

If you’re running treasury at a multinational, the question isn’t whether to engage with tokenised money. It’s where to start.

The Cambridge report suggests a clear adoption path: basic cross-border payments first, then treasury management, then more complex applications like trade finance and capital markets. That sequencing tracks with what the most advanced institutions are doing.

But the strategic question is bigger than which pilot to run. It’s about recognising that treasury forecasting, in its current form, is a symptom of broken infrastructure. Every dollar you spend on forecasting models, every FTE devoted to cash positioning, every basis point lost on defensive liquidity is a cost imposed by slow money.

When the money speeds up, those costs evaporate. And the organisations that prepare for that shift, that build their treasury operations around “just in time” rather than “just in case”, will have a structural advantage that compounds over years.

Toyota didn’t just build better cars. It built a fundamentally different kind of company. The same opportunity exists here, for organisations willing to rethink what treasury should be when money finally moves at the speed of information.

---

*This article draws on findings from “Tokenised Money: Use Cases, Interoperability and Regulation” (February 2026), published by the Cambridge Centre for Alternative Finance (CCAF) at Cambridge Judge Business School, University of Cambridge, in collaboration with Financial Innovation for Impact (Fii).*

*Additional data from Deloitte’s 2024 Global Corporate Treasury Survey, PricewaterhouseCoopers working capital research, and Swift’s global payments innovation initiative.The full report “Tokenised Money: Use Cases, Interoperability and Regulation” is available from the Cambridge Centre for Alternative Finance (CCAF) at Cambridge Judge Business School. It was produced in collaboration with Financial Innovation for Impact (Fii).*

**- Enterprise Onchain**

---

[Follow Us on LinkedIn](https://www.linkedin.com/company/enterpriseonchain/)

**Contact Us**

We are starting a podcast - have a view you would like to talk about? Or want to sponsor? Reach out to us at our contact form [here](https://link.sbstck.com/redirect/666a6dfa-c2e4-45e3-8cb9-2c757d4ab113?j=eyJ1IjoiNDRtcDIifQ.4_JeNjZe7A6pZ1lrs0Iqz-3a-XcJMv2d-CHsWiy9nLE).

***Thanks for reading - until next week!***

Until next week,

[James Smith](https://www.linkedin.com/in/jamesmith/) & [David Walsh](https://x.com/davwals)
