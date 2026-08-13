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
    headline: "Tell us what is slowing you down.",
    body: "We will look at the repetitive work, the disconnected tools, and the follow-up that falls through. Then we will talk about what to build first.",
    primaryAction: { href: "/contact?need=automation", label: "Talk About Automation" },
    secondaryAction: { href: "/contact", label: "Discuss a Project" },
  },
  training: {
    id: "training",
    eyebrow: "Next Step",
    headline: "Help your team use AI in the work they already do.",
    body: "Workshops, role-specific training, and playbooks so people leave knowing what to do on Monday.",
    primaryAction: { href: "/contact?need=training", label: "Discuss Team Training" },
  },
  websites: {
    id: "websites",
    eyebrow: "Next Step",
    headline: "Help more of the right customers find you.",
    body: "Start with a look at your live site, or talk through a website and visibility project.",
    primaryAction: {
      href: WEB_INTEL_PAGE_TOOL_URL,
      label: "Check My Online Visibility",
      external: true,
    },
    secondaryAction: { href: "/contact?need=websites", label: "Improve My Website" },
  },
  marketing: {
    id: "marketing",
    eyebrow: "Next Step",
    headline: "Ready to reach more customers?",
    body: "Tell us who you need to reach and what you want them to do. We will talk through campaigns, ads, video, and content.",
    primaryAction: { href: "/contact?need=marketing", label: "Discuss a Campaign" },
  },
} as const satisfies Record<string, DestinationCtaConfig>;
