import LocationLandingPageView from "../../components/LocationLandingPage";
import { locationLandingPages } from "../../lib/locationLandingPages";
import { buildPageMetadata } from "../../lib/siteMetadata";

const page = locationLandingPages["birmingham-ai-studio"];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: `/${page.slug}`,
});

export default function BirminghamAiStudioPage() {
  return <LocationLandingPageView page={page} />;
}
