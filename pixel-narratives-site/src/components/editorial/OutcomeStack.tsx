export default function OutcomeStack({
  tone = "dark",
  kicker = "Outcomes",
  items,
}: {
  tone?: "dark" | "light";
  kicker?: string;
  items: readonly string[];
}) {
  const light = tone === "light";

  return (
    <section
      className={`border-t ${light ? "pn-band-light border-black/8" : "border-white/8"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
        <p className="pn-kicker">{kicker}</p>
        <ul className="mt-10 space-y-4 md:space-y-6">
          {items.map((item) => (
            <li key={item} className="pn-display">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
