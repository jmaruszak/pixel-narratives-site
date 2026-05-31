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
  webIntelligence: {
    id: "web-intelligence",
    eyebrow: "Try it now",
    headline: "Run a scan on your live site.",
    body: "Start with Web Intelligence. Build from there.",
    primaryAction: {
      href: WEB_INTEL_PAGE_TOOL_URL,
      label: "Open Web Intelligence",
      external: true,
    },
    secondaryAction: { href: "/contact", label: "Talk to the team" },
  },
  narrativeIntelligence: {
    id: "narrative-intelligence",
    eyebrow: "Next Step",
    headline: "Ready for a concept worth watching?",
    body: "We'll explore a cinematic direction built around your brand.",
    primaryAction: { href: "/contact", label: "Request a Concept" },
  },
  intelligenceLayer: {
    id: "intelligence-layer",
    eyebrow: "How We Work",
    headline: "Stop experimenting with AI. Start building it into the business.",
    body: "We'll implement smarter systems, better workflows, stronger team adoption, and a clearer return on investment, time and spend.",
    primaryAction: {
      href: "https://calendly.com/pixelnarratives",
      label: "Book a Discovery Call",
      external: true,
    },
    secondaryAction: { href: "/contact", label: "Contact Us" },
  },
} as const satisfies Record<string, DestinationCtaConfig>;
