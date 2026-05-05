import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { ConsultForm } from "@/components/forms/ConsultForm";
import { PrivateAccessSeal } from "@/components/sections/PrivateAccessSeal";

const guideContents = [
  "Which Nelson and Kootenay Lake areas fit your plans",
  "What to check before buying waterfront, acreage, or a view home",
  "How to prepare a high-value home before listing",
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
                Tell Luke what you are weighing: buying, selling, relocating, waterfront, acreage,
                or a second home. He will help you find the clearest first step.
              </SectionLede>
            </Reveal>
            <Reveal delay={360} as="ul" className="flex flex-col gap-3.5">
              {guideContents.map((g) => (
                <li
                  key={g}
                  className="relative pl-6 text-[15px] font-light text-[var(--color-text)] before:absolute before:left-0 before:top-3 before:h-px before:w-3 before:bg-[var(--color-bronze)] before:content-['']"
                >
                  {g}
                </li>
              ))}
            </Reveal>
            <Reveal delay={440}>
              <PrivateAccessSeal />
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
