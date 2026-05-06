import Link from "next/link";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { SeoAnswerBlock } from "@/components/seo/SeoAnswerBlock";
import { GuideLinkPanel } from "@/components/seo/GuideLinkPanel";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { siteImages, headerImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Buying Property in Nelson BC from Abroad or as a Second Home",
  description:
    "Guide for Americans, international buyers, out-of-province buyers, and second-home purchasers buying property in Nelson BC or Kootenay Lake.",
  path: "/buyers/international",
  image: "/og/international.png",
});

const considerations = [
  {
    k: "I.",
    title: "Foreign-Buyer Regulation",
    body: "Rules for non-Canadian buyers can change. Before you fall for a home, confirm what applies to your situation with the right legal and tax advice."
  },
  {
    k: "II.",
    title: "Provincial & Local Tax",
    body: "Taxes can vary by buyer, use, and location. Ask early about property transfer tax, vacancy rules, and any buyer-specific costs before you compare homes."
  },
  {
    k: "III.",
    title: "Local Advisor Network",
    body: "Remote buyers often need legal, tax, banking, insurance, and notary help. Luke can help you line up the right local introductions before timing gets tight."
  },
  {
    k: "IV.",
    title: "Currency & Wire Strategy",
    body: "Currency moves can change the real cost of a purchase. Some non-resident buyers may also need larger down payments, so financing and conversion timing should be checked early."
  },
  {
    k: "V.",
    title: "Property Management",
    body: "Second homes need a care plan: winter checks, security, maintenance, and trusted local help when you are not in town."
  },
];

const absenteeDesk = [
  {
    title: "Regulatory Pre-Flight",
    image: siteImages.internationalProcter,
    imageAlt: "Kootenay Lake home for second-home buyers",
    body: "Confirm the current federal and provincial purchase landscape before a property is shortlisted, especially for non-Canadian buyers.",
  },
  {
    title: "Advisor Bench",
    image: siteImages.internationalAdvisor,
    imageAlt: "Luke Mori contact portrait",
    body: "Coordinate tax, legal, immigration, banking, notary, and insurance introductions before travel dates harden.",
  },
  {
    title: "Ownership Systems",
    image: siteImages.internationalOwnership,
    imageAlt: "Lake house interior near Nelson",
    body: "Property management, winterisation, caretaker access, security, inspections, and the local routines that protect a lock-and-leave home.",
  },
  {
    title: "Focused Touring",
    image: siteImages.internationalBalfour,
    imageAlt: "Balfour and Kootenay Lake waterfront",
    body: "Focused tour days around waterfront, Balfour, North Shore, Nelson, acreage, or retreat properties, with only strong contenders on the route.",
  },
];

const internationalPathways = [
  {
    title: "Non-Canadian buyer",
    body: "Confirm current federal purchase rules, exemptions, entity ownership, immigration status, additional property transfer tax, financing, currency, and who must review the deal before an offer is written.",
    links: [
      { label: "PTT and additional tax", href: "https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax" },
      { label: "Remote buying guide", href: "/guides/remote-buying-kootenay-property" },
    ],
  },
  {
    title: "U.S. buyer or cross-border family",
    body: "Think beyond the exchange rate. Ask about tax residency, financing, insurance, funds transfer timing, local signing logistics, border travel, estate planning, and who manages the home when you are away.",
    links: [
      { label: "Out-of-province buyers", href: "/guides/out-of-province-buyers-buying-in-bc" },
      { label: "Carrying costs", href: "/guides/nelson-kootenay-home-carrying-costs" },
    ],
  },
  {
    title: "Second-home buyer",
    body: "Verify short-term rental rules, caretaker access, winterization, heat monitoring, snow removal, insurance, guest use, local trades, and whether the home is easy to own from a distance.",
    links: [
      { label: "Second-home guide", href: "/guides/buying-second-home-kootenays" },
      { label: "STR rules", href: "/guides/short-term-rental-rules-second-homes-bc" },
    ],
  },
  {
    title: "Remote purchase without a scouting trip",
    body: "Use video, mapping, document review, local eyes, inspection scope, title review, road and service checks, and a clear condition strategy so the first physical visit does not reveal the wrong surprise.",
    links: [
      { label: "Inspection guide", href: "/guides/home-inspection-rural-waterfront-kootenays" },
      { label: "Title and easements", href: "/guides/title-easements-rights-of-way-rural-bc" },
    ],
  },
];

