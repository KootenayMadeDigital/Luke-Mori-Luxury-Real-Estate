import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { AreaArt } from "@/components/ui/AreaArt";
import { signatureAreas } from "@/lib/data";

export function SignatureAreas() {
  return (
    <section id="areas" className="bg-[var(--color-bg)] py-32 md:py-36">
      <Container>
        <Reveal className="mb-20 max-w-[760px]">
          <Eyebrow>Signature Areas</Eyebrow>
          <SectionHeading className="mt-7">
            Luke is the human map
            <br />
            <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
              of the lake market.
            </em>
          </SectionHeading>
          <SectionLede>
            The Kootenays don&apos;t have suburbs. They have corridors with reputations,
            microclimates, shorelines, builder histories, and buyer profiles. Start here before you tour.
          </SectionLede>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {signatureAreas.map((a, i) => (
            <Reveal
              key={a.name}
              delay={i * 60}
              as="article"
              className={`group relative flex flex-col overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[var(--color-line-strong)] ${
                a.feature ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="size-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
                  <AreaArt artId={a.artId} />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,11,13,0.6)]" />
              </div>

              <div className="flex flex-1 flex-col p-9 sm:p-10">
                <div className="mb-4 font-serif text-[13px] italic tracking-[0.1em] text-[var(--color-bronze)]">
                  {a.index}
                </div>
                <h3 className="m-0 mb-4 font-serif font-normal leading-[1.15] tracking-[-0.005em] [font-size:clamp(24px,2.4vw,32px)]">
                  {a.name}
                </h3>
                <p className="m-0 mb-6 flex-1 text-[15px] leading-[1.65] text-[var(--color-text-muted)]">
                  {a.body}
                </p>
                <p className="m-0 mb-7 border-l border-[var(--color-bronze)] pl-5 text-[13px] leading-[1.65] text-[var(--color-text-muted)]">
                  {a.intent}
                </p>
                <div className="mt-auto border-t border-[var(--color-line)] pt-5">
                  <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                    {a.tags}
                  </div>
                  <a
                    href={a.href}
                    className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)] transition-colors hover:text-[var(--color-bronze-light)]"
                  >
                    {a.cta}
                    <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220} className="mt-12 border border-[var(--color-line)] bg-[var(--color-surface)] p-8 md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <div className="mb-4 text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--color-bronze)]">
                Area fit advisory
              </div>
              <h3 className="m-0 font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)] md:text-[34px]">
                The first question is not price. It is fit.
              </h3>
            </div>
            <p className="m-0 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">
              Waterfront buyers compare shoreline and sun. Nelson buyers compare walkability and grade. Acreage buyers compare access, water, outbuildings, and winter maintenance. A serious search begins by narrowing the lifestyle brief, then the listings.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
