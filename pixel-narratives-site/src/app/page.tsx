import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import HomeMotionExperience from "../components/home/HomeMotionExperience";
import { JsonLd, homepageGraph } from "../lib/schema";
import { buildPageMetadata } from "../lib/siteMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Pixel Narratives | Save Time. Win More Customers. Get More Done.",
  description:
    "Pixel Narratives helps businesses save time, win more customers, and get more done through automation, implementation, training, online visibility, and marketing.",
  path: "/",
  image: "/images/home-cinematic.jpg",
  imageAlt: "Pixel Narratives homepage cinematic visual",
});

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd graph={homepageGraph()} />
      <HomeMotionExperience />
      <Footer />
    </main>
  );
}
