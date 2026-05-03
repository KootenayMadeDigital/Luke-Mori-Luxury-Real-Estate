import Image from "next/image";
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
        <Image
          src="/generated/dark-lake-atmosphere.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-75 saturate-[0.9] brightness-[1.08]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_54%_46%_at_50%_48%,rgba(10,11,13,0.28)_0%,rgba(10,11,13,0.52)_58%,rgba(10,11,13,0.9)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgba(10,11,13,0.86)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[rgba(10,11,13,0.92)] to-transparent" />
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
            Some sellers do not want a public launch. Tell Luke what you are looking for, and he can tell you whether a private introduction is possible.
          </SectionLede>
          <Button href="#consult" variant="primary" size="lg">
            Ask About Private Homes
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
