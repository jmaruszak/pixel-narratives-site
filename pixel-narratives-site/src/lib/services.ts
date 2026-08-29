export type ServiceId =
  | "automation"
  | "training"
  | "websites"
  | "marketing";

export type ServiceDefinition = {
  id: ServiceId;
  href: string;
  navLabel: string;
  name: string;
  problem: string;
  outcome: string;
  body: string;
  ctaLabel: string;
};

export const SERVICES: ServiceDefinition[] = [
  {
    id: "automation",
    href: "/automation",
    navLabel: "Automation + Implementation",
    name: "Automation + Implementation",
    problem: "Save Time",
    outcome: "Less manual work. Faster follow-up. Clearer operations.",
    body: "Turn repetitive work into better systems: workflows, CRM, scheduling, reporting, and the tools your team uses every day.",
    ctaLabel: "Talk About Automation",
  },
  {
    id: "training",
    href: "/training",
    navLabel: "Training",
    name: "Training",
    problem: "Get More Done",
    outcome: "Help your team get more done with practical AI workshops.",
    body: "Corporate AI workshops starting at $15,000. We learn how your teams work and train around the tasks they already do.",
    ctaLabel: "Discuss a Workshop",
  },
  {
    id: "websites",
    href: "/websites",
    navLabel: "Websites + Online Visibility",
    name: "Websites + Online Visibility",
    problem: "Get Found",
    outcome: "Help more of the right customers find you and take action.",
    body: "Website improvement, SEO, local search, and conversion work so your business shows up where customers are looking.",
    ctaLabel: "Improve My Website",
  },
  {
    id: "marketing",
    href: "/marketing",
    navLabel: "Marketing",
    name: "Marketing",
    problem: "Reach More Customers",
    outcome: "Campaigns that get seen, remembered, and acted on.",
    body: "Campaigns, ads, video, content, and lead generation. We use AI where it helps production.",
    ctaLabel: "Discuss a Campaign",
  },
];

export const SERVICE_LINE_SUMMARY =
  "Automation + Implementation. Training. Websites + Online Visibility. Marketing.";

export const POSITIONING_LINE =
  "We help businesses save time, win more customers, and get more done.";

export function getService(id: ServiceId): ServiceDefinition {
  const service = SERVICES.find((item) => item.id === id);
  if (!service) {
    throw new Error(`Unknown service: ${id}`);
  }
  return service;
}
