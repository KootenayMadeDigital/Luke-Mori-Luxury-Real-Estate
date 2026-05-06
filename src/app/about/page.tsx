import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { PressStrip } from "@/components/sections/PressStrip";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteImages, headerImages, lukeBio, brandImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Nelson BC Realtor and Local Real Estate Guide",
  description:
    "Meet Luke Mori, a Nelson BC realtor born and raised in the Kootenays, helping buyers and sellers make clear real estate decisions.",
  path: "/about",
  image: "/og/about.png",
});

export default function AboutPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="About Luke"
        title="I grew up here"
        emphasis="and I still care how this feels."
        lede={lukeBio.short}
        image={headerImages.lukeLeaningPortrait}
        imageClassName="scale-[1.08] translate-y-10 object-[72%_50%] md:translate-y-14"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Luke" }]}
        meta={[
          { value: "150+", label: "Lifetime Clients" },
          { value: "$169M+", label: "Career Volume" },
          { value: "2021/24", label: "Best Luxury Broker" },
          { value: "100%", label: "Local Knowledge" },
        ]}
      />

      <SeoAnswerBlock
        eyebrow="Nelson Realtor"
        question="How do I work with clients?"
        answer="I am a Nelson BC realtor, born and raised here, and I work with people making careful decisions around Kootenay Lake homes, waterfront property, relocation, second homes, acreage, and selling in a thoughtful way. I have helped clients buy and sell millions of dollars in real estate, and Luxury Lifestyle Awards named my brokerage Best Luxury Real Estate Broker in British Columbia in 2021 and 2024."
        terms={["nelson bc realtor", "nelson bc real estate agent", "best realtor in nelson bc"]}
        tone="ivory"
      />

      <CredentialsStrip firstPerson />

      {/* Portrait + bio */}
      <section className="tone-lake tonal-section py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <Reveal>
              <div className="tone-dark relative aspect-[4/5] overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)]">
                <Image
                  src={siteImages.lukePortrait}
                  alt="Luke Mori"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,11,13,0.85)] via-[rgba(10,11,13,0.1)] to-transparent" />
                <div className="pointer-events-none absolute inset-3 border border-[rgba(212,184,150,0.2)]" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--color-bronze-light)] drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)]">
                    Realtor
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
                <Eyebrow>My Approach</Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <SectionHeading className="mt-7">
                  Local knowledge,
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    handled personally.
                  </em>
                </SectionHeading>
              </Reveal>
              <Reveal delay={240}>
                <p className="m-0 mb-8 font-serif text-[22px] font-medium italic leading-[1.55] text-[var(--color-text)]">
                  &ldquo;{lukeBio.approach}&rdquo;
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mb-12 max-w-[650px] space-y-5 text-[17px] font-medium leading-[1.75] text-[var(--color-text-muted)]">
                  <p className="m-0">
                    I am proud to be from Nelson. I know the neighbourhoods, roads, lake access, views, seasons, and small local details that do not always show up in a listing description, but often shape whether a property is the right fit.
                  </p>
                  <p className="m-0">
                    Over the years, I have helped clients buy and sell millions of dollars in real estate across the Kootenays and built my work around local knowledge, strong marketing, and steady representation. I have also been recognized by Luxury Lifestyle Awards as Best Luxury Real Estate Broker in British Columbia in 2021 and 2024. I am grateful for that recognition, but the real work is still one client, one property, and one decision at a time.
                  </p>
                  <p className="m-0">
                    I use modern marketing, property film, strong photography, and useful technology because they help people understand a home faster. I never want that to replace the personal side of the work. Trust still matters most.
                  </p>
                </div>
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

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
            <Reveal>
              <div>
                <Eyebrow>Behind The Work</Eyebrow>
                <SectionHeading className="mt-7">
                  The details I care about
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    before the sign goes up.
                  </em>
                </SectionHeading>
                <div className="mt-7 max-w-[590px] space-y-5 text-[16px] leading-[1.75] text-[var(--color-text-muted)]">
                  <p className="m-0">
                    A strong result usually starts before anyone sees the listing. I care about how the home is prepared, how it is photographed, what the story should be, and which buyers are most likely to understand it.
                  </p>
                  <p className="m-0">
                    Recognition and media help build trust, but they are not the point. The point is doing the work carefully enough that a buyer can feel the value and a seller can feel represented.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[700px]">
                <div className="absolute left-0 top-0 w-[64%] rounded-[2rem] border border-[var(--color-line)] bg-[rgba(244,239,230,0.42)] p-1.5 shadow-[0_34px_90px_-62px_rgba(0,0,0,0.34)] sm:w-[68%]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.375rem)]">
                    <Image
                      src={siteImages.lukeFrame}
                      alt="Luke Mori preparing a home presentation detail"
                      fill
                      sizes="(min-width: 1024px) 34vw, 68vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute right-0 top-[18%] w-[62%] rounded-[1.65rem] border border-[rgba(212,184,150,0.36)] bg-[rgba(9,10,11,0.86)] p-1.5 shadow-[0_36px_110px_-54px_rgba(0,0,0,0.72)] sm:top-[20%] lg:top-[22%]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1.65rem-0.375rem)]">
                    <Image
                      src={siteImages.lukeAward}
                      alt="Luxury Lifestyle Awards certificate for Luke Mori"
                      fill
                      sizes="(min-width: 1024px) 30vw, 62vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-[10%] w-[58%] rounded-[1.8rem] border border-[rgba(245,239,229,0.22)] bg-[rgba(10,11,13,0.9)] p-1.5 shadow-[0_30px_100px_-58px_rgba(0,0,0,0.82)] sm:left-[8%]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(1.8rem-0.375rem)]">
                    <Image
                      src={headerImages.lukeContact}
                      alt="Luke Mori speaking with a client"
                      fill
                      sizes="(min-width: 1024px) 28vw, 58vw"
                      className="object-cover object-[50%_44%]"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <PressStrip />

      <InquiryCTA
        eyebrow="Contact Me"
        title="Tell me what you are weighing."
        emphasis="I will help you sort the next step."
        body="Share the property, the move, the timeline, or the question that has been sitting in the back of your mind. I will help you understand what matters, what to check, and what to do next."
      />
    </PageLayout>
  );
}
