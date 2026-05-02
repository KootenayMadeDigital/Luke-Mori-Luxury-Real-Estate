import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";

export function ConceptFooter() {
  return (
    <footer className="relative border-t border-[var(--color-line)] bg-[#07080a] py-32 md:py-36">
      {/* Bronze hairline at the very top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px opacity-40"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-bronze) 50%, transparent 100%)",
        }}
      />

      <Container>
        <Reveal className="mx-auto mb-24 max-w-[800px] text-center md:mb-28">
          <div className="mb-8 inline-flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
            <BrandMark className="size-[22px] text-[var(--color-bronze)]" />
            Kootenay Made Digital
          </div>
          <h2 className="m-0 mb-7 font-serif font-light leading-[1.15] tracking-[-0.01em] [font-size:clamp(28px,4vw,48px)]">
            Built as a concept by{" "}
            <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
              Kootenay Made Digital.
            </em>
          </h2>
          <p className="m-0 mb-10 text-[16px] leading-[1.7] text-[var(--color-text-muted)]">
            This is a speculative concept created to demonstrate a higher standard of luxury real
            estate web experience for the Nelson and Kootenay Lake market. Not affiliated with — or
            endorsed by — Luke Mori. Every word, image, and interaction is custom-built. So is yours,
            if you&apos;d like one.
          </p>
          <Button href="mailto:hello@kootenaymade.example" variant="primary" size="lg">
            Build a private luxury experience for your brand
          </Button>
        </Reveal>

        <div className="grid grid-cols-2 gap-8 pb-14 md:grid-cols-4">
          <FooterCol label="Concept">
            Luke Mori Luxury · Nelson &amp; Kootenay Lake
          </FooterCol>
          <FooterCol label="Created by">Kootenay Made Digital</FooterCol>
          <FooterCol label="Status">Speculative · Not a live brand site</FooterCol>
          <FooterCol label="Contact" right>
            <a
              href="mailto:hello@kootenaymade.example"
              className="text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]"
            >
              hello@kootenaymade.example
            </a>
          </FooterCol>
        </div>

        <div className="h-px bg-[var(--color-line)]" />

        <div className="mt-8 flex flex-col gap-2 text-[11px] tracking-[0.05em] text-[var(--color-text-dim)] sm:flex-row sm:justify-between sm:gap-6">
          <span>© 2026 Kootenay Made Digital — Concept Work</span>
          <span>
            Property names, descriptions, and statistics shown are illustrative concepts.
          </span>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  label,
  children,
  right = false,
}: {
  label: string;
  children: React.ReactNode;
  right?: boolean;
}) {
  return (
    <div className={right ? "md:text-right" : ""}>
      <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
        {label}
      </span>
      <p className="m-0 text-[14px] font-light leading-[1.5] text-[var(--color-text)]">
        {children}
      </p>
    </div>
  );
}
