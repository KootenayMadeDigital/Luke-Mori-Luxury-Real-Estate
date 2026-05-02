import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { authorityPillars } from "@/lib/data";

export function AuthorityStrip() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-bg)] py-24 md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {authorityPillars.map((p, i) => (
            <Reveal
              key={p.number}
              delay={i * 80}
              className={[
                "px-0 lg:px-8",
                i > 0 ? "border-t border-[var(--color-line)] pt-8 sm:border-t-0 sm:pt-0 lg:border-l" : "",
                i === 1 ? "sm:border-t-0 sm:pt-0" : "",
                i === 0 ? "lg:pl-0" : "",
                i === authorityPillars.length - 1 ? "lg:pr-0" : "",
              ].join(" ")}
            >
              <div className="mb-6 font-serif text-[14px] italic tracking-[0.1em] text-[var(--color-bronze)]">
                {p.number}
              </div>
              <h3 className="m-0 mb-4 font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.005em] text-[var(--color-text)]">
                {p.title}
              </h3>
              <p className="m-0 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
