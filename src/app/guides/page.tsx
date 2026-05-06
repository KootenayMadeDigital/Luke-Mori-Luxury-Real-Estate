import Link from "next/link";
import { buildItemListJsonLd, buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { buyerGuides, guideCategories } from "@/lib/guides";

export const metadata = buildPageMetadata({
  title: "Kootenay Real Estate Guides",
  description: "Practical buyer and seller guides for Kootenay Lake, Nelson, Kaslo, rural acreage, waterfront review, and important property decisions in BC.",
  path: "/guides",
  image: "/generated/guide-headers/guides-hub.webp",
});

const guidePathways = [
  {
    eyebrow: "Buying in Nelson",
    title: "Choose the area before the house",
    body: "Start with daily life, neighbourhood fit, winter routine, and the type of home that actually suits you.",
    href: "/guides/best-areas-to-live-nelson-bc",
    links: [
      { label: "Nelson areas", href: "/nelson" },
      { label: "Relocation", href: "/buyers/relocation" },
    ],
  },
  {
    eyebrow: "Lake and land",
    title: "Waterfront, acreage, and rural review",
    body: "Use the guides that cover access, water, septic, insurance, wildfire, title, and what must be checked before an offer.",
    href: "/guides/buying-kootenay-lake-waterfront-property",
    links: [
      { label: "Waterfront listings", href: "/listings/waterfront" },
      { label: "Acreage listings", href: "/listings/acreage" },
    ],
  },
  {
    eyebrow: "Selling well",
    title: "Prepare the story before the listing",
    body: "For owners of important homes, long-held properties, waterfront, acreage, and homes that need a clearer sale plan.",
    href: "/guides/selling-luxury-home-nelson-bc",
    links: [
      { label: "Seller guidance", href: "/sellers" },
      { label: "Sold listings", href: "/listings/sold" },
    ],
  },
  {
    eyebrow: "Costs and rules",
    title: "Answer the quiet deal questions early",
    body: "Taxes, short-term rentals, title, insurance, permits, and conditions are easier to handle before the property feels urgent.",
    href: "/guides/bc-property-transfer-tax-closing-costs-kootenay-buyers",
    links: [
      { label: "Property review guides", href: "/guides#due-diligence" },
      { label: "Ask Luke", href: "/contact#consultation" },
    ],
  },
];

const priorityGuideLinks = [
  "best-areas-to-live-nelson-bc",
  "kootenay-lake-real-estate-market-guide",
  "nelson-bc-luxury-homes-guide",
  "buying-kootenay-lake-waterfront-property",
  "buying-acreage-in-the-kootenays",
  "selling-luxury-home-nelson-bc",
  "selling-waterfront-property-kootenay-lake",
  "bc-property-transfer-tax-closing-costs-kootenay-buyers",
  "wildfire-flood-insurance-kootenay-property",
]
  .map((slug) => buyerGuides.find((guide) => guide.slug === slug))
  .filter((guide): guide is (typeof buyerGuides)[number] => Boolean(guide));

export default function BuyerGuidesPage() {
  return (
    <PageLayout>
      <JsonLd
        data={buildItemListJsonLd({
          path: "/guides",
          name: "Kootenay real estate guide library",
          items: buyerGuides.map((guide) => ({ name: guide.title, url: `/guides/${guide.slug}` })),
        })}
      />
      <SubpageHero
        eyebrow="Guides"
        title="40 guides for Kootenay real estate"
        emphasis="without the guesswork."
        lede="Buyer, seller, and property review guides for Nelson, Kootenay Lake, waterfront, acreage, relocation, taxes, ownership rules, local risks, and the questions worth asking before you move."
        image="/generated/guide-headers/guides-hub.webp"
        crumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
        meta={[
          { value: buyerGuides.length.toString(), label: "Guides" },
          { value: "Buyer", label: "Search Help" },
          { value: "Seller", label: "Sale Planning" },
          { value: "BC", label: "Property Review" },
        ]}
      />

      <section className="tone-ivory tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.85fr_1fr] md:items-end">
            <div>
              <Eyebrow>Kootenay Guide Library</Eyebrow>
              <SectionHeading className="mt-7">
                Useful answers,
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">without the noise.</em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Buyer, seller, and property review guides for important real estate decisions across Nelson, Kaslo, Kootenay Lake, and rural BC. Use them to ask better questions, then confirm property-specific details with the right professional.
            </SectionLede>
          </Reveal>

          <Reveal className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {guidePathways.map((pathway) => (
              <div key={pathway.title} className="luxury-card flex h-full flex-col border border-[var(--color-line)] bg-[var(--color-bg)] p-7 sm:p-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">{pathway.eyebrow}</span>
                <h2 className="m-0 mt-5 font-serif text-[30px] font-light leading-[1.08] text-[var(--color-text)]">{pathway.title}</h2>
                <p className="m-0 mt-5 flex-1 text-[15px] leading-[1.72] text-[var(--color-text-muted)]">{pathway.body}</p>
                <Link href={pathway.href} className="mt-7 inline-flex text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Start here</Link>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--color-line)] pt-5">
                  {pathway.links.map((link) => (
                    <Link key={link.href} href={link.href} className="rounded-full border border-[var(--color-line)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze)]">{link.label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mb-16 border border-[var(--color-line)] bg-[var(--color-surface)] p-7 sm:p-9">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
              <div>
                <Eyebrow>Common Searches</Eyebrow>
                <h2 className="m-0 mt-5 font-serif text-[38px] font-light leading-[1.08] text-[var(--color-text)] md:text-[48px]">The questions buyers and sellers ask first.</h2>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {priorityGuideLinks.map((guide) => (
                  <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group border border-[var(--color-line)] bg-[var(--color-bg)] p-5 transition-colors hover:border-[var(--color-bronze)]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">{guide.category}</span>
                    <h3 className="m-0 mt-3 text-[16px] font-semibold leading-[1.35] text-[var(--color-text)]">{guide.title}</h3>
                    <p className="m-0 mt-3 text-[13px] leading-[1.65] text-[var(--color-text-muted)]">{guide.dek}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-16">
            {guideCategories.map((category) => {
              const guides = buyerGuides.filter((guide) => guide.category === category);
              return (
                <div
                  key={category}
                  id={category === "Buyer Guides" ? "buyer-guides" : category === "Due Diligence" ? "due-diligence" : "seller-guides"}
                  className="scroll-mt-36"
                >
                  <Reveal className="mb-6 flex items-center gap-4">
                    <span className="h-px flex-1 bg-[var(--color-line)]" />
                    <h2 className="m-0 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">{category}</h2>
                    <span className="h-px flex-1 bg-[var(--color-line)]" />
                  </Reveal>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {guides.map((guide, index) => (
                      <Reveal key={guide.slug} delay={index * 60}>
                        <Link href={`/guides/${guide.slug}`} className="luxury-card group flex h-full flex-col border border-[var(--color-line)] bg-[var(--color-bg)] p-7 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[var(--color-bronze)] sm:p-8">
                          <span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">{guide.readTime}</span>
                          <h3 className="m-0 font-serif text-[30px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)]">{guide.title}</h3>
                          <p className="m-0 mt-5 flex-1 text-[15px] leading-[1.72] text-[var(--color-text-muted)]">{guide.dek}</p>
                          <span className="mt-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Read this guide</span>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <InquiryCTA eyebrow="Ask Luke" title="Have a property or sale in mind?" emphasis="Ask before the tour." body="Send the address, area, or property type you are considering. Luke can help you understand the questions worth answering before a showing, offer, or sale plan." />
    </PageLayout>
  );
}
