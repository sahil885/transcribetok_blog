# Topic queue

Working state for the weekly content task. It reads this file, takes the next unwritten topics, writes them, then marks them done and appends new candidates.

**Selection order each run:**
1. **Search Console data first** — if the GSC property has query data, find terms with impressions but poor position (11–30) that no existing post targets. Those are the highest-ROI posts available. Write against those before anything else.
2. **Competitor gaps second** — check what TokScript, GetTranscribe, Saveto AI, VexaScribe and WayinVideo rank for that we have no post covering.
3. **Roadmap queue third** — fall back to the list below when neither of the above surfaces anything better.

Never write a post that duplicates an existing one's primary keyword. Check `posts/` first.

---

## ⚠️ MANDATORY: volume-check every candidate before writing — added 2026-08-17

**Do not write a post until its primary keyword has been checked in Google Keyword Planner.** This rule exists because on 2026-08-17 two posts were written and nearly published against keywords with *zero measurable search volume*, and a check found most of the roadmap queue was in the same state.

**How to run the check** (Sahil's Google Ads account is live and Keyword Planner works in the browser):

1. `https://ads.google.com/aw/keywordplanner/home` → **Get search volume and forecasts**
2. Paste every candidate primary keyword, comma-separated, and hit Get started
3. **Set location to All locations** — it defaults to Australia, which is wrong for this property. Remove Australia from the location picker and save with none selected.
4. Read the **Avg. monthly searches** column. Volumes are bucketed (`10 – 100`, `100 – 1k`, `1k – 10k`, `10k – 100k`) because the account has no active campaign. Buckets are enough.

**The gate:**

- **`1k – 10k` or higher → write it.**
- **`100 – 1k` → write it if the intent is commercial or the YoY change is positive.**
- **`10 – 100` → only as a section inside an existing post, not a standalone.**
- **No data (`—`) → do not write a standalone post against it.** Fold it into a related post as a section, or drop it.

**Two honest caveats, neither of which overrides the gate:**

- Keyword Planner reports **Google only**. Per `CHANNEL-ANALYSIS.md`, Google organic is 1.8% of the sister property's traffic and the Bing family is ~41%. There is no Bing volume source available, so a zero-volume term is not provably zero-demand — but it is unevidenced, and unevidenced is not a good enough reason to spend a run on it.
- **Comparison posts are the one justified exception**, because they exist for AI citation and branded-competitor capture rather than head volume. Even then, **target the competitor's brand term, not the `vs` phrasing.** Measured 2026-08-17: `saveto ai` = 100–1k and growing +900%; `transcribetok vs saveto ai` = no data. Title and keyword the post accordingly (`<competitor> alternative`, `<competitor> review`), and keep the `vs` phrasing only as a secondary keyword.

---

---

## Channel strategy — added 2026-08-11

Full analysis in `CHANNEL-ANALYSIS.md`. The short version, measured on the sister property blog.yttranscript.app:

- **~41% of its traffic comes from the Bing index family** (Bing 23.7%, DuckDuckGo 12.6%, Yahoo 3%, Ecosia). **Google organic is 1.8%.** GA4's "AI Assistant" channel is under 1%.
- Bing's index is what ChatGPT's search retrieval reads from, so **Bing ranking is upstream of AI citation**. Optimise for Bing, not just Google.
- **Language pages earn nearly all the clicks.** On YTTranscript they sit at position 7–9 with 9–20% CTR while head terms sit at 17–33 with sub-1% CTR.
- Comparison and use-case posts are the formats models quote. YTTranscript has 20 `vs` posts and 17 `for [audience]` posts; we had 2 and 1.

Shipped 2026-08-11 in response: IndexNow (`scripts/indexnow.mjs`, key file in `public/`, runs on every build), 6 new language pages, a `/tiktok-transcript-by-language` hub, and explicit AI-crawler rules in `robots.ts`.

**Still outstanding and blocking: Bing Webmaster Tools has not been set up.** Until it is, we are invisible in the channel that produces the traffic — 1 Bing session in the 28 days to 2026-08-11, against 297 for YTTranscript.

---

## Run 2026-08-17 — awaiting push

**Build verified and passing. Not yet committed or pushed** — Sahil is running the push manually.

Files changed this run:

- `posts/tiktok-script-extractor.md` (new — 1k–10k)
- `posts/srt-to-vtt-converter.md` (new — 1k–10k)
- `posts/transcribetok-vs-saveto-ai.md` (new — retargeted to "Saveto AI Alternative")
- `posts/best-tiktok-transcript-tools-2026.md` (backlinks to all three)
- `posts/transcribetok-vs-tokscript.md` (backlinks)
- `posts/transcribetok-vs-gettranscribe.md` (backlink)
- `posts/tiktok-transcript-for-content-creators.md` (backlink + language hub, Spanish, Arabic)
- `posts/download-tiktok-captions.md` (backlinks + `tiktok caption downloader` added to keywords — 1k–10k term it was missing)
- `posts/tiktok-transcript-with-timestamps.md` (backlink to the SRT→VTT post)
- `public/llms.txt` (three new entries, four new facts)
- `TOPIC-QUEUE.md` (this file — volume gate, re-scored queue, GSC + Keyword Planner data)
- `drafts/tiktok-transcripts-for-marketers.md` (**new folder** — shelved, must NOT go in `posts/`)

**Verification passed 2026-08-17:**

- `npx next build` — compiled clean, 46 static pages generated, all three new routes present in the sitemap, `tiktok-transcripts-for-marketers` correctly absent.
- Link check — every internal link across all posts resolves against `posts/`, the 21 language slugs in `src/lib/languages.ts` and the `/tiktok-transcript-by-language` hub. Zero broken.
- Frontmatter complete on all three; categories (`How-To`, `How-To`, `Comparisons`) all valid in `src/lib/clusters.ts`; slugs new and lowercase-hyphenated; dates 2026-08-17; no claim contradicts the playbook product facts.

**Sandbox build note:** the Next 16 native SWC binary segfaults in this sandbox (`Bus error (core dumped)`) and reinstalling `@next/swc-linux-x64-gnu` does **not** fix it — the binary crashes the process on `require`. The working fallback is `npm install @next/swc-wasm-nodejs@16.2.6` plus `experimental: { useWasmBinary: true }` in `next.config.ts`. **That config change was made only in the throwaway `/tmp` build copy and is deliberately NOT in the repo** — Vercel's build machines run the native binary fine. Do not commit `useWasmBinary`.

---

## Open items

Standing checks now live in **STEP 0 of the scheduled task itself**, not here — that way they run before topic selection instead of relying on this file being read closely. Currently tracked there: the transcribetok.com meta description publish, the playbook-vs-pricing wording, and the `tiktok transcript arabic` position. Add new cross-run checks to the task prompt, not to this file.

---

## Done

- [x] tiktok-transcript-generator — pillar
- [x] tiktok-to-text — pillar
- [x] transcribe-tiktok-video — pillar
- [x] download-tiktok-transcript — pillar
- [x] how-to-get-a-tiktok-transcript
- [x] download-tiktok-captions
- [x] tiktok-transcript-on-mobile
- [x] tiktok-transcript-for-chatgpt
- [x] tiktok-transcript-for-content-creators
- [x] best-tiktok-transcript-tools-2026
- [x] tiktok-transcript-with-timestamps — 2026-08-03 — competitor gap (every rival leads with timestamps; we had no post)
- [x] translate-tiktok-transcript — 2026-08-03 — competitor gap (large dedicated TikTok-translation tool ecosystem, zero coverage)
- [x] tiktok-transcript-to-notion — 2026-08-08 — roadmap (Workflows cluster was empty and left a bare homepage section)
- [x] transcribetok-vs-tokscript — 2026-08-08 — roadmap + competitor gap (TokScript is the most feature-complete rival; verified their site directly)
- [x] transcribetok-vs-gettranscribe — 2026-08-10 — roadmap + competitor gap (GetTranscribe shipped API, MCP, n8n/Make/Zapier, Chrome extension and an iOS app; verified pricing and feature pages directly)
- [x] summarize-tiktok-video-free — 2026-08-10 — competitor gap (WayinVideo, BibiGPT, ScreenApp, SocialKit, TikNeuron and GetTranscribe all ship dedicated TikTok summarizer pages; we had none)
- [x] transcribetok-vs-saveto-ai — 2026-08-17 — competitor gap. Verified saveto.ai directly. **Retargeted mid-run** from "TranscribeTok vs Saveto AI" to "Saveto AI Alternative" after Keyword Planner showed the brand term at 100–1k/+900% and the `vs` phrasing at zero. Slug kept for link stability.
- [x] tiktok-script-extractor — 2026-08-17 — **Keyword Planner: `tiktok script extractor` 1k–10k, Low competition, bid A$0.41–2.39.** No existing post targeted it and GSC had us at position 97 for the term. Replaced the shelved marketers post.
- [x] srt-to-vtt-converter — 2026-08-17 — **Keyword Planner: `srt to vtt` 1k–10k, plus `convert srt to vtt` 1k–10k, `srt to webvtt` 1k–10k, `vtt to srt` 1k–10k, `convert vtt to srt` 1k–10k, `vtt converter` 100–1k.** Strongest measured cluster on the property. Previously only a section inside the timestamps post.
- [ ] ~~tiktok-transcripts-for-marketers~~ — 2026-08-17 — **WRITTEN THEN SHELVED to `drafts/`, unpublished.** Keyword Planner returned no data for the primary keyword or any sibling in the `for [audience]` cluster. Draft is complete and reusable if demand is ever evidenced.

---

## Queue — re-scored against Keyword Planner, 2026-08-17

Volumes below are Google, All locations, English, Aug 2025 – Jul 2026, measured 2026-08-17.

### TIER 1 — measured volume, write these first

- [ ] `tiktok-transcript-api` — **100–1k, +900% YoY, top-of-page bid A$0.62–7.35** (highest commercial value measured on the property). We have no API; write it as an honest "we don't, here's who does" — GetTranscribe, Apify, Supadata. — Guide
- [ ] `vtt-to-srt-converter` — **`vtt to srt` 1k–10k, `convert vtt to srt` 1k–10k.** The reverse direction of the SRT→VTT post, currently only a section inside it. Split only if the SRT→VTT post starts ranking; otherwise leave as a section to avoid cannibalising. — How-To
- [ ] `free-vs-paid-tiktok-transcript-tools` — `free tiktok transcript` **100–1k, +900% YoY**. Lead with free-tier *shape* (ours resets daily, most competitors' are lifetime totals). — Comparisons

### TIER 2 — comparison cluster (exempt from the volume gate, but retarget to the brand term)

Each of these should be titled and keyworded at `<competitor> alternative` / `<competitor> review`, never `transcribetok vs <competitor>`. Check the brand term's volume first — `saveto ai` measured 100–1k / +900%.

- [ ] `vexascribe-alternative` — lead on their JSON/CSV export, which we don't offer — Comparisons
- [ ] `wayinvideo-alternative` — strongest dedicated summarizer; their free allowance is a lifetime total, ours resets daily — Comparisons
- [ ] `descript-alternative` — the odd one out and probably the most useful: desktop editor vs link-in/text-out, so the comparison is about workflow shape rather than features — Comparisons

### TIER 3 — measured ZERO volume, do NOT write as standalone posts

All of the following returned **no data** in Keyword Planner on 2026-08-17. Fold them into existing posts as sections, or drop them. **The whole `for [audience]` cluster is here** — the playbook copied YTTranscript's 17 `for [audience]` posts, but on Google that pattern has no demand at all, and that assumption should be treated as disproven until someone finds a Bing-side source that says otherwise.

- ~~`tiktok-transcript-with-claude`~~ — no data. Already covered inside `tiktok-transcript-for-chatgpt`.
- ~~`tiktok-transcript-with-gemini`~~ — no data. Same.
- ~~`tiktok-transcript-with-perplexity`~~ / ~~`-notebooklm`~~ — untested but the sibling terms are all empty; test before writing.
- ~~`tiktok-transcripts-for-marketers`~~ — no data. **Written 2026-08-17, then shelved to `drafts/` unpublished.** Reusable if a Bing-side demand source ever appears.
- ~~`tiktok-transcripts-for-students` / `-social-media-managers` / `-researchers` / `-agencies`~~ — no data.
- ~~`tiktok-transcript-to-blog-post`~~ — no data.
- ~~`tiktok-transcript-accuracy`~~ — no data. Fold into the `tiktok-transcript-generator` pillar.
- ~~`tiktok-live-replay-transcript`~~ (`tiktok live transcript`) — no data.
- ~~`tiktok-summary-generator`~~ — no data. Already covered by `summarize-tiktok-video-free`.
- ~~`tiktok-transcript-chrome-extension`~~ — no data.
- ~~`tiktok-transcript-google-docs`~~ — no data. Fold into the Notion post as a section.
- `copy-text-from-tiktok-video` — **10–100.** Too thin for a standalone; fold into `tiktok-script-extractor` as a section.
- `tiktok-video-no-transcript` — untested. The "no spoken audio" case is now a section in `tiktok-script-extractor`; check volume before promoting.

### Not yet volume-checked — test before writing

- [ ] `tiktok-script-to-linkedin-post` — Content Creation
- [ ] `tiktok-transcript-to-newsletter` — Content Creation
- [ ] `tiktok-transcript-json-export` — Developer Guides
- [ ] `tiktok-transcript-to-airtable-or-sheets` — Productivity
- [ ] `tiktok-mind-map-from-video` — two competitors now ship it — AI Tools

---

## Candidates (unvalidated — promote to queue only after checking real search demand)

- TikTok transcript API / developer angle
- TikTok transcript for accessibility compliance
- TikTok vs Reels vs Shorts transcript comparison
- TikTok transcript for dropshipping / product research
- Best TikTok hooks analysed from transcripts
- `tiktok-video-summarizer` — competitors all ship a dedicated "TikTok Summarizer" page (WayinVideo, Saveto AI, TokScript's Virality Explainer). Real demand, but check cannibalisation against `tiktok-transcript-for-chatgpt`, whose keyword set already includes "summarize tiktok with chatgpt".
- `srt-to-vtt-converter` — the comma-vs-period timecode difference is the single most common cause of a broken subtitle file. Cheap post, clean intent, links naturally to the timestamps post.
- `tiktok-transcript-json-export` — VexaScribe and TokScript both sell JSON/CSV export; we don't offer it. Only worth writing as an honest "which tool if you need structured output" piece.
- `tiktok-transcript-to-google-docs` — the Notion post surfaced the same problem for Docs/Drive users. Docs opens .docx natively, which makes it a shorter, cleaner post than the Notion one.
- `tiktok-transcript-to-airtable-or-sheets` — the CSV/database angle. Worth writing only once we can say something honest about not offering CSV export.
- `transcribetok-vs-saveto-ai` and `transcribetok-vs-vexascribe` — the vs-cluster works; VexaScribe's JSON export is the honest differentiator to lead with.
- **Language pages — do NOT add Indian languages.** Hindi, Tamil, Telugu, Marathi, Punjabi and Gujarati are permanently off the list: TikTok has been banned in India since June 2020 and the ban was still in force as of 2026-08. The sister YouTube property ranks well for exactly these terms; that does not transfer, because the audience isn't on this platform. Bengali is also parked — Bangladesh's TikTok status has flipped repeatedly and sources disagree. Reasoning is recorded in the header comment of `src/lib/languages.ts`; read it before adding anything.
- Language candidates that *are* defensible if we expand again: Greek, Czech, Hungarian, Hebrew, Swahili (Kenya/Tanzania, 35% YoY growth), Hausa (Nigeria, 32% YoY). Africa is the fastest-growing region and currently has zero coverage.
- `transcribetok-vs-wayinvideo` — spotted 2026-08-10. WayinVideo is the strongest dedicated summarizer (mind maps, 100+ languages, 200 free credits / 400 minutes on signup, API, Chrome extension, desktop app) and already appears in our GSC data as a branded query. Honest differentiator: their free allowance is a lifetime total, ours resets daily.
- `tiktok-mind-map-from-video` — spotted 2026-08-10. WayinVideo markets mind-map output as an exclusive. We don't do it, but the transcript-plus-AI route reproduces it, which makes for an honest how-to.
- **Language-page CTR, not language-page count** — spotted 2026-08-17. Arabic sits at 7.8 and Spanish at 9.0 with 13 combined impressions and **zero clicks**. Position is no longer the bottleneck; the snippet is. Next run should audit `languageTitle()` and `languageDescription()` in `src/lib/languages.ts` and rewrite them to earn a click, before adding any new language or any more internal links.
- `transcribetok-vs-saveto-ai` **broke the free-tier pattern** — spotted 2026-08-17. Saveto AI advertises unlimited free TikTok transcription with no sign-up and publishes no pricing page at all (`/pricing/` 404s), so for once the competitor's free offer is more generous than ours on paper. The honest differentiators became published export formats, published pricing, and the refund guarantee. Worth reusing: **"free but unpriced" is a real risk to name**, and it applies to several tools in this category.
- `transcribetok-vs-vexascribe`, `transcribetok-vs-wayinvideo`, `transcribetok-vs-toktranscript`, `transcribetok-vs-tokscribe`, `transcribetok-vs-descript` — still untouched as of 2026-08-17. Descript is the odd one out and probably the most useful: it is a desktop editor, not a link-in/text-out tool, so the comparison is about workflow shape rather than features.
- Saveto AI's suite surfaced two adjacent formats we have no coverage of: **flashcards/quiz generation from a transcript** (study angle, pairs with the queued `tiktok-transcripts-for-students`) and **mind maps from a transcript** (already noted for WayinVideo on 2026-08-10 — two competitors now ship it, which raises it from curiosity to real demand).
- **Free-tier shape as a recurring angle** — spotted 2026-08-10. Nearly every competitor's "free" tier is a lifetime total (GetTranscribe 2 analyses, WayinVideo 400 minutes) while ours resets daily. This is our sharpest honest differentiator and is currently only stated inside comparison posts. `free-vs-paid-tiktok-transcript-tools` (already queued) should lead with it.

### Search Console notes — 2026-08-17

- Last 28 days: **616 impressions, 14 clicks, CTR 2.3%, avg position 39.7** across 69 queries. Up from 256/7 on 2026-08-10 — impressions 2.4x, clicks 2x, query count doubled.
- **The language cluster is now the whole story.** Three language queries are on page one and they are the only queries on page one that are not artifacts: `tiktok transcript arabic` **9.2 → 7.8** (9 impressions), `spanish tok` **9.0** (4 impressions), `frenchtok` **32.0** (1 impression). Arabic has now improved for three consecutive runs. All three still have zero clicks, which is the next thing to fix — position 7–8 with 0/9 CTR suggests the title or meta on `/arabic-tiktok-transcript` is not earning the click. **Worth a dedicated look next run: rewrite the language-page title/description template rather than adding more links.**
- **Nothing new in the actionable 11–30 band.** The only entries are `tokscript` (2 impressions, 28.5) — already served by `transcribetok-vs-tokscript` — and `frenchtok` at 32.0, already served by `/french-tiktok-transcript`. Writing against either would cannibalise. This is why both topics this run came from the roadmap and the use-case gap rather than GSC.
- The `"wayinvideo" -site:reddit.com …` SERP-scraper artifact is still present at position 5.0, as is a `can chat gpt` fragment at 3.0 and a `chatgpt.comtiktok` fragment at 7.0. All three are noise; ignore in future runs.
- Everything else remains at position 59–100 — head terms the pillars already target, too deep to nudge.

### Search Console notes — 2026-08-10

- Last 28 days: **256 impressions, 7 clicks, avg position 28.6** across 32 queries. Up from 157/4 on 2026-08-08.
- **`tiktok transcript arabic` has moved 11.7 → 9.2.** It is now on page one, still served by the programmatic `/arabic-tiktok-transcript` page and still with zero clicks. The language-page link deficit was addressed this run: `translate-tiktok-transcript` now links to six language pages instead of one, and both new posts link to two or three each.
- **`tokscript` sits at position 28.5** (2 impressions) — inside the actionable band, and already served by `transcribetok-vs-tokscript`. It is the only other query in 11–30, which is why this run's second topic came from the competitor gap rather than GSC. Worth watching: branded-competitor queries surfacing us validates the vs-cluster, and `transcribetok-vs-gettranscribe` was written partly on that signal.
- One query — a `"wayinvideo" -site:reddit.com …` string at position 5.0 — is a SERP-scraper artifact, not real demand. Ignore it in future runs.
- Everything else remains at position 59–97, i.e. head terms the pillars already target, too deep for a page-one nudge.

### Search Console notes — 2026-08-08 (first run with real GSC data)

- Property now has data: **157 impressions, 4 clicks, avg position 28.8** over the last 3 months (23 queries, all traffic starting 31 July).
- **Only one query sits in the actionable 11–30 band: `tiktok transcript arabic` at position 11.7.** It is already served by the programmatic language page `/arabic-tiktok-transcript`, so no post was written against it — that would cannibalise. **Action for next run: check whether it has moved. If it is still stuck at ~11, the fix is internal links into the language pages, not a new post.** Language pages currently receive almost no internal links (only `/spanish-tiktok-transcript`, once, from the translate post).
- A non-English cluster is forming: `tiktok transcript arabic` (11.7), `translate tik from indonesian` (59.5), `how to translate tiktok videos` (62.0). Worth watching — it may justify promoting language pages more aggressively.
- Every other query sits at position 59–92, i.e. too deep for a page-one nudge, and nearly all are head terms the pillars already target. There was no second GSC-driven opportunity this run.
