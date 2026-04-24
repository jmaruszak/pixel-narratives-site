import type { Metadata } from "next";
import SeoLandingPageView from "../../components/SeoLandingPage";
import { seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["ai-commercial-production-company"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/ai-commercial-production-company" },
};

export default function AiCommercialProductionCompanyPage() {
  return <SeoLandingPageView page={page} />;
}
