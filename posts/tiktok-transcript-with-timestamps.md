---
title: "TikTok Transcript With Timestamps: How to Get One Free"
description: "Need a TikTok transcript with timestamps? Export it as SRT to get every line mapped to a moment in the video — free, no signup. Plus how to convert SRT to VTT."
date: "2026-08-03"
author: "TranscribeTok Team"
category: "How-To"
readingTime: "7 min read"
keywords:
  - tiktok transcript with timestamps
  - timestamped tiktok transcript
  - tiktok transcript srt
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
  - name: "Export as SRT rather than TXT"
    text: "Choose the SRT export. SRT is the timestamped format — each line carries a start and end timecode."
  - name: "Open the SRT in any text editor"
    text: "An SRT is plain text. Open it in Notepad, TextEdit or VS Code to read the transcript alongside its timecodes."
faqItems:
  - question: "How do I get a TikTok transcript with timestamps?"
    answer: "Transcribe the video and export the result as SRT. SRT is a plain-text subtitle format in which every line is wrapped in a start and end timecode, so it doubles as a timestamped transcript. TXT and DOCX exports contain the words only, with no timing."
  - question: "Does TikTok show timestamps on its captions?"
    answer: "No. TikTok's auto-captions are timed internally so they appear in sync with the audio, but the timings are never exposed and the caption text cannot be copied or exported anywhere in the app or on the web."
  - question: "What does an SRT timecode look like?"
    answer: "It uses the format HH:MM:SS,mmm — hours, minutes, seconds, then a comma and three digits of milliseconds. A cue line reads 00:00:02,400 --> 00:00:05,100, meaning that caption shows from 2.4 to 5.1 seconds."
  - question: "Can I get word-level timestamps for a TikTok?"
    answer: "Not from TranscribeTok. Its SRT export is timed per caption line, not per word. If you need millisecond timing on individual words, VexaScribe offers word-level timestamps and is the better tool for that specific job."
  - question: "How do I convert a TikTok SRT into a VTT file?"
    answer: "Add the line WEBVTT followed by a blank line at the top of the file, replace every comma in the timecodes with a period, and save it with a .vtt extension. That is the whole difference between the two formats."
---

You transcribed a TikTok, got a clean block of text, and then realised the text alone doesn't help — you need to know *when* each line was said. To cite a moment, to cut a clip, to jump back to the four-second mark where the creator said the thing you actually wanted.

TikTok won't give you that. But the fix is one dropdown: export the transcript as SRT instead of TXT.

## Why TXT gives you no timing

Most transcript tools default to plain text, and plain text is exactly that — the words, in order, with nothing attached. It's the right default. If you're pasting into an AI tool or drafting from a script, timecodes are noise that eats context.

The moment you need timing, though, TXT is useless, and no amount of reformatting brings the timing back. It was never in the file. You have to export the timestamped format in the first place.

TikTok itself is no help here. Its auto-captions are timed internally — that's how they stay in sync with the audio — but those timings are never exposed. There is no copy button, no export, no download, and no way to see a timecode anywhere in the app or on the web. [TikTok's missing caption export](/download-tiktok-captions) is a well-worn frustration, and timing is the part of it people notice last.

## The method: export as SRT

**Step 1: Copy the TikTok link.** Share arrow → **Copy link**.

