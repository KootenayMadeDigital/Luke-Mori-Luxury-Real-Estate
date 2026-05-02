import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { recentlyConcluded } from "@/lib/data";

/* Real recent placements with offered prices. Reads as a quiet ledger,
   not a sold-sign brag. */

export function RecentlyConcluded() {
  return (
    <section className="tone-ivory tonal-section py-32 md:py-36">
      <Container>
        <Reveal className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <Eyebrow>Recently Placed</Eyebrow>
            <SectionHeading className="mt-7">
              A short ledger of
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                concluded representation.
              </em>
            </SectionHeading>
          </div>
          <SectionLede align="right">
            A discreet selection of recent placements. Specifics are public; everything else
            withheld in the interest of every party who trusted us with them.
          </SectionLede>
        </Reveal>

        <Reveal as="ul" className="border-t border-[var(--color-line)]">
          {recentlyConcluded.map((c, i) => (
            <li
              key={c.address}
              className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-[var(--color-line)] py-7 transition-colors duration-300 hover:bg-[var(--color-surface)] sm:grid-cols-[60px_1.4fr_1fr_auto_auto] sm:gap-8 sm:py-8"
            >
              <span className="hidden font-serif text-[14px] italic tracking-[0.1em] text-[var(--color-bronze)] sm:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="font-serif text-[20px] font-normal leading-tight tracking-[-0.005em] text-[var(--color-text)] sm:text-[22px]">
                  {c.address}
                </div>
                <div className="mt-1 text-[12px] text-[var(--color-text-dim)] sm:hidden">
                  {c.area} · {c.type}
                </div>
              </div>
              <span className="hidden text-[14px] text-[var(--color-text-muted)] sm:block">
                {c.area}
              </span>
              <span className="hidden text-[12px] text-[var(--color-text-dim)] md:block">
                {c.type}
              </span>
              <span className="text-right font-serif text-[18px] italic text-[var(--color-bronze-light)] sm:text-[20px]">
                {c.offered}
              </span>
            </li>
          ))}
        </Reveal>

        <p className="mt-10 text-[12px] italic text-[var(--color-text-dim)]">
          Offered prices reflect public list pricing at the time of representation.
          Status: Sold.
        </p>
      </Container>
    </section>
  );
}
