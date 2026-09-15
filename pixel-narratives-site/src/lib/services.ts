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
    navLabel: "Implementation",
    name: "Implementation",
    problem: "Save Time",
    outcome: "Save time. Reduce repetitive work. Make the business easier to run.",
    body: "We build better business systems using AI, automation, and modern software. Sometimes that means automating the work. Sometimes it means giving your team a much better way to do it.",
    ctaLabel: "Discuss a Project",
  },
  {
    id: "training",
    href: "/training",
    navLabel: "Training",
    name: "Training",
    problem: "Use AI Better",
    outcome: "Help your team get more done with practical AI workshops.",
    body: "Corporate AI workshops starting at $7,500. Private training for leadership, departments, and employees around the work they already do.",
    ctaLabel: "Discuss Team Training",
  },
  {
    id: "websites",
    href: "/websites",
    navLabel: "Websites + Online Visibility",
    name: "Websites + Online Visibility",
    problem: "Get Found",
    outcome: "Help more of the right customers find you and take action.",
    body: "Website + Visibility Build starting at $7,500, or a Visibility Sprint starting at $1,200/month with a 3-month minimum if the site already exists.",
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
    ctaLabel: "Discuss Marketing",
  },
];

export const SERVICE_LINE_SUMMARY =
  "Implementation. Training. Websites + Online Visibility. Marketing.";

export const POSITIONING_LINE =
  "We help businesses save time, win more customers, and get more done.";

export function getService(id: ServiceId): ServiceDefinition {
  const service = SERVICES.find((item) => item.id === id);
  if (!service) {
    throw new Error(`Unknown service: ${id}`);
  }
  return service;
}
