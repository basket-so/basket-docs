---
title: FAQ
description: Common questions about baskets, minting, redeeming and fees.
---

## Is holding a basket the same as holding its tokens?

Economically, close to it. Your basket token is a claim on a share of the tokens in the basket's vaults. You get that share's value when you redeem. The differences are the mint and redeem fees, the swap costs on the way in and out, and holding one token instead of many. You don't get rewards a token pays only to holders who claim or stake it themselves.

## Can I redeem whenever I want?

Yes. Nobody can pause redeems, not even a basket's authority. New redeems only wait while a fixed-weight basket is rebalancing, and the program limits how long and how often that can happen. See [Security and trust](/protocol/security/).

## Why does minting take several transactions?

A mint buys every token in the basket, one Jupiter route each. Routes for many tokens don't fit in one Solana transaction. So the app splits the mint into an open step, a few swap batches of up to three tokens, and a final step. See [Mint a basket](/guides/mint/).

## What if I close the window halfway through?

Nothing is lost. Come back to the basket's page within 20 minutes to continue. After that, you can recover the tokens your mint already bought, or the unsold tokens from a redeem. See [Finish or recover a mint or redeem](/guides/recover/).

## Why did I receive tokens instead of USDC after a failed mint?

If an interrupted mint expires, it returns the tokens it had already bought. Turning them back into USDC would need more swaps, at prices you hadn't approved. You can sell them, or keep them.

## Why is the price in Markets different from NAV?

NAV is the value of a basket token's share of the vaults. A market's price is whatever its pool last traded at. Arbitrage pulls them together when the pool has enough liquidity, but small pools can sit away from NAV.

## Can I mint with SOL?

Not in the Mint panel, which takes USDC. Swap SOL to USDC first, or buy the basket token in its SOL market if it has one.

## Do baskets pay yield?

Not on their own. A basket is worth what its tokens are worth. If a token's yield is built into its price, like a liquid-staking token's, the basket earns that too. BASKET stakers earn a share of mint and redeem fees.

## Who decides what's in a basket?

Each basket's authority, which today is Basket. Fixed-units baskets never change. Fixed-weight baskets can change through a composition change with three days' notice. Anyone can propose a new basket. See [Propose a basket](/baskets/propose/).

## Can fees change?

Yes, within limits the program enforces. All of a mint's or redeem's fees together can't exceed 1%. A basket's authority can lower fees at any time, but on a basket with holders a fee increase is announced on-chain and only takes effect three days later, so you can redeem at the old fee first. A change never applies to a mint or redeem already in progress.

## Where do the prices in the app come from?

NAV mostly uses Jupiter's price API, with a few other sources for specific tokens. The market liquidity panel on a basket's page uses DexScreener. Rebalances use Basket's signed oracle. See [Price oracle](/protocol/oracle/).

## Which wallets work?

Any Solana wallet that supports the Wallet Standard, such as Phantom, Solflare or Backpack.
