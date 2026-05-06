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
  title: "Nelson BC Real Estate FAQ · Quick Buyer & Seller Answers",
  description:
    "Quick answers to common Nelson BC and Kootenay Lake real estate questions about buying, selling, waterfront, acreage, relocation, taxes, risk review, and working with Luke Mori.",
  path: "/faq",
  image: "/og/faq.png",
});

const categories = Array.from(new Set(faqs.map((faq) => faq.category)));
const categoryId = (category: string) => category.toLowerCase().replace(/\s+/g, "-");

export default function FaqPage() {
  return (
    <PageLayout>
      <JsonLd data={buildFaqJsonLd(faqs.map((faq) => ({ question: faq.q, answer: faq.a })), "/faq")} />
      <SubpageHero
        eyebrow="FAQ"
        title="Quick answers for Kootenay real estate"
        emphasis="before the bigger decision."
        lede="The short version of what buyers and sellers ask most: areas, offers, waterfront, acreage, taxes, ownership rules, selling, relocation, and when to bring Luke in."
        image={headerImages.orangeBridge}
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="tone-ivory tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[780px]">
            <Eyebrow>Fast Answers</Eyebrow>
            <SectionHeading className="mt-7">
              The concerns people need settled
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                before they keep reading.
              </em>
            </SectionHeading>
            <SectionLede>
              Use this page when you need a clear answer first. If the decision is bigger, the guide library goes deeper from here.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-14">
            <Reveal>
              <aside className="luxury-card group sticky top-32 hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-[transform,border-color,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[var(--color-bg)] lg:block">
                <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">
                  Categories
                </div>
                <nav className="grid gap-2" aria-label="FAQ categories">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#${categoryId(category)}`}
                      className="luxury-button rounded-full border border-[var(--color-line)] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)] transition-[border-color,color,background,transform] duration-500 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:border-[var(--color-bronze)] hover:bg-[rgba(176,138,91,0.08)] hover:text-[var(--color-bronze)]"
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
                  <section key={category} id={categoryId(category)} className="scroll-mt-32">
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
                          className="luxury-card group rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-[border-color,background,transform,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(255,255,255,0.62)] md:p-8"
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
        eyebrow="Ask Luke"
        title="Need the answer for a real property?"
        emphasis="Send the address."
        body="If the question depends on a home, timeline, sale plan, legal detail, tax rule, insurance issue, or local condition, the useful answer depends on the facts. Start with the property and Luke will help narrow the next step."
      />
    </PageLayout>
  );
}
