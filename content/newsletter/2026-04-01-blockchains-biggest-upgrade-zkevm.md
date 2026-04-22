---
title: "Blockchains biggest upgrade: zkEVM"
subtitle: "What Is zkEVM"
date: 2026-04-01
slug: blockchains-biggest-upgrade-zkevm
tags: [Infrastructure]
substack_url: https://enterpriseonchain.substack.com/p/blockchains-biggest-upgrade-zkevm
---

The thing that makes Ethereum trustworthy is also what makes it slow.

Every time a new block is proposed on the network, thousands of validators independently re-execute every transaction inside it.

Each one downloads the block, re-runs every transaction, checks that the results match, and signs off.

This happens every 12 seconds.  
  
That’s a lot of redundant work. And it’s redundant on purpose. When thousands of validators all reach the same answer, each with their own ETH staked as a security deposit, it becomes very hard to cheat.   
  
That redundancy is the reason banks, asset managers, and payments companies take Ethereum seriously. It’s what makes the network trustworthy.

![](https://substack-post-media.s3.amazonaws.com/public/images/cdd0ef5c-450f-4f00-a0d7-3e287124b937_1180x654.png)

But it’s also what makes it slow. If you want to process more transactions, you have to fit more into each block. More transactions mean more work for every validator in the same 12-second window. The only way to keep up is better hardware, which prices out home stakers, concentrates the network in fewer hands, and that defeats the point.

So the feature that creates trust is the same feature that limits capacity.

The workaround has been Layer 2 networks: separate systems that handle transactions off-chain and post summaries back to Ethereum. That helps with speed and cost, but it doesn’t fix the base layer itself. And for institutional settlement, the base layer is what matters.

What’s changing now is that Ethereum is preparing to break this tradeoff. Not by removing the redundancy, but by making it dramatically cheaper.

What follows is my attempt to explain what’s coming, why it matters, and what’s still unresolved, written for a wide audience to understand its importance.

If you [read the strawmap piece](https://x.com/Snapcrackle/status/2029174289379811594), think of this as the companion. The strawmap laid out the destination: seven upgrades, five goals, by 2029.   
  
This piece explains the engine that makes most of it possible.   
The core question isn’t just speed. It’s whether Ethereum can get faster without becoming less trustworthy

A quick orientation - The zkEVM transition involves claims at very different levels of confidence:

**Done:** The proving technology is now fast enough to be operationally credible. Multiple teams can prove real Ethereum blocks in under 10 seconds on target hardware.

**Public targets (from the Ethereum Foundation):** Security hardening through 2026. The Glamsterdam hard fork is targeted for mid-2026, restructuring block building and execution. One of its components (ePBS) expands the window available for proof generation as a side effect

**Aspirations:** Optional proofs by early 2027. Required proofs by the end of 2028. Layer 2 networks will inherit the base layer’s proof system by 2029.

**Still being debated:** The operating model: how proving is funded, how many proving systems are maintained, and how failures are handled.

I’ll flag which category each claim falls into as we go.

The question has always been: Is there a way to keep the same level of assurance without making everyone redo the work?

## **The Fix - Prove It Once, Check It Everywhere**

The upgrade is called a zkEVM. The name is technical (it stands for zero-knowledge Ethereum Virtual Machine), but the idea behind it is simple.

Instead of every validator re-running every transaction, one specialised actor (called a prover) does the work and produces a mathematical proof that the work was done correctly. Think of it as a certified audit report. Every other validator on the network just checks the report instead of redoing the audit.

Checking the report takes roughly the same amount of time whether the original block contained ten transactions or ten thousand.

Comparable assurance. A fraction of the effort.

Kevaundray Wedderburn leads the team building this at the Ethereum Foundation, he described it as “one of the biggest architectural shifts Ethereum will make.” His summary: Ethereum is moving from “execute to accept” to “verify to accept.”

Once this shift happens, you can safely raise the gas limit (which controls how many transactions fit in each block) without forcing every validator to upgrade its hardware. More gas means more transactions per block. More transactions mean higher throughput and lower fees. Justin Drake (Ethereum Foundation researcher) has outlined a long-term ambition of roughly 10,000 transactions per second on the base layer alone (up from about 25 today). Without this upgrade, I don’t see a credible path to get there.  
  
Most other blockchains have become faster by raising hardware requirements, which price out solo stakers and concentrate the network among fewer, larger operators (introducing counterparty risk).   
  
This upgrade goes the other way by making verification cheaper, so solo stakers can keep participating even as throughput scales.

This upgrade implements speed and trust together, rather than one at the expense of the other 🤝

![](https://substack-post-media.s3.amazonaws.com/public/images/fa438a00-ea1e-456d-89c1-2813868974f3_1198x626.png)

**How the Transition Works**

The natural question is: when does this happen, and how much risk does the transition carry?

The honest answer is that it’s phased, deliberate, and designed to be reversible at every step until the very end. If you’ve ever deployed major infrastructure changes, the pattern will be familiar: shadow mode, fail-open, opt-in, enforced.

**Shadow mode.** Validators keep working exactly as they do today, but start receiving proofs in the background. The system collects data on how reliably proofs arrive and how long they take. No behaviour changes. No risk.

**Fail-open.** Validators try to check the proof first. If a valid proof arrives on time, they use it. If it doesn’t, they fall back to re-executing the block the old way. Nothing breaks either way.

**Opt-in.** Validators can choose to rely on proof checking instead of re-execution. Some will. Some won’t. The network functions regardless, because the protocol doesn’t yet *require* proofs. Internal target for this phase: early 2027.

**Enforced.** The protocol formally requires a valid proof for each block to be accepted. This is the real transition. Internal target: end of 2028. What happens when a proof misses its deadline under this model is still being specified; the likely consequence is a delay in confirming that block, but the exact rules aren’t settled yet.

The system can be safely rolled back to the old way at any point before the enforced phase.   
  
*I think this phased approach is the right call, though I’ll note that the timeline targets above come from a closed presentation, not a public commitment. Ethereum has a well-documented history of shipping major upgrades later than projected, sometimes significantly. “Target” should be read as “aspiration” until it shows up on a confirmed development schedule. The direction is real. The dates are best guesses.*

![](https://substack-post-media.s3.amazonaws.com/public/images/046affc2-4311-43a9-9a8d-9a4dddb1c1d8_1196x624.png)

## **What Still Needs to Happen**

The phased approach isn’t timidity. There are real engineering problems that need solving.

**The proofs need to be generated fast enough.** A year ago, generating a proof for a single Ethereum block took about 16 minutes. Today it takes about 16 seconds at the current gas limit on target hardware (a 60x improvement, which is remarkable even by crypto standards). That’s close to where it needs to be, but the target moves: as the gas limit increases, provers will need to keep getting faster to keep upWTF Is a zkEVM and Why Should You Care?. A component of the Glamsterdam hard fork (called ePBS) restructures how blocks are built and proposed. A side effect of that restructuring is that provers get more time to generate proofs, expanding the available window from 1-2 seconds to 6-9 seconds.   
  
The current benchmark is 99% of real Ethereum blocks proved in time. The remaining 1%, including worst-case blocks, is acknowledged as an open problem. That might sound minor, but a base-layer system can’t afford to only work for average blocks. It has to handle the ugly edge cases too.

![](https://substack-post-media.s3.amazonaws.com/public/images/097ad224-0ba7-4398-90ab-988a8a3a5d9c_1182x646.png)

**The proofs need to get smaller.** Right now, proofs are too large to travel across the network fast enough. The Ethereum Foundation’s target is to get proof sizes small enough for reliable global distribution by the end of 2026. New networking infrastructure is being built to handle this.

**A fake proof would be catastrophic.** If someone could generate a fraudulent proof, they could forge any transaction: create money from nothing, rewrite balances, steal funds. This is why the EF’s cryptography team set explicit security targets for 2026, reaching the standard recommended by international cryptographic bodies by year-end.

**Someone has to be willing to generate the proofs.** Before proofs are required, someone has to produce them voluntarily. As Wedderburn put it, “scaling cannot rely on altruism.” Once proofs become mandatory, the block proposer is responsible for ensuring a proof is generated. No proof, no valid block.

## **The Safety Net**

If something this important is going to work, it can’t depend on any single piece of software. Ethereum has always relied on multiple independent teams building their own versions of the same system. If one team’s software has a bug, the others catch it.

The same principle applies here. The leading proposal is to have multiple independent proving systems running at the same time, and only accept a block if enough of them agree the proof is valid. As of early 2026, at least five independent proving systems are listed on the EF’s public tracker, with more in development.

There’s an active debate about whether Ethereum should rely on multiple proving systems for safety, or invest in formally verifying a single implementation so thoroughly that bugs are mathematically ruled out. The first approach preserves Ethereum’s culture of redundancy. The second could be simpler and cheaper, but requires the community to accept a new kind of safety argument. This debate is expected to run through 2026 and into 2027, and it’s one of the most consequential design decisions still open.

![](https://substack-post-media.s3.amazonaws.com/public/images/defa0995-1320-49ce-934d-030e2063f540_2047x1086.jpeg)

## **What Could Go Wrong**

**Proof generation could centralise.** Generating proofs requires serious computing power. If only a handful of well-funded operators can afford the hardware, the system reintroduces a concentration problem at the proving layer, even though the verification layer stays distributed. Open-source tools and competitive prover markets are being developed to prevent this, but they’re works in progress.

**The economics aren’t settled.** Before proofs are mandatory, who funds the provers? After they’re mandatory, what happens during quiet periods when transaction fees might not cover the cost of running prover hardware? If provers shut down because the economics don’t work, the network stalls. The accountability model is also still being designed: unlike validators, who can lose their security deposit for misbehaviour, there’s no equivalent penalty mechanism for provers yet.

**Adversarial transactions.** Once proofs are required, attackers could craft transactions that are cheap to submit but disproportionately expensive to prove, slowing down the whole system. Adjusting the fee structure to account for proving costs is the planned fix, but calibrating it correctly in a new environment is uncharted territory.

**The data problem.** Higher capacity means more transactions, which means the underlying databases grow faster. The infrastructure that services like block explorers and wallet providers rely on will need to handle significantly larger datasets. This is a problem that needs solving regardless of zkEVMs, but higher throughput makes it worse.

**The timeline could slip.** Ethereum’s governance is deliberately conservative. Every change requires broad consensus among dozens of independent development teams. The Merge (Ethereum’s last major architectural shift) was delayed multiple times over several years. The targets discussed at the February presentation are plausible given current momentum, but plan for the possibility that they move.

## **Where Things Stand**

**Done:** Proof generation works. Multiple independent systems can prove real Ethereum blocks in under 10 seconds on target hardware, down from 16 minutes a year ago. The feasibility question is answered.

**This year (public targets):** Security hardening to international standards. The Glamsterdam hard fork is expected to ship, restructuring block production. Its ePBS component will expand the proving window as a downstream benefit. Client teams are building proof-checking capabilities into their software.

**Early 2027 (internal target):** Validators can opt into proof-based verification. Data collection at scale begins.

**End of 2028 (internal target):** Proofs become mandatory. The protocol requires them for a block to be accepted.

**2029 (internal target):** Layer 2 networks could inherit the base layer’s proof system directly, eliminating the need for them to maintain their own security infrastructure. This would change what Layer 2s are for: less about working around Ethereum’s speed limits, more about offering custom environments for specific applications. That’s a business model shift for the entire L2 ecosystem, not a death sentence, but a shift that current L2 teams will need to navigate.

The research is ahead of schedule. The engineering is underway. But the gap between “it works in tests” and “it’s built into a live protocol with correct incentives, governance, and fallback mechanisms” is where most of the remaining work sits.

## **What Comes After**

The most consequential decisions haven’t been made yet. How many proving systems to maintain. Who pays for proving. What the penalty structure looks like. How proof deadlines interact with block production. These are operational and economic questions, not theoretical ones. And they’re the kind of questions this audience knows how to evaluate.

What I do think is clear: the core technical shift, from re-executing every transaction to verifying a proof of correctness, is no longer speculative. The proof works. The security targets are defined. The client integration is underway. The remaining questions are about how to deploy it safely and sustainably.

The bigger question, and the one I think deserves more attention than it gets, is whether Ethereum can industrialise proof generation without recreating the concentration it’s trying to avoid. That’s the real test. Not “can we prove blocks fast enough?” but “can we build an entire operating model around proving that stays open, competitive, and decentralised?”

For anyone evaluating Ethereum as long-term settlement infrastructure, this is the upgrade worth tracking. Not because it’s finished, but because the hardest remaining questions are exactly the kind of questions institutional operators are built to assess.  
**Enjoyed this deep dive? Share on socials and with someone you know because most of our subscribers come from referrals.**

James
