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
          "anthropic-ai",
          "Applebot-Extended",
          "Bytespider",
        ],
        allow: ["/", "/llms.txt"],
        disallow: "/api/",
      },
    ],
    sitemap: "https://pixelnarratives.studio/sitemap.xml",
    host: "https://pixelnarratives.studio",
  };
}
