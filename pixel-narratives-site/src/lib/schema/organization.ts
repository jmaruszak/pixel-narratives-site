import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  HEADQUARTERS,
  SERVICE_AREA_PRIMARY,
  type ServiceAreaPlace,
} from "../businessLocation";
import { SITE_NAME, SITE_URL } from "../siteMetadata";

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
      return {
        "@type": "AdministrativeArea" as const,
        name: place.name,
        containedInPlace: {
          "@type": "State" as const,
          name: place.region ?? "FL",
        },
      };
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
      "Pixel Narratives is an AI implementation and business automation company based in Madison, Mississippi, helping businesses implement artificial intelligence, automate workflows, train teams, improve operations, and build practical AI systems.",
    logo: `${SITE_URL}/brand/logo-mark.png`,
    image: `${SITE_URL}/images/home-cinematic.jpg`,
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    founder: { "@id": FOUNDER_ID },
    address: postalAddress(),
    areaServed: buildAreaServed(),
    sameAs: [
      "https://www.linkedin.com/company/pixel-narratives/",
      "https://www.instagram.com/pixelnarratives.studio/",
      "https://www.youtube.com/@PixelNarrativesStudio",
      "https://www.google.com/maps/place/Pixel+Narratives/data=!4m2!3m1!1s0x61f17593c5b577fd:0xb098720a335c24ca",
    ],
    knowsAbout: [
      "Artificial Intelligence for Business",
      "AI Implementation",
      "AI Consulting",
      "Business Automation",
      "Workflow Automation",
      "AI Training for Businesses",
      "Corporate AI Workshops",
      "Fractional Chief AI Officer Services",
      "Business Process Automation",
      "AI Strategy",
      "Custom AI Systems",
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
          "@id": `${SITE_URL}/automation#service`,
          name: "Automation + Implementation",
          serviceType: "AI Implementation and Business Automation",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/training#service`,
          name: "Corporate AI Workshops",
          serviceType: "Corporate AI Training and Workshops",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/websites#service`,
          name: "Websites + Online Visibility",
          serviceType: "Website Development and Online Visibility",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/websites#website-visibility-build`,
          name: "Website + Visibility Build",
          serviceType: "Website and search visibility foundation",
          provider: { "@id": ORG_ID },
        },
      },
      {
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          "@id": `${SITE_URL}/websites#visibility-sprint`,
          name: "Visibility Sprint",
          serviceType: "Search and AI-search visibility optimization",
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
    jobTitle: "Founder, Chief AI Officer and Head of Strategy",
    worksFor: { "@id": ORG_ID },
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/images/about-jordan.jpg`,
    sameAs: ["https://www.linkedin.com/in/jordanmaruszak/"],
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
    name: "Pixel Narratives | Save Time. Win More Customers. Get More Done.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

// ---------------------------------------------------------------------------
// Full homepage graph
// ---------------------------------------------------------------------------

export function homepageGraph() {
  return [
    organizationEntity(),
    founderEntity(),
    websiteEntity(),
    homepageWebPageEntity(),
  ];
}
