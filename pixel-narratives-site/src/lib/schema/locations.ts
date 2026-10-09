import type { ServiceAreaPlace } from "../businessLocation";
import { SITE_URL } from "../siteMetadata";
import { ORG_ID, buildAreaServed } from "./organization";
import { buildBreadcrumbs, buildWebPage } from "./pages";

type LocationPageInput = {
  slug: string;
  name: string;
  description: string;
  breadcrumbName: string;
  areaServed: ServiceAreaPlace[];
  faqs: Array<{ question: string; answer: string }>;
};

export function buildLocationPageGraph(input: LocationPageInput) {
  const path = `/${input.slug}`;
  const url = `${SITE_URL}${path}`;
  const serviceId = `${url}#service`;

  const service = {
    "@type": "Service" as const,
    "@id": serviceId,
    name: input.name,
    url,
    description: input.description,
    serviceType: [
      "AI Implementation",
      "AI Team Training",
      "Websites and Online Visibility",
      "Marketing",
      "Fractional AI Leadership",
    ],
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
    { name: "Locations", path: "/serving-the-south" },
    { name: input.breadcrumbName, path },
  ]);

  const faqPage = {
    "@type": "FAQPage" as const,
    "@id": `${url}#faq`,
    mainEntity: input.faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };

  return [service, webPage, breadcrumbs, faqPage];
}
