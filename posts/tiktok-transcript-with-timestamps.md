---
title: "TikTok Transcript With Timestamps: How to Get One Free"
description: "Need a TikTok transcript with timestamps? Download it as TXT, DOC or PDF with timestamps included, free with no signup. Plus how to read SRT and VTT timecodes."
date: "2026-08-03"
author: "TranscribeTok Team"
category: "How-To"
readingTime: "7 min read"
keywords:
  - tiktok transcript with timestamps
  - timestamped tiktok transcript
  - download tiktok transcript with timestamps
  - tiktok video timestamps
  - tiktok transcript timecodes
howToName: "How to Get a TikTok Transcript With Timestamps"
howToSteps:
  - name: "Copy the TikTok video link"
    text: "Tap the Share arrow on the video and choose Copy link."
  - name: "Open TranscribeTok and paste the link"
    text: "Go to transcribetok.com and paste the link into the box — no account needed for two videos a day."
  - name: "Generate the transcript"
    text: "Click Get Transcript. The spoken audio is transcribed in a few seconds."
  - name: "Download it with timestamps"
    text: "Choose to include timestamps, then download the transcript as TXT, DOC or PDF, or copy it in one tap. Without timestamps you get the words only."
  - name: "Open the file"
    text: "Open the TXT in any text editor, the DOC in Word or Google Docs, or the PDF in any viewer to read the transcript alongside its timestamps."
faqItems:
  - question: "How do I get a TikTok transcript with timestamps?"
    answer: "Transcribe the video in TranscribeTok and download it with timestamps included, as TXT, DOC or PDF, or copy it in one tap. Without timestamps the transcript contains the words only. TranscribeTok does not make SRT or other subtitle files; if you need one, VexaScribe and WayinVideo both export SRT and VTT."
  - question: "Does TikTok show timestamps on its captions?"
    answer: "No. TikTok's auto-captions are timed internally so they appear in sync with the audio, but the timings are never exposed and the caption text cannot be copied or exported anywhere in the app or on the web."
  - question: "What does an SRT timecode look like?"
    answer: "It uses the format HH:MM:SS,mmm — hours, minutes, seconds, then a comma and three digits of milliseconds. A cue line reads 00:00:02,400 --> 00:00:05,100, meaning that caption shows from 2.4 to 5.1 seconds."
  - question: "Can I get word-level timestamps for a TikTok?"
    answer: "Not from TranscribeTok. Its timestamps are not word-level. If you need millisecond timing on individual words, VexaScribe offers word-level timestamps and is the better tool for that specific job."
  - question: "How do I convert a TikTok SRT into a VTT file?"
    answer: "Add the line WEBVTT followed by a blank line at the top of the file, replace every comma in the timecodes with a period, and save it with a .vtt extension. That is the whole difference between the two formats."
---

You transcribed a TikTok, got a clean block of text, and then realised the text alone doesn't help — you need to know *when* each line was said. To cite a moment, to cut a clip, to jump back to the four-second mark where the creator said the thing you actually wanted.

TikTok won't give you that. But the fix is one choice: download the transcript with timestamps included.

## Why a plain transcript gives you no timing

Most transcript tools default to plain text, and plain text is exactly that — the words, in order, with nothing attached. It's the right default. If you're pasting into an AI tool or drafting from a script, timecodes are noise that eats context.

The moment you need timing, though, a words-only transcript is useless, and no amount of reformatting brings the timing back. It was never in the file. You have to ask for timestamps in the first place.

TikTok itself is no help here. Its auto-captions are timed internally — that's how they stay in sync with the audio — but those timings are never exposed. There is no copy button, no export, no download, and no way to see a timecode anywhere in the app or on the web. [TikTok's missing caption export](/download-tiktok-captions) is a well-worn frustration, and timing is the part of it people notice last.

## The method: download with timestamps

**Step 1: Copy the TikTok link.** Share arrow → **Copy link**.

