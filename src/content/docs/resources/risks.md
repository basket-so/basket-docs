---
title: Risks
description: What can go wrong when you hold, mint or redeem a basket, and what the protocol does about it.
---

Baskets are crypto assets, and crypto assets can lose most or all of their value. Read this before you put money in. Nothing in these docs is investment advice.

## Market risk

A basket is worth what its tokens are worth. Spreading across several tokens doesn't protect you when they all fall together. Tokens in the same theme often do. Some baskets hold small, volatile or highly speculative tokens.

## Liquidity and trading costs

Every mint buys each token, and every redeem sells it. Thinly traded tokens cost more to trade in large amounts, so large mints and redeems can land noticeably away from NAV. The app shows the estimated spend before you mint, and it protects each redeem with a minimum output. But it can't create liquidity that isn't there. Splitting large orders helps.

## Token risks

The tokens in a basket bring their own risks, which Basket doesn't control:

- **Bridged tokens** depend on their bridge. HYPE, ETH and UNI, for example, are held as Wormhole-bridged versions.
- **Stablecoins** depend on their issuer and can lose their peg.
- **Issuer controls.** Some tokens' issuers can freeze accounts, as Circle and Tether can for USDC and USDT. Some Token-2022 tokens let their issuer add a transfer hook or other controls. If an issuer used these powers on a basket's vault, it could stop that token from moving. That would block mints, redeems and rebalances for that basket.
- **Protocol tokens** depend on their protocols. A token's buybacks, staking or fee programs can change or stop.

## Smart contract risk

Basket's program and the programs it calls can have bugs. Basket's upgrade key can upgrade the program. That lets problems be fixed quickly, but it also means trusting that key. See [Security and trust](/protocol/security/).

## Rebalancing risk

A fixed-weight basket rebalances by trading, and trading costs come out of the basket. The program limits each rebalance's value loss to at most 1% at the signed oracle prices. Basket's keeper uses 0.5%. Those limits depend on the oracle's prices being right. See [Rebalancing](/baskets/rebalancing/) and [Price oracle](/protocol/oracle/).

## Composition changes

A fixed-weight basket's tokens can change. Holders get three days' notice before a change takes effect. If you don't want the new mix, redeem during the notice period.

## Operational risk

- Mints and redeems pause while a fixed-weight basket rebalances. The program limits how long and how often. Every rebalance expires within 30 minutes of opening.
- A basket's authority can pause mints or rebalances. Nobody can pause redeems.
- The app, the keeper and the oracle are off-chain services. If they're down, the program still works. But you'd need another way to build transactions, and rebalances wait.

## Markets

If you borrow in [Markets](/guides/markets/) and prices move against you, your position can be liquidated. A basket token's pool price can differ from its NAV, especially when the pool is small. Omnipair is a separate protocol with its own risks.

## NAV and prices in the app

NAV, TVL and price history in the app come from third-party price sources (Jupiter, DexScreener). They're estimates and can be wrong or delayed. What you actually receive is set by the swaps when you mint or redeem.
