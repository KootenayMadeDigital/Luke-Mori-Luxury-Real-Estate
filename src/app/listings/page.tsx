import { PageLayout } from "@/components/layout/PageLayout";
import { buildItemListJsonLd, buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ListingsBrowser } from "@/components/listing/ListingsBrowser";
import { ListingCompareTool } from "@/components/listing/ListingCompareTool";
import { allListings, lukesOwnListings, luxuryListings, sortByPriceDesc } from "@/lib/listings";
import { brandImages, facebookReviews, facebookReviewsUrl } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Nelson BC Real Estate Listings & Homes for Sale",
  description:
    "Browse Nelson BC real estate listings, homes for sale, waterfront property, acreage, Kootenay Lake homes, and homes over $1M with Luke Mori.",
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
        eyebrow={`For Sale · ${total.toLocaleString()} Listings`}
        title="See what is active,"
        emphasis="then narrow with care."
        lede="Browse active properties across Nelson, Kootenay Lake, the Slocan and Columbia valleys, Kaslo, and beyond. Use the filters to build a clearer short list."
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

      <ListingCompareTool listings={sortByPriceDesc(allListings).slice(0, 80)} />

      <section className="tone-office tonal-section pb-24 pt-10 md:pt-12">
        <Container>
          <ListingsBrowser listings={sortByPriceDesc(allListings)} />
        </Container>
      </section>

      <section className="tone-walnut tonal-section border-t border-[var(--color-line)] py-20 md:py-24">
        <Container>
          <Reveal className="grid grid-cols-1 gap-8 border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.035)] p-8 shadow-[0_32px_90px_-68px_rgba(0,0,0,0.9)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <Eyebrow>Buyer Confidence</Eyebrow>
              <blockquote className="m-0 mt-5 max-w-[880px] font-serif text-[24px] font-light leading-[1.45] tracking-[-0.005em] text-[var(--color-text)] sm:text-[30px]">
                &ldquo;{facebookReviews[12].quote}&rdquo;
              </blockquote>
              <p className="m-0 mt-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                {facebookReviews[12].context}
              </p>
            </div>
            <Button href={facebookReviewsUrl} variant="ghost" size="md" arrow>
              Read Reviews
            </Button>
          </Reveal>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Buyer Inquiry"
        title="Looking for something specific?"
        emphasis="Ask Luke."
        body="Tell Luke what you are looking for, and he can help you compare what is active, what may be coming, and what is worth your time."
      />
    </PageLayout>
  );
}
