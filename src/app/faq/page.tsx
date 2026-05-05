import { PageLayout } from "@/components/layout/PageLayout";
import { buildFaqJsonLd, buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { headerImages, faqs } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Nelson BC Real Estate FAQ · Buyers, Sellers & Relocation",
  description:
    "Answers to Nelson BC real estate questions about buying, selling, waterfront homes, Kootenay Lake, relocation, second homes, and quieter opportunities.",
  path: "/faq",
  image: "/og/faq.png",
});

const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

export default function FaqPage() {
  return (
    <PageLayout>
      <JsonLd data={buildFaqJsonLd(faqs.map((faq) => ({ question: faq.q, answer: faq.a })), "/faq")} />
      <SubpageHero
        eyebrow="FAQ"
        title="The questions"
        emphasis="worth asking first."
        lede="Straight answers for sellers, buyers, relocating clients, second-home owners, and off-market questions."
        image={headerImages.orangeBridge}
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="tone-ivory tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[780px]">
            <Eyebrow>Process Guide</Eyebrow>
            <SectionHeading className="mt-7">
              Sorted by phase,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                not dumped in a pile.
              </em>
            </SectionHeading>
            <SectionLede>
              Start with the category that matches the decision in front of you: selling, buying, relocation, second-home ownership, or off-market access.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-14">
            <Reveal>
              <aside className="sticky top-32 hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 lg:block">
                <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">
                  Categories
                </div>
                <nav className="grid gap-2" aria-label="FAQ categories">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#${category.toLowerCase()}`}
                      className="rounded-full border border-[var(--color-line)] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)] transition-[border-color,color,background] duration-500 hover:border-[var(--color-bronze)] hover:bg-[rgba(176,138,91,0.08)] hover:text-[var(--color-bronze)]"
                    >
                      {category}
                    </a>
                  ))}
                </nav>
              </aside>
            </Reveal>

            <div className="grid gap-12">
              {categories.map((category, categoryIndex) => {
                const items = faqs.filter((faq) => faq.category === category);
                return (
                  <section key={category} id={category.toLowerCase()} className="scroll-mt-32">
                    <Reveal className="mb-6 flex items-end justify-between gap-6 border-b border-[var(--color-line)] pb-5">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">
                          Phase {String(categoryIndex + 1).padStart(2, "0")}
                        </div>
                        <h2 className="m-0 mt-3 font-serif text-[34px] font-light leading-[1.05] tracking-[-0.01em] text-[var(--color-text)] md:text-[46px]">
                          {category}
                        </h2>
                      </div>
                      <span className="hidden font-serif text-[52px] italic leading-none text-[rgba(176,138,91,0.18)] md:block">
                        {String(items.length).padStart(2, "0")}
                      </span>
                    </Reveal>

                    <ul className="grid gap-4">
                      {items.map((f, i) => (
                        <Reveal
                          key={f.q}
                          as="li"
                          delay={(i % 4) * 60}
                          className="luxury-card rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-[border-color,background,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(255,255,255,0.62)] md:p-8"
                        >
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-[58px_1fr] md:gap-8">
                            <span className="font-serif text-[16px] italic tracking-[0.1em] text-[var(--color-bronze)]">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <h3 className="m-0 font-serif font-light leading-[1.18] tracking-[-0.005em] text-[var(--color-text)] [font-size:clamp(22px,2.3vw,30px)]">
                                {f.q}
                              </h3>
                              <p className="m-0 mt-4 max-w-[760px] text-[16px] leading-[1.78] text-[var(--color-text-muted)]">
                                {f.a}
                              </p>
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Ask Anything"
        title="Still unsure?"
        emphasis="Ask before the wrong move costs you."
        body="If your question depends on a property, timeline, relocation plan, or sale decision, the useful answer depends on the details. Start there."
      />
    </PageLayout>
  );
}
