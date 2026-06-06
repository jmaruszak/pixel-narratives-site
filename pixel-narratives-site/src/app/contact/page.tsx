import {
  BookDiscoveryCallForm,
  RequestCreativeConceptForm,
} from "../../components/ContactForms";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Contact | Pixel Narratives",
  description:
    "Get in touch with Pixel Narratives about AI-powered commercial production, Business Intelligence consulting, or your next campaign.",
  path: "/contact",
  image: "/images/home-cinematic.jpg",
  imageAlt: "Contact Pixel Narratives",
});

function firstStringParam(
  value: string | string[] | undefined,
): string | undefined {
  if (value === undefined) return undefined;
  return Array.isArray(value) ? value[0] : value;
}

type ContactSearchParams = Record<string, string | string[] | undefined>;

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<ContactSearchParams>;
}) {
  const params: ContactSearchParams = await (
    searchParams ?? Promise.resolve({} as ContactSearchParams)
  );
  const fromWebIntelligence =
    firstStringParam(params["utm_source"]) === "web-intelligence";

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <section className="mx-auto w-full max-w-4xl px-6 py-24 md:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
          Contact
        </p>

        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
          Let&apos;s Build Something
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--foreground)] md:text-xl">
          Visibility. Attention. Implementation.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          Whether you&apos;re looking to improve your website, launch a campaign, or
          implement AI across your business, we&apos;ll help you take the next step.
        </p>

        {fromWebIntelligence ? (
          <p className="mt-5 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
            You&apos;re here from{" "}
            <span className="text-[var(--foreground)]">
              Web Intelligence
            </span>
            . Mention what the scan flagged (or paste a summary) when you reach
            out. Useful context gets you a faster, more specific reply.
          </p>
        ) : null}

        <div className="mt-12 grid gap-6">
          <div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Start Here
            </p>

            <h2 className="mt-4 text-2xl leading-none md:text-3xl">
              Book a Zoom call
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              Schedule a Zoom call to talk through your goals, where you are
              today, and what the right next step looks like.
            </p>

            <BookDiscoveryCallForm />
          </div>

          <div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Creative / Ads
            </p>

            <h2 className="mt-4 text-2xl leading-none md:text-3xl">
              Request a concept
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              Tell us what you&apos;re promoting, who it&apos;s for, where the ad will run,
              and what you want people to remember. If you have a website, offer
              page, or existing creative, include that too.
            </p>

            <RequestCreativeConceptForm />
          </div>

          <div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Prefer email?
            </p>

            <a
              href="mailto:hello@pixelnarratives.studio"
              aria-label="Email hello@pixelnarratives.studio"
              className="mt-4 inline-block text-xl text-[var(--foreground)] transition hover:text-white"
            >
              hello@pixelnarratives.studio
            </a>

            <p className="mt-4 text-sm text-[var(--muted)]">
              We reply within 1–2 business days.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Prefer phone?
            </p>

            <a
              href="tel:+19045247269"
              aria-label="Call Pixel Narratives at 904-524-7269"
              className="mt-4 inline-block text-xl text-[var(--foreground)] transition hover:text-white"
            >
              904-524-7269
            </a>

            <p className="mt-4 text-sm text-[var(--muted)]">
              For direct questions about a campaign, AI workflow, or next step.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
