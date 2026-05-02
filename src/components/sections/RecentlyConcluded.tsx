import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { recentlyConcluded } from "@/lib/data";

/* Discreet "track record" treatment — area, type, status. No prices, no
   addresses. Reads as a quiet ledger rather than a sold-sign brag. */

export function RecentlyConcluded() {
  return (
    <section className="bg-[var(--color-bg)] py-32 md:py-36">
      <Container>
        <Reveal className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <Eyebrow>Recently Concluded</Eyebrow>
            <SectionHeading className="mt-7">
              Quietly placed,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                privately concluded.
              </em>
            </SectionHeading>
          </div>
          <SectionLede align="right">
            A discreet selection of recent placements. Specifics, prices, and addresses withheld
            in the interest of every party who trusted us with them.
          </SectionLede>
        </Reveal>

        <Reveal as="ul" className="border-t border-[var(--color-line)]">
          {recentlyConcluded.map((c, i) => (
            <li
              key={`${c.area}-${i}`}
              className="group grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-[var(--color-line)] py-7 transition-colors duration-300 hover:bg-[var(--color-surface)] sm:grid-cols-[80px_1fr_1.5fr_auto] sm:gap-8 sm:py-8"
            >
              <span className="hidden font-serif text-[14px] italic tracking-[0.1em] text-[var(--color-bronze)] sm:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-[20px] font-normal leading-tight tracking-[-0.005em] text-[var(--color-text)] sm:text-[24px]">
                {c.area}
              </span>
              <span className="text-[14px] text-[var(--color-text-muted)] sm:text-[15px]">
                {c.type}
              </span>
              <span className="text-right text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)] sm:text-[11px]">
                {c.status}
              </span>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
