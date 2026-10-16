import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import {
  BOOK_AUTHOR_PARAS,
  BOOK_COVER_SRC,
  BOOK_DATE_LINE,
  BOOK_DESCRIPTION,
  BOOK_DESCRIPTION_PARAS,
  BOOK_DESK_SRC,
  BOOK_FULL_TITLE,
  BOOK_ISBN,
  BOOK_SUBTITLE,
  BOOK_TITLE,
} from "../../lib/book";
import { JsonLd, buildBreadcrumbs, buildWebPage } from "../../lib/schema";
import { bookEntity } from "../../lib/schema/book";
import { buildPageMetadata } from "../../lib/siteMetadata";
import { FOUNDER_LINKEDIN_PROFILE } from "../../lib/socialProfiles";

export const metadata = buildPageMetadata({
  title: `${BOOK_FULL_TITLE} | Pixel Narratives`,
  description: BOOK_DESCRIPTION,
  path: "/book",
  image: BOOK_COVER_SRC,
  imageAlt: `Paperback cover for ${BOOK_FULL_TITLE} by Jordan Maruszak`,
});

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/book",
            name: BOOK_FULL_TITLE,
            description: BOOK_DESCRIPTION,
            mainEntity: { "@id": "https://pixelnarratives.studio/book#book" },
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Book", path: "/book" },
          ]),
          bookEntity(BOOK_DESCRIPTION),
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <div className="overflow-hidden rounded-[28px] border border-white/8 bg-black px-8 py-12 md:px-12 md:py-16">
            <Image
              src={BOOK_COVER_SRC}
              alt={`Paperback mockup of ${BOOK_FULL_TITLE} by Jordan Maruszak`}
              width={1024}
              height={576}
              priority
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="mx-auto h-auto w-full max-w-sm object-contain"
            />
          </div>
          <div className="max-w-2xl">
            <p className="pn-kicker text-[var(--muted)]">Book</p>
            <h1 className="pn-page-title mt-5">{BOOK_TITLE}</h1>
            <p className="mt-5 max-w-xl text-2xl leading-snug text-white/80 md:text-4xl">
              {BOOK_SUBTITLE}
            </p>
            <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              By{" "}
              <Link
                href="/about"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Jordan Maruszak
              </Link>
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
              {BOOK_DATE_LINE}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            {BOOK_DESCRIPTION_PARAS.map((paragraph) => (
              <p
                key={paragraph}
                className={
                  paragraph === "You might just need to try the door."
                    ? "text-[var(--foreground)]"
                    : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              The cost of trying
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              AI has changed the cost of trying.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Ideas that used to need a specialist, a budget, and a long runway
              can now be tested sooner. That does not mean every idea should be
              built. Somebody still has to decide what makes sense and then do
              the work.
            </p>
            <p>
              This book is for readers who want to try things while that cost
              is falling. Pixel Narratives is the studio that grew out of the
              same idea.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Author
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              Jordan Maruszak
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            {BOOK_AUTHOR_PARAS.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <p>
              <Link
                href="/about"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                About Pixel Narratives
              </Link>
              {" · "}
              <a
                href={FOUNDER_LINKEDIN_PROFILE.href}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Jordan Maruszak on LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="overflow-hidden rounded-[28px]">
            <Image
              src={BOOK_DESK_SRC}
              alt={`${BOOK_TITLE} on a desk beside a coffee cup`}
              width={1024}
              height={682}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="aspect-[3/2] h-auto w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Publication details
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              Paperback
            </h2>
            <dl className="mt-8 space-y-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <div>
                <dt className="text-xs uppercase tracking-[0.25em]">Title</dt>
                <dd className="mt-2 text-[var(--foreground)]">
                  {BOOK_FULL_TITLE}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em]">Author</dt>
                <dd className="mt-2 text-[var(--foreground)]">
                  Jordan Maruszak
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em]">ISBN-13</dt>
                <dd className="mt-2 text-[var(--foreground)]">{BOOK_ISBN}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em]">
                  Publication
                </dt>
                <dd className="mt-2 text-[var(--foreground)]">
                  {BOOK_DATE_LINE}
                </dd>
              </div>
            </dl>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              A purchase link will appear here when the book is available.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
