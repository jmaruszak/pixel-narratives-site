import { CALENDLY_URL } from "./businessLocation";
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
    eyebrow: "Corporate AI Workshops",
    headline: "Help your team get more done.",
    body: "Corporate AI Workshops start at $15,000. Private, customized training for leadership, departments, and employees. This is not monthly implementation coaching.",
    primaryAction: { href: "#workshop-inquiry", label: "Discuss a Workshop" },
    secondaryAction: {
      href: CALENDLY_URL,
      label: "Book a Call",
      external: true,
    },
  },
  websites: {
    id: "websites",
    eyebrow: "Next Step",
    headline: "Help more of the right customers find you.",
    body: "Start with a look at your live site, or talk through a Website + Visibility Build or Visibility Sprint.",
    primaryAction: {
      href: WEB_INTEL_PAGE_TOOL_URL,
      label: "Check My Online Visibility",
      external: true,
    },
    secondaryAction: { href: "/contact?need=websites", label: "Improve My Website" },
  },
  marketing: {
    id: "marketing",
    eyebrow: "Attention",
    headline: "Start an Attention Pulse.",
    body: "One campaign. One price. A defined finish line. We confirm fit on a short call before production starts.",
    primaryAction: { href: "#attention-pulse-brief", label: "Start an Attention Pulse" },
    secondaryAction: {
      href: CALENDLY_URL,
      label: "Book a Call",
      external: true,
    },
  },
} as const satisfies Record<string, DestinationCtaConfig>;
