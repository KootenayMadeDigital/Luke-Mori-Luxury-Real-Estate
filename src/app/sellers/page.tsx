import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ProcessSteps } from "@/components/layout/ProcessSteps";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { GuideLinkPanel } from "@/components/seo/GuideLinkPanel";
import { SellerSection } from "@/components/sections/SellerSection";
import { SellerReadinessChecklist } from "@/components/conversion/SellerReadinessChecklist";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { headerImages, sellerSteps } from "@/lib/data";

const sellerLeverage = [
  {
    title: "The first impression matters.",
    body: "A weak first impression teaches buyers to wait. Strong pricing, visuals, and buyer focus help protect value before the listing is public.",
  },
  {
    title: "Privacy should be planned.",
    body: "A private home should not become entertainment for casual traffic. Serious interest, thoughtful showings, and clear boundaries protect both the seller and the result.",
  },
  {
    title: "The buyer has to understand the home fast.",
    body: "Lakefront, acreage, view, and special homes need clear storytelling. Buyers should understand the life, the land, and the value before they arrive.",
  },
];

const sellerScenarioCards = [
  {
    title: "Long-held family home",
    body: "Plan the sale around emotion, timing, privacy, documents, deferred maintenance, family decision-makers, and what should be fixed versus simply disclosed and priced correctly.",
    links: [
      { label: "Estate and legacy sale", href: "/guides/estate-legacy-property-sale-kootenays" },
      { label: "Pricing unique property", href: "/guides/pricing-unique-kootenay-property" },
    ],
  },
  {
    title: "Waterfront or view property",
    body: "The buyer needs to understand shoreline, sun, access, dock or beach questions, insurance, septic, water, slope, and why the property deserves its price before the first showing.",
    links: [
      { label: "Selling waterfront", href: "/guides/selling-waterfront-property-kootenay-lake" },
      { label: "Prepare waterfront", href: "/guides/preparing-waterfront-home-for-market-kootenays" },
    ],
  },
  {
    title: "Acreage, rural, or systems-heavy home",
    body: "Buyers will ask about access, snow, wells, septic, outbuildings, fire risk, ALR, zoning, permits, boundaries, and private-road obligations. Prepare answers before the listing goes public.",
    links: [
      { label: "Preparing acreage", href: "/guides/preparing-acreage-property-for-market-kootenays" },
      { label: "Rural due diligence", href: "/guides/rural-luxury-property-due-diligence-bc" },
    ],
  },
  {
    title: "Private or higher-value sale",
    body: "Not every showing should happen. Decide the public/private balance, photography boundaries, buyer screening, timing, negotiation posture, and what proof should be shown only to serious buyers.",
    links: [
      { label: "Listing agent questions", href: "/guides/questions-before-hiring-luxury-listing-agent" },
      { label: "Marketing important homes", href: "/guides/luxury-home-marketing-kootenays" },
    ],
  },
];

const sellerResearchLinks = [
  { label: "BC Assessment search", href: "https://www.bcassessment.ca/", note: "Assessment history, property class, and public property information buyers may check." },
  { label: "LTSA title search", href: "https://ltsa.ca/property-owners/how-can-i/search-for-a-title/", note: "Title, registered charges, legal description, PID, and professionals who can interpret title." },
  { label: "RDCK building and development", href: "https://www.rdck.ca/development-community-sustainability-services/building/", note: "Useful for rural permits, additions, outbuildings, and buyer questions outside city limits." },
  { label: "BC water licensing and rights", href: "https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/water-licensing-rights", note: "Important when selling properties with wells, irrigation, creeks, or non-domestic water use." },
  { label: "BC onsite sewage systems", href: "https://www2.gov.bc.ca/gov/content/environment/waste-management/sewage/onsite-sewage-systems", note: "Helpful background for septic records, inspections, and rural buyer questions." },
  { label: "FireSmart BC", href: "https://firesmartbc.ca/", note: "Preparation and risk-reduction steps for forested and interface properties." },
];

export const metadata = buildPageMetadata({
  title: "Sell a Home in Nelson BC · Luke Mori Seller Guidance",
  description:
    "Sell a Nelson BC home, waterfront property, acreage, or Kootenay Lake residence with clear pricing advice, strong marketing, serious showings, and negotiation support.",
  path: "/sellers",
  image: "/og/sellers.png",
});

