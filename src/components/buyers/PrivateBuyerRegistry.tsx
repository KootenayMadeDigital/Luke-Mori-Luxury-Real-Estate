import Link from "next/link";

const registryCards = [
  {
    title: "Private access registry",
    body: "For buyers who want to hear about the right property before the public feed has flattened it into noise.",
    cta: "Request private access",
    href: "/contact",
  },
  {
    title: "Property match alerts",
    body: "A calm, high-signal search brief for lakefront, walkable Nelson, acreage, ski access, privacy, relocation, and second homes.",
    cta: "Open buyer brief",
    href: "/contact",
  },
  {
    title: "Advisor routing",
    body: "When the search needs financing, inspection, tax, legal, caretaker, or remote-ownership support, the right introductions happen early.",
    cta: "Ask the office",
    href: "/buyers/international",
  },
];

export function PrivateBuyerRegistry() {
  return (
    <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-3">
      {registryCards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="group flex min-h-[280px] flex-col bg-[var(--color-bg)] p-8 transition-colors hover:bg-[var(--color-surface)] sm:p-9"
        >
          <span className="mb-8 inline-flex size-12 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-bronze)] transition-colors group-hover:border-[var(--color-bronze)]">
            <svg viewBox="0 0 18 18" aria-hidden className="size-4">
              <path d="M3 9h12M9 3v12" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
          </span>
          <h3 className="m-0 mb-4 font-serif text-[28px] font-light leading-[1.12] tracking-[-0.005em] text-[var(--color-text)]">
            {card.title}
          </h3>
          <p className="m-0 mb-8 flex-1 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
            {card.body}
          </p>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
            {card.cta}
          </span>
        </Link>
      ))}
    </div>
  );
}
