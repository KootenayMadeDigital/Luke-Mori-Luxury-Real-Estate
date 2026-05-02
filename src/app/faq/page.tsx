import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { faqs, brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Frequently asked questions about luxury real estate representation in Nelson and the Kootenays, pricing, off-market access, international buyers, listing timelines.",
};

export default function FaqPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="FAQ"
        title="The questions"
        emphasis="worth asking first."
        lede="Eight things that come up in nearly every first conversation. Honest answers, no salesman gloss."
        image={brandImages.orangeBridge}
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[760px]">
            <Eyebrow>The Eight</Eyebrow>
            <SectionHeading className="mt-7">
              Pricing, process,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                and the things between.
              </em>
            </SectionHeading>
            <SectionLede>
              If your question isn&apos;t here, ask. Replies are personal, within one business day.
            </SectionLede>
          </Reveal>

          <ul className="border-t border-[var(--color-line)]">
            {faqs.map((f, i) => (
              <Reveal
                key={f.q}
                as="li"
                delay={(i % 4) * 60}
                className="grid grid-cols-1 gap-3 border-b border-[var(--color-line)] py-9 transition-colors hover:bg-[var(--color-surface)] md:grid-cols-[80px_1fr_2fr] md:items-baseline md:gap-10 md:py-10"
              >
                <span className="hidden font-serif text-[14px] italic tracking-[0.1em] text-[var(--color-bronze)] md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-serif font-light leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] [font-size:clamp(20px,2.2vw,26px)]">
                  {f.q}
                </h3>
                <p className="m-0 max-w-[640px] text-[15px] leading-[1.7] text-[var(--color-text-muted)] md:text-[16px]">
                  {f.a}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Ask Anything"
        title="Question not answered?"
        emphasis="We probably know the answer."
        body="If your question isn't on the list, just ask. The first conversation is always the most useful, for both of us."
      />
    </PageLayout>
  );
}
