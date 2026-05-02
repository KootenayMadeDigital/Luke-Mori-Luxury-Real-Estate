import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ListingCard } from "@/components/layout/ListingCard";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { featuredEstates, brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Waterfront Houses · Nelson & Kootenay Lake",
  description:
    "Lakefront and waterfront real estate in the Nelson region — Kootenay Lake, the West Arm, North Shore corridor, and Slocan River. Direct beach, dock potential, and private moorage.",
};

export default function WaterfrontPage() {
  // Filter for properties with explicit waterfront positioning
  const waterfront = featuredEstates.filter((e) =>
    /waterfront|river|lake|shore/i.test(`${e.area} ${e.shortTitle} ${e.body}`)
  );

  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Waterfront"
        title="Lake. River."
        emphasis="Direct access."
        lede="Lakefront, riverfront, and the rare properties with both. Kootenay Lake's West Arm, the Highway 3A North Shore corridor, the Slocan and Kootenay rivers — represented with the local intelligence the inventory deserves."
        image={brandImages.kayaking}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Listings", href: "/listings" },
          { label: "Waterfront" },
        ]}
        meta={[
          { value: "Lake & River", label: "Frontage Type" },
          { value: "Dock-Capable", label: "Most Properties" },
          { value: "West Arm", label: "Primary Body" },
          { value: "Year-Round", label: "Access" },
        ]}
      />

      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[760px]">
            <Eyebrow>Active · Waterfront</Eyebrow>
            <SectionHeading className="mt-7">
              On the water,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                right now.
              </em>
            </SectionHeading>
            <SectionLede>
              Currently represented waterfront properties — each with direct frontage, private
              dock potential, and the kind of view people spend a lifetime chasing.
            </SectionLede>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {waterfront.map((e, i) => (
              <Reveal key={e.slug} delay={i * 80}>
                <ListingCard estate={e} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-bg-2)] py-24 md:py-28">
        <Container>
          <Reveal className="mx-auto max-w-[760px] text-center">
            <Eyebrow centered>The Waterfront Difference</Eyebrow>
            <SectionHeading centered className="mt-7">
              Frontage isn&apos;t a feature.
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                It&apos;s the property.
              </em>
            </SectionHeading>
            <SectionLede align="center" className="mb-12">
              Waterfront properties are appraised, marketed, and represented differently.
              Lake exposure, dock rights, water depth, and shoreline classification all matter
              — and most agents miss two of those four. We don&apos;t.
            </SectionLede>
          </Reveal>

          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { num: "I.", title: "Lake Frontage", body: "Linear footage, beach quality, water depth, and Crown foreshore arrangements." },
              { num: "II.", title: "Dock & Marina", body: "Existing structures, permit transferability, and what's actually buildable." },
              { num: "III.", title: "Year-Round Access", body: "Highway 3A versus seasonal, road maintenance, and winter-residence viability." },
            ].map((p) => (
              <Reveal key={p.num} className="border border-[var(--color-line)] bg-[var(--color-bg)] p-7">
                <div className="mb-4 font-serif text-[16px] italic text-[var(--color-bronze)]">{p.num}</div>
                <h4 className="m-0 mb-3 font-serif text-[20px] font-normal text-[var(--color-text)]">{p.title}</h4>
                <p className="m-0 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Waterfront Inquiry"
        title="Waterfront rarely lists."
        emphasis="Tell us what you want."
        body="Most of the region's best waterfront moves quietly. The first conversation is always about what you actually want — water orientation, depth, dock, year-round access — before anything is shown."
      />
    </PageLayout>
  );
}
