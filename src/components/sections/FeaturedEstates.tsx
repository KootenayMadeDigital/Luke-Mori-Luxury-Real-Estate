import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { featuredEstates } from "@/lib/data";

/* The 3 active featured listings — real photos, real specs, real description.
   Each card links to its dedicated property page. */

export function FeaturedEstates() {
  return (
    <section
      id="estates"
      className="border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-32 md:py-36"
    >
      <Container>
        <Reveal className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16">
          <div>
            <Eyebrow>Featured Estates · Active</Eyebrow>
            <SectionHeading className="mt-7">
              A short list of
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                considered properties.
              </em>
            </SectionHeading>
          </div>
          <SectionLede>
            Three properties currently represented — each launched with cinematic film, editorial
            copy, and a dedicated experience. The property as protagonist.
          </SectionLede>
        </Reveal>

        <div className="flex flex-col gap-24 md:gap-28 lg:gap-32">
          {featuredEstates.map((e, i) => (
            <Reveal
              key={e.slug}
              as="article"
              className={`group grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-20 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <Link
                href={`/listings/${e.slug}`}
                className="relative block aspect-[4/3] overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] [direction:ltr]"
              >
                <Image
                  src={e.hero}
                  alt={e.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  priority={i === 0}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,11,13,0.5)]" />
              </Link>

              <div className="[direction:ltr]">
                <div className="mb-6 flex items-center gap-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                  <span>{e.concept}</span>
                  <span className="size-1 rounded-full bg-[var(--color-bronze)]" />
                  <span>{e.area}</span>
                </div>
                <h3 className="m-0 mb-3 font-serif font-light leading-[1.1] tracking-[-0.01em] [font-size:clamp(28px,3.4vw,44px)]">
                  {e.title}
                </h3>
                <p className="m-0 mb-8 font-serif text-[18px] italic text-[var(--color-text-muted)]">
                  {e.shortTitle}
                </p>
                <p className="m-0 mb-9 max-w-[480px] text-[16px] leading-[1.7] text-[var(--color-text-muted)]">
                  {e.body}
                </p>
                <ul className="mb-8 grid max-w-[480px] grid-cols-2 gap-6 border-y border-[var(--color-line)] py-7 sm:grid-cols-4">
                  {e.specs.map((s) => (
                    <li
                      key={s.label}
                      className="flex flex-col gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-dim)]"
                    >
                      <span className="font-serif text-[22px] font-normal italic normal-case tracking-normal text-[var(--color-text)]">
                        {s.value}
                      </span>
                      {s.label}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/listings/${e.slug}`}
                  className="group/link inline-flex items-center gap-3 border-b border-[var(--color-bronze)] pb-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)] transition-colors duration-200 hover:border-[var(--color-bronze-light)] hover:text-[var(--color-bronze-light)]"
                >
                  View this estate
                  <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover/link:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
