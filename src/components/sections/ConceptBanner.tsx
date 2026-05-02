/* Tasteful concept-disclosure shown above the nav on every page —
   reminds anyone landing on the site (especially Luke Mori) that this
   is a Kootenay Made Digital concept, not a live brand site. */

export function ConceptBanner() {
  return (
    <div className="relative z-[110] border-b border-[var(--color-line)] bg-[#07080a] py-2.5 text-center">
      <span className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-text-dim)]">
        <span className="text-[var(--color-bronze)]">Concept</span>
        <span className="mx-3 inline-block h-2.5 w-px translate-y-[2px] bg-[var(--color-line-strong)]" />
        Built by Kootenay Made Digital — not a live Luke Mori site
      </span>
    </div>
  );
}
