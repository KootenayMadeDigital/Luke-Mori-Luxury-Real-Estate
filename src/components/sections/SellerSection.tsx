import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { contact, sellerPromises } from "@/lib/data";

const sellerSignals = [
  {
    label: "Before market",
    value: "Value, story, and risk are settled privately before the first public impression.",
  },
  {
    label: "During launch",
    value: "Exposure is sequenced through qualified buyers, trusted agents, and controlled distribution.",
  },
  {
    label: "After interest",
    value: "Showings, offers, terms, and timing are managed with discipline until closing.",
  },
];

export function SellerSection() {
  return (
    <section
      id="sellers"
      className="relative overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-32 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[-12%] top-16 h-[420px] w-[420px] rounded-full bg-[rgba(212,184,150,0.08)] blur-[120px]" />
        <div className="absolute bottom-[-18%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[rgba(255,255,255,0.045)] blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.92fr_1.18fr] lg:gap-20 xl:gap-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>Seller Advisory</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading className="mt-7">
                Serious properties
                <br />
                deserve more than
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  an MLS upload.
                </em>
              </SectionHeading>
            </Reveal>
            <Reveal delay={240}>
              <SectionLede className="mb-10">
                A million-dollar home is not a listing task. It is a private launch, with valuation,
                positioning, film, buyer qualification, showing control, and negotiation discipline handled
                before the market gets a vote.
              </SectionLede>
            </Reveal>

            <Reveal delay={340}>
              <div className="flex flex-wrap gap-4">
                <Button href="#consult" variant="primary" size="lg">
                  Request Private Seller Strategy
                </Button>
                <Button href={contact.phoneHref} variant="ghost" size="lg" arrow>
                  Confidential Valuation
                </Button>
              </div>
            </Reveal>

            <Reveal delay={430}>
              <div className="mt-12 border border-[var(--color-line)] bg-[rgba(255,255,255,0.025)] p-7 sm:p-8">
                <p className="m-0 mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                  The seller brief
                </p>
                <p className="m-0 font-serif text-[24px] font-light leading-[1.35] tracking-[-0.005em] text-[var(--color-text)] sm:text-[28px]">
                  Maximum attention from the right people, minimum exposure to everyone else.
                </p>
                <p className="m-0 mt-5 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                  Pricing discipline protects leverage. Property storytelling creates desire. Discretion keeps
                  the process clean.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="border border-[var(--color-line)] bg-[var(--color-bg)] shadow-[0_40px_120px_-80px_rgba(0,0,0,0.9)]">
                <div className="border-b border-[var(--color-line)] p-7 sm:p-9 lg:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <div>
                      <p className="m-0 text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                        Private Launch Framework
                      </p>
                      <h3 className="m-0 mt-4 max-w-[620px] font-serif text-[30px] font-light leading-[1.12] tracking-[-0.01em] text-[var(--color-text)] sm:text-[38px]">
                        The Mori Standard for bringing a serious property to market.
                      </h3>
                    </div>
                    <span className="rounded-full border border-[var(--color-line-strong)] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                      8 stage launch
                    </span>
                  </div>
                </div>

                <ol className="grid grid-cols-1 sm:grid-cols-2">
                  {sellerPromises.map((p, i) => (
                    <Reveal
                      key={p.title}
                      as="li"
                      delay={(i % 4) * 70}
                      className="group min-h-[230px] border-b border-[var(--color-line)] p-7 transition-colors duration-300 hover:bg-[var(--color-surface)] sm:border-r sm:p-8 sm:even:border-r-0 lg:p-9"
                    >
                      <span className="mb-8 inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-line-strong)] font-serif text-[15px] italic tracking-[0.05em] text-[var(--color-bronze-light)] transition-colors duration-300 group-hover:border-[var(--color-bronze)]">
                        {p.num}
                      </span>
                      <h4 className="m-0 mb-3 font-serif text-[23px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                        {p.title}
                      </h4>
                      <p className="m-0 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                        {p.body}
                      </p>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 border border-[var(--color-line)] bg-[rgba(255,255,255,0.025)] md:grid-cols-3">
          {sellerSignals.map((signal, i) => (
            <Reveal
              key={signal.label}
              delay={i * 90}
              className={`p-7 sm:p-8 ${i > 0 ? "border-t border-[var(--color-line)] md:border-l md:border-t-0" : ""}`}
            >
              <p className="m-0 mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                {signal.label}
              </p>
              <p className="m-0 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">
                {signal.value}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
