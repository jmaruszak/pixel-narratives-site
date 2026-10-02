export const CONTACT_EMAIL = "hello@pixelnarratives.studio";
export const CONTACT_PHONE = "904-524-7269";
export const CONTACT_PHONE_TEL = "+19045247269";
export const CALENDLY_URL = "https://calendly.com/pixelnarratives";
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
  { type: "City", name: "Atlanta", region: "GA" },
];

export const SERVICE_PILLARS = [
  {
    eyebrow: "Save Time",
    headline: "Implementation",
    outcome: "Save time. Reduce repetitive work. Make the business easier to run.",
    body: "We build better business systems using AI, automation, and modern software. Sometimes that means automating the work. Sometimes it means giving your team a much better way to do it.",
    href: "/automation",
  },
  {
    eyebrow: "Use AI Better",
    headline: "Training",
    outcome: "Help your team get more done with practical AI workshops.",
    body: "One department is $7,500. Larger teams run $15,000 to $20,000. Multi-day engagements start at $25,000.",
    href: "/training",
  },
  {
    eyebrow: "Get Found",
    headline: "Websites + Online Visibility",
    outcome: "Help more of the right customers find you and take action.",
    body: "Website Starter at $2,500. Website + Visibility Build starting at $7,500. Visibility Sprint starting at $1,200/month with a 3-month minimum.",
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
