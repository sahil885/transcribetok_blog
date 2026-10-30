---
title: "TikTok Content Analysis for Research: Transcribing a Sample"
description: "How researchers transcribe a TikTok sample for content analysis: Research API vs transcript tools, what each costs, coding the text, and what transcripts miss."
date: "2026-10-19"
updated: "2026-10-30"
author: "TranscribeTok Team"
category: "Use Cases"
readingTime: "8 min read"
keywords:
  - tiktok content analysis
  - tiktok research
  - tiktok research api
  - transcribe tiktok videos for research
  - tiktok qualitative analysis
howToName: "How to Transcribe a TikTok Sample for Content Analysis"
howToSteps:
  - name: "Define and log the sample"
    text: "Record each video's URL, account, posting date and the date you collected it in a spreadsheet before transcribing anything."
  - name: "Transcribe each public video"
    text: "Paste each link into transcribetok.com one at a time and download the transcript as TXT, named with the video ID."
  - name: "Add the non-audio fields by hand"
    text: "Note on-screen text, whether the video has speech at all, and any visual content your codebook needs, because a transcript only captures audio."
  - name: "Code the transcripts"
    text: "Load the TXT files into NVivo, ATLAS.ti, MAXQDA or a spreadsheet and apply your codebook, double-coding a subset for inter-rater reliability."
  - name: "Use AI only as a second reader"
    text: "If you use ChatGPT, Claude or NotebookLM, ask them to flag passages against your codes and verify every flag against the source transcript."
faqItems:
  - question: "How do researchers get transcripts of TikTok videos?"
    answer: "Researchers get TikTok transcripts in two ways: the TikTok Research API, whose voice_to_text field returns captions TikTok has already generated for a video, or a third-party tool that transcribes the audio of each public video. The Research API is limited to approved non-profit academic researchers; transcript tools work for anyone but process public videos only."
  - question: "Does the TikTok Research API include transcripts?"
    answer: "Partly. The TikTok Research API codebook lists a voice_to_text field defined as voice-to-text and subtitles for videos that have those features on, showing text already generated. Videos without auto-captions or subtitles return no text in that field, so the API is not a full transcription service."
  - question: "How much does it cost to transcribe 500 TikTok videos for a study?"
    answer: "On TranscribeTok, 500 TikTok transcripts cost $16 as a one-time credit pack, about 3.2 cents per video, with credits that never expire and a saved transcript library included. Videos are processed one link at a time, so a 500-video sample is 500 pastes. Bulk tools such as Apify cost less per video at thousands of videos."
  - question: "Can a TikTok transcript be used for qualitative content analysis?"
    answer: "Yes, a TikTok transcript is a valid text for qualitative or quantitative content analysis of spoken content. It does not capture on-screen text, visuals, music or performance, so studies of those features need a separate visual coding pass alongside the transcript."
  - question: "Can I transcribe private TikTok videos for research?"
    answer: "No. Transcript tools, including TranscribeTok, can only reach public TikTok videos. Private, friends-only and deleted videos are inaccessible, which also means a video deleted after you sampled it can no longer be transcribed, so transcribe and archive early."
---

TikTok content analysis runs on text. Whether you are coding health misinformation, political messaging or how creators talk about money, the spoken words have to become something you can read, code and quote, and TikTok itself gives you no transcript, copy button or export.

There are two routes to that text: TikTok's own Research API, and transcribing each video's audio with a third-party tool. This guide covers both honestly, prices the second, and lays out a workflow that holds up in a methods section.

## The two ways to get TikTok transcripts for research

**Approved academic researchers can use the TikTok Research API; everyone else transcribes the audio of each public video.** The two routes return different things, and the difference matters for your sample.

**The TikTok Research API** is for non-profit academic researchers and, separately, vetted researchers under the EU's Digital Services Act. It returns video metadata (view, like, share and comment counts, hashtags, region, duration) plus a `voice_to_text` field. TikTok's codebook defines that field as voice-to-text and subtitles "for videos that have voice to text features on", showing text already generated. In other words, it returns captions that exist. A video with no auto-captions or subtitles returns no transcript.

Access is slow and not guaranteed. The Kempelen Institute, a European non-profit research institute, documented a 21-month path from first application in December 2023 to working access in September 2025, ending with access to TikTok's Virtual Compute Environment rather than the API it applied for. Graduate students, journalists, market researchers and anyone outside an eligible institution cannot apply at all.

