---
title: "SRT to VTT: Convert Subtitle Files in 10 Seconds"
description: "Convert SRT to VTT in about ten seconds: add a WEBVTT header and swap the timecode commas for periods. Both directions explained, plus why files fail to load."
date: "2026-08-17"
author: "TranscribeTok Team"
category: "How-To"
readingTime: "7 min read"
keywords:
  - srt to vtt
  - convert srt to vtt
  - srt to webvtt
  - vtt to srt
  - vtt converter
howToName: "How to Convert an SRT File to VTT"
howToSteps:
  - name: "Open the SRT in a plain text editor"
    text: "Use Notepad, TextEdit in plain-text mode, VS Code or any editor that does not add formatting. Word processors will corrupt the file."
  - name: "Add the WEBVTT header"
    text: "Type WEBVTT on the very first line, then leave one completely blank line beneath it before the first caption."
  - name: "Replace the timecode commas with periods"
    text: "Find and replace every comma that sits before the milliseconds, so 00:00:04,500 becomes 00:00:04.500."
  - name: "Delete the caption numbers if you want"
    text: "WebVTT ignores the numeric cue identifiers that SRT requires, so you can leave them or strip them out. Either file will play."
  - name: "Save with a .vtt extension"
    text: "Save as UTF-8 without a byte order mark and change the file extension from .srt to .vtt."
faqItems:
  - question: "What is the difference between an SRT file and a VTT file?"
    answer: "Three things. VTT files must begin with the line WEBVTT followed by a blank line, SRT files have no header. VTT timecodes use a period before the milliseconds (00:00:04.500) while SRT uses a comma (00:00:04,500). SRT requires a numbered cue identifier above each caption, VTT treats it as optional. Everything else about the two formats is effectively identical."
  - question: "How do I convert an SRT file to VTT without a converter tool?"
    answer: "Open the SRT in a plain text editor, type WEBVTT on the first line followed by a blank line, find-and-replace every comma in the timecodes with a period, then save the file with a .vtt extension. The whole edit takes about ten seconds and needs no software beyond a text editor."
  - question: "Why won't my VTT subtitle file load in the browser?"
    answer: "The most common cause is a missing WEBVTT header line or timecodes that still use commas instead of periods — both happen when an SRT is simply renamed to .vtt without editing the contents. The second most common cause is a UTF-8 byte order mark at the start of the file, which stops some browsers recognising the WEBVTT header."
  - question: "Can I convert VTT back to SRT?"
    answer: "Yes, and it is the same edit in reverse. Delete the WEBVTT header line and the blank line beneath it, replace every period in the timecodes with a comma, add sequential numbers above each caption if they are missing, and save with a .srt extension. Strip any VTT styling blocks such as NOTE, STYLE or REGION, because SRT has no equivalent."
  - question: "Which subtitle format should I use, SRT or VTT?"
    answer: "Use SRT for video editors, social platforms and desktop players — it is the most widely accepted subtitle format there is. Use VTT for HTML5 video on the web, because the browser track element requires it. If you only keep one file, keep the SRT: converting SRT to VTT takes ten seconds, and every major platform accepts SRT."
---

You exported subtitles, renamed the file from `.srt` to `.vtt`, and the browser refuses to show them. Nothing is broken. The two formats look nearly identical when you open them, but they differ in three small ways, and a renamed file gets all three wrong.

Here is the whole difference, and the ten-second fix.

## SRT vs VTT: the three differences

**VTT requires a header line, SRT has none.** A WebVTT file must begin with the exact word `WEBVTT` on the first line, followed by one blank line. Without it, the file is not a valid WebVTT file and browsers reject it silently.

**The timecode separator is different.** SRT writes milliseconds after a comma — `00:00:04,500`. VTT writes them after a period — `00:00:04.500`. This is the single most common reason a subtitle file fails to load, and it is invisible unless you know to look for it.

