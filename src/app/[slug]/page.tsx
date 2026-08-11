import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostData, getRelatedPosts } from "@/lib/posts";
import {
  art,
  getAllLanguageSlugs,
  getLanguageByPageSlug,
  languageTitle,
  languageDescription,
  languageFaq,
  languageSteps,
} from "@/lib/languages";
import {
  isLibraryIntent,
  isPillar,
  MASTER_PILLAR_SLUG,
  MASTER_PILLAR_TITLE,
} from "@/lib/clusters";
import LanguageArticle from "@/components/LanguageArticle";
import LibraryCTA from "@/components/LibraryCTA";
import RelatedPosts from "@/components/RelatedPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

const SITE_URL = "https://blog.transcribetok.com";
const DEFAULT_OG = { url: "/og-default.png", width: 1200, height: 630 };

export async function generateStaticParams() {
  const slugs = getAllPostSlugs().map((s) => ({ slug: s.slug }));
  const langSlugs = getAllLanguageSlugs().map((slug) => ({ slug }));
  return [...slugs, ...langSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const lang = getLanguageByPageSlug(slug);
  if (lang) {
    return {
      title: languageTitle(lang),
      description: languageDescription(lang),
      keywords: [
        `${lang.name.toLowerCase()} tiktok transcript`,
        `tiktok transcript ${lang.name.toLowerCase()}`,
        `${lang.name.toLowerCase()} tiktok to text`,
        `download ${lang.name.toLowerCase()} tiktok transcript`,
      ],
      alternates: { canonical: `${SITE_URL}/${slug}` },
      openGraph: {
        title: languageTitle(lang),
        description: languageDescription(lang),
        type: "article",
        url: `${SITE_URL}/${slug}`,
        images: [DEFAULT_OG],
      },
      twitter: {
        card: "summary_large_image",
        title: languageTitle(lang),
        description: languageDescription(lang),
        images: [DEFAULT_OG.url],
      },
    };
  }

  try {
    const post = await getPostData(slug);
    const ogImages = post.ogImage
      ? [{ url: post.ogImage, width: 1200, height: 630 }]
      : [DEFAULT_OG];
    return {
      title: post.title,
      description: post.description,
      keywords: post.keywords,
      authors: [{ name: post.author }],
      alternates: { canonical: `${SITE_URL}/${slug}` },
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
        authors: [post.author],
        url: `${SITE_URL}/${slug}`,
        images: ogImages,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [ogImages[0].url],
      },
    };
  } catch {
    return { title: "Article Not Found" };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  // --- Programmatic language page ------------------------------------------
  const lang = getLanguageByPageSlug(slug);
  if (lang) {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: languageTitle(lang),
      description: languageDescription(lang),
      author: { "@type": "Organization", name: "TranscribeTok" },
      publisher: {
        "@type": "Organization",
        name: "TranscribeTok",
        url: "https://transcribetok.com",
      },
      mainEntityOfPage: `${SITE_URL}/${slug}`,
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: languageFaq(lang).map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    };
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How to get ${art(lang.name)} ${lang.name} TikTok transcript`,
      step: languageSteps(lang).map((step) => ({
        "@type": "HowToStep",
        name: step.name,
        text: step.text,
      })),
    };
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <LanguageArticle lang={lang} />
      </>
    );
  }

  // --- Markdown post --------------------------------------------------------
  let post;
  try {
    post = await getPostData(slug);
  } catch {
    notFound();
  }

  const related = getRelatedPosts(slug, 4);
  const showLibrary = isLibraryIntent(post);
  const showBreadcrumb = !isPillar(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "TranscribeTok" },
    publisher: {
      "@type": "Organization",
      name: "TranscribeTok",
      url: "https://transcribetok.com",
    },
    mainEntityOfPage: `${SITE_URL}/${slug}`,
  };

  const breadcrumbSchema = showBreadcrumb
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: MASTER_PILLAR_TITLE,
            item: `${SITE_URL}/${MASTER_PILLAR_SLUG}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${SITE_URL}/${slug}`,
          },
        ],
      }
    : null;

  const faqSchema =
    post.faqItems && post.faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  const howToSchema =
    post.howToSteps && post.howToSteps.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: post.howToName || post.title,
          step: post.howToSteps.map((step) => ({
            "@type": "HowToStep",
            name: step.name,
            text: step.text,
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
        >
          ← All Articles
        </Link>

        <header className="mb-10">
          {showBreadcrumb && (
            <p className="mb-3 text-sm text-gray-400">
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>{" "}
              ›{" "}
              <Link
                href={`/${MASTER_PILLAR_SLUG}`}
                className="hover:text-rose-600"
              >
                {MASTER_PILLAR_TITLE}
              </Link>
            </p>
          )}
          <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
            <span className="bg-rose-50 text-rose-700 font-semibold px-2 py-0.5 rounded-full text-xs">
              {post.category}
            </span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            {post.description}
          </p>
        </header>

        <div className="bg-rose-50 border border-rose-100 rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-900 text-sm">
              Get any TikTok transcript instantly
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

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {showLibrary && <LibraryCTA />}

        <RelatedPosts posts={related} />

        <div className="mt-16 border-t border-gray-100 pt-10 text-center">
          <p className="text-lg font-bold text-gray-900 mb-2">
            Ready to get your TikTok transcript?
          </p>
          <p className="text-sm text-gray-500 mb-5">
            Paste any TikTok link and get the full text in seconds — two free
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

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-rose-600 transition-colors"
          >
            ← Browse all TikTok transcript guides
          </Link>
        </div>
      </article>
    </>
  );
}
