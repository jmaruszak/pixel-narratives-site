import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import HomeMotionExperience from "../components/home/HomeMotionExperience";
import { buildHomepageServiceSchemas } from "../lib/businessLocation";
import { buildPageMetadata } from "../lib/siteMetadata";

const homepageSchemas = buildHomepageServiceSchemas();

export const metadata: Metadata = buildPageMetadata({
  title: "Pixel Narratives | Visibility, Attention, Implementation",
  description:
    "Every business is trying to grow. Pixel Narratives helps with visibility, attention, and implementation through Web Intelligence, Narrative Intelligence, and Business Intelligence.",
  path: "/",
  image: "/images/home-cinematic.jpg",
  imageAlt: "Pixel Narratives homepage cinematic visual",
});

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      {homepageSchemas.map((schema, index) => (
        <script
          key={"name" in schema && schema.name ? String(schema.name) : `schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <HomeMotionExperience />
      <Footer />
    </main>
  );
}
