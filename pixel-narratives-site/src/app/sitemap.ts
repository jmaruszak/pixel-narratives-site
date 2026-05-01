import type { MetadataRoute } from "next";
import { landingPageSlugs } from "../lib/seoLandingPages";

const baseUrl = "https://pixelnarratives.studio";

/** Stable “recent update” timestamps for crawl hints (build-time homepage uses current date separately). */
const LASTMOD_MAIN_BUSINESS = new Date("2026-03-18T00:00:00.000Z");
const LASTMOD_SEO = new Date("2026-02-04T00:00:00.000Z");
const LASTMOD_OLD_STATIC = new Date("2025-06-02T00:00:00.000Z");



function isEducationalHowTo(route: string): boolean {
  return (
    route === "how-to-use-ai-in-your-business" ||
    route.startsWith("how-to-")
  );
}

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

  return routes.map((route) => {
    let lastModified: Date;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    let priority: number;

    if (!route) {
      lastModified = new Date();
      changeFrequency = "weekly";
      priority = 1.0;
    } else if (route === "privacy") {
      lastModified = LASTMOD_OLD_STATIC;
      changeFrequency = "yearly";
      priority = 0.3;
    } else if (route === "intelligence-layer" || route === "ai-readiness-assessment") {
      lastModified = LASTMOD_MAIN_BUSINESS;
      changeFrequency = "monthly";
      priority = 0.9;
    } else if (route === "about") {
      lastModified = LASTMOD_OLD_STATIC;
      changeFrequency = "monthly";
      priority = 0.5;
    } else if (route === "contact") {
      lastModified = LASTMOD_OLD_STATIC;
      changeFrequency = "monthly";
      priority = 0.6;
    } else if (isEducationalHowTo(route)) {
      lastModified = LASTMOD_SEO;
      changeFrequency = "monthly";
      priority = 0.7;
    } else {
      lastModified = LASTMOD_SEO;
      changeFrequency = "monthly";
      priority = 0.8;
    }

    return {
      url: route ? `${baseUrl}/${route}` : baseUrl,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
