import { WEB_INTEL_PAGE_TOOL_URL } from "./webIntelligence";

export type CtaAction = {
  href: string;
  label: string;
  external?: boolean;
};

export type DestinationCtaConfig = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  primaryAction: CtaAction;
  secondaryAction?: CtaAction;
};

export const DESTINATION_CTAS = {
  automation: {
    id: "automation",
    eyebrow: "Next Step",
    headline: "Let's put AI to work for your business.",
    body: "Whether you have a specific project in mind or you're exploring what's possible, we'd love to hear from you.",
    primaryAction: { href: "/contact?need=automation", label: "Discuss a Project" },
    secondaryAction: { href: "/contact", label: "Start a Conversation" },
  },
  training: {
    id: "training",
    eyebrow: "Next Step",
    headline: "Ready to get your team up to speed?",
    body: "Tell us about your team and what you want them to be able to do. We'll talk through the right workshop.",
    primaryAction: { href: "/contact?need=training", label: "Discuss Team Training" },
    secondaryAction: {
      href: "/contact?need=training",
      label: "Start a Conversation",
    },
  },
  websites: {
    id: "websites",
    eyebrow: "Next Step",
    headline: "Ready to get found by more of the right customers?",
    body: "Tell us about your website or online presence. We'll talk through what would help.",
    primaryAction: { href: "/contact?need=websites", label: "Improve My Website" },
    secondaryAction: {
      href: WEB_INTEL_PAGE_TOOL_URL,
      label: "Check My Online Visibility",
      external: true,
    },
  },
  marketing: {
    id: "marketing",
    eyebrow: "Let's Talk",
    headline: "What are you looking to accomplish?",
    body: "Whether you're planning a campaign, building your social presence, or exploring new ways to reach customers, we'd love to hear about it.",
    primaryAction: {
      href: "/contact?need=marketing",
      label: "Start a Conversation",
    },
  },
} as const satisfies Record<string, DestinationCtaConfig>;
