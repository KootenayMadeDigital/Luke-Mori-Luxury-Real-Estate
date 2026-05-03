import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { testimonials, brandImages, trustPrinciples, pressLogos } from "@/lib/data";


const mediaLogoScale: Record<string, string> = {
  "Ryan Serhant": "scale-[0.98] lg:scale-[1.04]",
  "BC Luxury Homes": "scale-[1.12] lg:scale-[1.12]",
  "NYC Journal": "scale-[1.16] lg:scale-[1.1]",
  "Truly Classy Luxury": "scale-[1.38] lg:scale-[1.16]",
  "Metropolitan Design": "scale-[1.62] lg:scale-[1.24]",
  "Lifestyle News": "scale-[1.08] lg:scale-[1.06]",
  Deluxshionist: "scale-[1.26] lg:scale-[1.12]",
  "Design Tellers": "scale-[1.18] lg:scale-[1.08]",
  Narcity: "scale-[1.1] lg:scale-[1.06]",
};

export const metadata = buildPageMetadata({
  title: "Awards & Testimonials · Luke Mori",
  description:
    "Voted Best Luxury Real Estate Broker in British Columbia by the Luxury Lifestyle Awards (2021 & 2024). Verbatim client testimonials from buyers and sellers across Nelson and the Kootenay region.",
  path: "/testimonials",
  image: brandImages.awardBadge,
});

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
      <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-24 md:py-32">
        <Container>
          <Reveal className="mx-auto max-w-[1040px] text-center">
            <Eyebrow centered>Industry Recognition</Eyebrow>
            <SectionHeading centered className="mt-7">
              Best Luxury Real Estate Broker
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                in British Columbia.
              </em>
            </SectionHeading>
            <SectionLede align="center" className="mx-auto mb-12 max-w-[820px] text-[20px] md:text-[22px]">
              Awarded by the Luxury Lifestyle Awards in both 2021 and again in 2024, the only
              two-time recipient in the Nelson and Kootenay region.
            </SectionLede>

            <div className="mx-auto max-w-[900px] rounded-[2rem] border border-[var(--color-line-strong)] bg-[linear-gradient(135deg,rgba(255,248,237,0.72),rgba(212,184,150,0.2))] p-4 shadow-[0_34px_110px_-70px_rgba(63,46,31,0.42)] sm:p-6 md:p-8">
              <div className="grid grid-cols-1 items-center gap-8 rounded-[calc(2rem-0.75rem)] border border-[rgba(83,59,36,0.12)] bg-[rgba(255,252,246,0.74)] p-6 sm:p-8 md:grid-cols-[1.15fr_0.85fr] md:text-left">
                <div>
                  <p className="m-0 text-[11px] font-bold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                    Luxury Lifestyle Awards
                  </p>
                  <h2 className="m-0 mt-4 font-serif text-[42px] font-light leading-[0.98] tracking-[-0.02em] text-[var(--color-text)] sm:text-[56px] md:text-[68px]">
                    2021 & 2024
                  </h2>
                  <p className="m-0 mt-5 max-w-[520px] text-[15px] font-medium leading-[1.7] text-[var(--color-text-muted)]">
                    Recognized twice at the provincial level for luxury real estate representation, with local fluency anchored in Nelson and the Kootenays.
                  </p>
                </div>

                <div className="relative mx-auto h-40 w-full max-w-[520px] sm:h-48 md:h-56">
                  <Image
                    src={brandImages.awardBadge}
                    alt="Best Luxury Real Estate Broker, Luxury Lifestyle Awards"
                    fill
                    sizes="(min-width: 768px) 420px, 88vw"
                    className="object-contain drop-shadow-[0_18px_34px_rgba(63,46,31,0.28)]"
                    style={{ filter: "invert(1) brightness(0.95)" }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="tone-walnut tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.84fr_1fr] md:items-end">
            <div>
              <Eyebrow>Media Mentions</Eyebrow>
              <SectionHeading className="mt-7">
                The press layer,
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  archived quietly.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Recognized across luxury, design, lifestyle, and regional publications, with proof gathered here for buyers and sellers who value a visible track record.
            </SectionLede>
          </Reveal>

          <Reveal>
            <div className="rounded-[2.5rem] border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.035)] p-2 shadow-[0_34px_110px_-70px_rgba(0,0,0,0.95)]">
              <div className="rounded-[calc(2.5rem-0.5rem)] bg-[linear-gradient(135deg,rgba(10,11,13,0.94),rgba(24,24,22,0.84))] px-4 py-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.065)] sm:px-7 md:px-10 md:py-12">
                <div className="mb-8 border-b border-[rgba(245,239,229,0.1)] pb-8">
                  <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--color-bronze)]">
                    Published Proof
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
                  {pressLogos.map((logo, i) => (
                    <Reveal
                      key={logo.name}
                      delay={i * 45}
                      className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
                    >
                      <div className="group flex h-36 items-center justify-center overflow-hidden rounded-[1.55rem] border border-[rgba(245,239,229,0.13)] bg-[rgba(255,255,255,0.04)] px-8 transition-[transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[rgba(212,184,150,0.38)] hover:bg-[rgba(212,184,150,0.075)] sm:h-40 md:h-44" title={logo.name}>
                        <div className={`relative h-24 w-full opacity-100 transition-[filter,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [filter:brightness(0)_invert(1)] group-hover:scale-[1.035] group-hover:[filter:none] sm:h-28 md:h-32 ${mediaLogoScale[logo.name] ?? "scale-[1.22] lg:scale-[1.08]"}`}>
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 86vw"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="tone-lake tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <Eyebrow>How to Read the Record</Eyebrow>
              <SectionHeading className="mt-7">
                Proof is not decoration.
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  It is risk control.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Awards, press, and client voice only matter when they explain how a transaction is handled. The point is a calmer decision, a cleaner process, and a result the client can trust.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-3">
            {trustPrinciples.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 80} className="bg-[var(--color-bg-2)] p-8 sm:p-9">
                <span className="mb-5 block font-serif text-[20px] italic text-[var(--color-bronze)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 mb-4 font-serif text-[26px] font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                  {principle.title}
                </h3>
                <p className="m-0 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                  {principle.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials grid */}
      <section className="tone-office tonal-section border-t border-[var(--color-line)] py-24 md:py-28">
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
