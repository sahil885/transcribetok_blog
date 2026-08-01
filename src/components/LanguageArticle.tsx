import Link from "next/link";
import {
  type Language,
  LANGUAGES,
  languagePageSlug,
  languageSteps,
  languageFaq,
} from "@/lib/languages";

// Programmatic per-language transcript page. Shared scaffolding, unique
// substance (intro + note) supplied per language so pages are not thin.

export default function LanguageArticle({ lang }: { lang: Language }) {
  const steps = languageSteps(lang);
  const faq = languageFaq(lang);
  const others = LANGUAGES.filter((l) => l.slug !== lang.slug);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
      >
        ← All Articles
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
          <span className="bg-cyan-50 text-cyan-700 font-semibold px-2 py-0.5 rounded-full text-xs">
            Languages
          </span>
          <span>·</span>
          <span>Free guide</span>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {lang.name} TikTok Transcript: Free, No Signup
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          Extract a {lang.name} ({lang.native}) TikTok transcript in seconds —
          free, no account needed. Copy or download the full text, then translate
          or summarize it.
        </p>
      </header>

      <div className="bg-rose-50 border border-rose-100 rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-gray-900 text-sm">
            Get any {lang.name} TikTok transcript instantly
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            2 free transcripts a day · No signup · Copy or download as TXT, DOCX,
            SRT
          </p>
        </div>
        <a
          href="https://transcribetok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--brand)" }}
        >
          Try Free →
        </a>
      </div>

      <div className="prose">
        <p>{lang.intro}</p>

        <h2>Why get a {lang.name} TikTok transcript?</h2>
        <p>
          Watching is slow; reading is fast. A{" "}
          <strong>{lang.name} TikTok transcript</strong> lets you skim a video in
          seconds, search for a specific phrase, and copy exact wording without
          scrubbing back and forth on a 20-second clip. It&apos;s also the first
          step for almost anything else you&apos;d want to do — translating the
          video, turning it into study notes, writing subtitles, or feeding it to
          an AI tool for a summary.
        </p>

        <h2>How to get a {lang.name} transcript (free, in seconds)</h2>
        <ol>
          {steps.map((s) => (
            <li key={s.name}>
              <strong>{s.name}.</strong> {s.text}
            </li>
          ))}
        </ol>

        <div className="cta-box">
          <strong>Try it free:</strong> Paste any {lang.name} TikTok link and get
          the full transcript in seconds — two free every day, no account needed.{" "}
          <a href="https://transcribetok.com">→ Try TranscribeTok.com</a>
        </div>

        <h2>{lang.name} TikTok captions: what to expect</h2>
        <p>{lang.note}</p>
        <p>
          Worth knowing: TikTok&apos;s own auto-captions can&apos;t be exported —
          there&apos;s no copy-all button anywhere in the app. That&apos;s why
          getting the text means{" "}
          <Link href="/transcribe-tiktok-video">
            transcribing the video&apos;s audio directly
          </Link>
          . If you&apos;re new to this, start with{" "}
          <Link href="/how-to-get-a-tiktok-transcript">
            how to get a TikTok transcript
          </Link>
          .
        </p>

        <h2>{lang.name} transcript vs. doing it manually</h2>
        <table>
          <thead>
            <tr>
              <th>Approach</th>
              <th>Time</th>
              <th>Cost</th>
              <th>Editable text</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TranscribeTok</td>
              <td>A few seconds</td>
              <td>2 free daily, no signup</td>
              <td>Yes (TXT, DOCX, SRT)</td>
            </tr>
            <tr>
              <td>Typing it out by hand</td>
              <td>10–20x video length</td>
              <td>Free, but slow</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Paid transcription services</td>
              <td>Minutes to hours</td>
              <td>Per-minute fee</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>

        <h2>Translate or summarize your {lang.name} transcript</h2>
        <p>
          Once you have the {lang.name} text, translating it is trivial: paste it
          into any AI or translation tool. Our guide to{" "}
          <Link href="/tiktok-transcript-for-chatgpt">
            using a TikTok transcript with ChatGPT
          </Link>{" "}
          covers summarizing and translating in one prompt, and if you need to
          save the text permanently, see{" "}
          <Link href="/download-tiktok-transcript">
            how to download a TikTok transcript
          </Link>
          . Researching a whole account?{" "}
          <Link href="/bulk-tiktok-transcripts">
            Transcribe TikToks in bulk
          </Link>{" "}
          instead of one at a time.
        </p>

        <h2>Frequently asked questions</h2>
        {faq.map((f) => (
          <div key={f.question}>
            <p>
              <strong>{f.question}</strong>
              <br />
              {f.answer}
            </p>
          </div>
        ))}

        <p>
          <strong>
            Ready to extract {lang.name} text from any TikTok?{" "}
            <a href="https://transcribetok.com">
              Get your free {lang.name} TikTok transcript at TranscribeTok.com →
            </a>
          </strong>
        </p>
      </div>

      {/* Other languages — interlinking */}
      <section className="mt-16 border-t border-gray-100 pt-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          TikTok transcripts in other languages
        </h2>
        <div className="flex flex-wrap gap-2">
          {others.map((l) => (
            <Link
              key={l.slug}
              href={`/${languagePageSlug(l)}`}
              className="text-sm border border-gray-200 rounded-full px-3 py-1.5 text-gray-700 hover:border-rose-200 hover:text-rose-600 transition-colors"
            >
              {l.name}
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-16 border-t border-gray-100 pt-10 text-center">
        <p className="text-lg font-bold text-gray-900 mb-2">
          Ready to get your {lang.name} transcript?
        </p>
        <p className="text-sm text-gray-500 mb-5">
          Paste any TikTok link and get the full text in seconds. Two free
          transcripts every day, no account required.
        </p>
        <a
          href="https://transcribetok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--brand)" }}
        >
          Get TikTok Transcript Free →
        </a>
      </div>
    </article>
  );
}
