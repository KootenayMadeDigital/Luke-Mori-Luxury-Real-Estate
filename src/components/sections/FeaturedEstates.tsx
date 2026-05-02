import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { featuredListings, buildSpecs, isLukesOwn } from "@/lib/listings";

/* Featured Estates, Luke's three highest-priced active listings.
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
              Currently represented
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                by Luke.
              </em>
            </SectionHeading>
          </div>
          <SectionLede>
            Three properties launched with the full standard, cinematic film, editorial copy, and
            a dedicated property experience. The property as protagonist.
          </SectionLede>
        </Reveal>

        <div className="flex flex-col gap-24 md:gap-28 lg:gap-32">
          {featuredListings.map((e, i) => {
            const specs = buildSpecs(e);
            const lukes = isLukesOwn(e);
            return (
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
                  {e.heroPhoto && (
                    <Image
                      src={e.heroPhoto}
                      alt={e.address}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      priority={i === 0}
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,11,13,0.5)]" />
                  {lukes && (
                    <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-[1px] border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bg)]">
                      <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden>
                        <circle cx="6" cy="6" r="5" fill="currentColor" />
                      </svg>
                      Listed by Luke
                    </div>
                  )}
                  {e.price && (
                    <div className="absolute bottom-5 left-5 font-serif italic text-[var(--color-text)] [font-size:clamp(22px,2.4vw,30px)]">
                      {e.price}
                    </div>
                  )}
                </Link>

                <div className="[direction:ltr]">
                  <div className="mb-6 flex items-center gap-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                    <span>Concept No. {String(i + 1).padStart(2, "0")}</span>
                    <span className="size-1 rounded-full bg-[var(--color-bronze)]" />
                    <span>{e.location || e.propertyType}</span>
                  </div>
                  <h3 className="m-0 mb-3 font-serif font-light leading-[1.1] tracking-[-0.01em] [font-size:clamp(28px,3.4vw,44px)]">
                    {e.address}
                  </h3>
                  {e.propertyType && (
                    <p className="m-0 mb-8 font-serif text-[18px] italic text-[var(--color-text-muted)]">
                      {e.propertyType}
                      {e.yearBuilt ? ` · Built ${e.yearBuilt}` : ""}
                    </p>
                  )}
                  <p className="m-0 mb-9 max-w-[480px] text-[16px] leading-[1.7] text-[var(--color-text-muted)]">
                    {e.description.length > 280
                      ? e.description.slice(0, 277).trimEnd() + "…"
                      : e.description}
                  </p>
                  {specs.length > 0 && (
                    <ul className="mb-8 grid max-w-[480px] grid-cols-2 gap-6 border-y border-[var(--color-line)] py-7 sm:grid-cols-4">
                      {specs.map((s) => (
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
                  )}
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
            );
          })}
        </div>
      </Container>
    </section>
  );
}
