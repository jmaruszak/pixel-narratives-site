import LocationLandingPageView from "../../../components/LocationLandingPage";
import { locationLandingPages } from "../../../lib/locationLandingPages";
import { buildPageMetadata } from "../../../lib/siteMetadata";

const page = locationLandingPages["mobile-eastern-shore"];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: `/${page.slug}`,
});

export default function MobileEasternShoreLocationPage() {
  return <LocationLandingPageView page={page} />;
}
