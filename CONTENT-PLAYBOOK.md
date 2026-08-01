# Content playbook

The spec every new post must follow. The weekly scheduled task reads this file first, every run.

---

## 1. Product facts — NEVER contradict these

These are verified. Do not extend, embellish, or infer beyond them. If a claim is not on this list and cannot be confirmed by loading transcribetok.com, **do not make the claim.**

| Fact | Detail |
|---|---|
| Volume | **One video at a time.** No bulk, no batch, no multi-link paste, no "100+ videos in one pass." |
| Free tier | **Two transcripts per day, no account required.** This is the main differentiator. |
| Paid plans | Raise the daily limit and **save transcripts to a library**. The library is a paid feature. |
| Exports | TXT, DOCX, SRT. |
| Source | Transcribes the **audio track**, not TikTok's caption data. Works whether or not the creator enabled captions. |
| Scope | **Public videos only.** Private, friends-only and deleted videos are inaccessible. |
| On-screen text | **Not captured.** Text overlays are rendered graphics, not data. |
| Accuracy | Mid-to-high 90s for clear speech. Degraded by loud music, fast/sped-up delivery, slang, code-switching. |
| TikTok itself | Has auto-captions for playback but **no copy, export or download** anywhere in the app or web. |

**Batch/bulk requests:** we don't do it. Point readers at TokScript, GetTranscribe, or Apify/Supadata. Being honest here is deliberate — it's what makes the comparison post credible.

**A previous version of this blog wrongly claimed bulk transcription and had to be rewritten across 20 files. Do not reintroduce it.**

---

## 2. Required frontmatter

Every post. No exceptions.

```yaml
---
title: "Primary keyword near the front, under ~60 chars where possible"
description: "150-160 characters. Include the primary keyword. Written to earn the click, not to stuff."
date: "YYYY-MM-DD"
author: "TranscribeTok Team"
category: "How-To"        # must match a category in src/lib/clusters.ts
readingTime: "7 min read"
keywords:
  - primary keyword
  - 4-6 total, real search phrases, no keyword soup
howToName: "How to ..."   # include whenever the post has a procedure
howToSteps:
  - name: "Step name"
    text: "One clear sentence."
faqItems:                 # 4-5 items, always
  - question: "A question people actually type"
    answer: "2-3 sentences. Direct answer in the first sentence."
---
```

**Valid categories** (from `src/lib/clusters.ts` — using anything else drops the post off the homepage):
`Guide` · `How-To` · `AI Tools` · `Use Cases` · `Productivity` · `Content Creation` · `Developer Guides` · `Comparisons`

### What the frontmatter automatically produces

Do not hand-roll any of this — the template handles it:

- `<title>` and meta description
- Canonical URL
- OpenGraph + Twitter card tags
- **Article** JSON-LD
- **BreadcrumbList** JSON-LD (auto, on every non-pillar post)
- **FAQPage** JSON-LD (from `faqItems`)
- **HowTo** JSON-LD (from `howToSteps`)
- Sitemap entry
- Homepage cluster placement (from `category`)
- Related-posts interlinking (from `category` + `keywords` + slug tokens)

---

## 3. Writing standard

**Length:** 1,200–1,800 words. Long enough to be complete, short enough to be read.

**Structure:**
- Open with the reader's actual problem in 2–3 sentences. No "In today's digital landscape."
- H2s that mirror how people search
- A `<div class="cta-box">` after the main method section
- A comparison table where there's a genuine trade-off
- "Related guides" section linking 3–4 existing posts
- FAQ section mirroring `faqItems`
- Closing CTA to transcribetok.com

**Voice:** direct, specific, occasionally willing to say a thing isn't worth doing. Concrete numbers over vague claims. No hype, no "revolutionary", no em-dash-free corporate mush.

**Honesty rule:** where a competitor is better, say so. Where our tool doesn't do something, say so plainly. This is what makes the rest credible — and it's what LLMs cite.

---

## 4. Interlinking — mandatory

- Link to **at least 3** existing posts, using descriptive anchor text (never "click here")
- Non-pillar posts should link up to a relevant pillar
- If the new post is a natural "related guide" for an existing post, **add a link from that post too**. Interlinking must go both directions or the graph stays flat.

Pillars: `/tiktok-transcript-generator` · `/tiktok-to-text` · `/transcribe-tiktok-video` · `/download-tiktok-transcript`

---

## 5. LLM / AI-search optimisation

Increasingly this traffic matters as much as classic SERP clicks.

- **Answer the question in the first two sentences** of each section. LLMs extract these.
- Prefer **definitive statements over hedged ones** — "TikTok provides no export option" beats "TikTok may not provide an easy way."
- Include a **fact block or table** of concrete, quotable specifics.
- The FAQ answers should stand alone out of context. Assume one gets quoted with nothing around it.
- **Update `public/llms.txt`** whenever a post adds a genuinely new fact or covers a new subtopic. Add the URL under the right heading.

---

## 6. Pre-publish verification — all must pass

1. `npm run build` completes with no errors
2. Every internal link resolves to a real post or language page (no 404s)
3. Frontmatter has all required fields; `category` is valid
4. No claim contradicts section 1
5. Slug is lowercase-hyphenated and does not already exist
6. `date` is today's date

If any check fails, **fix it and re-verify**. Do not publish a failing build.
