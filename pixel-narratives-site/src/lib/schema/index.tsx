import type { ReactNode } from "react";

// ---------------------------------------------------------------------------
// JsonLd component — renders a single <script type="application/ld+json">
// containing a @graph array. Safe for server-side rendering, no hydration
// mismatch risk.
// ---------------------------------------------------------------------------

type JsonLdProps = {
  /** One or more schema objects to place inside @graph. */
  graph: Record<string, unknown>[];
};

/**
 * Renders structured data as a single `<script type="application/ld+json">`
 * block wrapping all entities in a `@graph` array.
 *
 * Usage:
 * ```tsx
 * <JsonLd graph={[organizationEntity(), founderEntity()]} />
 * ```
 */
export function JsonLd({ graph }: JsonLdProps): ReactNode {
  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload),
      }}
    />
  );
}

// Re-exports
export {
  organizationEntity,
  founderEntity,
  websiteEntity,
  homepageWebPageEntity,
  homepageGraph,
  buildAreaServed,
  ORG_ID,
  FOUNDER_ID,
  WEBSITE_ID,
  HOMEPAGE_ID,
} from "./organization";

export { buildWebPage, buildBreadcrumbs } from "./pages";
export { buildServicePageSchema } from "./services";
export { buildLocationPageGraph } from "./locations";
