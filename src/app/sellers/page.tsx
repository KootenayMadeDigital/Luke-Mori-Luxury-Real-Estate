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
    title: "Public receipts",
    body: "$169M+ in career sales volume and Best Luxury Broker BC recognition in 2021 and 2024.",
  },
  {
    title: "Controlled exposure",
    body: "Start with value, likely buyers, privacy needs, and the price line you do not want to cross.",
  },
  {
    title: "Marketing with consequence",
    body: "Cinematic film, architectural photography, editorial copy, room measurements, and a dedicated property page make the first impression feel intentional.",
  },
  {
    title: "Negotiation discipline",
    body: "Offers are read for price, terms, timing, conditions, and leverage. The loudest number is not always the cleanest result.",
  },
];

export const metadata = buildPageMetadata({
  title: "Selling with Luke · Seller Representation",
  description:
    "Seller representation for Nelson and Kootenay Lake real estate, cinematic film, editorial photography, controlled exposure, and a five-step process built for the price your home actually deserves.",
  path: "/sellers",
  image: brandImages.sellerDining,
});

export default function SellersPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="For Sellers"
        title="Selling a home,"
        emphasis="the way it deserves."
        lede="Sell with clear pricing advice, strong photography, property film, a dedicated listing page, and a launch plan built around your timeline."
        image={brandImages.sellerDining}
        crumbs={[{ label: "Home", href: "/" }, { label: "Sellers" }]}
        meta={[
          { value: "Launched", label: "Not Uploaded" },
          { value: "$169M+", label: "Career Volume" },
          { value: "2-4 wks", label: "Launch Window" },
          { value: "Discreet", label: "Default Approach" },
        ]}
      />

      <ProcessSteps
        eyebrow="The Seller Process"
        title="Five steps,"
        emphasis="executed properly."
        lede="From the first conversation to possession day. The work is the same regardless of price, only the marketing investment scales."
        steps={sellerSteps}
      />

      {/* Promises section reused from the home page */}
      <SellerSection />

      <section className="tone-office tonal-section border-b border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <Eyebrow>Seller Proof</Eyebrow>
              <SectionHeading className="mt-7">
                Trust is built
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  before the sign goes up.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              The seller decision is not whether Luke can list the home. It is whether the launch will protect price, privacy, timing, and leverage from the first conversation through closing.
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
              Architectural-grade photography. Drone film. A 60-second property film. Editorial copy.
              Geo-targeted paid distribution into Vancouver, Calgary, and select international markets.
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
        emphasis="Leave the pitch deck outside."
        body="No commitment, no pressure. Walk through the property, privacy requirements, timeline, and the outcome you are trying to protect. The strategy follows from there."
      />
    </PageLayout>
  );
}
