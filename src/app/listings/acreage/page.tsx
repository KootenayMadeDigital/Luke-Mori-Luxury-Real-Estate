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
import { acreageListings, sortByPriceDesc } from "@/lib/listings";
import { brandImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Kootenay Acreage & Land for Sale | Nelson BC Rural Real Estate",
  description:
    "Browse Kootenay acreage, rural homes, vacant land, recreational property, development parcels, and larger lots near Nelson BC and Kootenay Lake.",
  path: "/listings/acreage",
  image: "/og/listings-acreage.png",
});

const acreageNotes = [
  {
    label: "Access",
    title: "Roads, grades, and winter reality",
    body: "Acreage changes quickly once driveway length, plowing, shared access, easements, and year-round maintenance enter the picture.",
  },
  {
    label: "Services",
    title: "Water, septic, power, and internet",
    body: "Rural value depends on what is already proven, what still needs verification, and what a lender or insurer will require before completion.",
  },
  {
    label: "Use",
    title: "Privacy, animals, shops, and future plans",
    body: "A good acreage search starts with how the property will be used, not just how many acres appear in the listing grid.",
  },
];

export default function AcreageListingsPage() {
  const acreage = sortByPriceDesc(acreageListings);
  const vacantCount = acreage.filter((listing) => /vacant\s*land|raw\s*land|recreational/i.test(listing.propertyType)).length;
  const largest = acreage.reduce((max, listing) => Math.max(max, listing.lotAcres ?? 0), 0);

  return (
    <PageLayout>
      <JsonLd
        data={buildItemListJsonLd({
          path: "/listings/acreage",
          name: "Kootenay acreage and land listings",
          items: acreage.slice(0, 40).map((listing) => ({ name: listing.title, url: `/listings/${listing.slug}` })),
        })}
      />
      <SubpageHero
        eyebrow={`Acreage · ${acreage.length.toLocaleString()} Properties`}
        title="Room to breathe."
        emphasis="Facts to verify."
        lede="Rural homes, land holdings, recreational parcels, and meaningful lots across Nelson, Kootenay Lake, the Slocan Valley, and surrounding communities."
        image={brandImages.blewettWoodedAcreage}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Listings", href: "/listings" },
          { label: "Acreage" },
        ]}
        meta={[
          { value: acreage.length.toLocaleString(), label: "Active" },
          { value: vacantCount.toLocaleString(), label: "Land parcels" },
          { value: `${Math.round(largest).toLocaleString()} ac`, label: "Largest" },
          { value: "Rural", label: "Due diligence" },
        ]}
      />

      <SeoAnswerBlock
        eyebrow="Acreage Search"
        question="What should buyers verify before buying acreage near Nelson BC?"
        answer="Acreage buyers should verify legal access, road maintenance, water source, septic records, zoning, ALR status where relevant, wildfire exposure, insurance, internet, snow clearing, boundaries, and any easements or shared-use agreements. The number of acres matters, but usability and due diligence usually matter more."
        terms={["kootenay acreage for sale", "nelson bc acreage", "rural property nelson bc"]}
        tone="ivory"
      />

      <section className="tone-lake tonal-section border-y border-[var(--color-line)] py-20 md:py-24">
        <Container>
          <Reveal className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[0.86fr_1.14fr] md:items-end">
            <div>
              <Eyebrow>Acreage Due Diligence</Eyebrow>
              <SectionHeading className="mt-7">
                Space is the easy part.
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">Certainty is the work.</em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Larger properties need a more careful read: access, services, title, wildfire, slope, water, septic, and the practical cost of living with land through winter.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-3">
            {acreageNotes.map((note, index) => (
              <Reveal key={note.title} delay={index * 70} className="bg-[var(--color-bg)] p-7 md:p-8">
                <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  {note.label}
                </span>
                <h2 className="m-0 font-serif text-[28px] font-light leading-[1.1] text-[var(--color-text)]">{note.title}</h2>
                <p className="m-0 mt-4 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">{note.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-ivory tonal-section pb-24 pt-10 md:pt-12">
        <Container>
          <ListingsBrowser listings={acreage} initialFilter="all" initialSort="price-desc" filterMode="acreage" />
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Acreage Inquiry"
        title="Buying land takes"
        emphasis="local judgment."
        body="Tell Luke what you want the land to do: privacy, horses, shop space, water, timber, gardens, second-home use, or future building plans."
      />
    </PageLayout>
  );
}
