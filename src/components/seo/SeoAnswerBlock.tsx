import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type SeoAnswerBlockProps = {
  eyebrow: string;
  question: string;
  answer: string;
  terms: string[];
  tone?: "ivory" | "lake" | "office";
};

const toneClass = {
  ivory: "tone-ivory",
  lake: "tone-lake",
  office: "tone-office",
};

export function SeoAnswerBlock({ eyebrow, question, answer, terms, tone = "office" }: SeoAnswerBlockProps) {
  return (
    <section className={`${toneClass[tone]} tonal-section border-y border-[var(--color-line)] py-16 md:py-20`}>
      <Container>
        <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-[0.86fr_1.14fr] md:items-end">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="m-0 mt-6 max-w-[740px] font-serif text-[34px] font-light leading-[1.06] tracking-[-0.01em] text-[var(--color-text)] md:text-[48px]">
              {question}
            </h2>
          </div>
          <div>
            <p className="m-0 text-[17px] leading-[1.78] text-[var(--color-text-muted)]">
              {answer}
            </p>
            <ul className="m-0 mt-7 flex list-none flex-wrap gap-2 p-0" aria-label="Related search terms">
              {terms.map((term) => (
                <li key={term} className="rounded-full border border-[var(--color-line-strong)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronze)]">
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
