import CtaCard from "./CtaCard";
import NextStepSection from "./NextStepSection";
import type { CtaAction } from "../lib/destinationCtas";

type PageBottomCtaProps = {
  eyebrow: string;
  headline: string;
  body: string;
  primaryAction: CtaAction;
  secondaryAction?: CtaAction;
};

export default function PageBottomCta(props: PageBottomCtaProps) {
  return (
    <NextStepSection>
      <CtaCard {...props} />
    </NextStepSection>
  );
}
