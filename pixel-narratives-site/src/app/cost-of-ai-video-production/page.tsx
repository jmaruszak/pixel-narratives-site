import SeoLandingPageView from "../../components/SeoLandingPage";
import { buildSeoLandingMetadata, seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["cost-of-ai-video-production"];

export const metadata = buildSeoLandingMetadata(page);

export default function CostOfAiVideoProductionPage() {
  return <SeoLandingPageView page={page} />;
}
