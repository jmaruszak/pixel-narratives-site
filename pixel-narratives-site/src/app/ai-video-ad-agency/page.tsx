import SeoLandingPageView from "../../components/SeoLandingPage";
import { buildSeoLandingMetadata, seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["ai-video-ad-agency"];

export const metadata = buildSeoLandingMetadata(page);

export default function AiVideoAdAgencyPage() {
  return <SeoLandingPageView page={page} />;
}
