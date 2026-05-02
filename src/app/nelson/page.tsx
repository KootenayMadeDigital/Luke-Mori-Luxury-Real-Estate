import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { nelsonAreas, brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Nelson · The Kootenay Region",
  description:
    "About Nelson, B.C. and the Kootenay Lake region — neighbourhoods, lifestyle, and the local intelligence behind every property we represent.",
};

export default function NelsonHubPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="About Nelson"
        title="The Queen City"
        emphasis="and the Kootenays."
        lede="Five corridors of considered real estate — from heritage downtown Nelson to the deep-water privacy of Balfour. Each with its own character, its own price points, and its own kind of buyer."
        image={brandImages.nelsonLandscape}
        crumbs={[{ label: "Home", href: "/" }, { label: "About Nelson" }]}
        meta={[
          { value: "5", label: "Coverage Areas" },
          { value: "~20K", label: "Regional Population" },
          { value: "$800K", label: "Nelson Average" },
          { value: "$1.15M", label: "Balfour Average" },
        ]}
      />

      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[760px]">
            <Eyebrow>Coverage Areas</Eyebrow>
            <SectionHeading className="mt-7">
              Five corridors,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                each with its own logic.
              </em>
            </SectionHeading>
            <SectionLede>
              Pick a region — each page covers the local market dynamics, the lifestyle, and
              the kind of property worth looking for there.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {nelsonAreas.map((a, i) => (
              <Reveal key={a.slug} delay={i * 60}>
                <Link
                  href={`/nelson/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-[var(--color-line-strong)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={a.hero}
                      alt={a.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,11,13,0.7)]" />
                    <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                      <div>
                        <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                          {a.population}
                        </div>
                        <div className="mt-1 font-serif text-[14px] italic text-[var(--color-bronze-light)]">
                          Avg {a.avgPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="m-0 mb-2 font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                      {a.name}
                    </h3>
                    <p className="m-0 mb-6 font-serif text-[15px] italic text-[var(--color-text-muted)]">
                      {a.tagline}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                      Explore the area
                      <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Local Intelligence"
        title="Don't know which corridor"
        emphasis="suits you?"
        body="A 30-minute conversation usually narrows it to two. From there, we tour the third — to confirm what the first two told us. Local intelligence is the practice."
      />
    </PageLayout>
  );
}
