import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { buyerGuides, getGuideBySlug } from "@/lib/guides";

export function generateStaticParams() {
  return buyerGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide Not Found" };
  return buildPageMetadata({ title: `${guide.title} · Luke Mori Guide`, description: guide.dek, path: `/guides/${guide.slug}`, image: guide.image });
}

export default async function BuyerGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return notFound();
  const related = buyerGuides.filter((item) => item.slug !== guide.slug && item.category === guide.category).slice(0, 3);

  return (
    <PageLayout>
      <SubpageHero eyebrow={guide.category} title={guide.title} lede={guide.dek} image={guide.image} crumbs={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.title }]} meta={[{ value: guide.readTime.replace(" read", ""), label: "Read Time" }, { value: "BC", label: "Context" }, { value: "Sources", label: "Links" }, { value: "Local", label: "Next Step" }]} />

      <section className="tone-ivory tonal-section py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <Reveal>
              <aside className="sticky top-32 border border-[var(--color-line)] bg-[var(--color-surface)] p-7 sm:p-8">
                <Eyebrow>Who this helps</Eyebrow>
                <p className="m-0 mt-6 font-serif text-[28px] font-light leading-[1.18] text-[var(--color-text)]">{guide.intent}</p>
                <div className="mt-8 border-t border-[var(--color-line)] pt-6">
                  <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">Confirm locally</p>
                  <p className="m-0 mt-3 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">This is general information. Property facts, taxes, approvals, insurance, title, zoning, and legal rights should be confirmed with the right professional or authority.</p>
                </div>
              </aside>
            </Reveal>
            <div>
              {guide.sections.map((section, index) => (
                <Reveal key={section.title} delay={index * 70} className="border-b border-[var(--color-line)] py-10 first:pt-0 last:border-b-0">
                  <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">{String(index + 1).padStart(2, "0")}</span>
                  <h2 className="m-0 font-serif text-[36px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)] md:text-[48px]">{section.title}</h2>
                  <div className="mt-7 space-y-5 text-[16px] leading-[1.82] text-[var(--color-text-muted)]">
                    {section.body.map((paragraph) => <p key={paragraph} className="m-0">{paragraph}</p>)}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <Eyebrow>Checklist</Eyebrow>
              <SectionHeading className="mt-7">What to confirm<br /><em className="font-light not-italic italic text-[var(--color-bronze-light)]">before moving forward.</em></SectionHeading>
              <ul className="mt-9 space-y-4">
                {guide.checklist.map((item) => <li key={item} className="flex gap-4 border border-[var(--color-line)] bg-[var(--color-surface)] p-5 text-[15px] leading-[1.7] text-[var(--color-text-muted)]"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-bronze)]" />{item}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>Ask Luke</Eyebrow>
              <SectionHeading className="mt-7">Better questions,<br /><em className="font-light not-italic italic text-[var(--color-bronze-light)]">cleaner decisions.</em></SectionHeading>
              <div className="mt-9 grid grid-cols-1 gap-px bg-[var(--color-line)]">
                {guide.questions.map((question, index) => <div key={question} className="grid grid-cols-[44px_1fr] gap-4 bg-[var(--color-bg)] p-6"><span className="font-serif text-[22px] italic text-[var(--color-bronze-light)]">{String(index + 1).padStart(2, "0")}</span><p className="m-0 text-[15px] leading-[1.75] text-[var(--color-text)]">{question}</p></div>)}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="tone-lake tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-10 max-w-[760px]">
            <Eyebrow>Sources</Eyebrow>
            <SectionHeading className="mt-7">Start here,<br /><em className="font-light not-italic italic text-[var(--color-bronze-light)]">then verify locally.</em></SectionHeading>
            <SectionLede>Source links help you check the policy and agency context behind the guide. Always confirm the current rule and how it applies to the specific property.</SectionLede>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guide.sources.map((source) => <Reveal key={source.href}><a href={source.href} target={source.href.startsWith("http") ? "_blank" : undefined} rel={source.href.startsWith("http") ? "noreferrer" : undefined} className="block border border-[var(--color-line)] bg-[var(--color-surface)] p-6 text-[14px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">{source.label}</a></Reveal>)}
          </div>
        </Container>
      </section>

      {related.length > 0 && <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-24 md:py-28"><Container><Reveal className="mb-12"><Eyebrow>Related Guides</Eyebrow><SectionHeading className="mt-7">Keep going<br /><em className="font-light not-italic italic text-[var(--color-bronze-light)]">with the next useful question.</em></SectionHeading></Reveal><div className="grid grid-cols-1 gap-6 md:grid-cols-3">{related.map((item) => <Reveal key={item.slug}><Link href={`/guides/${item.slug}`} className="luxury-card block h-full border border-[var(--color-line)] bg-[var(--color-bg)] p-7 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[var(--color-bronze)]"><span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">{item.category}</span><h3 className="m-0 mt-5 font-serif text-[28px] font-light leading-[1.12] text-[var(--color-text)]">{item.title}</h3><p className="m-0 mt-4 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">{item.dek}</p></Link></Reveal>)}</div></Container></section>}

      <InquiryCTA eyebrow="Ask Luke" title="Have a property or sale in mind?" emphasis="Bring the questions early." body="Send Luke the property, area, or selling situation you are considering. A few clear questions before a showing, offer, or sale plan can save time and prevent expensive surprises." />
    </PageLayout>
  );
}
