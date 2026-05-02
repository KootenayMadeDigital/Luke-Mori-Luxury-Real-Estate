import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { lifestyleTiles } from "@/lib/data";

export function LifestyleSection() {
  return (
    <section id="lifestyle" className="bg-[var(--color-bg)] py-32 md:py-36">
      <Container>
        <Reveal className="mb-20 max-w-[760px]">
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
            Specs are downstream. Start with the kind of life — we&apos;ll show you the addresses that produce it.
          </SectionLede>
        </Reveal>

        <div className="grid grid-cols-1 border-l border-t border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {lifestyleTiles.map((t, i) => (
            <Reveal
              key={t.num}
              delay={(i % 4) * 60}
              className="border-b border-r border-[var(--color-line)]"
            >
              <a
                href={t.href ?? "/contact"}
                className="group relative flex h-full flex-col gap-3 p-9 transition-colors duration-400 hover:bg-[var(--color-surface)] sm:p-10 sm:pb-10 lg:min-h-[260px]"
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
                <h3 className="m-0 mb-2 font-serif text-[26px] font-normal leading-[1.15] tracking-[-0.005em]">
                  {t.title}
                </h3>
                <p className="m-0 max-w-[34ch] text-[13px] leading-[1.6] text-[var(--color-text-muted)]">
                  {t.body}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
