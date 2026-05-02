import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { testimonials, brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Awards & Testimonials · Luke Mori",
  description:
    "Voted Best Luxury Real Estate Broker in British Columbia by the Luxury Lifestyle Awards (2021 & 2024). Verbatim client testimonials from buyers and sellers across Nelson and the Kootenay region.",
};

export default function TestimonialsPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Awards & Testimonials"
        title="On the record."
        emphasis="On their words."
        lede="Recognition from the industry, and the words of buyers and sellers we&apos;ve had the privilege of representing across Nelson and the Kootenay region."
        image={brandImages.bakerStreet}
        crumbs={[{ label: "Home", href: "/" }, { label: "Awards & Testimonials" }]}
        meta={[
          { value: "2021 / 2024", label: "Best Luxury Broker BC" },
          { value: "150+", label: "Lifetime Clients" },
          { value: "9+", label: "Press Features" },
          { value: "$169M+", label: "Career Volume" },
        ]}
      />

      {/* Award block */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-24 md:py-28">
        <Container>
          <Reveal className="mx-auto max-w-[800px] text-center">
            <Eyebrow centered>Industry Recognition</Eyebrow>
            <SectionHeading centered className="mt-7">
              Best Luxury Real Estate Broker
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                in British Columbia.
              </em>
            </SectionHeading>
            <SectionLede align="center" className="mb-10">
              Awarded by the Luxury Lifestyle Awards in both 2021 and again in 2024, the only
              two-time recipient in the Nelson and Kootenay region.
            </SectionLede>
            <div className="relative mx-auto h-20 w-72 opacity-90">
              <Image
                src={brandImages.awardBadge}
                alt="Best Luxury Real Estate Broker, Luxury Lifestyle Awards"
                fill
                sizes="288px"
                className="object-contain"
                style={{ filter: "invert(1) brightness(0.95)" }}
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Testimonials grid */}
      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[760px]">
            <Eyebrow>Client Voice</Eyebrow>
            <SectionHeading className="mt-7">
              Sellers and buyers
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                in their own words.
              </em>
            </SectionHeading>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.attribution}
                as="article"
                delay={(i % 2) * 100}
                className="relative flex flex-col border border-[var(--color-line)] bg-[var(--color-surface)] p-9 transition-colors duration-500 hover:border-[var(--color-line-strong)] sm:p-10"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 32 24"
                  className="mb-6 h-7 w-9 text-[var(--color-bronze)] opacity-70"
                >
                  <path
                    d="M0 24 L0 14 Q0 4 10 0 L12 4 Q6 6 5 12 L12 12 L12 24 Z M16 24 L16 14 Q16 4 26 0 L28 4 Q22 6 21 12 L28 12 L28 24 Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="m-0 mb-8 font-serif text-[20px] font-light leading-[1.5] tracking-[-0.005em] text-[var(--color-text)] sm:text-[22px]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-auto border-t border-[var(--color-line)] pt-6">
                  <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                    {t.attribution}
                  </div>
                  <div className="mt-1.5 text-[12px] text-[var(--color-text-dim)]">
                    {t.context}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Add Your Voice"
        title="When the work is done well,"
        emphasis="people remember."
        body="If you've worked with us and would like to add your voice, get in touch. Otherwise, start with a private consultation."
      />
    </PageLayout>
  );
}
