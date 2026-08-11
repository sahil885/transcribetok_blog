# TranscribeTok Blog — Weekly Research, Write & Publish Task

Revised 2026-08-11 after the channel analysis in `CHANNEL-ANALYSIS.md`.

Research, write and publish **2 new blog posts** to blog.transcribetok.com. They go live automatically — nobody reviews them before publication, so accuracy is your responsibility.

Repo folder: `C:\Users\asus\Documents\transcribetok_blog_repo`
Live site: https://blog.transcribetok.com
GitHub: https://github.com/sahil885/transcribetok_blog (public, branch `main`)
Vercel auto-deploys `main` within ~2 minutes of a push.

---

## Strategy context — read this before choosing anything

Measured on the sister property blog.yttranscript.app, which is ~3 months ahead of us:

- **~41% of its traffic comes from the Bing index family** (Bing, DuckDuckGo, Yahoo, Ecosia). Google organic is 1.8%. The GA4 "AI Assistant" channel is under 1%.
- **Bing's index is what ChatGPT's search retrieval runs on.** Ranking in Bing is upstream of AI citation. That is the channel to optimise for.
- **Language pages earn nearly all the clicks.** On YTTranscript, `youtube transcript tamil / bengali / hindi / bangla / urdu` sit at position 7–9 with 9–20% CTR. Head terms sit at position 17–33 with sub-1% CTR.
- **Comparison posts and use-case posts are the formats models quote.** YTTranscript has 20 `vs` posts and 17 `for [audience]` posts. We have 2 and 1.

So: prefer comparisons and use-cases, keep feeding the language pages, and never assume Google is the only search channel that matters.

---

## STEP 0 — Standing checks (run these FIRST)

Open items carried between runs. Report the result of each in the final summary even when nothing has changed. If an item is resolved, say so and stop carrying it.

**0a. transcribetok.com homepage meta description.**
Load https://transcribetok.com and read all three meta tags: `description`, `og:description`, `twitter:description`.

- **Wrong (still live as of 2026-08-11):** *"Transcribe Tok helps you easily extract accurate transcripts from 100+ TikTok videos, managing your content library with a simple credit-based system."*
- **Correct (Sahil replaced the copy on 2026-08-07, has not published):** *"is an online tool designed to extract and convert spoken audio from any TikTok video into a written text transcript."*

The wrong version is the "100+ videos" bulk claim that caused a 20-file rewrite. Cache-busted `no-store` fetches on 2026-08-08 and 2026-08-11 both returned the old string, so this is a failed publish rather than an edge cache. Check all three tags, not just `description`. Drop this check once the new text is live everywhere.

**0b. Bing indexing and IndexNow.** *(new, added 2026-08-11)*
This is currently the highest-leverage open item on the property.

- Check whether `public/indexnow-*.txt` (or equivalent key file) exists in the repo and whether new URLs are being pinged on deploy. As of 2026-08-11 there is **no IndexNow implementation at all**.
- Report whether blog.transcribetok.com appears in Bing Webmaster Tools. If Sahil hasn't set it up, keep flagging it — Bing Webmaster Tools can import verified properties straight from Google Search Console.
- Baseline to beat: **1 Bing session in the 28 days to 2026-08-11**, against 297 for YTTranscript.

Do not attempt to verify Bing indexing by solving a CAPTCHA. If `site:` queries are challenged, report that and move on.

**0c. Playbook section 1 vs. real pricing.**
`CONTENT-PLAYBOOK.md` says paid plans "raise the daily limit." The pricing page (re-verified 2026-08-11) sells **one-time credit packs** — $5/150, $12/500, $29/1,500, $59/4,000 — no subscription, credits never expire. Also verified and not yet in the playbook: a **30-day money-back guarantee** (valid under 20 transcripts used), and **no credit charged when a video has no spoken audio**. Free tier (2/day, no signup) and the saved transcript library are correct as written.

**Do not edit the product-facts table yourself.** Keep flagging it until Sahil confirms wording. If a post needs to describe paid plans, use the verified facts above.

**0d. Language-page positions.**
`tiktok transcript arabic` moved 11.7 (2026-08-08) → 9.2 (2026-08-11) and is the best-positioned query on the property. Check where it and any other language queries now sit. Language pages are the proven click engine — if any is within striking distance of the top 5, adding internal links to it is a better use of a spare edit than almost anything else.

---

## STEP 1 — Load the rules

Read these in the repo. They are the source of truth:

- `CONTENT-PLAYBOOK.md` — product facts, frontmatter spec, writing standard, verification checklist
- `TOPIC-QUEUE.md` — what's been written, what's next
- `CHANNEL-ANALYSIS.md` — where traffic actually comes from and why

