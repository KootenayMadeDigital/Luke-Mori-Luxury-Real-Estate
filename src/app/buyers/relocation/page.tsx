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
import { siteImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Moving to Nelson BC · Relocation Real Estate Guide",
  description:
    "Moving to Nelson BC? Compare neighbourhoods, schools, healthcare, winter roads, Kootenay Lake lifestyle, relocation real estate, and first scouting routes.",
  path: "/buyers/relocation",
  image: "/og/relocation.png",
});

const facets = [
  {
    title: "Schools",
    body: "Nelson and the surrounding valley have public, independent, and Waldorf options, plus Selkirk College nearby. Luke can help you understand which areas fit your school routine before you focus on homes."
  },
  {
    title: "Healthcare",
    body: "Kootenay Lake Hospital serves Nelson, with larger care options in Trail and Cranbrook. Family doctor access can vary, so it is worth asking practical questions early."
  },
  {
    title: "Climate",
    body: "Nelson has warm summers, snowy winters, and real seasonal contrast. Visit in more than one season if you can, especially if winter roads or ski life matter."
  },
  {
    title: "Commute & Connectivity",
    body: "Castlegar and Cranbrook handle regional travel. Internet and cell service are strong in town and along main corridors, but deeper valleys should be checked address by address."
  },
  {
    title: "Daily Life",
    body: "Baker Street gives Nelson its social centre: restaurants, theatre, galleries, markets, and daily errands. Weekends usually pull people toward the lake, trails, or Whitewater."
  },
  {
    title: "What to Test First",
    body: "If possible, visit once in summer and once in winter. Nelson is easier to choose confidently when you have felt both the lake season and the snow season."
  },
];

const scoutingRoutes = [
  {
    href: "/nelson/nelson",
    title: "Walkable Nelson",
    image: siteImages.relocationBaker,
    imageAlt: "Baker Street in Nelson BC",
    fit: "Best when daily life should orbit Baker Street, Lakeside Park, schools, restaurants, and a short town rhythm.",
    test: "Walk it in the rain, park twice, climb the grade, then decide if the charm still feels easy.",
  },
  {
    href: "/nelson/north-shore",
    title: "North Shore Privacy",
    image: siteImages.relocationNorthshore,
    imageAlt: "West Arm of Kootenay Lake on the North Shore",
    fit: "Best when lake access, quieter neighbours, and Highway 3A privacy matter more than being in the city grid.",
    test: "Drive the route at school-run time, check shoreline exposure, and compare summer access with winter maintenance.",
  },
  {
    href: "/nelson/blewett",
    title: "Acreage Near Town",
    image: siteImages.relocationBlewett,
    imageAlt: "Taghum Beach near Nelson BC",
    fit: "Best when you want timber, space, workshops, gardens, or family compound potential without losing Nelson completely.",
    test: "Measure the driveway, water system, outbuildings, road condition, and actual door-to-Baker time.",
  },
  {
    href: "/nelson/slocan-valley",
    title: "Retreat Country",
    image: siteImages.relocationSlocan,
    imageAlt: "Slocan Lake in British Columbia",
    fit: "Best when river frontage, timber, space, and distance from town are the point, not a compromise.",
    test: "Spend a full day there, not a drive-through. The valley rewards buyers who understand its pace.",
  },
];

