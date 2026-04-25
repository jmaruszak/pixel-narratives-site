import type { MetadataRoute } from "next";
import { landingPageSlugs } from "../lib/seoLandingPages";

const baseUrl = "https://pixelnarratives.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "about",
    "projects",
    "intelligence-layer",
    "contact",
    "privacy",
    "how-to-use-ai-in-your-business",
    "ai-readiness-assessment",
  ];
  const routes = [...staticRoutes, ...landingPageSlugs];

  return routes.map((route) => ({
    url: route ? `${baseUrl}/${route}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.8 : 1,
  }));
}
