import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { nelsonAreas } from "@/lib/data";

type Params = { slug: string };

const areaFitBriefs: Record<
  string,
  {
    rightFor: string;
    watchFor: string;
    startWith: string;
    listingHref: string;
    listingCta: string;
  }
> = {
  nelson: {
    rightFor: "Buyers who want Baker Street, schools, culture, lake access, restaurants, and a daily rhythm that feels walkable before it feels rural.",
    watchFor: "Street grade, parking, renovation appetite, heritage-home maintenance, and the difference between charming and inconvenient.",
    startWith: "Compare Downtown, Uphill, Mountain Station, Rosemont, and Fairview before judging any single address.",
    listingHref: "/listings/luxury",
    listingCta: "View luxury listings",
  },
  "north-shore": {
    rightFor: "Waterfront and privacy buyers who want the lake to feel immediate, but still want Nelson close enough for dinner.",
    watchFor: "Highway 3A rhythm, shoreline orientation, dock potential, winter maintenance, and how public or private the approach feels.",
    startWith: "Drive the corridor east from the Big Orange Bridge and mark where the lake starts feeling like the life you want.",
    listingHref: "/listings/waterfront",
    listingCta: "View waterfront",
  },
  balfour: {
    rightFor: "Deep-water second-home buyers, legacy waterfront families, and owners who value marina thinking and privacy over town proximity.",
    watchFor: "Ferry rhythm, service expectations, shoreline exposure, moorage questions, and whether the main-lake pace suits you year round.",
    startWith: "Study the difference between West Arm convenience and main-lake privacy before shortlisting a property.",
    listingHref: "/listings/waterfront",
    listingCta: "View waterfront",
  },
  blewett: {
    rightFor: "Acreage buyers who want timber, privacy, workshops, gardens, family-compound potential, and Nelson still within reach.",
    watchFor: "Water systems, road maintenance, outbuildings, exposure, insurance, and the real door-to-Baker drive in every season.",
    startWith: "Decide how much land you will actually maintain before chasing acreage for its own sake.",
    listingHref: "/buyers/relocation",
    listingCta: "Plan relocation call",
  },
  "slocan-valley": {
    rightFor: "Retreat buyers who want river frontage, heritage timber, small-community rhythm, and space that feels removed without feeling abandoned.",
    watchFor: "Distance, services, winter driving, river exposure, internet, and whether quiet still feels like luxury after a full day there.",
    startWith: "Tour the valley slowly, from South Slocan toward New Denver, and let pace matter as much as price.",
    listingHref: "/buyers/international",
    listingCta: "Ask second-home questions",
  },
};

export function generateStaticParams() {
  return nelsonAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = nelsonAreas.find((x) => x.slug === slug);
  if (!a) return { title: "Area Not Found" };
  return {
    title: `${a.name} · Nelson Area Guide`,
    description: a.intro,
    openGraph: { images: [a.hero] },
  };
}

