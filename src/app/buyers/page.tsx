import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ProcessSteps } from "@/components/layout/ProcessSteps";
import { GuideLinkPanel } from "@/components/seo/GuideLinkPanel";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { headerImages, buyerSteps, facebookReviews, facebookReviewsUrl } from "@/lib/data";

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

const buyerDecisionChecks = [
  {
    title: "Cost beyond the offer",
    body: "Price is only one number. Budget for property transfer tax, legal fees, inspection, insurance, adjustments, moving costs, repairs, utilities, snow removal, strata fees, rural maintenance, and the carrying cost of waiting.",
    href: "/guides/bc-property-transfer-tax-closing-costs-kootenay-buyers",
    cta: "Plan closing costs",
  },
  {
    title: "Condition and systems",
    body: "Older Nelson homes, lake homes, and rural properties can hide different risks. Match inspection scope to the property: roof, drainage, electrical, heat, wells, septic, docks, outbuildings, slope, and access.",
    href: "/guides/home-inspection-rural-waterfront-kootenays",
    cta: "Review inspection questions",
  },
  {
    title: "Title, access, and use",
    body: "Before a beautiful property becomes the favourite, understand easements, rights-of-way, shared roads, strata rules, waterfront access, ALR, zoning, rental rules, and whether your intended use is actually allowed.",
    href: "/guides/title-easements-rights-of-way-rural-bc",
    cta: "Check title issues",
  },
  {
    title: "Offer timing and conditions",
    body: "The right offer protects momentum without skipping judgment. Decide what must be verified, who needs to review it, how much time is needed, and when a strong clean offer is safer than a rushed one.",
    href: "/guides/buying-with-conditions-bc-real-estate",
    cta: "Study offer conditions",
  },
];

const buyerBriefPrompts = [
  "What life are you buying: lake, town, acreage, ski, retreat, or relocation?",
  "What tradeoff is unacceptable: road noise, winter access, privacy loss, maintenance, distance, or poor resale?",
  "How will the home be used: full-time, second home, family base, remote work, or future move?",
  "What has to be true before you would tour, offer, or wait?",
];

const buyerScenarioCards = [
  {
    title: "First-time or first-BC buyer",
    body: "Start with mortgage comfort, deposit timing, property transfer tax, inspection conditions, strata or rural-system risk, and what you can safely decide before the offer clock starts.",
    links: [
      { label: "First-time buyer guide", href: "/guides/first-time-home-buyer-nelson-bc" },
      { label: "Buying with conditions", href: "/guides/buying-with-conditions-bc-real-estate" },
    ],
  },
  {
    title: "Lakefront or water-view buyer",
    body: "Separate true waterfront, lake access, and lake view. Then verify title, foreshore, dock status, water rights, septic location, flood questions, insurance, slope, sun, and year-round use.",
    links: [
      { label: "Waterfront due diligence", href: "/guides/buying-kootenay-lake-waterfront-property" },
      { label: "Waterfront vs. lake access", href: "/guides/kootenay-lake-waterfront-vs-lake-access" },
    ],
  },
  {
    title: "Acreage or rural buyer",
    body: "The land is only the start. Check usable acreage, access, wells, septic, drainage, wildfire exposure, ALR status, outbuildings, snow removal, internet, and what future use is actually allowed.",
    links: [
      { label: "Acreage questions", href: "/guides/buying-acreage-in-the-kootenays" },
      { label: "Rural due diligence", href: "/guides/rural-luxury-property-due-diligence-bc" },
    ],
  },
  {
    title: "Second-home or remote buyer",
    body: "Plan the caretaker system before you buy: winter checks, heat, alarms, guests, insurance, short-term rental rules, local trades, emergency access, and who can open the door when you are not here.",
    links: [
      { label: "Second-home ownership", href: "/guides/buying-second-home-kootenays" },
      { label: "Remote buying", href: "/guides/remote-buying-kootenay-property" },
    ],
  },
];

