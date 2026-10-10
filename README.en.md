<p align="center">
  <img src="site/brand/logo.svg" alt="AI Pay Insight" width="88">
</p>

<h1 align="center">AI Pay Insight</h1>

<p align="center">
  <b>A global radar for AI products and AI payment innovation</b><br>
  Track launches, public betas, and major updates—then identify mechanisms that can inspire AI-powered payments.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-176b75?style=flat-square" alt="MIT License"></a>
  <img src="https://img.shields.io/badge/Node.js-24-176b75?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js 24">
  <img src="https://img.shields.io/badge/PostgreSQL-17-176b75?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL 17">
  <img src="https://img.shields.io/badge/status-v0.1.0-176b75?style=flat-square" alt="v0.1.0">
</p>

<p align="center">
  <a href="README.md">简体中文</a> · <b>English</b>
</p>

## What it is

AI Pay Insight is not a generic AI news aggregator, and it is not limited to payment-industry news. It monitors newly launched, newly public, beta, and materially updated AI products around the world, then asks a focused question:

> What is genuinely new here, and which mechanisms could improve AI-powered payments?

The system collects from product-discovery platforms, developer communities, AI companies, payment providers, and technology media. It filters and scores each item, produces Chinese editorial copy, clusters reports into events, ranks attention, and publishes daily, weekly, and monthly editions.

## What we track

- AI-native payments, agent transactions, delegated payments, and automated purchasing
- New interaction patterns, task execution, and business models in AI products
- Authorization, limits, confirmation, revocation, and explainability
- Identity, trust, risk controls, privacy, compliance, and disputes
- Payment infrastructure, developer platforms, and agent-commerce ecosystems
- Product mechanisms that are not directly about payments but can transfer to AI payment scenarios

Thin wrappers, funding promotion, vague AI marketing, and repeated reposts do not qualify simply because they mention AI.

## Current release

- 22 launch sources spanning product discovery, first-party AI, payments, and developer ecosystems
- 12 priority sources added beyond the upstream examples
- 6 AI payment categories and 33 topics
- Daily briefing at 10:00 Beijing time
- Independent AI payment identity, icons, report nameplates, public API copy, and editorial prompts
- Full-text display and redistribution disabled by default; readers get an editorial summary and the original link

Core configuration:

| File | Purpose |
|---|---|
| [`site/site.ts`](site/site.ts) | Site identity, public copy, navigation, and edition times |
| [`industry/sources.json`](industry/sources.json) | Global product and payment sources |
| [`industry/taxonomy.ts`](industry/taxonomy.ts) | Categories, tags, and entities |
| [`industry/topics.json`](industry/topics.json) | Topic directory |
| [`industry/prompts/`](industry/prompts/) | Filtering, scoring, understanding, and writing rules |
| [`site/brand/`](site/brand/) | Independent AI payment brand assets |

## Editorial output

Each selected item explains:

1. The target user, problem, and core experience.
2. What is genuinely novel about the product.
3. Which interaction, authorization, trust, or business mechanisms can transfer to AI payments.
4. Which financial, privacy, compliance, and dispute risks appear once payment is involved.
5. Whether to validate now, keep watching, or defer.

## Run locally

You need Node.js 24, PostgreSQL 17, and an OpenAI-compatible model service. With Docker:

```bash
node scripts/init-env.ts --llm-key <your-model-api-key>
docker compose up -d --build
```

Open <http://localhost:3000>. The admin console is at `/admin`; configure its password with `ADMIN_PASSWORD` in `.env`.

See [`docs/deploy.md`](docs/deploy.md) for environments, domains, HTTPS, backups, and non-Docker deployment.

## Verify

```bash
npm run typecheck
npm test
node scripts/smoke.ts
```

The first release passes type checking, the production web build, and all 30 smoke checks. All customization-related tests pass; eight backup/restore tests require local `pg_dump` and `pg_restore` binaries.

## Roadmap

- Expand first-party launch and payment-innovation sources
- Improve daily deduplication and memory of previously covered products
- Calibrate AI payment value scores with labeled examples
- Add mechanism cards and validation checklists for product teams
- Connect a production domain, database, model service, and notification channels

## Upstream and license

This project is an industry-specific adaptation of the open-source hotspot engine created by 数字生命卡兹克. It uses an independent name, logo, and public identity; the upstream project's name and logo are not used as this project's brand.

The code is available under the MIT License in [`LICENSE`](LICENSE). The original copyright and license notice are retained. See [`NOTICE`](NOTICE) for font licenses.
