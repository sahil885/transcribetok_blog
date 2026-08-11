import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // Explicitly welcome the AI crawlers. Bing's index is what ChatGPT search
    // reads from, and GPTBot/ClaudeBot/PerplexityBot fetch pages directly for
    // citation. None of them are blocked by the wildcard rule, but naming them
    // makes the intent legible to anyone auditing this file later.
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "bingbot", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: "https://blog.transcribetok.com/sitemap.xml",
  };
}
