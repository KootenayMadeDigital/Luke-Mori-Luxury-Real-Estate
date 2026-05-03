import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { featuredListings, buildSpecs, isLukesOwn } from "@/lib/listings";

/* Featured Estates, Luke's active listing proof wall.
   Eight listings create the credibility moment the page needs. */

export function FeaturedEstates() {
  const [lead, ...supporting] = featuredListings;
  const leadSpecs = lead ? buildSpecs(lead) : [];
  const leadImage = lead?.photos?.[1] ?? lead?.heroPhoto;

  return (
    <section
      id="estates"
      className="tone-dark tonal-section border-y border-[var(--color-line)] py-28 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
        <div className="absolute left-[-16%] top-[-10%] h-[620px] w-[620px] rounded-full bg-[rgba(212,184,150,0.08)] blur-[160px]" />
        <div className="absolute bottom-[-18%] right-[-14%] h-[680px] w-[680px] rounded-full bg-[rgba(132,162,166,0.06)] blur-[170px]" />
      </div>

      <Container className="relative z-10">
        <Reveal className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-16">
          <div>
            <Eyebrow>Featured Estates · Active</Eyebrow>
            <SectionHeading className="mt-7">
              The active portfolio
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                becomes the proof.
              </em>
            </SectionHeading>
          </div>
          <div className="md:ml-auto md:max-w-[620px] md:text-right">
            <SectionLede align="right">
              Eight active properties, arranged like a private market wall. Lakefront, acreage, timber frame, riverfront, and view inventory give sellers immediate evidence that Luke can carry serious listings with taste.
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

        {lead ? (
          <Reveal>
            <article className="group mb-6 overflow-hidden rounded-[2.4rem] border border-[var(--color-line-strong)] bg-[rgba(212,184,150,0.055)] p-1.5 shadow-[0_38px_120px_-68px_rgba(0,0,0,0.95)]">
              <div className="grid overflow-hidden rounded-[calc(2.4rem-0.375rem)] bg-[var(--color-bg)] lg:grid-cols-[1.34fr_0.66fr]">
                <Link href={`/listings/${lead.slug}`} className="relative min-h-[520px] overflow-hidden lg:min-h-[680px]">
                  {leadImage ? (
                    <Image
                      src={leadImage}
                      alt={lead.address}
                      fill
                      priority
                      sizes="(min-width: 1024px) 64vw, 100vw"
                      className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.08),rgba(10,11,13,0.12)_38%,rgba(10,11,13,0.78))]" />
                  {isLukesOwn(lead) ? (
                    <div className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-bronze)] bg-[rgba(212,184,150,0.94)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-button-text)]">
                      <span className="size-2 rounded-full bg-current" />
                      Listed by Luke
                    </div>
                  ) : null}
                  {lead.price ? (
                    <div className="absolute bottom-7 left-7 font-serif italic text-[var(--color-text)] drop-shadow-[0_8px_32px_rgba(0,0,0,0.9)] [font-size:clamp(30px,4vw,58px)]">
                      {lead.price}
                    </div>
                  ) : null}
                </Link>

                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                  <div>
                    <div className="mb-7 flex items-center gap-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                      <span>Portfolio No. 01</span>
                      <span className="size-1 rounded-full bg-[var(--color-bronze)]" />
                      <span>{lead.location || lead.propertyType}</span>
                    </div>
                    <h3 className="m-0 max-w-[12ch] font-serif text-[clamp(38px,5.4vw,82px)] font-light leading-[0.94] tracking-[-0.02em] text-[var(--color-text)]">
                      {lead.address}
                    </h3>
                    {lead.propertyType ? (
                      <p className="m-0 mt-6 font-serif text-[20px] italic text-[var(--color-text-muted)]">
                        {lead.propertyType}
                        {lead.yearBuilt ? ` · Built ${lead.yearBuilt}` : ""}
                      </p>
                    ) : null}
                    <p className="m-0 mt-8 text-[16px] leading-[1.75] text-[var(--color-text-muted)]">
                      {lead.description.length > 340
                        ? lead.description.slice(0, 337).trimEnd() + "..."
                        : lead.description}
                    </p>
                  </div>

                  <div className="mt-10">
                    {leadSpecs.length > 0 ? (
                      <ul className="mb-8 grid grid-cols-2 gap-px overflow-hidden rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-line)]">
                        {leadSpecs.map((s) => (
                          <li key={s.label} className="bg-[rgba(255,255,255,0.025)] p-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
                            <span className="mb-2 block font-serif text-[26px] font-normal italic normal-case tracking-normal text-[var(--color-text)]">
                              {s.value}
                            </span>
                            {s.label}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <Link
                      href={`/listings/${lead.slug}`}
                      className="group/link inline-flex items-center gap-3 rounded-full border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.035)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-[background,border-color,color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] hover:border-[var(--color-bronze)] hover:bg-[var(--color-bronze)] hover:text-[var(--color-button-text)]"
                    >
                      View flagship estate
                      <span className="inline-flex size-7 items-center justify-center rounded-full bg-[rgba(212,184,150,0.1)] transition-transform duration-500 group-hover/link:translate-x-1">
                        <svg viewBox="0 0 16 16" aria-hidden className="size-[13px]">
                          <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {supporting.map((e, i) => {
            const specs = buildSpecs(e).slice(0, 3);
            const image = e.photos?.[1] ?? e.heroPhoto;
            const large = i === 0 || i === 3;
            return (
              <Reveal
                key={e.slug}
                delay={i * 70}
                as="article"
                className={`group overflow-hidden rounded-[1.7rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.03)] p-1 transition-[transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(212,184,150,0.055)] ${
                  large ? "xl:col-span-2" : ""
                }`}
              >
                <Link href={`/listings/${e.slug}`} className="block">
                  <div className={`relative overflow-hidden rounded-[calc(1.7rem-0.25rem)] ${large ? "aspect-[16/8.4]" : "aspect-[16/11]"}`}>
                    {image ? (
                      <Image
                        src={image}
                        alt={e.address}
                        fill
                        sizes={large ? "(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"}
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.06),rgba(10,11,13,0.22)_48%,rgba(10,11,13,0.86))]" />
                    <div className="absolute left-5 top-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze-light)]">
                      {String(i + 2).padStart(2, "0")}
                    </div>
                    {e.price ? (
                      <div className="absolute right-5 top-5 font-serif text-[22px] italic text-[var(--color-text)] drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]">
                        {e.price}
                      </div>
                    ) : null}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <h3 className="m-0 font-serif text-[28px] font-light leading-[1.05] tracking-[-0.01em] text-[var(--color-text)]">
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
