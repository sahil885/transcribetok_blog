import type { FaqItem } from "@/lib/posts";

// Per-language depth for the language pages that earn clicks (added
// 2026-10-30). Each entry adds sections that exist on that page only, so the
// pages are not one template with the language name swapped.
//
// RULES for adding entries:
// - Facts about markets and bans must be sourced (sources are noted inline).
// - Example lines are ILLUSTRATIVE phrases of the kind common in that
//   language's TikToks. They are labelled as such on the page and must never
//   be presented as quotes from a specific video. Do not invent transcripts.
// - Do not claim what script or digits TranscribeTok outputs for a language
//   unless it has been tested; say "may".

export interface LanguageExample {
  line: string; // in the language's own script
  english: string; // plain translation
  watch: string; // what to check in a transcript
}

export interface LanguageDeep {
  htmlLang: string; // BCP 47 code for the example lines
  title: string; // <title>, keep the "<Name> TikTok Transcript" lead
  description: string; // 150-160 chars
  contextHeading: string;
  context: string[];
  examples: LanguageExample[];
  tips: string[];
  faq: FaqItem[];
}

export const LANGUAGE_DEEP: Record<string, LanguageDeep> = {
  bengali: {
    htmlLang: "bn",
    title: "Bengali TikTok Transcript: Bangla Text From Any Video (বাংলা)",
    description:
      "Get the Bengali (বাংলা) text of any public TikTok free. Who makes Bengali TikTok, and how code-mixed Bangla and Bengali digits appear in a transcript.",
    contextHeading: "Where Bengali TikTok comes from",
    context: [
      "Bengali TikTok is Bangladeshi TikTok. DataReportal counted 46.5 million TikTok ad-reach users in Bangladesh in January 2025, the eighth-largest audience of any country. India's West Bengal also speaks Bengali, but TikTok has been banned in India since June 2020, so Indian Bengali creators are largely absent.",
      "The rest comes from the Bangladeshi diaspora, notably in the UK, the Gulf and Malaysia. Expect Bangladeshi colloquial Bangla rather than Kolkata Bengali: the vocabulary and verb endings differ, and a transcript records the dialect that was actually spoken.",
    ],
    examples: [
      {
        line: "আজকে আমি আপনাদের একটা নতুন রেসিপি দেখাবো",
        english: "Today I'll show you all a new recipe",
        watch:
          "The English loanword রেসিপি (recipe) may come back in Bengali script or as \"recipe\" in Latin letters, depending on how it was pronounced.",
      },
      {
        line: "ভাই, এটা কিন্তু একদম free না",
        english: "Brother, this isn't free at all",
        watch:
          "Mid-sentence English is normal in Bangladeshi speech. Search a transcript for an English word in both scripts before deciding it isn't there.",
      },
      {
        line: "দাম মাত্র ৫০০ টাকা",
        english: "The price is only 500 taka",
        watch:
          "Numbers may appear as Bengali digits (৫০০) or Western digits (500). Normalise them before comparing prices across videos.",
      },
    ],
    tips: [
      "Check the text is in Bengali script, not romanised \"Banglish\". Bengali Unicode is what translators, search and AI tools handle best.",
      "Search English loanwords in both scripts: রিভিউ and review, অফার and offer.",
      "Religious talks (waz) quote Arabic passages; those lines are where accuracy drops most, so check them against the video.",
      "For an English version, translate the transcript rather than the audio. Text translation handles code-mixed Bangla far better.",
    ],
    faq: [
      {
        question: "Is Bengali TikTok mostly from Bangladesh or India?",
        answer:
          "Bangladesh. TikTok has been banned in India since June 2020, so West Bengal's creators are largely absent, while Bangladesh had 46.5 million TikTok ad-reach users in January 2025 according to DataReportal. Most Bengali TikToks are therefore in Bangladeshi colloquial Bangla.",
      },
      {
        question: "Why are there English words in my Bengali TikTok transcript?",
        answer:
          "Because the speaker used them. Bangladeshi creators mix English words into Bangla constantly, and a transcript records what was said. Depending on pronunciation, those words may appear in Latin letters or in Bengali script, so search for both.",
      },
    ],
  },

  thai: {
    htmlLang: "th",
    title: "Thai TikTok Transcript: Thai Text From Any Video, Free (ภาษาไทย)",
    description:
      "Get the Thai (ภาษาไทย) text of any public TikTok free. Why Thai transcripts have no spaces, how loanwords and polite particles appear, and how to search them.",
    contextHeading: "What Thai TikTok is made of",
    context: [
      "Thai TikTok is made in Thailand and is heavy on beauty, food, comedy and selling: product reviews and live-selling clips push viewers to tap the shopping basket on screen. That makes Thai transcripts unusually useful for price checks and competitor research, because every price and offer is spoken aloud.",
      "Thai is also regionally varied. Speech from Isan in the northeast is close to Lao, and southern Thai sounds noticeably different from Bangkok Thai. A transcript records the variety that was spoken, and accuracy is highest on central Thai.",
    ],
    examples: [
      {
        line: "วันนี้จะมารีวิวลิปสติกนะคะ",
        english: "Today I'm going to review a lipstick",
        watch:
          "English loanwords are written in Thai script (รีวิว review, ลิปสติก lipstick), so searching the transcript for \"review\" in English finds nothing.",
      },
      {
        line: "ราคาแค่ 199 บาทเองค่ะ",
        english: "It's only 199 baht",
        watch:
          "Polite particles such as ค่ะ and ครับ end most sentences. They are correct transcription, and they mark the speaker's register; don't strip them before quoting.",
      },
      {
        line: "กดตะกร้าเลยค่ะ",
        english: "Tap the basket now",
        watch:
          "Selling calls to action repeat throughout live-selling clips. Searching for ตะกร้า (basket) finds every one.",
      },
    ],
    tips: [
      "Thai has no spaces between words, but searching still works: Ctrl-F matches any run of Thai characters.",
      "Search for loanwords in Thai script, not English: รีวิว, โปรโมชั่น, ออนไลน์.",
      "Check tone marks on key words before quoting. A wrong tone mark can change a word's meaning while looking almost identical.",
      "Brand names spoken in English may come back in Thai script or Latin letters; search for both spellings.",
    ],
    faq: [
      {
        question: "Why does a Thai TikTok transcript have no spaces between words?",
        answer:
          "Because written Thai has no spaces between words; spaces mark the ends of phrases or sentences. A Thai transcript with long unbroken runs of text is correct. It still searches, translates and pastes into AI tools normally.",
      },
      {
        question: "Can I search a Thai transcript for English words like \"review\"?",
        answer:
          "Usually not in English. Thai speakers use many English loanwords, but they are written in Thai script, so \"review\" appears as รีวิว. Search for the Thai spelling, and try both scripts for brand names.",
      },
    ],
  },

  russian: {
    htmlLang: "ru",
    title: "Russian TikTok Transcript: Cyrillic Text From Any Video (Русский)",
    description:
      "Get the Russian (Русский) text of any public TikTok free. Where Russian TikTok comes from since 2022, how to search inflected Cyrillic, and the ё trap to check.",
    contextHeading: "Where Russian-language TikTok comes from now",
    context: [
      "Russian-language TikTok works differently from other languages. In March 2022 TikTok paused livestreaming and new uploads in Russia in response to the country's \"fake news\" law, and in 2026 posting new videos from Russia is still restricted. Even so, Russia ranked seventh by TikTok ad reach in January 2025, with 56.0 million users (DataReportal).",
      "In practice that means two sources: a large back catalogue posted before 2022, and new videos from Russian-speaking creators outside Russia, in countries such as Kazakhstan, Belarus and Kyrgyzstan and across the diaspora. Expect regional accents and occasional words from Ukrainian, Belarusian or Kazakh.",
    ],
    examples: [
      {
        line: "Короче, сейчас расскажу вам один лайфхак",
        english: "Basically, I'm going to tell you a life hack",
        watch:
          "Anglicisms such as лайфхак are written in Cyrillic. The filler короче (\"basically\") is spoken constantly and is safe to cut before quoting.",
      },
      {
        line: "Это всё, что нужно знать",
        english: "That's all you need to know",
        watch:
          "ё is often written as е. Then всё (everything) and все (everyone) look identical, so read the whole sentence before quoting it.",
      },
      {
        line: "Подписывайтесь и ставьте лайк",
        english: "Subscribe and hit like",
        watch:
          "Russian words change their endings, so search for the stem: подпис finds подпишись, подписывайтесь and подписка.",
      },
    ],
    tips: [
      "Search by word stem, not the full word. Russian inflection means one word can have a dozen endings.",
      "Long monologues can arrive with little punctuation. Ask an AI tool to restore sentence breaks without changing any words.",
      "Check ё on words where it changes the meaning, such as всё and все.",
      "Videos from Ukraine, Belarus or Kazakhstan may switch languages mid-sentence; those lines are where errors cluster.",
    ],
    faq: [
      {
        question: "Can creators in Russia still post new TikTok videos?",
        answer:
          "Mostly not. TikTok paused new uploads and livestreams in Russia in March 2022, and in 2026 publishing from Russia is still restricted. Russian-language TikTok today is a mix of videos posted before 2022 and new videos from Russian speakers in other countries.",
      },
      {
        question: "Why can't I find a word in my Russian TikTok transcript with Ctrl-F?",
        answer:
          "Russian words change their endings by case, number and gender, so the exact form you type may not appear. Search for the stem instead, for example подпис for every form of \"subscribe\", and check whether ё was written as е.",
      },
    ],
  },

  german: {
    htmlLang: "de",
    title: "German TikTok Transcript: Deutsch Text From Any Video, Free",
    description:
      "Get the German (Deutsch) text of any public TikTok free. How compound nouns, Swiss German and Austrian videos come out in a transcript, and what to check.",
    contextHeading: "German TikTok across Germany, Austria and Switzerland",
    context: [
      "German-language TikTok spans Germany, Austria and Switzerland, and it skews toward dense, explain-it-fast content: personal finance and tax, careers, fitness, and study (Studium) advice. That is content worth reading rather than rewatching.",
      "Where the video comes from matters. Standard German (Hochdeutsch) transcribes very well. Austrian accents are usually fine. Swiss German is the big exception: it is a family of spoken dialects with no single standard spelling, so transcription tools tend to render it as approximate Standard German or mishear it.",
    ],
    examples: [
      {
        line: "Wie mache ich meine Steuererklärung?",
        english: "How do I do my tax return?",
        watch:
          "Long compounds such as Steuererklärung can come back split (Steuer Erklärung). Search for one part of the compound, not the whole word.",
      },
      {
        line: "Ich hab das gestern ausprobiert, voll krass",
        english: "I tried it yesterday, totally wild",
        watch:
          "Spoken contractions such as hab (for habe) are accurate transcription of speech, not errors to correct.",
      },
      {
        line: "Grüezi mitenand",
        english: "Hello everyone (Swiss German)",
        watch:
          "Swiss German has no standard spelling, so a greeting like this may be normalised toward Standard German or misheard. Check Swiss videos against the audio.",
      },
    ],
    tips: [
      "Search compound nouns by their parts: Steuer finds Steuererklärung and Steuer Erklärung.",
      "Swiss Standard German writes ss instead of ß, so Strasse and Straße are both correct; search for both.",
      "English loanwords are common in German TikTok (Content, Mindset, Gamechanger). Check their spelling before quoting.",
      "For dialect-heavy Bavarian or Swiss videos, treat the transcript as a draft and check every line you quote.",
    ],
    faq: [
      {
        question: "Does a German TikTok transcript work for Swiss German videos?",
        answer:
          "Only partly. Swiss German is a set of spoken dialects without a standard spelling, so transcription usually produces approximate Standard German or misheard words. Standard German and most Austrian videos transcribe far more reliably.",
      },
      {
        question: "Why is a German word split in two in my TikTok transcript?",
        answer:
          "German joins nouns into long compounds such as Steuererklärung, and speech recognition sometimes writes them as two words. The meaning is usually clear; join the parts back up before quoting, and search by one part of the compound.",
      },
    ],
  },

  nepali: {
    htmlLang: "ne",
    title: "Nepali TikTok Transcript: Devanagari Text From Any Video (नेपाली)",
    description:
      "Get the Nepali (नेपाली) text of any public TikTok free. TikTok's status in Nepal, telling Nepali from Hindi in a transcript, and digits and loanwords to check.",
    contextHeading: "TikTok in Nepal: blocked, back, and spared",
    context: [
      "Nepal blocked TikTok in November 2023 and lifted the ban in August 2024. When Nepal blocked 26 unregistered social media platforms in September 2025, TikTok was not among them, because it had already registered with the government; that wider ban was reversed days later after deadly protests.",
      "Nepali TikTok is made in Nepal and by the large Nepali workforce abroad, notably in the Gulf and Malaysia. Videos range from comedy and music to vlogs and news commentary, often in casual speech that mixes in English and Hindi.",
    ],
    examples: [
      {
        line: "आज म तपाईंहरूलाई एउटा नयाँ रेसिपी देखाउँछु",
        english: "Today I'll show you all a new recipe",
        watch:
          "Nepali verb endings such as -छु and -छ mark the line as Nepali. Hindi forms such as है in a Nepali video mean a misheard word or a switch into Hindi.",
      },
      {
        line: "दाइ, यो त एकदमै सस्तो छ",
        english: "Brother, this is really cheap",
        watch:
          "Kinship words such as दाइ (older brother) and दिदी (older sister) are everyday forms of address, not literal relationships. Keep them when translating.",
      },
      {
        line: "मूल्य जम्मा ५०० रुपैयाँ",
        english: "Only 500 rupees in total",
        watch:
          "Numbers may appear as Devanagari digits (५००) or Western digits (500). Normalise them before comparing videos.",
      },
    ],
    tips: [
      "Nepali and Hindi share the Devanagari script and much vocabulary. Check names and shared words are spelled the Nepali way.",
      "Captions on Nepali TikToks are often romanised Nepali; the transcript is a separate record of the speech.",
      "Search English loanwords in both scripts: रेसिपी and recipe.",
      "For an English version, translate the transcript; text translation handles code-mixed Nepali better than audio.",
    ],
    faq: [
      {
        question: "Is TikTok available in Nepal?",
        answer:
          "Yes. Nepal banned TikTok in November 2023 and lifted the ban in August 2024. TikTok was not among the 26 unregistered platforms Nepal blocked in September 2025, because it had already registered with the government.",
      },
      {
        question: "Why does my Nepali TikTok transcript contain Hindi words?",
        answer:
          "Either the speaker used Hindi, which is common in casual Nepali videos, or a Nepali word was misheard as its Hindi near-equivalent, since both languages use Devanagari and share vocabulary. Check those lines against the video before quoting.",
      },
    ],
  },
};
