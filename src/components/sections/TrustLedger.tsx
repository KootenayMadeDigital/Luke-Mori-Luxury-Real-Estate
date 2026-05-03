import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { contact, trustPrinciples, trustProofs } from "@/lib/data";

export function TrustLedger() {
  return (
    <section className="tone-walnut tonal-section border-y border-[var(--color-line)] py-32 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute left-[-12%] top-[-18%] h-[460px] w-[460px] rounded-full bg-[rgba(212,184,150,0.08)] blur-[130px]" />
        <div className="absolute bottom-[-20%] right-[-14%] h-[560px] w-[560px] rounded-full bg-[rgba(255,255,255,0.035)] blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <Reveal className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Trust & Proof</Eyebrow>
            <SectionHeading className="mt-7">
              Experience you can
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                trust early.
              </em>
            </SectionHeading>
          </div>
          <SectionLede align="right">
            High-value sellers and private buyers need proof, local knowledge, strong marketing, and a clear process.
          </SectionLede>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] lg:grid-cols-4">
          {trustProofs.map((item, i) => (
            <Reveal key={item.eyebrow} delay={i * 80}>
              <article className="flex h-full min-h-[360px] flex-col bg-[var(--color-bg)] p-8 transition-colors duration-500 hover:bg-[var(--color-surface)] sm:p-9">
                <span className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                  {item.eyebrow}
                </span>
                <h3 className="m-0 mb-5 font-serif text-[28px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="m-0 mb-6 border-l border-[var(--color-bronze)] pl-5 text-[13px] font-medium uppercase leading-[1.65] tracking-[0.16em] text-[var(--color-text)]">
                  {item.proof}
                </p>
                <p className="m-0 mt-auto text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                  {item.meaning}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-stretch">
          <Reveal>
            <div className="grid h-full grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-3">
              {trustPrinciples.map((principle) => (
                <article key={principle.title} className="bg-[rgba(255,255,255,0.025)] p-7 sm:p-8">
                  <h4 className="m-0 mb-3 font-serif text-[22px] font-light leading-[1.2] text-[var(--color-text)]">
                    {principle.title}
                  </h4>
                  <p className="m-0 text-[13px] leading-[1.7] text-[var(--color-text-muted)]">
                    {principle.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="flex h-full flex-col justify-between border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.72)] p-8 sm:p-9">
              <div>
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                  Simple test
                </p>
                <p className="m-0 mt-5 font-serif text-[28px] font-light leading-[1.18] tracking-[-0.005em] text-[var(--color-text)]">
                  Proof should help a client make a calmer decision before they call.
                </p>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col">
                <Button href="/testimonials" variant="ghost" size="md" arrow>
                  Read client voice
                </Button>
                <Button href={contact.phoneHref} variant="primary" size="md">
                  Call {contact.phone}
                </Button>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
