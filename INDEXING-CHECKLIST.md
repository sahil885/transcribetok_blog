# Search Console indexing checklist

Two separate properties, two separate daily quotas — work through both in parallel.

**How to submit:** Search Console → pick the property → paste URL into the **"Inspect any URL"** bar at the top → wait for the check → **Request Indexing**.

**Quota:** roughly 10–12 manual requests per property per day. Google throttles beyond that, so this list is split across days by priority.

---

## Property A — transcribetok.com (the SaaS)

This is where conversions happen. Only two pages are worth indexing.

- [ ] `https://transcribetok.com/`
- [ ] `https://transcribetok.com/pricing`

**Do NOT submit these** — they're thin, gated, or duplicate, and submitting them wastes quota and can dilute crawl focus:
`/login`, `/register`, `/forgot-password`, `/reset-password`

---

## Property B — blog.transcribetok.com

The sitemap (26 URLs) is already submitted and returned **Success**, so Google will find all of these on its own. Manual submission just jumps the queue on the pages that matter most.

### Day 1 — the four pillars + the money page

These target the head terms and are the pages everything else links up to.

- [ ] `https://blog.transcribetok.com/tiktok-transcript-generator`
- [ ] `https://blog.transcribetok.com/tiktok-to-text`
- [ ] `https://blog.transcribetok.com/transcribe-tiktok-video`
- [ ] `https://blog.transcribetok.com/download-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/best-tiktok-transcript-tools-2026`
- [ ] `https://blog.transcribetok.com/` (homepage — helps Google find the rest)

### Day 2 — the remaining posts

- [ ] `https://blog.transcribetok.com/how-to-get-a-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/download-tiktok-captions`
- [ ] `https://blog.transcribetok.com/tiktok-transcript-on-mobile`
- [ ] `https://blog.transcribetok.com/tiktok-transcript-for-chatgpt`
- [ ] `https://blog.transcribetok.com/tiktok-transcript-for-content-creators`

### Day 3+ — language pages (optional)

Low priority. The sitemap will pick these up without help, and they're long-tail. Only submit them if you have spare quota. Highest-volume TikTok markets first:

- [ ] `https://blog.transcribetok.com/indonesian-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/portuguese-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/spanish-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/vietnamese-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/filipino-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/thai-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/arabic-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/japanese-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/korean-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/turkish-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/french-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/german-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/italian-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/russian-tiktok-transcript`
- [ ] `https://blog.transcribetok.com/polish-tiktok-transcript`

---

## What this does and doesn't do

**Does:** speeds up *discovery*. Without it, a brand-new subdomain can take weeks to get crawled.

**Doesn't:** cause ranking. Being indexed means you're eligible to rank, not that you will. Traffic comes from ranking, which takes 2–4 months on new content in a competitive niche.

Do not resubmit the same URL repeatedly — it doesn't help and burns quota. Resubmit only after meaningfully updating a page.

---

## The thing that matters more than any of this

**Link the blog from transcribetok.com.** A "Blog" or "Guides" link in the header or footer.

A new subdomain with zero inbound links is a dead end for crawlers regardless of how many URLs you submit manually. Your main domain already has crawl budget and authority; one internal link passes both to the blog and gets all 26 pages crawled naturally, on repeat, forever. Manual submission is a one-time nudge — the link is structural.

Second best: a couple of contextual links from inside the app (e.g. pricing page or empty state → `/tiktok-transcript-for-content-creators`).

---

## How to check progress

- **Search Console → Pages** — shows indexed vs not-indexed with reasons
- **Search Console → Sitemaps** — should stay at "Success, 26 discovered"
- **`site:blog.transcribetok.com` in Google** — rough count of what's actually indexed

Expect nothing for 1–2 weeks. First impressions around week 2–4.
