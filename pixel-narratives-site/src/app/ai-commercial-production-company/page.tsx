import SeoLandingPageView from "../../components/SeoLandingPage";
import { buildSeoLandingMetadata, seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["ai-commercial-production-company"];

export const metadata = buildSeoLandingMetadata(page);

export default function AiCommercialProductionCompanyPage() {
  return <SeoLandingPageView page={page} />;
}
