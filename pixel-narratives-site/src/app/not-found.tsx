import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Page Not Found | Pixel Narratives",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            404
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            This page is not here.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            The page may have moved, or the link may be out of date. Start with
            the services, insights, or contact page.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Explore Services
            </Link>
            <Link
              href="/insights"
              className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-6 py-3 text-sm transition hover:bg-white/5"
            >
              Browse Insights
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-6 py-3 text-sm transition hover:bg-white/5"
            >
              Contact Pixel Narratives
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
