import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import HomeMotionExperience from "../components/home/HomeMotionExperience";
import { JsonLd, homepageGraph } from "../lib/schema";
import { buildPageMetadata } from "../lib/siteMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Implementation Partner | Pixel Narratives",
  description:
    "Put AI to work in your business with practical implementation, standalone team training, websites and online visibility, and marketing from Pixel Narratives.",
  path: "/",
  image: "/images/home-cinematic.jpg",
  imageAlt: "Pixel Narratives homepage cinematic visual",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd graph={homepageGraph()} />
      <HomeMotionExperience />
      <Footer />
    </main>
  );
}
