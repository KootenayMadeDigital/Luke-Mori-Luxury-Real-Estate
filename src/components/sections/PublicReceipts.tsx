import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { authorityPillars, credentials } from "@/lib/data";

export function PublicReceipts() {
  return (
    <section className="tone-walnut tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute left-[-10%] top-[-25%] h-[420px] w-[420px] rounded-full bg-[rgba(212,184,150,0.1)] blur-[130px]" />
        <div className="absolute bottom-[-30%] right-[-12%] h-[520px] w-[520px] rounded-full bg-[rgba(132,162,166,0.07)] blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <Eyebrow>Public Receipts</Eyebrow>
            <h2 className="m-0 mt-7 max-w-[12ch] font-serif text-[clamp(40px,5.4vw,74px)] font-light leading-[0.96] tracking-[-0.018em] text-[var(--color-text)]">
              Proof first,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                persuasion second.
              </em>
            </h2>
          </div>
          <p className="m-0 max-w-[680px] text-[17px] leading-[1.75] text-[var(--color-text-muted)] lg:ml-auto lg:text-right">
            A serious client does not need confetti. They need evidence: public sales volume, luxury recognition, media visibility, local tenure, and a method that protects privacy before the market gets involved.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.56)] shadow-[0_34px_90px_-62px_rgba(0,0,0,0.95)]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {credentials.map((c) => (
              <div key={c.label} className="border-b border-r border-[var(--color-line)] p-6 last:border-r-0 md:border-b-0 md:p-8">
                <span className="block font-serif text-[32px] font-light leading-none tracking-[-0.01em] text-[var(--color-bronze-light)] md:text-[42px]">
                  {c.value}
                </span>
                <span className="mt-4 block max-w-[14ch] text-[11px] font-semibold uppercase leading-[1.55] tracking-[0.22em] text-[var(--color-text-muted)]">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {authorityPillars.slice(0, 3).map((p, i) => (
            <Reveal key={p.number} delay={i * 80}>
              <article className="group flex h-full min-h-[260px] flex-col rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.03)] p-7 transition-[transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(212,184,150,0.055)] sm:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-serif text-[19px] italic tracking-[0.1em] text-[var(--color-bronze)]">
                    {p.number}
                  </span>
                  <span className="h-px w-10 bg-[var(--color-line-strong)] transition-transform duration-700 group-hover:scale-x-125" />
                </div>
                <h3 className="m-0 mb-4 font-serif text-[25px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)]">
                  {p.title}
                </h3>
                <p className="m-0 mt-auto text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
