// Refreshes src/data/baskets.json from the live app's public API: the baskets it lists, their
// names, descriptions, kinds, fees, rebalance settings, components and addresses.
//
//   npm run sync-baskets
//
// Fixed-weight baskets take their weights from the chain (target weights). Fixed-units baskets
// have no stored weights, only token quantities, so their launch weights are kept from the
// current file; a new fixed-units basket gets no percentages until you add them by hand.
// Tickers already in the file are kept too; new tokens use their on-chain metadata symbol.
import fs from 'node:fs';

const FILE = new URL('../src/data/baskets.json', import.meta.url);
const API = process.env.BASKET_API ?? 'https://app.basketsolana.xyz/api/protocol?public=1';
const USDC = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
const NO_RECIPIENT = '11111111111111111111111111111111';

const current = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const previous = new Map(current.baskets.map((b) => [b.mint, b]));
const response = await fetch(API, { signal: AbortSignal.timeout(90_000) });
if (!response.ok) throw new Error(`${API} answered ${response.status}`);
const indexes = (await response.json()).live?.indexes;
if (!Array.isArray(indexes) || !indexes.length) throw new Error('The API listed no baskets');

const baskets = indexes
	.filter((index) => index.description)
	.map((index) => {
		const fixedWeights = index.kind === 'fixedWeights';
		const known = new Map((previous.get(index.mint)?.components ?? []).map((c) => [c.mint, c]));
		const components = index.components
			// The zero-weight USDC slot only carries rebalance cash.
			.filter((c) => !(fixedWeights && c.mint === USDC && !c.targetWeightBps))
			.map((c) => ({
				// Keep a known token's ticker: token metadata spells some oddly ("$WIF", "Bonk").
				symbol: known.get(c.mint)?.symbol ?? c.symbol,
				mint: c.mint,
				weightBps: fixedWeights ? c.targetWeightBps : known.get(c.mint)?.weightBps ?? null,
				tokenProgram: c.tokenProgram?.startsWith('Tokenz') ? 'token-2022' : 'spl',
			}));
		return {
			symbol: index.symbol,
			name: index.name,
			kind: index.kind,
			description: index.description,
			index: index.address,
			mint: index.mint,
			feeBps: {
				total: index.mintFeeBps + index.creatorMintFeeBps + index.stakingMintFeeBps,
				protocol: index.mintFeeBps,
				creator: index.creatorMintFeeBps,
				staking: index.stakingMintFeeBps,
			},
			rebalance: fixedWeights
				? { intervalDays: Number(index.fixedWeightRebalanceIntervalSeconds) / 86_400, driftBps: index.fixedWeightDriftThresholdBps }
				: null,
			community: Boolean(index.creatorFeeRecipient) && index.creatorFeeRecipient !== NO_RECIPIENT,
			components,
		};
	})
	// Keep the existing order, with new baskets at the end.
	.sort((a, b) => {
		const order = (x) => { const i = current.baskets.findIndex((c) => c.mint === x.mint); return i < 0 ? Infinity : i; };
		return order(a) - order(b);
	});

const missing = baskets.flatMap((b) => b.components.filter((c) => c.weightBps == null).map((c) => `${b.symbol}/${c.symbol}`));
const next = { ...current, updated: new Date().toISOString().slice(0, 10), baskets };
fs.writeFileSync(FILE, JSON.stringify(next, null, 2) + '\n');
console.log(`${baskets.length} baskets written to src/data/baskets.json`);
if (missing.length) console.log(`No launch weight for ${missing.join(', ')}; add weightBps by hand.`);
