# Where YTTranscript's traffic actually comes from

Measured 2026-08-11. All figures are last 28 days unless stated.

---

## 1. The headline: it isn't LLM referrals

The working assumption was that most of the YTTranscript blog's traffic is LLMs and AI recommendations. GA4 has a dedicated **AI Assistant** channel group, and it says otherwise:

| Channel | Sessions | Share |
|---|---|---|
| Direct | 648 | 51.8% |
| Organic Search | 562 | 44.9% |
| Referral | 13 | 1.0% |
| Unassigned | 13 | 1.0% |
| **AI Assistant** | **12** | **0.96%** |
| Organic Video | 3 | 0.2% |
| **Total** | **1,251** | |

AI Assistant is **12 sessions out of 1,251**. Broken out by source, 7 of those are `claude.ai / ai-assistant`; ChatGPT is negligible.

**But the instinct behind the hypothesis is right — it's just one step upstream.**

## 2. The real story: Bing, not Google

Session source/medium for the same period:

| Source / medium | Sessions | Share |
|---|---|---|
| (direct) / (none) | 648 | 51.8% |
| **bing / organic** | **297** | **23.7%** |
| **duckduckgo / organic** | **158** | **12.6%** |
| yahoo / organic | 37 | 3.0% |
| **google / organic** | **22** | **1.8%** |
| in.search.yahoo.com / referral | 12 | 1.0% |
| (not set) | 8 | 0.6% |
| cn.bing.com / referral | 8 | 0.6% |
| claude.ai / ai-assistant | 7 | 0.6% |
| ecosia.org / organic | 6 | 0.5% |

Add up the Bing-index family — Bing, DuckDuckGo, Yahoo, Ecosia, and the regional Bing/Yahoo referrers — and it is **roughly 41% of all sessions**. Google organic is **1.8%**.

This matters more than the AI Assistant number, because **Bing's index is what ChatGPT's search retrieval runs on**. Ranking in Bing is the upstream precondition for being cited by ChatGPT. YTTranscript is winning the Bing channel today; the AI-citation traffic is the lagging indicator that follows from it.

So the strategy to copy is not "write things LLMs like to quote" in the abstract. It is **get indexed and ranked in Bing**, and the citation traffic follows.

## 3. Measurement caveats — read these before acting

Two numbers don't reconcile, and both cut against over-trusting this data:

- **GSC reports 180 Google clicks in 28 days. GA reports 22 google/organic sessions.** An 8x gap. Some of that is normal (consent banners, ad blockers, prefetch), but not all of it. Google traffic is almost certainly under-attributed in GA and partly sitting in Direct.
- **Direct is 648 sessions at 9 seconds average engagement.** Organic sessions average 36–48 seconds. A large direct bucket with near-zero engagement time is the classic signature of bot or crawler traffic, not humans typing the URL.

Net: the *shape* of the finding (Bing-family >> Google) is robust because it comes from tagged referrers. The absolute session counts are soft. Don't build a forecast on them.

## 4. What actually earns the clicks: language pages

YTTranscript's Google Search Console top queries by clicks:

| Query | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| youtube transcript tamil | 4 | 23 | 17.4% | 8.9 |
| youtube transcript bengali | 3 | 19 | 15.8% | 8.5 |
| yttranscript | 2 | 629 | 0.3% | 9.3 |
| youtube transcript | 2 | 389 | 0.5% | 33.5 |
| youtube transcript hindi | 2 | 140 | 1.4% | 8.6 |
| youtube transcript com hindi | 2 | 22 | 9.1% | 7.5 |
| yt transcript bangla | 2 | 10 | 20.0% | 7.1 |
| youtube transcript arabic | 1 | 34 | 2.9% | 11.2 |
| youtube transcript in urdu | 1 | 9 | — | — |

Nearly every clicking query is a **language query**, and they convert at 9–20% CTR because they sit at **position 7–9**. The head terms (`youtube transcript` at position 33.5, `yttranscript` at 9.3 with 629 impressions) produce almost nothing by comparison.

TranscribeTok already saw the same signal last week: `tiktok transcript arabic` moved 11.7 → 9.2 and is the single best-positioned query on the property. **The language pages are the proven engine on both properties, and neither blog is treating them as a priority.**

## 5. Structural comparison

| | blog.yttranscript.app | blog.transcribetok.com |
|---|---|---|
| Total URLs in sitemap | **113** | **32** |
| Blog posts | ~76 | 16 |
| `X vs Y` comparison posts | **20** | **2** |
| `transcript for [audience]` use-case posts | **17** | **1** |
| Language pages | **21** | 16 |
| GSC impressions (28d) | 17,400 | 256 |
| GSC clicks (28d) | 180 | 7 |
| GSC avg position | 21.4 | 28.6 |
| GA sessions (28d) | 1,251 | **26** |
| GA sessions from Bing (28d) | 297 | **1** |

