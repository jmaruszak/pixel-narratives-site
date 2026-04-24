import type { Metadata } from "next";
import SeoLandingPageView from "../../components/SeoLandingPage";
import { seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["ai-consulting-for-businesses"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/ai-consulting-for-businesses" },
};

export default function AiConsultingForBusinessesPage() {
  return <SeoLandingPageView page={page} />;
}
