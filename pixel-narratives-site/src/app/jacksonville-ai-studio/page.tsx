import LocationLandingPageView from "../../components/LocationLandingPage";
import { locationLandingPages } from "../../lib/locationLandingPages";
import { buildPageMetadata } from "../../lib/siteMetadata";

const page = locationLandingPages["jacksonville-ai-studio"];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: `/${page.slug}`,
});

export default function JacksonvilleAiStudioPage() {
  return <LocationLandingPageView page={page} />;
}
