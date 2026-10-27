import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
} from "./siteMetadata";
import { ORG_ID, WEBSITE_ID } from "./schema/organization";
import { buildBreadcrumbs } from "./schema/pages";

export type NewsCoverageType = "press-release" | "media-coverage";

export type NewsQuote = {
  text: string;
  attribution: string;
};

export type NewsItem = {
  slug: string;
  type: NewsCoverageType;
  typeLabel: string;
  title: string;
  datePublished: string;
  dateModified: string;
  dateLabel: string;
  source: string;
  externalUrl?: string;
  externalLinkLabel?: string;
  indexSummary: string;
  indexCtaLabel: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  sourceLine: string;
  deck?: string;
  dateline?: string;
  closingNote: string;
  schemaType: "NewsArticle" | "Article";
  citationHeadline: string;
  originalAuthor?: string;
  quote?: NewsQuote;
};

const NEWS_DATE = "2026-08-24";
const NEWS_DATE_MODIFIED = "2026-08-27";
const NEWS_DATE_LABEL = "August 24, 2026";

export const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "from-unexpected-setback-to-ai-entrepreneur",
    type: "press-release",
    typeLabel: "Press Release",
    title:
      "From Unexpected Setback to AI Entrepreneur: Madison Business Owner Publishes First Book",
    datePublished: "2026-10-27",
    dateModified: "2026-10-27",
    dateLabel: "October 27, 2026",
    source: "Pixel Narratives",
    indexSummary:
      "Pixel Narratives founder Jordan Maruszak shares how an unexpected journey into AI inspired a new business and a book about what's possible.",
    indexCtaLabel: "Read the announcement →",
    metaTitle:
      "From Unexpected Setback to AI Entrepreneur: Madison Business Owner Publishes First Book",
    metaDescription:
      "Pixel Narratives founder Jordan Maruszak shares how an unexpected journey into AI inspired a new business and a book about what's possible.",
    kicker: "Press Release · October 27, 2026",
    sourceLine: "Pixel Narratives",
    deck: "Pixel Narratives founder Jordan Maruszak shares how an unexpected journey into AI inspired a new business and a book about what's possible.",
    dateline: "MADISON, Miss., October 27, 2026",
    closingNote: "Published by Pixel Narratives on October 27, 2026.",
    schemaType: "NewsArticle",
    citationHeadline:
      "From Unexpected Setback to AI Entrepreneur: Madison Business Owner Publishes First Book",
  },
  {
    slug: "pixel-narratives-brings-ai-implementation-services-to-mississippi-businesses",
    type: "press-release",
    typeLabel: "Press Release",
    title:
      "Pixel Narratives Brings AI Implementation Services to Mississippi Businesses",
    datePublished: NEWS_DATE,
    dateModified: NEWS_DATE_MODIFIED,
    dateLabel: NEWS_DATE_LABEL,
    source: "EIN Presswire",
    externalUrl:
      "https://www.einpresswire.com/article/934966947/pixel-narratives-brings-ai-implementation-services-to-mississippi-businesses",
    externalLinkLabel: "View the distributed release on EIN Presswire →",
    indexSummary:
      "A Pixel Narratives company announcement, distributed via EIN Presswire, on AI implementation for small and midsize businesses in Mississippi and the Southeast.",
    indexCtaLabel: "Read the announcement →",
    metaTitle:
      "Pixel Narratives Brings AI Implementation Services to Mississippi Businesses",
    metaDescription:
      "Pixel Narratives, based in Madison, Mississippi, announced AI implementation services for small and midsize businesses, covering automation, training, websites, marketing, and Fractional Chief AI Officer support.",
    kicker: "Press Release · August 24, 2026",
    sourceLine: "Distributed via EIN Presswire",
    dateline: "MADISON, Mississippi | August 24, 2026",
    closingNote:
      "This release was distributed August 24, 2026 via EIN Presswire.",
    schemaType: "NewsArticle",
    citationHeadline:
      "Pixel Narratives Brings AI Implementation Services to Mississippi Businesses",
    quote: {
      text: "We look at how a business operates, where the opportunities are, and where AI can make a measurable difference.",
      attribution: "Jordan Maruszak, Founder, Pixel Narratives",
    },
  },
  {
    slug: "pixel-narratives-featured-business-news-info",
    type: "media-coverage",
    typeLabel: "Media Coverage",
    title: "Pixel Narratives Featured by Business News & Info",
    datePublished: NEWS_DATE,
    dateModified: NEWS_DATE_MODIFIED,
    dateLabel: NEWS_DATE_LABEL,
    source: "Business News & Info",
    externalUrl:
      "https://businessnewsandinfo.com/spotlight/pixel-narratives-launches-ai-integration-southeast",
    externalLinkLabel: "Read the full Business Spotlight →",
    indexSummary:
      "Business Spotlight coverage examining Pixel Narratives' approach to practical AI implementation for small and midsize businesses.",
    indexCtaLabel: "Read the recap →",
    metaTitle: "Pixel Narratives Featured by Business News & Info",
    metaDescription:
      "A Pixel Narratives recap of Business News & Info's Business Spotlight on the company's practical approach to AI implementation for small and midsize businesses in Mississippi and the Southeast.",
    kicker: "Media Coverage · August 24, 2026",
    sourceLine: "Business News & Info · Business Spotlight · Daniel Hartley",
    deck: "Business News & Info examines Pixel Narratives’ practical approach to AI implementation for small and midsize businesses across Mississippi and the Southeast.",
    closingNote:
      "Originally published by Business News & Info on August 24, 2026.",
    schemaType: "Article",
    citationHeadline:
      "Pixel Narratives Launches AI Integration for Southeast Businesses",
    originalAuthor: "Daniel Hartley",
  },
];

