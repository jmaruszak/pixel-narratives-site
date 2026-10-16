export const CONTACT_EMAIL = "hello@pixelnarratives.studio";
export const CONTACT_PHONE = "904-524-7269";
export const CONTACT_PHONE_TEL = "+19045247269";
export const CALENDLY_URL = "https://calendly.com/pixelnarratives";
export const CALENDLY_EVENT_URL = "https://calendly.com/pixelnarratives/30min";
export const GOOGLE_BUSINESS_PROFILE_URL =
  "https://share.google/EpsqOBZsnrLCxNiTb";

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
  { type: "City", name: "Memphis", region: "TN" },
  { type: "City", name: "Mobile", region: "AL" },
  {
    type: "AdministrativeArea",
    name: "Alabama Eastern Shore",
    region: "AL",
  },
  { type: "City", name: "Atlanta", region: "GA" },
];

export const SERVICE_AREA_HUB_MENTIONS: ServiceAreaPlace[] = [
  { type: "City", name: "Madison", region: "MS" },
  { type: "City", name: "Ridgeland", region: "MS" },
  { type: "City", name: "Jackson", region: "MS" },
  { type: "City", name: "Flowood", region: "MS" },
  { type: "City", name: "Brandon", region: "MS" },
  { type: "City", name: "Gluckstadt", region: "MS" },
  { type: "AdministrativeArea", name: "Jackson Metro", region: "MS" },
  { type: "City", name: "Birmingham", region: "AL" },
  { type: "City", name: "Memphis", region: "TN" },
  { type: "City", name: "Mobile", region: "AL" },
  { type: "City", name: "Daphne", region: "AL" },
  { type: "City", name: "Fairhope", region: "AL" },
  { type: "City", name: "Atlanta", region: "GA" },
];

export const SERVICE_PILLARS = [
  {
    eyebrow: "Save Time",
    headline: "Implementation",
    outcome: "Save time. Reduce repetitive work. Make your business easier to run.",
    body: "We help identify where AI makes sense, choose what is worth pursuing, guide adoption, improve workflows, and build custom solutions when they are the right fit.",
    href: "/implementation",
  },
  {
    eyebrow: "Use AI Better",
    headline: "Training",
    outcome: "Get your team up to speed with practical AI workshops.",
    body: "Standalone workshops for ChatGPT, Claude, Microsoft Copilot, AI video, research, creative work, and productivity. No implementation project is required.",
    href: "/training",
  },
  {
    eyebrow: "Get Found",
    headline: "Visibility",
    outcome: "Helping customers find you.",
    body: "Websites, SEO, and AI search. We help you build a stronger online presence and get found by more of your customers.",
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

export function formatServiceAreaList(places: ServiceAreaPlace[]): string {
  return places.map(formatPlaceLabel).join(", ");
}
