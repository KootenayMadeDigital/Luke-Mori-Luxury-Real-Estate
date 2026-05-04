import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ProcessSteps } from "@/components/layout/ProcessSteps";
import { BuyerFitQuiz } from "@/components/buyers/BuyerFitQuiz";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { buyerSteps, brandImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Buying with Luke · Nelson Buyer Representation",
  description:
    "Buyer representation in Nelson and Kootenay Lake real estate for relocating buyers, second-home owners, and regional buyers who want fewer wrong turns.",
  path: "/buyers",
  image: "/og/buyers.png",
});

const buyerResourceCards = [
  {
    href: "/buyers/international",
    eyebrow: "International",
    title: "Non-Canadian Buyers",
    body: "U.S., U.K., Australian, and Hong Kong buyers: purchase rules, currency timing, advisor introductions, and ownership from afar.",
    cta: "Read the playbook",
  },
  {
    href: "/buyers/relocation",
    eyebrow: "Relocation",
    title: "Vancouver, Calgary, & Beyond",
    body: "Schools, neighbourhoods, climate, healthcare access, winter reality, and the details that make the move work.",
    cta: "Plan the move",
  },
  {
    href: "/buyers/international",
    eyebrow: "Second Home",
    title: "Lock-and-Leave Ownership",
    body: "Caretaker relationships, winterization, security, and the local systems that make a second home easier to own.",
    cta: "Ask ownership questions",
  },
];

export default function BuyersPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="For Buyers"
        title="Buying by life,"
        emphasis="not by feed."
        lede="Whether you are relocating, buying a second home, or moving within the region, start with the life you want and the tradeoffs you will not accept. Then narrow the search to the few addresses that truly fit."
        image={brandImages.procterLivingRoom}
        crumbs={[{ label: "Home", href: "/" }, { label: "Buyers" }]}
        meta={[
          { value: "5-Step", label: "Process" },
          { value: "Off-Market", label: "Network Access" },
          { value: "Vetted", label: "Lender Network" },
          { value: "1 Day", label: "Reply Standard" },
        ]}
      />

      <section id="buyer-fit" className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <Eyebrow>Buyer Route Finder</Eyebrow>
              <SectionHeading className="mt-7">
                Choose the buying path
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  before the tour list.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Luxury buyers are not choosing between similar homes. They are choosing a way to live: lakefront, walkable Nelson, North Shore privacy, acreage, ski rhythm, relocation, second-home ownership, or a clean remote purchase.
            </SectionLede>
          </Reveal>
          <BuyerFitQuiz />
        </Container>
      </section>

      <ProcessSteps
        eyebrow="The Buyer Process"
        title="A clear five-step path,"
        emphasis="end to end."
        lede="From first brief to offer, each step is handled with local knowledge, timing, and clear advice."
        steps={buyerSteps}
      />

      {/* Buyer-type sub-routes */}
      <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 max-w-[760px]">
            <Eyebrow>Buyer Resources</Eyebrow>
            <SectionHeading className="mt-7">
              Resources for the
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                buyer you actually are.
              </em>
            </SectionHeading>
            <SectionLede>
              Different buyers need different answers. Each path below leads to a focused playbook
              built around the realities of that particular journey.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {buyerResourceCards.map((card) => (
              <Reveal key={card.title}>
                <Link
                  href={card.href}
                  className="luxury-card group flex h-full flex-col border border-[var(--color-line)] bg-[var(--color-bg)] p-10 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[var(--color-bronze)]"
                >
                  <span className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                    {card.eyebrow}
                  </span>
                  <h3 className="m-0 mb-4 font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                    {card.title}
                  </h3>
                  <p className="m-0 mb-7 flex-1 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                    {card.body}
                  </p>
                  <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                    {card.cta}
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
        eyebrow="Buyer Inquiry"
        title="Name the life."
        emphasis="Then the addresses."
        body="Whether you are three years out or three weeks, start by naming the life you want and the tradeoffs you will not accept: lakefront, town, acreage, ski, second home, or a clean relocation path."
      />
    </PageLayout>
  );
}
