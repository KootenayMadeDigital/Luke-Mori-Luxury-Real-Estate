import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const proof = [
  "Positioning",
  "Area authority",
  "Listing editorial",
  "Private inquiry routing",
];

export function KmdConceptCue() {
  return (
    <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-14 md:py-16">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-8 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-7 shadow-[0_28px_80px_-64px_rgba(56,40,28,0.45)] md:grid-cols-[0.74fr_1fr] md:items-center md:p-9">
            <div>
              <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                Built by Kootenay Made Digital
              </p>
              <h2 className="m-0 mt-4 max-w-[14ch] font-serif text-[32px] font-light leading-[1.04] tracking-[-0.01em] text-[var(--color-text)] md:text-[42px]">
                A premium real estate vertical, disguised as a private office.
              </h2>
            </div>
            <div>
              <p className="m-0 max-w-[680px] text-[16px] leading-[1.75] text-[var(--color-text-muted)]">
                For agents and brokerages, this concept proves the system early: luxury positioning, local search depth, editorial listings, trust architecture, and conversion paths that feel personal instead of templated.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {proof.map((item) => (
                  <li key={item} className="rounded-full border border-[var(--color-line)] bg-[rgba(255,255,255,0.56)] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
