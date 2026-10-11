---
title: Propose a basket
description: Suggest a new basket, and how proposers can earn from the baskets they propose.
---

Several live baskets started as ideas from the community, including METADAO and BUYB. If you have a theme you'd like to hold as one token, propose it.

## What makes a good basket

- **A clear thesis.** One sentence that says why these tokens belong together, such as "protocols that turn revenue into buybacks of their own token".
- **Tokens with real liquidity on Solana.** Every token is bought on mint and sold on redeem through Jupiter. Each one needs enough liquidity for those trades. If the basket rebalances, each token also has to pass the oracle's pricing checks.
- **Sensible weights**, and a choice between [fixed units and fixed weights](/baskets/basket-types/).
- **Up to 40 tokens.** In practice, most baskets hold 2 to 10.

## How it works today

Bring your proposal to the Basket community on [Discord](https://discord.gg/NPMQHyj33k). Basket reviews each one for liquidity, token risks (bridged tokens, issuer controls, transfer fees) and overlap with existing baskets. It suggests changes where needed.

If it goes ahead, Basket creates and runs the basket. It holds the basket's authority, runs the keeper for rebalancing, and lists the basket in the app.

## Earning as a proposer

A basket can name a **creator fee recipient**. This is a wallet that receives part of the basket's mint and redeem fees, paid automatically in USDC on every mint and redeem. Proposers can be offered this role. For example, BUYB's proposer receives 0.01% of every BUYB mint and redeem.

The creator fee recipient only receives money. It has no say over the basket. It can't change fees, pause the basket or change its tokens. The basket's authority sets the creator's share, within the overall 1% fee cap.
