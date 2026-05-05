import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import type { AreaIntelligence as AreaIntelligenceData } from "@/lib/area-intelligence";

type Props = {
  areaName: string;
  intelligence: AreaIntelligenceData;
};

export function AreaIntelligence({ areaName, intelligence }: Props) {
  return (
    <>
      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <Eyebrow>Relocation Guide</Eyebrow>
              <SectionHeading className="mt-7">
                Could you see
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  your life in {areaName}?
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">{intelligence.thesis}</SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] lg:grid-cols-[1fr_0.9fr]">
            <Reveal className="bg-[var(--color-bg)] p-8 sm:p-10 lg:p-12">
              <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                Buyer focus
              </span>
              <p className="m-0 max-w-[780px] font-serif text-[28px] font-light leading-[1.2] tracking-[-0.01em] text-[var(--color-text)] sm:text-[34px]">
                {intelligence.buyerFocus}
              </p>
            </Reveal>
            <Reveal delay={80} className="bg-[var(--color-surface)] p-8 sm:p-10 lg:p-12">
              <span className="mb-6 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                Daily rhythm
              </span>
              <ul className="space-y-5">
                {intelligence.dailyLife.map((item) => (
                  <li key={item} className="border-l border-[var(--color-bronze)] pl-5 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="tone-ivory tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <Eyebrow>What to Look For</Eyebrow>
              <SectionHeading className="mt-7">
                The property type
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  has to match the life.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Buyers are not just buying square footage. They are buying the week, the season, the guest pattern, the maintenance load, and the future resale story.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-4">
            {intelligence.propertyTypes.map((type, i) => (
              <Reveal key={type} delay={i * 60} className="luxury-card bg-[var(--color-bg)] p-7 transition-[background,transform,box-shadow] duration-500 hover:-translate-y-1 hover:bg-[var(--color-surface)] sm:p-8">
                <span className="mb-8 block font-serif text-[18px] italic text-[var(--color-bronze)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="m-0 text-[15px] font-medium leading-[1.7] text-[var(--color-text-muted)]">
                  {type}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-lake tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 max-w-[760px]">
            <Eyebrow>Local Pockets</Eyebrow>
            <SectionHeading className="mt-7">
              Search smaller
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                than the map label.
              </em>
            </SectionHeading>
            <SectionLede>
              Two addresses in the same area can live completely differently. These are the pockets and tradeoffs worth understanding before the short list gets serious.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {intelligence.microPockets.map((pocket, i) => (
              <Reveal key={pocket.name} delay={i * 55} className="luxury-card border border-[var(--color-line)] bg-[var(--color-surface)] p-7 transition-[background,transform,box-shadow] duration-500 hover:-translate-y-1 hover:bg-[var(--color-bg)] sm:p-8">
                <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  Pocket {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 mb-3 font-serif text-[26px] font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                  {pocket.name}
                </h3>
                <p className="m-0 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                  {pocket.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-walnut tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <Eyebrow>Before You Pay More</Eyebrow>
              <SectionHeading className="mt-7">
                The costly part
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  is what you miss.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              These are not scare tactics. They are the checks that keep a beautiful listing from becoming an avoidable regret.
            </SectionLede>
          </Reveal>

          <div className="border-y border-[var(--color-line)]">
            {intelligence.dueDiligence.map((item, i) => (
              <Reveal key={item.label} delay={i * 60} className="grid grid-cols-1 gap-5 border-b border-[var(--color-line)] py-8 last:border-b-0 md:grid-cols-[80px_0.7fr_1.5fr] md:items-baseline md:gap-8">
                <span className="hidden font-serif text-[18px] italic tracking-[0.08em] text-[var(--color-bronze)] md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-serif text-[25px] font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                  {item.label}
                </h3>
                <p className="m-0 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1fr] md:items-end">
            <div>
              <Eyebrow>Buyer Questions</Eyebrow>
              <SectionHeading className="mt-7">
                What people ask
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  before they move.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              The search should answer the obvious questions first, then get precise about addresses, views, access, and privacy.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] lg:grid-cols-3">
            {intelligence.faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 70} className="bg-[var(--color-bg)] p-8 sm:p-9">
                <h3 className="m-0 mb-4 font-serif text-[24px] font-light leading-[1.2] tracking-[-0.005em] text-[var(--color-text)]">
                  {faq.question}
                </h3>
                <p className="m-0 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">
                  {faq.answer}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220} className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-full border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] transition-colors hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]">
              {intelligence.cta}
            </Link>
            <Link href="/listings/luxury" className="rounded-full border border-[var(--color-line-strong)] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
              View luxury listings
            </Link>
            <Link href="/buyers/relocation" className="rounded-full border border-[var(--color-line-strong)] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
              Plan relocation
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
