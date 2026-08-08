# Topic queue

Working state for the weekly content task. It reads this file, takes the next unwritten topics, writes them, then marks them done and appends new candidates.

**Selection order each run:**
1. **Search Console data first** — if the GSC property has query data, find terms with impressions but poor position (11–30) that no existing post targets. Those are the highest-ROI posts available. Write against those before anything else.
2. **Competitor gaps second** — check what TokScript, GetTranscribe, Saveto AI, VexaScribe and WayinVideo rank for that we have no post covering.
3. **Roadmap queue third** — fall back to the list below when neither of the above surfaces anything better.

Never write a post that duplicates an existing one's primary keyword. Check `posts/` first.

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

---

## Queue — priority order

### AI tools cluster (highest conversion, easiest to write)

- [ ] `tiktok-transcript-with-claude` — "TikTok Transcript with Claude: Summarize Any Video" — AI Tools
- [ ] `tiktok-transcript-with-gemini` — "How to Use a TikTok Transcript with Gemini" — AI Tools
- [ ] `tiktok-transcript-with-perplexity` — "TikTok Transcripts in Perplexity: Research Workflow" — AI Tools
- [ ] `summarize-tiktok-video-free` — "How to Summarize a TikTok Video Free (3 Ways)" — AI Tools
- [ ] `tiktok-transcript-with-notebooklm` — "Turn TikTok Transcripts into NotebookLM Sources" — AI Tools

### Comparisons (low volume, very high intent)

- [ ] `transcribetok-vs-gettranscribe` — Comparisons
- [ ] `transcribetok-vs-saveto-ai` — Comparisons
- [ ] `free-vs-paid-tiktok-transcript-tools` — Comparisons

### Workflows (currently empty cluster — fills a homepage gap)

- [ ] `tiktok-transcript-to-blog-post` — Content Creation
- [ ] `tiktok-script-to-linkedin-post` — Content Creation
- [ ] `tiktok-transcript-to-srt-subtitles` — Content Creation
- [ ] `tiktok-transcript-to-newsletter` — Content Creation

### Use cases

- [ ] `tiktok-transcripts-for-marketers` — Use Cases
- [ ] `tiktok-transcripts-for-social-media-managers` — Use Cases
- [ ] `tiktok-transcripts-for-researchers` — Use Cases
- [ ] `tiktok-transcripts-for-agencies` — Use Cases
- [ ] `tiktok-transcripts-for-students` — Use Cases

### How-to long tail

- [ ] `tiktok-live-replay-transcript` — How-To
- [ ] `tiktok-video-no-transcript` — How-To — what to do when there's no speech
- [ ] `copy-text-from-tiktok-video` — How-To
- [ ] `tiktok-transcript-accuracy` — Guide

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

### Search Console notes — 2026-08-08 (first run with real GSC data)

- Property now has data: **157 impressions, 4 clicks, avg position 28.8** over the last 3 months (23 queries, all traffic starting 31 July).
- **Only one query sits in the actionable 11–30 band: `tiktok transcript arabic` at position 11.7.** It is already served by the programmatic language page `/arabic-tiktok-transcript`, so no post was written against it — that would cannibalise. **Action for next run: check whether it has moved. If it is still stuck at ~11, the fix is internal links into the language pages, not a new post.** Language pages currently receive almost no internal links (only `/spanish-tiktok-transcript`, once, from the translate post).
- A non-English cluster is forming: `tiktok transcript arabic` (11.7), `translate tik from indonesian` (59.5), `how to translate tiktok videos` (62.0). Worth watching — it may justify promoting language pages more aggressively.
- Every other query sits at position 59–92, i.e. too deep for a page-one nudge, and nearly all are head terms the pillars already target. There was no second GSC-driven opportunity this run.
