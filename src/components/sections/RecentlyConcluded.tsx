import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { recentlyConcluded } from "@/lib/data";

/* Real recent placements with offered prices and imagery sourced from Luke's
   public sold-property carousel. Reads as cinematic proof, not a sold-sign brag. */

function SoldCard({ item, index, compact = false }: { item: (typeof recentlyConcluded)[number]; index: number; compact?: boolean }) {
  return (
    <Reveal delay={index * 80}>
      <article className="group grid h-full min-h-[240px] grid-cols-[0.96fr_1.04fr] overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.03)] p-1 transition-[transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(212,184,150,0.055)] sm:grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
        <div className={`relative overflow-hidden rounded-[calc(1.5rem-0.25rem)] ${compact ? "min-h-[210px]" : "min-h-[250px] sm:min-h-[220px] lg:min-h-full"}`}>
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 46vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.08),rgba(10,11,13,0.62))]" />
          <span className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze-light)]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-col justify-between p-6 sm:p-7">
          <div>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
              {item.status}
            </div>
            <h3 className="m-0 font-serif text-[25px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)]">
              {item.address}
            </h3>
            <p className="m-0 mt-3 text-[13px] leading-[1.6] text-[var(--color-text-muted)]">
              {item.area} · {item.type}
            </p>
          </div>
          <div className="mt-6 border-t border-[var(--color-line)] pt-5 font-serif text-[22px] italic text-[var(--color-bronze-light)]">
            {item.offered}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function RecentlyConcluded() {
  const lead = recentlyConcluded[0];
  const leftSupport = recentlyConcluded[4];
  const rightColumn = recentlyConcluded.slice(1, 4);

  return (
    <section id="recently-sold" className="tone-walnut tonal-section border-y border-[var(--color-line)] py-28 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-75" aria-hidden>
        <div className="absolute left-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-[rgba(212,184,150,0.09)] blur-[150px]" />
        <div className="absolute bottom-[-24%] right-[-16%] h-[620px] w-[620px] rounded-full bg-[rgba(132,162,166,0.07)] blur-[170px]" />
      </div>

      <Container className="relative z-10">
        <Reveal className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.74fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Recently Sold</Eyebrow>
            <SectionHeading className="mt-7">
              Recent sales
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                across the Kootenays.
              </em>
            </SectionHeading>
          </div>
          <div className="lg:ml-auto lg:max-w-[620px] lg:text-right">
            <SectionLede align="right">
              Recent sales show the range Luke understands: acreage, lakefront, view homes, and walk-to-water properties across Nelson and the upper Kootenay market.
            </SectionLede>
            <Link
              href="/listings/sold"
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)] transition-colors hover:text-[var(--color-bronze-light)]"
            >
              View sold properties
              <svg viewBox="0 0 16 16" aria-hidden className="size-[14px]">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
          <div className="grid grid-cols-1 gap-5">
            <Reveal>
              <article className="group relative min-h-[560px] overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.035)] p-1.5 shadow-[0_34px_100px_-62px_rgba(0,0,0,0.95)]">
                <div className="relative h-full min-h-[548px] overflow-hidden rounded-[calc(2rem-0.375rem)]">
                  <Image
                    src={lead.image}
                    alt={lead.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.12),rgba(10,11,13,0.2)_36%,rgba(10,11,13,0.88))]" />
                  <div className="absolute left-6 top-6 rounded-full border border-[rgba(245,239,229,0.34)] bg-[rgba(10,11,13,0.58)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-text)] shadow-[0_18px_60px_-40px_rgba(0,0,0,0.95)]">
                    {lead.status}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                    <div className="mb-5 font-serif text-[70px] font-light uppercase leading-none tracking-[0.08em] text-[rgba(245,239,229,0.88)] sm:text-[92px]">
                      Sold
                    </div>
                    <div className="grid grid-cols-1 gap-5 border-t border-[rgba(245,239,229,0.2)] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
                      <div>
                        <h3 className="m-0 font-serif text-[34px] font-light leading-[1.04] tracking-[-0.01em] text-[var(--color-text)] sm:text-[46px]">
                          {lead.address}
                        </h3>
                        <p className="m-0 mt-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronze-light)]">
                          {lead.area} · {lead.type}
                        </p>
                      </div>
                      <div className="font-serif text-[30px] italic text-[var(--color-bronze-light)]">
                        {lead.offered}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <SoldCard item={leftSupport} index={4} compact />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {rightColumn.map((item, i) => (
              <SoldCard key={item.address} item={item} index={i + 1} />
            ))}
          </div>
        </div>

        <p className="mt-9 text-[12px] italic text-[var(--color-text-dim)]">
          Offered prices reflect public list pricing at the time of representation. Client details stay private.
        </p>
      </Container>
    </section>
  );
}
