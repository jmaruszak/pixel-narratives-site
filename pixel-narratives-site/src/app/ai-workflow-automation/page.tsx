import type { Metadata } from "next";
import SeoLandingPageView from "../../components/SeoLandingPage";
import { seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["ai-workflow-automation"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/ai-workflow-automation" },
};

export default function AiWorkflowAutomationPage() {
  return <SeoLandingPageView page={page} />;
}
