import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import type { ProcessStep } from "@/lib/data";

type Props = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  lede?: string;
  steps: ProcessStep[];
  tone?: "ivory" | "lake" | "office" | "dark";
};

/* Reusable five-step process module, used by both /buyers and /sellers. */

const toneClass = {
  ivory: "tone-ivory",
  lake: "tone-lake",
  office: "tone-office",
  dark: "tone-dark",
};

export function ProcessSteps({ eyebrow, title, emphasis, lede, steps, tone = "ivory" }: Props) {
  return (
    <section className={`${toneClass[tone]} tonal-section py-28 md:py-32`}>
      <Container>
        <Reveal className="mb-16 max-w-[760px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionHeading className="mt-7">
            {title}
            {emphasis && (
              <>
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  {emphasis}
                </em>
              </>
            )}
          </SectionHeading>
          {lede && <SectionLede>{lede}</SectionLede>}
        </Reveal>

        <ol className="border-t border-[var(--color-line)]">
          {steps.map((s, i) => (
            <Reveal
              key={s.num}
              as="li"
              delay={i * 80}
              className="grid grid-cols-[80px_1fr] items-baseline gap-6 border-b border-[var(--color-line)] py-9 sm:grid-cols-[120px_1fr_2fr] sm:gap-10 md:py-10"
            >
              <span className="font-serif text-[28px] italic tracking-[0.05em] text-[var(--color-bronze)] sm:text-[32px]">
                {s.num}
              </span>
              <h3 className="m-0 font-serif font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)] [font-size:clamp(22px,2.6vw,34px)]">
                {s.title}
              </h3>
              <p className="col-start-2 m-0 max-w-[640px] text-[15px] leading-[1.7] text-[var(--color-text-muted)] sm:col-start-3 sm:text-[16px]">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
