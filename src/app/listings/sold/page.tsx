import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { recentlyConcluded, brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Recently Sold · Nelson Real Estate",
  description:
    "Recently sold luxury real estate in Nelson and the Kootenays, a discreet ledger of placements. Lakefront estates, view homes, walk-to-water residences, and architectural acreage.",
};

export default function SoldPage() {
  const total = recentlyConcluded.reduce((acc, c) => {
    const num = parseInt(c.offered.replace(/[^0-9]/g, ""), 10);
    return acc + (Number.isFinite(num) ? num : 0);
  }, 0);
  const totalFmt = `$${(total / 1_000_000).toFixed(1)}M+`;

  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Recently Placed"
        title="Quietly placed,"
        emphasis="privately concluded."
        lede="A discreet selection of recent placements. Specifics are public; everything else withheld in the interest of every party who trusted us with them."
        image={brandImages.orangeBridge}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Listings", href: "/listings" },
          { label: "Recently Sold" },
        ]}
        meta={[
          { value: `${recentlyConcluded.length}`, label: "Recent Placements" },
          { value: totalFmt, label: "Combined Volume" },
          { value: "Sold", label: "Status" },
          { value: "Private", label: "Discretion" },
        ]}
      />

      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <Reveal as="ul" className="border-t border-[var(--color-line)]">
            {recentlyConcluded.map((c, i) => (
              <li
                key={c.address}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-[var(--color-line)] py-8 transition-colors duration-300 hover:bg-[var(--color-surface)] sm:grid-cols-[60px_1.5fr_1fr_1.2fr_auto] sm:gap-8 sm:py-9"
              >
                <span className="hidden font-serif text-[14px] italic tracking-[0.1em] text-[var(--color-bronze)] sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="font-serif font-normal leading-tight tracking-[-0.005em] text-[var(--color-text)] [font-size:clamp(20px,2vw,26px)]">
                    {c.address}
                  </div>
                  <div className="mt-1.5 text-[12px] text-[var(--color-text-dim)] sm:hidden">
                    {c.area} · {c.type} · {c.offered}
                  </div>
                </div>
                <span className="hidden text-[14px] text-[var(--color-text-muted)] sm:block">
                  {c.area}
                </span>
                <span className="hidden text-[13px] text-[var(--color-text-dim)] md:block">
                  {c.type}
                </span>
                <span className="text-right font-serif italic text-[var(--color-bronze-light)] [font-size:clamp(18px,1.8vw,22px)]">
                  {c.offered}
                </span>
              </li>
            ))}
          </Reveal>

          <p className="mt-12 text-[12px] italic text-[var(--color-text-dim)]">
            Offered prices reflect public list pricing at the time of representation.
            Final transaction prices and terms are held in confidence.
          </p>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Considering Selling"
        title="Your property deserves"
        emphasis="this calibre of representation."
        body="Cinematic film, editorial photography, a controlled launch, and a real buyer network. Every property gets the same standard, regardless of price point."
      />
    </PageLayout>
  );
}
