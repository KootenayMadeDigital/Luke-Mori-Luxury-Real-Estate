import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { authorityPillars } from "@/lib/data";

export function AuthorityStrip() {
  return (
    <section className="tone-office tonal-section py-24 md:py-28 lg:py-32">
      <Container>
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.74fr_1fr] lg:items-end">
          <Reveal>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                Why Luke
              </span>
              <h2 className="m-0 mt-5 max-w-[12ch] font-serif text-[clamp(36px,5vw,62px)] font-light leading-[0.98] tracking-[-0.015em] text-[var(--color-text)]">
                Five reasons clients choose Luke.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="m-0 max-w-[620px] text-[15px] leading-[1.75] text-[var(--color-text-muted)] lg:ml-auto">
              Sellers want value protected. Buyers want fewer wrong turns. Both need local knowledge, strong presentation, qualified conversations, and lake-specific experience before the first showing.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {authorityPillars.map((p, i) => (
            <Reveal key={p.number} delay={i * 80}>
              <article className="group h-full rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(212,184,150,0.04)] p-1 transition-[transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(212,184,150,0.065)]">
                <div className="flex h-full flex-col rounded-[calc(1.5rem-0.25rem)] bg-[var(--color-bg)] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.055)]">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-serif text-[20px] italic tracking-[0.1em] text-[var(--color-bronze)]">
                      {p.number}
                    </span>
                    <span className="h-px w-9 bg-[var(--color-line-strong)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-125" />
                  </div>
                  <h3 className="m-0 mb-4 font-serif text-[24px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)]">
                    {p.title}
                  </h3>
                  <p className="m-0 text-[13px] leading-[1.7] text-[var(--color-text-muted)]">
                    {p.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