const buyerResearchLinks = [
  { label: "BCFSA real estate resources", href: "https://www.bcfsa.ca/public-resources/real-estate", note: "Consumer guidance, licensed professional checks, and complaint resources." },
  { label: "BC property transfer tax", href: "https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax", note: "Rates, exemptions, and added tax questions for higher-value or foreign buyers." },
  { label: "LTSA title search", href: "https://ltsa.ca/property-owners/how-can-i/search-for-a-title/", note: "How title, charges, liens, legal description, and PID searches work." },
  { label: "BC water licensing and rights", href: "https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/water-licensing-rights", note: "Important for wells, irrigation, creeks, and non-domestic water use." },
  { label: "BC onsite sewage systems", href: "https://www2.gov.bc.ca/gov/content/environment/waste-management/sewage/onsite-sewage-systems", note: "Useful when evaluating rural homes, acreage, waterfront, and older systems." },
  { label: "FireSmart BC", href: "https://firesmartbc.ca/", note: "Wildfire-risk preparation for forested, rural, and interface properties." },
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

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <Eyebrow>Buyer Due Diligence</Eyebrow>
              <SectionHeading className="mt-7">
                Know what to check
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  before the offer.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              A good buyer page should help people avoid expensive surprises. These are the checks that come up again and again around Nelson, Kootenay Lake, rural acreage, older homes, and second-home purchases.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2">
            {buyerDecisionChecks.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 70} className="flex h-full flex-col bg-[var(--color-bg)] p-8 sm:p-9">
                <span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  Check {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-serif text-[30px] font-light leading-[1.12] text-[var(--color-text)]">{item.title}</h3>
                <p className="m-0 mt-5 flex-1 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">{item.body}</p>
                <Link href={item.href} className="mt-7 inline-flex text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
                  {item.cta}
                </Link>
              </Reveal>
            ))}
          </div>
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

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.88fr_1.12fr] md:items-end">
            <div>
              <Eyebrow>Buyer Scenario Desk</Eyebrow>
              <SectionHeading className="mt-7">
                The right questions
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  change by buyer.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              A first-time buyer, a waterfront buyer, an acreage buyer, and a second-home buyer should not be using the same checklist. Start with the scenario, then decide what needs proof before an offer.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {buyerScenarioCards.map((card, index) => (
              <Reveal key={card.title} delay={(index % 2) * 70} className="flex h-full flex-col border border-[var(--color-line)] bg-[var(--color-bg)] p-8 sm:p-9">
                <span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  Situation {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-serif text-[30px] font-light leading-[1.12] text-[var(--color-text)]">{card.title}</h3>
                <p className="m-0 mt-5 flex-1 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">{card.body}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {card.links.map((link) => (
                    <Link key={link.href} href={link.href} className="rounded-full border border-[var(--color-line-strong)] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronze)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
                      {link.label}
                    </Link>
                  ))}
                </div>
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

      <GuideLinkPanel
        eyebrow="Buyer Guide Path"
        title="Start with the questions that narrow the search."
        lede="Use these guides to compare areas, costs, property types, and offer questions before the showing schedule gets crowded."
        tone="ivory"
        links={[
          { title: "Best areas to live in Nelson", body: "Compare Nelson neighbourhoods and nearby communities by daily life, access, and winter routine.", href: "/guides/best-areas-to-live-nelson-bc" },
          { title: "Kootenay Lake market guide", body: "Read the market by property type, current competition, and real comparison sets.", href: "/guides/kootenay-lake-real-estate-market-guide" },
          { title: "Closing costs and transfer tax", body: "Plan property transfer tax, deposits, legal costs, adjustments, and other purchase costs.", href: "/guides/bc-property-transfer-tax-closing-costs-kootenay-buyers" },
        ]}
      />

      <section className="tone-ivory tonal-section border-t border-[var(--color-line)] py-20 md:py-24">
        <Container>
          <Reveal className="mb-12 max-w-[760px]">
            <Eyebrow>Outside Research</Eyebrow>
            <SectionHeading className="mt-7">
              Links worth opening
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                before you commit.
              </em>
            </SectionHeading>
            <SectionLede>
              Luke can help frame the decision. These outside resources help buyers verify tax, title, water, septic, consumer, and wildfire questions with the right public source.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-3">
            {buyerResearchLinks.map((link) => (
              <Reveal key={link.href} className="bg-[var(--color-bg)] p-7">
                <a href={link.href} target="_blank" rel="noreferrer" className="group block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Official Resource</span>
                  <h3 className="m-0 mt-4 font-serif text-[25px] font-light leading-[1.16] text-[var(--color-text)] group-hover:text-[var(--color-bronze-light)]">{link.label}</h3>
                  <p className="m-0 mt-4 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">{link.note}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>


      <section className="tone-lake tonal-section border-t border-[var(--color-line)] py-20 md:py-24">
        <Container>
          <Reveal className="grid grid-cols-1 gap-8 border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[0_30px_90px_-70px_rgba(0,0,0,0.55)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <Eyebrow>Buyer Review</Eyebrow>
              <blockquote className="m-0 mt-5 max-w-[860px] font-serif text-[24px] font-light leading-[1.45] tracking-[-0.005em] text-[var(--color-text)] sm:text-[30px]">
                &ldquo;{facebookReviews[2].quote}&rdquo;
              </blockquote>
              <p className="m-0 mt-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                {facebookReviews[2].context}
              </p>
            </div>
            <Button href={facebookReviewsUrl} variant="ghost" size="md" arrow>
              Read Reviews
            </Button>
          </Reveal>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Buyer Inquiry"
        title="Tell Luke what"
        emphasis="matters most."
        body="Whether you are three years out or three weeks, start with what you want life here to feel like: walkable town, lake views, acreage, quiet village life, or a slower rural rhythm."
      />
    </PageLayout>
  );
}
