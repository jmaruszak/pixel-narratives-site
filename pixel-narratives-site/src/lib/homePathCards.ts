import type { CtaAction } from "./destinationCtas";

export type HomePathCard = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  primaryAction: CtaAction;
};

export const HOME_PATH_CARDS: HomePathCard[] = [
  {
    id: "web-intelligence",
    eyebrow: "Visibility",
    headline: "Web Intelligence",
    body: "Be found by customers and AI. Identify conversion opportunities, uncover visibility gaps, and understand when your website is helping, or holding back, your growth.",
    primaryAction: {
      href: "/web-intelligence",
      label: "Explore Web Intelligence",
    },
  },
  {
    id: "narrative-intelligence",
    eyebrow: "Attention",
    headline: "Narrative Intelligence",
    body: "Create campaigns, content, and experiences designed to earn attention and stay memorable.",
    primaryAction: {
      href: "/narrative-intelligence",
      label: "Explore Narrative Intelligence",
    },
  },
  {
    id: "intelligence-layer",
    eyebrow: "Scale",
    headline: "Intelligence Layer",
    body: "Implement AI, workflows, and operational systems that help your business grow.",
    primaryAction: {
      href: "/intelligence-layer",
      label: "Explore Intelligence Layer",
    },
  },
];
