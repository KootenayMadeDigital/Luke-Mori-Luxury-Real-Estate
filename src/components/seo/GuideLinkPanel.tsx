import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type GuideLink = {
  title: string;
  body: string;
  href: string;
};

type Props = {
  eyebrow?: string;
  title?: string;
  lede?: string;
  tone?: "ivory" | "office" | "lake";
  links: GuideLink[];
};

const toneClass = {
  ivory: "tone-ivory",
  office: "tone-office",
  lake: "tone-lake",
};

export function GuideLinkPanel({
  eyebrow = "Helpful Guides",
  title = "Useful questions before the next step.",
  lede = "These short guides help buyers and sellers sort the issues that usually come up before a showing, offer, or sale plan.",
  tone = "office",
  links,
}: Props) {
  return (
    <section className={`${toneClass[tone]} tonal-section border-y border-[var(--color-line)] py-20 md:py-24`}>
      <Container>
        <Reveal className="mb-10 grid grid-cols-1 gap-7 md:grid-cols-[0.8fr_1fr] md:items-end">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <SectionHeading className="mt-7">{title}</SectionHeading>
          </div>
          <SectionLede align="right">{lede}</SectionLede>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {links.map((link, index) => (
            <Reveal key={link.href} delay={index * 70}>
              <Link href={link.href} className="luxury-card group block h-full border border-[var(--color-line)] bg-[var(--color-bg)] p-6 transition-[transform,border-color,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-[var(--color-bronze)] hover:bg-[var(--color-surface)] sm:p-7">
                <h3 className="m-0 font-serif text-[28px] font-light leading-[1.12] text-[var(--color-text)] transition-colors duration-500 group-hover:text-[var(--color-bronze-light)]">{link.title}</h3>
                <p className="m-0 mt-4 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">{link.body}</p>
                <span className="mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                  Read the guide
                  <svg viewBox="0 0 16 16" aria-hidden className="luxury-arrow size-[14px]">
                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
