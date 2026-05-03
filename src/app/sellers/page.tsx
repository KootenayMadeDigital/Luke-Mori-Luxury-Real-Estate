import { PageLayout } from "@/components/layout/PageLayout";
import { buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ProcessSteps } from "@/components/layout/ProcessSteps";
import { SellerSection } from "@/components/sections/SellerSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { sellerSteps, brandImages } from "@/lib/data";

const sellerProofStack = [
  {
    title: "Record before promises",
    body: "$169M+ in career sales volume and Best Luxury Broker BC recognition in 2021 and 2024.",
  },
  {
    title: "Exposure with control",
    body: "Set value, likely buyers, privacy needs, and the price line you do not want to cross before the launch.",
  },
  {
    title: "Marketing that earns the right attention",
    body: "Film, photography, clear copy, room measurements, and a dedicated property page help qualified buyers understand the home before they visit.",
  },
  {
    title: "Negotiation",
    body: "Offers are reviewed for price, terms, timing, conditions, and leverage. The loudest number is not always the cleanest result.",
  },
];

export const metadata = buildPageMetadata({
  title: "Selling with Luke · Seller Representation",
  description:
    "Seller representation for Nelson and Kootenay Lake real estate with clear pricing, strong marketing, qualified showings, and careful negotiation.",
  path: "/sellers",
  image: brandImages.sellerDining,
});

export default function SellersPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="For Sellers"
        title="Sell with clarity,"
        emphasis="not guesswork."
        lede="Protect the sale with clear pricing advice, strong photography, property film, qualified showings, and a launch plan built around your timeline."
        image={brandImages.sellerDining}
        crumbs={[{ label: "Home", href: "/" }, { label: "Sellers" }]}
        meta={[
          { value: "Launched", label: "Not Uploaded" },
          { value: "$169M+", label: "Career Volume" },
          { value: "2-4 wks", label: "Launch Window" },
          { value: "Private", label: "By Default" },
        ]}
      />

      <ProcessSteps
        eyebrow="The Seller Process"
        title="Five steps,"
        emphasis="handled clearly."
        lede="From the first conversation to possession day, the work stays clear, organized, and practical."
        steps={sellerSteps}
      />

      {/* Promises section reused from the home page */}
      <SellerSection />

      <section className="tone-office tonal-section border-b border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <Eyebrow>Seller Record</Eyebrow>
              <SectionHeading className="mt-7">
                Trust is built
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  before the sign goes up.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              The question is not whether the home can be listed. It is whether the launch protects price, privacy, timing, and leverage from the first conversation to closing.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-4">
            {sellerProofStack.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 70} className="bg-[var(--color-bg-2)] p-8 sm:p-9">
                <span className="mb-5 block font-serif text-[20px] italic text-[var(--color-bronze)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 mb-4 font-serif text-[26px] font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="m-0 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

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

      <Testimonials />

      <InquiryCTA
        eyebrow="Seller Strategy Call"
        title="Bring the address."
        emphasis="Leave with the first move."
        body="No commitment, no pressure. Walk through the property, privacy needs, timeline, and outcome you want. Luke can tell you the right first move."
      />
    </PageLayout>
  );
}