export default async function NelsonAreaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = nelsonAreas.find((a) => a.slug === slug);
  if (!area) return notFound();

  const others = nelsonAreas.filter((a) => a.slug !== slug);
  const fitBrief = areaFitBriefs[area.slug];

  return (
    <PageLayout>
      <SubpageHero
        eyebrow={area.name}
        title={area.name}
        emphasis={area.tagline.replace(/[.]$/, "")}
        lede={area.intro}
        image={area.hero}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Nelson", href: "/nelson" },
          { label: area.name },
        ]}
        meta={[
          { value: area.population, label: "Population" },
          { value: area.avgPrice, label: "Average Sale" },
          { value: area.focus.split(" · ")[0], label: "Primary Focus" },
          { value: "Active", label: "Representation" },
        ]}
      />

      {/* Highlights */}
      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[760px]">
            <Eyebrow>The Local Lay of the Land</Eyebrow>
            <SectionHeading className="mt-7">
              What makes {area.name}
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                {area.name === "Nelson" ? "the Queen City" : "this corridor"}.
              </em>
            </SectionHeading>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] sm:grid-cols-3">
            {area.highlights.map((h) => (
              <Reveal key={h.title} className="bg-[var(--color-bg)] p-9 sm:p-10">
                <h3 className="m-0 mb-4 font-serif text-[24px] font-normal leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] sm:text-[26px]">
                  {h.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                  {h.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <Eyebrow>Buyer Fit Brief</Eyebrow>
              <SectionHeading className="mt-7">
                How to read
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  {area.name} properly.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              The right corridor makes a property easier to own. The wrong one makes even a beautiful home feel like friction.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-3">
            {[
              { label: "Right for", body: fitBrief.rightFor },
              { label: "Watch for", body: fitBrief.watchFor },
              { label: "Start with", body: fitBrief.startWith },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 70} className="bg-[var(--color-bg)] p-8 sm:p-9">
                <span className="mb-5 block text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  {item.label}
                </span>
                <p className="m-0 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220} className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href={fitBrief.listingHref} className="rounded-full border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bg)] transition-colors hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]">
              {fitBrief.listingCta}
            </Link>
            <Link href="/nelson" className="rounded-full border border-[var(--color-line-strong)] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
              Compare all areas
            </Link>
            <Link href="/contact" className="rounded-full border border-[var(--color-line-strong)] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
              Request private access
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Neighbourhoods (only on Nelson page) */}
      {area.neighbourhoods && area.neighbourhoods.length > 0 && (
        <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-24 md:py-28">
          <Container>
            <Reveal className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Eyebrow>Neighbourhoods</Eyebrow>
                <SectionHeading className="mt-7">
                  Within the city,
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    five distinct addresses.
                  </em>
                </SectionHeading>
              </div>
              <SectionLede align="right">
                The character changes street to street. These are the neighbourhoods that define
                where considered buyers actually want to be.
              </SectionLede>
            </Reveal>
            <ul className="border-t border-[var(--color-line)]">
              {area.neighbourhoods.map((n, i) => (
                <Reveal
                  key={n.name}
                  as="li"
                  delay={i * 60}
                  className="grid grid-cols-1 gap-2 border-b border-[var(--color-line)] py-9 transition-colors hover:bg-[var(--color-surface)] sm:grid-cols-[60px_220px_1fr] sm:items-baseline sm:gap-10 md:py-10"
                >
                  <span className="hidden font-serif text-[14px] italic tracking-[0.1em] text-[var(--color-bronze)] sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 font-serif font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)] [font-size:clamp(24px,2.6vw,32px)]">
                    {n.name}
                  </h3>
                  <p className="m-0 max-w-[640px] text-[15px] leading-[1.7] text-[var(--color-text-muted)] sm:text-[16px]">
                    {n.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Other areas */}
      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>Also Worth Considering</Eyebrow>
            <SectionHeading className="mt-7">
              Other Kootenay
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                corridors.
              </em>
            </SectionHeading>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Reveal key={o.slug}>
                <Link
                  href={`/nelson/${o.slug}`}
                  className="group flex h-full flex-col border border-[var(--color-line)] bg-[var(--color-surface)] p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--color-bronze)]"
                >
                  <span className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                    {o.population} · Avg {o.avgPrice}
                  </span>
                  <h3 className="m-0 mb-2 font-serif text-[22px] font-normal leading-[1.15]">{o.name}</h3>
                  <p className="m-0 mb-5 flex-1 font-serif text-[14px] italic text-[var(--color-text-muted)]">
                    {o.tagline}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                    Explore
                    <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <InquiryCTA
        eyebrow={`${area.name} Inquiry`}
        title={`Looking in ${area.name}?`}
        emphasis="Start here."
        body={`Tell us what you're looking for in ${area.name}, current listings, off-market introductions, or just a conversation about whether this corridor fits the life you have in mind.`}
      />
    </PageLayout>
  );
}
