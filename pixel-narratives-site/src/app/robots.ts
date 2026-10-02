import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "*",
          "OAI-SearchBot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Google-Extended",
          "ClaudeBot",
        ],
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://pixelnarratives.studio/sitemap.xml",
  };
}