**Step 2: Open [TranscribeTok](https://transcribetok.com).** Paste the link. No account for two videos a day.

**Step 3: Click Get Transcript.** The audio is transcribed in a few seconds.

**Step 4: Choose the SRT export**, not TXT or DOCX. SRT is the only one of the three that carries timing.

**Step 5: Open the file in any text editor.** This is the bit people miss. An SRT isn't a special binary format that needs a video player — it's plain text. Notepad, TextEdit, VS Code, even a browser will show it.

<div class="cta-box">
<strong>Get a timestamped transcript free:</strong> Paste any TikTok link and export it as SRT with full timecodes. Two free every day, no signup. <a href="https://transcribetok.com">→ Get a TikTok transcript at TranscribeTok.com</a>
</div>

## Reading the timecodes

An SRT is a repeating four-part block: a sequence number, a timecode range, the line itself, then a blank line.

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

Converting SRT to VTT takes about ten seconds: add `WEBVTT` and a blank line at the top, find-and-replace every comma in the timecodes with a period, save as `.vtt`. TranscribeTok exports SRT only, so if your workflow needs VTT this is the step you'll do yourself.

## What the timestamps are good for

**Citing a specific moment.** "At 0:14 she says X" is checkable. A paraphrase isn't. For research notes, competitor teardowns and anything you'll publish, the timecode is what makes the quote defensible.

**Cutting clips.** If you're pulling a 6-second moment out of a 90-second video, reading the SRT is far faster than scrubbing a timeline looking for the right sentence.

**Pacing analysis.** This is the underrated one. The timecodes tell you words-per-second across the video. Compare the first five seconds of a video that performed well against one that didn't and the delivery speed difference is usually visible in the numbers before you can hear it.

**Real subtitle tracks.** Uploading a clip to YouTube, Instagram or LinkedIn with a proper caption file beats re-uploading TikTok's burned-in captions with the watermark attached. [The captions guide](/download-tiktok-captions) covers that workflow end to end.

## When another tool is the better answer

Being straight about this: TranscribeTok's SRT is timed **per caption line**, not per word. For most uses that's the right granularity — you want to find a sentence, not a syllable. But if you specifically need word-level timing, we don't do it, and a few competitors do it well.

| Tool | Timestamp granularity | Timed export formats | Free tier |
|---|---|---|---|
| TranscribeTok | Per caption line | SRT | 2 videos/day, no signup |
| VexaScribe | Word-level, millisecond | SRT, VTT, JSON, CSV | 30 free minutes, no login |
| WayinVideo | Per line, plus timestamped TXT | SRT, VTT | Credit-based, signup required |
| GetTranscribe | Per line | SRT | Free tier, then $0.06/minute |
| TokScript | Per line | XML, JSON, CSV | 5/day, signup required |

Pick by the job, not by loyalty:

- **Word-level timing, or you need JSON to feed a script** → VexaScribe.
- **VTT without converting it yourself** → VexaScribe or WayinVideo.
- **A timestamped transcript of one video, right now, with no account** → TranscribeTok. The two-a-day free tier with no signup is the thing we're actually best at.
- **A hundred videos in one pass** → none of ours. TranscribeTok does one video at a time, full stop. [The tools comparison](/best-tiktok-transcript-tools-2026) covers which batch tools are worth it.

## Two limits worth knowing before you start

**Timestamps are only as good as the transcription.** If the audio is loud-music-over-fast-speech, the words will be wrong and the timings will be approximate around them. Accuracy sits in the mid-to-high 90s for clear speech and degrades from there — [the transcription guide](/transcribe-tiktok-video) covers what actually hurts it.

**On-screen text has no timestamps because it has no transcript.** Text overlays typed onto the video are rendered graphics, not data. They're not captured at all, timed or otherwise. Only the spoken audio track becomes text.

## Related guides

- [Download a TikTok transcript](/download-tiktok-transcript) — TXT vs DOCX vs SRT, and which to pick
- [Download TikTok captions and subtitles](/download-tiktok-captions) — the subtitle-file workflow in full
- [How to get a TikTok transcript](/how-to-get-a-tiktok-transcript) — the three free methods compared
- [Translate a TikTok transcript](/translate-tiktok-transcript) — what to do once the text is in the wrong language
- [Transcribe a TikTok video](/transcribe-tiktok-video) — accuracy, alternatives and limits

## Frequently asked questions

**How do I get a TikTok transcript with timestamps?**
Transcribe the video and export as SRT. TXT and DOCX carry the words only.

**Does TikTok show caption timestamps?**
No. The captions are timed internally but the timings are never exposed, and the text can't be exported.

**What does an SRT timecode look like?**
`HH:MM:SS,mmm` — for example `00:00:02,400 --> 00:00:05,100`.

**Can I get word-level timestamps?**
Not from TranscribeTok — its SRT is timed per line. VexaScribe offers word-level timing.

**How do I convert SRT to VTT?**
Add a `WEBVTT` header line, swap the timecode commas for periods, save as `.vtt`.

---

The whole problem is a dropdown most people never open. The words and the timings come out of the same transcription — you just have to ask for the format that keeps both.

**[→ Export a timestamped TikTok transcript free at TranscribeTok.com](https://transcribetok.com)**