**Step 2: Open [TranscribeTok](https://transcribetok.com).** Paste the link. No account for two videos a day.

**Step 3: Click Get Transcript.** The audio is transcribed in a few seconds.

**Step 4: Include timestamps**, then download as TXT, DOC or PDF, or copy the transcript in one tap. Leave timestamps off and you get the words only.

**Step 5: Open the file.** TXT opens in any text editor, DOC in Word or Google Docs, PDF in any viewer.

One thing this is not: a subtitle file. TranscribeTok does not make SRT, VTT or any other caption file, and a timestamped TXT renamed to `.srt` will not load as subtitles. If you need a real subtitle track, the tool comparison further down shows who makes one.

<div class="cta-box">
<strong>Get a timestamped transcript free:</strong> Paste any public TikTok link and download the transcript with timestamps as TXT, DOC or PDF. Two free every day, no signup. <a href="https://transcribetok.com">→ Get a TikTok transcript at TranscribeTok.com</a>
</div>

## Reading SRT timecodes

If you are working with subtitle files — from one of the tools below, not from TranscribeTok — it helps to know how SRT timing is written. An SRT is a repeating four-part block: a sequence number, a timecode range, the line itself, then a blank line.

```
1
00:00:00,000 --> 00:00:02,400
Here's the mistake almost everyone makes

2
00:00:02,400 --> 00:00:05,100
when they start posting on this app
```

The format is `HH:MM:SS,mmm` — hours, minutes, seconds, comma, three digits of milliseconds. So cue 2 above runs from 2.4 seconds to 5.1 seconds.

**That comma matters more than it looks.** WebVTT, the closely related format used by HTML5 video, puts a period in the same position. Everything else about the two files is nearly identical, which is why mixing them up is the single most common cause of a subtitle file that silently refuses to load.

| | SRT | WebVTT |
|---|---|---|
| Millisecond separator | Comma — `00:00:02,400` | Period — `00:00:02.400` |
| File header | None | Must start with `WEBVTT` |
| Styling | Basic tags, player-dependent | CSS positioning, colour, fonts |
| Extension | `.srt` | `.vtt` |

Converting SRT to VTT takes about ten seconds: add `WEBVTT` and a blank line at the top, find-and-replace every comma in the timecodes with a period, save as `.vtt`. TranscribeTok makes neither format; VexaScribe and WayinVideo both export SRT and VTT directly.

## What the timestamps are good for

**Citing a specific moment.** "At 0:14 she says X" is checkable. A paraphrase isn't. For research notes, competitor teardowns and anything you'll publish, the timecode is what makes the quote defensible.

**Cutting clips.** If you're pulling a 6-second moment out of a 90-second video, reading the timestamped transcript is far faster than scrubbing a timeline looking for the right sentence.

**Pacing analysis.** This is the underrated one. The timecodes tell you words-per-second across the video. Compare the first five seconds of a video that performed well against one that didn't and the delivery speed difference is usually visible in the numbers before you can hear it.

**Real subtitle tracks.** Uploading a clip to YouTube, Instagram or LinkedIn with a proper caption file beats re-uploading TikTok's burned-in captions with the watermark attached. TranscribeTok doesn't make that caption file — a subtitle tool like VexaScribe or WayinVideo does — and [the captions guide](/download-tiktok-captions) covers that workflow end to end.

## When another tool is the better answer

Being straight about this: TranscribeTok gives you a timestamped transcript, **not a subtitle file**, and its timestamps are not word-level. For most uses that's enough — you want to find a sentence, not a syllable. But if you specifically need word-level timing or an SRT or VTT file, we don't do it, and a few competitors do it well.

| Tool | Timestamp granularity | Timed export formats | Free tier |
|---|---|---|---|
| TranscribeTok | Timestamped transcript, not word-level | TXT, DOC, PDF (no SRT or VTT) | 2 videos/day, no signup |
| VexaScribe | Word-level, millisecond | SRT, VTT, JSON, CSV | 30 free minutes once, no card |
| WayinVideo | Per line, plus timestamped TXT | SRT, VTT | Credit-based, signup required |
| GetTranscribe | Per line | SRT | Free tier, then $0.06/minute |
| TokScript | Per line | XML, JSON, CSV | 5/day, signup required |

Pick by the job, not by loyalty:

- **Word-level timing, or you need JSON to feed a script** → VexaScribe.
- **An SRT or VTT subtitle file** → VexaScribe or WayinVideo.
- **A timestamped transcript of one video, right now, with no account** → TranscribeTok. The two-a-day free tier with no signup is the thing we're actually best at.
- **A hundred videos in one pass** → none of ours. TranscribeTok does one video at a time, full stop. [The tools comparison](/best-tiktok-transcript-tools-2026) covers which batch tools are worth it.

## Two limits worth knowing before you start

**Timestamps are only as good as the transcription.** If the audio is loud-music-over-fast-speech, the words will be wrong and the timings will be approximate around them. Accuracy sits in the mid-to-high 90s for clear speech and degrades from there — [the transcription guide](/transcribe-tiktok-video) covers what actually hurts it.

**On-screen text has no timestamps because it has no transcript.** Text overlays typed onto the video are rendered graphics, not data. They're not captured at all, timed or otherwise. Only the spoken audio track becomes text.

## Related guides

- [Download a TikTok transcript](/download-tiktok-transcript) — TXT vs DOC vs PDF, and which to pick
- [Download TikTok captions and subtitles](/download-tiktok-captions) — the subtitle-file workflow in full
- [How to get a TikTok transcript](/how-to-get-a-tiktok-transcript) — the three free methods compared
- [Translate a TikTok transcript](/translate-tiktok-transcript) — what to do once the text is in the wrong language
- [TikTok subtitle generator](/tiktok-subtitle-generator) — TikTok's auto-generated and creator captions, and their limits
- [Transcribe a TikTok video](/transcribe-tiktok-video) — accuracy, alternatives and limits

## Frequently asked questions

**How do I get a TikTok transcript with timestamps?**
Transcribe the video in TranscribeTok and download it with timestamps included, as TXT, DOC or PDF. TranscribeTok does not make SRT or other subtitle files; VexaScribe and WayinVideo do.

**Does TikTok show caption timestamps?**
No. The captions are timed internally but the timings are never exposed, and the text can't be exported.

**What does an SRT timecode look like?**
`HH:MM:SS,mmm` — for example `00:00:02,400 --> 00:00:05,100`.

**Can I get word-level timestamps?**
Not from TranscribeTok — its timestamps are not word-level. VexaScribe offers word-level timing.

**How do I convert SRT to VTT?**
Add a `WEBVTT` header line, swap the timecode commas for periods, save as `.vtt`. [The full SRT to VTT guide](/srt-to-vtt-converter) covers both directions and why converted files sometimes still fail to load.

---

The whole problem is a setting most people never touch. The words and the timings come out of the same transcription — you just have to ask for the timestamps.

**[→ Export a timestamped TikTok transcript free at TranscribeTok.com](https://transcribetok.com)**
