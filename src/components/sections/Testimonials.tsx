import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

/* Quiet client voice, three editorial pull-quotes, attributed without
   names so it reads as discreet rather than testimonial-chasing. */

type TestimonialsProps = {
  compact?: boolean;
};

export function Testimonials({ compact = false }: TestimonialsProps) {
  const visibleTestimonials = compact ? testimonials.slice(0, 2) : testimonials;

  return (
    <section className={`tone-office tonal-section border-y border-[var(--color-line)] ${compact ? "py-20 md:py-24" : "py-32 md:py-36"}`}>
      <Container>
        <Reveal className={compact ? "mb-12 max-w-[820px]" : "mb-20 max-w-[760px]"}>
          <Eyebrow>Client Voice</Eyebrow>
          <SectionHeading className="mt-7">
            Sellers and buyers
            <br />
            <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
              who don&apos;t usually go on record.
            </em>
          </SectionHeading>
        </Reveal>

        <div className={`grid grid-cols-1 gap-6 ${compact ? "md:grid-cols-2 md:gap-7" : "md:grid-cols-3 md:gap-10"}`}>
          {visibleTestimonials.map((t, i) => (
            <Reveal
              key={i}
              as="article"
              delay={i * 120}
              className={`relative flex flex-col border border-[var(--color-line)] bg-[var(--color-surface)] transition-colors duration-500 hover:border-[var(--color-line-strong)] ${compact ? "p-7 sm:p-8" : "p-9 sm:p-10"}`}
            >
              <svg
                aria-hidden
                viewBox="0 0 32 24"
                className="mb-6 h-7 w-9 text-[var(--color-bronze)] opacity-70"
              >
                <path
                  d="M0 24 L0 14 Q0 4 10 0 L12 4 Q6 6 5 12 L12 12 L12 24 Z M16 24 L16 14 Q16 4 26 0 L28 4 Q22 6 21 12 L28 12 L28 24 Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className={`m-0 mb-8 font-serif font-light leading-[1.4] tracking-[-0.005em] text-[var(--color-text)] ${compact ? "text-[20px] sm:text-[22px]" : "text-[22px] sm:text-[24px]"}`}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-auto border-t border-[var(--color-line)] pt-6">
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                  {t.attribution}
                </div>
                <div className="mt-1.5 text-[12px] text-[var(--color-text-dim)]">
                  {t.context}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
