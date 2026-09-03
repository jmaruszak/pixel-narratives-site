import type { Metadata } from "next";
import AiReadinessAssessment from "../../components/AiReadinessAssessment";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { JsonLd, buildWebPage, buildBreadcrumbs } from "../../lib/schema";

export const metadata: Metadata = {
  title: "AI + Automation Assessment | Pixel Narratives",
  description:
    "Optional AI + Automation Assessment from Pixel Narratives. See where repetitive work, follow-up, and disconnected tools are slowing your business down.",
  alternates: { canonical: "/ai-readiness-assessment" },
};

export default function AiReadinessAssessmentPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/ai-readiness-assessment",
            name: "AI + Automation Assessment | Pixel Narratives",
            description:
              "Optional AI + Automation Assessment from Pixel Narratives. See where repetitive work, follow-up, and disconnected tools are slowing your business down.",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "AI + Automation Assessment", path: "/ai-readiness-assessment" },
          ]),
        ]}
      />
      <AiReadinessAssessment />
      <Footer />
    </main>
  );
}
