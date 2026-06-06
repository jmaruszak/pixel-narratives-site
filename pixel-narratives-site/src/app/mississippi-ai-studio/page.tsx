import type { Metadata } from "next";
import LocationLandingPageView from "../../components/LocationLandingPage";
import { locationLandingPages } from "../../lib/locationLandingPages";

const page = locationLandingPages["mississippi-ai-studio"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/mississippi-ai-studio" },
};

export default function MississippiAiStudioPage() {
  return <LocationLandingPageView page={page} />;
}
