import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ListingCard } from "@/components/layout/ListingCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { featuredEstates, brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Active Listings",
  description:
    "Active luxury real estate listings in Nelson and the Kootenays — represented by Luke Mori with cinematic film, editorial photography, and a dedicated property experience.",
};

const filters = [
  { label: "All", href: "/listings", active: true },
  { label: "Luxury", href: "/listings/luxury" },
  { label: "Waterfront", href: "/listings/waterfront" },
  { label: "Recently Sold", href: "/listings/sold" },
];

export default function ListingsPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Active Listings"
        title="The current market,"
        emphasis="curated."
        lede="Three properties currently represented in the Nelson and Kootenay Lake region. Each is launched, not uploaded — full film, editorial copy, and a dedicated experience. Live MLS feed integration is available; this concept showcases the brand standard."
        image={brandImages.procterLakeHouse}
        crumbs={[{ label: "Home", href: "/" }, { label: "Listings" }]}
        meta={[
          { value: "3", label: "Active" },
          { value: "$1M – $4M+", label: "Range" },
          { value: "Nelson + Kootenay", label: "Coverage" },
          { value: "Curated", label: "Selection" },
        ]}
      />

      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] py-8">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <span className="mr-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-bronze)]">
              Filter
            </span>
            {filters.map((f) => (
              <a
                key={f.href}
                href={f.href}
                className={`inline-block rounded-[1px] border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
                  f.active
                    ? "border-[var(--color-bronze)] bg-[var(--color-bronze)] text-[var(--color-bg)]"
                    : "border-[var(--color-line-strong)] text-[var(--color-text-muted)] hover:border-[var(--color-bronze)] hover:text-[var(--color-text)]"
                }`}
              >
                {f.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {featuredEstates.map((e, i) => (
              <Reveal key={e.slug} delay={i * 80}>
                <ListingCard estate={e} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 border-t border-[var(--color-line)] pt-12 text-center">
            <div className="mx-auto max-w-[600px]">
              <span className="mb-4 inline-block font-serif text-[14px] italic text-[var(--color-bronze)]">
                Live MLS Integration
              </span>
              <p className="m-0 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                A full MLS / IDX / Repliers feed integration sits behind this experience —
                the same brand standard, applied to every active listing in the Kootenay
                region. Available on the production build.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Off-Market"
        title="Some properties never list."
        emphasis="Ask anyway."
        body="Our private inventory of unlisted estates is held for owners who require complete discretion. Access is granted on an introductory basis, by request."
      />
    </PageLayout>
  );
}
