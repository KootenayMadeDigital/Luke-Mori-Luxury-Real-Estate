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
            A neighbourhood is a thesis.
            <br />
            <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
              Choose carefully.
            </em>
          </SectionHeading>
          <SectionLede>
            The Kootenays don&apos;t have suburbs. They have addresses with reputations.
            These are the corridors where Nelson&apos;s most considered properties tend to sit.
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
                <div className="border-t border-[var(--color-line)] pt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                  {a.tags}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
