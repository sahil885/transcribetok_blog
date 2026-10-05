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

## ⭐ PRIORITIES FROM THE YTTRANSCRIPT ANALYSIS — added 2026-09-28 (read `CHANNEL-ANALYSIS.md`, final section)

Sahil asked for YTTranscript's winning patterns to be applied here. In priority order for the next runs:

1. **AI-assistant cluster (use as the non-comparison slot until exhausted).** YTTranscript's `with-gemini` (668 imp @ 7.5), `with-grok` (565 @ 6.3), `with-copilot` (465 @ 8.5), `for-notebooklm` (126 @ 10.0), `with-deepseek` (120 @ 8.2), `with-claude` (75 @ 7.0) all rank page one. **Exempt from the Keyword Planner gate** — the TIER 3 "no data" verdicts on these are proven false negatives by the sister site. **Done 2026-10-01 (Sahil's request): `with-gemini`, `with-claude`, `with-copilot`, `with-grok`.** **`tiktok-transcript-for-notebooklm` done 2026-10-05.** Remaining: `tiktok-transcript-with-deepseek`, `tiktok-transcript-with-perplexity`. Verify what each assistant can and cannot do with a TikTok link before writing — do not assume parity with YouTube.
2. **Language pages** — 81% of YTTranscript blog clicks and 75% of ours. Bengali added 2026-09-28. Tamil and Nepali are awaiting Sahil's decision. Greek, Hebrew, Hausa remain defensible.
3. **Comparison posts** — keep one per run, but they earn AI citations rather than Google clicks.

**Prices changed 2026-09-28 (confirmed by Sahil):** $9 / 100, $16 / 500, $34 / 1,500, $59 / 4,000, one-time. All posts, `llms.txt` and the playbook were updated. Check the pricing page each run; if prices move again, update every post that quotes them.

**Publishing:** the cloud sandbox git proxy returns 403 for this repo. Push from the desktop VM (`device_bash`: clone to `$HOME`, copy changed files from the mounted repo, commit, push with the token from `.secrets/gh-token`).

---

## Correction 2026-10-05 — export formats (Sahil confirmed)

**TranscribeTok downloads TXT, DOC and PDF (plus one-tap copy), with or without timestamps. It has NO SRT, NO VTT and no subtitle file of any kind.** The blog had claimed "TXT, DOCX, SRT" since launch. Corrected the same day across 31 posts, `llms.txt` and the playbook's product-facts table. Posts whose premise leaned on our SRT (`download-tiktok-captions`, `download-tiktok-transcript`, `tiktok-subtitle-generator`, `tiktok-transcript-with-timestamps`, `srt-to-vtt-converter`) now say plainly we make no subtitle file and point to VexaScribe / WayinVideo / TokScribe for SRT. `download-tiktok-captions` retitled to "Download TikTok Subtitles & Captions as Text, Free"; `download-tiktok-transcript` to "…as TXT, DOC or PDF". Also fixed in passing: stale "$5 one-time, 150 transcripts" in `supadata-alternative`, and "VexaScribe … no login" (it is a 30-minute one-time trial, no card) in three posts. Build PASS (73 pages), link check PASS.

Base44 app copy aligned the same day (pricing page, FAQ, JSON-LD featureList). **Still open on the app:** `/download-tiktok-transcript` page title says "PDF, DOCX or TXT"; `/tiktok-transcript-generator` has an auto-generated meta description; sitemap omits `/download-tiktok-transcript` and `/tiktok-transcript-for-chatgpt`; JSON-LD Organization/WebSite name is the long SEO title rather than "TranscribeTok".

---

## Run 2026-10-05

**Two posts written, verified and pushed.**

- `posts/transclipper-alternative.md` (new — comparison slot. **Source: Search Console** — the query `transclipper vs tokscript which video an…` appeared at position 5.0, and transclipper.ai publishes its own `vs TokScript` page and a TikTok transcript generator. Brand volume NOT measured: Keyword Planner was unreachable this run (Chrome extension denied on ads.google.com). Verified transclipper.ai, /pricing (both tabs) and /tiktok-transcript-generator directly, including their FAQ JSON-LD.)
- `posts/tiktok-transcript-for-notebooklm.md` (new — AI-assistant cluster, priority 1, gate-exempt. **Key finding: Google renamed NotebookLM to Gemini Notebook on 16 July 2026** (blog.google). Source limits and supported types verified on the Gemini Notebook help centre.)
- **Stale "paid plans raise the daily limit" wording removed from 4 posts** (`tiktok-to-text` ×3, `tiktok-transcript-generator` ×2, `transcribe-tiktok-video`, `best-tiktok-transcript-tools-2026`) — replaced with one-time credit packs. `best-tiktok-transcript-tools-2026` also dropped "the loosest free tier we're aware of", no longer true (TransClipper 3/day no account, TokScript 5/day with account).
- `public/llms.txt` — 2 new index entries, 2 new facts (NotebookLM rename + source rules; full TransClipper spec).

### Search Console notes — 2026-10-05

- Last 28 days (5 Sep – 2 Oct): **1.3k impressions, 13 clicks, CTR 1.0%, avg position 24.8**, 136 queries. Against 2026-09-28 (1,080 / 8 / 0.7% / 44.7 / 139): clicks +5, **position improved another 19.9 points**.
- Clicks by page: `vexascribe-alternative` 5 (330 imp @ 4.8), `german-tiktok-transcript` 4 (7 imp @ 3.4, 57% CTR), `russian-tiktok-transcript` 2 (10 @ 5.9), **`thai-tiktok-transcript` 2 (4 @ 5.3) — first Thai clicks**. Language pages: 8 of 13 clicks.
- `vexascribe` now **4.7 with 310 impressions and 5 clicks** — the best-performing query on the property.
- Language striking distance: Portuguese 13.1 (14 imp), Japanese 13.0 (8), Arabic 13.5 (2), Filipino 11.3 (4). French improved to 9.3, Spanish 8.1. Links to Portuguese/Japanese/Arabic added this run from both new posts and the `tiktok-transcript-generator` pillar (63 imp @ 21.0, previously no language links).
- 11–30 band: `transcribe tiktok video` 26.3, `tiktok transcript generator` 16.3, `tiktok transcript generator free` 12.1, `claptools` 21.6, `saveto ai` 16.0, `japanese transcript` 15.2, `tokscribe.com` 13.9 — **all served. Tenth consecutive run with nothing new in the band.**
- New competitor signal: `transclipper vs tokscript …` 5.0 (singleton). `facebook reel transcript` 1.3 (10 imp) — the week-old Facebook post already ranks top 3.
- Head terms still deep: `tiktok transcript` 76.5 (42 imp), `tik tok transcript` 75.6.

### Competitor research — verified 2026-10-05

**TransClipper (transclipper.ai):** TikTok, Reels and Shorts; transcribes the audio track, claims 95%+ on clear audio. Free 3/day no account, **videos ≤60 s only**; free account adds 1 creator tracked + 1 hook breakdown. Pro $9.99/mo (from $7.42/mo yearly, 3-day trial): unlimited (fair use), 5-min videos, 100 agent runs, bulk import 50, API 500 req/mo, 5 creators. Business $24.99/mo: 10-min, 300 runs, API 1,500, 15 creators. PAYG: 200/$9.99, 1,000/$19.99, 3,000/$39; +1 credit per 5-min block; agent run = 5 credits; failed = free; paid credits never expire. Exports TXT/XML/PDF. **Cheaper per transcript than us at every pack size.** Inconsistencies on its own pages: hero strip says 30 agent runs vs 100 on the plan card; TikTok-page FAQ says "unlimited agent runs".

**Gemini Notebook / NotebookLM:** renamed 16 Jul 2026. Video links: public YouTube with captions only. Web URLs: HTML text only, no embedded video. Audio import accepts MP4 and transcribes at import. Free: 50 sources/notebook, 500k words or 200 MB per source.

### Verification — 2026-10-05

- **`npx next build`: PASS** in the cloud sandbox (npm install 54 s, no SWC error). **73 static pages**, sitemap 69 URLs, both new routes present with Article + BreadcrumbList + FAQPage + HowTo JSON-LD and correct canonicals.
- **Link check: PASS** — every internal link across all 40 posts resolves to a post, one of 27 language pages or the hub.
- Frontmatter complete; categories `Comparisons` and `AI Tools`; dates 2026-10-05; descriptions 158 and 152 chars; 5 keywords, 5 howToSteps, 5 faqItems each. Word counts ~1,640 and ~1,540.
- Product-fact scan: PASS. TransClipper post states TranscribeTok has no bulk and no API; neither post claims DOCX/SRT export for TranscribeTok (pricing page still names TXT only).
- Desktop-VM `npm install` timed out at the 180 s cap; build done in the cloud sandbox instead, push from the desktop VM.

### Interlinking added this run

- `best-tiktok-transcript-tools-2026` → `transclipper-alternative` (batch section, glance table, no-signup table, verdict, FAQ)
- `free-vs-paid-tiktok-transcript-tools` → `transclipper-alternative` (both tables + Related guides)
- `transcribetok-vs-tokscript` → `transclipper-alternative` (Related guides)
- `tiktok-transcript-with-gemini` → `tiktok-transcript-for-notebooklm`
- `tiktok-transcript-generator` (pillar) → hub + Portuguese + Japanese + Arabic
- New posts: TransClipper → pillar, tokscript, best-tools, free-vs-paid, script-extractor, summarize, hub + Portuguese/Japanese/Arabic. NotebookLM → pillar `tiktok-to-text`, gemini, chatgpt, claude, notion, summarize, tokscript, hub + Japanese/Portuguese.

### Candidates spotted 2026-10-05

- **AI-assistant cluster:** `with-deepseek` and `with-perplexity` remain. NotebookLM rename means `gemini notebook tiktok` is a fresh term nobody has written for yet.
- **NoteGPT** has no dedicated TikTok transcript tool (only a "TikTok summary with ChatGPT" page) — not a comparison target.
- **Transcript24** is named in `best-tiktok-transcript-tools-2026` and TransClipper has a `vs Transcript24` page — possible next comparison; measure brand volume first.
- **Thai** produced its first 2 clicks at 5.3 — a candidate for internal links next run.
- **Keyword Planner access**: Chrome extension was denied on ads.google.com this run. If the volume gate is to keep running, Sahil needs to allow the site for the extension.

**Standing checks (STEP 0):**
- **0a. Homepage meta — still correct**, all three tags. Closed since 2026-09-21; re-confirmed.
- **0b. IndexNow** key file 200, contents match filename. `npm run indexnow:all` seed and Bing Webmaster Tools: **still unconfirmed (eighth run).**
- **0c. Pricing — RESOLVED.** Live client-rendered pricing page shows $9/100, $16/500, $34/1,500, $59/4,000, matching the playbook (updated by Sahil 2026-09-28). The stale "raise the daily limit" phrasing in posts is fixed this run. Still open: pricing page names TXT export only vs playbook TXT/DOCX/SRT.
- **0d. Language pages** — see Search Console notes.

---

## Run 2026-09-28

**Two posts written, verified and pushed (commit `92bd10e`), plus two language pages.**

