---
title: "TikTok Transcript API: The 2026 Options, Priced"
description: "TikTok has no official transcript endpoint and TranscribeTok has no API. Here is what Supadata, Apify and GetTranscribe actually cost, and which one to pick."
date: "2026-08-24"
author: "TranscribeTok Team"
category: "Developer Guides"
readingTime: "8 min read"
keywords:
  - tiktok transcript api
  - tiktok api transcript
  - tiktok transcript api pricing
  - supadata tiktok api
  - apify tiktok transcript
howToName: "How to Get TikTok Transcripts Programmatically"
howToSteps:
  - name: "Confirm you actually need an API"
    text: "If you need fewer than about fifty transcripts a month, a web tool is cheaper and faster to set up than any API integration."
  - name: "Pick a provider by output shape"
    text: "Choose Supadata for plain timestamped JSON, Apify for transcripts bundled with engagement metadata, or GetTranscribe if you also want a browser interface."
  - name: "Get an API key from the provider"
    text: "All three issue a key on signup with a free allowance and no credit card required."
  - name: "Send the public TikTok URL to the transcript endpoint"
    text: "Every provider takes the full public video URL as input, so no TikTok developer account and no OAuth flow is involved."
  - name: "Handle the videos that return nothing"
    text: "Roughly a quarter to a third of TikTok videos have no usable captions, so branch to an AI transcription mode or skip the item rather than treating an empty result as an error."
faqItems:
  - question: "Does TikTok have an official transcript API?"
    answer: "No. TikTok's official developer API exposes video metadata, but it has no endpoint for subtitles, captions or transcripts. Every tool that returns TikTok transcripts programmatically works from the public video URL rather than from an official transcript endpoint, which is why none of them require a TikTok developer account."
  - question: "Does TranscribeTok have an API?"
    answer: "No. TranscribeTok is a web tool that transcribes one public TikTok video at a time — there is no API, no key to request and no programmatic endpoint. If you need transcripts inside your own code, use Supadata, Apify or GetTranscribe instead."
  - question: "What is the cheapest TikTok transcript API?"
    answer: "Apify's TikTok Transcript Extractor is the cheapest per video at roughly $1.70 per 1,000 videos when you only download TikTok's existing subtitles. Supadata is cheaper to reason about for steady volume at $17 a month for 3,000 transcripts. AI transcription for videos without captions costs extra on every provider."
  - question: "Can I get a TikTok transcript API for free?"
    answer: "Yes, within limits. Supadata gives 100 credits a month, Apify gives $5 of usage a month, and both reset monthly with no credit card. GetTranscribe's free tier is 2 video analyses in total rather than per month. Free allowances are fine for building and testing, not for production volume."
  - question: "Why do some TikTok videos return an empty transcript?"
    answer: "Because TikTok never generated captions for them. Auto-caption coverage averages roughly 60 to 75 percent and is lower for non-English audio, for videos posted before late 2023, and for slideshows or music-only clips with no speech. Providers offer an AI speech-to-text fallback that transcribes the audio directly, but it costs more per video."
---

You need TikTok transcripts inside your own code, not inside a browser tab — a research pipeline, a content tool, an AI agent that needs the spoken text of a hundred videos.

Here is the honest answer, including the part where our own tool is not the one you want.

## Does TikTok have an official transcript API?

**No. TikTok's official developer API has no transcript or subtitle endpoint.** It exposes video metadata, user data and Display API content, but nothing that returns the spoken words of a video.

This is the fact that shapes the whole category. Every provider below takes a public TikTok URL and either pulls the caption track TikTok's own apps use or runs speech-to-text on the audio. None require a TikTok developer account, app review or OAuth — a genuine convenience, and also why this is a third-party market rather than an official one.

## TranscribeTok does not have an API

We should say this plainly, near the top, because you may have arrived here from our site.

**TranscribeTok has no API.** It is a web tool that transcribes one public TikTok video at a time. No key, no endpoint, no SDK, no webhook, no batch mode. If your requirement is programmatic access, we are not the tool.

What TranscribeTok is good at is the other half of this problem: pasting a link and reading the text immediately, without an account. If that is your actual use case, [the transcript generator guide](/tiktok-transcript-generator) covers it.

## The three real options, compared

Prices verified on each provider's own pricing page, August 2026.

