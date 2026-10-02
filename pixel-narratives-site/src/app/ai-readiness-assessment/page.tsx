import AiReadinessAssessment from "../../components/AiReadinessAssessment";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { JsonLd, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "AI Readiness Assessment | Pixel Narratives",
  description:
    "Optional AI Readiness Assessment from Pixel Narratives. See where repetitive work, follow-up, and disconnected tools are slowing your business down.",
  path: "/ai-readiness-assessment",
});

export default function AiReadinessAssessmentPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/ai-readiness-assessment",
            name: "AI Readiness Assessment | Pixel Narratives",
            description:
              "Optional AI Readiness Assessment from Pixel Narratives. See where repetitive work, follow-up, and disconnected tools are slowing your business down.",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "AI Readiness Assessment", path: "/ai-readiness-assessment" },
          ]),
        ]}
      />
      <AiReadinessAssessment />
      <Footer />
    </main>
  );
}
