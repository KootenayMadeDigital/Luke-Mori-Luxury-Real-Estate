import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { buyerGuides, guideCategories } from "@/lib/guides";

export const metadata = buildPageMetadata({
  title: "Kootenay Real Estate Guides",
  description: "Practical buyer and seller guides for Kootenay Lake, Nelson, Kaslo, rural acreage, waterfront review, and important property decisions in BC.",
  path: "/guides",
  image: "/generated/guide-headers/guides-hub.webp",
});

export default function BuyerGuidesPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Guides"
        title="Know the market"
        emphasis="before the showing."
        lede="Practical guidance for buyers comparing Kootenay Lake, Nelson, Kaslo, waterfront, acreage, rural systems, and important property decisions."
        image="/generated/guide-headers/guides-hub.webp"
        crumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
        meta={[
          { value: buyerGuides.length.toString(), label: "Guides" },
          { value: "BC", label: "Property Review" },
          { value: "Local", label: "Kootenay Context" },
          { value: "Local", label: "Next Step" },
        ]}
      />

      <section className="tone-ivory tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.85fr_1fr] md:items-end">
            <div>
              <Eyebrow>Kootenay Guide Library</Eyebrow>
              <SectionHeading className="mt-7">
                Useful answers,
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">without the noise.</em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Buyer, seller, and property review guides for important real estate decisions across Nelson, Kaslo, Kootenay Lake, and rural BC. Use them to ask better questions, then confirm property-specific details with the right professional.
            </SectionLede>
          </Reveal>

          <div className="space-y-16">
            {guideCategories.map((category) => {
              const guides = buyerGuides.filter((guide) => guide.category === category);
              return (
                <div
                  key={category}
                  id={category === "Buyer Guides" ? "buyer-guides" : category === "Due Diligence" ? "due-diligence" : "seller-guides"}
                  className="scroll-mt-36"
                >
                  <Reveal className="mb-6 flex items-center gap-4">
                    <span className="h-px flex-1 bg-[var(--color-line)]" />
                    <h2 className="m-0 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">{category}</h2>
                    <span className="h-px flex-1 bg-[var(--color-line)]" />
                  </Reveal>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {guides.map((guide, index) => (
                      <Reveal key={guide.slug} delay={index * 60}>
                        <Link href={`/guides/${guide.slug}`} className="luxury-card group flex h-full flex-col border border-[var(--color-line)] bg-[var(--color-bg)] p-7 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[var(--color-bronze)] sm:p-8">
                          <span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">{guide.readTime}</span>
                          <h3 className="m-0 font-serif text-[30px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)]">{guide.title}</h3>
                          <p className="m-0 mt-5 flex-1 text-[15px] leading-[1.72] text-[var(--color-text-muted)]">{guide.dek}</p>
                          <span className="mt-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Read this guide</span>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <InquiryCTA eyebrow="Ask Luke" title="Have a property or sale in mind?" emphasis="Ask before the tour." body="Send the address, area, or property type you are considering. Luke can help you understand the questions worth answering before a showing, offer, or sale plan." />
    </PageLayout>
  );
}
