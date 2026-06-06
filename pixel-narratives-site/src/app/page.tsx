import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import HomeMotionExperience from "../components/home/HomeMotionExperience";
import { buildPageMetadata } from "../lib/siteMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Pixel Narratives | Visibility, Attention, Implementation",
  description:
    "Every business is trying to grow. Pixel Narratives helps with visibility, attention, and implementation through Web Intelligence, Narrative Intelligence, and Business Intelligence.",
  path: "/",
  image: "/images/home-cinematic.jpg",
  imageAlt: "Pixel Narratives homepage cinematic visual",
});

const homepageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pixel Narratives",
    url: "https://pixelnarratives.studio",
    description:
      "AI-powered commercial production and business AI implementation studio.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Narrative Intelligence",
    provider: { "@type": "Organization", name: "Pixel Narratives" },
    areaServed: "United States",
    serviceType: "AI-powered commercial video production",
    description:
      "Concept-driven AI commercial production for cinematic video ads and brand campaigns.",
    url: "https://pixelnarratives.studio/narrative-intelligence",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Intelligence",
    provider: { "@type": "Organization", name: "Pixel Narratives" },
    areaServed: "United States",
    serviceType: "AI consulting, workflow automation, and implementation",
    description:
      "AI consulting and implementation for workflows, automation, CRM systems, governance, and measurable business value.",
    url: "https://pixelnarratives.studio/intelligence-layer",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Intelligence",
    provider: { "@type": "Organization", name: "Pixel Narratives" },
    areaServed: "United States",
    serviceType: "Website visibility and AI discoverability analysis",
    description:
      "Live website scan for SEO signals, AI visibility, conversion friction, and redesign opportunities.",
    url: "https://pixelnarratives.studio/web-intelligence",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      {homepageSchemas.map((schema) => (
        <script
          key={schema.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <HomeMotionExperience />
      <Footer />
    </main>
  );
}
