import Link from "next/link";
import Script from "next/script";
import CalendlyEmbed from "../../components/CalendlyEmbed";
import { ContactEmailForm } from "../../components/ContactForms";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
} from "../../lib/businessLocation";
import { buildCalendlyEmbedUrl } from "../../lib/calendly";
import { JsonLd, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Contact | Pixel Narratives",
  description:
    "Talk with Pixel Narratives about implementation, training, visibility, or marketing. Based in Madison, Mississippi.",
  path: "/contact",
  image: "/images/home-cinematic.jpg",
  imageAlt: "Contact Pixel Narratives",
});

const NEED_OPTIONS = [
  { id: "automation", label: "Implementation" },
  { id: "training", label: "Training" },
  { id: "websites", label: "Visibility" },
  { id: "marketing", label: "Marketing" },
  { id: "not-sure", label: "Not Sure" },
] as const;

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
  const source = firstStringParam(params["utm_source"]);
  const fromWebsiteScan =
    source === "visibility-scan" || source === "web-intelligence";
  const need = firstStringParam(params["need"]);
  const selectedNeed = NEED_OPTIONS.some((option) => option.id === need)
    ? need
    : undefined;
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <JsonLd
        graph={[
          buildWebPage({
            path: "/contact",
            name: "Contact Pixel Narratives",
            description:
              "Talk with Pixel Narratives about implementation, training, visibility, or marketing. Based in Madison, Mississippi.",
            additionalType: "ContactPage",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <section className="mx-auto w-full max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <p className="pn-kicker text-[var(--muted)]">Contact</p>

        <h1 className="pn-page-title mt-5">
          Let&apos;s put AI to work for your business.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--foreground)] md:text-xl">
          Whether you have a specific project in mind or you&apos;re exploring
          what&apos;s possible, we&apos;d love to hear from you.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
          Based in Madison, Mississippi. Working with teams across the South and
          nationwide.
        </p>

        {fromWebsiteScan ? (
          <p className="mt-5 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
            You&apos;re here from a website scan. Mention what it flagged (or
            paste a summary) when you reach out. Useful context gets you a
            faster, more specific reply.
          </p>
        ) : null}

        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            What are you trying to improve?
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {NEED_OPTIONS.map((option) => {
              const isActive = selectedNeed === option.id;
              return (
                <Link
                  key={option.id}
                  href={`/contact?need=${option.id}`}
                  className={[
                    "inline-flex items-center rounded-full border px-5 py-2.5 text-sm transition",
                    isActive
                      ? "border-white/20 bg-white/10 text-[var(--foreground)]"
                      : "border-white/10 text-[var(--foreground)] hover:border-white/20 hover:bg-white/5",
                  ].join(" ")}
                >
                  {option.label}
                </Link>
              );
            })}
          </div>
        </div>

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

            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
            />
            <CalendlyEmbed
              key={selectedNeed ?? "none"}
              url={buildCalendlyEmbedUrl(selectedNeed)}
            />
          </div>

          <div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Prefer email?
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label={`Email ${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-xl text-[var(--foreground)] transition hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>

            <ContactEmailForm key={selectedNeed ?? "none"} need={selectedNeed} />

            <p className="mt-4 text-sm text-[var(--muted)]">
              We reply within 1-2 business days.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Prefer phone?
            </p>

            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              aria-label={`Call Pixel Narratives at ${CONTACT_PHONE}`}
              className="mt-4 inline-block text-xl text-[var(--foreground)] transition hover:text-white"
            >
              {CONTACT_PHONE}
            </a>

            <p className="mt-4 text-sm text-[var(--muted)]">
              For direct questions about a project, training, a website, a
              campaign, or the next step.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
