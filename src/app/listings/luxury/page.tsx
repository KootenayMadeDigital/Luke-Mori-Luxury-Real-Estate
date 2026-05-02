import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ListingCard } from "@/components/layout/ListingCard";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { featuredEstates, brandImages, recentlyConcluded } from "@/lib/data";

export const metadata: Metadata = {
  title: "Luxury Real Estate · Nelson & Kootenay Lake",
  description:
    "Luxury real estate in Nelson, Kootenay Lake, and the broader Kootenay region — lakefront estates, architectural view homes, ski-access acreage, and heritage residences represented at the top of the market.",
};

export default function LuxuryListingsPage() {
  // For the concept, all featured estates qualify as luxury tier.
  const luxuryEstates = featuredEstates;
  // Recently sold filtered to $2M+ to demonstrate luxury volume.
  const luxurySold = recentlyConcluded.filter((c) => {
    const num = parseInt(c.offered.replace(/[^0-9]/g, ""), 10);
    return num >= 2000000;
  });

  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Luxury · $1M+"
        title="Nelson & Kootenay Lake"
        emphasis="luxury real estate."
        lede="The top of the regional market — lakefront estates, architectural view homes, private mountain acreage, and heritage residences. Each represented with cinematic marketing, controlled exposure, and the discretion the calibre demands."
        image={brandImages.procterLakeHouse}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Listings", href: "/listings" },
          { label: "Luxury" },
        ]}
        meta={[
          { value: "$1M+", label: "Entry" },
          { value: "$2M – $4M", label: "Range" },
          { value: "Curated", label: "Selection" },
          { value: "Discreet", label: "Approach" },
        ]}
      />

      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[760px]">
            <Eyebrow>Active · Luxury Tier</Eyebrow>
            <SectionHeading className="mt-7">
              Currently represented.
            </SectionHeading>
            <SectionLede>
              Three properties launched with full editorial treatment — film, photography,
              and a dedicated property experience for the buyer profile each home is meant to attract.
            </SectionLede>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {luxuryEstates.map((e, i) => (
              <Reveal key={e.slug} delay={i * 80}>
                <ListingCard estate={e} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-12 max-w-[760px]">
            <Eyebrow>Concluded · Luxury</Eyebrow>
            <SectionHeading className="mt-7">
              Recent placements,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                $2M and above.
              </em>
            </SectionHeading>
          </Reveal>
          <Reveal as="ul" className="border-t border-[var(--color-line)]">
            {luxurySold.map((c, i) => (
              <li
                key={c.address}
                className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-[var(--color-line)] py-7 transition-colors hover:bg-[var(--color-surface)] sm:grid-cols-[60px_1.4fr_1fr_auto] sm:gap-8"
              >
                <span className="hidden font-serif text-[14px] italic tracking-[0.1em] text-[var(--color-bronze)] sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="font-serif text-[20px] font-normal leading-tight tracking-[-0.005em] sm:text-[22px]">
                    {c.address}
                  </div>
                  <div className="mt-1 text-[12px] text-[var(--color-text-dim)] sm:hidden">
                    {c.area} · {c.type}
                  </div>
                </div>
                <span className="hidden text-[14px] text-[var(--color-text-muted)] sm:block">
                  {c.area} · {c.type}
                </span>
                <span className="text-right font-serif text-[18px] italic text-[var(--color-bronze-light)] sm:text-[20px]">
                  {c.offered}
                </span>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Private Access"
        title="The best homes"
        emphasis="don't list."
        body="A private inventory of unlisted estates — represented for owners who require complete discretion. Access is granted on an introductory basis, by request."
      />
    </PageLayout>
  );
}
