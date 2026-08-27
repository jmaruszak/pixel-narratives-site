import type { MetadataRoute } from "next";
import { locationLandingSlugs } from "../lib/locationLandingPages";
import { NEWS_ITEMS, newsPath } from "../lib/news";
import { landingPageSlugs } from "../lib/seoLandingPages";

const baseUrl = "https://pixelnarratives.studio";

/** Stable “recent update” timestamps for crawl hints (build-time homepage uses current date separately). */
const LASTMOD_MAIN_BUSINESS = new Date("2026-05-19T00:00:00.000Z");
const LASTMOD_SEO = new Date("2026-02-04T00:00:00.000Z");
const LASTMOD_ABOUT_CONTACT = new Date("2026-05-19T00:00:00.000Z");
const LASTMOD_LOCATION = new Date("2026-08-27T00:00:00.000Z");
const LASTMOD_NEWS = new Date("2026-08-24T00:00:00.000Z");
const LASTMOD_OLD_STATIC = new Date("2025-06-02T00:00:00.000Z");

const newsRoutes = ["news", ...NEWS_ITEMS.map((item) => newsPath(item).slice(1))];



function isEducationalHowTo(route: string): boolean {
  return (
    route === "how-to-use-ai-in-your-business" ||
    route === "visibility-in-the-age-of-ai" ||
    route.startsWith("how-to-")
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "about",
    "automation",
    "training",
    "websites",
    "marketing",
    "work",
    "sample-implementation-assessment",
    "contact",
    "privacy",
    "how-to-use-ai-in-your-business",
    "visibility-in-the-age-of-ai",
    "ai-readiness-assessment",
    "serving-the-south",
    ...newsRoutes,
    ...locationLandingSlugs,
  ];
  const routes = [...staticRoutes, ...landingPageSlugs];

  const pages = routes.map((route) => {
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
    } else if (
      route === "automation" ||
      route === "training" ||
      route === "websites" ||
      route === "marketing" ||
      route === "work" ||
      route === "sample-implementation-assessment" ||
      route === "ai-readiness-assessment"
    ) {
      lastModified = LASTMOD_MAIN_BUSINESS;
      changeFrequency = "monthly";
      priority = 0.9;
    } else if (
      route === "serving-the-south" ||
      locationLandingSlugs.includes(route)
    ) {
      lastModified = LASTMOD_LOCATION;
      changeFrequency = "monthly";
      priority = 0.75;
    } else if (route === "about") {
      lastModified = LASTMOD_NEWS;
      changeFrequency = "monthly";
      priority = 0.5;
    } else if (route === "news" || route.startsWith("news/")) {
      lastModified = LASTMOD_NEWS;
      changeFrequency = "monthly";
      priority = route === "news" ? 0.55 : 0.5;
    } else if (route === "contact") {
      lastModified = LASTMOD_ABOUT_CONTACT;
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

  return pages;
}
