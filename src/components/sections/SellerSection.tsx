import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { sellerPromises } from "@/lib/data";

export function SellerSection() {
  return (
    <section
      id="sellers"
      className="border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-32 md:py-36"
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>For Sellers</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading className="mt-7">
                Your property deserves
                <br />
                more than an
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  MLS upload.
                </em>
              </SectionHeading>
            </Reveal>
            <Reveal delay={240}>
              <SectionLede className="mb-10">
                Most agents post a property. We launch one. Cinematic film, editorial copy, a dedicated
                property site, and a controlled, qualified buyer rollout, built around your discretion,
                your timeline, and the price your home actually deserves.
              </SectionLede>
            </Reveal>
            <Reveal delay={360}>
              <Button href="#consult" variant="primary">Request a Seller Strategy Call</Button>
            </Reveal>
          </div>

          <ul className="grid grid-cols-1 border-l border-t border-[var(--color-line)] sm:grid-cols-2">
            {sellerPromises.map((p, i) => (
              <Reveal
                key={p.title}
                as="li"
                delay={(i % 4) * 80}
                className="flex gap-4 border-b border-r border-[var(--color-line)] p-8 transition-colors duration-300 hover:bg-[var(--color-surface)]"
              >
                <span className="min-w-6 shrink-0 pt-1 font-serif text-[16px] italic tracking-[0.05em] text-[var(--color-bronze)]">
                  {p.num}
                </span>
                <div>
                  <h4 className="m-0 mb-2 font-serif text-[20px] font-normal leading-[1.2] tracking-[-0.005em] text-[var(--color-text)]">
                    {p.title}
                  </h4>
                  <p className="m-0 text-[14px] leading-[1.6] text-[var(--color-text-muted)]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
