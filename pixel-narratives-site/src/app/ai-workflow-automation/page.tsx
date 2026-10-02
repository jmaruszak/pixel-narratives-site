import SeoLandingPageView from "../../components/SeoLandingPage";
import { buildSeoLandingMetadata, seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["ai-workflow-automation"];

export const metadata = buildSeoLandingMetadata(page);

export default function AiWorkflowAutomationPage() {
  return <SeoLandingPageView page={page} />;
}
