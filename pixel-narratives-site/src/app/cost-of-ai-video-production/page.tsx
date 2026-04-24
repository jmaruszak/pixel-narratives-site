import type { Metadata } from "next";
import SeoLandingPageView from "../../components/SeoLandingPage";
import { seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["cost-of-ai-video-production"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/cost-of-ai-video-production" },
};

export default function CostOfAiVideoProductionPage() {
  return <SeoLandingPageView page={page} />;
}
