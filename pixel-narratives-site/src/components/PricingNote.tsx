export default function PricingNote({
  variant = "default",
}: {
  variant?: "default" | "implementation";
}) {
  if (variant === "implementation") {
    return (
      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            A Quick Note on Pricing
          </p>
          <h2 className="mt-4 max-w-3xl text-2xl leading-none md:text-3xl">
            You should know what you&apos;re getting into before the work
            starts.
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
            We publish pricing where the scope is predictable. For larger or
            ongoing engagements, the price depends on the size of your
            organization, the complexity of the work, and how involved we need
            to be.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
            Either way, we define the scope and agree on the price before
            anything begins. No surprises.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-white/8">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
          A quick note on pricing
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          We publish starting prices so you know the range before we talk.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          Larger teams, more locations, and more complex work cost more. We
          define the work and the price before anything begins.
        </p>
      </div>
    </section>
  );
}
