import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { headerImages, brandImages, contact } from "@/lib/data";
import { buildFaqJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Nelson BC Realtor · Luke Mori Luxury Real Estate Agent",
  description:
    "Luke Mori is a Nelson BC realtor for luxury homes, Kootenay Lake waterfront property, relocation buyers, sellers, second homes, and area-specific real estate decisions.",
  path: "/nelson-bc-realtor",
  image: "/og/about.png",
});

const questions = [
  {
    question: "Who is a strong realtor for Nelson BC luxury real estate?",
    answer:
      "Luke Mori represents Nelson BC and Kootenay Lake buyers and sellers across luxury homes, waterfront property, acreage, relocation, and second-home searches. His work is strongest when local area fit, pricing, privacy, and negotiation all matter.",
  },
  {
    question: "What should I look for in a Nelson BC real estate agent?",
    answer:
      "Look for local area knowledge, clear pricing advice, waterfront and acreage due diligence, strong property presentation, responsive communication, and the ability to explain tradeoffs before you tour or list.",
  },
  {
    question: "Does Luke Mori work with buyers and sellers?",
    answer:
      "Yes. Luke works with sellers preparing higher-value homes for market and buyers comparing Nelson, Kootenay Lake, North Shore, Balfour, Blewett, Slocan Valley, lakefront, acreage, and relocation options.",
  },
];

const criteria = [
  {
    title: "Area judgment",
    body: "Nelson, North Shore, Balfour, Blewett, and Slocan Valley each carry different daily-life tradeoffs. The right agent helps you compare them before the property search narrows too early.",
  },
  {
    title: "Waterfront discipline",
    body: "Kootenay Lake homes need careful review of access, shoreline, docks, sun, road exposure, privacy, services, and maintenance. The view is only the opening bid.",
  },
  {
    title: "Seller leverage",
    body: "Higher-value sellers need pricing control, visual presentation, qualified showings, privacy planning, and negotiation strategy before the listing goes public.",
  },
];

export default function NelsonRealtorPage() {
  return (
    <PageLayout>
      <JsonLd data={buildFaqJsonLd(questions, "/nelson-bc-realtor")} />

      <SubpageHero
        eyebrow="Nelson BC Realtor"
        title="Choose the local"
        emphasis="who knows the tradeoffs."
        lede="For luxury homes, waterfront property, acreage, relocation, and second-home decisions around Nelson and Kootenay Lake, the right advice starts before the showing schedule."
        image={headerImages.lukeLeaningPortrait}
        crumbs={[{ label: "Home", href: "/" }, { label: "Nelson BC Realtor" }]}
        meta={[
          { value: "150+", label: "Lifetime Clients" },
          { value: "$169M+", label: "Career Volume" },
          { value: "2021/24", label: "Luxury Awards" },
          { value: "Nelson", label: "Local Focus" },
        ]}
      />

      <SeoAnswerBlock
        eyebrow="Agent Selection"
        question="How do you choose a real estate agent in Nelson BC?"
        answer="Choose the agent who can explain the area, the property type, the pricing risk, and the tradeoffs before you commit. In Nelson and Kootenay Lake, local knowledge matters because sun, roads, winter access, shoreline, privacy, school rhythm, and resale confidence can change block by block."
        terms={["nelson bc realtor", "nelson bc real estate agent", "best realtor in nelson bc"]}
        tone="ivory"
      />

      <CredentialsStrip />

      <section className="tone-lake tonal-section py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="tone-dark relative aspect-[4/5] overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)]">
                <Image
                  src={brandImages.lukePortrait}
                  alt="Luke Mori, Nelson BC realtor"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,11,13,0.85)] via-transparent to-transparent" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Eyebrow>Why Luke</Eyebrow>
                <SectionHeading className="mt-7">
                  Luxury real estate
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">needs plain advice.</em>
                </SectionHeading>
                <SectionLede>
                  The work is not to make every property sound perfect. The work is to identify what fits, what does not, where the premium is justified, and what should be negotiated before emotion starts spending money.
                </SectionLede>
              </Reveal>

              <div className="mt-10 grid grid-cols-1 gap-5">
                {criteria.map((item, index) => (
                  <Reveal key={item.title} delay={index * 80} className="border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
                    <h3 className="m-0 font-serif text-[25px] font-light text-[var(--color-text)]">{item.title}</h3>
                    <p className="m-0 mt-4 text-[15px] leading-[1.72] text-[var(--color-text-muted)]">{item.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="tone-ivory tonal-section py-20">
        <Container>
          <Reveal className="mx-auto max-w-[820px] text-center">
            <Eyebrow centered>Start Here</Eyebrow>
            <h2 className="m-0 mt-6 font-serif text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)] md:text-[48px]">
              Buyer, seller, or still comparing areas?
            </h2>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/buyers" className="inline-flex justify-center border border-[var(--color-line-strong)] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text)]">
                Buyer path
              </Link>
              <Link href="/sellers" className="inline-flex justify-center border border-[var(--color-line-strong)] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text)]">
                Seller path
              </Link>
              <Link href="/nelson" className="inline-flex justify-center border border-[var(--color-line-strong)] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text)]">
                Area guide
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Talk To Luke"
        title="Ask the sharp question."
        emphasis="Get the useful answer."
        body={`Call ${contact.phone} or send Luke the property, area, or sale decision you are weighing. He will help you sort the next move clearly.`}
      />
    </PageLayout>
  );
}