| | Supadata | Apify (TikTok Transcript Extractor) | GetTranscribe |
|---|---|---|---|
| Free allowance | 100 credits/month, resets | $5 usage/month, resets | 2 analyses total, does not reset |
| Credit card to start | No | No | No |
| Entry paid price | $5 / 300 credits | Pay-per-event, no minimum | $9.99/month |
| Steady-volume price | $17 / 3,000 credits/mo | from $1.70 per 1,000 videos | from $0.06 per minute |
| High volume | $47 / 30,000, $297 / 300,000 | Same per-video rate | Pay-as-you-go credits |
| Credits roll over | No | N/A | Yes, do not expire |
| Output | Timestamped JSON, or plain text | .vtt + .txt files, plus JSON/CSV/Excel | Transcript, frames, hooks, topics |
| Engagement metadata | No | Yes — views, likes, shares, author | Yes |
| AI fallback when no captions | Yes, 2 credits per minute | Yes, extra per-minute fee | Yes |
| SDKs | Python, JavaScript/TypeScript | REST + platform clients | REST |
| No-code | Zapier, Make, n8n, ActivePieces, MCP | Zapier, Make, n8n, Slack, Drive, MCP | Zapier, Make, n8n, MCP |
| Rate limit | 1/sec free, 10/sec paid, 50–100/sec high tiers | Plan-dependent | Fair-use |
| Batch endpoint for TikTok | No — batch endpoints are YouTube-only | Yes, it is list-based by design | Bulk import |

### Supadata — pick this if the transcript is the product

Supadata is the most straightforward of the three. One GET request, one key, timestamped JSON back:

```bash
curl 'https://api.supadata.ai/v1/transcript?url=https://www.tiktok.com/@user/video/1234567890' \
  -H 'x-api-key: YOUR_API_KEY'
```

The response is a `content` array where each entry carries `text`, `offset` in milliseconds and `duration`. Add `text=true` and you get a single string instead, which is what you want if the next step is an LLM prompt rather than a subtitle file.

Pricing is a monthly credit pool: 100 free, $5 for 300, $17 for 3,000, $47 for 30,000, and on up to $897 for a million. One transcript is one credit. If TikTok has no captions and you ask Supadata to generate them, it is two credits per minute of audio instead. **Credits do not roll over**, so size the plan to your steady state rather than your peak.

Two limitations worth knowing before you commit. The advertised batch transcript endpoints are YouTube-only, so TikTok work is one request per video with your own concurrency on top. And the free tier is rate-limited to one request per second, which is fine for testing and slow for a backfill.

### Apify — pick this if you need transcripts *and* engagement data

Apify is a marketplace, and the relevant listing is Clockworks' TikTok Transcript Extractor. It takes an array of video URLs and returns, per video, a `.vtt` subtitle file and/or a `.txt` transcript, plus the thing the other two do not give you: **views, likes, comments, shares, author follower count and verification status, hashtags and publication date, in the same record.**

```json
{
  "postURLs": ["https://www.tiktok.com/@user/video/1234567890"],
  "downloadSubtitlesOptions": "DOWNLOAD_AND_TRANSCRIBE_VIDEOS_WITHOUT_SUBTITLES"
}
```

That mode is the one to use. It takes TikTok's existing captions where they exist and runs AI speech-to-text only on the videos that lack them, so you pay the transcription surcharge on the minority rather than on everything.

Pricing is pay-per-event from roughly $1.70 per 1,000 videos for the scrape, plus a per-started-minute fee for AI transcription. Apify's own worked example: 100 videos with about 70% caption coverage comes to roughly $1.79 all in. Every account includes $5 of free usage that resets monthly.

If you are doing trend analysis — which hooks correlate with which view counts — this is the only one of the three that answers the question without a second data source.

### GetTranscribe — pick this if you want a UI as well

GetTranscribe is a product first and an API second. API access ships with the Pro plan at $9.99 a month, with pay-as-you-go credits from $0.06 per minute for the processing itself. Its credits, unusually, do not expire while the subscription is active.

The reason to choose it: the same account gives you a browser interface, a Chrome extension, an iOS app and a searchable library, so a non-technical colleague can use the thing your pipeline is built on. We cover the product side in [TranscribeTok vs GetTranscribe](/transcribetok-vs-gettranscribe). Its free tier is the weakest of the three: **2 video analyses in total, not per month.**

<div class="cta-box">
<strong>Only need a few transcripts?</strong> Paste any public TikTok link and read the full text in seconds. Two free every day, no signup, no card, no integration work. <a href="https://transcribetok.com">→ Get a TikTok transcript at TranscribeTok.com</a>
</div>

## The cost nobody prices in: caption coverage

