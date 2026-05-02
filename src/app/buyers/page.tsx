import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ProcessSteps } from "@/components/layout/ProcessSteps";
import { LifestyleSection } from "@/components/sections/LifestyleSection";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { buyerSteps, brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Buying with Luke · Buyer Representation",
  description:
    "Buyer representation in Nelson and Kootenay Lake luxury real estate — local intelligence, off-market access, and a five-step process built for relocating, second-home, and discerning regional buyers.",
};

export default function BuyersPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="For Buyers"
        title="Buying a home,"
        emphasis="quietly and well."
        lede="In-depth local market intelligence, cutting-edge marketing technology, and unparalleled service for the Nelson and Kootenay Lake region. Whether you're relocating, buying a second home, or trading up locally — the work is the same: representation that respects your time and your discretion."
        image={brandImages.procterLivingRoom}
        crumbs={[{ label: "Home", href: "/" }, { label: "Buyers" }]}
        meta={[
          { value: "5-Step", label: "Process" },
          { value: "Off-Market", label: "Network Access" },
          { value: "Vetted", label: "Lender Network" },
          { value: "1 Day", label: "Reply Standard" },
        ]}
      />

      <ProcessSteps
        eyebrow="The Buyer Process"
        title="A clear five-step path,"
        emphasis="end to end."
        lede="From the first conversation to keys in hand. Every step explained, every decision considered."
        steps={buyerSteps}
      />

      {/* Buyer-type sub-routes */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 max-w-[760px]">
            <Eyebrow>Buyer Resources</Eyebrow>
            <SectionHeading className="mt-7">
              Resources for the
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                buyer you actually are.
              </em>
            </SectionHeading>
            <SectionLede>
              Different buyers need different things. Each path below leads to a focused playbook
              built around the realities of that particular journey.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                href: "/buyers/international",
                eyebrow: "International",
                title: "Non-Canadian Principals",
                body: "U.S., U.K., Australian, and Hong Kong buyers — regulatory landscape, foreign-buyer considerations, currency strategy, and local advisor introductions.",
              },
              {
                href: "/buyers/relocation",
                eyebrow: "Relocation",
                title: "Vancouver, Calgary, & Beyond",
                body: "Landing soft. Schools, neighbourhoods, climate rhythms, healthcare access, and the local context that makes the move actually work.",
              },
            ].map((card) => (
              <Reveal key={card.href}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col border border-[var(--color-line)] bg-[var(--color-bg)] p-10 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[var(--color-bronze)]"
                >
                  <span className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                    {card.eyebrow}
                  </span>
                  <h3 className="m-0 mb-4 font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                    {card.title}
                  </h3>
                  <p className="m-0 mb-7 flex-1 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                    {card.body}
                  </p>
                  <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                    Read the playbook
                    <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <LifestyleSection />

      <InquiryCTA
        eyebrow="Buyer Inquiry"
        title="Tell us what you want."
        emphasis="We'll show you what's there."
        body="The first conversation is always the most important one. Whether you're three years out or three weeks — start by telling us what kind of life you want here."
      />
    </PageLayout>
  );
}
