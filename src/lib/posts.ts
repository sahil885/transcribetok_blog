import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
  keywords: string[];
  ogImage?: string;
  faqItems?: FaqItem[];
  howToSteps?: HowToStep[];
  howToName?: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

export function getSortedPostsData(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...(matterResult.data as Omit<PostMeta, "slug">),
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    contentHtml,
    ...(matterResult.data as Omit<PostMeta, "slug">),
  };
}

// --- Related posts -----------------------------------------------------------
// Scores every other post by category match + shared keywords + slug-token
// overlap, then returns the top matches. Powers the "Related guides" block
// and sitewide internal interlinking (concentrates topical authority).

export function getRelatedPosts(slug: string, limit = 4): PostMeta[] {
  const all = getSortedPostsData();
  const current = all.find((p) => p.slug === slug);
  const others = all.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, limit);

  const currentKeywords = new Set(
    (current.keywords || []).map((k) => k.toLowerCase().trim())
  );
  const currentTokens = new Set(
    current.slug.split("-").filter((t) => t.length > 3)
  );

  const scored = others.map((p) => {
    let score = 0;
    if (p.category === current.category) score += 3;
    for (const k of (p.keywords || []).map((x) => x.toLowerCase().trim())) {
      if (currentKeywords.has(k)) score += 2;
    }
    for (const t of p.slug.split("-")) {
      if (t.length > 3 && currentTokens.has(t)) score += 1;
    }
    return { p, score };
  });

  scored.sort(
    (a, b) => b.score - a.score || (a.p.date < b.p.date ? 1 : -1)
  );

  return scored.slice(0, limit).map((s) => s.p);
}