**The product facts section of the playbook is non-negotiable.** TranscribeTok does ONE video at a time — no bulk, no batch, no "100+ videos". Free tier is 2 transcripts/day with no signup. Paid tiers are one-time credit packs that also save transcripts to a library (see 0c — the playbook's wording is known stale). If tempted to state a capability not listed there, either verify it by loading transcribetok.com or leave it out. **A previous version of this blog invented a bulk feature and needed 20 files rewritten.**

Also list `posts/` so you know exactly what exists.

---

## STEP 2 — Choose 2 topics

**Default shape each run: one comparison + one use-case or language-cluster post.** These are the two formats that earn citations and clicks. Deviate only if Search Console surfaces something better.

Selection order:

1. **Search Console data.** Open the `https://blog.transcribetok.com/` property → Performance → last 28 days → enable Average position. Look for queries with real impressions at position 11–30 that no existing post targets. **Check the query isn't already served by an existing post OR by a programmatic language page at `/{language}-tiktok-transcript`** — writing a duplicate cannibalises. If nothing sits in 11–30, say so and move on.

2. **Comparison gaps.** One post per run should be a comparison. Untouched targets as of 2026-08-11: Saveto AI, VexaScribe, WayinVideo, TokTranscript, TokScribe, Descript, plus method comparisons (TikTok's own auto-captions vs a tool, local Whisper vs a tool, free vs paid tools). Done already: TokScript, GetTranscribe.

3. **Use-case gaps.** The `for [audience]` cluster has one post (creators) against YTTranscript's seventeen. Targets: marketers, social media managers, researchers, agencies, students, accessibility compliance, sales teams, language learning, SEO, podcasters.

4. **Language cluster.** We have 16 language pages; YTTranscript has 21 and gets its best CTR from them. If a run has no better option, adding **Tamil, Bengali, Hindi, Urdu, Chinese or Telugu** pages, or a `/tiktok-transcript-by-language` hub, is a legitimate choice. Report it as such.

5. **Roadmap queue.** Next unchecked items from `TOPIC-QUEUE.md` in listed order.

Pick 2 that are not near-duplicates of each other or of anything in `posts/`. Prefer two different clusters. Note that Productivity, Content Creation and Developer Guides all render as the same "Integrations & Workflows" cluster.

---

## STEP 3 — Research

Web-search each topic properly before writing. Verify anything factual — TikTok feature behaviour, competitor capabilities, pricing claims, format specs. Do not assert from memory; TikTok's product and the competitive field both change.

For a comparison post, **load the competitor's actual site** and describe what it really does. Where they're better than us, say so — that honesty is deliberate and it's why the comparison posts are credible. Pay attention to free-tier *shape*: most competitors' free tiers are lifetime totals while ours resets daily, and that is consistently our sharpest honest differentiator.

---

## STEP 4 — Write

Follow `CONTENT-PLAYBOOK.md` sections 2–5 exactly: full frontmatter (title, description 150–160 chars, date = today, author, category from the valid list, readingTime, keywords, howToName + howToSteps, 4–5 faqItems), **1,200–1,800 words**, cta-box after the main method, comparison table where there's a real trade-off, Related guides section, FAQ section, closing CTA.

Frontmatter drives all SEO automatically — title/meta, canonical, OpenGraph, Twitter card, Article + BreadcrumbList + FAQPage + HowTo JSON-LD, sitemap entry, homepage placement, related-post links. Don't hand-roll any of it.

Write files as `posts/<slug>.md`.

**Citation-optimisation rules** (these are what get a page quoted by a model):
- Answer the question in the **first two sentences** of each section.
- Prefer **definitive statements over hedged ones**.
- Every post gets a **comparison table** of concrete, quotable specifics — not only `vs` posts.
- Give a **clear verdict**: state plainly who each option is best for.
- FAQ answers must **stand alone out of context**. Assume one gets quoted with nothing around it.

**Interlinking is mandatory and bidirectional:** each new post links to ≥3 existing posts with descriptive anchor text, links up to a relevant pillar, links to **at least 2 language pages**, AND you add a link back from at least one existing post.

**Update `public/llms.txt`** if a post covers a new subtopic or adds a genuinely new fact.

---

## STEP 5 — Verify before publishing

In the sandbox (`mcp__workspace__bash`), copy the repo to /tmp, `npm install --prefer-offline`, then `npx next build`. The Next 16 SWC binary sometimes segfaults on a cold install — on a bus error, reinstall `@next/swc-linux-x64-gnu` and retry. Install can exceed one bash call; budget two.

All must pass:
1. Build completes with no errors
2. Every internal link resolves to a real post or language page
3. Frontmatter complete; `category` is one of the valid values in `src/lib/clusters.ts`
4. No claim contradicts the playbook's product facts
5. Slugs are lowercase-hyphenated and don't already exist
6. Dates are today

Fix and re-verify anything that fails. **Never publish a failing build** — it takes the whole site down on the next deploy.

---

## STEP 6 — Publish

Read the GitHub token from `.secrets/gh-token` in the repo folder (gitignored — never print it, never commit it, always redact it from command output with `sed`).

```
git clone https://github.com/sahil885/transcribetok_blog.git /tmp/pub
# copy changed posts/, public/llms.txt, TOPIC-QUEUE.md into /tmp/pub
cd /tmp/pub && git add -A && git commit -m "Add: <post 1 title>; <post 2 title>"
git push "https://sahil885:$TOKEN@github.com/sahil885/transcribetok_blog.git" main
```

If `.secrets/gh-token` is missing or the push fails on auth, **stop and report it** — leave the written posts in the repo folder so nothing is lost, and say the token needs creating or rotating.

Wait ~2 minutes, then load both new URLs on https://blog.transcribetok.com to confirm they render and SSL is fine. The sandbox has no outbound network, so `curl` will fail — use the browser tools.

---

## STEP 7 — Update state and report

Tick the two topics off in `TOPIC-QUEUE.md`, move them to Done, append new candidates spotted during research, and record the run's GSC numbers. Commit that too.

Then report back, briefly:
- **The STEP 0 standing checks** — result of each, even if unchanged
- The 2 posts: title, live URL, primary keyword, why chosen
- Whether topics came from Search Console, comparison gaps, use-case gaps, the language cluster, or the roadmap
- Build and link-check results
- Which existing posts you added backlinks from
- **Bing/IndexNow status** — this stays in the report until it's resolved
- Anything deliberately left out because you couldn't verify it
- Anything that looked wrong with the site while you were in there

Remind Sahil to request indexing for the 2 new URLs in Search Console (URL Inspection → Request Indexing), and — once Bing Webmaster Tools is set up — to submit them there too. Bing is 41% of the channel that works on the sister property and ~4% of ours.
