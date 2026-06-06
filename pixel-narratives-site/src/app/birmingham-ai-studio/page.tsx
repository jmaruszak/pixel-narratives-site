import type { Metadata } from "next";
import LocationLandingPageView from "../../components/LocationLandingPage";
import { locationLandingPages } from "../../lib/locationLandingPages";

const page = locationLandingPages["birmingham-ai-studio"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/birmingham-ai-studio" },
};

export default function BirminghamAiStudioPage() {
  return <LocationLandingPageView page={page} />;
}