const relocationTimeline = [
  {
    title: "Before the first trip",
    body: "Set budget, mortgage comfort, work-from-home needs, school or healthcare priorities, winter tolerance, and whether town, lake, acreage, or village life is the real goal.",
    links: [
      { label: "Area quiz", href: "/buyers/area-fit-quiz" },
      { label: "Best areas", href: "/guides/best-areas-to-live-nelson-bc" },
    ],
  },
  {
    title: "During the scouting trip",
    body: "Drive the routes, park downtown, test grocery and school runs, check cell service, walk the grade, visit at night, compare winter road reality, and see more than one area in the same day.",
    links: [
      { label: "Nelson areas", href: "/nelson" },
      { label: "Compare listings", href: "/listings#compare" },
    ],
  },
  {
    title: "Before writing an offer",
    body: "Confirm financing, insurance, title, inspection scope, water, septic, strata, access, school boundaries, commute reality, internet, and what professional advice is needed before conditions are removed.",
    links: [
      { label: "Buying with conditions", href: "/guides/buying-with-conditions-bc-real-estate" },
      { label: "Inspection guide", href: "/guides/home-inspection-rural-waterfront-kootenays" },
    ],
  },
  {
    title: "First ninety days here",
    body: "Plan doctors, schools, snow tires, trades, utilities, insurance, waste and recycling, emergency routes, childcare or elder care, recreation passes, and the local contacts that make the move settle faster.",
    links: [
      { label: "Moving to Nelson", href: "/guides/moving-to-nelson-bc" },
      { label: "Second homes", href: "/guides/buying-second-home-kootenays" },
    ],
  },
];

const relocationResearchLinks = [
  { label: "School District 8 Kootenay Lake", href: "https://www.sd8.bc.ca/", note: "School news, district information, board updates, and public-school starting point." },
  { label: "Kootenay Lake Hospital", href: "https://www.interiorhealth.ca/locations/kootenay-lake-hospital", note: "Interior Health lists Nelson hospital services including emergency, surgical, and inpatient care." },
  { label: "DriveBC", href: "https://www.drivebc.ca/", note: "Road conditions, highway events, webcams, mountain passes, and winter travel checks." },
  { label: "City of Nelson", href: "https://www.nelson.ca/", note: "City services, recycling, notifications, parking, local government, and community links." },
  { label: "Regional District of Central Kootenay", href: "https://www.rdck.ca/", note: "Regional services, rural property questions, recreation, emergency information, and local governance." },
  { label: "FireSmart BC", href: "https://firesmartbc.ca/", note: "Wildfire preparedness and home assessment resources for forest-edge and rural living." },
];