const internationalResearchLinks = [
  { label: "Non-Canadian purchase rules", href: "https://laws-lois.justice.gc.ca/eng/acts/P-25.2/", note: "Federal law text for the Prohibition on the Purchase of Residential Property by Non-Canadians Act." },
  { label: "BC property transfer tax", href: "https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax", note: "General rates, further tax on high-value residential property, exemptions, and additional tax questions." },
  { label: "BC speculation and vacancy tax", href: "https://www2.gov.bc.ca/gov/content/taxes/speculation-vacancy-tax", note: "Annual declaration and taxable-area rules should be checked for second-home or non-resident ownership." },
  { label: "BC short-term rental rules", href: "https://www2.gov.bc.ca/gov/content/housing-tenancy/short-term-rentals", note: "Registration, provincial regulation, and local bylaw questions for homes that may be rented." },
  { label: "LTSA title search", href: "https://ltsa.ca/property-owners/how-can-i/search-for-a-title/", note: "Title, PID, legal description, and professional title-search support." },
  { label: "BCFSA real estate resources", href: "https://www.bcfsa.ca/public-resources/real-estate", note: "Consumer resources, licensed professional search, and transaction-risk guidance." },
  { label: "BC water licensing and rights", href: "https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/water-licensing-rights", note: "Important for waterfront, creek, well, irrigation, and rural properties." },
];

export default function InternationalBuyersPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="International and Second-Home Buyers"
        title="Buying from"
        emphasis="anywhere."
        lede="A simple path for non-Canadian buyers, second-home buyers, and out-of-town owners purchasing in Nelson or around Kootenay Lake."
        image={headerImages.procterLakeHouse}
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

      <SeoAnswerBlock
        eyebrow="Buyer Answer"
        question="Can Americans or international buyers buy property in Nelson BC?"
        answer="International and out-of-province buyers can explore Nelson BC and Kootenay Lake property, but the purchase should start with current legal, tax, financing, currency, and ownership advice. Luke helps remote and second-home buyers set the local team before the right property appears."
        terms={["buying property in nelson bc", "can americans buy property in nelson bc", "second home nelson bc"]}
        tone="ivory"
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
              Most out-of-town purchases become easier when the practical questions are handled early.
              Start here before you plan flights or shortlist homes.
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
                Make ownership easier
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  before closing.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              A second home feels better when the legal, financial, caretaker, and maintenance details are planned before the keys change hands.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-4">
            {absenteeDesk.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="luxury-card group overflow-hidden bg-[var(--color-bg)] transition-[transform,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:bg-[var(--color-surface)]">
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

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.88fr_1.12fr] md:items-end">
            <div>
              <Eyebrow>Buyer Pathways</Eyebrow>
              <SectionHeading className="mt-7">
                Different buyers need
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  different safeguards.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              A non-Canadian purchase, cross-border family move, second home, and fully remote purchase all need different pre-flight checks. The safest path is to solve those questions before a property becomes emotional.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {internationalPathways.map((pathway, index) => (
              <Reveal key={pathway.title} delay={(index % 2) * 70} className="luxury-card group flex h-full flex-col border border-[var(--color-line)] bg-[var(--color-bg)] p-8 transition-[transform,border-color,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[var(--color-surface)] sm:p-9">
                <span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  Path {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-serif text-[30px] font-light leading-[1.12] text-[var(--color-text)]">{pathway.title}</h3>
                <p className="m-0 mt-5 flex-1 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">{pathway.body}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {pathway.links.map((link) => (
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

      <GuideLinkPanel
        eyebrow="Remote Buyer Guide Path"
        title="Set the legal, tax, and ownership questions early."
        lede="These guides help out-of-town, second-home, and remote buyers understand purchase costs, title, conditions, ownership systems, and rules that can change the decision."
        tone="ivory"
        links={[
          { title: "Out-of-province buyers", body: "How buyers coming from elsewhere in Canada should think about costs, timing, financing, and conditions.", href: "/guides/out-of-province-buyers-buying-in-bc" },
          { title: "Remote buying guide", body: "A practical framework for virtual tours, local verification, documents, and offer conditions.", href: "/guides/remote-buying-kootenay-property" },
          { title: "Does speculation tax apply?", body: "How to start checking whether annual vacancy or speculation rules may affect ownership.", href: "/guides/does-speculation-tax-apply-nelson-kootenay-lake" },
        ]}
      />

      <section className="tone-ivory tonal-section border-t border-[var(--color-line)] py-20 md:py-24">
        <Container>
          <Reveal className="mb-12 max-w-[760px]">
            <Eyebrow>Outside Research</Eyebrow>
            <SectionHeading className="mt-7">
              The boring links
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                that protect the deal.
              </em>
            </SectionHeading>
            <SectionLede>
              These public resources are not a substitute for legal, tax, financing, or immigration advice. They are the right starting points before travel, offer timing, or money movement becomes urgent.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-3">
            {internationalResearchLinks.map((link) => (
              <Reveal key={link.href} className="luxury-card group bg-[var(--color-bg)] p-7 transition-[transform,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:bg-[var(--color-surface)]">
                <a href={link.href} target="_blank" rel="noreferrer" className="group block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Research Link</span>
                  <h3 className="m-0 mt-4 font-serif text-[25px] font-light leading-[1.16] text-[var(--color-text)] group-hover:text-[var(--color-bronze-light)]">{link.label}</h3>
                  <p className="m-0 mt-4 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">{link.note}</p>
                </a>
              </Reveal>
            ))}
          </div>
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
