import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { ConsultForm } from "@/components/forms/ConsultForm";

const guideContents = [
  "Which Nelson and Kootenay Lake areas fit your plans",
  "What to check before buying waterfront, acreage, or a view home",
  "How to prepare a home before listing",
  "When a quiet introduction may be possible",
];

export function LeadMagnet() {
  return (
    <section
      id="consult"
      className="tone-dark tonal-section border-t border-[var(--color-line)] py-32 md:py-36"
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>Start With Luke</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading className="mt-7">
                Ask the right questions
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  before you move.
                </em>
              </SectionHeading>
            </Reveal>
            <Reveal delay={240}>
              <SectionLede className="mb-9">
                Tell Luke what you are considering: buying, selling, relocating, waterfront, acreage,
                or a second home. He will help you find the clearest first step.
              </SectionLede>
            </Reveal>
            <Reveal delay={360} as="ul" className="flex flex-col gap-3.5">
              {guideContents.map((g) => (
                <li
                  key={g}
                  className="luxury-card group relative border border-transparent py-2 pl-6 pr-3 text-[15px] font-light text-[var(--color-text)] transition-[transform,background,border-color] duration-700 ease-[var(--ease-luxe)] before:absolute before:left-0 before:top-5 before:h-px before:w-3 before:bg-[var(--color-bronze)] before:content-[''] hover:-translate-y-0.5 hover:border-[var(--color-line)] hover:bg-[rgba(212,184,150,0.045)]"
                >
                  {g}
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal delay={200}>
            <ConsultForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
