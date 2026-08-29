import type { CtaAction } from "./destinationCtas";
import { SERVICES } from "./services";

export type HomePathCard = {
  id: string;
  eyebrow: string;
  headline: string;
  outcome: string;
  body: string;
  primaryAction: CtaAction;
};

export const HOME_PATH_CARDS: HomePathCard[] = SERVICES.map((service) => ({
  id: service.id,
  eyebrow: service.problem,
  headline: service.name,
  outcome: service.outcome,
  body: service.body,
  primaryAction: {
    href: service.href,
    label: service.ctaLabel,
  },
}));
