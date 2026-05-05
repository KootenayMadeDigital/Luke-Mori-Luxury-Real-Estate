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
import { headerImages, buyerSteps } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Nelson BC Buyer Guidance · Homes, Lakefront and Relocation",
  description:
    "Buyer guidance in Nelson and Kootenay Lake real estate for relocating buyers, second-home owners, and regional buyers who want fewer wrong turns.",
  path: "/buyers",
  image: "/og/buyers.png",
});

const buyerResourceCards = [
  {
    href: "/buyers/international",
    eyebrow: "International",
    title: "Non-Canadian Buyers",
    body: "U.S., U.K., Australian, and Hong Kong buyers: purchase rules, currency timing, advisor introductions, and ownership from afar.",
    cta: "Read the guide",
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

const advantageChecks = [
  {
    title: "Fit before listings",
    body: "The search starts with daily life, use, and non-negotiables, then moves into listings. That keeps beautiful wrong homes from stealing the day."
  },
  {
    title: "Local tradeoffs first",
    body: "Sun, road rhythm, slope, shoreline, winter access, school routes, privacy, and service distance are screened before a showing becomes emotional.",
  },
  {
    title: "Value checked early",
    body: "Lakefront, view homes, acreage, and walkable Nelson each carry different value drivers. Luke helps separate real strength from expensive presentation.",
  },
  {
    title: "Clear next step",
    body: "Every serious buyer should know what comes next: scout the area, study the shoreline, line up advisors, watch quiet opportunities, or book the right tour.",
  },
];

const buyerBriefPrompts = [
  "What life are you buying: lake, town, acreage, ski, retreat, or relocation?",
  "What tradeoff is unacceptable: road noise, winter access, privacy loss, maintenance, distance, or poor resale?",
  "How will the home be used: full-time, second home, family base, remote work, or future move?",
  "What has to be true before you would tour, offer, or wait?",
];

export default function BuyersPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="For Buyers"
        title="Start with the life"
        emphasis="you want here."
        lede="Whether you are relocating, buying a second home, or moving within the region, begin with what matters most day to day. Then narrow the search to homes that truly fit."
        image={headerImages.procterLivingRoom}
        crumbs={[{ label: "Home", href: "/" }, { label: "Buyers" }]}
        meta={[
          { value: "5-Step", label: "Process" },
          { value: "Local", label: "Area Guidance" },
          { value: "Trusted", label: "Advisor Network" },
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
              Buyers are not choosing between similar homes. They are choosing a way to live: lakefront, walkable Nelson, North Shore privacy, acreage, ski rhythm, relocation, second-home ownership, or a clean remote purchase.
            </SectionLede>
          </Reveal>
          <BuyerFitQuiz />
        </Container>
      </section>

      <section className="tone-lake tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <Eyebrow>The Buyer Advantage</Eyebrow>
              <SectionHeading className="mt-7">
                Fewer tours.
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  Better decisions.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              The advantage is not seeing more homes. It is knowing which homes deserve attention before photography, urgency, or online browsing starts doing the thinking.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {advantageChecks.map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
                <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  Advantage {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-serif text-[27px] font-light leading-[1.15] text-[var(--color-text)]">{item.title}</h3>
                <p className="m-0 mt-4 text-[15px] leading-[1.72] text-[var(--color-text-muted)]">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.46)] p-8 md:p-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <Eyebrow>Buyer Brief</Eyebrow>
                <h3 className="m-0 mt-6 font-serif text-[32px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)] md:text-[44px]">
                  The four questions that sharpen the search.
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] sm:grid-cols-2">
                {buyerBriefPrompts.map((prompt, index) => (
                  <div key={prompt} className="bg-[var(--color-bg)] p-6">
                    <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                      Question {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="m-0 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">{prompt}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
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
              Different buyers need different answers. Each path below gives practical guidance
              for that situation.
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
        title="Tell Luke what"
        emphasis="matters most."
        body="Whether you are three years out or three weeks, start with what you want life here to feel like: lakefront, town, acreage, ski access, second home, or a clean relocation path."
      />
    </PageLayout>
  );
}
