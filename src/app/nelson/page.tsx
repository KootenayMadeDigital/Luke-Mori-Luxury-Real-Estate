import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { nelsonAreas, brandImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "About Nelson · The Kootenay Region",
  description:
    "About Nelson, B.C. and the Kootenay Lake region: neighbourhoods, lifestyle, and the local details that shape value.",
  path: "/nelson",
  image: brandImages.nelsonLandscape,
});

const areaFitIndex = [
  {
    desire: "Walkable culture",
    area: "Nelson",
    href: "/nelson/nelson",
    route: "Baker Street, Uphill, Fairview, Rosemont, Mountain Station.",
    next: "Explore Nelson",
  },
  {
    desire: "Lakefront privacy",
    area: "North Shore",
    href: "/nelson/north-shore",
    route: "Highway 3A, waterfront, beach access, and quieter approaches.",
    next: "Study North Shore",
  },
  {
    desire: "Deep-water second home",
    area: "Balfour",
    href: "/nelson/balfour",
    route: "Main-lake exposure, ferry rhythm, marina thinking, and generational waterfront.",
    next: "Study Balfour",
  },
  {
    desire: "Acreage near town",
    area: "Blewett",
    href: "/nelson/blewett",
    route: "Pastoral privacy, wooded lots, water systems, outbuildings, and a short Nelson drive.",
    next: "Compare acreage",
  },
  {
    desire: "Retreat property",
    area: "Slocan Valley",
    href: "/nelson/slocan-valley",
    route: "River frontage, timber homes, smaller communities, and a quieter pace north of Nelson.",
    next: "Study retreats",
  },
];

export default function NelsonHubPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="About Nelson"
        title="The Queen City"
        emphasis="and the Kootenays."
        lede="Five areas of Nelson and Kootenay Lake real estate, from downtown Nelson to Balfour. Each has its own character, price points, seasons, and buyer fit."
        image={brandImages.nelsonLandscape}
        crumbs={[{ label: "Home", href: "/" }, { label: "About Nelson" }]}
        meta={[
          { value: "5", label: "Coverage Areas" },
          { value: "~20K", label: "Regional Population" },
          { value: "$800K", label: "Nelson Average" },
          { value: "$1.15M", label: "Balfour Average" },
        ]}
      />

      <section className="tone-lake tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[760px]">
            <Eyebrow>Coverage Areas</Eyebrow>
            <SectionHeading className="mt-7">
              Five areas,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                each with its own logic.
              </em>
            </SectionHeading>
            <SectionLede>
              Pick a region, each page covers the local market dynamics, the lifestyle, and
              the kind of property worth looking for there. Start with the area before the listing search.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {nelsonAreas.map((a, i) => (
              <Reveal key={a.slug} delay={i * 60}>
                <Link
                  href={`/nelson/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-[var(--color-line-strong)]"
                >
                  <div className="tone-dark relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={a.hero}
                      alt={a.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,11,13,0.7)]" />
                    <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                      <div>
                        <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                          {a.population}
                        </div>
                        <div className="mt-1 font-serif text-[14px] italic text-[var(--color-bronze-light)]">
                          Avg {a.avgPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="m-0 mb-2 font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                      {a.name}
                    </h3>
                    <p className="m-0 mb-6 font-serif text-[15px] italic text-[var(--color-text-muted)]">
                      {a.tagline}
                    </p>
                    <p className="m-0 mb-6 text-[13px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
                      {a.focus}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                      Explore the area
                      <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <Eyebrow>Area Fit Index</Eyebrow>
              <SectionHeading className="mt-7">
                Start with the reason,
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  then choose the area.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Luke helps you understand which parts of the lake and valley are worth your time before you book a showing.
            </SectionLede>
          </Reveal>

          <div className="overflow-hidden border border-[var(--color-line)]">
            {areaFitIndex.map((item, i) => (
              <Reveal
                key={item.desire}
                className="grid grid-cols-1 gap-5 border-b border-[var(--color-line)] bg-[var(--color-bg)] p-7 last:border-b-0 transition-colors hover:bg-[var(--color-surface)] md:grid-cols-[0.6fr_0.7fr_1.2fr_auto] md:items-center md:p-8"
                delay={i * 55}
              >
                <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  {item.desire}
                </div>
                <h3 className="m-0 font-serif text-[26px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                  {item.area}
                </h3>
                <p className="m-0 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                  {item.route}
                </p>
                <Link href={item.href} className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)] transition-colors hover:text-[var(--color-bronze-light)]">
                  {item.next}
                  <svg viewBox="0 0 16 16" aria-hidden className="size-[14px]">
                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220} className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { href: "/listings/waterfront", label: "View waterfront" },
              { href: "/buyers", label: "Buyer lifestyle selector" },
              { href: "/contact", label: "Ask about private homes" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
                {item.label}
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Local Knowledge"
        title="Don't know which area"
        emphasis="suits the life?"
        body="A 30-minute conversation usually narrows the search to two or three areas. From there, the right showings get easier to choose."
      />
    </PageLayout>
  );
}