**Cue numbers are required in SRT, optional in VTT.** SRT puts a sequential number above every caption block. WebVTT allows an identifier but ignores it, so you can keep the numbers or delete them and the file plays either way.

| | SRT | WebVTT |
|---|---|---|
| File header | None | Must start with `WEBVTT` + blank line |
| Timecode | `00:00:04,500` | `00:00:04.500` |
| Separator before ms | Comma | Period |
| Cue numbers | Required | Optional, ignored |
| Styling and positioning | None | `STYLE`, `REGION`, cue settings |
| Comments | Not supported | `NOTE` blocks |
| Encoding | Varies, often Windows-1252 | UTF-8 only |
| Used by | Video editors, social platforms, desktop players | HTML5 `<track>`, web video |
| Extension | `.srt` | `.vtt` |

Read that table and the conversion is obvious: it is a header line and a find-and-replace. No tool required.

## Converting SRT to VTT by hand

Open the `.srt` in a plain text editor — Notepad, TextEdit set to plain text, VS Code, anything that does not add formatting. Do not use Word or Google Docs; they will inject formatting and break the file.

Type `WEBVTT` on the very first line and press Enter twice, so there is one completely blank line between the header and the first caption. Then run a find-and-replace on the comma in the timecodes: search for `,` and replace with `.` — but only inside timecodes. If your captions contain commas in the dialogue, search for the pattern with the digits around it rather than the bare comma, or your subtitles will lose their punctuation.

A safer find-and-replace, if your editor supports regular expressions, is to search for `(\d{2}:\d{2}:\d{2}),(\d{3})` and replace with `$1.$2`. That matches only timecodes and leaves dialogue commas alone.

Save the file as UTF-8, **without** a byte order mark, and change the extension to `.vtt`. The BOM matters: a few browsers see those invisible leading bytes and fail to recognise the `WEBVTT` header immediately after them.

Before:

```
1
00:00:00,000 --> 00:00:03,200
Right, so the thing nobody tells you
```

After:

```
WEBVTT

1
00:00:00.000 --> 00:00:03.200
Right, so the thing nobody tells you
```

That is the entire conversion.

<div class="cta-box">
<strong>Need the subtitle file in the first place?</strong> Paste any public TikTok link into TranscribeTok and export the transcript as SRT, with timecodes on every caption line. Two free every day, no signup, no card. <a href="https://transcribetok.com">→ Get a TikTok SRT at TranscribeTok.com</a>
</div>

## Converting VTT back to SRT

The reverse conversion is the same edit backwards, with one extra step. Delete the `WEBVTT` line and the blank line beneath it. Replace every period in the timecodes with a comma. Then check that each caption has a sequential number above it — if the VTT omitted them, you must add them, because SRT genuinely requires them and many players will refuse a file without them.

One thing that does not survive the trip back: WebVTT styling. `STYLE` blocks, `REGION` definitions, `NOTE` comments and inline cue settings such as `align:start position:10%` have no SRT equivalent. Delete them. If your captions relied on positioning, that positioning is gone, and there is no workaround — SRT simply has no concept of it.

## Where TranscribeTok fits

TranscribeTok exports TXT, DOCX and SRT. **It does not export VTT.** If your workflow needs VTT, you will do the ten-second edit above yourself, and we would rather say that plainly than let you find out after exporting.

The SRT we produce is timed per caption line, not per word. That is the right granularity for subtitles and for citing a moment in a video; it is not fine enough for karaoke-style word highlighting. [TikTok transcripts with timestamps](/tiktok-transcript-with-timestamps) goes into what the timing actually looks like and which export carries it, and [downloading TikTok captions and subtitles](/download-tiktok-captions) covers getting a standards-compliant SRT out of a TikTok in the first place.

If VTT specifically is a hard requirement and you would rather not touch a text editor, some competitors export it directly — VexaScribe and WayinVideo both do. [The best TikTok transcript tools compared](/best-tiktok-transcript-tools-2026) lays out who exports what.

