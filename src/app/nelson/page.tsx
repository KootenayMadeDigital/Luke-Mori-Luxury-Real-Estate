import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { GuideLinkPanel } from "@/components/seo/GuideLinkPanel";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { headerImages, nelsonAreas } from "@/lib/data";

const areaComparison = [
  {
    area: "Nelson",
    bestFor: "Walkability, schools, restaurants, culture, and daily convenience.",
    watch: "Parking, slope, heritage condition, noise, and winter street rhythm.",
    href: "/nelson/nelson",
  },
  {
    area: "North Shore",
    bestFor: "Lake views, privacy, quieter homes, and fast access back to town.",
    watch: "Highway sound, driveway grade, shoreline access, and winter maintenance.",
    href: "/nelson/north-shore",
  },
  {
    area: "Balfour",
    bestFor: "Main-lake energy, second homes, golf, marina access, and quieter living.",
    watch: "Distance from Nelson, wind, service access, and care when you are away.",
    href: "/nelson/balfour",
  },
  {
    area: "Blewett",
    bestFor: "Acreage, privacy, gardens, workshops, dogs, and land close to town.",
    watch: "Water, septic, internet, outbuildings, road conditions, and maintenance appetite.",
    href: "/nelson/blewett",
  },
  {
    area: "Slocan Valley",
    bestFor: "Retreat property, riverfront, timber, quiet towns, and more space.",
    watch: "Distance, winter roads, services, trades, and whether the slower rhythm fits.",
    href: "/nelson/slocan-valley",
  },
];

export const metadata = buildPageMetadata({
  title: "Nelson BC Real Estate Areas & Kootenay Lake Guide",
  description:
    "Explore Nelson BC real estate areas, North Shore, Balfour, Blewett, Slocan Valley, Kootenay Lake waterfront homes, acreage, and relocation fit.",
  path: "/nelson",
  image: "/og/nelson.png",
});

export default function NelsonHubPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="About Nelson"
        title="The Queen City"
        emphasis="and the Kootenays."
        lede="Five areas around Nelson and Kootenay Lake, from downtown Nelson to Balfour. Each has its own character, price points, seasons, tradeoffs, and buyer fit."
        image={headerImages.nelsonLandscape}
        imageTreatment="showcase"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Nelson" }]}
        meta={[
          { value: "5", label: "Coverage Areas" },
          { value: "~20K", label: "Regional Population" },
          { value: "$800K", label: "Nelson Average" },
          { value: "$1.15M", label: "Balfour Average" },
        ]}
      />

      <SeoAnswerBlock
        eyebrow="Area Guide"
        question="What are the best areas for Nelson BC real estate buyers?"
        answer="Most Nelson BC real estate searches begin with five areas: walkable Nelson for culture and schools, North Shore for lakefront privacy, Balfour for main-lake second homes, Blewett for acreage near town, and Slocan Valley for quieter rural property. The right area usually matters before the right listing."
        terms={["nelson bc real estate", "north shore nelson bc real estate", "balfour bc real estate", "slocan valley real estate"]}
        tone="lake"
      />

      <section className="tone-ivory tonal-section py-16 md:py-20">
        <Container>
          <Reveal className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              {
                title: "Kootenay Lake waterfront real estate",
                body: "A focused guide for buyers comparing shoreline, docks, sun, access, privacy, and current waterfront listings around Nelson and Kootenay Lake.",
                href: "/kootenay-lake-waterfront-real-estate",
              },
              {
                title: "Nelson BC realtor guide",
                body: "How to choose local guidance for waterfront, acreage, relocation, second homes, selling, and homes that need extra care.",
                href: "/nelson-bc-realtor",
              },
            ].map((card) => (
              <Link key={card.href} href={card.href} className="luxury-card group border border-[var(--color-line)] bg-[var(--color-surface)] p-8 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[var(--color-line-strong)]">
                <h2 className="m-0 font-serif text-[28px] font-light leading-[1.15] text-[var(--color-text)]">{card.title}</h2>
                <p className="m-0 mt-4 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">{card.body}</p>
                <span className="mt-7 inline-flex text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Read the guide</span>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

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
              Pick a region. Each page explains daily life, tradeoffs, and the kind of property to look for there. Start with the area before the listing search.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {nelsonAreas.map((a, i) => (
              <Reveal key={a.slug} delay={i * 60}>
                <Link
                  href={`/nelson/${a.slug}`}
                  className="luxury-card group flex h-full flex-col overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-[var(--color-line-strong)]"
                >
                  <div className="tone-dark relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={a.hero}
                      alt={a.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="luxury-media object-cover"
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
                      <svg viewBox="0 0 16 16" aria-hidden className="luxury-arrow size-[14px]">
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

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.86fr_1.14fr] md:items-end">
            <div>
              <Eyebrow>Area Comparison</Eyebrow>
              <SectionHeading className="mt-7">
                The right area
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  changes the whole search.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Buyers usually do not need more listings first. They need to know which parts of Nelson and Kootenay Lake match the way they want to live.
            </SectionLede>
          </Reveal>

          <div className="overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)]">
            {areaComparison.map((item, index) => (
              <Reveal key={item.area}>
                <Link
                  href={item.href}
                  className="group grid grid-cols-1 gap-5 border-b border-[var(--color-line)] p-7 transition-colors duration-500 last:border-b-0 hover:bg-[rgba(212,184,150,0.055)] md:grid-cols-[0.62fr_1fr_1fr_auto] md:items-center md:p-8"
                >
                  <div>
                    <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="m-0 font-serif text-[30px] font-light leading-none text-[var(--color-text)]">{item.area}</h3>
                  </div>
                  <p className="m-0 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronze)]">Best for</span>
                    {item.bestFor}
                  </p>
                  <p className="m-0 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronze)]">Watch for</span>
                    {item.watch}
                  </p>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Study area</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GuideLinkPanel
        eyebrow="Nelson Guide Path"
        title="Narrow the area before the shortlist."
        lede="Nelson searches get cleaner when buyers understand the difference between walkability, lake access, privacy, acreage, slope, sun, and winter routine."
        tone="ivory"
        links={[
          { title: "Best areas to live in Nelson", body: "A plain comparison of Nelson neighbourhoods and nearby Kootenay communities.", href: "/guides/best-areas-to-live-nelson-bc" },
          { title: "Nelson BC luxury homes", body: "What makes a Nelson home valuable beyond finish level.", href: "/guides/nelson-bc-luxury-homes-guide" },
          { title: "Moving to Nelson", body: "Relocation questions around winter, schools, healthcare, services, and daily rhythm.", href: "/guides/moving-to-nelson-bc" },
        ]}
      />

      <InquiryCTA
        eyebrow="Local Knowledge"
        title="Not sure which area"
        emphasis="fits the plan?"
        body="A 30-minute conversation can usually narrow the search to two or three areas. From there, the right showings get easier to choose."
      />
    </PageLayout>
  );
}
