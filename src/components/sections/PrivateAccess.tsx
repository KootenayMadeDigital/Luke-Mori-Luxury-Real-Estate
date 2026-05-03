import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function PrivateAccess() {
  return (
    <section
      id="private"
      className="tone-dark tonal-section border-b border-[var(--color-line)] py-36 md:py-44"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-45 saturate-[0.72]"
          style={{ backgroundImage: "url('/generated/dark-lake-atmosphere.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(10,11,13,0.18)_0%,rgba(10,11,13,0.9)_72%,rgba(10,11,13,1)_100%)]" />
      </div>

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-[820px] text-center">
          <Eyebrow centered>Off-Market</Eyebrow>
          <SectionHeading centered className="mt-7">
            Some of the best homes in the Kootenays
            <br />
            <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
              are never publicly promoted.
            </em>
          </SectionHeading>
          <SectionLede align="center" className="mb-12">
            Some sellers do not want a public launch. Tell Luke what you are looking for, and he can tell you whether a private introduction is realistic.
          </SectionLede>
          <Button href="#consult" variant="primary" size="lg">
            Ask About Private Homes
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
