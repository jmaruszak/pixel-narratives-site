import SeoLandingPageView from "../../components/SeoLandingPage";
import { buildSeoLandingMetadata, seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["ai-crm-automation"];

export const metadata = buildSeoLandingMetadata(page);

export default function AiCrmAutomationPage() {
  return <SeoLandingPageView page={page} />;
}
