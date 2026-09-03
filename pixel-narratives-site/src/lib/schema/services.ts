import { SITE_URL } from "../siteMetadata";
import { ORG_ID, buildAreaServed } from "./organization";

// ---------------------------------------------------------------------------
// Service page schema builder
// ---------------------------------------------------------------------------

type ServicePageInput = {
  path: string;
  name: string;
  description: string;
  serviceType: string;
};

/**
 * Build a Service entity for a dedicated service page.
 * Uses `PAGE_URL#service` as the canonical @id.
 */
export function buildServicePageSchema(input: ServicePageInput) {
  const url = `${SITE_URL}${input.path}`;
  return {
    "@type": "Service" as const,
    "@id": `${url}#service`,
    name: input.name,
    url,
    description: input.description,
    serviceType: input.serviceType,
    provider: { "@id": ORG_ID },
    areaServed: buildAreaServed(),
  };
}
