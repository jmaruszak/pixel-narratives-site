import type { CtaAction } from "./destinationCtas";

export type HomePathCard = {
  id: string;
  eyebrow: string;
  headline: string;
  outcome: string;
  body: string;
  primaryAction: CtaAction;
};

export const HOME_PATH_CARDS: HomePathCard[] = [
  {
    id: "web-intelligence",
    eyebrow: "Visibility",
    headline: "Web Intelligence",
    outcome: "Get found.",
    body: "Be found by customers and AI. Uncover visibility gaps and see where your website helps or holds back growth.",
    primaryAction: {
      href: "/web-intelligence",
      label: "Explore Web Intelligence",
    },
  },
  {
    id: "narrative-intelligence",
    eyebrow: "Attention",
    headline: "Narrative Intelligence",
    outcome: "Get chosen.",
    body: "Create campaigns, content, and experiences designed to earn attention and stay memorable.",
    primaryAction: {
      href: "/narrative-intelligence",
      label: "Explore Narrative Intelligence",
    },
  },
  {
    id: "intelligence-layer",
    eyebrow: "Implementation",
    headline: "Business Intelligence",
    outcome: "Get results.",
    body: "Implement AI, workflows, and operational systems built to deliver measurable results.",
    primaryAction: {
      href: "/intelligence-layer",
      label: "Explore Business Intelligence",
    },
  },
];