export default function SellersPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="For Sellers"
        title="Sell with a clear plan,"
        emphasis="not guesswork."
        lede="Protect the sale with clear pricing advice, strong photography, property film, serious showings, and a sale plan built around your timeline."
        image={headerImages.sellerDining}
        crumbs={[{ label: "Home", href: "/" }, { label: "Sellers" }]}
        meta={[
          { value: "Planned", label: "Not Rushed" },
          { value: "$169M+", label: "Lifetime Sales" },
          { value: "2-4 wks", label: "Prep Window" },
          { value: "Clear", label: "Showing Plan" },
        ]}
      />

      <SeoAnswerBlock
        eyebrow="Seller Strategy"
        question="How should a Nelson BC home be sold when privacy, price, and timing matter?"
        answer="A Nelson or Kootenay Lake property with real value should not be treated like a quick MLS upload. Before listing, sellers need clear pricing, strong visuals, privacy planning, buyer screening, showing control, and negotiation advice that protects the result from the first conversation."
        terms={["selling house nelson bc", "sell luxury home nelson bc", "kootenay lake waterfront seller"]}
        tone="office"
      />

      <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <Eyebrow>Seller Leverage</Eyebrow>
              <SectionHeading className="mt-7">
                Do not let the market
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  misread the home.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Sellers are not paying for upload speed. They are paying for judgment before the home reaches buyers, so the first public impression supports the price instead of weakening it.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {sellerLeverage.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
                <span className="mb-6 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  Leverage {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-serif text-[30px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="m-0 mt-5 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <SellerReadinessChecklist />

      <ProcessSteps
        eyebrow="The Seller Process"
        title="Five steps,"
        emphasis="handled clearly."
        lede="From the first conversation to possession day, the work stays clear, organized, and practical."
        steps={sellerSteps}
      />

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.88fr_1.12fr] md:items-end">
            <div>
              <Eyebrow>Seller Situation Desk</Eyebrow>
              <SectionHeading className="mt-7">
                Prepare for the buyer
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  you are likely to meet.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              A long-held family home, waterfront property, acreage, and private higher-value sale each need different preparation. The goal is to answer buyer concern before it weakens the offer.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sellerScenarioCards.map((card, index) => (
              <Reveal key={card.title} delay={(index % 2) * 70} className="flex h-full flex-col border border-[var(--color-line)] bg-[var(--color-bg)] p-8 sm:p-9">
                <span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  Sale type {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-serif text-[30px] font-light leading-[1.12] text-[var(--color-text)]">{card.title}</h3>
                <p className="m-0 mt-5 flex-1 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">{card.body}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {card.links.map((link) => (
                    <Link key={link.href} href={link.href} className="rounded-full border border-[var(--color-line-strong)] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronze)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Promises section reused from the home page */}
      <SellerSection />

      <section className="tone-lake tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mx-auto max-w-[760px] text-center">
            <Eyebrow centered>The Marketing Standard</Eyebrow>
            <SectionHeading centered className="mt-7">
              The core marketing package,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                shown plainly.
              </em>
            </SectionHeading>
            <SectionLede align="center">
              Luke&apos;s seller materials describe professional photography, video tours using drone and indoor equipment, room measurements, and careful property details. For homes with broader buyer appeal, the plan can also include targeted reach beyond Nelson.
            </SectionLede>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {[
              { value: "350+", label: "YouTube Subscribers" },
              { value: "9K+", label: "Instagram Followers" },
              { value: "200K+", label: "Property Film Views" },
              { value: "100+", label: "Property Videos" },
            ].map((s) => (
              <Reveal key={s.label} className="border border-[var(--color-line)] bg-[var(--color-surface)] p-7 text-center">
                <div className="mb-2 font-serif text-[28px] font-light leading-none tracking-[-0.005em] text-[var(--color-text)] md:text-[34px]">
                  {s.value}
                </div>
                <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GuideLinkPanel
        eyebrow="Seller Guide Path"
        title="Prepare the sale before the market judges it."
        lede="These guides help owners of Nelson, Kootenay Lake, waterfront, acreage, and long-held homes plan pricing, preparation, privacy, and buyer questions."
        links={[
          { title: "Selling a luxury home in Nelson", body: "How to prepare, price, explain, and protect the sale.", href: "/guides/selling-luxury-home-nelson-bc" },
          { title: "Selling waterfront property", body: "How to prepare shoreline, access, systems, documents, and buyer questions.", href: "/guides/selling-waterfront-property-kootenay-lake" },
          { title: "Pricing a unique property", body: "Why waterfront, acreage, view, and legacy homes need more than ordinary comparables.", href: "/guides/pricing-unique-kootenay-property" },
        ]}
      />

      <section className="tone-ivory tonal-section border-t border-[var(--color-line)] py-20 md:py-24">
        <Container>
          <Reveal className="mb-12 max-w-[760px]">
            <Eyebrow>Outside Research</Eyebrow>
            <SectionHeading className="mt-7">
              Documents buyers
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                may check anyway.
              </em>
            </SectionHeading>
            <SectionLede>
              The stronger seller comes prepared. These public resources help frame title, assessment, permits, water, septic, and wildfire questions before they appear in negotiation.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-3">
            {sellerResearchLinks.map((link) => (
              <Reveal key={link.href} className="bg-[var(--color-bg)] p-7">
                <a href={link.href} target="_blank" rel="noreferrer" className="group block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Research Link</span>
                  <h3 className="m-0 mt-4 font-serif text-[25px] font-light leading-[1.16] text-[var(--color-text)] group-hover:text-[var(--color-bronze-light)]">{link.label}</h3>
                  <p className="m-0 mt-4 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">{link.note}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Seller Strategy Call"
        title="Bring the address."
        emphasis="Leave with a clearer plan."
        body="No commitment, no pressure. Walk through the property, privacy needs, timeline, and outcome you want. Luke can help you understand the right next step."
      />
    </PageLayout>
  );
}
