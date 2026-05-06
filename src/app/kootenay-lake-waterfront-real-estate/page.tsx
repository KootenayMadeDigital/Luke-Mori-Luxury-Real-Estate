import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ListingsBrowser } from "@/components/listing/ListingsBrowser";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { GuideLinkPanel } from "@/components/seo/GuideLinkPanel";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { headerImages } from "@/lib/data";
import { sortByPriceDesc, waterfrontListings } from "@/lib/listings";
import { buildFaqJsonLd, buildItemListJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Kootenay Lake Waterfront Real Estate · Nelson BC Homes",
  description:
    "Kootenay Lake waterfront real estate guide for Nelson BC buyers comparing lakefront homes, North Shore settings, Balfour, Procter, shoreline access, docks, sun, and resale questions.",
  path: "/kootenay-lake-waterfront-real-estate",
  image: "/og/kootenay-lake-waterfront.png",
});

const questions = [
  {
    question: "Where should buyers look for Kootenay Lake waterfront real estate?",
    answer:
      "Most buyers compare the West Arm near Nelson, the North Shore corridor, Procter, Harrop, Balfour, and main-lake properties farther east. Each area has a different balance of privacy, road access, services, sun, water conditions, and daily convenience.",
  },
  {
    question: "What should I know before buying waterfront property on Kootenay Lake?",
    answer:
      "Waterfront buyers should verify shoreline use, dock or beach access, road noise, slope, sun, insurance, maintenance, utilities, title details, and any property-specific approvals before treating a lakefront listing as comparable to another.",
  },
  {
    question: "Is Kootenay Lake waterfront good for second-home buyers?",
    answer:
      "It can be, but the right property depends on winter access, lock-and-leave maintenance, distance from Nelson or services, guest use, privacy expectations, and whether the home works outside summer months.",
  },
];

const dueDiligence = [
  "Shoreline access, usability, and seasonal water conditions",
  "Dock, beach, road, and parking practicality",
  "Sun, privacy, slope, and winter access",
  "Insurance, services, title details, and maintenance load",
];

const waterfrontCorridors = [
  {
    title: "West Arm near Nelson",
    buyer: "Buyers who want lake life without leaving Nelson's restaurants, schools, services, and social rhythm behind.",
    watch: "Road noise, slope, parking, dock practicality, and how usable the shoreline feels outside summer.",
    href: "/nelson/nelson",
  },
  {
    title: "North Shore",
    buyer: "Buyers who want privacy, water, and views while keeping town close enough for ordinary life.",
    watch: "Driveway rhythm, neighbour sightlines, highway sound, winter maintenance, and whether privacy holds up in person.",
    href: "/nelson/north-shore",
  },
  {
    title: "Procter and Harrop",
    buyer: "Buyers who want a quieter lake base, more retreat energy, and a slower rhythm east of Nelson.",
    watch: "Ferry timing, services, winter use, guest logistics, and whether the setting works as full-time life or retreat life.",
    href: "/listings/waterfront",
  },
  {
    title: "Balfour and main lake",
    buyer: "Second-home buyers who want bigger lake energy, golf, marina access, and a quieter feel.",
    watch: "Wind, distance from Nelson, ownership systems, family use, and how often the home will sit empty.",
    href: "/nelson/balfour",
  },
];

