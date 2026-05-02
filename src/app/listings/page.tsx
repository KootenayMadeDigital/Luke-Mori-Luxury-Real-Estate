import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { ListingsBrowser } from "@/components/listing/ListingsBrowser";
import { allListings, lukesOwnListings, luxuryListings, sortByPriceDesc } from "@/lib/listings";
import { brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Active Listings · Nelson & Kootenay Real Estate",
  description:
    "Browse every active real estate listing across Nelson, Kootenay Lake, and the broader Kootenay region — featured estates listed by Luke Mori plus the full MLS catalog represented through his portal.",
};

export default function ListingsIndexPage() {
  const total = allListings.length;
  const luxe = luxuryListings.length;
  const lukes = lukesOwnListings.length;

  return (
    <PageLayout>
      <SubpageHero
        eyebrow={`Active · ${total.toLocaleString()} Listings`}
        title="The Kootenay market,"
        emphasis="end to end."
        lede="Every active property across Nelson, Kootenay Lake, the Slocan and Columbia valleys, Kaslo and beyond. Luke's own listings carry a bronze badge — the rest of the catalog is represented through his portal."
        image={brandImages.procterLakeHouse}
        crumbs={[{ label: "Home", href: "/" }, { label: "Listings" }]}
        meta={[
          { value: total.toLocaleString(), label: "Active Properties" },
          { value: lukes.toString(), label: "Listed by Luke" },
          { value: luxe.toLocaleString(), label: "Luxury · $1M+" },
          { value: "Live", label: "MLS Catalog" },
        ]}
      />

      <section className="bg-[var(--color-bg)] pb-24 pt-10 md:pt-12">
        <Container>
          <ListingsBrowser listings={sortByPriceDesc(allListings)} />
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Off-Market"
        title="Some properties never list."
        emphasis="Ask anyway."
        body="Our private inventory of unlisted estates is held for owners who require complete discretion. Access is granted on an introductory basis, by request."
      />
    </PageLayout>
  );
}
