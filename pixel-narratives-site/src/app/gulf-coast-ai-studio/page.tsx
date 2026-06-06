import type { Metadata } from "next";
import LocationLandingPageView from "../../components/LocationLandingPage";
import { locationLandingPages } from "../../lib/locationLandingPages";

const page = locationLandingPages["gulf-coast-ai-studio"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/gulf-coast-ai-studio" },
};

export default function GulfCoastAiStudioPage() {
  return <LocationLandingPageView page={page} />;
}
