import type { ServiceAreaPlace } from "../businessLocation";
import { SITE_URL } from "../siteMetadata";
import { ORG_ID, buildAreaServed } from "./organization";
import { buildBreadcrumbs, buildWebPage } from "./pages";

// ---------------------------------------------------------------------------
// Location landing page graph builder
// ---------------------------------------------------------------------------

type LocationPageInput = {
  slug: string;
  name: string;
  description: string;
  breadcrumbName: string;
  areaServed: ServiceAreaPlace[];
  serviceType?: string[];
  faqs?: Array<{ question: string; answer: string }>;
};

/**
 * Build the full @graph array for a geographic landing page.
 * Returns: Service + WebPage + BreadcrumbList + optional FAQPage.
 * The Service is the page's mainEntity. No fake LocalBusiness.
 */
export function buildLocationPageGraph(input: LocationPageInput) {
  const path = `/${input.slug}`;
  const url = `${SITE_URL}${path}`;
  const serviceId = `${url}#service`;

  const serviceTypes = input.serviceType ?? [
    "AI Consulting",
    "AI Implementation",
    "Business Process Automation",
    "AI Training",
    "Fractional Chief AI Officer",
  ];

  const service = {
    "@type": "Service" as const,
    "@id": serviceId,
    name: input.name,
    url,
    description: input.description,
    serviceType: serviceTypes,
    provider: { "@id": ORG_ID },
    areaServed: buildAreaServed(input.areaServed),
  };

  const webPage = buildWebPage({
    path,
    name: input.name,
    description: input.description,
    mainEntity: { "@id": serviceId },
  });

  const breadcrumbs = buildBreadcrumbs([
    { name: "Home", path: "/" },
    { name: "Serving the South", path: "/serving-the-south" },
    { name: input.breadcrumbName, path },
  ]);

  const graph: Record<string, unknown>[] = [service, webPage, breadcrumbs];

  if (input.faqs && input.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage" as const,
      mainEntity: input.faqs.map((faq) => ({
        "@type": "Question" as const,
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: faq.answer,
        },
      })),
    });
  }

  return graph;
}