export default function KootenayLakeWaterfrontPage() {
  const listings = sortByPriceDesc(waterfrontListings);

  return (
    <PageLayout>
      <JsonLd data={buildFaqJsonLd(questions, "/kootenay-lake-waterfront-real-estate")} />
      <JsonLd
        data={buildItemListJsonLd({
          path: "/kootenay-lake-waterfront-real-estate",
          name: "Kootenay Lake waterfront real estate listings",
          items: listings.slice(0, 24).map((listing) => ({ name: listing.title, url: `/listings/${listing.slug}` })),
        })}
      />

      <SubpageHero
        eyebrow="Kootenay Lake Waterfront"
        title="Buy the lake"
        emphasis="with your eyes open."
        lede="Waterfront around Nelson is not one market. The right shoreline depends on access, sun, privacy, services, weather, and how you actually plan to live there."
        image={headerImages.westArmKootenayLake}
        imageTreatment="showcase"
        crumbs={[{ label: "Home", href: "/" }, { label: "Kootenay Lake Waterfront" }]}
        meta={[
          { value: "Lakefront", label: "Primary Search" },
          { value: "Nelson", label: "West Arm" },
          { value: "Balfour", label: "Main Lake" },
          { value: listings.length.toLocaleString(), label: "Waterfront Listings" },
        ]}
      />

      <SeoAnswerBlock
        eyebrow="Waterfront Answer"
        question="What should buyers know before buying waterfront property on Kootenay Lake?"
        answer="Kootenay Lake waterfront value depends on more than the view. Buyers should compare shoreline usability, dock or beach access, road noise, sun, slope, privacy, services, winter access, insurance, and resale confidence before deciding whether the price is justified."
        terms={["kootenay lake waterfront real estate", "kootenay lake waterfront property for sale", "nelson bc waterfront homes for sale"]}
        tone="lake"
      />

      <section className="tone-ivory tonal-section py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal>
              <Eyebrow>Lakefront Due Diligence</Eyebrow>
              <SectionHeading className="mt-7">
                The view is obvious.
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">The details decide the value.</em>
              </SectionHeading>
              <SectionLede>
                Two Kootenay Lake properties can look similar online and live completely differently. This is where local review matters before touring, offering, or paying more for the wrong fit.
              </SectionLede>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {dueDiligence.map((item, index) => (
                <Reveal key={item} delay={index * 70} className="border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
                  <div className="mb-5 font-serif text-[28px] italic text-[var(--color-bronze)]">0{index + 1}</div>
                  <p className="m-0 text-[16px] leading-[1.65] text-[var(--color-text-muted)]">{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <Eyebrow>Waterfront Corridors</Eyebrow>
              <SectionHeading className="mt-7">
                Same lake.
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">Different life.</em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              A Kootenay Lake search gets sharper when the shoreline is compared by daily use, not just view quality. The best buyer fit changes from one corridor to the next.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] lg:grid-cols-4">
            {waterfrontCorridors.map((corridor, index) => (
              <Reveal key={corridor.title} delay={index * 70}>
                <Link href={corridor.href} className="group flex h-full flex-col bg-[var(--color-bg)] p-7 transition-colors duration-300 hover:bg-[var(--color-surface)]">
                  <span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                    Corridor {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 font-serif text-[27px] font-light leading-[1.12] text-[var(--color-text)]">{corridor.title}</h3>
                  <p className="m-0 mt-5 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">{corridor.buyer}</p>
                  <p className="m-0 mt-6 border-l border-[var(--color-bronze)] pl-4 text-[12px] font-semibold uppercase leading-[1.58] tracking-[0.12em] text-[var(--color-text-dim)]">
                    Check: {corridor.watch}
                  </p>
                  <span className="mt-7 inline-flex text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                    Study this path
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-lake tonal-section pb-24 pt-10 md:pt-12">
        <Container>
          <Reveal className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Current Waterfront Listings</Eyebrow>
              <h2 className="m-0 mt-5 font-serif text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)] md:text-[48px]">
                Kootenay Lake and Nelson waterfront homes.
              </h2>
            </div>
            <Link href="/listings/waterfront" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
              View waterfront search
            </Link>
          </Reveal>
          <ListingsBrowser listings={listings} initialFilter="all" initialSort="price-desc" filterMode="waterfront" />
        </Container>
      </section>

      <GuideLinkPanel
        eyebrow="Waterfront Guide Path"
        title="Understand the lake before the offer."
        lede="Kootenay Lake value depends on rights, shoreline, access, insurance, systems, second-home use, and how the setting works outside summer."
        tone="ivory"
        links={[
          { title: "Buying Kootenay Lake waterfront", body: "A buyer guide to shoreline access, water rights, docks, services, and showing questions.", href: "/guides/buying-kootenay-lake-waterfront-property" },
          { title: "Kootenay Lake market guide", body: "How to read lakefront, lake access, view, acreage, and town properties as separate markets.", href: "/guides/kootenay-lake-real-estate-market-guide" },
          { title: "Selling waterfront property", body: "For owners preparing shoreline, access, systems, documents, privacy, and buyer questions.", href: "/guides/selling-waterfront-property-kootenay-lake" },
        ]}
      />

      <InquiryCTA
        eyebrow="Waterfront Buyer Call"
        title="Before you chase the view,"
        emphasis="check the shoreline."
        body="Send Luke the lakefront property you are considering, or describe the shoreline you want. He will help narrow the search before the wrong tour takes up your day."
      />
    </PageLayout>
  );
}
