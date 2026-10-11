# Basket Docs

The documentation site for Basket, served at **docs.basketsolana.xyz**. It's built with [Astro Starlight](https://starlight.astro.build): Markdown pages compiled to a static site, with built-in search.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Build the site into `dist/`, including the search index |
| `npm run preview` | Serve the built site locally (search only works here, not in dev) |
| `npm run sync-baskets` | Refresh the basket list from the live app (see below) |

## Layout

```
src/
  content/docs/        one Markdown (.md/.mdx) file per page; the path is the URL
    start/             What is Basket, Quickstart
    guides/            mint, redeem, recover, staking, markets
    baskets/           live baskets, basket types, rebalancing, composition changes, proposing
    protocol/          how it works, fees, oracle, security, addresses
    resources/         risks, FAQ, glossary
  components/BasketList.astro   renders the live basket list
  components/diagrams/          animated diagrams of the core concepts (pure CSS)
  components/overrides/         keeps the site light-only (no theme picker)
  data/baskets.json             every live basket: weights, fees, addresses
  styles/basket.css             Basket's colors and font on Starlight
  styles/diagrams.css           shared pieces for the diagrams
astro.config.mjs       site settings and the sidebar
```

To add a page, create a file under `src/content/docs/` and add it to the `sidebar` in `astro.config.mjs`.

The site is light-only and uses one typeface, DM Sans, for everything including code.

## Diagrams

Each core concept has a looping CSS animation: what a basket is, mint, redeem, recovery, staking rewards, fixed units vs fixed weights, rebalance triggers, composition changes, backing, fees and the oracle. Each one is an Astro component in `src/components/diagrams/`, imported into its page (pages that use one are `.mdx`).

- Every part of a diagram animates on one loop of length `--t`, with keyframe percentages as the timeline.
- Base styles draw the complete picture. Motion is added only under `prefers-reduced-motion: no-preference`, so readers who turn animation off get a static diagram with every step listed.
- BasketConcept, MintFlow, RedeemFlow and FeeSplit read their baskets and fees from `baskets.json`. The rest use worked examples.

## Keeping the basket data current

The Live baskets, Fees and Addresses pages read `src/data/baskets.json`. After a basket launches, or its fees or composition change, run:

```
npm run sync-baskets
```

It reads the app's public API (`app.basketsolana.xyz/api/protocol?public=1`) and rewrites the file with every basket the app lists, using the app's descriptions. Fixed-weight baskets get their target weights from the chain. Fixed-units baskets store token quantities, not weights, so their launch weights are kept from the existing file; for a new fixed-units basket, add each component's `weightBps` by hand.

Facts in the prose pages (fee caps, the oracle's checks, rebalance limits) come from the program in `basket-rs` and the app in `basket-ui`. Update them when those change.

## Deploying

The site deploys to Fly as the app `basket-docs`: `Dockerfile` builds it and serves `dist/` with nginx on port 8080.

First deploy:

```
fly apps create basket-docs
fly deploy
fly certs add docs.basketsolana.xyz
```

Then add the DNS record Fly prints for `docs.basketsolana.xyz`, usually a CNAME to `basket-docs.fly.dev`. After that, `fly deploy` publishes changes.
