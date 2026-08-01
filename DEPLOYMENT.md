# Deploying blog.transcribetok.com

Everything below is in the order you should do it. Budget about 30 minutes, plus DNS propagation time.

---

## 1. Push to GitHub

From the repo folder:

```bash
git init
git add .
git commit -m "TranscribeTok blog: 10 pillar posts + 15 language pages"
git branch -M main
git remote add origin https://github.com/sahil885/transcribetok-blog.git
git push -u origin main
```

Create the empty `transcribetok-blog` repo on GitHub first (no README, no .gitignore — this repo has both).

---

## 2. Deploy on Vercel

1. Go to **vercel.com → Add New → Project**
2. Import `sahil885/transcribetok-blog`
3. Framework preset: **Next.js** (auto-detected). Leave build command and output directory as defaults.
4. Before clicking Deploy, open **Environment Variables** and skip `NEXT_PUBLIC_GA_ID` for now — you'll add it in step 5 once GA4 exists.
5. Deploy.

You'll get a `*.vercel.app` URL. Confirm the homepage, one post, and one language page all render before touching DNS.

---

## 3. Add the subdomain in Vercel

1. Project → **Settings → Domains**
2. Add `blog.transcribetok.com`
3. Vercel shows you the exact DNS record to create. **Copy that value exactly** — it may be the generic `cname.vercel-dns.com` or a project-specific value like `d1d4fc829fe7bc7c.vercel-dns-017.com`, and it may include a trailing period. Use what Vercel shows you, not what this document guesses.

Leave this tab open — you'll need the value in the next step.

---

## 4. Point the subdomain in IONOS

1. Log in to IONOS → **Domains & SSL** → click `transcribetok.com`
2. Open the **DNS** tab
3. **Add record**:

| Field | Value |
|---|---|
| Type | `CNAME` |
| Host name | `blog` |
| Points to | *(the value Vercel gave you in step 3)* |
| TTL | 1 hour (or lowest available while testing) |

**Notes specific to IONOS:**

- Enter only `blog` in the host field, not the full `blog.transcribetok.com`. IONOS appends the domain automatically.
- If IONOS rejects a trailing period in the "Points to" field, drop it — IONOS treats these as absolute already.
- If a `blog` record already exists (A, CNAME or otherwise), delete it first. You cannot have a CNAME alongside other records on the same host.
- Do **not** enable IONOS's own domain forwarding or redirect for `blog` — it conflicts with the CNAME.

DNS usually resolves in 10–30 minutes; IONOS can occasionally take a few hours. Vercel's Domains page will flip to a green "Valid Configuration" and issue the SSL certificate automatically once it sees the record.

To check propagation yourself:

```bash
nslookup blog.transcribetok.com
```

---

## 5. Google Analytics 4

1. In [Google Analytics](https://analytics.google.com), you can either add a **new data stream** to your existing property or create a **separate property** for the blog.
   **Recommendation: a separate property.** The YTTranscript blog is set up this way, and keeping blog traffic separate from app traffic makes the SEO reporting far easier to read. The cost is that you can't see a single blended funnel — worth it here.
2. Create the Web data stream with URL `https://blog.transcribetok.com`
3. Copy the **Measurement ID** (`G-XXXXXXXXXX`)
4. In Vercel → **Settings → Environment Variables**, add:
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX`
   - Environments: Production (and Preview if you want)
5. **Redeploy** — environment variables only apply to new builds. Deployments → ⋯ → Redeploy.

Analytics is skipped entirely when the variable is unset, so nothing breaks if you postpone this.

---

## 6. Google Search Console

1. Go to [Search Console](https://search.google.com/search-console) → **Add property**
2. Choose **URL prefix** and enter `https://blog.transcribetok.com/`
3. Verify. Easiest route: the **Google Analytics** verification method, which works immediately once step 5 is deployed. Otherwise use the DNS TXT method via IONOS.
4. Once verified, go to **Sitemaps** and submit:
   ```
   sitemap.xml
   ```
5. Use **URL Inspection → Request indexing** on your four pillar pages to speed up first crawl:
   - `/tiktok-transcript-generator`
   - `/tiktok-to-text`
   - `/transcribe-tiktok-video`
   - `/download-tiktok-transcript`

Expect nothing for 1–2 weeks. First impressions typically show up in Search Console around week 2–4, and meaningful ranking movement at 2–4 months. This is the same curve the YTTranscript blog went through.

---

## 7. Link the blog from the main site — don't skip this

This is the single highest-impact step after launch, and it's easy to forget.

A brand-new subdomain with no inbound links gets crawled slowly. `transcribetok.com` already has traffic and crawl budget. Add a **Blog** or **Guides** link to the main site's header or footer pointing at `https://blog.transcribetok.com`.

Ideally also add a couple of contextual links from the app itself — for example, linking the pricing or empty-state copy to `/tiktok-transcript-for-content-creators`.

---

## 8. Post-launch checklist

- [ ] `https://blog.transcribetok.com` loads over HTTPS
- [ ] `https://blog.transcribetok.com/sitemap.xml` lists 26 URLs
- [ ] `https://blog.transcribetok.com/robots.txt` points at the sitemap
- [ ] `https://blog.transcribetok.com/llms.txt` loads
- [ ] A post page passes the [Rich Results Test](https://search.google.com/test/rich-results) with Article, FAQ and HowTo detected
- [ ] Share a post link in Slack/WhatsApp and confirm the OG image appears
- [ ] GA4 Realtime shows your own visit
- [ ] Sitemap submitted in Search Console
- [ ] Blog linked from transcribetok.com

---

## What to publish next

The 10 launch posts cover the head terms and all five content clusters. The obvious expansions, in priority order:

1. **AI tools cluster** (currently 1 post) — Claude, Gemini, Perplexity, NotebookLM. These convert well and are quick to write from the ChatGPT post's structure.
2. **Comparison posts** (currently 1) — `transcribetok-vs-tokscript`, `vs-gettranscribe`, `vs-saveto-ai`. Competitor-name searches are low volume but very high intent.
3. **Use cases** (currently 1) — marketers, agencies, researchers, social media managers, dropshippers.
4. **Workflows cluster** (currently 0) — TikTok transcript to Notion, to blog post, to LinkedIn, to newsletter, to SRT subtitles.
5. **More language pages** — the system is in `src/lib/languages.ts`; each new entry needs a genuinely unique `intro` and `note` or it becomes thin content.

The YTTranscript blog reached ~85 posts. Getting to 30–40 here within a few months is a reasonable target, prioritising clusters 1 and 2 first since they convert best.
