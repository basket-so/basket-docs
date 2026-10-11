---
title: Security and trust
description: Who controls what in Basket, what nobody can do, and the protections built into the program.
---

A basket token is a claim on real tokens held in the basket's vaults. Basket is designed so that no one can take those tokens out of the vaults outside the program's rules, and no one can stop you from redeeming. This page explains who has which powers, and what the program stops anyone from doing.

## What nobody can do

- **Withdraw from the vaults.** Tokens leave a basket's vaults only through redeems, rebalance trades, and refunds of expired operations. Each of these runs under the program's checks. The program has no instruction that lets anyone withdraw vault tokens directly, and that includes a basket's authority.
- **Pause redeems.** The program has no redeem pause, for anyone: not Basket, not a basket's authority. New redeems only wait while a fixed-weight basket rebalances, within the limits under [The keeper](#the-keeper).
- **Freeze your basket tokens.** The basket token's freeze authority is a program address, and the program has no instruction that uses it.
- **Mint unbacked basket tokens.** Only the program can mint basket tokens, and only against deposits that cover them.
- **Raise fees without notice.** On a basket with holders, a fee increase is announced on-chain and can only take effect three days later, so you can redeem at the old fee first. Fees can be lowered at any time.
- **Charge more than 1%.** All the fee shares on a mint or redeem together can't exceed 1%.
- **Change fees on an operation in progress.** Fee rates are fixed when a mint or redeem opens.
- **Set rebalance prices.** Only prices signed by the oracle's key are accepted, and only for the specific rebalance they were signed for.

## A basket's authority

Every basket has an **authority**, the wallet that created it. Today Basket is the authority for every live basket. The authority can:

- lower the basket's fees at once, or raise them with three days' notice, up to the 1% cap
- choose the fee recipients
- pause mints or rebalances
- set a supply cap
- appoint the rebalance keeper
- propose, apply or cancel [composition changes](/baskets/composition-changes/), subject to the three-day notice
- open and unwind rebalances
- update the basket token's metadata
- hand the authority to another wallet

The authority can't do any of the things listed under [What nobody can do](#what-nobody-can-do).

## Community baskets

The program also supports **community baskets**, created by wallets other than Basket's for a creation fee of 0.2 SOL, paid to the Basket treasury. None exist yet, and creating one needs Basket's approval until creation is opened to everyone. A community basket's creator gets far less control than the authority of one of Basket's own baskets:

- **Fees.** The creator chooses the fee in steps of 0.10%, from 0.10% up to 1%. Each step splits 0.04% to the Basket treasury, 0.01% to the creator and 0.05% to BASKET stakers: 40%, 10% and 50% of the fee. The creator can't change that split, can't set a fee of zero, and needs to give three days' notice before raising the fee. Basket can change these terms for baskets created later; a basket keeps the split it was created with.
- **Fixed by the protocol.** Where the protocol's share goes, the keeper, the supply cap, pausing mints or rebalances, and the basket token's metadata. A creator can't pause anything.
- **Rebalances.** Only the keeper can request or open a rebalance, or stop one early, so a creator can't hold mints and redeems back.
- **Tokens.** Only tokens whose transfers nobody else controls: no freeze authority (USDC excepted), and on Token-2022 no extension that can charge, block or take a transfer. This applies to tokens added by composition changes too.
- **Symbols.** No two baskets share a symbol, or symbols that only differ by 0 and O or 1 and I.

Like any basket's authority, a creator can propose composition changes, which give holders three days' notice, and hand the basket to another wallet.

## The keeper

The keeper is a separate wallet the authority appoints to rebalance. On a community basket it's Basket's keeper, and only it can rebalance. It can request and open rebalances and run their trades, but only within the program's limits:

- Rebalances need a trigger: time, drift or a composition change.
- Prices must come from the oracle, fresh and signed for that rebalance.
- The program checks each trade against those prices, and the whole rebalance against value-loss, drift and idle-cash limits.
- Requests are spaced out. This means requests alone can hold mints and redeems back for at most 40 minutes of any hour. It also means a keeper can't reopen a rebalance straight after one is abandoned.

See [Rebalancing](/baskets/rebalancing/) and [Price oracle](/protocol/oracle/).

## No one can block other users

The program is built so that no single user can stop others from using a basket:

- Nobody can pause redeems.
- Mints and redeems from different users run side by side. Each user has their own operation.
- Anyone can cancel an expired operation. Its tokens go back to the owner or to a refund escrow, so an abandoned operation can't keep a basket stuck.
- Anyone can unwind an expired rebalance.
- Tokens sent straight to a basket's vaults don't affect its checks.
- A community basket's creator can't pause it, cap its supply or start its rebalances.

## The program

- **Program ID:** `bskthjNMRWQ4ekDLxaAzA1e39ThPmEtUgHY3XHfs7qv`. See [Addresses](/protocol/addresses/).
- **Upgradeable.** Basket's upgrade key can upgrade the program. That lets bugs be fixed, but it also means trusting whoever holds the key, since an upgrade could change any rule on this page.
- **Protocol settings.** A protocol-level authority controls who can create baskets and the terms community baskets get. Only Basket's own creator wallet can create the baskets Basket runs. Creating a basket gives no power over any other basket.

## Token restrictions

- A basket can't hold its own token.
- A Token-2022 token that charges transfer fees can't be a component. A fee taken on the way into a vault would leave the basket's books showing more than its vault holds.
- Tokens added later by a composition change must be classic SPL tokens.
- Community baskets have stricter rules, listed under [Community baskets](#community-baskets).

Tokens like USDC and USDT have issuers who can freeze accounts. Some Token-2022 tokens give their issuer other controls. Those powers belong to the token's issuer, not to Basket. They're covered in [Risks](/resources/risks/).