**Between a quarter and 40% of TikTok videos have no usable captions**, and that is the number that decides your real bill.

Apify puts average auto-caption coverage across a broad sample at 60–75%. Coverage is meaningfully worse in four cases:

- **Non-English audio.** TikTok's auto-captions are least reliable outside English, which matters because TikTok's biggest markets are not English-speaking.
- **Videos posted before late 2023**, when TikTok rolled auto-captions out globally.
- **The first 24–48 hours** after upload, while TikTok processes the video. If it has no captions after two days, it usually never will.
- **Slideshows, dance clips and music-led videos**, which have no speech to caption in the first place.

If your input list is 1,000 videos, budget for roughly 300 needing AI transcription at the per-minute rate rather than the per-video rate. That is usually the larger half of the invoice.

A related trap in the output: TikTok's captions are a subtitle track, so what comes back is segmented by timing, not by sentence. Feeding an LLM, you want the flattened text; building subtitles, you want the cues intact. See [TikTok transcripts with timestamps](/tiktok-transcript-with-timestamps) and [SRT to VTT conversion](/srt-to-vtt-converter).

## The verdict

**Use Supadata if transcripts are the product.** Cleanest API, most predictable pricing, best SDKs, and the JSON shape is the one you actually want for AI work.

**Use Apify if you need transcripts joined to engagement data.** Nothing else returns view counts and transcripts in one record, and for trend or creative-intelligence work that join is the whole job.

**Use GetTranscribe if humans and code both need access.** The API is the weakest of the three on its own, but it is the only one that comes with a usable product attached.

**Use none of them if you need fewer than ~50 transcripts a month.** The integration will cost you more hours than the transcripts are worth. Paste the link into a web tool, including ours, and move on.

## Language coverage is the thing to test first

Test whatever you pick on your actual language mix first, because English accuracy tells you almost nothing about the rest. Start at the [TikTok transcript by language hub](/tiktok-transcript-by-language), or check [Arabic](/arabic-tiktok-transcript), [Indonesian](/indonesian-tiktok-transcript) and [Spanish](/spanish-tiktok-transcript) — three of TikTok's largest language communities, three very different accuracy profiles.

## Related guides

- [TikTok transcript generator: the complete guide](/tiktok-transcript-generator) — the pillar, including where accuracy breaks down
- [Free vs paid TikTok transcript tools](/free-vs-paid-tiktok-transcript-tools) — every free tier's real limit, stated plainly
- [Download a TikTok transcript](/download-tiktok-transcript) — TXT, DOCX or SRT, and which to pick
- [TranscribeTok vs GetTranscribe](/transcribetok-vs-gettranscribe) — the product-side comparison of the one API vendor that is also a tool
- [Using a TikTok transcript with ChatGPT](/tiktok-transcript-for-chatgpt) — the no-code version of an AI pipeline

## Frequently asked questions

**Does TikTok have an official transcript API?**
No. TikTok's official developer API exposes video metadata, but it has no endpoint for subtitles, captions or transcripts. Every tool that returns TikTok transcripts programmatically works from the public video URL rather than from an official transcript endpoint, which is why none of them require a TikTok developer account.

**Does TranscribeTok have an API?**
No. TranscribeTok is a web tool that transcribes one public TikTok video at a time — there is no API, no key to request and no programmatic endpoint. If you need transcripts inside your own code, use Supadata, Apify or GetTranscribe instead.

**What is the cheapest TikTok transcript API?**
Apify's TikTok Transcript Extractor is the cheapest per video at roughly $1.70 per 1,000 videos when you only download TikTok's existing subtitles. Supadata is cheaper to reason about for steady volume at $17 a month for 3,000 transcripts. AI transcription for videos without captions costs extra on every provider.

**Can I get a TikTok transcript API for free?**
Yes, within limits. Supadata gives 100 credits a month, Apify gives $5 of usage a month, and both reset monthly with no credit card. GetTranscribe's free tier is 2 video analyses in total rather than per month. Free allowances are fine for building and testing, not for production volume.

**Why do some TikTok videos return an empty transcript?**
Because TikTok never generated captions for them. Auto-caption coverage averages roughly 60 to 75 percent and is lower for non-English audio, for videos posted before late 2023, and for slideshows or music-only clips with no speech. Providers offer an AI speech-to-text fallback that transcribes the audio directly, but it costs more per video.

---

**Not building anything?** If you just need to read what a TikTok video says, skip the API entirely. [TranscribeTok](https://transcribetok.com) turns any public TikTok link into text in seconds — two free every day, no signup, no card.
