import { PageLayout } from "@/components/layout/PageLayout";
import { buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { ListingsBrowser } from "@/components/listing/ListingsBrowser";
import { luxuryListings, sortByPriceDesc } from "@/lib/listings";
import { brandImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Luxury Real Estate · Nelson & Kootenay Lake",
  description:
    "Luxury real estate in Nelson, Kootenay Lake, and the broader Kootenay region, with active properties listed at $1M and above.",
  path: "/listings/luxury",
  image: "/og/listings-luxury.png",
});

export default function LuxuryListingsPage() {
  const luxe = sortByPriceDesc(luxuryListings);
  const top = luxe[0]?.priceNumber ?? 0;
  const median = luxe[Math.floor(luxe.length / 2)]?.priceNumber ?? 0;

  const fmtCompact = (n: number) =>
    n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : `$${(n / 1000).toFixed(0)}K`;

  return (
    <PageLayout>
      <SubpageHero
        eyebrow={`Luxury · ${luxe.length.toLocaleString()} Properties`}
        title="The upper market,"
        emphasis="made easier to read."
        lede="Every active property at $1M and above: lakefront homes, view homes, acreage, and heritage residences across the region, gathered into one clearer view."
        image={brandImages.procterLakeHouse}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Listings", href: "/listings" },
          { label: "Luxury" },
        ]}
        meta={[
          { value: "$1M+", label: "Entry" },
          { value: fmtCompact(median), label: "Median" },
          { value: fmtCompact(top), label: "Top of Market" },
          { value: luxe.length.toLocaleString(), label: "Active" },
        ]}
      />

      <section className="tone-ivory tonal-section pb-24 pt-10 md:pt-12">
        <Container>
          <ListingsBrowser listings={luxe} />
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Private Homes"
        title="The best homes"
        emphasis="don't list."
        body="Some high-value homes are not publicly listed. Tell Luke what you are looking for, and he can let you know whether a private introduction is realistic."
      />
    </PageLayout>
  );
}
