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

export const SERVICE_PILLARS = [
  {
    eyebrow: "Save Time",
    headline: "Automation + Implementation",
    outcome: "Less manual work. Faster follow-up. Clearer operations.",
    body: "Turn repetitive work into better systems: workflows, CRM, scheduling, reporting, and the tools your team uses every day.",
    href: "/automation",
  },
  {
    eyebrow: "Get More Done",
    headline: "Training",
    outcome: "Help your team get more done with practical AI workshops.",
    body: "Corporate AI workshops starting at $15,000. Private training for leadership, departments, and employees around the work they already do.",
    href: "/training",
  },
  {
    eyebrow: "Get Found",
    headline: "Websites + Online Visibility",
    outcome: "Help more of the right customers find you and take action.",
    body: "Website + Visibility Build starting at $7,500, or a Visibility Sprint starting at $5,000 if the site already exists. Help more of the right customers find you.",
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
