import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ListingsBrowser } from "@/components/listing/ListingsBrowser";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { brandImages } from "@/lib/data";
import { sortByPriceDesc, waterfrontListings } from "@/lib/listings";
import { buildFaqJsonLd, buildItemListJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Kootenay Lake Waterfront Real Estate · Nelson BC Homes",
  description:
    "Kootenay Lake waterfront real estate guide for Nelson BC buyers comparing lakefront homes, North Shore privacy, Balfour, Procter, shoreline access, docks, sun, and resale confidence.",
  path: "/kootenay-lake-waterfront-real-estate",
  image: "/og/listings-waterfront.png",
});

const questions = [
  {
    question: "Where should buyers look for Kootenay Lake waterfront real estate?",
    answer:
      "Most buyers compare the West Arm near Nelson, the North Shore corridor, Procter, Harrop, Balfour, and main-lake properties farther east. Each area has a different balance of privacy, road access, services, sun, water exposure, and daily convenience.",
  },
  {
    question: "What should I know before buying waterfront property on Kootenay Lake?",
    answer:
      "Waterfront buyers should verify shoreline use, dock or beach access, road exposure, slope, sun, insurance, maintenance, utilities, title details, and any property-specific approvals before treating a lakefront listing as comparable to another.",
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
  "Sun exposure, privacy, slope, and winter access",
  "Insurance, services, title details, and maintenance load",
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
        lede="Waterfront around Nelson is not one market. The right shoreline depends on access, sun, privacy, services, exposure, and how you actually plan to live there."
        image={brandImages.westArmKootenayLake}
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
        answer="Kootenay Lake waterfront value depends on more than the view. Buyers should compare shoreline usability, dock or beach access, road noise, sun, slope, privacy, services, winter access, insurance, and resale confidence before deciding whether a lakefront premium is justified."
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
                Two Kootenay Lake properties can look similar online and live completely differently. This is where local review matters before touring, offering, or paying for scarcity.
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
          <ListingsBrowser listings={listings} initialFilter="all" initialSort="price-desc" />
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Waterfront Buyer Call"
        title="Before you chase the view,"
        emphasis="check the shoreline."
        body="Send Luke the lakefront property you are considering, or describe the shoreline you want. He will help narrow the search before the wrong tour eats the day."
      />
    </PageLayout>
  );
}
