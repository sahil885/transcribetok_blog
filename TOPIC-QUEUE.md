# Topic queue

Working state for the weekly content task. It reads this file, takes the next unwritten topics, writes them, then marks them done and appends new candidates.

**Selection order each run:**
1. **Search Console data first** — if the GSC property has query data, find terms with impressions but poor position (11–30) that no existing post targets. Those are the highest-ROI posts available. Write against those before anything else.
2. **Competitor gaps second** — check what TokScript, GetTranscribe, Saveto AI, VexaScribe and WayinVideo rank for that we have no post covering.
3. **Roadmap queue third** — fall back to the list below when neither of the above surfaces anything better.

Never write a post that duplicates an existing one's primary keyword. Check `posts/` first.

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

---

## Queue — priority order

### AI tools cluster (highest conversion, easiest to write)

- [ ] `tiktok-transcript-with-claude` — "TikTok Transcript with Claude: Summarize Any Video" — AI Tools
- [ ] `tiktok-transcript-with-gemini` — "How to Use a TikTok Transcript with Gemini" — AI Tools
- [ ] `tiktok-transcript-with-perplexity` — "TikTok Transcripts in Perplexity: Research Workflow" — AI Tools
- [ ] `summarize-tiktok-video-free` — "How to Summarize a TikTok Video Free (3 Ways)" — AI Tools
- [ ] `tiktok-transcript-with-notebooklm` — "Turn TikTok Transcripts into NotebookLM Sources" — AI Tools

### Comparisons (low volume, very high intent)

- [ ] `transcribetok-vs-tokscript` — Comparisons — be scrupulously fair; they do batch, we don't
- [ ] `transcribetok-vs-gettranscribe` — Comparisons
- [ ] `transcribetok-vs-saveto-ai` — Comparisons
- [ ] `free-vs-paid-tiktok-transcript-tools` — Comparisons

### Workflows (currently empty cluster — fills a homepage gap)

- [ ] `tiktok-transcript-to-notion` — Productivity
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

- [ ] `tiktok-transcript-with-timestamps` — How-To
- [ ] `translate-tiktok-transcript` — How-To
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
