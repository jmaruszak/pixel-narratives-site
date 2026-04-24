import type { Metadata } from "next";
import SeoLandingPageView from "../../components/SeoLandingPage";
import { seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["ai-crm-automation"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/ai-crm-automation" },
};

export default function AiCrmAutomationPage() {
  return <SeoLandingPageView page={page} />;
}
