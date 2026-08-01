import { MetadataRoute } from "next";
import { getSortedPostsData } from "@/lib/posts";
import { getAllLanguageSlugs } from "@/lib/languages";

const SITE_URL = "https://blog.transcribetok.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const languageEntries: MetadataRoute.Sitemap = getAllLanguageSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...postEntries,
    ...languageEntries,
  ];
}
