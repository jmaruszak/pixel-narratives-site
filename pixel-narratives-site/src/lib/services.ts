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
    href: "/implementation",
    navLabel: "Implementation",
    name: "Implementation",
    problem: "Save Time",
    outcome: "Putting AI into practice.",
    body: "We help you identify where AI makes sense, choose what is worth pursuing, and put it to work. That may mean improving how your team uses existing tools, changing a process, or building something custom.",
    ctaLabel: "Discuss a Project",
  },
  {
    id: "training",
    href: "/training",
    navLabel: "Training",
    name: "Training",
    problem: "Use AI Better",
    outcome: "Developing your team's capabilities.",
    body: "Practical AI training tailored to your team, their work, and the tools they use.",
    ctaLabel: "Discuss Team Training",
  },
  {
    id: "websites",
    href: "/websites",
    navLabel: "Visibility",
    name: "Visibility",
    problem: "Get Found",
    outcome: "Helping customers find you.",
    body: "Websites, SEO, and AI search. We help you build a stronger online presence and get found by more of your customers.",
    ctaLabel: "Improve My Website",
  },
  {
    id: "marketing",
    href: "/marketing",
    navLabel: "Marketing",
    name: "Marketing",
    problem: "Reach More Customers",
    outcome: "Getting their attention and generating demand.",
    body: "We help businesses reach more customers through creative strategy, social media, advertising, and original content.",
    ctaLabel: "Discuss Marketing",
  },
];

export const SERVICE_LINE_SUMMARY =
  "Implementation. Training. Visibility. Marketing.";

export const POSITIONING_LINE =
  "We help businesses save time, win more customers, and get more done.";

export function getService(id: ServiceId): ServiceDefinition {
  const service = SERVICES.find((item) => item.id === id);
  if (!service) {
    throw new Error(`Unknown service: ${id}`);
  }
  return service;
}
