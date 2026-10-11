---
title: Glossary
description: Terms used across Basket and these docs.
---

- **Authority**: the wallet that controls a basket's settings, such as fees, pauses, keeper and composition changes. It can't withdraw from the vaults. See [Security and trust](/protocol/security/).
- **Basket** (also *index*): a token backed by a set of other tokens held in program-owned vaults.
- **BASKET**: Basket's protocol token. Stake it to earn a share of fees in USDC.
- **Component**: one of the tokens a basket holds.
- **Composition change**: a change to a fixed-weight basket's tokens or target weights, which takes effect only after three days' notice.
- **Drift**: how far a token's current weight is from its target, in percentage points.
- **Fixed units**: a basket that holds a set quantity of each token and never rebalances.
- **Fixed weights**: a basket that targets set percentages and is rebalanced back to them.
- **In kind**: minting or redeeming with the component tokens themselves instead of USDC. The program supports it, but the app interface doesn't expose this feature.
- **Intent**: the on-chain record of a mint, redeem or rebalance while it runs over several transactions.
- **Keeper**: the wallet a basket's authority appoints to run rebalances, within the program's limits.
- **Leg**: one component's part of a mint, redeem or rebalance, usually one swap.
- **NAV** (net asset value): what one basket token's share of the vaults is worth at current prices.
- **Oracle**: Basket's price service, which signs the prices rebalances use.
- **Rebalance**: trading a fixed-weight basket back to its target weights.
- **Refund escrow**: a program account that holds tokens returned from an expired operation until their owner claims them.
- **Supply era**: a count of how many times a basket has emptied and been refilled. It keeps a mint from settling against a basket that has emptied since the mint opened.
- **TVL** (total value locked): NAV times supply, the total value a basket holds.
- **Units per basket token**: how much of each token one basket token stood for when the basket was created. It's used for the first mint into an empty basket.
- **Vault**: a program-owned token account holding one of a basket's components.
