# Basket Docs

Documentation for [Basket](https://app.basketsolana.xyz), a protocol on Solana that turns a set of tokens into one fully backed token you can mint and redeem with USDC.

**Read the docs:** [docs.basketsolana.xyz](https://docs.basketsolana.xyz)

The site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), and includes full-text search.

## Getting started

You need [Node.js](https://nodejs.org) 22.12 or later.

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:4321 and reloads as you edit.

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run sync-baskets` | Refresh the basket data from the Basket app |

Search is generated during the build, so it works in `npm run preview` but not in `npm run dev`.

## Project structure

```
src/
├── content/docs/      Pages, one Markdown or MDX file each (the file path is the URL)
│   ├── start/         Introduction and quickstart
│   ├── guides/        Minting, redeeming, recovery, staking and markets
│   ├── baskets/       Live baskets, basket types, rebalancing and proposals
│   ├── protocol/      How it works, fees, the price oracle, security and addresses
│   └── resources/     Risks, FAQ and glossary
├── components/        Basket list, animated diagrams and theme overrides
├── data/baskets.json  The live baskets: components, weights, fees and addresses
└── styles/            Site theme and diagram styles
astro.config.mjs       Site settings and sidebar navigation
```

## Contributing

Corrections and improvements are welcome. Open an issue or a pull request.

- **Edit a page:** change its file in `src/content/docs/`.
- **Add a page:** create a new `.md` or `.mdx` file there, then add it to the `sidebar` in `astro.config.mjs`.
- **Diagrams:** each animated diagram is a component in `src/components/diagrams/`, used from `.mdx` pages. They are pure CSS, and they show a static version to readers who prefer reduced motion.

Statements about how the protocol works should match the on-chain program and the app.

## Basket data

The Live baskets, Fees and Addresses pages are generated from `src/data/baskets.json`. To update it from the Basket app's public API, run:

```sh
npm run sync-baskets
```

Fixed-weight baskets take their target weights from the API. Fixed-unit baskets keep the launch weights already in the file, so a new fixed-unit basket needs its components' `weightBps` added by hand.

## Deployment

The site is served as static files by nginx. The `Dockerfile` builds it and `fly.toml` deploys it to [Fly.io](https://fly.io):

```sh
fly deploy --ha=false
```
