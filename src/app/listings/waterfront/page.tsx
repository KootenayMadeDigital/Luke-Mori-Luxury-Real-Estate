import { PageLayout } from "@/components/layout/PageLayout";
import { buildItemListJsonLd, buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { Container } from "@/components/ui/Container";
import { ListingsBrowser } from "@/components/listing/ListingsBrowser";
import { waterfrontListings, sortByPriceDesc } from "@/lib/listings";
import { brandImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Nelson BC Waterfront Real Estate & Kootenay Lake Homes",
  description:
    "Browse Nelson BC waterfront homes for sale, Kootenay Lake waterfront property, lakefront homes, riverfront acreage, and North Shore listings with Luke Mori.",
  path: "/listings/waterfront",
  image: "/og/listings-waterfront.png",
});

export default function WaterfrontPage() {
  const wf = sortByPriceDesc(waterfrontListings);

  return (
    <PageLayout>
      <JsonLd
        data={buildItemListJsonLd({
          path: "/listings/waterfront",
          name: "Nelson BC waterfront real estate listings",
          items: wf.slice(0, 40).map((listing) => ({ name: listing.title, url: `/listings/${listing.slug}` })),
        })}
      />
      <SubpageHero
        eyebrow={`Waterfront · ${wf.length.toLocaleString()} Listings`}
        title="Waterfront needs"
        emphasis="a careful look."
        lede="Active waterfront and water-adjacent properties across Kootenay Lake's West Arm, Highway 3A, the North Shore, and the Slocan and Kootenay rivers."
        image={brandImages.kayaking}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Listings", href: "/listings" },
          { label: "Waterfront" },
        ]}
        meta={[
          { value: wf.length.toLocaleString(), label: "Active" },
          { value: "Lake & River", label: "Frontage" },
          { value: "Kootenay Lake", label: "Primary Body" },
          { value: "Year-Round", label: "Access" },
        ]}
      />

      <SeoAnswerBlock
        eyebrow="Waterfront Search"
        question="Where should buyers look for waterfront real estate near Nelson BC?"
        answer="The strongest Nelson waterfront searches usually begin on Kootenay Lake's West Arm, the Highway 3A North Shore corridor, Balfour, Procter, Harrop, and select riverfront or Slocan Valley properties. Before paying more for waterfront, buyers should compare shoreline access, dock questions, road noise, sun, privacy, winter use, and resale confidence."
        terms={["nelson bc waterfront real estate", "kootenay lake waterfront property", "lakefront homes for sale"]}
        tone="lake"
      />

      <section className="tone-ivory tonal-section pb-24 pt-10 md:pt-12">
        <Container>
          <ListingsBrowser listings={wf} initialFilter="all" initialSort="price-desc" filterMode="waterfront" />
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Waterfront Inquiry"
        title="Waterfront questions"
        emphasis="deserve care."
        body="Tell Luke what kind of waterfront you want: orientation, depth, dock potential, road access, sun, winter use, and the day-to-day feel."
      />
    </PageLayout>
  );
}
