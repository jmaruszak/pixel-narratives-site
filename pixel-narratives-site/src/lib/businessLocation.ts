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
  "Pixel Narratives helps businesses save time, win more customers, and get more done through automation, implementation, training, online visibility, and marketing.";

export const SERVICE_PILLARS = [
  {
    eyebrow: "Save Time",
    headline: "Automation + Implementation",
    outcome: "Less manual work. Faster follow-up. Clearer operations.",
    body: "Turn repetitive work into better systems: workflows, CRM, scheduling, reporting, and the tools your team uses every day.",
    href: "/automation",
  },
  {
    eyebrow: "Use AI Better",
    headline: "Training",
    outcome: "Your team leaves knowing how to use AI in the work they already do.",
    body: "Practical workshops, role-specific training, and playbooks so people can use AI at work without wasting time on tools they will not keep.",
    href: "/training",
  },
  {
    eyebrow: "Get Found",
    headline: "Websites + Online Visibility",
    outcome: "Help more of the right customers find you and take action.",
    body: "Website improvement, SEO, local search, and conversion work so your business shows up where customers are looking.",
    href: "/websites",
  },
  {
    eyebrow: "Reach More Customers",
    headline: "Marketing",
    outcome: "Campaigns that get seen, remembered, and acted on.",
    body: "Campaigns, ads, video, content, and lead generation. We use AI where it helps production.",
    href: "/marketing",
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
    logo: `${SITE_URL}/brand/logo-mark.png`,
    address: buildPostalAddressSchema(),
    areaServed: buildAreaServedSchema(),
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    founder: {
      "@type": "Person",
      name: "Jordan Maruszak",
    },
    knowsAbout: [
      "AI implementation",
      "Business automation",
      "Workflow automation",
      "CRM implementation",
      "AI training",
      "Website development",
      "SEO",
      "Local SEO",
      "Digital marketing",
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
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
    },
    areaServed: buildAreaServedSchema(areaServed),
    description,
    url: `${SITE_URL}${url}`,
    serviceType: [
      "AI consulting",
      "AI implementation",
      "Business process automation",
      "AI training",
      "Fractional Chief AI Officer",
    ],
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
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
      name: "Automation + Implementation",
      provider,
      areaServed,
      serviceType: "Business process automation and systems implementation",
      description:
        "Workflow automation, CRM implementation, scheduling, reporting, and custom business tools that reduce manual work.",
      url: `${SITE_URL}/automation`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Training",
      provider,
      areaServed,
      serviceType: "Workplace AI training",
      description:
        "Team workshops, role-specific training, and playbooks so employees can use AI in the work they already do.",
      url: `${SITE_URL}/training`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Websites + Online Visibility",
      provider,
      areaServed,
      serviceType: "Website development, SEO, and online visibility",
      description:
        "Website improvement, SEO, local search, conversion, and AI search visibility so more of the right customers find the business.",
      url: `${SITE_URL}/websites`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Marketing",
      provider,
      areaServed,
      serviceType: "Digital marketing and campaign production",
      description:
        "Attention is a managed advertising campaign: concept, commercial, placement, and reporting to help businesses reach more customers.",
      url: `${SITE_URL}/marketing`,
    },
  ];
}

export function formatServiceAreaList(places: ServiceAreaPlace[]): string {
  return places.map(formatPlaceLabel).join(", ");
}
