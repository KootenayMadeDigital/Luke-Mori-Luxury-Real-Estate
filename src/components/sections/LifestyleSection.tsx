import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { lifestyleTiles } from "@/lib/data";

export function LifestyleSection() {
  return (
    <section id="lifestyle" className="tone-ivory tonal-section py-32 md:py-36">
      <Container>
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.65fr] lg:items-end">
          <Reveal className="max-w-[760px]">
            <Eyebrow>For Buyers</Eyebrow>
            <SectionHeading className="mt-7">
              Find a home
              <br />
              by{" "}
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                how you want to live.
              </em>
            </SectionHeading>
            <SectionLede>
              The right home starts with the life it has to support. Lake, town, acreage, skiing, guests, work, and winter all change what a property is worth to you.
            </SectionLede>
          </Reveal>

          <Reveal delay={140} className="border border-[var(--color-line)] bg-[var(--color-surface)] p-7 sm:p-8">
            <p className="m-0 mb-6 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
              Waterfront, walkability, acreage, skiing, relocation, and second-home ownership each carry different costs, risks, and routines. Choose the life first. The map gets smaller fast.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/listings/waterfront" variant="primary" size="md">
                View Waterfront
              </Button>
              <Button href="/contact" variant="ghost" size="md" arrow>
                Ask About Private Homes
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {lifestyleTiles.map((t, i) => (
            <Reveal
              key={t.num}
              delay={(i % 4) * 60}
              className="border-b border-r border-[var(--color-line)]"
            >
              <a
                href={t.href}
                className="group relative flex h-full flex-col gap-3 p-8 transition-colors duration-400 hover:bg-[var(--color-surface)] sm:p-9 sm:pb-10 lg:min-h-[300px]"
              >
                <span
                  aria-hidden
                  className="absolute right-8 top-8 text-[18px] text-[var(--color-text-dim)] transition-[color,transform] duration-400 group-hover:translate-x-1 group-hover:text-[var(--color-bronze)]"
                >
                  →
                </span>
                <span className="mb-4 font-serif text-[13px] italic tracking-[0.08em] text-[var(--color-bronze)]">
                  {t.num}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                  {t.kicker}
                </span>
                <h3 className="m-0 mb-2 font-serif text-[26px] font-normal leading-[1.15] tracking-[-0.005em]">
                  {t.title}
                </h3>
                <p className="m-0 max-w-[34ch] flex-1 text-[13px] leading-[1.65] text-[var(--color-text-muted)]">
                  {t.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-bronze)]">
                  {t.cta}
                  <svg viewBox="0 0 16 16" aria-hidden className="size-[13px] transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180} className="mt-12 grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-3">
          {[
            { href: "/nelson", label: "Compare areas", body: "Use Nelson, North Shore, Balfour, Blewett, and Slocan Valley as lifestyle filters before touring." },
            { href: "/buyers/relocation", label: "Plan relocation call", body: "Map schools, seasons, healthcare, commute, and first-scouting trips before choosing an area." },
            { href: "/buyers/international", label: "Ask about second homes", body: "Review absentee ownership, local care, advisor introductions, and cross-border logistics early." },
          ].map((item) => (
            <a key={item.href} href={item.href} className="group bg-[var(--color-bg)] p-7 transition-colors hover:bg-[var(--color-surface)]">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                {item.label}
              </span>
              <p className="m-0 mt-3 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                {item.body}
              </p>
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
