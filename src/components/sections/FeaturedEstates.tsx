import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { featuredListings, buildSpecs } from "@/lib/listings";

/* Featured Estates, active listing proof without letting any single card
   dominate the landing page length. */

export function FeaturedEstates() {
  return (
    <section
      id="estates"
      className="tone-dark tonal-section scroll-mt-36 border-y border-[var(--color-line)] py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-75" aria-hidden>
        <div className="absolute left-[-16%] top-[-14%] h-[560px] w-[560px] rounded-full bg-[rgba(212,184,150,0.075)] blur-[150px]" />
        <div className="absolute bottom-[-18%] right-[-14%] h-[620px] w-[620px] rounded-full bg-[rgba(132,162,166,0.055)] blur-[160px]" />
      </div>

      <Container className="relative z-10">
        <Reveal className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-16">
          <div>
            <Eyebrow>Featured Estates · Active</Eyebrow>
            <SectionHeading className="mt-7">
              The active portfolio
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                without the noise.
              </em>
            </SectionHeading>
          </div>
          <div className="md:ml-auto md:max-w-[620px] md:text-right">
            <SectionLede align="right">
              A focused view of the active market: lakefront, acreage, timber frame, riverfront, and view properties. Enough to feel the range before opening the full feed.
            </SectionLede>
            <Link
              href="/listings/luxury"
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)] transition-colors hover:text-[var(--color-bronze-light)]"
            >
              View luxury listings
              <svg viewBox="0 0 16 16" aria-hidden className="size-[14px]">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredListings.map((e, i) => {
            const specs = buildSpecs(e).slice(0, 3);
            const image = e.photos?.[1] ?? e.heroPhoto;
            return (
              <Reveal
                key={e.slug}
                delay={i * 55}
                as="article"
                className="luxury-card group overflow-hidden rounded-[1.7rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.03)] p-1 transition-[transform,border-color,background,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(212,184,150,0.055)]"
              >
                <Link href={`/listings/${e.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[calc(1.7rem-0.25rem)]">
                    {image ? (
                      <Image
                        src={image}
                        alt={e.address}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="luxury-media object-cover"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.06),rgba(10,11,13,0.22)_48%,rgba(10,11,13,0.86))]" />
                    <div className="absolute left-5 top-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze-light)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {e.price ? (
                      <div className="absolute right-5 top-5 font-serif text-[20px] italic text-[var(--color-text)] drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]">
                        {e.price}
                      </div>
                    ) : null}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="m-0 font-serif text-[25px] font-light leading-[1.05] tracking-[-0.01em] text-[var(--color-text)]">
                        {e.address}
                      </h3>
                      <p className="m-0 mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronze-light)]">
                        {e.location || e.propertyType}
                      </p>
                    </div>
                  </div>
                  {specs.length > 0 ? (
                    <ul className="grid grid-cols-3 gap-px bg-[var(--color-line)]">
                      {specs.map((s) => (
                        <li key={s.label} className="bg-[rgba(10,11,13,0.72)] px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-dim)]">
                          <span className="mb-1 block font-serif text-[19px] italic normal-case tracking-normal text-[var(--color-text)]">
                            {s.value}
                          </span>
                          {s.label}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