## Common failures and what causes them

**The file loads but no captions appear.** Almost always the timecodes still use commas. The browser parsed the header, found no valid cue timings, and rendered nothing.

**The browser reports an invalid WebVTT file.** Either the `WEBVTT` header is missing, there is no blank line after it, or a byte order mark is sitting in front of it. Re-save as UTF-8 without BOM.

**Captions appear but drift out of sync.** This is not a format problem — the conversion does not touch timing values. Drift means the source transcript was timed against a different cut of the video, or the video was sped up after the subtitles were made.

**Accented or non-Latin characters render as symbols.** The file was saved in a non-UTF-8 encoding. WebVTT is UTF-8 only. Re-save with UTF-8 encoding, and note this bites hardest on non-English subtitles — the [Arabic](/arabic-tiktok-transcript), [Spanish](/spanish-tiktok-transcript) and [Ukrainian](/ukrainian-tiktok-transcript) guides all deal with scripts where a bad encoding is immediately obvious.

**Only the first caption shows.** A caption block is missing its blank-line separator, so the parser read the rest of the file as part of cue one.

## Which format to keep

Keep the SRT. It is accepted by every major video editor, every social platform that takes subtitle uploads, and every desktop player. VTT is accepted by browsers and by fewer editors. Since converting SRT to VTT takes ten seconds and converting back loses styling, the SRT is the better master file.

The exception is if you are publishing HTML5 video yourself. The `<track>` element requires WebVTT, full stop, so VTT is the delivery format and you will generate it from your SRT each time.

## Related guides

- [TikTok transcript with timestamps](/tiktok-transcript-with-timestamps) — which export carries timing, and how to read SRT timecodes
- [Download TikTok captions and subtitles](/download-tiktok-captions) — getting a standards-compliant SRT from any TikTok
- [Download a TikTok transcript](/download-tiktok-transcript) — TXT, DOCX or SRT, and which to pick
- [TikTok transcript generator: the complete guide](/tiktok-transcript-generator) — the pillar, including where accuracy breaks down
- [Best free TikTok transcript tools in 2026](/best-tiktok-transcript-tools-2026) — who exports VTT, JSON and CSV directly

Working with non-English subtitles? The [TikTok transcript by language hub](/tiktok-transcript-by-language) lists every per-language guide, and encoding problems show up fastest on [Arabic](/arabic-tiktok-transcript) and [Japanese](/japanese-tiktok-transcript) text.

## Frequently asked questions

**What is the difference between SRT and VTT?**
VTT starts with a `WEBVTT` header line and a blank line; SRT has no header. VTT timecodes use a period before the milliseconds, SRT uses a comma. SRT requires numbered cues, VTT treats them as optional.

**How do I convert SRT to VTT without a tool?**
Open the SRT in a plain text editor, add `WEBVTT` and a blank line at the top, replace the timecode commas with periods, save as `.vtt`. Ten seconds, no software.

**Why won't my VTT file load?**
Usually a missing `WEBVTT` header or timecodes still using commas — both happen when an SRT is renamed rather than edited. A UTF-8 byte order mark before the header causes the same failure.

**Can I convert VTT back to SRT?**
Yes. Remove the header, swap periods for commas, add sequential cue numbers, save as `.srt`. Any `STYLE`, `REGION` or `NOTE` blocks must be deleted — SRT has no equivalent.

**Does TranscribeTok export VTT?**
No. TranscribeTok exports TXT, DOCX and SRT. Converting the SRT to VTT is the manual ten-second edit described above.

---

Nearly every "subtitle file won't load" problem in this category comes down to a comma that should be a period. Once you have seen it once, you will spot it in a second, and you will never need a converter tool for it again.

**[→ Get a timed TikTok SRT free at TranscribeTok.com](https://transcribetok.com)**
