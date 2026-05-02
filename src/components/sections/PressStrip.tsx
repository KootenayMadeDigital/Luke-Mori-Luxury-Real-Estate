import { Container } from "@/components/ui/Container";
import { pressMentions } from "@/lib/data";

/* Quiet "as featured in" marquee — concept placeholders set in serif italics
   to feel editorial rather than logo-soup. */

export function PressStrip() {
  // Duplicate the list so the marquee loop reads continuous.
  const items = [...pressMentions, ...pressMentions];

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)] md:border-r md:border-[var(--color-line)] md:pr-8">
            Editorial Coverage · Concept
          </span>
          <div className="no-scrollbar relative w-full overflow-hidden">
            <div
              className="flex w-max items-center gap-12 whitespace-nowrap"
              style={{ animation: "marquee 40s linear infinite" }}
            >
              {items.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-serif text-[20px] font-light italic tracking-[0.02em] text-[var(--color-text-dim)]"
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
