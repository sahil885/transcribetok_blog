import type { Metadata } from "next";
import Link from "next/link";
import { getSortedPostsData, type PostMeta } from "@/lib/posts";
import { CLUSTERS, chipColorForCategory, PILLAR_SLUGS } from "@/lib/clusters";
import { LANGUAGES, languagePageSlug } from "@/lib/languages";

export const metadata: Metadata = {
  title: "TranscribeTok Blog — TikTok Transcript Guides & Tips",
  description:
    "Free step-by-step guides on getting TikTok transcripts, transcribing videos in bulk, using them with ChatGPT, and downloading as TXT, DOCX or SRT.",
  alternates: { canonical: "https://blog.transcribetok.com" },
};

function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="group flex flex-col border border-gray-100 rounded-2xl p-6 hover:border-rose-200 hover:shadow-sm transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${chipColorForCategory(
            post.category
          )}`}
        >
          {post.category}
        </span>
        <span className="text-xs text-gray-400">{post.readingTime}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-rose-600 transition-colors mb-2 leading-snug">
        {post.title}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-3 flex-1">
        {post.description}
      </p>
    </Link>
  );
}

export default function Home() {
  const posts = getSortedPostsData();
  const pillarPosts = PILLAR_SLUGS.map((s) =>
    posts.find((p) => p.slug === s)
  ).filter((p): p is PostMeta => Boolean(p));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Hero */}
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          TikTok Transcript Guides
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Free, practical guides on getting, downloading, and using TikTok
          transcripts — for creators, marketers, and AI users.
        </p>
        <a
          href="https://transcribetok.com"
          className="inline-flex items-center gap-2 mt-6 text-white font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-90 text-sm"
          style={{ backgroundColor: "var(--brand)" }}
        >
          Try TranscribeTok — 2 Free Transcripts Daily →
        </a>
      </div>

      {/* Start Here — pillar / main pages */}
      {pillarPosts.length > 0 && (
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Start Here</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              The complete guides to TikTok transcripts — start with these.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {pillarPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group flex flex-col border-2 border-rose-100 bg-rose-50/40 rounded-2xl p-6 hover:border-rose-300 hover:shadow-sm transition-all"
              >
                <span className="self-start text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 mb-3">
                  Complete Guide
                </span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-rose-600 transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 flex-1">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Clustered sections (pillars excluded so they don't appear twice) */}
      {CLUSTERS.map((cluster) => {
        const clusterPosts = posts.filter(
          (p) =>
            cluster.categories.includes(p.category) &&
            !PILLAR_SLUGS.includes(p.slug)
        );
        if (clusterPosts.length === 0) return null;
        return (
          <section key={cluster.key} className="mb-16">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {cluster.title}
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl">{cluster.blurb}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {clusterPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Browse by language (programmatic pages) */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">By Language</h2>
          <p className="text-sm text-gray-500 max-w-2xl">
            Get a TikTok transcript in your language — free, no signup.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((l) => (
            <Link
              key={l.slug}
              href={`/${languagePageSlug(l)}`}
              className="text-sm border border-gray-200 rounded-full px-4 py-2 text-gray-700 hover:border-rose-200 hover:text-rose-600 transition-colors"
            >
              {l.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Bulk handoff — the product differentiator */}
      <div className="mb-16 bg-cyan-50 border border-cyan-100 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h2 className="text-xl font-bold text-cyan-900 mb-1">
            Researching a whole account, not one video?
          </h2>
          <p className="text-sm text-cyan-800/90 max-w-xl">
            TranscribeTok transcribes 100+ TikToks in a single pass and keeps
            every transcript in a searchable library — built for competitor
            research and content planning at scale.
          </p>
        </div>
        <a
          href="https://transcribetok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
        >
          Transcribe in bulk →
        </a>
      </div>

      {/* CTA Banner */}
      <div className="bg-rose-50 border border-rose-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Ready to get your transcript?
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Paste any TikTok link and get the full transcript in seconds. Two free
          every day, no account required.
        </p>
        <a
          href="https://transcribetok.com"
          className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--brand)" }}
        >
          Get Your TikTok Transcript →
        </a>
      </div>
    </div>
  );
}
