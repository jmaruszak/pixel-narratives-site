import type { Metadata } from "next";
import SeoLandingPageView from "../../components/SeoLandingPage";
import { seoLandingPages } from "../../lib/seoLandingPages";

const page = seoLandingPages["how-to-implement-ai-in-your-business"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/how-to-implement-ai-in-your-business" },
};

export default function HowToImplementAiInYourBusinessPage() {
  return <SeoLandingPageView page={page} />;
}
