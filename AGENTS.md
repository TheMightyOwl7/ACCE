# ACCE Tutors — Agent Instructions

## What this is

The marketing and study-resource website for **ACCE Tutors** (production:
**accetutors.co.za**), a one-person CA(SA)/CTA accounting tutoring business run by
**Priyanka Govender**. Vertere Labs builds and maintains it.

The site does two jobs: convert visitors into tutoring enquiries (every CTA routes to
WhatsApp or email — there is no form backend), and publish exam-focused IFRS study guides
for CA(SA), CTA and PGDA students.

**This is live client-facing work for a real named person's business.** Treat changes
accordingly: a broken CTA is lost revenue for a sole trader, not a cosmetic bug.

## Read these first

The repo has thorough generated documentation under `docs/`:

- `docs/project-overview.md` — what the site is, full stack table, where code lives
- `docs/architecture.md` — structure and component design
- `docs/development-guide.md` — local workflow
- `docs/deployment-guide.md` — build model and the Coolify path
- `docs/STRATEGY.md`, `zSEO/` — positioning and SEO working notes

They were generated 2026-07-04 from a deep scan. If you find them contradicting the code,
the code wins — say so in your PR rather than silently working around it.

## Where the code is

**The website is `acce-nextjs/`.** Everything else at repo root — `contentfiles/`,
`content-templates/`, `design-artifacts/`, `docs/`, `zSEO/`, `zdeploy/`, `_bmad/`,
`_bmad-output/` — is supporting material: source content, strategy notes, SEO working files,
planning artifacts. **None of it is deployed.** Do not edit files outside `acce-nextjs/`
expecting them to change the live site.

## Stack

- Next.js 16 App Router, `output: 'standalone'`, React Compiler enabled
- React 19 + TypeScript (strict)
- Tailwind CSS 3, HSL CSS-variable design tokens, dark-first
- shadcn/ui — Radix primitives + CVA, ~49 components under `src/components/ui/`
- react-query / react-hook-form / zod are installed and wired but **not exercised by any live
  feature**. Their presence is not evidence of a data layer. There is no backend, database,
  auth, or API.

## Running and verifying

```bash
cd acce-nextjs
npm install
npm run dev          # http://localhost:3000
npm run build        # must pass before any PR
npm run lint
npm run test         # vitest unit tests
npm run test:e2e     # playwright
```

Run `npm run build`, `npm run test` and `npm run test:e2e` before opening a PR. This site is
static and content-heavy, so a passing build catches most breakage — but the e2e suite is
what protects the conversion paths.

## Guardrails

- **Never commit to `main`.** Branch, then open a PR.
- **Never change a WhatsApp number, email address, or CTA destination** without explicit
  instruction. `wa.me/27713255295` is the business's actual phone. A silent edit here breaks
  the only conversion mechanism the site has.
- **Do not touch the CSP or security headers in `next.config.ts`** without flagging it. The
  policy allows `https://stats.verterelabs.co.za` for analytics; tightening or loosening it
  has consequences beyond this repo.
- **Do not remove the canonical `Link` headers** on the PDF routes
  (`/pdfs/ifrs-16-leases.pdf` and siblings). They exist for SEO attribution and are easy to
  mistake for dead config.
- **SEO changes are high-stakes.** This site's traffic is the business's pipeline. Metadata,
  sitemap, robots, redirects and canonical URLs get a PR with reasoning, never a drive-by fix.
- **Study-guide content is subject-matter material.** Do not rewrite, summarise, or
  "correct" IFRS content — it is written by a qualified CA(SA). Formatting and layout fixes
  are fine; substance is not yours to change.
- **Do not switch styling approaches.** Tailwind + the existing token system + shadcn
  primitives.

## House rules inherited from Vertere Labs

- Native `fetch()`, never axios.
- Keep `output: 'standalone'` — the Coolify deployment depends on it.
- Never export non-component values from a `"use client"` module for a Server Component to
  import — the import silently becomes `undefined` at runtime.
