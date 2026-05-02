import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { ConsultForm } from "@/components/forms/ConsultForm";

const guideContents = [
  "Neighbourhood-by-neighbourhood market dossier",
  "Architect & builder shortlist",
  "Waterfront, ski, and acreage buyer playbooks",
  "Off-market inventory introduction",
];

export function LeadMagnet() {
  return (
    <section
      id="consult"
      className="border-t border-[var(--color-line)] bg-[var(--color-bg)] py-32 md:py-36"
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>The Private Guide</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading className="mt-7">
                Nelson &amp; Kootenay Lake
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  Luxury Living.
                </em>
              </SectionHeading>
            </Reveal>
            <Reveal delay={240}>
              <SectionLede className="mb-9">
                A considered field guide for relocating buyers, second-home owners, and discerning sellers:
                neighbourhoods, market rhythm, architects, schools, and the questions worth asking before
                you fly in to view.
              </SectionLede>
            </Reveal>
            <Reveal delay={360} as="ul" className="flex flex-col gap-3.5">
              {guideContents.map((g) => (
                <li
                  key={g}
                  className="relative pl-6 text-[15px] font-light text-[var(--color-text)] before:absolute before:left-0 before:top-3 before:h-px before:w-3 before:bg-[var(--color-bronze)] before:content-['']"
                >
                  {g}
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal delay={200}>
            <ConsultForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