export const NEWS_INDEX_PATH = "/news";

export function getNewsItem(slug: string): NewsItem | undefined {
  return NEWS_ITEMS.find((item) => item.slug === slug);
}

export function requireNewsItem(slug: string): NewsItem {
  const item = getNewsItem(slug);
  if (!item) {
    throw new Error(`Missing news item: ${slug}`);
  }
  return item;
}

export function newsPath(item: NewsItem): string {
  return `${NEWS_INDEX_PATH}/${item.slug}`;
}

export function newsUrl(item: NewsItem): string {
  return `${SITE_URL}${newsPath(item)}`;
}

export function buildNewsIndexGraph() {
  const indexUrl = `${SITE_URL}${NEWS_INDEX_PATH}`;

  return [
    {
      "@type": ["WebPage", "CollectionPage"] as const,
      "@id": `${indexUrl}#webpage`,
      name: "News & Media",
      description:
        "Press releases and media coverage about Pixel Narratives, a Madison, Mississippi AI implementation company.",
      url: indexUrl,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      mainEntity: { "@id": `${indexUrl}#list` },
    },
    {
      "@type": "ItemList" as const,
      "@id": `${indexUrl}#list`,
      name: "Pixel Narratives news and media coverage",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: NEWS_ITEMS.length,
      itemListElement: NEWS_ITEMS.map((item, index) => ({
        "@type": "ListItem" as const,
        position: index + 1,
        name: item.title,
        url: newsUrl(item),
      })),
    },
  ];
}

export function buildNewsArticleGraph(item: NewsItem) {
  const url = newsUrl(item);
  const imageUrl = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  const citation = item.externalUrl
    ? item.type === "press-release"
      ? {
          "@type": "NewsArticle" as const,
          headline: item.citationHeadline,
          name: item.citationHeadline,
          url: item.externalUrl,
          datePublished: item.datePublished,
          author: { "@id": ORG_ID },
          publisher: {
            "@type": "Organization" as const,
            name: item.source,
          },
        }
      : {
          "@type": "Article" as const,
          headline: item.citationHeadline,
          name: item.citationHeadline,
          url: item.externalUrl,
          datePublished: item.datePublished,
          author: {
            "@type": "Person" as const,
            name: item.originalAuthor ?? item.source,
          },
          publisher: {
            "@type": "Organization" as const,
            name: item.source,
          },
        }
    : undefined;

  return [
    {
      "@type": item.schemaType,
      headline: item.title,
      description: item.metaDescription,
      datePublished: item.datePublished,
      dateModified: item.dateModified,
      url,
      image: imageUrl,
      articleSection: item.typeLabel,
      mainEntityOfPage: {
        "@type": "WebPage" as const,
        "@id": url,
      },
      publisher: { "@id": ORG_ID },
      author: { "@id": ORG_ID },
      about: { "@id": ORG_ID },
      ...(citation ? { citation } : {}),
    },
    {
      "@type": "WebPage" as const,
      "@id": `${url}#webpage`,
      url,
      name: item.title,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
    },
    buildBreadcrumbs([
      { name: "Home", path: "/" },
      { name: "News", path: "/news" },
      { name: item.title, path: newsPath(item) },
    ]),
  ];
}
