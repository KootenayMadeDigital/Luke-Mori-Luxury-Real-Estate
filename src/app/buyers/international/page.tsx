import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { brandImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "International Buyers · Nelson Real Estate",
  description:
    "A buyer playbook for international buyers purchasing real estate in British Columbia. Foreign-buyer regulation, local advisors, currency strategy, and the realities of cross-border ownership.",
  path: "/buyers/international",
  image: brandImages.procterLakeHouse,
});

const considerations = [
  {
    k: "I.",
    title: "Foreign-Buyer Regulation",
    body: "Canadian federal restrictions on residential property purchases by non-Canadians have evolved significantly since 2023. Nelson and the Kootenays sit largely outside the most restricted urban zones, but every transaction is reviewed against current rules before we proceed.",
  },
  {
    k: "II.",
    title: "Provincial & Local Tax",
    body: "B.C. Property Transfer Tax, Speculation & Vacancy Tax, and Foreign-Buyer Tax thresholds. The Kootenay region falls outside the Foreign-Buyer Tax zone, a meaningful advantage relative to Vancouver, Victoria, and the Lower Mainland.",
  },
  {
    k: "III.",
    title: "Local Advisor Network",
    body: "Cross-border tax counsel, immigration lawyers (where relevant), private banking, and the local notary or solicitor who handles your transaction. We make the introductions before you fly in.",
  },
  {
    k: "IV.",
    title: "Currency & Wire Strategy",
    body: "USD/CAD movement of 3-5% can move the needle on a $2M property by $60-$100K. We coordinate with your treasury or FX advisor to time the conversion against your closing, not the listing date.",
  },
  {
    k: "V.",
    title: "Property Management",
    body: "For second-home and lock-and-leave buyers, vetted local property managers, winterisation specialists, security, and the kind of caretaker relationships that make absentee ownership work.",
  },
];

const origins = [
  { region: "United States", note: "Pacific Northwest in particular, Seattle, Portland, the Bay Area." },
  { region: "United Kingdom", note: "London-based buyers seeking a North American second home." },
  { region: "Australia & Hong Kong", note: "Long-haul second-home and family relocation." },
  { region: "Eastern Europe", note: "Investment-grade waterfront and acreage." },
];

const absenteeDesk = [
  {
    title: "Regulatory Pre-Flight",
    body: "Confirm the current federal and provincial purchase landscape before a property is shortlisted, especially for non-Canadian buyers.",
  },
  {
    title: "Advisor Bench",
    body: "Coordinate tax, legal, immigration, private banking, notary, and insurance introductions before travel dates harden.",
  },
  {
    title: "Ownership Systems",
    body: "Property management, winterisation, caretaker access, security, inspections, and the local routines that protect a lock-and-leave home.",
  },
  {
    title: "Private Touring",
    body: "Curated days around waterfront, Balfour, North Shore, Nelson, acreage, or retreat properties, with only serious contenders on the route.",
  },
];

export default function InternationalBuyersPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="International Buyers"
        title="Buying from"
        emphasis="anywhere."
        lede="A focused playbook for non-Canadian buyers, second-home buyers, and absentee owners purchasing real estate in the Kootenay region. The federal and provincial landscape, the local network of advisors, and the practical realities of cross-border ownership."
        image={brandImages.procterLakeHouse}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Buyers", href: "/buyers" },
          { label: "International" },
        ]}
        meta={[
          { value: "Outside FBT", label: "Kootenay Region" },
          { value: "5+", label: "Origin Markets" },
          { value: "Vetted", label: "Local Advisors" },
          { value: "End-to-End", label: "Coordination" },
        ]}
      />

      <section className="tone-ivory tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[760px]">
            <Eyebrow>The Five Considerations</Eyebrow>
            <SectionHeading className="mt-7">
              What actually matters
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                when buying from abroad.
              </em>
            </SectionHeading>
            <SectionLede>
              Most of the noise around international real estate is about the wrong things.
              Here&apos;s what actually moves the needle on your transaction.
            </SectionLede>
          </Reveal>

          <ul className="space-y-1 border-t border-[var(--color-line)]">
            {considerations.map((c, i) => (
              <Reveal
                key={c.k}
                as="li"
                delay={i * 60}
                className="grid grid-cols-[40px_1fr] gap-6 border-b border-[var(--color-line)] py-9 sm:grid-cols-[60px_1fr] md:grid-cols-[80px_1.4fr_2fr]"
              >
                <span className="font-serif text-[20px] italic text-[var(--color-bronze)]">{c.k}</span>
                <h3 className="m-0 font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] md:text-[26px]">
                  {c.title}
                </h3>
                <p className="col-span-2 m-0 max-w-[640px] text-[15px] leading-[1.7] text-[var(--color-text-muted)] md:col-span-1 md:col-start-3">
                  {c.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="tone-lake tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <Eyebrow>Absentee Ownership Desk</Eyebrow>
              <SectionHeading className="mt-7">
                The house is only
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  half the work.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Cross-border and second-home purchases succeed when the local operating system is built before closing. The right advisors, the right caretaker, the right property rhythm.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-4">
            {absenteeDesk.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="bg-[var(--color-bg)] p-8 sm:p-9">
                <span className="mb-5 block font-serif text-[22px] italic text-[var(--color-bronze)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 mb-4 font-serif text-[25px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="m-0 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220} className="mt-10 flex flex-wrap justify-center gap-3 border border-[var(--color-line)] bg-[var(--color-bg)] p-5">
            {[
              { href: "/listings/waterfront", label: "View waterfront" },
              { href: "/nelson/balfour", label: "Study Balfour" },
              { href: "/contact", label: "Request private access" },
              { href: "/buyers/relocation", label: "Plan scouting trip" },
            ].map((item) => (
              <Link key={item.href + item.label} href={item.href} className="rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
                {item.label}
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mx-auto max-w-[760px] text-center">
            <Eyebrow centered>Where Buyers Come From</Eyebrow>
            <SectionHeading centered className="mt-7">
              A growing roster
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                of international buyers.
              </em>
            </SectionHeading>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2">
            {origins.map((o) => (
              <Reveal key={o.region} className="border border-[var(--color-line)] bg-[var(--color-bg)] p-7">
                <h4 className="m-0 mb-2 font-serif text-[22px] font-normal text-[var(--color-text)]">{o.region}</h4>
                <p className="m-0 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">{o.note}</p>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-[640px] text-center text-[12px] italic text-[var(--color-text-dim)]">
            Buyer geography varies year to year.
          </p>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="International Inquiry"
        title="Buying from afar?"
        emphasis="Build the local bench first."
        body="A 30-minute call walks through the regulatory landscape, the local market, the advisor bench, and what's actually possible from where you're sitting. No commitment, no pressure, just clarity."
      />
    </PageLayout>
  );
}
