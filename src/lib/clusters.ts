// Cluster definitions: map the (slightly inconsistent) post categories into
// display clusters used by the homepage and related-posts logic.

export interface Cluster {
  key: string;
  title: string;
  blurb: string;
  categories: string[];
  color: string;
}

export const CLUSTERS: Cluster[] = [
  {
    key: "how-to",
    title: "How-To & Guides",
    blurb:
      "Step-by-step guides to get, copy, download, and convert TikTok transcripts — free, no signup, works on mobile.",
    categories: ["How-To", "How-To Guides", "Guide"],
    color: "bg-rose-50 text-rose-700",
  },
  {
    key: "ai-tools",
    title: "AI Tools",
    blurb:
      "Feed TikTok transcripts into ChatGPT, Claude, Gemini, Perplexity and more for instant summaries, hooks, and scripts.",
    categories: ["AI Tools"],
    color: "bg-orange-50 text-orange-700",
  },
  {
    key: "use-cases",
    title: "Use Cases",
    blurb:
      "How creators, marketers, agencies, and researchers put TikTok transcripts to work.",
    categories: ["Use Cases"],
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    key: "workflows",
    title: "Integrations & Workflows",
    blurb:
      "Turn TikTok transcripts into Notion notes, blog posts, newsletters, subtitles, and repurposed content.",
    categories: ["Productivity", "Content Creation", "Developer Guides"],
    color: "bg-violet-50 text-violet-700",
  },
  {
    key: "comparisons",
    title: "Comparisons",
    blurb:
      "Honest, side-by-side comparisons of TranscribeTok vs other TikTok transcript and captioning tools.",
    categories: ["Comparison", "Comparisons"],
    color: "bg-cyan-50 text-cyan-700",
  },
];

export function clusterForCategory(category: string): Cluster {
  return CLUSTERS.find((c) => c.categories.includes(category)) ?? CLUSTERS[0];
}

export function chipColorForCategory(category: string): string {
  return clusterForCategory(category).color;
}

// --- Repeat-use / library intent ---------------------------------------------
// Readers of these posts transcribe more than one video over time, so the
// relevant upgrade is the saved transcript library (a paid feature) rather
// than the free two-a-day allowance. They get a context-specific CTA.

const LIBRARY_SLUG_RE =
  /(creators|marketers|agency|research|repurpose|workflow)/i;

export function isLibraryIntent(post: {
  slug: string;
  category: string;
}): boolean {
  return post.category === "Use Cases" || LIBRARY_SLUG_RE.test(post.slug);
}

// --- Pillar / hub pages ------------------------------------------------------
export const MASTER_PILLAR_SLUG = "tiktok-transcript-generator";
export const MASTER_PILLAR_TITLE = "TikTok Transcript Generator";

export const PILLAR_SLUGS: string[] = [
  "tiktok-transcript-generator",
  "tiktok-to-text",
  "transcribe-tiktok-video",
  "download-tiktok-transcript",
];

export function isPillar(slug: string): boolean {
  return PILLAR_SLUGS.includes(slug);
}
