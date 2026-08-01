import type { FaqItem, HowToStep } from "@/lib/posts";

// Programmatic SEO: one template -> a page per language.
// Each entry carries UNIQUE substance (intro + note) so pages are genuinely
// useful, not thin doorway pages. The template scaffolding is shared.
//
// Language selection is deliberately weighted to TikTok's actual largest
// markets (Indonesia, Brazil, Mexico, Vietnam, the Philippines, Thailand,
// Japan, Korea, Turkey, the Gulf, Russia and Western Europe). Hindi is
// intentionally excluded — TikTok has been unavailable in India since 2020.

export interface Language {
  slug: string; // url segment, e.g. "spanish" -> /spanish-tiktok-transcript
  name: string; // English name, e.g. "Spanish"
  native: string; // endonym, e.g. "Español"
  intro: string; // unique 2-3 sentence opener
  note: string; // unique auto-caption / usage note
}

export const LANGUAGES: Language[] = [
  {
    slug: "spanish",
    name: "Spanish",
    native: "Español",
    intro:
      "Spanish is one of TikTok's largest language communities, spanning Mexico, Spain, Colombia, Argentina and the wider Latin American creator scene. Whether you're studying a viral recipe, a comedy sketch, or a finanzas personales explainer, pulling the Spanish transcript turns fast-talking audio into text you can read at your own pace, search, quote and translate.",
    note: "Spanish auto-captions are among the most accurate TikTok produces, but regional slang varies enormously between Mexican, Rioplatense and Peninsular Spanish — expect a handful of colloquialisms to come through phonetically rather than correctly spelled.",
  },
  {
    slug: "indonesian",
    name: "Indonesian",
    native: "Bahasa Indonesia",
    intro:
      "Indonesia is TikTok's biggest market outside the United States, which makes Bahasa Indonesia one of the most-spoken languages on the platform. Extracting the Indonesian transcript is the fastest way to turn tutorials, product reviews and viral komedi clips into searchable text you can study or repurpose.",
    note: "Indonesian is phonetically regular, so auto-captions handle it well. The main gap is code-switching — creators mix in English marketing terms and regional Javanese or Sundanese phrases, which the captions often render approximately.",
  },
  {
    slug: "portuguese",
    name: "Portuguese",
    native: "Português",
    intro:
      "Driven by Brazil's enormous creator economy, Portuguese is one of TikTok's most active languages. Grabbing the Portuguese transcript turns aulas, receitas, podcasts cuts and product reviews into text you can quote accurately, translate, or mine for content ideas.",
    note: "Brazilian and European Portuguese differ significantly in vocabulary and pronunciation. Auto-captions handle both, but accuracy is noticeably higher on clear Brazilian-Portuguese audio, which is the bulk of TikTok's Portuguese content.",
  },
  {
    slug: "arabic",
    name: "Arabic",
    native: "العربية",
    intro:
      "Arabic TikTok is huge across the Gulf, Egypt and the Levant — and it's exactly the kind of content that's painful to transcribe by hand, thanks to dozens of dialects and a right-to-left script. Extracting the Arabic transcript hands you the full text in seconds, ready to read, search or translate.",
    note: "Speech recognition is trained mostly on Modern Standard Arabic, so heavily dialectal videos — Egyptian, Khaleeji, Levantine — may need light cleanup. The extracted text still exports cleanly in right-to-left order and pastes correctly into AI tools.",
  },
  {
    slug: "french",
    name: "French",
    native: "Français",
    intro:
      "French TikTok spans France, Québec, Belgium and Francophone Africa, with a strong scene in comedy, beauty and vulgarisation (explainer) content. The French transcript turns that audio into text you can quote, study, or run through an AI summarizer.",
    note: "French auto-captions are reliable for clear studio speech. Liaisons and rapid colloquial French — plus verlan slang — are where the occasional error creeps in, usually as a phonetically plausible wrong word.",
  },
  {
    slug: "german",
    name: "German",
    native: "Deutsch",
    intro:
      "German TikTok leans heavily toward explainers, finance, fitness and Studium content — the sort of dense, information-rich video that's much faster to read than to rewatch. The German transcript hands you the whole thing as searchable text.",
    note: "Accuracy on standard Hochdeutsch is excellent. German's long compound nouns occasionally get split incorrectly, and regional dialects like Bavarian, Swabian or Swiss German are meaningfully less reliable.",
  },
  {
    slug: "japanese",
    name: "Japanese",
    native: "日本語",
    intro:
      "Japanese is one of TikTok's biggest non-English languages, and its three writing systems make manual transcription especially slow. Extracting the Japanese transcript gives you the kanji, hiragana and katakana text instantly — ready to paste into a dictionary, translator or AI tool.",
    note: "Auto-captions handle standard Japanese well but don't insert spaces, since Japanese isn't space-delimited. The text remains fully searchable and translates cleanly; proper nouns and internet slang are the most common miss.",
  },
  {
    slug: "korean",
    name: "Korean",
    native: "한국어",
    intro:
      "Korean TikTok — K-pop, K-beauty, food and study content — has a genuinely worldwide audience, much of it people who don't speak Korean. The Korean transcript lets learners and fans read the Hangul alongside the video and translate the whole thing with a single paste.",
    note: "Korean recognition is solid for clear studio audio. Rapid variety-show style banter, heavy slang and honorific contractions are where it slips, and English loanwords are sometimes transcribed in Hangul rather than Latin script.",
  },
  {
    slug: "russian",
    name: "Russian",
    native: "Русский",
    intro:
      "Russian remains one of TikTok's largest Cyrillic-script languages, with a deep catalogue of comedy, lifestyle and educational content. Pulling the Russian transcript converts the audio into text you can search, quote or translate without replaying the clip.",
    note: "Russian auto-captions are good on clear speech but strip most punctuation, so long monologues arrive as continuous text. Running the transcript through an AI tool to restore sentence breaks takes seconds and makes it far more readable.",
  },
  {
    slug: "turkish",
    name: "Turkish",
    native: "Türkçe",
    intro:
      "Turkey is one of TikTok's strongest markets per capita, with a large comedy, music and commerce creator base. The Turkish transcript turns fast, idiom-heavy speech into text you can read, translate and reuse.",
    note: "Turkish is agglutinative — meaning is packed into long suffix chains — which auto-captions handle surprisingly well because the language is phonetically consistent. Loanwords and brand names are the most common transcription errors.",
  },
  {
    slug: "vietnamese",
    name: "Vietnamese",
    native: "Tiếng Việt",
    intro:
      "Vietnam is one of TikTok's fastest-growing markets, particularly for live commerce and food content. Extracting the Vietnamese transcript gives you the full diacritic-correct text, which is far quicker than typing tone marks by hand.",
    note: "Vietnamese is tonal, and tone marks change meaning entirely. Auto-captions usually get them right on clear audio, but noisy street-food or live-selling clips are where mistakes concentrate — worth a quick read-through before you quote anything.",
  },
  {
    slug: "thai",
    name: "Thai",
    native: "ภาษาไทย",
    intro:
      "Thai TikTok is enormous, especially in beauty, food and comedy. Thai script has no spaces between words, which makes manual transcription genuinely painful — automatic extraction removes that problem entirely.",
    note: "Because Thai isn't space-delimited, word segmentation is the main challenge for speech recognition. The extracted text is still fully usable and translates well; expect the occasional compound word to be split at the wrong point.",
  },
  {
    slug: "italian",
    name: "Italian",
    native: "Italiano",
    intro:
      "Italian TikTok has a strong food, fashion and comedy scene, plus a growing catalogue of explainer content. The Italian transcript turns rapid, gesture-heavy delivery into text you can actually read and search.",
    note: "Italian auto-captions perform well on standard Italian. Strong regional accents — Neapolitan, Sicilian, Romanesco — and dialect phrases are where accuracy drops, sometimes noticeably.",
  },
  {
    slug: "filipino",
    name: "Filipino",
    native: "Tagalog",
    intro:
      "The Philippines is one of TikTok's most engaged markets, and Filipino creators dominate several global content formats. Getting the Filipino transcript turns that audio into text you can quote, translate or use for competitor research.",
    note: "Filipino content is heavily code-switched with English ('Taglish'), which is actually the hardest case for automatic captions. Expect a mix of correctly transcribed English and approximated Tagalog — usable, but worth reviewing before publishing quotes.",
  },
  {
    slug: "polish",
    name: "Polish",
    native: "Polski",
    intro:
      "Polish is TikTok's largest Central European language, with a big comedy, gaming and lifestyle scene. The Polish transcript converts consonant-dense, fast-paced speech into readable text in seconds.",
    note: "Polish has complex consonant clusters and seven grammatical cases, so auto-captions occasionally pick the wrong inflected form. Meaning almost always survives intact, and the text translates reliably.",
  },
];

