import { PageLayout } from "@/components/layout/PageLayout";
import { buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { ListingsBrowser } from "@/components/listing/ListingsBrowser";
import { waterfrontListings, sortByPriceDesc } from "@/lib/listings";
import { brandImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Waterfront Real Estate · Nelson & Kootenay Lake",
  description:
    "Lakefront, riverfront, and beach-front real estate in the Nelson region, Kootenay Lake's West Arm, the Highway 3A North Shore corridor, and the Slocan and Kootenay rivers.",
  path: "/listings/waterfront",
  image: brandImages.kayaking,
});

export default function WaterfrontPage() {
  const wf = sortByPriceDesc(waterfrontListings);

  return (
    <PageLayout>
      <SubpageHero
        eyebrow={`Waterfront · ${wf.length.toLocaleString()} Properties`}
        title="Lake. River."
        emphasis="Direct access."
        lede="Every active waterfront property in the catalog: Kootenay Lake's West Arm, Highway 3A, the North Shore, and the Slocan and Kootenay rivers."
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

      <section className="tone-lake tonal-section pb-24 pt-10 md:pt-12">
        <Container>
          <ListingsBrowser listings={wf} initialFilter="all" initialSort="price-desc" />
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Waterfront Inquiry"
        title="Waterfront rarely lasts."
        emphasis="Move first."
        body="Tell Luke what kind of waterfront you want: orientation, depth, dock potential, year-round access, and privacy."
      />
    </PageLayout>
  );
}
