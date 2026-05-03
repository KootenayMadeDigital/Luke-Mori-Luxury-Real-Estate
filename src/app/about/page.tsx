import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { PressStrip } from "@/components/sections/PressStrip";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { lukeBio, brandImages, contact, trustProofs } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "About Luke Mori · Nelson Real Estate",
  description:
    "Born and raised in Nelson, B.C. Founder of the Luke Mori division at Fair Realty. Voted Best Luxury Real Estate Broker in British Columbia by the Luxury Lifestyle Awards (2021 and 2024).",
  path: "/about",
  image: brandImages.lukePortrait,
});

export default function AboutPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="About Luke"
        title="A local"
        emphasis="who's on your side."
        lede={lukeBio.short}
        image={brandImages.lukeLeaningPortrait}
        crumbs={[{ label: "Home", href: "/" }, { label: "About Luke" }]}
        meta={[
          { value: "150+", label: "Lifetime Clients" },
          { value: "$169M+", label: "Career Volume" },
          { value: "2021/24", label: "Best Luxury Broker" },
          { value: "100%", label: "Local Knowledge" },
        ]}
      />

      <CredentialsStrip />

      <section className="tone-ivory tonal-section border-b border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <Eyebrow>Proof, Properly Handled</Eyebrow>
              <SectionHeading className="mt-7">
                Experience without
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  empty bragging.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Pricing advice, local knowledge, privacy, marketing, and negotiation experience across real Nelson and Kootenay Lake transactions.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-4">
            {trustProofs.map((item, i) => (
              <Reveal key={item.eyebrow} delay={(i % 4) * 70} className="bg-[var(--color-bg)] p-8 sm:p-9">
                <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">
                  {item.eyebrow}
                </span>
                <h3 className="m-0 mb-4 font-serif text-[25px] font-light leading-[1.14] tracking-[-0.005em] text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="m-0 text-[13px] font-medium uppercase leading-[1.65] tracking-[0.16em] text-[var(--color-text-dim)]">
                  {item.proof}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Portrait + bio */}
      <section className="tone-lake tonal-section py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <Reveal>
              <div className="tone-dark relative aspect-[4/5] overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)]">
                <Image
                  src={brandImages.lukePortrait}
                  alt="Luke Mori, Principal"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,11,13,0.85)] via-[rgba(10,11,13,0.1)] to-transparent" />
                <div className="pointer-events-none absolute inset-3 border border-[rgba(212,184,150,0.2)]" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--color-bronze-light)] drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)]">
                    Principal
                  </div>
                  <div className="mt-2 font-serif text-[26px] font-light text-[var(--color-text)]">
                    Luke Mori
                  </div>
                  <div className="mt-1.5 font-serif text-[15px] font-medium italic text-[rgba(239,234,226,0.84)] drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
                    {lukeBio.bornAndRaised}
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Eyebrow>Philosophy</Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <SectionHeading className="mt-7">
                  Local intelligence,
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    leveraged by technology.
                  </em>
                </SectionHeading>
              </Reveal>
              <Reveal delay={240}>
                <p className="m-0 mb-8 font-serif text-[22px] font-medium italic leading-[1.55] text-[var(--color-text)]">
                  &ldquo;{lukeBio.approach}&rdquo;
                </p>
              </Reveal>
              <Reveal delay={360}>
                <p className="m-0 mb-12 max-w-[600px] text-[17px] font-medium leading-[1.75] text-[var(--color-text-muted)]">
                  {lukeBio.philosophy}
                </p>
              </Reveal>

              <ul className="space-y-7">
                {lukeBio.pillars.map((p, i) => (
                  <Reveal
                    key={p.k}
                    delay={460 + i * 100}
                    as="li"
                    className="grid grid-cols-[40px_1fr] gap-6 border-t border-[var(--color-line)] pt-7"
                  >
                    <span className="font-serif text-[18px] italic text-[var(--color-bronze)]">
                      {p.k}
                    </span>
                    <div>
                      <h4 className="m-0 mb-2 font-serif text-[22px] font-normal leading-[1.25] tracking-[-0.005em] text-[var(--color-text)]">
                        {p.title}
                      </h4>
                      <p className="m-0 max-w-[540px] text-[16px] font-medium leading-[1.7] text-[var(--color-text-muted)]">
                        {p.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={780} className="mt-12 border-t border-[var(--color-line)] pt-8">
                <div className="flex flex-col gap-5 rounded-2xl border border-[var(--color-line)] bg-[rgba(244,239,230,0.58)] p-5 shadow-[0_18px_50px_rgba(35,55,50,0.08)] sm:flex-row sm:items-center sm:gap-6">
                  <div className="relative h-14 w-52 shrink-0">
                    <Image
                      src={brandImages.signature}
                      alt="Luke Mori signature"
                      fill
                      sizes="210px"
                      className="object-contain object-left"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(12%) sepia(15%) saturate(914%) hue-rotate(120deg) brightness(92%) contrast(96%)",
                      }}
                    />
                  </div>
                  <span className="text-microcopy font-sans uppercase text-[var(--color-text-muted)]">
                    {lukeBio.brokerage}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <PressStrip />

      {/* Contact panel */}
      <section className="tone-office tonal-section border-t border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                Office
              </span>
              <p className="mt-3 font-serif text-[20px] font-light leading-[1.4] text-[var(--color-text)]">
                {contact.office}
              </p>
              <p className="mt-1.5 text-[12px] uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                {contact.brokerage}
              </p>
            </div>
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                Direct
              </span>
              <p className="mt-3 space-y-1.5 text-[15px]">
                <a href={contact.phoneHref} className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]">
                  {contact.phone}
                </a>
                <a href={contact.emailHref} className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]">
                  {contact.email}
                </a>
              </p>
            </div>
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                Social
              </span>
              <p className="mt-3 space-y-1.5 text-[15px]">
                <a href={contact.social.youtube} target="_blank" rel="noreferrer" className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]">
                  YouTube · 100+ property films
                </a>
                <a href={contact.social.instagram} target="_blank" rel="noreferrer" className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]">
                  Instagram · @lukemorirealestate
                </a>
                <a href={contact.social.facebook} target="_blank" rel="noreferrer" className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]">
                  Facebook
                </a>
                <a href={contact.social.twitter} target="_blank" rel="noreferrer" className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]">
                  X · @LukeMoriRealty
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <InquiryCTA />
    </PageLayout>
  );
}
