import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { AreaIntelligence } from "@/components/sections/AreaIntelligence";
import { nelsonAreas } from "@/lib/data";
import { areaIntelligence } from "@/lib/area-intelligence";

type Params = { slug: string };

export function generateStaticParams() {
  return nelsonAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = nelsonAreas.find((x) => x.slug === slug);
  if (!a) return { title: "Area Not Found" };
  const intelligence = areaIntelligence[a.slug];
  return buildPageMetadata({
    title: `${a.name} BC Luxury Real Estate & Relocation Guide`,
    description: intelligence
      ? `${a.name} BC luxury real estate guide for high-value buyers: ${intelligence.thesis}`
      : a.intro,
    path: `/nelson/${a.slug}`,
    image: a.hero,
  });
}

export default async function NelsonAreaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = nelsonAreas.find((a) => a.slug === slug);
  if (!area) return notFound();

  const others = nelsonAreas.filter((a) => a.slug !== slug);
  const intelligence = areaIntelligence[area.slug];

  return (
    <PageLayout>
      <SubpageHero
        eyebrow={area.name}
        title={area.name}
        emphasis={area.tagline.replace(/[.]$/, "")}
        lede={area.intro}
        image={area.hero}
        imageTreatment="showcase"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Nelson", href: "/nelson" },
          { label: area.name },
        ]}
        meta={[
          { value: area.population, label: "Population" },
          { value: area.avgPrice, label: "Average Sale" },
          { value: area.focus.split(" · ")[0], label: "Primary Focus" },
          { value: "Active", label: "Representation" },
        ]}
      />

      {/* Highlights */}
      <section className="tone-lake tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-12 max-w-[760px]">
            <Eyebrow>The Local Lay of the Land</Eyebrow>
            <SectionHeading className="mt-7">
              What makes {area.name}
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                {area.name === "Nelson" ? "the Queen City" : "this area"}.
              </em>
            </SectionHeading>
          </Reveal>

          <div className="mb-10 grid grid-cols-1 gap-4 md:mb-12 md:grid-cols-3">
            {area.scenes.map((scene, index) => (
              <Reveal key={scene.title} delay={index * 70}>
                <figure className="luxury-card group relative m-0 aspect-[16/10] overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)]">
                  <Image
                    src={scene.image}
                    alt={scene.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="luxury-media object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.08),rgba(10,11,13,0.72))]" aria-hidden />
                  <figcaption className="absolute bottom-4 left-4 right-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-text)]">
                    {scene.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] sm:grid-cols-3">
            {area.highlights.map((h) => (
              <Reveal key={h.title} className="bg-[var(--color-bg)] p-9 sm:p-10">
                <h3 className="m-0 mb-4 font-serif text-[24px] font-normal leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] sm:text-[26px]">
                  {h.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                  {h.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {intelligence && (
        <AreaIntelligence areaName={area.name} intelligence={intelligence} />
      )}

      {/* Neighbourhoods (only on Nelson page) */}
      {area.neighbourhoods && area.neighbourhoods.length > 0 && (
        <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
          <Container>
            <Reveal className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Eyebrow>Neighbourhoods</Eyebrow>
                <SectionHeading className="mt-7">
                  Within the city,
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    five distinct addresses.
                  </em>
                </SectionHeading>
              </div>
              <SectionLede align="right">
                The character changes street to street. These are the neighbourhoods that define
                where considered buyers actually want to be.
              </SectionLede>
            </Reveal>
            <ul className="border-t border-[var(--color-line)]">
              {area.neighbourhoods.map((n, i) => (
                <Reveal
                  key={n.name}
                  as="li"
                  delay={i * 60}
                  className="luxury-card grid grid-cols-1 gap-2 border-b border-[var(--color-line)] py-9 transition-[background,transform,box-shadow] duration-500 hover:-translate-y-1 hover:bg-[var(--color-surface)] sm:grid-cols-[60px_220px_1fr] sm:items-baseline sm:gap-10 md:py-10"
                >
                  <span className="hidden font-serif text-[14px] italic tracking-[0.1em] text-[var(--color-bronze)] sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 font-serif font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)] [font-size:clamp(24px,2.6vw,32px)]">
                    {n.name}
                  </h3>
                  <p className="m-0 max-w-[640px] text-[15px] leading-[1.7] text-[var(--color-text-muted)] sm:text-[16px]">
                    {n.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Other areas */}
      <section className="tone-lake tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>Also Worth Considering</Eyebrow>
            <SectionHeading className="mt-7">
              Other Kootenay
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                areas.
              </em>
            </SectionHeading>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Reveal key={o.slug}>
                <Link
                  href={`/nelson/${o.slug}`}
                  className="luxury-card group flex h-full flex-col border border-[var(--color-line)] bg-[var(--color-surface)] p-7 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[var(--color-bronze)]"
                >
                  <span className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                    {o.population} · Avg {o.avgPrice}
                  </span>
                  <h3 className="m-0 mb-2 font-serif text-[22px] font-normal leading-[1.15]">{o.name}</h3>
                  <p className="m-0 mb-5 flex-1 font-serif text-[14px] italic text-[var(--color-text-muted)]">
                    {o.tagline}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                    Explore
                    <svg viewBox="0 0 16 16" aria-hidden className="luxury-arrow size-[14px]">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <InquiryCTA
        eyebrow={`${area.name} Inquiry`}
        title={`Looking in ${area.name}?`}
        emphasis="Start here."
        body={`Tell Luke what you are looking for in ${area.name}, current listings, private introductions, or a direct conversation about whether this area fits the life you have in mind.`}
      />
    </PageLayout>
  );
}
