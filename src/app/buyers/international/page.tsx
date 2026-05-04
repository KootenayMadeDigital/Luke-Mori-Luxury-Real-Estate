import Link from "next/link";
import Image from "next/image";
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
  title: "International and Second-Home Buyers · Nelson Real Estate",
  description:
    "A buyer guide for international and second-home purchasers in British Columbia: purchase rules, advisors, currency timing, and ownership from afar.",
  path: "/buyers/international",
  image: "/og/international.png",
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
    body: "Cross-border tax counsel, immigration lawyers (where relevant), banking, and the local notary or solicitor who handles your transaction. We make the introductions before you fly in.",
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

const absenteeDesk = [
  {
    title: "Regulatory Pre-Flight",
    image: brandImages.procterLakeHouse,
    imageAlt: "Kootenay Lake home for second-home buyers",
    body: "Confirm the current federal and provincial purchase landscape before a property is shortlisted, especially for non-Canadian buyers.",
  },
  {
    title: "Advisor Bench",
    image: brandImages.lukeContact,
    imageAlt: "Luke Mori contact portrait",
    body: "Coordinate tax, legal, immigration, banking, notary, and insurance introductions before travel dates harden.",
  },
  {
    title: "Ownership Systems",
    image: brandImages.procterLivingRoom,
    imageAlt: "Luxury lake house interior near Nelson",
    body: "Property management, winterisation, caretaker access, security, inspections, and the local routines that protect a lock-and-leave home.",
  },
  {
    title: "Private Touring",
    image: brandImages.balfourKootenayLake,
    imageAlt: "Balfour and Kootenay Lake waterfront",
    body: "Focused tour days around waterfront, Balfour, North Shore, Nelson, acreage, or retreat properties, with only strong contenders on the route.",
  },
];

export default function InternationalBuyersPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="International and Second-Home Buyers"
        title="Buying from"
        emphasis="anywhere."
        lede="A focused guide for non-Canadian buyers, second-home buyers, and absentee owners purchasing in the Kootenays: rules, advisors, currency, remote ownership, and local care."
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
            <Eyebrow>Five Questions to Solve Early</Eyebrow>
            <SectionHeading className="mt-7">
              What actually matters
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                when buying from abroad.
              </em>
            </SectionHeading>
            <SectionLede>
              Most international buying questions come down to the same practical issues.
              These are the ones that change the transaction.
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
              <Eyebrow>Ownership From Afar</Eyebrow>
              <SectionHeading className="mt-7">
                The house is only
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  half the work.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Cross-border and second-home purchases feel easier when the advisor team, caretaker plan, financing, and local details are handled before closing.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-4">
            {absenteeDesk.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="overflow-hidden bg-[var(--color-bg)]">
                <div className="relative aspect-[4/3] bg-[var(--color-surface)]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="luxury-media object-cover opacity-88 saturate-[1.06]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.06),rgba(10,11,13,0.58))]" aria-hidden />
                  <span className="absolute bottom-4 left-5 font-serif text-[22px] italic text-[var(--color-bronze-light)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-8 sm:p-9">
                  <h3 className="m-0 mb-4 font-serif text-[25px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="m-0 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220} className="mt-10 flex flex-wrap justify-center gap-3 border border-[var(--color-line)] bg-[var(--color-bg)] p-5">
            {[
              { href: "/listings/waterfront", label: "View waterfront" },
              { href: "/nelson/balfour", label: "Study Balfour" },
              { href: "/contact", label: "Ask About Private Homes" },
              { href: "/buyers/relocation", label: "Plan scouting trip" },
            ].map((item) => (
              <Link key={item.href + item.label} href={item.href} className="rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
                {item.label}
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="International Inquiry"
        title="Buying from afar?"
        emphasis="Build the local team before you travel."
        body="A 30-minute call can cover the rules, the local market, the right advisors, and what is realistic before you book flights or wire funds."
      />
    </PageLayout>
  );
}
