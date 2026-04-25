import type { Metadata } from "next";
import AiReadinessAssessment from "../../components/AiReadinessAssessment";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "AI Readiness Assessment | Pixel Narratives",
  description:
    "Take the Pixel Narratives AI Readiness Assessment to see whether your company is ready to turn AI into a real business advantage.",
  alternates: { canonical: "/ai-readiness-assessment" },
};

export default function AiReadinessAssessmentPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <AiReadinessAssessment />
      <Footer />
    </main>
  );
}