## 6. The age confounder — be honest about this

YTTranscript's GSC data begins **8 May 2026**. It was flat until mid-June, and the real inflection is around **6 July**. Of its 250 all-time clicks, **180 came in the last 28 days** — the curve is compounding, and it took roughly two months to start.

blog.transcribetok.com's first data is **31 July 2026**. It is about two weeks old.

So a meaningful part of the gap is time, not strategy. TranscribeTok is roughly where YTTranscript was in early June. That is the correct baseline expectation, and it argues against panic-rewriting the content approach.

What is *not* explained by age is the Bing gap and the volume gap. Those are actionable now.

---

## What to actually do

Ranked by leverage per unit of effort.

### 1. Get into Bing. This is the highest-leverage item and it isn't content.

TranscribeTok's blog got **1 session from Bing in 28 days**. YTTranscript got 297. Bing is 41% of the channel that works, and it is the index ChatGPT retrieves from.

- Add `blog.transcribetok.com` to **Bing Webmaster Tools** and submit the sitemap. (Bing Webmaster Tools can import verified properties directly from Google Search Console, which makes this a five-minute job.)
- Turn on **IndexNow** — the repo has no IndexNow implementation today. Bing, DuckDuckGo, Yandex and Ecosia all consume it, and it pushes new URLs within hours instead of waiting for a crawl. For a Next.js site on Vercel this is a key file in `public/` plus a ping on deploy.
- Verify what is actually indexed with a `site:blog.transcribetok.com` query in Bing. I hit a CAPTCHA attempting this and did not bypass it, so this one needs doing by hand.

Nothing in the content strategy pays off until this is done, because right now the blog is effectively invisible in the channel that generates the traffic.

### 2. Treat language pages as a content cluster, not an afterthought

They are the proven click engine on both properties, and they are the cheapest wins available:

- Expand from 16 to ~21 languages, matching YTTranscript. The gaps worth adding based on YT's click data: **Tamil, Bengali, Hindi, Urdu, Chinese, Telugu**. Hindi/Tamil/Bengali/Urdu are producing YT's highest-CTR queries.
- Keep pushing internal links into them. Last week's run took `translate-tiktok-transcript` from one language link to six; that should become standard in every new post.
- Consider a hub page at `/tiktok-transcript-by-language` linking all of them. Twenty orphan-ish pages with no parent is a weak structure.

### 3. Scale the two clusters that are structurally missing

TranscribeTok has 2 comparison posts against YTTranscript's 20, and 1 use-case post against 17. These are also the two formats most likely to get quoted by a model answering "what's the best TikTok transcript tool" or "how do marketers use TikTok transcripts".

Comparison targets already identified: GetTranscribe (done), TokScript (done), Saveto AI, VexaScribe, WayinVideo, TokTranscript, TokScribe, Descript, plus method comparisons (TikTok auto-captions vs a tool, Whisper vs a tool).

Use-case targets: marketers, social media managers, researchers, agencies, students, accessibility, sales teams, language learning, SEO.

### 4. Raise cadence, but not at the cost of the guardrails

At 2 posts/week TranscribeTok reaches YTTranscript's current 76-post count in roughly seven months. 3–4 per run, or two runs a week, is a more realistic path. **Do not drop the build verification or the product-facts checks to get there** — see below.

---

## On replacing the TranscribeTok task with the YTTranscript one

The YTTranscript prompt has the better *topic-selection strategy*. It has a materially worse *safety envelope*. Copying it wholesale would be a downgrade:

| | YTTranscript task | TranscribeTok task |
|---|---|---|
| GitHub token | **Hardcoded in the prompt, in plaintext** | Read from gitignored `.secrets/`, redacted from output |
| Build verification before publish | None | `npm install` + `next build`, must pass |
| Internal link checking | None | Every link resolved before publish |
| Product-fact guardrails | None | Explicit non-negotiable fact table |
| Bidirectional interlinking | Not required | Mandatory |
| Word count | 900–1,200 | 1,200–1,800 |
| Carried-over standing checks | None | STEP 0 |

TranscribeTok has already had one incident where an invented bulk feature required a 20-file rewrite. The fact table and the build gate exist because of that. The right move is to **graft the YT prompt's topic strategy onto the existing TranscribeTok task**, not to swap them.

Also: **the token `ghp_jo7…` in the YTTranscript task is exposed and should be rotated**, then moved to a `.secrets/` file the same way TranscribeTok does it.
