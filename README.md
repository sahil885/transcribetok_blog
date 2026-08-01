# TranscribeTok Blog

SEO blog for [TranscribeTok](https://transcribetok.com), built on the same architecture as the YTTranscript blog.

**Stack:** Next.js 16 (App Router, Turbopack) · Tailwind v4 · Markdown posts via gray-matter + remark · deployed on Vercel.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Adding a post

Drop a `.md` file in `posts/`. The filename becomes the URL slug. Frontmatter:

```yaml
---
title: "Post title (this becomes the H1 and the <title>)"
description: "150–160 char meta description"
date: "2026-08-05"
author: "TranscribeTok Team"
category: "How-To"        # see src/lib/clusters.ts for valid categories
readingTime: "6 min read"
keywords:
  - primary keyword
  - secondary keyword
howToName: "How to ..."   # optional — emits HowTo schema
howToSteps:
  - name: "Step name"
    text: "Step description"
faqItems:                 # optional — emits FAQPage schema
  - question: "..."
    answer: "..."
---
```

Everything else is automatic: sitemap entry, canonical URL, OpenGraph/Twitter tags, Article + Breadcrumb + FAQ + HowTo JSON-LD, related-post interlinking, and homepage placement based on `category`.

## Structure

| Path | Purpose |
|---|---|
| `posts/*.md` | All articles |
| `src/lib/posts.ts` | Markdown parsing + related-post scoring |
| `src/lib/clusters.ts` | Category → homepage cluster mapping, pillar slugs, bulk-CTA logic |
| `src/lib/languages.ts` | Programmatic per-language pages (`/{language}-tiktok-transcript`) |
| `src/app/[slug]/page.tsx` | Post + language page renderer, all JSON-LD schema |
| `public/llms.txt` | Structured summary for LLM crawlers — update when adding key posts |

## Pillars

The four "Start Here" pages are set in `src/lib/clusters.ts` (`PILLAR_SLUGS`). Pillars skip the breadcrumb and act as hubs; every other post breadcrumbs up to `tiktok-transcript-generator`.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (`G-XXXXXXXXXX`). Analytics is skipped entirely if unset. |

## Deployment

See `DEPLOYMENT.md` for the full Vercel + IONOS DNS + Search Console + GA4 walkthrough.
