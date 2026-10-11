// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// One typeface everywhere, code included.
const fonts = 'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.basketsolana.xyz',
	integrations: [
		starlight({
			title: 'Basket Docs',
			description: 'Basket turns a set of Solana tokens into one token you can mint and redeem with USDC.',
			logo: {
				src: './src/assets/basket-logo.svg',
				alt: 'Basket',
			},
			favicon: '/favicon.svg',
			customCss: ['./src/styles/basket.css', './src/styles/diagrams.css'],
			// Light-only: no theme picker, and every page renders in the light palette.
			components: {
				ThemeProvider: './src/components/overrides/ThemeProvider.astro',
				ThemeSelect: './src/components/overrides/ThemeSelect.astro',
			},
			head: [
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
				{ tag: 'link', attrs: { rel: 'stylesheet', href: fonts } },
			],
			social: [
				{ icon: 'x.com', label: 'Basket on X', href: 'https://x.com/Basket_on_sol' },
			],
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'What is Basket', slug: 'start/what-is-basket' },
						{ label: 'Quickstart', slug: 'start/quickstart' },
					],
				},
				{
					label: 'Using Basket',
					items: [
						{ label: 'Mint a basket', slug: 'guides/mint' },
						{ label: 'Redeem a basket', slug: 'guides/redeem' },
						{ label: 'Finish or recover a mint or redeem', slug: 'guides/recover' },
						{ label: 'Stake BASKET', slug: 'guides/staking' },
						{ label: 'Markets', slug: 'guides/markets' },
					],
				},
				{
					label: 'Baskets',
					items: [
						{ label: 'Live baskets', slug: 'baskets/live-baskets' },
						{ label: 'Fixed units and fixed weights', slug: 'baskets/basket-types' },
						{ label: 'Rebalancing', slug: 'baskets/rebalancing' },
						{ label: 'Composition changes', slug: 'baskets/composition-changes' },
						{ label: 'Propose a basket', slug: 'baskets/propose' },
					],
				},
				{
					label: 'Protocol',
					items: [
						{ label: 'How it works', slug: 'protocol/how-it-works' },
						{ label: 'Fees', slug: 'protocol/fees' },
						{ label: 'Price oracle', slug: 'protocol/oracle' },
						{ label: 'Security and trust', slug: 'protocol/security' },
						{ label: 'Addresses', slug: 'protocol/addresses' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Risks', slug: 'resources/risks' },
						{ label: 'FAQ', slug: 'resources/faq' },
						{ label: 'Glossary', slug: 'resources/glossary' },
					],
				},
			],
		}),
	],
});
