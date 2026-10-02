import SeoLandingPageView from "../../components/SeoLandingPage";
import { buildSeoLandingMetadata, seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["how-to-create-ads-people-actually-watch"];

export const metadata = buildSeoLandingMetadata(page);

export default function HowToCreateAdsPeopleActuallyWatchPage() {
  return <SeoLandingPageView page={page} />;
}
