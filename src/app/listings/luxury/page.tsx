import { PageLayout } from "@/components/layout/PageLayout";
import { buildItemListJsonLd, buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { ListingsBrowser } from "@/components/listing/ListingsBrowser";
import { LuxuryListingReveal } from "@/components/listing/LuxuryListingReveal";
import { getListingBySlug, luxuryListings, sortByPriceDesc } from "@/lib/listings";
import { brandImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Nelson BC Luxury Real Estate & Kootenay Lake Homes",
  description:
    "Luxury real estate in Nelson BC and Kootenay Lake, including homes over $1M, waterfront property, view homes, acreage, and private seller introductions.",
  path: "/listings/luxury",
  image: "/og/listings-luxury.png",
});

const luxuryPockets = [
  {
    name: "John's Walk and Sproat Drive",
    body: "Walk-to-water homes near Lakeside Park, practical town access, and some of Nelson's most desirable larger residences.",
  },
  {
    name: "Fairview, Uphill, and Rosemont",
    body: "Higher city streets with views, schools, heritage homes, newer builds, later sun, and daily access to Nelson life.",
  },
  {
    name: "Hampton Gray, Foster, and Fort Sheppard",
    body: "Specific streets where buyers often look for larger homes, trail access, newer construction, and quiet upper-Nelson settings.",
  },
  {
    name: "Johnstone Road and the North Shore",
    body: "Lake-facing homes across the bridge, often pairing water access, views, privacy, and a short drive back into town.",
  },
];

export default function LuxuryListingsPage() {
  const luxe = sortByPriceDesc(luxuryListings);
  const revealListing = getListingBySlug("26-birchgrove-bend") ?? luxe.find((listing) => listing.beds && listing.beds > 0) ?? luxe[0];
  const enhancedRevealListing = revealListing
    ? { ...revealListing, heroPhoto: "/generated/luke-reveal-birchgrove-enhanced.webp" }
    : null;
  const top = luxe[0]?.priceNumber ?? 0;
  const median = luxe[Math.floor(luxe.length / 2)]?.priceNumber ?? 0;

  const fmtCompact = (n: number) =>
    n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : `$${(n / 1000).toFixed(0)}K`;

  return (
    <PageLayout>
      <JsonLd
        data={buildItemListJsonLd({
          path: "/listings/luxury",
          name: "Nelson BC luxury real estate listings",
          items: luxe.slice(0, 40).map((listing) => ({ name: listing.title, url: `/listings/${listing.slug}` })),
        })}
      />
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

      <SeoAnswerBlock
        eyebrow="Luxury Market"
        question="What counts as luxury real estate in Nelson BC?"
        answer="In Nelson and Kootenay Lake, luxury real estate is usually defined by scarcity: lakefront, protected views, acreage close to town, architectural quality, privacy, strong sun exposure, and a setting that supports full-time living or second-home ownership. Price matters, but the best homes also need local context before a buyer tours."
        terms={["nelson bc luxury real estate", "nelson bc luxury homes", "kootenay luxury real estate"]}
        tone="ivory"
      />

      {enhancedRevealListing && (
        <LuxuryListingReveal
          listing={enhancedRevealListing}
          copy={{
            lede:
              "Some properties need more than a thumbnail. Pull the cloth back and let the timber, light, and setting do what a listing grid never can.",
            panelBody:
              "Open the view, study the craft, then decide whether the privacy, scale, and setting deserve a closer conversation with Luke.",
          }}
        />
      )}

      <section className="tone-lake tonal-section border-y border-[var(--color-line)] py-20 md:py-24">
        <Container>
          <Reveal className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[0.86fr_1.14fr] md:items-end">
            <div>
              <Eyebrow>Luxury Pockets</Eyebrow>
              <SectionHeading className="mt-7">
                Where Nelson luxury
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">often begins.</em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Luxury in Nelson is not one neighbourhood. Buyers often compare water access, town access, views, sun, slope, and privacy street by street.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2 lg:grid-cols-4">
            {luxuryPockets.map((pocket, index) => (
              <Reveal key={pocket.name} delay={index * 60} className="bg-[var(--color-bg)] p-7">
                <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  Pocket {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="m-0 font-serif text-[26px] font-light leading-[1.1] text-[var(--color-text)]">{pocket.name}</h2>
                <p className="m-0 mt-4 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">{pocket.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-ivory tonal-section pb-24 pt-10 md:pt-12">
        <Container>
          <ListingsBrowser listings={luxe} filterMode="luxury" />
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
