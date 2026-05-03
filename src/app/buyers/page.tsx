import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ProcessSteps } from "@/components/layout/ProcessSteps";
import { LifestyleSection } from "@/components/sections/LifestyleSection";
import { BuyerFitQuiz } from "@/components/buyers/BuyerFitQuiz";
import { PrivateBuyerRegistry } from "@/components/buyers/PrivateBuyerRegistry";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { buyerSteps, brandImages, lifestyleTiles } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Buying with Luke · Nelson Buyer Representation",
  description:
    "Buyer representation in Nelson and Kootenay Lake real estate for relocating buyers, second-home owners, and regional buyers who want fewer wrong turns.",
  path: "/buyers",
  image: brandImages.procterLivingRoom,
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

const buyerActions = [
  { href: "/listings/waterfront", label: "View waterfront" },
  { href: "/nelson/nelson", label: "Explore Nelson" },
  { href: "/contact", label: "Ask About Private Homes" },
  { href: "#buyer-fit", label: "Find buyer fit" },
  { href: "/buyers/relocation", label: "Plan relocation call" },
  { href: "/buyers/international", label: "Ask about second-home ownership" },
];

const buyerProofStack = [
  {
    title: "A human map",
    body: "Nelson-born local knowledge helps separate pretty listings from the roads, seasons, shoreline questions, and daily routines that actually fit.",
  },
  {
    title: "Private introductions",
    body: "The search can include public listings, private introductions, and owner conversations that never reach the portals.",
  },
  {
    title: "Advisor routing",
    body: "Lenders, lawyers, inspectors, tax counsel, property managers, and local specialists are introduced when the buyer path needs them.",
  },
  {
    title: "Offer strategy",
    body: "Every offer is reviewed for price, terms, conditions, timing, inspection risk, and closing strength.",
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

      <section className="tone-lake tonal-section border-b border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <Eyebrow>Buyer Lifestyle Selector</Eyebrow>
              <SectionHeading className="mt-7">
                Choose the desire,
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  then tour the address.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              MLS filters flatten the Kootenays. Lakefront, walkability, acreage, ski rhythm, relocation, and second-home ownership each create different tradeoffs.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
            {lifestyleTiles.map((tile, i) => (
              <Reveal key={tile.num} delay={(i % 4) * 60}>
                <Link
                  href={tile.href}
                  className="luxury-card group flex h-full min-h-[250px] flex-col bg-[var(--color-bg)] p-8 transition-[background,transform,box-shadow] duration-500 hover:-translate-y-1 hover:bg-[var(--color-surface)]"
                >
                  <span className="mb-5 font-serif text-[14px] italic tracking-[0.1em] text-[var(--color-bronze)]">
                    {tile.num}
                  </span>
                  <span className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                    {tile.kicker}
                  </span>
                  <h3 className="m-0 mb-4 font-serif text-[25px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                    {tile.title}
                  </h3>
                  <p className="m-0 mb-7 flex-1 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                    {tile.body}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-bronze)]">
                    {tile.cta}
                    <svg viewBox="0 0 16 16" aria-hidden className="luxury-arrow size-[13px]">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220} className="mt-10 flex flex-wrap gap-3 border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
            {buyerActions.map((action) => (
              <Link
                key={action.href + action.label}
                href={action.href}
                className="rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]"
              >
                {action.label}
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <section id="buyer-fit" className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <Eyebrow>Buyer Route Finder</Eyebrow>
              <SectionHeading className="mt-7">
                Choose the search
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  before choosing homes.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Luxury buyers do not need more random showings. They need the right route first: lakefront, walkable Nelson, North Shore privacy, acreage, ski lifestyle, relocation, second-home use, or international logistics.
            </SectionLede>
          </Reveal>
          <BuyerFitQuiz />
        </Container>
      </section>

      <section className="tone-lake tonal-section border-b border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 max-w-[780px]">
            <Eyebrow>Buyer Registry</Eyebrow>
            <SectionHeading className="mt-7">
              Get clear on the buyer
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                before the right property appears.
              </em>
            </SectionHeading>
            <SectionLede>
              For lakefront, acreage, relocation, and second-home searches, the right fit may come from a public listing, a private introduction, or an owner conversation before it reaches the crowd.
            </SectionLede>
          </Reveal>
          <PrivateBuyerRegistry />
        </Container>
      </section>

      <ProcessSteps
        eyebrow="The Buyer Process"
        title="A clear five-step path,"
        emphasis="end to end."
        lede="From first brief to offer, each step is handled with local knowledge, timing, and clear advice."
        steps={buyerSteps}
      />

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <Eyebrow>Buyer Confidence</Eyebrow>
              <SectionHeading className="mt-7">
                The search gets safer
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  when the brief is sharper.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Buyers need local knowledge, the right advisors, clear ownership questions, and a process that protects their time and confidence.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-4">
            {buyerProofStack.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 70} className="bg-[var(--color-bg-2)] p-8 sm:p-9">
                <span className="mb-5 block font-serif text-[20px] italic text-[var(--color-bronze)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 mb-4 font-serif text-[26px] font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="m-0 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

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

      <LifestyleSection />

      <InquiryCTA
        eyebrow="Buyer Inquiry"
        title="Name the life."
        emphasis="Then the addresses."
        body="Whether you are three years out or three weeks, start by naming the life you want and the tradeoffs you will not accept: lakefront, town, acreage, ski, second home, or a clean relocation path."
      />
    </PageLayout>
  );
}
