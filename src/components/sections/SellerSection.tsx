import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteImages, contact, sellerPromises } from "@/lib/data";

const sellerSignals = [
  {
    label: "Before listing",
    value: "Value, presentation, and showing plan are settled before buyers form an opinion.",
  },
  {
    label: "Once listed",
    value: "The home is shared with serious buyers, trusted agents, and the channels most likely to reach the right person.",
  },
  {
    label: "After interest",
    value: "Showings, offers, terms, and timing are handled as one plan through closing.",
  },
];

export function SellerSection() {
  return (
    <section
      id="sellers"
      className="tone-lake tonal-section border-y border-[var(--color-line)] py-32 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[-12%] top-16 h-[420px] w-[420px] rounded-full bg-[rgba(212,184,150,0.08)] blur-[120px]" />
        <div className="absolute bottom-[-18%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[rgba(255,255,255,0.045)] blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.92fr_1.18fr] lg:gap-20 xl:gap-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>For Sellers</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading className="mt-7">
                Important homes
                <br />
                need a plan before
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  they need a sign.
                </em>
              </SectionHeading>
            </Reveal>
            <Reveal delay={240}>
              <SectionLede className="mb-10">
                Before a home is listed, price, likely buyer, visuals, privacy, and showing plan should already be clear.
              </SectionLede>
            </Reveal>

            <Reveal delay={340}>
              <div className="flex flex-wrap gap-4">
                <Button href="#consult" variant="primary" size="lg">
                  Plan Your Sale
                </Button>
                <Button href={contact.phoneHref} variant="ghost" size="lg" arrow>
                  Ask About Value
                </Button>
              </div>
            </Reveal>

            <Reveal delay={430}>
              <div className="mt-12 overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_30px_90px_-70px_rgba(0,0,0,0.9)]">
                <div className="grid grid-cols-[1.15fr_0.85fr] gap-px bg-[var(--color-line)]">
                  <div className="relative min-h-[230px] bg-[var(--color-bg)]">
                    <Image
                      src={siteImages.sellerDining}
                      alt="Staged dining room ready for a thoughtful property listing"
                      fill
                      sizes="(min-width: 1024px) 34vw, 100vw"
                      className="object-cover opacity-90 saturate-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.02),rgba(10,11,13,0.56))]" aria-hidden />
                    <span className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze-light)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.78)]">
                      Presentation
                    </span>
                  </div>
                  <div className="grid grid-rows-2 gap-px bg-[var(--color-line)]">
                    {[siteImages.lukeSellerSign, siteImages.sellerStudy].map((src, i) => (
                      <div key={src} className="relative min-h-[114px] bg-[var(--color-bg)]">
                        <Image
                          src={src}
                          alt={i === 0 ? "Luke Mori seller sign" : "Prepared study room for real estate presentation"}
                          fill
                          sizes="(min-width: 1024px) 16vw, 50vw"
                          className="object-cover opacity-86 saturate-[1.05]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.05),rgba(10,11,13,0.46))]" aria-hidden />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-7 sm:p-8">
                <p className="m-0 mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                  Seller Plan
                </p>
                <p className="m-0 font-serif text-[24px] font-light leading-[1.35] tracking-[-0.005em] text-[var(--color-text)] sm:text-[28px]">
                  Attract the right buyers without turning your home into public noise.
                </p>
                <p className="m-0 mt-5 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                  Price with discipline, present the home well, qualify interest early, and keep the process calm through closing.
                </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
            <div className="border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_40px_120px_-80px_rgba(0,0,0,0.45)]">
                <div className="border-b border-[var(--color-line)] p-7 sm:p-9 lg:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <div>
                      <p className="m-0 text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                        Seller Marketing Plan
                      </p>
                      <h3 className="m-0 mt-4 max-w-[620px] font-serif text-[30px] font-light leading-[1.12] tracking-[-0.01em] text-[var(--color-text)] sm:text-[38px]">
                        How Luke brings a property to market.
                      </h3>
                    </div>
                    <span className="rounded-full border border-[var(--color-line-strong)] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                      8 steps
                    </span>
                  </div>
                </div>

                <ol className="grid grid-cols-1 sm:grid-cols-2">
                  {sellerPromises.map((p, i) => (
                    <Reveal
                      key={p.title}
                      as="li"
                      delay={(i % 4) * 70}
                      className="luxury-card group min-h-[230px] border-b border-[var(--color-line)] p-7 transition-[background,transform,box-shadow] duration-500 hover:-translate-y-1 hover:bg-[var(--color-surface)] sm:border-r sm:p-8 sm:even:border-r-0 lg:p-9"
                    >
                      <span className="mb-8 inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-line-strong)] font-serif text-[15px] italic tracking-[0.05em] text-[var(--color-bronze-light)] transition-colors duration-300 group-hover:border-[var(--color-bronze)]">
                        {p.num}
                      </span>
                      <h3 className="m-0 mb-3 font-serif text-[23px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                        {p.title}
                      </h3>
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

        <div className="mt-16 grid grid-cols-1 border border-[var(--color-line)] bg-[var(--color-surface)] md:grid-cols-3">
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
