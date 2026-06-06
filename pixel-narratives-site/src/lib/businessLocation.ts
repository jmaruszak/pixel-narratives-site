import { SITE_NAME, SITE_URL } from "./siteMetadata";

export const CONTACT_EMAIL = "hello@pixelnarratives.studio";
export const CONTACT_PHONE = "904-524-7269";
export const CONTACT_PHONE_TEL = "+19045247269";
export const CALENDLY_URL = "https://calendly.com/pixelnarratives";

export const HEADQUARTERS = {
  locality: "Madison",
  region: "MS",
  country: "US",
} as const;

export type ServiceAreaPlace = {
  type: "City" | "State" | "AdministrativeArea";
  name: string;
  region?: string;
};

export const SERVICE_AREA_PRIMARY: ServiceAreaPlace[] = [
  { type: "State", name: "Mississippi" },
  { type: "City", name: "Birmingham", region: "AL" },
  { type: "City", name: "Mobile", region: "AL" },
  { type: "AdministrativeArea", name: "Florida Panhandle", region: "FL" },
  { type: "City", name: "Jacksonville", region: "FL" },
  { type: "City", name: "Memphis", region: "TN" },
];

export const SERVICE_AREA_HUB_MENTIONS: ServiceAreaPlace[] = [
  { type: "City", name: "Oxford", region: "MS" },
  { type: "City", name: "Gulfport", region: "MS" },
  { type: "City", name: "Nashville", region: "TN" },
  { type: "City", name: "New Orleans", region: "LA" },
];

export const ORGANIZATION_DESCRIPTION =
  "Pixel Narratives helps businesses with visibility, attention, and implementation through Web Intelligence, Narrative Intelligence, and Business Intelligence.";

export const SERVICE_PILLARS = [
  {
    eyebrow: "Visibility",
    headline: "Web Intelligence",
    outcome: "Get found.",
    body: "Be found by customers and AI. Uncover visibility gaps and see where your website helps or holds back growth.",
    href: "/web-intelligence",
  },
  {
    eyebrow: "Attention",
    headline: "Narrative Intelligence",
    outcome: "Get chosen.",
    body: "Create campaigns, content, and experiences designed to earn attention and stay memorable.",
    href: "/narrative-intelligence",
  },
  {
    eyebrow: "Implementation",
    headline: "Business Intelligence",
    outcome: "Get results.",
    body: "Implement AI, workflows, and operational systems built to deliver measurable results.",
    href: "/intelligence-layer",
  },
] as const;

function formatPlaceLabel(place: ServiceAreaPlace): string {
  return place.region ? `${place.name}, ${place.region}` : place.name;
}

export function buildPostalAddressSchema() {
  return {
    "@type": "PostalAddress",
    addressLocality: HEADQUARTERS.locality,
    addressRegion: HEADQUARTERS.region,
    addressCountry: HEADQUARTERS.country,
  };
}

export function buildAreaServedSchema(places: ServiceAreaPlace[] = SERVICE_AREA_PRIMARY) {
  return places.map((place) => {
    if (place.type === "State") {
      return { "@type": "State", name: place.name };
    }
    if (place.type === "AdministrativeArea") {
      return {
        "@type": "AdministrativeArea",
        name: place.name,
        containedInPlace: {
          "@type": "State",
          name: place.region ?? "FL",
        },
      };
    }
    return {
      "@type": "City",
      name: place.name,
      containedInPlace: {
        "@type": "State",
        name: place.region,
      },
    };
  });
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: ORGANIZATION_DESCRIPTION,
    address: buildPostalAddressSchema(),
    areaServed: buildAreaServedSchema(),
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    knowsAbout: [
      "Website visibility",
      "AI discoverability",
      "Strategic campaigns",
      "AI advisory",
      "Business AI implementation",
    ],
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    description: ORGANIZATION_DESCRIPTION,
    address: buildPostalAddressSchema(),
    areaServed: buildAreaServedSchema(),
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    priceRange: "$$",
  };
}

export function buildLocationServiceSchema({
  name,
  description,
  url,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  areaServed: ServiceAreaPlace[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      address: buildPostalAddressSchema(),
    },
    areaServed: buildAreaServedSchema(areaServed),
    description,
    url: `${SITE_URL}${url}`,
  };
}

export function buildHomepageServiceSchemas() {
  const areaServed = buildAreaServedSchema();
  const provider = {
    "@type": "Organization",
    name: SITE_NAME,
    address: buildPostalAddressSchema(),
  };

  return [
    buildOrganizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Intelligence",
      provider,
      areaServed,
      serviceType: "Website visibility and AI discoverability analysis",
      description:
        "Live website scan for SEO signals, AI visibility, conversion friction, and improvement priorities.",
      url: `${SITE_URL}/web-intelligence`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Narrative Intelligence",
      provider,
      areaServed,
      serviceType: "Strategic campaigns and messaging",
      description:
        "Campaigns and messaging built to earn attention and stay memorable.",
      url: `${SITE_URL}/narrative-intelligence`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Business Intelligence",
      provider,
      areaServed,
      serviceType: "AI advisory, workflow automation, and implementation",
      description:
        "AI consulting and implementation for workflows, automation, governance, and measurable business value.",
      url: `${SITE_URL}/intelligence-layer`,
    },
  ];
}

export function formatServiceAreaList(places: ServiceAreaPlace[]): string {
  return places.map(formatPlaceLabel).join(", ");
}
