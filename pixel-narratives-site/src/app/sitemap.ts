import type { MetadataRoute } from "next";
import { landingPageSlugs } from "../lib/seoLandingPages";

const baseUrl = "https://pixelnarratives.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "projects", "intelligence-layer", "contact"];
  const routes = [...staticRoutes, ...landingPageSlugs];

  return routes.map((route) => ({
    url: route ? `${baseUrl}/${route}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.8 : 1,
  }));
}