**A transcript tool** takes a public TikTok link and transcribes the audio track. [TranscribeTok](https://transcribetok.com) does this whether or not the creator turned captions on, so coverage does not depend on TikTok having captioned the video. It returns no engagement metadata, so those numbers have to be collected separately.

| | TikTok Research API | Audio transcript tool (TranscribeTok) |
|---|---|---|
| Who can use it | Approved non-profit academic researchers | Anyone |
| Approval wait | Weeks to many months; can be refused | None |
| Transcript source | Existing captions (`voice_to_text`) | Speech-to-text on the audio |
| Videos with no captions | No transcript returned | Transcribed if there is speech |
| Engagement metadata | Yes | No |
| Volume | Programmatic queries | One link at a time |
| Cost | Free to approved researchers | 2 a day free; $9 / 100, $16 / 500, $34 / 1,500, $59 / 4,000 one-time |

The verdict: **if you already have Research API access and your sample is mostly captioned, use it.** If you do not have access, are not eligible, or need transcripts for uncaptioned videos, transcribe the audio. Many studies end up doing both: metadata from the API or a capture tool, transcripts from the audio.

## A transcription workflow that survives peer review

Log the sample first, transcribe second. Reviewers ask how a sample was built and whether it can be reconstructed, and the transcript files are the easy part.

1. **Build the sampling frame in a spreadsheet.** One row per video: URL, video ID, account, posting date, the search term or hashtag that surfaced it, and the date you collected it. TikTok's feed is personalised, so record how you searched as well as what you found.
2. **Transcribe each video.** Paste each public link into [TranscribeTok](https://transcribetok.com). It handles one link at a time, roughly ten seconds per video, and detects the spoken language automatically. There is no batch upload; a 200-video sample is 200 pastes, which is an afternoon.
3. **Download as TXT and name the file with the video ID.** Plain text imports cleanly into NVivo, ATLAS.ti and MAXQDA. Turn timestamps on if your codebook cares about where in the video a claim appears; [TikTok transcripts with timestamps](/tiktok-transcript-with-timestamps) covers when they help.
4. **Record what the audio cannot tell you.** Add columns for on-screen text, whether the video has speech at all, and any visual codes. Many TikToks carry their message in text overlays over music.
5. **Code, then double-code.** Apply your codebook to the transcripts and have a second coder code a random subset so you can report inter-rater reliability.

Transcribe early. Videos get deleted or made private, and a deleted video cannot be transcribed by any tool. Credit packs include a saved transcript library, so the text survives even if the video does not.

<div class="cta-box">
<strong>Pilot your codebook on two videos today.</strong> Read up to two TikTok transcripts a day free, no signup. Create a free account to copy or download as TXT, DOC or PDF. <a href="https://transcribetok.com">→ Transcribe a TikTok at TranscribeTok.com</a>
</div>

## What a TikTok study costs to transcribe

A 500-video sample costs $16 on TranscribeTok; a 30-video pilot costs nothing if you spread it over fifteen days. Packs are one-time, credits never expire, and no credit is charged when a video has no spoken audio, which matters in samples full of music-only clips.

| Sample size | TranscribeTok cost | Time at ~10 s per paste | Better-shaped alternative |
|---|---|---|---|
| 2–30 videos (pilot) | Free at 2 a day, or $9 | Under 10 minutes | None needed |
| 100 videos | $9 | About 20 minutes | None needed |
| 500 videos | $16 | 1.5–2 hours | Apify if you can script it |
| 1,500 videos | $34 | 4–5 hours | Apify or a bulk tool |
| 4,000+ videos | $59 per 4,000 | Several days | **Apify, GetTranscribe or the Research API** |

**TranscribeTok is the right shape for samples up to a few hundred videos** handled by one researcher. **For thousands of videos, use a bulk tool.** The [Apify TikTok transcript extractor](/apify-alternative) takes lists of URLs and returns a spreadsheet, priced per thousand videos; [the TikTok transcript API options](/tiktok-transcript-api) compares Apify, Supadata and GetTranscribe for programmatic jobs. Pasting 4,000 links by hand is a poor use of a research assistant, and we would rather say so than sell you the pack.

For collecting metadata without the API, researchers commonly use Zeeschuimer, a Firefox extension from the Digital Methods Initiative that captures TikTok post data as you browse and works with the 4CAT analysis platform. It captures posts and metadata, not transcripts, so it pairs with a transcription step rather than replacing one.

## What a transcript misses

A transcript is a record of speech, and nothing else. That is fine for studying what was said, and a validity problem if your research question is about what was shown.

| Feature of the video | In the transcript? |
|---|---|
| Spoken words, in order | Yes |
| Language of the speech | Yes, detected automatically |
| On-screen text overlays | **No** |
| Visuals, gestures, editing | **No** |
| Music and trending sounds | **No** |
| Engagement and reach | **No** |
| Comments | **No** |

Accuracy also varies. Clear speech transcribes in the mid-to-high 90s, but loud music, sped-up delivery, slang and code-switching all reduce it. Spot-check a random 10% of transcripts against the video and report the check. Quote from the video, not from an unchecked transcript.

## Multilingual samples

TranscribeTok returns each transcript in the language that was spoken, and it does not translate. For comparative studies, translate as a separate, documented step; [translating a TikTok transcript](/translate-tiktok-transcript) covers the two-step method.

The [TikTok transcript by language hub](/tiktok-transcript-by-language) has notes for 27 languages. For regional studies, the [Malay](/malay-tiktok-transcript), [Urdu](/urdu-tiktok-transcript), [Ukrainian](/ukrainian-tiktok-transcript) and [Arabic](/arabic-tiktok-transcript) guides cover the accuracy issues specific to each.

## Using AI tools on a transcript corpus

Use ChatGPT, Claude or NotebookLM as a second reader, not as the coder. They are good at flagging passages that might match a code and bad at applying a codebook consistently across hundreds of documents.

NotebookLM is the most useful of the three for this job because its answers cite the source passage, so every claim can be checked. [Using TikTok transcripts in NotebookLM](/tiktok-transcript-for-notebooklm) covers its source limits, and [the Claude workflow](/tiktok-transcript-with-claude) covers long-context analysis of a whole sample at once. Disclose AI assistance in your methods section and verify every flagged passage against the transcript.

## Related guides

- [How to get a TikTok transcript](/how-to-get-a-tiktok-transcript) — the complete guide: the fast method, download formats and accuracy limits
- [TikTok transcript API options, priced](/tiktok-transcript-api) — the programmatic route for samples in the thousands
- [Apify TikTok transcript alternative](/apify-alternative) — the bulk extractor, priced per thousand videos
- [TikTok hooks swipe file](/tiktok-hooks-swipe-file) — the same transcript workflow applied to marketing research
- [Free vs paid TikTok transcript tools](/free-vs-paid-tiktok-transcript-tools) — which free allowances reset and which run out

## Frequently asked questions

**How do researchers get transcripts of TikTok videos?**
Through the TikTok Research API, whose voice_to_text field returns captions TikTok has already generated, or through a third-party tool that transcribes the audio of each public video. The API is limited to approved non-profit academic researchers; transcript tools work for anyone but only on public videos.

**Does the TikTok Research API include transcripts?**
Partly. Its voice_to_text field returns voice-to-text and subtitles only for videos that have those features on. Videos without captions return no text, so the API is not a full transcription service.

**How much does it cost to transcribe 500 TikTok videos for a study?**
On TranscribeTok, $16 as a one-time pack, about 3.2 cents per video, with credits that never expire and a transcript library included. Videos are processed one link at a time. Bulk tools such as Apify are cheaper per video at thousands of videos.

**Can a TikTok transcript be used for qualitative content analysis?**
Yes, for spoken content. A transcript does not capture on-screen text, visuals, music or performance, so studies of those features need a separate visual coding pass.

**Can I transcribe private TikTok videos for research?**
No. Transcript tools only reach public videos. Private, friends-only and deleted videos are inaccessible, so transcribe and archive your sample early.

---

Content analysis of TikTok does not need a data partnership to start. A sampling spreadsheet, a codebook and a transcript per video will carry a pilot study, and the pilot will tell you whether you need the bulk tools at all.

**[→ Transcribe your first sample video free at TranscribeTok.com](https://transcribetok.com)**
