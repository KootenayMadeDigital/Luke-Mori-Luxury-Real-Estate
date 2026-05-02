import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { contact, inquiryPaths } from "@/lib/data";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  body?: string;
  compact?: boolean;
};

export function PrivateInquiryPaths({
  id,
  eyebrow = "Private Office Paths",
  title = "Four ways into",
  emphasis = "the right room.",
  body = "A luxury inquiry should not land in a generic inbox. The first decision is routing: seller strategy, private buyer brief, relocation or second-home planning, or a custom concept review for agents and brokerages.",
  compact = false,
}: Props) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-bg)] ${compact ? "py-20 md:py-24" : "py-28 md:py-32"}`}
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] opacity-[0.16] grayscale lg:block"
        style={{ backgroundImage: "url('/generated/private-office-texture.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--color-bg)_0%,rgba(10,11,13,0.96)_56%,rgba(10,11,13,0.74)_100%)]" aria-hidden />
      <Container className="relative z-10">
        <Reveal className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.84fr_1fr] lg:items-end">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <SectionHeading className="mt-7">
              {title}
              {emphasis && (
                <>
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    {emphasis}
                  </em>
                </>
              )}
            </SectionHeading>
          </div>
          <SectionLede align="right">{body}</SectionLede>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-4">
          {inquiryPaths.map((path, i) => {
            const external = path.href.startsWith("http");
            return (
              <Reveal key={path.audience} delay={(i % 4) * 70}>
                <a
                  href={path.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex h-full min-h-[320px] flex-col bg-[var(--color-bg-2)] p-7 transition-colors duration-500 hover:bg-[var(--color-surface)] sm:p-8"
                >
                  <div className="mb-7 flex items-center justify-between gap-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">
                      {path.audience}
                    </span>
                    <span className="font-serif text-[18px] italic text-[var(--color-text-dim)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="m-0 mb-4 max-w-[14ch] font-serif text-[27px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)]">
                    {path.title}
                  </h3>
                  <p className="m-0 mb-6 flex-1 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                    {path.body}
                  </p>
                  <p className="m-0 border-t border-[var(--color-line)] pt-5 text-[11px] font-medium uppercase leading-[1.65] tracking-[0.16em] text-[var(--color-text-dim)]">
                    {path.proof}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                    {path.cta}
                    <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={180} className="mt-10 flex flex-col gap-4 border border-[var(--color-line)] bg-[rgba(255,255,255,0.025)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="m-0 max-w-[640px] text-[13px] leading-[1.7] text-[var(--color-text-muted)]">
            Prefer direct? Call the private office or open a file through the contact page. The right next step depends on the mandate, not the form field.
          </p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact" variant="primary" size="md">
              Open private file
            </Button>
            <Button href={contact.phoneHref} variant="ghost" size="md" arrow>
              Call direct
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