export default function RelocationPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Relocation"
        title="A soft landing,"
        emphasis="before you buy."
        lede="Most people who move here have imagined it for years. The smart move is to test the practical parts early: schools, healthcare, winter roads, where to live, and how the first ninety days will actually feel."
        image={siteImages.relocationHeaderBaker}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Buyers", href: "/buyers" },
          { label: "Relocation" },
        ]}
        meta={[
          { value: "1-2 yr", label: "Typical Timeline" },
          { value: "Vancouver +", label: "Most Common Origin" },
          { value: "Both Seasons", label: "Recommended Visits" },
          { value: "Personal", label: "Introductions" },
        ]}
      />

      <SeoAnswerBlock
        eyebrow="Relocation Answer"
        question="Is Nelson BC a good place to live and buy real estate?"
        answer="Nelson works best for buyers who want a real mountain town with restaurants, schools, lake access, arts, trails, and Whitewater skiing. The practical decision is whether the neighbourhood, winter routine, healthcare access, commute, and first ninety days match the life you are planning."
        terms={["moving to nelson bc", "is nelson bc a good place to live", "nelson bc relocation"]}
        tone="ivory"
      />

      <section className="tone-lake tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[760px]">
            <Eyebrow>The Six Checks That Matter</Eyebrow>
            <SectionHeading className="mt-7">
              The questions
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                relocators actually ask.
              </em>
            </SectionHeading>
            <SectionLede>
              These are the six considerations that come up in nearly every relocation
              conversation. Honest answers. No gloss.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] sm:grid-cols-2">
            {facets.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60} className="luxury-card group bg-[var(--color-bg)] p-9 transition-[transform,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:bg-[var(--color-surface)] sm:p-10">
                <h3 className="m-0 mb-4 font-serif text-[24px] font-normal leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] sm:text-[28px]">
                  {f.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                  {f.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <Eyebrow>First Scouting Route</Eyebrow>
              <SectionHeading className="mt-7">
                Tour the life,
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  not just the house.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Test the daily pattern before the offer: school rhythm, winter roads, groceries, lake access, downtown time, healthcare, and the drive home after dark.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {scoutingRoutes.map((route, i) => (
              <Reveal key={route.title} delay={(i % 2) * 70}>
                <Link
                  href={route.href}
                  className="luxury-card group flex h-full flex-col overflow-hidden border border-[var(--color-line)] bg-[var(--color-bg)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[var(--color-bronze)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-surface)]">
                    <Image
                      src={route.image}
                      alt={route.imageAlt}
                      fill
                      sizes="(min-width: 768px) 46vw, 100vw"
                      className="luxury-media object-cover opacity-92 saturate-[1.08]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.04),rgba(10,11,13,0.58))]" aria-hidden />
                    <span className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze-light)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                      Area fit {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-8 sm:p-9">
                    <h3 className="m-0 mb-4 font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                      {route.title}
                    </h3>
                    <p className="m-0 mb-5 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                      {route.fit}
                    </p>
                    <p className="m-0 mb-7 flex-1 border-l border-[var(--color-bronze)] pl-5 text-[13px] leading-[1.65] text-[var(--color-text-dim)]">
                      Test: {route.test}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                      Study the area
                      <svg viewBox="0 0 16 16" aria-hidden className="luxury-arrow size-[14px]">
                        <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

        </Container>
      </section>

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.88fr_1.12fr] md:items-end">
            <div>
              <Eyebrow>Relocation Timeline</Eyebrow>
              <SectionHeading className="mt-7">
                The move should feel
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  less mysterious.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              Relocation buyers need more than listings. They need a plan for scouting, decision-making, professional checks, and the first practical months after arrival.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2">
            {relocationTimeline.map((step, index) => (
              <Reveal key={step.title} delay={(index % 2) * 70} className="luxury-card group flex h-full flex-col bg-[var(--color-bg)] p-8 transition-[transform,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:bg-[var(--color-surface)] sm:p-9">
                <span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                  Stage {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-serif text-[30px] font-light leading-[1.12] text-[var(--color-text)]">{step.title}</h3>
                <p className="m-0 mt-5 flex-1 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">{step.body}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {step.links.map((link) => (
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
        eyebrow="Relocation Guide Path"
        title="Choose the area before the address."
        lede="Relocation buyers need a plain read on neighbourhoods, daily routine, costs, winter, and whether the property still works after the first beautiful weekend."
        tone="office"
        links={[
          { title: "Moving to Nelson", body: "A practical relocation guide for daily life, services, seasons, and the first scouting visit.", href: "/guides/moving-to-nelson-bc" },
          { title: "Best areas to live in Nelson", body: "Compare town, lake, acreage, and nearby communities by the life they support.", href: "/guides/best-areas-to-live-nelson-bc" },
          { title: "Second homes in the Kootenays", body: "Caretaker plans, winterization, insurance, guests, and remote ownership questions.", href: "/guides/buying-second-home-kootenays" },
        ]}
      />

      <section className="tone-ivory tonal-section border-t border-[var(--color-line)] py-20 md:py-24">
        <Container>
          <Reveal className="mb-12 max-w-[760px]">
            <Eyebrow>Relocation Research</Eyebrow>
            <SectionHeading className="mt-7">
              Check the life
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                outside the listing.
              </em>
            </SectionHeading>
            <SectionLede>
              Use these public resources to research schools, healthcare, winter roads, city services, rural services, and wildfire preparation before the move becomes real.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-3">
            {relocationResearchLinks.map((link) => (
              <Reveal key={link.href} className="luxury-card group bg-[var(--color-bg)] p-7 transition-[transform,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:bg-[var(--color-surface)]">
                <a href={link.href} target="_blank" rel="noreferrer" className="group block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Local Resource</span>
                  <h3 className="m-0 mt-4 font-serif text-[25px] font-light leading-[1.16] text-[var(--color-text)] group-hover:text-[var(--color-bronze-light)]">{link.label}</h3>
                  <p className="m-0 mt-4 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">{link.note}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Relocation Inquiry"
        title="Two trips."
        emphasis="One local map."
        body="Start with a 30-minute call from wherever you are now. Talk through your timeline, needs, and what belongs on the first scouting visit. Then plan the routes."
      />
    </PageLayout>
  );
}
