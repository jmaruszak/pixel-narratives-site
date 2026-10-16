import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  GOOGLE_BUSINESS_PROFILE_URL,
  HEADQUARTERS,
  SERVICE_AREA_PRIMARY,
  type ServiceAreaPlace,
} from "../businessLocation";
import { SERVICES } from "../services";
import { SITE_NAME, SITE_URL } from "../siteMetadata";
import {
  FOUNDER_LINKEDIN_PROFILE,
  ORGANIZATION_SOCIAL_PROFILES,
} from "../socialProfiles";

// ---------------------------------------------------------------------------
// Canonical IDs
// ---------------------------------------------------------------------------

export const ORG_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/#jordan-maruszak`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const HOMEPAGE_ID = `${SITE_URL}/#webpage`;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function postalAddress() {
  return {
    "@type": "PostalAddress" as const,
    addressLocality: HEADQUARTERS.locality,
    addressRegion: HEADQUARTERS.region,
    addressCountry: HEADQUARTERS.country,
  };
}

export function buildAreaServed(places: ServiceAreaPlace[] = SERVICE_AREA_PRIMARY) {
  return places.map((place) => {
    if (place.type === "State") {
      return { "@type": "State" as const, name: place.name };
    }
    if (place.type === "AdministrativeArea") {
      const area: Record<string, unknown> = {
        "@type": "AdministrativeArea" as const,
        name: place.name,
      };
      if (place.region) {
        area.containedInPlace = {
          "@type": "State" as const,
          name: place.region,
        };
      }
      return area;
    }
    return {
      "@type": "City" as const,
      name: place.name,
      containedInPlace: {
        "@type": "State" as const,
        name: place.region,
      },
    };
  });
}

// ---------------------------------------------------------------------------
// Organization + LocalBusiness (canonical)
// ---------------------------------------------------------------------------

export function organizationEntity() {
  return {
    "@type": ["Organization", "LocalBusiness"] as const,
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Pixel Narratives is an AI implementation company based in Madison, Mississippi. It helps businesses identify useful AI opportunities, adopt tools, improve workflows, train teams, strengthen online visibility, and run effective marketing.",
    logo: `${SITE_URL}/brand/logo-mark.png`,
    image: `${SITE_URL}/images/home-cinematic.jpg`,
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    founder: { "@id": FOUNDER_ID },
    address: postalAddress(),
    hasMap: GOOGLE_BUSINESS_PROFILE_URL,
    areaServed: buildAreaServed(),
    sameAs: [
      GOOGLE_BUSINESS_PROFILE_URL,
      ...ORGANIZATION_SOCIAL_PROFILES.map((profile) => profile.href),
    ],
    knowsAbout: [
      "Artificial Intelligence for Business",
      "AI Implementation",
      "AI Consulting",
      "Business Automation",
      "Workflow Automation",
      "AI Training for Businesses",
      "Corporate AI Workshops",
      "Ongoing AI Partnership",
      "Business Process Automation",
      "AI Strategy",
      "AI Adoption",
    ],
    hasOfferCatalog: offerCatalog(),
  };
}

// ---------------------------------------------------------------------------
// Offer Catalog
// ---------------------------------------------------------------------------

function offerCatalog() {
  return {
    "@type": "OfferCatalog" as const,
    name: "Pixel Narratives Services",
    itemListElement: [
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/work-with-us#explore`,
          name: "Explore",
          serviceType: "Implementation Assessment",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/work-with-us#build`,
          name: "Build",
          serviceType: "Scoped project",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/work-with-us#equip`,
          name: "Equip",
          serviceType: "Team workshop",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/work-with-us#partner`,
          name: "Partner",
          serviceType: "Ongoing AI expertise and implementation",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/work-with-us#enterprise-partner`,
          name: "Enterprise Partner",
          serviceType: "Strategic AI partnership",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/implementation#service`,
          name: "Implementation",
          serviceType: "AI Implementation and Adoption",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/training#service`,
          name: "AI Team Training and Workshops",
          serviceType: "Standalone AI Training and Workshops",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/websites#service`,
          name: "Visibility",
          serviceType: "Websites, SEO, and AI Search Visibility",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/marketing#service`,
          name: "Marketing",
          serviceType: "Digital Marketing and Campaign Production",
          provider: { "@id": ORG_ID },
        },
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// Founder Person
// ---------------------------------------------------------------------------

export function founderEntity() {
  return {
    "@type": "Person" as const,
    "@id": FOUNDER_ID,
    name: "Jordan Maruszak",
    jobTitle: "Founder, Pixel Narratives",
    worksFor: { "@id": ORG_ID },
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/images/about-jordan.jpg`,
    sameAs: [FOUNDER_LINKEDIN_PROFILE.href, `${SITE_URL}/book`],
    knowsAbout: [
      "AI Implementation",
      "AI Strategy",
      "Business Automation",
      "AI Consulting",
    ],
  };
}

// ---------------------------------------------------------------------------
// WebSite
// ---------------------------------------------------------------------------

export function websiteEntity() {
  return {
    "@type": "WebSite" as const,
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
  };
}

// ---------------------------------------------------------------------------
// Homepage WebPage
// ---------------------------------------------------------------------------

export function homepageWebPageEntity() {
  return {
    "@type": "WebPage" as const,
    "@id": HOMEPAGE_ID,
    url: SITE_URL,
    name: "AI Implementation Partner | Pixel Narratives",
    description:
      "Put AI to work in your business with practical implementation, team training, visibility, and marketing from Pixel Narratives.",
    inLanguage: "en-US",
    dateModified: "2026-10-16",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    primaryImageOfPage: {
      "@type": "ImageObject" as const,
      url: `${SITE_URL}/images/pixel-video-header-poster.jpg`,
    },
    significantLink: [
      `${SITE_URL}/services`,
      `${SITE_URL}/implementation`,
      `${SITE_URL}/training`,
      `${SITE_URL}/websites`,
      `${SITE_URL}/marketing`,
      `${SITE_URL}/work`,
      `${SITE_URL}/work-with-us`,
      `${SITE_URL}/contact`,
    ],
    mainEntity: { "@id": `${SITE_URL}/#what-we-do` },
  };
}

function homepageServiceList() {
  return {
    "@type": "ItemList" as const,
    "@id": `${SITE_URL}/#what-we-do`,
    name: "What We Do",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: service.name,
      description: service.outcome,
      url: `${SITE_URL}${service.href}`,
    })),
  };
}

// ---------------------------------------------------------------------------
// Full homepage graph
// ---------------------------------------------------------------------------

export function homepageGraph() {
  return [homepageWebPageEntity(), homepageServiceList()];
}

export function sitewideGraph() {
  return [organizationEntity(), founderEntity(), websiteEntity()];
}
