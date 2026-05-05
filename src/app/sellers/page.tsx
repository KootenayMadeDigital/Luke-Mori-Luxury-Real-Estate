import { PageLayout } from "@/components/layout/PageLayout";
import { buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ProcessSteps } from "@/components/layout/ProcessSteps";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { SellerSection } from "@/components/sections/SellerSection";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { headerImages, sellerSteps } from "@/lib/data";

const sellerLeverage = [
  {
    title: "The first launch sets the price ceiling.",
    body: "A weak first impression teaches the market to wait. Strong pricing, visuals, and buyer targeting protect leverage before the listing is public.",
  },
  {
    title: "Privacy is part of the value.",
    body: "A high-value home should not become entertainment for casual traffic. Qualified interest, controlled showings, and careful exposure protect both the seller and the result.",
  },
  {
    title: "The buyer has to understand the home fast.",
    body: "Lakefront, acreage, view, and legacy homes need clear storytelling. Buyers should understand the life, the land, and the scarcity before they arrive.",
  },
];

export const metadata = buildPageMetadata({
  title: "Sell a Home in Nelson BC · Luxury Seller Representation",
  description:
    "Sell a Nelson BC luxury home, waterfront property, acreage, or Kootenay Lake residence with pricing strategy, private marketing, qualified showings, and negotiation support.",
  path: "/sellers",
  image: "/og/sellers.png",
});

export default function SellersPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="For Sellers"
        title="Sell with clarity,"
        emphasis="not guesswork."
        lede="Protect the sale with clear pricing advice, strong photography, property film, qualified showings, and a launch plan built around your timeline."
        image={headerImages.sellerDining}
        crumbs={[{ label: "Home", href: "/" }, { label: "Sellers" }]}
        meta={[
          { value: "Launched", label: "Not Uploaded" },
          { value: "$169M+", label: "Career Volume" },
          { value: "2-4 wks", label: "Launch Window" },
          { value: "Private", label: "By Default" },
        ]}
      />

      <SeoAnswerBlock
        eyebrow="Seller Strategy"
        question="How should a high-value Nelson BC home be sold?"
        answer="A serious Nelson or Kootenay Lake property should not be treated like a quick MLS upload. Before launch, sellers need clear pricing, strong visuals, privacy planning, buyer screening, showing control, and negotiation advice that protects the result from the first conversation."
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
              Higher-value sellers are not paying for upload speed. They are paying for judgment before exposure, so the first public impression supports the price instead of weakening it.
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

      <ProcessSteps
        eyebrow="The Seller Process"
        title="Five steps,"
        emphasis="handled clearly."
        lede="From the first conversation to possession day, the work stays clear, organized, and practical."
        steps={sellerSteps}
      />

      {/* Promises section reused from the home page */}
      <SellerSection />

      <section className="tone-lake tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mx-auto max-w-[760px] text-center">
            <Eyebrow centered>The Marketing Standard</Eyebrow>
            <SectionHeading centered className="mt-7">
              What every property gets,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                regardless of price.
              </em>
            </SectionHeading>
            <SectionLede align="center">
              Professional photography. Drone film. A 60-second property film. Clear copy.
              Targeted distribution into Vancouver, Calgary, and select international markets when the property calls for it.
              The standard is not the upgrade.
            </SectionLede>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {[
              { value: "350+", label: "YouTube Subscribers" },
              { value: "9K+", label: "Instagram Followers" },
              { value: "200K+", label: "Property Film Views" },
              { value: "100+", label: "Property Films" },
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

      <InquiryCTA
        eyebrow="Seller Strategy Call"
        title="Bring the address."
        emphasis="Leave with the first move."
        body="No commitment, no pressure. Walk through the property, privacy needs, timeline, and outcome you want. Luke can tell you the right first move."
      />
    </PageLayout>
  );
}
