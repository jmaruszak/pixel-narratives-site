import type { Metadata } from "next";
import LocationLandingPageView from "../../components/LocationLandingPage";
import { locationLandingPages } from "../../lib/locationLandingPages";

const page = locationLandingPages["jacksonville-ai-studio"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/jacksonville-ai-studio" },
};

export default function JacksonvilleAiStudioPage() {
  return <LocationLandingPageView page={page} />;
}
