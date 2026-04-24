import type { Metadata } from "next";
import SeoLandingPageView from "../../components/SeoLandingPage";
import { seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["how-to-create-ads-people-actually-watch"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/how-to-create-ads-people-actually-watch" },
};

export default function HowToCreateAdsPeopleActuallyWatchPage() {
  return <SeoLandingPageView page={page} />;
}
