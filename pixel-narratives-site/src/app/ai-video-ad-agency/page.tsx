import type { Metadata } from "next";
import SeoLandingPageView from "../../components/SeoLandingPage";
import { seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["ai-video-ad-agency"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/ai-video-ad-agency" },
};

export default function AiVideoAdAgencyPage() {
  return <SeoLandingPageView page={page} />;
}
