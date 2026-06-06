import type { Metadata } from "next";
import LocationLandingPageView from "../../components/LocationLandingPage";
import { locationLandingPages } from "../../lib/locationLandingPages";

const page = locationLandingPages["memphis-ai-studio"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/memphis-ai-studio" },
};

export default function MemphisAiStudioPage() {
  return <LocationLandingPageView page={page} />;
}
