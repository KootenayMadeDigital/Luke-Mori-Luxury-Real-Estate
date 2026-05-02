import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
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

export const metadata: Metadata = {
  title: "Selling with Luke · Seller Representation",
  description:
    "Seller representation for Nelson and Kootenay Lake real estate — cinematic film, editorial photography, controlled exposure, and a five-step process built for the price your home actually deserves.",
};

export default function SellersPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="For Sellers"
        title="Selling a home,"
        emphasis="the way it deserves."
        lede="Exceptional service, innovative marketing, and years of local experience. Cinematic film, editorial photography, a dedicated property site, and a controlled rollout — built around your discretion, your timeline, and the price your home actually deserves."
        image={brandImages.procterLakeHouse}
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
        lede="From the first conversation to possession day. The work is the same regardless of price — only the marketing investment scales."
        steps={sellerSteps}
      />

      {/* Promises section reused from the home page */}
      <SellerSection />

      <section className="bg-[var(--color-bg)] py-24 md:py-28">
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
        title="Worth a 30-minute"
        emphasis="conversation."
        body="No commitment, no pressure. Walk through what you have, what you're hoping for, and what the market will actually do for it. The strategy follows from there."
      />
    </PageLayout>
  );
}