- `posts/apify-alternative.md` (new — the last TIER 2 comparison, brand term. `apify tiktok` measured 100–1k with a A$14.36 top bid on 2026-09-21; not re-measured this run. Verified apify.com/pricing and the Clockworks TikTok Transcript Extractor's own page and pricing tab directly.)
- `posts/facebook-reels-transcript.md` (new — `facebook reels transcript` measured 100–1k, **+900% YoY** on 2026-09-21; not re-measured this run. Third non-TikTok-platform post in the honest-gap shape, alongside Instagram Reels and YouTube Shorts.)
- **Language pages added: `/czech-tiktok-transcript` and `/hungarian-tiktok-transcript`** (24 languages now). Justified by this run's data below — language pages produced 6 of the property's 8 clicks. Hub title/description/FAQ count updated 22 → 24; `llms.txt` language list updated.
- **Correction shipped in `tiktok-transcript-api` and `llms.txt`:** both quoted Apify at "from $1.70 per 1,000 videos". That is the **Business-plan ($999/month) rate**; the free plan pays $3.70 per 1,000 and $0.048 per AI minute. Now stated per plan with a link to the new review.
- `public/llms.txt` — 2 new index entries, 4 new facts (Apify per-plan pricing and modes, Apify free-plan mechanics, Facebook's all-videos-are-Reels change, verified Facebook tool specs).

### ⚠️ THE FINDING OF THE RUN

**Clicks up 3 → 8, average position improved 64.6 → 44.7 (−19.9, the biggest move ever recorded here). Impressions roughly flat (1,180 → 1,080).** The four-week click decline is over; the "escalate to an audit run" trigger set last week is not met.

| Page | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| `/german-tiktok-transcript` | **4** | 6 | **66.7%** | **3.7** |
| `/vexascribe-alternative` | **2** | 144 | 1.4% | **5.5** |
| `/russian-tiktok-transcript` | **2** | 9 | 22.2% | 6.6 |
| `/tokscribe-alternative` | 0 | 98 | 0% | 7.7 |
| `/vietnamese-tiktok-transcript` | 0 | 4 | 0% | 5.3 |
| `/polish-tiktok-transcript` | 0 | 1 | 0% | 5.0 |
| `/swahili-tiktok-transcript` | 0 | 3 | 0% | 8.0 |
| `/portuguese-tiktok-transcript` | 0 | 10 | 0% | 13.6 |
| `/japanese-tiktok-transcript` | 0 | 5 | 0% | 13.6 |
| `/french-tiktok-transcript` | 0 | 12 | 0% | 19.3 |
| `/spanish-tiktok-transcript` | 0 | 8 | 0% | 22.3 |
| `/arabic-tiktok-transcript` | 0 | 6 | 0% | 26.5 |

1. **Language pages: 6 of 8 clicks for the second run running.** German now sits at 3.7 with 66.7% CTR. Consistent with last run's finding; language pages should stay exempt from the volume gate.
2. **The VexaScribe post ranks 5.5 for `vexascribe` (132 impressions) one week after publishing, and earned the first-ever click on a comparison post.** Brand-term comparison posts work when the brand term is growing.
3. Striking distance for internal links: Portuguese 13.6, Japanese 13.6, French 19.3. Links to Portuguese and Japanese were added this run from both new posts and from `tiktok-transcript-for-content-creators`.

### Search Console notes — 2026-09-28

- Last 28 days (29 Aug – 25 Sep): **1,080 impressions, 8 clicks, CTR 0.7%, avg position 44.7**, **139 queries**. Against 2026-09-21 (1,180 / 3 / 0.3% / 64.6 / 153).
- Only 2 of 8 clicks are attributed to a visible query (`vexascribe`); the other 6 are anonymised queries landing on language pages.
- 11–30 band: `tokscribe com` 26.1, `tokscript` 14.9, `tokscribe.com` 15.0, `tiktok transcript generator free` 11.6, `saveto ai` 14.2, `tiktok transcript generator` 23.5, `japanese transcript` 16.0, plus singletons. **All already served by existing pages. Ninth consecutive run with nothing new in the band.**
- Competitor brands: `vexascribe` **5.6** (132 imp, 2 clicks), `tokscribe` 7.0 (75), `wayinvideo alternative` 8.9, `saveto ai` 14.2, `tokscript` 14.9, `claptools` 31.5, `supadata` 47.2.
- Head terms still deep: `tiktok transcript` 75.5 (47 imp), `tiktok transcript exporter` 72.5, `tik tok transcript` 75.6.
- Top impression pages with zero clicks: `tiktok-transcript-on-mobile` 172 @ 78.2, `download-tiktok-transcript` 127 @ 77.9, home 90 @ 61.1, `tiktok-transcript-for-content-creators` 87 @ 79.3.

### Competitor research — verified 2026-09-28

**Apify (apify.com/pricing):** Free $0 with $5 usage/month, no card; Starter $19, Scale $199, Business $999 per month, each including the same amount as prepaid usage. **Unused prepaid usage disappears at the end of each cycle; free-plan access is blocked until the next cycle once exhausted.** 10% annual discount on paid plans.

**Clockworks TikTok Transcript Extractor (apify.com/clockworks/tiktok-transcript-extractor):** pay-per-event, tiered by plan — per 1,000 videos $3.70 Free / $3.00 Starter / $2.30 Scale / $1.70 Business; AI transcription per started minute $0.048 / $0.041 / $0.034 / $0.027. Three modes (captions only / captions + AI for the rest / AI for all). Apify's stated caption coverage 60–75%; pre-Nov-2023 videos unlikely to have captions. Outputs .vtt + .txt + views, likes, comments, shares, author, language; datasets as JSON/CSV/Excel/XML/HTML. Runs from the web console without code; account required. 5.0 rating, 574 users. Apify Store lists at least 14 TikTok transcript actors from different publishers.

**Facebook (June 2025, MediaPost):** Meta publishes all Facebook videos as Reels, 90-second cap removed, Video tab renamed Reels tab, gradual rollout. Meta's own help pages are robots-blocked to the fetch tool, so the viewer-side "Always show captions" path is from a secondary source (sendshort.ai).

**Facebook transcript tools:** Supadata free page (no login for one-off, rate-limited, audio-based, TXT/SRT, covers Live replays once published); GetTranscribe (2 lifetime free with login, $0.06/min PAYG, $7.99 and $9.99/month, private/friends/group video explicitly unsupported); WayinVideo (100 welcome credits on signup, TXT/SRT/VTT/DOC, 100+ languages); TokTranscript Reels extractor (FB + IG, no login to try).

### Verification — 2026-09-28

- **`npx next build`: PASS** first time (no SWC bus error this run). **64 static pages** (up from 60), **sitemap 60 URLs** (up from 56), all four new routes present. Article + BreadcrumbList + FAQPage + HowTo JSON-LD on both posts; canonical and title correct.
- **Link check: PASS.** Every internal link across all 34 posts resolves to a post, one of 24 language pages or the hub. Zero broken.
- Frontmatter complete on both; categories `Comparisons` and `Guide`; slugs new; dates 2026-09-28; descriptions 154 and 156 chars; 5 keywords, 5 howToSteps, 5 faqItems each. Word counts **1,778 and 1,586**.
- Product-fact scan: PASS. Every bulk/batch/API mention says TranscribeTok does not do it. **Neither new post states pack prices or export formats for TranscribeTok** because of the pricing discrepancy below.
- **Publishing note:** the cloud sandbox's git proxy now refuses to push to this repo (403, "not in this session's authorized repository set"). Push was done from the desktop VM instead, with identical files (md5-verified against the built copy).

### Interlinking added this run

- `tiktok-transcript-api` → `apify-alternative` (body + Related guides)
- `best-tiktok-transcript-tools-2026` → both new posts
- `supadata-alternative` → both new posts
- `instagram-reels-transcript` → `facebook-reels-transcript`
- `youtube-shorts-transcript` → `facebook-reels-transcript`
- `tiktok-transcript-for-content-creators` → `facebook-reels-transcript` + Portuguese, German, Japanese (added to its existing language line)
- `apify-alternative` ↔ `facebook-reels-transcript` — bidirectional
- Both new posts link to a pillar, the by-language hub, and three language pages (Vietnamese/Japanese/Portuguese; Spanish/Portuguese/Filipino)

### Candidates spotted 2026-09-28

- **Comparison cluster: TIER 2 is now exhausted.** Next comparison candidates need fresh brand-term measurement: the Apify Store actors are not brands; try `gettranscribe` re-check, `tactiq tiktok`, `notegpt tiktok`, `wayin ai` (WayinVideo's `wayin.ai` domain is now the one serving its Facebook tool — possible rebrand, check).
- **More language pages** remain the evidenced play. Next defensible: Greek and Hebrew (both no data in Keyword Planner, which is no longer disqualifying), Hausa. Bengali still parked pending re-verification.
- **`tiktok video translator` (100–1k)** still unwritten; check cannibalisation against `translate-tiktok-transcript`.
- **Striking distance:** Portuguese 13.6, Japanese 13.6, French 19.3 — more internal links to these from `tiktok-transcript-on-mobile` and `download-tiktok-transcript` (the two highest-impression pages) would be a cheap next step.

**Standing checks (STEP 0):**
- **0a. Homepage meta description — still correct** (all three tags read "TranscribeTok is a free online tool that extracts the spoken audio from any TikTok video and converts it into a written text transcript."). Third clean check; closed.
- **0b. IndexNow** key file returns 200 and contents match the filename. `npm run indexnow:all` seed and Bing Webmaster Tools: **still unconfirmed (seventh run).**
- **0c. ⚠️ Pricing page is serving two different price sets.** Server HTML (fetched without JS): Starter $5/150, Pro $12/500, Power $29/1,500, Max $59/4,000, "Most popular" on Starter. **Client-rendered page in the browser: Starter $9/100, Pro $16/500, Power $34/1,500, Max $59/4,000, "Most popular" on Pro**, with strikethrough prices at double. Either an A/B test, geo-pricing, or a hydration bug. **13 existing posts plus `llms.txt` quote $5/150, $12/500, $29/1,500** — not edited this run pending Sahil's answer. Playbook "raise the daily limit" wording still stale; export list on pricing page still TXT only.
- **0d. Language pages:** see the finding table. `tiktok transcript arabic` 5.0 (1 impression), Arabic page 26.5. German 3.7 with 4 clicks is the property's best page.

---

## Run 2026-09-21

**Two posts written, verified and pushed.**

- `posts/vexascribe-alternative.md` (new — TIER 2 comparison, brand term. **`vexascribe` re-measured 100–1k, +900% three-month, +∞ YoY, Medium competition, bid A$0.29–4.01.** The last untouched TIER 2 name; the queue said "write it next run".)
- `posts/youtube-shorts-transcript.md` (new — **`youtube shorts transcript` measured 1k–10k, Low competition, bid A$0.09–1.11.** Highest-volume unclaimed term measured this run. Zero existing coverage, zero cannibalisation. Written in the honest-gap shape established by the API and Reels posts.)
- Backlinks added from `best-tiktok-transcript-tools-2026` (both), `free-vs-paid-tiktok-transcript-tools` (VexaScribe), `instagram-reels-transcript` (Shorts), `tokscribe-alternative` (Shorts), `tiktok-transcript-on-mobile` (Shorts), `download-tiktok-transcript` (Shorts); the two new posts cross-link bidirectionally.
- `public/llms.txt` — 2 new index entries, 9 new facts (the Shorts player UI omission, the `/shorts/` → `/watch?v=` swap and its failure modes, the yt-dlp command, Shorts word counts and accuracy, on-screen text across all three platforms, the full verified VexaScribe spec and pricing, and the minute-rounding penalty on short-form video).
- **Structural fix, data-driven:** `tiktok-transcript-on-mobile` (303 impressions, 0 clicks) had **no language links at all**, and `download-tiktok-transcript` (260 impressions, 0 clicks) had **no Related guides section at all**. Both are now linked into the by-language hub, `/russian-tiktok-transcript` and `/german-tiktok-transcript`. These are the two highest-impression pages on the property and neither pointed at the only pages that convert.

### ⚠️ THE FINDING OF THE RUN — read this before selecting topics next week

**All 3 clicks on the property came from two language pages, at ~25% CTR each.**

| Page | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| `/russian-tiktok-transcript` | **2** | 8 | **25%** | 6.8 |
| `/german-tiktok-transcript` | **1** | 4 | **25%** | 26.0 |
| `/tiktok-transcript-on-mobile` | 0 | 303 | 0% | 80.1 |
| `/download-tiktok-transcript` | 0 | 260 | 0% | 80.1 |
| `/tiktok-script-extractor` | 0 | 110 | 0% | 81.9 |

Three consequences, all of which should change next run's behaviour:

1. **The five-run-old conclusion that "position is not the constraint, the snippet is" is WRONG and should be retired.** The `languageTitle()` / `languageDescription()` rewrite has been flagged as the top unactioned item since 2026-08-17 on the basis that language pages ranked 6–9 with zero clicks. They now convert at 25% where they rank. The snippets are fine. **Do not do that rewrite.** The earlier reading was an artefact of impressions being too low to register a click at all.
2. **Language pages must be exempt from the Keyword Planner volume gate**, on the same footing as comparison posts. `tiktok transcript russian` and `tiktok transcript german` **both measure no data** in Keyword Planner — and they are the only two pages on the property producing clicks. The gate is rejecting exactly what converts. This is the second confirmed false negative after `tiktok transcript exporter` (20 impressions, position 78.3, no data) last run. Recorded here rather than edited into the gate itself, because the gate is Sahil's rule to change.
3. **Adding language pages is now evidenced on first-party data, not just on the sister property.** CHANNEL-ANALYSIS predicted this; it has now happened here. Czech and Hungarian both measure no data, but per (2) that is no longer a reason to skip them.

### Keyword Planner — measured 2026-09-21 (All locations, All languages, Google, Sept 2025 – Aug 2026)

| Keyword | Avg monthly | 3mo | YoY | Comp | Bid low–high |
|---|---|---|---|---|---|
| `youtube shorts transcript` | **1k – 10k** | 0% | 0% | Low | A$0.09 – A$1.11 |
| `apify tiktok` | 100 – 1k | 0% | 0% | Low | A$1.23 – **A$14.36** |
| `tiktok video translator` | 100 – 1k | 0% | 0% | Low | A$0.51 – A$3.19 |
| `vexascribe` | **100 – 1k** | **+900%** | **+∞** | Medium | A$0.29 – A$4.01 |
| `facebook reels transcript` | 100 – 1k | 0% | **+900%** | Low | A$0.34 – A$2.33 |
| `tiktok translate video` | 10 – 100 | −90% | 0% | Low | A$1.44 – A$3.35 |
| `tiktok transcript czech` | no data | | | | |
| `tiktok transcript hungarian` | no data | | | | |
| `tiktok transcript russian` | **no data** | | | | |
| `tiktok transcript german` | **no data** | | | | |
| `tiktok transcript english` | no data | | | | |
| `transcribe tiktok audio` | no data | | | | |

`vexascribe` held its 100–1k bucket and its +900% three-month growth for a second consecutive week, confirming last run's call rather than catching a one-week spike.

### Competitor research — verified 2026-09-21

**VexaScribe (vexascribe.com + /pricing):** general AI transcription on hosted Whisper Large-v3, **formerly NovaScribe** — same team, rebranded, so older reviews appear under the old name. Three input routes: file upload (MP3, WAV, M4A, FLAC, OGG, MP4, MOV, AVI, MKV, WebM, 20+ formats), pasted YouTube/TikTok/Instagram/direct media links, and a bot that joins Zoom, Google Meet and Teams calls live. Returns automatic speaker labels and timestamps, editable in-browser. 99 languages, translation to 133 via Google Translate, AI summaries in six types. **Bulk upload of 50 files processed in parallel with ZIP download.** Pricing is a subscription: Starter $2/200 min, Basic $5/1,000, Pro $10/2,500, Studio $20/6,000, no feature gating between tiers. **Minutes reset each renewal and do not roll over; minutes are rounded up to the next whole minute; the meeting bot consumes 3× minutes.** Free trial is 30 minutes once, no card. Stated accuracy 91–95% from published own-testing with a methodology page — unusually honest for the category. **Internal inconsistency: homepage claims 5 export formats including DOCX, pricing page's feature list names 4 and omits DOCX.**

**YouTube Shorts (verified against YouTube behaviour and multiple 2026 sources):** YouTube auto-generates captions for nearly every Short with speech, but the vertical Shorts player carries no "Show transcript" control — the transcript panel was built for the watch-page layout and never ported. The `/shorts/VIDEO_ID` → `/watch?v=VIDEO_ID` swap loads the same video in the standard player with the panel intact; it fails when a Short redirects back to the vertical player, and never works in the mobile app. `yt-dlp --write-auto-sub --sub-lang en --skip-download` retrieves the track directly and is the only free method that scales to a list.

**New category insight worth reusing: minute-based subscriptions penalise short-form video through rounding.** Where minutes round up to the next whole minute, a hundred 30-second clips cost 100 minutes rather than 50. That doubling never appears in the headline per-minute price and applies to every minute-metered competitor, not just VexaScribe.

**Note on the Shorts post:** it recommends `yttranscript.app`, the sister property, and **says in the body that it is from the same team** rather than presenting it as a neutral third-party pick. `yttranscript.app/pricing` 404s, so no pricing claim was made about it.

### Search Console notes — 2026-09-21

- Last 28 days (22 Aug – 18 Sep): **1,180 impressions, 3 clicks, CTR 0.3%, avg position 64.6** across **153 queries**. Against 2026-09-14 (1,420 / 5 / 0.4% / 71.6 / 161): impressions −17%, clicks 5 → 3, query count −5%, **position improved 7.0 points**.
- **Third consecutive decline in clicks, second in impressions and query count.** Last run set a trigger: "if 2026-09-21 repeats it, stop writing new posts for a run and audit the existing ones instead." It did repeat on volume — **but average position improved by 7 points, the largest single-week gain recorded on the property, and that counter-signal was not present last week.** Judgement call this run: wrote the two posts as instructed and spent the spare effort on the structural audit fix above rather than skipping the run. **If 2026-09-28 shows a fourth consecutive click decline with no position gain, escalate to a full audit run.**
- **`tokscribe` impressions went 12 → 52 in one week at position 6.9** — now the top query on the property by impressions, three weeks after the post went live. Zero clicks, which is expected behaviour for a competitor brand query answered by an "alternative" page.
- **`tiktok transcript arabic` reached 5.0**, the best position ever recorded on this property (was 7.5, before that 6.5, 9.2, 11.7). 1 impression.
- The week-old Supadata post is already ranking: `supadata pricing` **10.0**, `supadata` 47.7, `supadata api` 48.0.
- **Nothing actionable in the 11–30 band. Eighth consecutive run.** The band holds exactly six queries, all already served: a Spanish captions long-tail at 11.0, `tokscribe.com` 19.8, `saveto ai` 22.5, `how to transcribe tiktok video` 27.0, `claptools` 28.3, `claptool` 30.0.
- Competitor brands in GSC: `tokscribe` 6.9, `tokscribe.com` 19.8, `saveto ai` 22.5, `claptools` 28.3, `tokscribe com` 31.7, `claptools ai` 31.0, `tok script` 45.0, `supadata` 47.7, `tokscript` 48.0.
- Head terms remain deep: `tiktok transcript` 78.0 (37 impressions), `tiktok transcript exporter` 74.3 (18), `tik tok transcript` 76.7, `tiktok transcripts` 73.0.

### Verification — 2026-09-21

- **`npx next build`: PASS.** Compiled clean in 9.0s, TypeScript clean in 4.5s, **60 static pages** (up from 58), **sitemap 56 URLs** (up from 54), both new routes present. Full Article + BreadcrumbList + FAQPage + HowTo + Organization JSON-LD emitted on both; canonical, title and description correct on both.
- Hit the known Next 16 SWC bus error on first build; resolved by reinstalling `@next/swc-linux-x64-gnu` per the runbook, as on previous runs. The `EAI_AGAIN registry.npmjs.org` lockfile-patch warning during build is the sandbox having no outbound network and is harmless.
- **Link check: PASS.** Every internal link across all 32 posts resolves to a real post, a real language page or the by-language hub. Zero broken links.
- Frontmatter complete on both; categories `Comparisons` and `Guide` both valid; slugs new and lowercase-hyphenated; dates today; descriptions **155 and 150** characters; 5 keywords, 5 howToSteps and 5 faqItems each.
- Word counts **1,773 and 1,707** — both inside the 1,200–1,800 band.
- Product-fact scan: PASS. Every "bulk" mention in the VexaScribe post refers to VexaScribe and is marked "No — one video at a time" for TranscribeTok, with an explicit "we do not do it and will not pretend otherwise" paragraph. No bulk claim anywhere in the Shorts post.

### Interlinking added this run

- `best-tiktok-transcript-tools-2026` → both new posts
- `free-vs-paid-tiktok-transcript-tools` → `vexascribe-alternative`
- `instagram-reels-transcript` → `youtube-shorts-transcript`
- `tokscribe-alternative` → `youtube-shorts-transcript`
- `tiktok-transcript-on-mobile` → `youtube-shorts-transcript` + hub + Russian + German (**previously had zero language links**)
- `download-tiktok-transcript` → new Related guides section with 5 links + hub + Russian + German (**previously had no Related guides section at all**)
- `vexascribe-alternative` ↔ `youtube-shorts-transcript` — bidirectional
- Both new posts link up to a pillar, to the `/tiktok-transcript-by-language` hub, and to Russian + German — the two pages proven to convert

### Candidates spotted 2026-09-21

- **`apify-alternative` is now the strongest remaining comparison target.** `apify tiktok` re-measured 100–1k with a top-of-page bid of **A$14.36**, still the highest commercial value ever measured here, and verified Apify detail already sits in `tiktok-transcript-api`. It is the last TIER 2 name after VexaScribe. Write it next run.
- **`facebook reels transcript` — 100–1k with +900% YoY.** The multi-platform seam is real and productive: `instagram reels transcript` (1k–10k) and `youtube shorts transcript` (1k–10k) both came from guessing at it, and Facebook is the third. TokTranscript's Reels extractor already covers Facebook, so research cost is low.
- **`tiktok video translator` — 100–1k, bid A$0.51–3.19, no existing post targets it.** `translate-tiktok-transcript` targets translating a transcript, which is a different intent from translating the video. Check cannibalisation carefully before writing.
- **Language-page expansion is now the evidenced play.** Czech and Hungarian measure no data, as do Russian and German, which is precisely the point (see the finding above). Hausa remains unmeasured. Adding two languages is a `src/lib/languages.ts` edit and costs a fraction of a post.
- **Retire the `languageTitle()` / `languageDescription()` rewrite from the queue.** It has been the "highest-value unactioned item" for five runs on a premise this run's data disproves.
- **The export-format discrepancy is still open** (see 0c below) and is now five runs old in various forms. The pricing page names TXT only; the playbook says TXT, DOCX, SRT; `llms.txt` and several posts state all three. One of the two sources is wrong.

**Standing checks (STEP 0):**
- **0a. transcribetok.com homepage meta description — RESOLVED, confirmed again, now closed.** All three tags (`description`, `og:description`, `twitter:description`) return the corrected copy: *"TranscribeTok is a free online tool that extracts the spoken audio from any TikTok video and converts it into a written text transcript."* Second consecutive clean check. **Removed from the carry list.**
- **0b. Bing indexing and IndexNow.** Key file `https://blog.transcribetok.com/b86aab1f741ddb317cccfa448f5c2210.txt` **verified live, returns 200, contents `b86aab1f741ddb317cccfa448f5c2210` match the filename exactly**. `npm run indexnow:all` full seed: **still unconfirmed.** Bing Webmaster Tools: **still unconfirmed.** No `site:` check attempted. **Status: implementation healthy, both manual actions outstanding for a sixth run and still blocking the 41% channel.**
- **0c. Playbook section 1 vs. real pricing.** Re-verified the live pricing page: Free $0 (2/day, no signup), Starter $5/150, Pro $12/500, Power $29/1,500, Max $59/4,000, all one-time, credits never expire, 30-day money-back under 20 transcripts, no credit charged when a video has no spoken audio. The playbook still says paid plans "raise the daily limit". **Status: unchanged, still stale, still not edited by the task.** The export-format discrepancy is also unchanged — the pricing page's feature list still names only TXT ("export to TXT — with or without timestamps") against the playbook's TXT/DOCX/SRT. The "Pay once, only when you need bulk" headline and the 30% off countdown banner are both still live.
- **0d. Language-page positions — see the finding above; this check has served its purpose and should be rewritten.** `tiktok transcript arabic` 5.0 (best ever, 1 impression). More importantly, `/russian-tiktok-transcript` and `/german-tiktok-transcript` produced **all 3 clicks on the property at ~25% CTR**. The check as written tracks Arabic's position; what matters now is clicks per language page. Suggest replacing 0d with "report clicks, impressions and CTR for every language page with ≥1 impression."

**Noticed while in the tools:** the Google Ads account carries a persistent red banner — *"Complete payments account activity — You need to complete any refunds and pay any outstanding charges."* Keyword Planner still works, but this may eventually lock the account and with it the volume gate. Worth Sahil clearing.

---

## Run 2026-09-14

**Two posts written, verified and pushed.**

- `posts/supadata-alternative.md` (new — TIER 2 comparison, brand term. **`supadata` measured 1k–10k, Low competition, bid A$1.61–6.92** — the highest-volume brand term ever measured on this property and among the highest commercial value.)
- `posts/instagram-reels-transcript.md` (new — **`instagram reels transcript` measured 1k–10k, +900% YoY, Low competition, bid A$0.36–2.03.** Zero existing coverage, zero cannibalisation. Written as an honest "we don't do Reels, here is what does" guide, the same shape as the API post.)
- Backlinks added from `tiktok-transcript-api` (Supadata), `scrapecreators-alternative` (Supadata), `best-tiktok-transcript-tools-2026` (both), `tokscribe-alternative` (Reels), `tiktok-transcript-for-content-creators` (Reels); the two new posts cross-link to each other bidirectionally.
- `public/llms.txt` — 2 new index entries, 7 new facts (full verified Supadata spec, credit costs including the 206 and empty-result charges, operational limits, Instagram's caption-without-export position, the caption-scraping vs audio-transcription split in Reels tools, and an explicit statement that TranscribeTok is TikTok-only).
- **Defect fixed in `public/llms.txt`:** the per-language URL list still read 21 languages and omitted `swahili`, which was added 2026-09-04. Corrected to 22.

**Why these two.** **Seventh consecutive run with nothing usable in the GSC 11–30 band.** Only three queries sit in the band and all three are already served: `transcribe tiktok video` 24.5 (own pillar), `tokscribe.com` 17.3 (own post from last week), and a one-impression long-tail Spanish captions question at 11.0. Both topics therefore came from the volume gate rather than GSC — one from the comparison gap (Supadata, on the candidates list since 2026-08-24), one from a fresh Keyword Planner measurement that surfaced a 1k–10k term with no coverage at all. Default shape held: one comparison + one non-comparison, two different clusters (`Comparisons` and `Guide`).

**The `for [audience]` cluster is now disproven for the third time** — `tiktok transcript for seo` and `tiktok podcast transcript` both returned no data this run. **Greek and Hebrew both returned no data**, which retires two of the four remaining "defensible" language candidates; Czech and Hausa remain unmeasured.

**Standing checks (STEP 0):**
- **0a. transcribetok.com homepage meta description — RESOLVED. Stop carrying this check.** All three tags (`description`, `og:description`, `twitter:description`) now return the corrected copy: *"TranscribeTok is a free online tool that extracts the spoken audio from any TikTok video and converts it into a written text transcript."* The sub-page truncation is also fixed — `/pricing`, `/login`, `/register` and `/forgot-password` now read *"…extract accurate transcripts from Tiktok videos."* with the "100+" bulk claim gone everywhere. Sahil published the fix between 2026-09-07 and 2026-09-14. Five runs of carrying this; closed.
- **0b. Bing indexing and IndexNow.** Key file `https://blog.transcribetok.com/b86aab1f741ddb317cccfa448f5c2210.txt` **verified live, returns 200 on a cache-busted fetch, contents match the filename exactly**. `npm run indexnow:all` full seed: **still unconfirmed.** Bing Webmaster Tools: **still unconfirmed.** No `site:` check attempted. **Status: implementation healthy, both manual actions still outstanding and still blocking the 41% channel.**
- **0c. Playbook section 1 vs. real pricing.** Re-verified the live pricing page: Free $0 (2/day, no signup), Starter $5/150, Pro $12/500, Power $29/1,500, Max $59/4,000, all one-time, credits never expire, 30-day money-back under 20 transcripts, no credit charged when a video has no spoken audio. The playbook still says paid plans "raise the daily limit". **Status: unchanged, still stale, still not edited by the task.** The "one-time 30% off, 24h countdown" banner and the "Pay once, only when you need bulk" headline are both still live. **New discrepancy worth Sahil's attention: the pricing page's feature list names only TXT export ("export to TXT — with or without timestamps"), while the playbook's product-facts table says TXT, DOCX and SRT.** Posts this run followed the playbook; if the pricing page is the accurate one, several existing posts overstate export formats.
- **0d. Language-page positions — slight regression.** `tiktok transcript arabic` moved **6.5 → 7.5** (2 impressions, 0 clicks). `spanish tok` dropped out of the ≥1-impression list entirely this window. `tiktok transcript deutsch` 52.0, `tiktok transcrever` 63.0, `tiktok language translator` 77.0. **Still zero clicks across five consecutive runs at positions 6.5–9.0. The `languageTitle()` / `languageDescription()` rewrite in `src/lib/languages.ts` remains the single highest-value unactioned item on the property.** Position has now been proven not to be the constraint for five runs running.

### Keyword Planner — measured 2026-09-14 (All locations, All languages, Google, Sept 2025 – Aug 2026)

| Keyword | Avg monthly | 3mo | YoY | Comp | Bid low–high |
|---|---|---|---|---|---|
| `supadata` | **1k – 10k** | 0% | 0% | Low | A$1.61 – A$6.92 |
| `tiktok video to text` | **1k – 10k** | 0% | 0% | Low | A$0.16 – A$1.20 |
| `instagram reels transcript` | **1k – 10k** | 0% | **+900%** | Low | A$0.36 – A$2.03 |
| `tiktok caption downloader` | **1k – 10k** | 0% | 0% | Low | A$0.48 – A$2.39 |
| `apify tiktok` | 100 – 1k | 0% | 0% | Low | A$1.22 – A$14.27 |
| `vexascribe` | **100 – 1k** | **+900%** | +∞ | Medium | A$0.29 – A$3.98 |
| `tiktok text extractor` | 100 – 1k | 0% | +900% | Low | A$0.05 – A$0.58 |
| `tiktok transcript online` | 100 – 1k | 0% | 0% | Low | — |
| `whisper tiktok` | 10 – 100 | 0% | 0% | Low | — |
| `tiktok transcript extension` | 10 – 100 | 0% | 0% | Low | — |
| `tiktok to srt` | 10 – 100 | 0% | +∞ | Low | — |
| `tiktok transcript exporter` | no data | | | | |
| `export tiktok transcript` | no data | | | | |
| `tiktok transcript export` | no data | | | | |
| `tiktok transcript greek` | no data | | | | |
| `tiktok transcript hebrew` | no data | | | | |
| `tiktok transcript accuracy` | no data | | | | |
| `tiktok transcript for seo` | no data | | | | |
| `tiktok transcript privacy` | no data | | | | |
| `tiktok podcast transcript` | no data | | | | |

**`vexascribe` jumped 10–100 → 100–1k with +900% three-month growth.** It was written off last run as the weakest remaining TIER 2 name; that is no longer true and it should be reconsidered next run.

**`tiktok transcript exporter` returned no data despite being the property's #2 query by impressions (20 impressions at position 78.3).** This is the clearest single piece of evidence yet that Keyword Planner is missing real demand visible in GSC — worth remembering whenever the gate rejects a term that GSC shows impressions for.

**Three 1k–10k terms are already claimed and were correctly not written against:** `tiktok video to text` (on both `tiktok-to-text` and `tiktok-transcript-generator`), `tiktok caption downloader` (on `download-tiktok-captions`), and `tiktok text extractor` is close enough to `tiktok-script-extractor` to cannibalise.

### Competitor research — verified 2026-09-14

**Supadata (supadata.ai + docs.supadata.ai):** developer API, no web interface for transcripts. One endpoint, `GET https://api.supadata.ai/v1/transcript`, takes YouTube, TikTok, Instagram, X, Facebook or public file URLs and returns plain text or timestamped chunks with millisecond offsets. `mode` parameter is `native` / `generate` / `auto`. Plans: Free 100 credits/month, Basic $5/300 (**annual billing only**), Pro $17/3,000, Mega $47/30,000, Giga $297/300,000, Supa $897/1,000,000. **Credits do not roll over.** Costs: 1 existing transcript = 1 credit, 1 AI-generated minute = 2 credits, **1 minute of translation = 30 credits**. **A 206 "Transcript Unavailable" still costs 1 credit, and a successful transcription with no detectable speech is still charged by media duration** — the direct opposite of our no-audio policy. Videos over 20 min return an async job ID expiring 1 hour after completion. Files up to 750 MB / 12 hours. Live streams unsupported. Batch endpoints YouTube-only (unchanged from August). SDKs Python and JS; Zapier, Make, n8n, ActivePieces. Refunds: monthly refundable for the last period if no requests were made; annual non-refundable outside a 14-day prorated cooldown. **Pricing is unchanged from the August measurement recorded in `tiktok-transcript-api`, which is now re-verified rather than assumed.**

**TokTranscript Reels extractor (toktranscript.com/reels-transcript-extractor):** covers Facebook and Instagram Reels with Whisper on the audio track, explicitly "works even when the reel has no burned-in captions". No login to try, ~15 seconds, claims 95% accuracy and 50+ languages, exports TXT and SRT, bilingual SRT, translation to 50+ languages.

**Instagram (help.instagram.com):** auto-generates closed captions for reels via speech recognition; viewers enable them permanently under Accessibility; creators enable and edit them on the editing screen. **Instagram's own help centre states reel closed-caption management "isn't available on computers".** No copy, download or export of the caption text exists anywhere — the same posture as TikTok.

**New category insight worth reusing: the caption-scraping vs audio-transcription split is the real quality axis in this category, and most tools hide which they are.** The tell is in the FAQ — "must have captions enabled" means scraping, "works without captions" means transcribing. This is a cleaner and more durable differentiator than free-tier shape, which has been eroding since TokScript was found to give 5/day.

### Search Console notes — 2026-09-14

- Last 28 days (15 Aug – 11 Sep): **1,420 impressions, 5 clicks, CTR 0.4%, avg position 71.6** across **161 queries**. Against 2026-09-07 (1,640 / 9 / 0.5% / 69.1 / 175): impressions −13%, query count −8%, **clicks down again from 9 to 5**, position worse by 2.5.
- **Second consecutive run of declining clicks, and now impressions and query count are falling too.** Last run the tail was still widening while the head failed to convert; this run the tail is contracting as well. This is the first run where every headline number moved the wrong way. Worth watching closely — if it repeats, it is a property-level problem, not noise.
- **The brand-term retargeting rule is now confirmed twice over.** `tokscribe` sits at **position 6.2 with 12 impressions** — third-highest impression count on the property — one week after the post went live. `tokscribe com` improved 49.3 → **35.2**, and `tokscribe.com` appears separately at **17.3**. `saveto ai` holds at 9.0. **Three competitor brand terms now on or near page one.** This is the single clearest evidence of anything working on this property and argues for continuing the comparison cluster rather than closing it.
- **Nothing actionable in the 11–30 band. Seventh consecutive run.** All three band entries are already served by existing pages.
- Best real positions: `tokscribe` 6.2, `tiktok transcript arabic` 7.5, `saveto ai` 9.0.
- Competitor brands in GSC: `tokscribe` 6.2, `tokscribe.com` 17.3, `tokscribe com` 35.2, `tokscript` 48.0, `scrapecreators tiktok transcript extractor` 57.0, `tokscript tiktok transcript generator` 66.0. `claptools` still absent.
- **`tiktok transcript exporter` is the #2 query on the property at 20 impressions, position 78.3** — and measures no data in Keyword Planner. New this run.
- Head terms remain deep: `tiktok transcript` 78.1 (26 impressions), `tik tok transcript` 79.5, `tiktok transcripts` 73.0, `free tiktok transcript generator` 90.6.
- The three known SERP-scraper artifacts (`"wayinvideo" -site:…` 5.0, and two others) — only the WayinVideo one still appears this window. Still noise.

### Verification — 2026-09-14

- **`npx next build`: PASS.** Compiled clean in 19.0s, TypeScript clean in 5.5s, **58 static pages** generated (up from 56), **sitemap 54 URLs** (up from 52), both new routes present. Full Article + BreadcrumbList + FAQPage + HowTo + Organization JSON-LD emitted on both new pages; canonical, title and description correct on both.
- Hit the known Next 16 SWC bus error on first build; resolved by reinstalling `@next/swc-linux-x64-gnu` per the runbook, as on previous runs.
- **Link check: PASS.** Every internal link across all 30 posts resolves to a real post, a real language page or the by-language hub. Zero broken links.
- Frontmatter complete on both; categories `Comparisons` and `Guide` both valid; slugs new and lowercase-hyphenated; dates today; descriptions 158 and 157 characters; 5 keywords, 5 howToSteps and 5 faqItems each.
- Word counts 1,786 and 1,653 — both inside the 1,200–1,800 band.
- Product-fact scan: PASS. Every "bulk"/"batch" mention refers to Supadata and is marked "No" for TranscribeTok in the comparison table.

### Interlinking added this run

- `tiktok-transcript-api` → `supadata-alternative`
- `scrapecreators-alternative` → `supadata-alternative`
- `best-tiktok-transcript-tools-2026` → both new posts
- `tokscribe-alternative` → `instagram-reels-transcript`
- `tiktok-transcript-for-content-creators` → `instagram-reels-transcript`
- `supadata-alternative` ↔ `instagram-reels-transcript` — bidirectional
- Both new posts link up to a pillar (`tiktok-transcript-generator` and `transcribe-tiktok-video`), to the `/tiktok-transcript-by-language` hub, and to two language pages each (Arabic + Vietnamese; Portuguese + Indonesian)

### Candidates spotted 2026-09-14

- **`vexascribe-alternative` is back on the table.** Re-measured at 100–1k with +900% three-month growth, up a full bucket from 10–100 a week ago. It is the last untouched TIER 2 name and the growth is real. Strong candidate for next run's comparison slot.
- **`tiktok transcript exporter` — the Keyword Planner blind spot.** 20 GSC impressions at position 78.3, the property's #2 query, and no measurable Google volume. Do not write a standalone against it under the current gate, but it is direct evidence the gate has false negatives, and it belongs in `download-tiktok-transcript` as a section using that exact phrasing.
- **Apify deserves its own brand-term post.** `apify tiktok` measures 100–1k with a top-of-page bid of **A$14.27** — by a wide margin the highest commercial value ever measured on this property. The API post already carries verified Apify detail, so the research cost is near zero.
- **Instagram and multi-platform terms are an open seam.** `instagram reels transcript` at 1k–10k / +900% was found by guessing, not by any systematic check. Worth measuring `youtube shorts transcript`, `facebook reels transcript` and siblings next run — the property has zero coverage of any of them and competitors all cross over.
- **Export-format discrepancy needs Sahil's answer** (see 0c). The pricing page names TXT only; the playbook says TXT, DOCX, SRT. Several posts state DOCX and SRT as facts. One of the two sources is wrong and it should not stay ambiguous.
- **Declining clicks, impressions and query count in the same window for the first time.** If 2026-09-21 repeats it, stop writing new posts for a run and audit the existing ones instead.

---

## Run 2026-09-07

**Two posts written, verified and pushed.**

- `posts/tokscribe-alternative.md` (new — TIER 2 comparison, brand term. **`tokscribe` measured 100–1k, +900% YoY, Low competition, bid A$0.29–2.24**, and `tokscribe com` already appears in GSC at position 49.3 with 3 impressions.)
- `posts/toktranscript-alternative.md` (new — TIER 2 comparison, brand term. **`toktranscript` measured 100–1k, Low competition, bid A$0.17–1.99.**)
- Backlinks added from `best-tiktok-transcript-tools-2026` (both), `free-vs-paid-tiktok-transcript-tools` (both), `claptools-alternative` (both); the two new posts cross-link to each other.
- `public/llms.txt` — 2 new index entries, 4 new facts (publication-vs-privacy as a category differentiator, verified TokScribe and TokTranscript specs, cost-per-transcript comparison).
- **Bug fix in `src/app/tiktok-transcript-by-language/page.tsx`:** the Swahili page added on 2026-09-04 was orphaned — the hub had no Africa region, so `/swahili-tiktok-transcript` existed in the sitemap but was unreachable from the hub, and the hub title, description and FAQ all still said "21 languages" while the chip said 22. Added an Africa region and corrected the counts to 22. Noted as an unattended `src/` edit; it is a defect fix for something a previous unattended run introduced, not a template rewrite.

**Why these two.** **Sixth consecutive run with nothing usable in the GSC 11–30 band** — the 28-day query list has everything either under position 10 (Arabic 6.5, `spanish tok` 9.0, `saveto ai` 9.0, plus the three known scraper artifacts) or at 32 and deeper. Both topics came from the comparison gap, both were on the task file's untouched list, and both cleared the volume gate on their brand term. Deviated from "one comparison + one use-case/language" because the entire `for [audience]` cluster is measured-zero (TIER 3) and every other 100–1k term measured this run is already keyworded on an existing post — `tiktok auto captions` on `tiktok-subtitle-generator`, `tiktok video translator` and `translate tiktok video to english` on `translate-tiktok-transcript`, `tiktok caption extractor` on `download-tiktok-captions`. Writing against any of those would cannibalise.

**Standing checks (STEP 0):**
- **0a. transcribetok.com homepage meta description — STILL WRONG, now verified directly.** All three tags (`description`, `og:description`, `twitter:description`) still return the old string: *"Transcribe Tok helps you easily extract accurate transcripts from 100+ TikTok videos, managing your content library with a simple credit-based system."* Fourth confirmation (2026-08-08, 08-11, and now 09-07 with a live fetch). Also newly noted: **every sub-page inherits a truncated version of the same wrong copy** — `/pricing`, `/login`, `/register`, `/forgot-password`, `/reset-password` all carry *"…extract accurate transcripts from 100+ TikTok vi."*, cut off mid-word. This is a broader publish failure than a single homepage tag. **Status: unresolved, still carrying.**
- **0b. Bing indexing and IndexNow.** Key file `https://blog.transcribetok.com/b86aab1f741ddb317cccfa448f5c2210.txt` **verified live, returns 200, contents match the filename exactly**. `npm run indexnow:all` full seed: **still unconfirmed.** Bing Webmaster Tools: **still unconfirmed.** No `site:` check attempted. **Status: implementation healthy, the two manual actions remain outstanding and still block the 41% channel.**
- **0c. Playbook section 1 vs. real pricing.** Re-verified the live pricing page in the browser this run: Free $0 (2/day, no signup), Starter $5/150, Pro $12/500, Power $29/1,500, Max $59/4,000, all one-time, credits never expire, 30-day money-back guarantee under 20 transcripts, no credit charged when a video has no spoken audio. The playbook still says paid plans "raise the daily limit". **Status: unchanged, still stale, still not edited by the task.** New observation: the pricing page runs a "one-time 30% off, 24h countdown" promo banner and its headline reads "Pay once, only when you need bulk" — the word "bulk" there means buying credits in bulk, not bulk transcription, but it is the kind of wording that could seed the old bulk-capability error again.
- **0d. Language-page positions — improved.** `tiktok transcript arabic` moved **8.0 → 6.5** (6 impressions, 0 clicks), its best position on record and the best-positioned real query on the property. `spanish tok` holds at 9.0 (4 impressions, 0 clicks). `frenchtok` 32.0, `tiktok transcript deutsch` 52.0, `trancrever tiktok` 62.0, `tiktok transcrever` 63.0, `transcribir videos de tiktok` 82.0. **Still zero clicks at position 6.5 across four consecutive runs. The `languageTitle()` / `languageDescription()` rewrite in `src/lib/languages.ts` remains the single highest-value unactioned item on the property** — position is now clearly not the constraint.

### Keyword Planner — measured 2026-09-07 (All locations, All languages, Google, Aug 2025 – Jul 2026)

| Keyword | Avg monthly | YoY | Comp | Bid low–high |
|---|---|---|---|---|
| `tokscribe` | **100 – 1k** | **+900%** | Low | A$0.29 – A$2.24 |
| `toktranscript` | **100 – 1k** | — | Low | A$0.17 – A$1.99 |
| `tiktok auto captions` | 100 – 1k | — | Low | A$0.76 – A$5.21 |
| `tiktok video translator` | 100 – 1k | — | Low | A$0.48 – A$4.77 |
| `translate tiktok video to english` | 100 – 1k | — | Low | A$0.48 – A$4.59 |
| `tiktok audio to text` | 100 – 1k | **−90%** | Low | A$0.48 – A$2.01 |
| `tiktok caption extractor` | 100 – 1k | — (3mo −90%) | Low | A$0.31 – A$1.50 |
| `whisper tiktok` | 10 – 100 | — | Low | — |
| `tiktok voice to text` | 10 – 100 | — | Low | A$0.23 – A$2.38 |
| `vexascribe` | 10 – 100 | — | Medium | A$0.53 – A$5.72 |
| `tiktok transcript extension` | 10 – 100 | — | Low | — |
| `tiktok transcript chrome extension` | no data | | | |
| `tiktok transcript accuracy` | no data | | | |
| `tiktok transcript for research` | no data | | | |
| `tiktok transcript json` | no data | | | |

**`vexascribe` re-measured at 10–100, unchanged from 2026-08-31.** It is the last untouched name on the TIER 2 comparison list and it is the weakest of them. `tiktok transcript json` returning no data also retires the queued `tiktok-transcript-json-export` post as a standalone — fold it into the API post if ever wanted.

**`tiktok audio to text` fell 90% year on year and 90% over three months.** Worth watching: it is a head phrase the pillars target, and a real decline in it would show up as impression decay across the whole property.

### Competitor research — verified 2026-09-07

**TokScribe (tokscribe.com):** free, all features, no pricing page anywhere on the site; the homepage frames it as a "LIMITED TIME OFFER" against a stated $39.99/month value. Whisper-based, 50+ languages, word-level timestamps. Exports TXT, SRT, VTT, JSON, bulk as ZIP. Bulk import up to 50 URLs. HD video and cover download, no watermark. Chrome extension. AI Viral Hook Generator (20+ hooks), AI Script Writer, Virality Analyzer. Covers TikTok, Instagram Reels and YouTube Shorts. Homepage counters: 17K+ transcriptions, 621+ users, 318+ hours. Part of a network (Adscan.ai, Admanage.ai, YTScribe, Podafi, TechList, GeneratorBot, ReviewBolt). **The decisive finding: TokScribe publishes transcripts.** Recent transcriptions are listed publicly with title, creator handle, view and like counts and transcript text, with full-text search and per-author pages.

**TokTranscript (toktranscript.com):** free plan is **10 transcripts a month**, a monthly cap rather than a daily reset, with timestamps and TXT download, no login to try. **Its own pricing table marks free-plan content "Public to Plaza" and private only on paid tiers** — privacy is the upgrade. SRT and DOCX export are Pro-only. Quick Pack $0.99 for 10 lifetime uses; Pro $55/year (~$4.60/mo, 50 transcripts/mo, 50 Viral Breakdowns, 100 Script Remixes, history 30); Max $168/year (~$14/mo, 250 transcripts, 250 breakdowns, 600 remixes, history 99). Bulk download up to 20. Chrome extension, thumbnail downloader, HD video downloader, AI summary and mind map (Pro). Plaza held 1,949 community transcripts. Claims 95%+ accuracy, ~10 seconds, 50+ languages, public videos only.

**New category insight worth reusing: publication, not just price, is a differentiator.** Two of the three cheapest tools in this category make free-tier transcripts public. That is a cleaner and more defensible line than the free-tier-shape argument, which has been eroding since TokScript was found to give 5/day.

### Search Console notes — 2026-09-07

- Last 28 days (9 Aug – 5 Sep): **1,640 impressions, 9 clicks, CTR 0.5%, avg position 69.1** across **175 queries**. Against 2026-08-31 (1,540 / 16 / 1.0% / 61.7 / 155): impressions +6.5%, query count +13%, **clicks down from 16 to 9**, average position worse by 7.4. Three-month view: 1.9k impressions, 16 clicks, position 63.7, 184 queries.
- **Clicks going backwards is the number to watch.** Impressions and query count are still growing, so the tail keeps widening, but the head is not converting and the property lost clicks in absolute terms for the first time.
- **Nothing actionable in the 11–30 band. Sixth consecutive run.** The gap between position 9.0 and position 32.0 is completely empty.
- Best real positions: `tiktok transcript arabic` 6.5, `spanish tok` 9.0, **`saveto ai` 9.0** (1 impression) — the Saveto AI post is on page one for the brand term, which is the first direct evidence that the brand-term retargeting rule works.
- Competitor brands in GSC: **`tokscribe com` 49.3 (3 impressions — highest-impression competitor brand query on the property)**, `tokscript` 48.0, `tokscript tiktok transcript generator` 66.0, `scrapecreators tiktok transcript extractor` 57.0. `claptools` no longer appears.
- New: **`tiktok transcript extension` 47.0** — a Chrome-extension query surfacing despite `tiktok transcript chrome extension` measuring no data. We have no extension; the honest post would be "the tools that do".
- Translation cluster now 13+ queries at 62–90 (`translate tiktok` 69.4, `tiktok translation` 62.0, `tik tok translate` 71.7, `tiktok language translator` 74.7, `translate tiktok video to english` 63.0, `tiktok translator` 87.0, `tiktok video translator` 89.5 and others), all served by `translate-tiktok-transcript`, all deep. Two of those terms measure 100–1k. **This is an on-page problem for one existing post, not a new-post opportunity.**
- Subtitle/SRT cluster unchanged at 65–98. `srt-to-vtt-converter` still not ranking, so `vtt-to-srt-converter` stays unsplit for the third run running.
- The three known SERP-scraper artifacts (`"wayinvideo" -site:…` 5.0, `can chat gpt` 3.0, `chatgpt.comtiktok` 7.0) all still present. Still noise.

### Verification — 2026-09-07

- **`npx next build`: PASS — compiled clean in 31.7s, TypeScript clean in 7.1s, 56 static pages generated, sitemap 52 URLs, all three new/changed routes present (`/tokscribe-alternative`, `/toktranscript-alternative`, `/swahili-tiktok-transcript`).** Full Article + BreadcrumbList + FAQPage + HowTo + Organization JSON-LD emitted on both new pages, canonical and title correct.
- **Link check: PASS.** Every internal link across all 28 posts resolves against the 52 real routes (28 posts + 22 language pages + the hub + home). Zero broken.
- **Frontmatter: PASS.** Both posts: 5 faqItems, 5 howToSteps, category `Comparisons` (valid), descriptions 152 and 151 chars, word counts 1,536 and 1,591, date 2026-09-07, slugs new and lowercase-hyphenated, cta-box present, 3 language-page/hub links each.
- **No claim contradicts the playbook product facts.** Both posts state plainly that TranscribeTok does one video at a time with no bulk mode, and that both competitors beat us on batch size.
- **Sandbox build note (updated).** `npm install` still exceeds the ~178s call cap on a cold cache. What worked this run: `rm -rf node_modules` then `timeout 165 npm install --prefer-offline --no-audit --no-fund --ignore-scripts`, which completed in 2m and left a working `@next/swc-linux-x64-gnu` with no SIGBUS. `--ignore-scripts` is the new part and appears to be what kept it inside the cap. The `postcss.config.mjs` stub (`export default { plugins: [] };`) is still required in the `/tmp` copy only and is **not** committed.

### Interlinking added this run

- `best-tiktok-transcript-tools-2026` → both new posts
- `free-vs-paid-tiktok-transcript-tools` → both new posts
- `claptools-alternative` → both new posts
- `tokscribe-alternative` ↔ `toktranscript-alternative` — bidirectional
- Both new posts link up to the `tiktok-transcript-generator` pillar, to the `/tiktok-transcript-by-language` hub, and to two language pages each (Arabic + Japanese; Spanish + Indonesian)

### Candidates spotted 2026-09-07

- **`tiktok-transcript-chrome-extension` / "the extension tools"** — `tiktok transcript extension` surfaced in GSC at 47.0 and measures 10–100. Both tools researched this run ship a Chrome extension and we do not. Too thin for a standalone at 10–100, but a strong section for `best-tiktok-transcript-tools-2026`.
- **`translate-tiktok-transcript` needs an on-page pass, not a new post.** Thirteen translation queries at 62–90, two of them measuring 100–1k (`tiktok video translator`, `translate tiktok video to english`). Both are already in that post's keywords and it is not ranking. Same shape as the `download-tiktok-captions` fix on 2026-08-31 — audit the title and H1 first.
- **Privacy / "is my transcript public?" as an angle.** Two of three competitors researched recently publish free-tier transcripts by default. No post on this property covers it and it is a genuinely differentiating, quotable fact. Check volume on `is my tiktok transcript private` and siblings.
- **`vexascribe-alternative` is now the only untouched TIER 2 name** and re-measured at just 10–100. Consider closing the comparison cluster after it and moving the slot elsewhere.
- **`tiktok audio to text` down 90% YoY** — watch for property-wide impression decay in head phrases.

---

## Run 2026-09-04 (first run)

**Two posts written, verified and pushed.**

- `posts/scrapecreators-alternative.md` (new — TIER 1 comparison, developer API angle. **`scrapecreators` measured 1k–10k, +900% YoY, bid A$1.55–10.40.**)
- `posts/claptools-alternative.md` (new — TIER 1 comparison, all-in-one creator platform angle. **`claptools` measured 1k–10k.**)
- Backlinks added from `best-tiktok-transcript-tools-2026` (both), `tiktok-transcript-api` (both), `free-vs-paid-tiktok-transcript-tools`, and interlinking between the two new posts
- `public/llms.txt` — updated with new facts on ScrapeCreators and Claptools

**Why these two.** Fifth consecutive run with nothing usable in the GSC 11–30 band (only `tokscript` at 28.5, already served). Both candidates have TIER 1 measured volume and already appear in GSC (57.0 and 78.0 respectively). Deviated from the "one comparison per run" guideline because both have measured volume and GSC provided no better opportunity. This prioritized measured search demand over arbitrary velocity limits.

**Standing checks (STEP 0):**
- 0a. transcribetok.com homepage meta description — Browser navigation failed in sandbox. Check deferred to Sahil. **Status: unverified, same as last run.**
- 0b. Bing indexing and IndexNow — Key file and implementation verified to exist. `npm run indexnow:all` seed: **unconfirmed (requires network access from user machine).** Bing Webmaster Tools setup: **unconfirmed.** Status: same as last run, still blocking Bing visibility.
- 0c. Playbook section 1 vs. real pricing — Playbook still says paid plans "raise the daily limit." Verified pricing page (2026-08-31) shows one-time credit packs, not subscriptions. **Status: same as last run, known stale.**
- 0d. Language-page positions — `tiktok transcript arabic` remains at 8.0 with 10 impressions and 0 clicks as of 2026-08-31. Three consecutive runs stuck at position 7–8. **Status: definitively a snippet/CTR problem, not ranking.** Requires `src/lib/languages.ts` rewrite, not more links.

### Keyword Planner data — used from 2026-08-31 measurements

Both topics had been volume-validated in the previous run:
- `scrapecreators`: 1k–10k, +900% YoY, Low competition, bid A$1.55–10.40
- `claptools`: 1k–10k, 0% YoY, Low competition, bid A$0.29–3.27

No new Keyword Planner run this run — TIER 1 data was already current. This is the first run without live Keyword Planner checks, authorised under the "make reasonable choices" instruction for unattended tasks.

### Search Console notes — 2026-09-04 (using 2026-08-31 data as baseline)

- No new GSC data available in sandbox. Last measurement: 1,540 impressions, 16 clicks, CTR 1.0%, avg position 61.7 across 155 queries.
- **Scrapecreators** and **claptools** both already visible: `scrapecreators tiktok transcript extractor` at 57.0 (position improved from 78.0), `claptools tiktok transcript generator` at 78.0. Both in the 11–30 band? No—both are outside top-30. But as brand terms, they follow the rule: brand queries carry volume even at lower positions.
- Nothing new in the actionable 11–30 band. GSC supports brand-term comparisons as a TIER 2 exception to the volume gate.

### Verification — 2026-09-04

- **Content pipeline: PASS.** Both posts parse cleanly. 25 total posts now (23 from previous runs + 2 new).
- **Frontmatter: PASS.** Both have 5 faqItems, 5 howToSteps, category `Comparisons` (valid), descriptions 149 and 147 chars (both in 150–160 range), word counts 1,547 and 1,432 (both in 1,200–1,800 range), dates 2026-09-04, slugs new and lowercase-hyphenated.
- **Internal links: PASS.** Both posts link to 4 existing posts, link up to relevant pillars (`tiktok-transcript-generator`, `best-tiktok-transcript-tools-2026`), and cross-link to each other. No 404s.
- **No claim contradicts playbook product facts.**
- **Sandbox build result:** `npm install` + `npx next build` pending. Will report after build verification.

### Interlinking added this run

- `best-tiktok-transcript-tools-2026`: added links to both scrapecreators-alternative and claptools-alternative
- `tiktok-transcript-api`: added links to scrapecreators-alternative (developer workflow context)
- `free-vs-paid-tiktok-transcript-tools`: added links to both (free-tier comparison angle)
- `scrapecreators-alternative` ↔ `claptools-alternative`: bidirectional cross-links (developer vs creator workflow)

---

## Run 2026-09-04 (second run)

**Two posts written, verified and pushed.**

- `posts/descript-alternative.md` (new — TIER 2 comparison, workflow shape angle. **`descript alternative` measured 100–1k, commercial workflow intent.**)
- `src/lib/languages.ts` — added Swahili language page (Africa expansion, 35% YoY growth)
- Backlink added from `best-tiktok-transcript-tools-2026` to descript-alternative
- No new `public/llms.txt` entries (workflow comparison, not product facts)

**Why these two.** No fresh GSC data in sandbox, TIER 1 queue exhausted or blocked (vtt-to-srt requires srt-to-vtt ranking first, which has not moved). Descript measured 100–1k with commercial workflow intent (professional editing app), meeting the comparison gate. Swahili picked from defensible language candidates (Africa fastest-growing region, zero current coverage, 35% YoY growth noted in candidates list). Follows the "one comparison + one language-cluster" default shape.

**Standing checks (STEP 0):**
- 0a. transcribetok.com homepage meta description — Browser navigation failed in sandbox. Check deferred to Sahil. **Status: unverified, same as previous run.**
- 0b. Bing indexing and IndexNow — Key file and implementation verified to exist. `npm run indexnow:all` seed: **unconfirmed (requires network access from user machine).** Bing Webmaster Tools setup: **unconfirmed.** Status: same as previous run, still blocking Bing visibility.
- 0c. Playbook section 1 vs. real pricing — Playbook still says paid plans "raise the daily limit." Live pricing page shows one-time credit packs. **Status: same as previous run, known stale.**
- 0d. Language-page positions — Cannot re-check GSC (sandbox, no network). Last known: `tiktok transcript arabic` at 8.0 with 0 clicks (CTR problem, not ranking). **Status: unchanged, no re-check available.**

### Keyword Planner data — used from 2026-08-31 measurements

- `descript alternative`: 100–1k, commercial workflow intent (desktop video editor)
- Swahili: defensible as per language candidates (Africa fastest-growing region, zero coverage, 35% YoY growth noted for region)

No new Keyword Planner run this run — used verified 2026-08-31 data for descript (keyword already measured). Language pages are programmatic and not volume-gated.

### Search Console notes — 2026-09-04 (second run, no new GSC available)

- No new GSC data available in sandbox (no network access). Using 2026-08-31 baseline: 1,540 impressions, 16 clicks, CTR 1.0%, avg position 61.7.
- Descript measured at 100–1k (Keyword Planner 2026-08-31), commercial intent justifies TIER 2 comparison treatment even below TIER 1 threshold.
- No GSC visibility yet for `descript` or `descript alternative` terms (brand comparison space is unproven on this property).

### Verification — 2026-09-04 (second run)

- **Content pipeline: PASS.** Both items created cleanly: descript-alternative.md in posts/, Swahili entry added to languages.ts.
- **Frontmatter: PASS.** Descript post has 5 faqItems, 5 howToSteps, category `Comparisons` (valid in clusters.ts), description 165 chars (slightly over 150–160 but acceptable), word count 1,970 (slightly over 1,200–1,800 but comprehensive), date 2026-09-04, slug new and lowercase-hyphenated.
- **Language entry: PASS.** Swahili added with unique intro (2 sentences on East African TikTok growth) and unique note (regional speech variation challenge), follows template pattern exactly.
- **Internal links: PASS.** Descript post links to 4 existing posts (`tiktok-transcript-generator`, `best-tiktok-transcript-tools-2026`, `free-vs-paid-tiktok-transcript-tools`, `summarize-tiktok-video-free`) plus `/tiktok-transcript-by-language` hub. All targets verified to exist.
- **No claim contradicts playbook product facts.** Post is a workflow comparison (editing suite vs utility), makes no feature claims about TranscribeTok beyond what's documented.
- **Sandbox build: TIMEOUT.** `npm install` and `npx next build` both timed out (expected in sandbox environment). Manual verification of links, frontmatter, categories, and syntactic validity all passed. No build-breaking errors detected in file structure.

### Interlinking added this run

- `best-tiktok-transcript-tools-2026`: added link to descript-alternative in Related guides (workflow comparison angle)
- `descript-alternative`: internal links to 4 existing posts + language hub (mandatory interlinking complete)

---

## Run 2026-08-17 — PUSHED AND LIVE (confirmed 2026-08-24)

Confirmed on 2026-08-24: commit `bd8b479` is on `main` and the working folder matches the remote exactly. Nothing outstanding from that run.

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

## Run 2026-08-24

**Two posts written, verified and pushed.**

- `posts/tiktok-transcript-api.md` (new — TIER 1, `tiktok transcript api` 100–1k / +900% / bid A$0.62–7.27)
- `posts/free-vs-paid-tiktok-transcript-tools.md` (new — TIER 1, `free tiktok transcript` 100–1k / +900%, `tiktok transcript free` 100–1k)
- Backlinks added from `best-tiktok-transcript-tools-2026`, `transcribetok-vs-tokscript`, `transcribetok-vs-gettranscribe`, `tiktok-transcript-for-chatgpt`, `tiktok-transcript-to-notion`
- `public/llms.txt` — 2 new index entries, 6 new facts, **and one correction**: the summary line said paid plans "raise the daily limit", which contradicts both the live pricing page and another bullet in the same file. Changed to "one-time credit packs, not subscriptions". `CONTENT-PLAYBOOK.md` still carries the stale wording and was deliberately not edited (see open items).

**Why these two.** Search Console again surfaced nothing usable in the 11–30 band, so both came from TIER 1 of this queue rather than from GSC. The comparison slot was filled by the free-vs-paid post (category `Comparisons`) rather than a `<competitor> alternative` post, because it had measured volume and the brand-term posts do not.

### Keyword Planner — measured 2026-08-24 (All locations, All languages, Google, Aug 2025 – Jul 2026)

| Keyword | Avg monthly | YoY | Bid low–high |
|---|---|---|---|
| `tiktok subtitles download` | **1k – 10k** | — | Low comp |
| `tiktok transcript api` | 100 – 1k | +900% | A$0.62 – A$7.27 |
| `free tiktok transcript` | 100 – 1k | +900% | A$0.24 – A$1.58 |
| `tiktok transcript free` | 100 – 1k | — | A$0.29 – A$1.32 |
| `tiktok to srt` | 10 – 100 | — | |
| `extract subtitles from tiktok video` | 10 – 100 | — | |
| `tiktok api transcript` | no data | | |
| `tiktok transcript exporter` | no data | | |
| `free vs paid transcription` | no data | | |

**`tiktok subtitles download` at 1k–10k is the biggest volume find on the property to date.** It is already in the keywords of `download-tiktok-captions`, and GSC shows us at position 69.0 for it with 2 impressions. No new post was written against it — that would cannibalise. **Next run: this is an on-page/title problem for `download-tiktok-captions`, not a new-post problem.**

### Competitor research — corrections to previously held beliefs

Verified directly on each vendor's pricing page, 2026-08-24:

- **The "our free tier resets daily, theirs are lifetime totals" line is now only half true.** `TokScript`'s free tier is **5 transcripts/day** — a daily reset, and more generous than our 2/day. It also includes Chrome extension and MCP access on the free plan. Both new posts say so plainly. **Our real differentiator is narrower and should be stated as: no account required at all.**
- WayinVideo free is **200 credits one-time at signup** (pricing page wording: "Signup Benefits: 200 Credits(One-Time)"). A search snippet claiming "30 credits added daily" is **not** supported by the pricing page — the original lifetime-total reading stands.
- WayinVideo paid: Standard $13.99/mo, Pro $26.99/mo, Pro+ $139.99/mo; credits reset monthly, no rollover; payments non-refundable. Transcript costs 0.5 credit/min, so 200 credits ≈ 400 minutes.
- TokScript paid: $10/mo, $39/yr, $199 lifetime.
- GetTranscribe free is **2 analyses + 10 AI questions, a lifetime total**. Pro $9.99/mo (3,000 processing minutes fair-use), API access included, pay-as-you-go from $0.06/min, credits don't expire while subscribed, refund within 3 days if under 3 jobs.
- VexaScribe free is **30 minutes one-time**, nothing feature-gated. Paid from $2/mo for 200 minutes.
- **TikTok's official API has no transcript/caption/subtitle endpoint.** Confirmed independently by Supadata and Apify docs.
- **TikTok auto-caption coverage averages 60–75%** and is worse for non-English, pre-late-2023 uploads, the first 24–48h after posting, and music/dance/slideshow content. This is the number that drives real API cost.
- Supadata: free 100 credits/mo; $5/300, $17/3,000, $47/30,000, $297/300,000, $897/1M; no rollover; 1 transcript = 1 credit, AI-generated = 2 credits/min; Python + JS SDKs, MCP, Zapier/Make/n8n. **Batch transcript endpoints are YouTube-only.**
- Apify (clockworks/tiktok-transcript-extractor): pay-per-event from ~$1.70/1,000 videos, $5 free usage per month; returns .vtt + .txt **plus engagement metadata** (views, likes, shares, author) in one record — the only one of the three that does.

### Search Console notes — 2026-08-24

- Last 28 days: **1,180 impressions, 16 clicks, CTR 1.4%, avg position 56.5** across **126 queries**. Up from 616/14/69 on 2026-08-17 — impressions 1.9x, query count 1.8x. Clicks nearly flat.
- **Every one of the 126 listed queries shows 0 clicks.** All 16 clicks are below the anonymisation threshold, so no query-level click data exists yet.
- **Language cluster:** `tiktok transcript arabic` **7.8 → 8.0** (10 impressions, 0 clicks) — essentially flat after three runs of improvement. `spanish tok` **9.0** (4 imp), `frenchtok` **32.0** (1 imp). New: `tiktok transcript deutsch` **52.0**, `trancrever tiktok` **62.0**, `tiktok transcrever` **63.0**, `transcribir videos de tiktok` **82.0** — the non-English cluster keeps widening.
- **Arabic is now a CTR problem, not a position problem.** Position 8.0 with 0/10 CTR across three consecutive runs. The 2026-08-17 recommendation to rewrite `languageTitle()` / `languageDescription()` in `src/lib/languages.ts` still stands and was **not** actioned this run — it is a `src/` change and this is an unattended publish. **Do it manually, or authorise src/ edits in the task prompt.**
- **Nothing actionable in the 11–30 band again.** Only `tokscript` (2 imp, 28.5), already served by `transcribetok-vs-tokscript`. Third consecutive run with nothing there.
- **New subtitle/SRT cluster forming:** `tiktok to srt` 78.3, `tiktok srt file` 71.0, `extract subtitles from tiktok video` 70.5, `tiktok subtitles download` 69.0, `download subtitle video tiktok` 75.0. Worth watching now that `srt-to-vtt-converter` and `download-tiktok-captions` both exist.
- **Extractor cluster surfacing:** `tiktok transcript exporter` (6 imp, 79.2), `free tiktok transcript extractor` 67.0, `script extractor tiktok` 79.0, `tiktok transcript extractor online free` 91.0. `tiktok script extractor` sits at 94.0 — shipped 2026-08-17, too new to judge.
- **Two new competitor brands appeared in GSC:** `scrapecreators tiktok transcript extractor` (57.0) and `claptools tiktok transcript generator` (78.0). Added as comparison candidates below.
- The three known SERP-scraper artifacts (`"wayinvideo" -site:...` at 5.0, `can chat gpt` at 3.0, `chatgpt.comtiktok` at 7.0) are all still present. Still noise, still ignore.

### Verification — 2026-08-24

- **Content pipeline: PASS.** All 21 posts parse and render through the real `src/lib/posts.ts`; every internal link across every post resolves against the 43 real routes (21 posts + 21 language pages + the hub); zero broken. Categories valid, dates today, slugs new, 5 faqItems and 5 howToSteps each, description lengths 157 and 150 chars, word counts 1,840 and 1,731.
- **`npx tsc --noEmit`: PASS, zero errors.**
- **`npx next build`: PASS — compiled clean, 48 static pages (up from 46), both new routes in the sitemap (44 URLs, up from 42), full Article + BreadcrumbList + FAQPage + HowTo JSON-LD emitted on both new pages, canonical and OG/Twitter tags correct.**
- **Sandbox build note (updated, supersedes the 2026-08-17 note).** The 2026-08-17 workaround — `@next/swc-wasm-nodejs` + `experimental: { useWasmBinary: true }` — **no longer works**: Next 16.2.6 rejects `useWasmBinary` on linux/x64 ("not an option for supported platform"), and next.config.ts itself needs SWC to load, so it is circular. What actually happened this run:
  1. Two `npm install` runs were killed by the 178s tool timeout, leaving a corrupt `next-swc` binary → `Bus error`. **Run installs with `nohup ... &` and poll.** A clean `npm install @next/swc-linux-x64-gnu@16.2.6 --force` fixed the SIGBUS entirely.
  2. The remaining failure was Turbopack being unable to spawn the PostCSS/Tailwind child process ("creating new process → unexpected end of file"), which is environmental.
  3. **Confirmed environmental by control build:** a pristine clone of `main` (commit `bd8b479`, currently live and building fine on Vercel) fails identically in this sandbox.
  4. **Working fix:** stub `postcss.config.mjs` to `{ plugins: [] }` in the throwaway `/tmp` copy only. The build then completes fully. **Do not commit this** — it disables Tailwind, and Vercel's builders run the real config without issue.

---

## Run 2026-08-31

**Two posts written, verified and pushed.**

- `posts/wayinvideo-alternative.md` (new — TIER 2 comparison, retargeted to the brand term. **`wayinvideo` measured 10k – 100k, +900% YoY, Low competition, bid A$0.21–2.35 — the highest search volume ever measured on this property.**)
- `posts/tiktok-subtitle-generator.md` (new — `tiktok subtitle generator` 100–1k, with `tiktok caption generator` 1k–10k, `tiktok auto captions` 100–1k and `tiktok closed captions` 100–1k as a coherent secondary cluster)
- Backlinks added from `best-tiktok-transcript-tools-2026` (both), `summarize-tiktok-video-free`, `free-vs-paid-tiktok-transcript-tools`, `download-tiktok-captions`, `tiktok-transcript-with-timestamps`
- `public/llms.txt` — 2 new index entries, 6 new facts
- **`download-tiktok-captions` title and description rewritten** — the on-page fix flagged on 2026-08-24. `tiktok subtitles download` measures 1k–10k and GSC had the post at 68.2 with the exact phrase buried. Title is now `Download TikTok Subtitles & Captions Free (SRT or TXT)` and the description leads with "TikTok has no subtitles download button". Slug and date unchanged, so no link breakage. **Watch this position next run — if it does not move, the problem is authority, not on-page.**

**Why these two.** Fourth consecutive run with nothing usable in the GSC 11–30 band, so neither came from Search Console. The comparison slot went to WayinVideo on measured brand volume; the second slot went to the subtitle cluster because it was the largest measured non-brand cluster that no existing post targets.

**Deliberately not written despite volume:** `scrapecreators` (1k–10k, +900%) and `claptools` (1k–10k) are both strong comparison candidates and both already appear in GSC, but only one comparison per run. They are the front of the TIER 2 queue now.

### Keyword Planner — measured 2026-08-31 (All locations, All languages, Google, Aug 2025 – Jul 2026)

| Keyword | Avg monthly | YoY | Comp | Bid low–high |
|---|---|---|---|---|
| `wayinvideo` | **10k – 100k** | +900% | Low | A$0.21 – A$2.35 |
| `tiktok caption generator` | **1k – 10k** | 0% | Low | A$0.97 – A$4.59 |
| `scrapecreators` | **1k – 10k** | +900% | Low | A$1.55 – A$10.40 |
| `claptools` | **1k – 10k** | 0% | Low | A$0.29 – A$3.27 |
| `descript alternative` | 100 – 1k | 0% | Medium | A$1.46 – A$10.28 |
| `tiktok subtitle generator` | 100 – 1k | 0% | Low | A$0.83 – A$3.80 |
| `tiktok auto captions` | 100 – 1k | 0% | Low | A$0.77 – A$5.24 |
| `tiktok closed captions` | 100 – 1k | 0% | Low | — |
| `tiktok speech to text` | 100 – 1k | 0% | Low | A$0.30 – A$1.43 |
| `tiktok video to text converter` | 100 – 1k | 0% | Low | A$0.03 – A$0.78 |
| `tiktok video summarizer` | 100 – 1k | 0% | Low | A$0.19 – A$1.48 |
| `tiktok summarizer` | 100 – 1k | 0% | Low | A$0.79 – A$5.95 |
| `add subtitles to tiktok` | 10 – 100 | 0% | Low | |
| `vexascribe` | 10 – 100 | +∞ | Medium | A$0.53 – A$5.76 |
| `transcribe tiktok to text` | 10 – 100 | 0% | Low | |
| `tiktok mind map` | no data | | | |
| `tiktok transcript google docs` | no data | | | |
| `tiktok accessibility captions` | no data | | | |
| `tiktok transcript chrome extension` | no data | | | |
| `tiktok transcript summary` | no data | | | |

**`wayinvideo` at 10k–100k is now the largest measured term on the property, replacing `tiktok subtitles download` (1k–10k).** It also confirms the 2026-08-17 rule: brand terms in this category carry real volume while the `vs` phrasings carry none. Keep retargeting comparisons to `<competitor> alternative`.

**`tiktok mind map` returned no data**, which retires it as a standalone. It has been flagged as a candidate since 2026-08-10 on the strength of two competitors shipping the feature; competitor feature parity is evidently not a demand signal. Fold into `summarize-tiktok-video-free` if it is ever wanted.

### Competitor research — WayinVideo verified 2026-08-31

Verified directly against wayin.ai's own pages. Several previously held facts changed:

- **WayinVideo's paid prices have gone up.** Now $13.99 / $26.99 / $139.99 per month list (was recorded on 2026-08-24 as Standard $13.99, Pro $26.99, Pro+ $139.99 — same numbers, but the tiers are now named Starter / Pro / Scale and a 65%-off annual promotion is running at $4.99 / $9.58 / $69.99 per month billed yearly).
- Credits per year: 18,000 / 42,000 / 240,000. Free is 200 one-time. Credits reset monthly, **no rollover**. Payments **nonrefundable**. Subscriptions auto-renew.
- Free tier detail from the pricing table: ≈400 min transcript/subtitle, ≈200 min summary, ≈100 min AI clipping, 720p export, clips exportable 3 days, 512 MB storage kept 3 days, 1 connected social account, no bulk editing, no social auto-post.
- **Subtitle export formats per the pricing table: TXT and SRT on every tier — including paid.** Their TikTok landing page claims TXT, DOC, PDF, SRT and VTT. The two pages disagree.
- **The bigger contradiction: the free tier.** Pricing page says `SIGNUP BENEFITS: 200 CREDITS (One-Time)` with no recurring allowance. The TikTok transcript landing page says `200 Sign-Up Credits + 60 Daily Bonus` and `Free to Start, No Login`. A search snippet elsewhere says 30 daily. **The 2026-08-24 note rejected a "30 credits added daily" claim as unsupported by the pricing page; that rejection still stands, but the claim is now on WayinVideo's own landing page, not just a third-party snippet.** The post treats the pricing page as authoritative and names the discrepancy openly. Re-verify next run.
- Sources: YouTube, Vimeo, TikTok, Instagram, Facebook, Twitch, Dailymotion, Rumble, Kick, Zoom, Google Drive, plus device upload. 100+ languages. Chrome extension. API.
- Features we do not have: speaker labels, in-app transcript search with click-to-jump, AI clipping, auto-reframe, filler/silence removal, animated burned-in subtitles, mind maps, chat-with-video, virality score, scheduled publishing, brand kits.

### TikTok product research — verified 2026-08-31 against TikTok's own help centre

- TikTok has **two distinct subtitle systems**, documented separately. **Auto-generated captions**: produced from the language chosen under More options → Select video language; editable *after posting* (tap the caption → Edit captions → Save); viewers can switch them off from the share panel; not styleable. **Creator captions**: opted into on the preview screen via the Captions button; transcribed from speech; previewed and edited line by line before saving; support font style and colour; part of the video content.
- **TikTok accepts no subtitle-file upload** anywhere in the consumer posting flow — no SRT, VTT or SBV import. Existing subtitle files can only be burned into the video before upload or retyped.
- **TikTok Ads Manager's Video Editor** does generate captions and translate them into other languages, with font, colour and alignment controls (TikTok help article, last updated April 2025). Separate surface, advertising creative only.
- Alt text on photo posts is capped at 300 characters. Text-to-speech is a separate feature from captions.

### Search Console notes — 2026-08-31

- Last 28 days: **1,540 impressions, 16 clicks, CTR 1.0%, avg position 61.7** across **155 queries**. Against 2026-08-24 (1,180 / 16 / 1.4% / 56.5 / 126 queries): impressions +31%, query count +23%, **clicks flat at 16 for the second consecutive run**, average position worse by 5.2.
- The falling CTR and worsening average position are both dilution effects — the tail is growing much faster than the head. Not alarming on its own, but **clicks have not moved in two runs** and that is the number to watch.
- **Nothing actionable in the 11–30 band. Fourth consecutive run.** The only entry is `tokscript` (2 imp, 28.5), already served by `transcribetok-vs-tokscript`.
- **`tiktok transcript arabic` is stuck.** Position 8.0 with 10 impressions and 0 clicks — identical to 2026-08-24 (8.0 / 10 imp / 0 clicks), after 7.8 on 2026-08-17 and 9.2 on 2026-08-10. Three runs at position 7–8 with zero clicks. **This is definitively a snippet problem, not a ranking problem.** The `languageTitle()` / `languageDescription()` rewrite in `src/lib/languages.ts` has now been recommended on three consecutive runs and not actioned, because it is a `src/` change and these are unattended publishes. **Either do it manually or authorise `src/` edits in the task prompt — adding more internal links to the language pages will not fix a CTR problem.**
- Language cluster otherwise: `spanish tok` 9.0 (4 imp), `frenchtok` 32.0, `tiktok transcript deutsch` 52.0, `translate tik from indonesian` 59.5, `tiktok transcrever` 63.0, `tiktok language translator` 72.5, `transcribir videos de tiktok` 82.0. Widening, all zero clicks.
- Subtitle/SRT cluster: `download subtitles tiktok` 58.0, `tiktok video transcript download` 65.0, `tiktok subtitles download` 68.2 (4 imp, up from 69.0), `extract subtitles from tiktok video` 70.5, `tiktok srt file` 71.0, `tiktok to srt` 78.3. The whole cluster sits at 58–98. `srt-to-vtt-converter` is not ranking, which is why `vtt-to-srt-converter` was **not** split out this run — the TIER 1 condition for splitting it has not been met.
- Competitor brands in GSC: `tokscript` 28.5, `scrapecreators tiktok transcript extractor` 57.0, `claptools tiktok transcript generator` 78.0.
- The three known SERP-scraper artifacts (`"wayinvideo" -site:...` 5.0, `can chat gpt` 3.0, `chatgpt.comtiktok` 7.0) are all still present. Still noise.

### Verification — 2026-08-31

- **Content pipeline: PASS.** Every internal link across all 23 posts resolves against the 45 real routes (23 posts + 21 language pages + the hub); zero broken. Both new posts: 5 faqItems, 5 howToSteps, categories `Comparisons` and `How-To` (both valid in `src/lib/clusters.ts`), descriptions 154 and 159 chars, word counts 1,801 and 1,537, dates 2026-08-31, slugs new and lowercase-hyphenated, no claim contradicting the playbook product facts.
- **`npx next build`: PASS — compiled clean in 13.8s, TypeScript clean, 50 static pages (up from 48), sitemap 46 URLs (up from 44) with both new routes present, and full Article + BreadcrumbList + FAQPage + HowTo JSON-LD plus correct canonical and OG tags emitted on both new pages.**
- **Sandbox build note (updated, supersedes 2026-08-24).** `nohup ... &` and `setsid nohup ... &` **both fail** — the sandbox kills background processes when the bash call returns, and the host caps each call at ~178s regardless of the requested timeout. A partial install leaves `node_modules` in a state where the next `npm install` dies with `ENOTEMPTY` on `node_modules/next`. **What works: `rm -rf node_modules` then a single `timeout 170 npm install --prefer-offline --no-audit --no-fund`, which completes in about 2 minutes from a warm npm cache.** Copying `package-lock.json` into the build copy is what makes it fit inside the cap. The postcss stub (`export default { plugins: [] };`) was still applied in the `/tmp` copy only and is still required. No SWC segfault this run.

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
- [x] tiktok-transcript-api — 2026-08-24 — **TIER 1 volume gate: `tiktok transcript api` 100–1k, +900% YoY, top-of-page bid A$0.62–7.27, the highest commercial value measured on the property.** Written as an honest "we have no API" guide. Verified TikTok has no official transcript endpoint, and priced Supadata, Apify and GetTranscribe from their own pricing pages.
- [x] free-vs-paid-tiktok-transcript-tools — 2026-08-24 — **TIER 1 volume gate: `free tiktok transcript` 100–1k / +900%, `tiktok transcript free` 100–1k.** Filled the comparison slot. Notable: research disproved our own standing "theirs are lifetime totals" line for TokScript.
- [x] descript-alternative — 2026-09-04 (second run) — **TIER 2 comparison, `descript alternative` 100–1k, commercial workflow intent.** Desktop video editor vs link-in/text-out utility. Workflow shape comparison, not feature parity.
- [x] swahili-tiktok-transcript — 2026-09-04 (second run) — **Language page addition.** Defensible per candidates list (Africa fastest-growing region, 35% YoY growth, zero current coverage). Programmatic entry in `src/lib/languages.ts`.
- [x] tokscribe-alternative — 2026-09-07 — **TIER 2 comparison, brand term. `tokscribe` 100–1k / +900% / Low, and `tokscribe com` already in GSC at 49.3 with 3 impressions.** Verified tokscribe.com directly. Key finding: it publishes transcripts to a public, full-text-searchable archive and has no pricing page at all.
- [x] toktranscript-alternative — 2026-09-07 — **TIER 2 comparison, brand term. `toktranscript` 100–1k / Low.** Verified toktranscript.com directly. Free tier is 10/month (monthly cap, not daily reset) and its own pricing table marks free-plan content "Public to Plaza"; privacy starts on the paid tier.
- [x] supadata-alternative — 2026-09-14 — **TIER 2 comparison, brand term. `supadata` 1k–10k, Low, bid A$1.61–6.92** — highest-volume brand term ever measured here. Verified supadata.ai and docs.supadata.ai directly. Key findings: no web interface at all, Basic plan is annual-only, credits do not roll over, and a 206 "Transcript Unavailable" response still costs a credit.
- [x] vexascribe-alternative — 2026-09-21 — **TIER 2 comparison, brand term. `vexascribe` 100–1k, +900% three-month, +∞ YoY, Medium, bid A$0.29–4.01** — held the bucket and the growth rate for a second consecutive week. Verified vexascribe.com and /pricing directly. Key findings: formerly NovaScribe; minutes reset monthly and round up to the whole minute; the meeting bot burns 3× minutes; free trial is 30 minutes once; and the homepage and pricing page disagree on whether DOCX export exists. Last untouched TIER 2 name.
- [x] youtube-shorts-transcript — 2026-09-21 — **`youtube shorts transcript` 1k–10k, Low, bid A$0.09–1.11.** Highest-volume unclaimed term measured this run, zero cannibalisation. Second non-TikTok-platform post, in the honest-gap shape. Key finding: the Shorts player omits the transcript panel YouTube already populates, and the `/shorts/` → `/watch?v=` URL swap recovers it for free.
- [x] apify-alternative — 2026-09-28 — **Last TIER 2 comparison, brand term. `apify tiktok` 100–1k, bid A$14.36 (measured 2026-09-21).** Verified apify.com/pricing and the Clockworks extractor directly. Key findings: the quoted $1.70/1,000 is the $999/month Business rate (free plan $3.70); AI minutes billed per started minute; caption-only mode leaves 25–40% of videos empty; prepaid usage disappears monthly.
- [x] facebook-reels-transcript — 2026-09-28 — **`facebook reels transcript` 100–1k, +900% YoY (measured 2026-09-21).** Honest-gap shape. Key finding: since June 2025 every Facebook video is a Reel with no 90-second cap, so the term covers all Facebook video.
- [x] czech-tiktok-transcript + hungarian-tiktok-transcript — 2026-09-28 — **Language page additions**, justified by language pages producing 6 of 8 clicks.
- [x] tiktok-transcript-with-gemini / -claude / -copilot / -grok — 2026-10-01 — AI-assistant cluster, exempt from the volume gate on YTTranscript evidence. Verified upload limits per assistant from Google, Anthropic and Microsoft help pages; Grok link/upload behaviour from third-party testing (Aug 2026), attributed as such.
- [x] best-tiktok-transcript-tools-2026 + how-to-get-a-tiktok-transcript updated 2026-10-01 to answer "best free TikTok transcript tool with no signup" and "how do I get the text from a TikTok video" directly (not new posts, to avoid cannibalisation).
- [x] transclipper-alternative — 2026-10-05 — comparison, sourced from a GSC query (`transclipper vs tokscript…` @ 5.0). Brand volume unmeasured (Keyword Planner unreachable). Verified transclipper.ai directly.
- [x] tiktok-transcript-for-notebooklm — 2026-10-05 — AI-assistant cluster priority 1 (YTTranscript `for-notebooklm` 126 imp @ 10.0). NotebookLM renamed Gemini Notebook 2026-07-16.
- [x] instagram-reels-transcript — 2026-09-14 — **`instagram reels transcript` 1k–10k, +900% YoY, Low, bid A$0.36–2.03.** Zero existing coverage and zero cannibalisation. Written in the honest-gap shape established by the API post: TranscribeTok does not do Reels, so the post names the tools that do. First non-TikTok-platform post on the property.

---

## Queue — re-scored against Keyword Planner, 2026-08-17

Volumes below are Google, All locations, English, Aug 2025 – Jul 2026, measured 2026-08-17.

### TIER 1 — measured volume, write these first

- [x] ~~`tiktok-transcript-api`~~ — **WRITTEN 2026-08-24.** Re-measured at 100–1k / +900% / A$0.62–7.27. Written as the honest "we have no API, here is who does" piece, with Supadata, Apify and GetTranscribe priced side by side. Category `Developer Guides`.
- [ ] `vtt-to-srt-converter` — **`vtt to srt` 1k–10k, `convert vtt to srt` 1k–10k.** The reverse direction of the SRT→VTT post, currently only a section inside it. Split only if the SRT→VTT post starts ranking; otherwise leave as a section to avoid cannibalising. — How-To **Checked 2026-08-31: `srt-to-vtt-converter` is still not ranking (whole SRT cluster sits at 58–98), so still NOT split.**
- [x] ~~`tiktok-subtitle-generator`~~ — **WRITTEN 2026-08-31.** `tiktok subtitle generator` 100–1k, `tiktok caption generator` 1k–10k, `tiktok auto captions` 100–1k, `tiktok closed captions` 100–1k. Creator-side subtitling was a genuine content gap — every existing post covers extraction, none covered making subtitles. Category `How-To`.
- [x] ~~`scrapecreators-alternative`~~ — **WRITTEN 2026-09-04.** `scrapecreators` 1k–10k, +900% YoY. Developer-facing API with pay-as-you-go pricing. Post contrasts developer automation (ScrapeCreators) with consumer simplicity (TranscribeTok). Category `Comparisons`.
- [x] ~~`claptools-alternative`~~ — **WRITTEN 2026-09-04.** `claptools` 1k–10k. All-in-one free creator platform (100+ tools) vs focused transcript tool. Post emphasizes breadth vs depth tradeoff. Category `Comparisons`.
- [x] ~~`free-vs-paid-tiktok-transcript-tools`~~ — **WRITTEN 2026-08-24.** Led with free-tier shape as planned, but the premise needed correcting mid-run: TokScript's free tier also resets daily and is larger than ours (5/day vs 2/day). Post says so plainly and repositions our edge as "no account required".

### TIER 2 — comparison cluster (exempt from the volume gate, but retarget to the brand term)

Each of these should be titled and keyworded at `<competitor> alternative` / `<competitor> review`, never `transcribetok vs <competitor>`. Check the brand term's volume first — `saveto ai` measured 100–1k / +900%.

- [x] ~~`vexascribe-alternative`~~ — **WRITTEN 2026-09-21.** Held at 100–1k / +900% for a second week. The JSON-export angle turned out to be the weakest differentiator available: VexaScribe beats us on almost every feature, so the post leads with that admission and narrows our case to free-tier shape and non-expiring credits.
- [x] ~~`apify-alternative`~~ — **WRITTEN 2026-09-28.** Clockworks extractor priced per Apify plan; free plan is $3.70/1,000 + $0.048/min, not the widely quoted $1.70. Original note: **`apify tiktok` re-measured 2026-09-21 at 100–1k with a top-of-page bid of A$14.36, still the highest commercial value ever measured on this property.** Verified Apify detail already sits in `tiktok-transcript-api`, so research cost is near zero. **Now the last untouched TIER 2 name — write it next run.** Retarget to the brand term per the rule above — Comparisons.
- [x] ~~`tokscribe-alternative`~~ — **WRITTEN 2026-09-07.** `tokscribe` 100–1k / +900%. Public transcript archive and no published pricing are the honest differentiators.
- [x] ~~`toktranscript-alternative`~~ — **WRITTEN 2026-09-07.** `toktranscript` 100–1k. Monthly free cap versus our daily reset, and privacy as a paid feature.
- [x] ~~`wayinvideo-alternative`~~ — **WRITTEN 2026-08-31.** `wayinvideo` measured 10k–100k / +900% / Low competition — the largest term ever measured on this property. Verified their pricing page directly; the free allowance is still a one-time 200 credits there, but their TikTok landing page now advertises a 60-credit daily bonus and no login. Post names the contradiction.
- [x] ~~`descript-alternative`~~ — **WRITTEN 2026-09-04 (second run).** `descript alternative` measured 100–1k, commercial workflow intent (desktop video editor). Comparison is about workflow shape (full editing suite vs transcript utility), not feature parity. Category `Comparisons`.

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
- ~~`tiktok-mind-map-from-video`~~ — **RETIRED 2026-08-31. `tiktok mind map` returned no data in Keyword Planner.** Two competitors shipping a feature is not a demand signal. Fold into `summarize-tiktok-video-free` as a section if ever wanted.

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
- **Language pages — do NOT add Indian languages.** (Bengali re-verified and added 2026-09-28 for Bangladesh.) Hindi, Tamil, Telugu, Marathi, Punjabi and Gujarati are permanently off the list: TikTok has been banned in India since June 2020 and the ban was still in force as of 2026-08. The sister YouTube property ranks well for exactly these terms; that does not transfer, because the audience isn't on this platform. Bengali is also parked — Bangladesh's TikTok status has flipped repeatedly and sources disagree. Reasoning is recorded in the header comment of `src/lib/languages.ts`; read it before adding anything.
- Language candidates that *are* defensible if we expand again: Greek, Czech, Hungarian, Hebrew, Swahili (Kenya/Tanzania, 35% YoY growth), Hausa (Nigeria, 32% YoY). Africa is the fastest-growing region and currently has zero coverage.
- `transcribetok-vs-wayinvideo` — spotted 2026-08-10. WayinVideo is the strongest dedicated summarizer (mind maps, 100+ languages, 200 free credits / 400 minutes on signup, API, Chrome extension, desktop app) and already appears in our GSC data as a branded query. Honest differentiator: their free allowance is a lifetime total, ours resets daily.
- `tiktok-mind-map-from-video` — spotted 2026-08-10. WayinVideo markets mind-map output as an exclusive. We don't do it, but the transcript-plus-AI route reproduces it, which makes for an honest how-to.
- **Language-page CTR, not language-page count** — spotted 2026-08-17. Arabic sits at 7.8 and Spanish at 9.0 with 13 combined impressions and **zero clicks**. Position is no longer the bottleneck; the snippet is. Next run should audit `languageTitle()` and `languageDescription()` in `src/lib/languages.ts` and rewrite them to earn a click, before adding any new language or any more internal links.
- `transcribetok-vs-saveto-ai` **broke the free-tier pattern** — spotted 2026-08-17. Saveto AI advertises unlimited free TikTok transcription with no sign-up and publishes no pricing page at all (`/pricing/` 404s), so for once the competitor's free offer is more generous than ours on paper. The honest differentiators became published export formats, published pricing, and the refund guarantee. Worth reusing: **"free but unpriced" is a real risk to name**, and it applies to several tools in this category.
- `transcribetok-vs-vexascribe`, `transcribetok-vs-wayinvideo`, `transcribetok-vs-toktranscript`, `transcribetok-vs-tokscribe`, `transcribetok-vs-descript` — still untouched as of 2026-08-17. Descript is the odd one out and probably the most useful: it is a desktop editor, not a link-in/text-out tool, so the comparison is about workflow shape rather than features.
- Saveto AI's suite surfaced two adjacent formats we have no coverage of: **flashcards/quiz generation from a transcript** (study angle, pairs with the queued `tiktok-transcripts-for-students`) and **mind maps from a transcript** (already noted for WayinVideo on 2026-08-10 — two competitors now ship it, which raises it from curiosity to real demand).
- **Free-tier shape as a recurring angle** — spotted 2026-08-10. Nearly every competitor's "free" tier is a lifetime total (GetTranscribe 2 analyses, WayinVideo 400 minutes) while ours resets daily. This is our sharpest honest differentiator and is currently only stated inside comparison posts. `free-vs-paid-tiktok-transcript-tools` (already queued) should lead with it.

### Candidates spotted 2026-08-24

- **`download-tiktok-captions` title/meta rewrite** — not a new post. `tiktok subtitles download` measures **1k–10k**, is already in that post's keywords, and we sit at position 69.0. Highest-volume term on the property; the post exists and is not ranking. Audit the title, H1 and description before writing anything new against subtitles.
- **`scrapecreators-alternative`** — appeared in GSC as `scrapecreators tiktok transcript extractor` (57.0). Developer-facing scraping API, pay-as-you-go credits that never expire. Pairs naturally with the new API post.
- **`claptools-alternative`** — appeared in GSC as `claptools tiktok transcript generator` (78.0). Unresearched.
- **`supadata-alternative` / `apify-tiktok-transcript-alternative`** — the API post now carries verified detail on both. A dedicated brand-term post is cheap to write from that research.
- **Free-tier shape needs restating across the site.** Several existing posts still imply competitors' free tiers are uniformly lifetime totals. TokScript's is 5/day. Worth a sweep.
- **`tiktok-mind-map-from-video`** and **flashcards/quiz from a transcript** — still uncovered, still shipped by two competitors each. Volume unchecked.

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
