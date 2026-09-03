import { SITE_URL } from "../siteMetadata";
import { ORG_ID, WEBSITE_ID } from "./organization";

// ---------------------------------------------------------------------------
// Generic WebPage entity builder
// ---------------------------------------------------------------------------

type WebPageOptions = {
  path: string;
  name: string;
  description?: string;
  /** Additional @type(s) to include, e.g. "AboutPage", "ContactPage". */
  additionalType?: string;
  /** Override mainEntity @id if the page has one. */
  mainEntity?: { "@id": string };
};

export function buildWebPage(options: WebPageOptions) {
  const url = options.path === "/" ? SITE_URL : `${SITE_URL}${options.path}`;
  const types: string[] = ["WebPage"];
  if (options.additionalType) types.push(options.additionalType);

  const entity: Record<string, unknown> = {
    "@type": types.length === 1 ? types[0] : types,
    "@id": `${url}#webpage`,
    url,
    name: options.name,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };

  if (options.description) {
    entity.description = options.description;
  }
  if (options.mainEntity) {
    entity.mainEntity = options.mainEntity;
  }

  return entity;
}

// ---------------------------------------------------------------------------
// BreadcrumbList builder
// ---------------------------------------------------------------------------

export function buildBreadcrumbs(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