const SUFFIX = "-tiktok-transcript";

export function getAllLanguageSlugs(): string[] {
  return LANGUAGES.map((l) => `${l.slug}${SUFFIX}`);
}

export function getLanguageByPageSlug(pageSlug: string): Language | undefined {
  if (!pageSlug.endsWith(SUFFIX)) return undefined;
  const base = pageSlug.slice(0, -SUFFIX.length);
  return LANGUAGES.find((l) => l.slug === base);
}

export function languagePageSlug(l: Language): string {
  return `${l.slug}${SUFFIX}`;
}

export function languageTitle(l: Language): string {
  return `${l.name} TikTok Transcript — Free, No Signup (${l.native})`;
}

export function languageDescription(l: Language): string {
  return `Get a free ${l.name} (${l.native}) TikTok transcript in seconds — no signup needed. Copy or download the full ${l.name} text, then translate or summarize it.`;
}

export function languageSteps(l: Language): HowToStep[] {
  return [
    {
      name: `Copy the ${l.name} TikTok URL`,
      text: `Open the ${l.name} TikTok video, tap Share, and choose Copy link.`,
    },
    {
      name: "Paste it into TranscribeTok",
      text: "Go to transcribetok.com and paste the link into the box.",
    },
    {
      name: "Click Get Transcript",
      text: `The full ${l.name} transcript appears in a few seconds.`,
    },
    {
      name: `Copy or download the ${l.name} text`,
      text: `Copy the text or download it as TXT, DOCX or SRT — then translate or summarize it however you like.`,
    },
  ];
}

export function languageFaq(l: Language): FaqItem[] {
  return [
    {
      question: `Can I get a ${l.name} transcript from any TikTok video?`,
      answer: `Yes. TranscribeTok transcribes the spoken audio directly, so it works whether or not the creator enabled ${l.name} captions — as long as the video is public.`,
    },
    {
      question: `Is the ${l.name} TikTok transcript free?`,
      answer: `You get two free transcripts every day with no signup required. If you need more than that — for example transcribing a whole account at once — paid credits cover higher volumes.`,
    },
    {
      question: `Can I translate the ${l.name} transcript to English?`,
      answer: `Yes. Once you have the text, paste it into any AI or translation tool. Text translates far more reliably than audio, which is exactly why extracting the transcript first is worth the extra step.`,
    },
    {
      question: `Does it work on mobile?`,
      answer: `Yes. TranscribeTok runs in any phone browser, so you can get a ${l.name} transcript on iPhone or Android with nothing to install — just copy the TikTok share link and paste it in.`,
    },
  ];
}
