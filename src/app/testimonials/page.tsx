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
      <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
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
              Media proof belongs on this page because visitors here are already evaluating trust. The homepage gives the fast hit; this page keeps the receipts in one place.
            </SectionLede>
          </Reveal>

          <Reveal>
            <div className="rounded-[2rem] border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.035)] p-2 shadow-[0_30px_100px_-70px_rgba(0,0,0,0.95)]">
              <div className="grid grid-cols-2 items-center gap-4 rounded-[calc(2rem-0.5rem)] bg-[rgba(10,11,13,0.52)] p-5 sm:grid-cols-3 md:p-7 lg:grid-cols-5">
                {pressLogos.map((logo, i) => (
                  <Reveal key={logo.name} delay={i * 40}>
                    <div className="group flex h-24 items-center justify-center rounded-[1.25rem] border border-[rgba(245,239,229,0.08)] bg-[rgba(255,255,255,0.025)] px-5 transition-[transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[rgba(212,184,150,0.32)] hover:bg-[rgba(212,184,150,0.055)]" title={logo.name}>
                      <div className="relative h-12 w-full opacity-[0.9] grayscale transition-[opacity,filter,transform] duration-700 group-hover:scale-[1.035] group-hover:opacity-100 group-hover:grayscale-0">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 50vw"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </Reveal>
                ))}
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
