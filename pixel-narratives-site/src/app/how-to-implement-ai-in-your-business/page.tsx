import SeoLandingPageView from "../../components/SeoLandingPage";
import { buildSeoLandingMetadata, seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["how-to-implement-ai-in-your-business"];

export const metadata = buildSeoLandingMetadata(page);

export default function HowToImplementAiInYourBusinessPage() {
  return <SeoLandingPageView page={page} />;
}
