---
title: Create a basket
description: Launch your own community basket from the app, what it costs, what you earn and the rules it runs under.
---

Any wallet can create a basket on the app's [Create page](https://app.basketsolana.xyz/create). It becomes a **community basket**: you choose its tokens, weights and fee, and the program fixes the rest of its rules. Basket's own baskets are marked **Core** in the app; community baskets are listed under **Community**.

## Steps

1. **Pick the tokens.** Search by name or paste a token address. The page checks each token against the program's rules and its markets as you add it. A basket holds up to 40 tokens, each at least 0.5% of it.
2. **Choose how it holds them.** A [fixed-weight](/baskets/basket-types/) basket trades back to its targets on a schedule you set, up to 30 days apart, or when a token drifts from its target. A fixed-units basket holds the same amount of each token, so its weights move with prices.
3. **Set the fee** on each mint and redeem, from 0.10% to 1% in steps of 0.10%, and the wallet that receives your share.
4. **Name it.** A name of up to 32 bytes and a symbol of up to 10 letters and digits that no other basket uses. You can add a description of up to 400 characters and a square logo of up to 2 MB, or link your own metadata file on IPFS or Arweave instead. None of these can be changed after launch.
5. **Check the backtest.** The page shows how the basket would have done over the last year with your settings.
6. **Create it.** Your wallet asks for two approvals: first the basket's lookup table, then the basket itself. Your wallet may warn that a later transaction could fail. Each one builds on the one before it, so the wallet can't check it on its own; they are sent in order.

Every basket starts at $1.00. Its first mint sets it going, and it appears in the app within a few minutes.

## What it costs

- **Creation fee:** 0.1 SOL, paid to the Basket treasury. Basket can change it, but never above 1 SOL.
- **Accounts and metadata:** a few hundredths of a SOL for the basket's accounts and its token metadata. The page shows the total before you create.
- **Network fees** for the transactions.

## What you earn

Your share is 10% of the basket's fee: 0.01% for every 0.10% step. It's paid in USDC to the wallet you named, on every mint and redeem. Of the rest, 40% goes to the Basket treasury and 50% to [BASKET stakers](/guides/staking/).

## The rules it runs under

- **Rebalancing** is done by Basket's keeper alone. You can't start, pause or stop a rebalance.
- **No pauses.** You can't pause mints, rebalances or redeems, or cap the supply.
- **Fees.** You can lower the fee at any time. Raising it needs three days' notice. You can't change the split or set the fee to zero.
- **Tokens.** No token with a freeze authority (USDC excepted), and no Token-2022 extension that can charge, block or take a transfer.
- **Changes.** You can propose [composition changes](/baskets/composition-changes/), which give holders three days' notice, and hand the basket to another wallet.

The full list is under [Community baskets](/protocol/security/#community-baskets) in Security and trust. Basket doesn't review community baskets before they launch; see [Risks](/resources/risks/#community-baskets).

If you'd rather Basket ran your idea as a Core basket, [propose it](/baskets/propose/).
