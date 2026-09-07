import type { Metadata } from "next";
import Link from "next/link";
import { LANGUAGES, languagePageSlug, art } from "@/lib/languages";

const SITE_URL = "https://blog.transcribetok.com";
const DEFAULT_OG = { url: "/og-default.png", width: 1200, height: 630 };
const SLUG = "tiktok-transcript-by-language";

const TITLE = "TikTok Transcript by Language — 22 Languages, Free";
const DESCRIPTION =
  "Get a TikTok transcript in any of 22 languages — Spanish, Indonesian, Arabic, Urdu, Portuguese and more. Free, no signup, straight from the video's audio.";

// Grouping is for readers, not for SEO. Regions reflect where each language's
// TikTok audience actually sits, which is why Chinese appears under Asia
// Pacific (Taiwan, Hong Kong, Malaysia, Singapore) rather than as a market of
// its own — mainland China uses Douyin, not TikTok.
const REGIONS: { name: string; blurb: string; slugs: string[] }[] = [
  {
    name: "Asia Pacific",
    blurb:
      "TikTok's largest region by users. Indonesia alone is the biggest market outside the United States.",
    slugs: [
      "indonesian",
      "vietnamese",
      "filipino",
      "thai",
      "malay",
      "japanese",
      "korean",
      "chinese",
    ],
  },
  {
    name: "South Asia & the Middle East",
    blurb:
      "Pakistan is one of TikTok's five largest markets; Arabic spans the Gulf, Egypt and the Levant.",
    slugs: ["urdu", "arabic", "turkish"],
  },
  {
    name: "Europe",
    blurb:
      "Smaller audiences than Asia, but high engagement and a dense explainer and comedy scene.",
    slugs: [
      "french",
      "german",
      "italian",
      "polish",
      "dutch",
      "romanian",
      "russian",
      "ukrainian",
    ],
  },
  {
    name: "Africa",
    blurb:
      "TikTok's fastest-growing region. Swahili is the working language across Kenya, Tanzania and much of East Africa.",
    slugs: ["swahili"],
  },
  {
    name: "The Americas & Iberia",
    blurb:
      "Brazil and Mexico are the third and fourth largest TikTok markets in the world.",
    slugs: ["portuguese", "spanish"],
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tiktok transcript by language",
    "tiktok transcript languages",
    "foreign language tiktok transcript",
    "tiktok transcript non english",
    "translate tiktok transcript",
  ],
  alternates: { canonical: `${SITE_URL}/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: `${SITE_URL}/${SLUG}`,
    images: [DEFAULT_OG],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG.url],
  },
};

const FAQ = [
  {
    question: "What languages can TranscribeTok transcribe from TikTok?",
    answer:
      "TranscribeTok transcribes the spoken audio, so it handles any language the speech recognition supports rather than a fixed list. This page has dedicated guides for 22 of the languages most spoken on TikTok, each covering the quirks that show up in that language specifically.",
  },
  {
    question: "Do I need to tell it which language the video is in?",
    answer:
      "No. The language is detected from the audio. The one case worth watching is closely related pairs — Ukrainian and Russian, or Malay and Indonesian — where detection occasionally picks the wrong one on short or code-switched clips.",
  },
  {
    question: "Can I get a TikTok transcript in Hindi or Tamil?",
    answer:
      "Transcription itself is not the obstacle, but TikTok has been banned in India since June 2020, so there is very little Hindi, Tamil or Telugu TikTok content to transcribe. That is why this site has no dedicated pages for Indian languages while our YouTube-focused sister site does.",
  },
  {
    question: "Does the transcript come back translated into English?",
    answer:
      "No. You get the transcript in the language spoken in the video. Translation is a separate step — paste the text into any AI or translation tool, which works far more reliably on text than on audio.",
  },
  {
    question: "Are non-English transcripts less accurate?",
    answer:
      "Somewhat, and it varies by language. Phonetically regular languages like Indonesian, Turkish and Spanish do very well. Tonal languages, right-to-left scripts, heavy dialect and code-switching are where accuracy drops — each language guide says where specifically.",
  },
];

export default function ByLanguagePage() {
  const bySlug = new Map(LANGUAGES.map((l) => [l.slug, l]));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: TITLE,
    itemListElement: LANGUAGES.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${l.name} TikTok Transcript`,
      url: `${SITE_URL}/${languagePageSlug(l)}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "TikTok Transcript by Language",
        item: `${SITE_URL}/${SLUG}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            <span>Hub</span>
            <span>·</span>
            <span>{LANGUAGES.length} guides</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            TikTok Transcript by Language
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            TranscribeTok reads the video&apos;s audio, so it returns a
            transcript in whatever language is actually spoken. These{" "}
            {LANGUAGES.length} guides cover the languages most spoken on TikTok
            — and what goes wrong in each one.
          </p>
        </header>

        <div className="bg-rose-50 border border-rose-100 rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900 text-sm">
              Get a TikTok transcript in any language
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              2 free transcripts a day · No signup · Copy or download as TXT,
              DOCX, SRT
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
          <p>
            <strong>
              You do not need to pick a language before transcribing.
            </strong>{" "}
            TranscribeTok detects it from the audio and returns the text in
            whatever was spoken. These guides exist because the useful part is
            language-specific: which scripts export cleanly, where speech
            recognition slips, and what to do about it.
          </p>
          <p>
            Every guide below covers the same workflow — paste a public TikTok
            link, get the spoken text in seconds, two free every day with no
            account — and then explains the failure modes particular to that
            language. If you are new to this, start with{" "}
            <Link href="/how-to-get-a-tiktok-transcript">
              how to get a TikTok transcript
            </Link>{" "}
            first.
          </p>
        </div>

        {REGIONS.map((region) => (
          <section key={region.name} className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              {region.name}
            </h2>
            <p className="text-sm text-gray-500 mb-5">{region.blurb}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {region.slugs.map((slug) => {
                const l = bySlug.get(slug);
                if (!l) return null;
                return (
                  <Link
                    key={l.slug}
                    href={`/${languagePageSlug(l)}`}
                    className="border border-gray-200 rounded-xl px-4 py-3 hover:border-rose-200 transition-colors group"
                  >
                    <span className="block font-semibold text-gray-900 text-sm group-hover:text-rose-600 transition-colors">
                      {l.name} TikTok transcript
                    </span>
                    <span className="block text-xs text-gray-400 mt-0.5">
                      {l.native}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        <div className="prose mt-14">
          <h2>Why some big languages are missing</h2>
          <p>
            <strong>
              There are no Hindi, Tamil or Telugu guides here, and that is
              deliberate.
            </strong>{" "}
            TikTok has been banned in India since June 2020 and the ban was
            still in force as of August 2026, so there is very little
            Indian-language TikTok content to transcribe. Tools that rank well
            for those terms are almost always YouTube tools, where the audience
            genuinely exists.
          </p>
          <p>
            Mainland China is a similar case in reverse: it does not have
            TikTok, it has Douyin, a separate app. The{" "}
            <Link href="/chinese-tiktok-transcript">Chinese guide</Link> is
            aimed at Taiwan, Hong Kong, Malaysia and Singapore instead.
          </p>

          <h2>After you have the transcript</h2>
          <p>
            The transcript comes back in the source language. Everything you
            would want to do next is a separate step, and all of it works better
            on text than on audio:
          </p>
          <ul>
            <li>
              <Link href="/translate-tiktok-transcript">
                Translate the transcript
              </Link>{" "}
              — why TikTok&apos;s own &quot;See Translation&quot; never covers
              the spoken audio, and the two-step method that does.
            </li>
            <li>
              <Link href="/summarize-tiktok-video-free">
                Summarize the video
              </Link>{" "}
              — three routes to a summary, including asking for it in a
              different language from the one spoken.
            </li>
            <li>
              <Link href="/tiktok-transcript-with-timestamps">
                Export with timestamps
              </Link>{" "}
              — SRT is the only export that carries timing, which matters for
              subtitling foreign-language clips.
            </li>
            <li>
              <Link href="/download-tiktok-transcript">
                Download it as TXT, DOCX or SRT
              </Link>{" "}
              — and which format to pick for non-Latin scripts.
            </li>
          </ul>

          <h2>Frequently asked questions</h2>
          {FAQ.map((f) => (
            <p key={f.question}>
              <strong>{f.question}</strong>
              <br />
              {f.answer}
            </p>
          ))}

          <p>
            <strong>
              Ready to transcribe a TikTok in any language?{" "}
              <a href="https://transcribetok.com">
                Get your free transcript at TranscribeTok.com →
              </a>
            </strong>
          </p>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-10 text-center">
          <p className="text-lg font-bold text-gray-900 mb-2">
            Any language, same two clicks
          </p>
          <p className="text-sm text-gray-500 mb-5">
            Paste any public TikTok link and get the full spoken text in
            seconds. Two free transcripts every day, no account required.
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
    </>
  );
}
