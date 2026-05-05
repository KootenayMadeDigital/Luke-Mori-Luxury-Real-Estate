import { PageLayout } from "@/components/layout/PageLayout";
import { buildItemListJsonLd, buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { Container } from "@/components/ui/Container";
import { ListingsBrowser } from "@/components/listing/ListingsBrowser";
import { allListings, lukesOwnListings, luxuryListings, sortByPriceDesc } from "@/lib/listings";
import { brandImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Nelson BC Real Estate Listings & Homes for Sale",
  description:
    "Browse Nelson BC real estate listings, homes for sale, waterfront property, luxury homes, acreage, and Kootenay Lake listings with Luke Mori.",
  path: "/listings",
  image: "/og/listings.png",
});

export default function ListingsIndexPage() {
  const total = allListings.length;
  const luxe = luxuryListings.length;
  const lukes = lukesOwnListings.length;

  return (
    <PageLayout>
      <JsonLd
        data={buildItemListJsonLd({
          path: "/listings",
          name: "Nelson BC real estate listings",
          items: sortByPriceDesc(allListings).slice(0, 40).map((listing) => ({ name: listing.title, url: `/listings/${listing.slug}` })),
        })}
      />
      <SubpageHero
        eyebrow={`Active · ${total.toLocaleString()} Listings`}
        title="See what is active,"
        emphasis="then narrow with care."
        lede="Browse active properties across Nelson, Kootenay Lake, the Slocan and Columbia valleys, Kaslo, and beyond. Use the filters to turn a crowded market into a clearer short list."
        image={brandImages.procterLakeHouse}
        crumbs={[{ label: "Home", href: "/" }, { label: "Listings" }]}
        meta={[
          { value: total.toLocaleString(), label: "Active Properties" },
          { value: lukes.toString(), label: "Listed by Luke" },
          { value: luxe.toLocaleString(), label: "$1M+" },
          { value: "Current", label: "Listing Data" },
        ]}
      />

      <SeoAnswerBlock
        eyebrow="Nelson Listings"
        question="How do you find the right Nelson BC home for sale?"
        answer="Start with the full market, then narrow by daily life and ownership needs: waterfront, walkable Nelson, North Shore privacy, Balfour, acreage near Blewett, Slocan Valley retreats, or homes over $1M. Luke helps buyers separate attractive listings from the addresses that actually fit."
        terms={["nelson bc real estate", "nelson bc homes for sale", "nelson bc mls listings"]}
        tone="ivory"
      />

      <section className="tone-office tonal-section pb-24 pt-10 md:pt-12">
        <Container>
          <ListingsBrowser listings={sortByPriceDesc(allListings)} />
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Buyer Inquiry"
        title="Looking for something specific?"
        emphasis="Ask Luke."
        body="Some homes are not publicly listed. Tell Luke what you are looking for, and he can let you know what options may be realistic."
      />
    </PageLayout>
  );
}
