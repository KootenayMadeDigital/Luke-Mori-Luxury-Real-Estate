import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function PrivateAccess() {
  return (
    <section
      id="private"
      className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg)] py-36 md:py-44"
    >
      {/* Background scene */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <svg viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice" className="size-full">
          <defs>
            <radialGradient id="pg" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#1a1812" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0a0b0d" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="1600" height="600" fill="url(#pg)" />
          <path
            d="M0 420 L160 360 L320 400 L480 350 L640 390 L800 340 L960 380 L1120 340 L1280 380 L1440 350 L1600 380 L1600 600 L0 600 Z"
            fill="#0a0b0d"
            opacity="0.9"
          />
        </svg>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, rgba(10,11,13,0.85) 100%)",
          }}
        />
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
            A private inventory of unlisted estates — represented for owners who require complete discretion.
            Access is granted on an introductory basis, by request.
          </SectionLede>
          <Button href="#consult" variant="primary" size="lg">
            Request Private Access
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
