import SeoLandingPageView from "../../components/SeoLandingPage";
import { buildSeoLandingMetadata, seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["ai-consulting-for-businesses"];

export const metadata = buildSeoLandingMetadata(page);

export default function AiConsultingForBusinessesPage() {
  return <SeoLandingPageView page={page} />;
}
