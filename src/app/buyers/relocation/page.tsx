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
  title: "Relocation · Moving to Nelson & the Kootenays",
  description:
    "A relocation guide for moving to Nelson, B.C. and the Kootenay Lake region: schools, neighbourhoods, climate, healthcare, and day-to-day fit.",
  path: "/buyers/relocation",
  image: "/og/relocation.png",
});

const facets = [
  {
    title: "Schools",
    body: "Public, independent, and Waldorf options across Nelson and the surrounding valley. Selkirk College for post-secondary. School District 8 covers most of the region, strong, community-rooted, with multiple French-immersion streams.",
  },
  {
    title: "Healthcare",
    body: "Kootenay Lake Hospital in Nelson is the regional referral centre. Cranbrook (1.5 hours) and Trail (1 hour) for tertiary care. Family physician access varies, we'll be honest about waitlists and walk you through the local clinics.",
  },
  {
    title: "Climate",
    body: "Continental mountain climate. Long, sunlit summers (40 °C extremes; lake-cooled). Cold, snowy winters with 12 m of powder at Whitewater. Spring and fall are short and beautiful. Dress for elevation, the lake is two hundred metres lower than Uphill.",
  },
  {
    title: "Commute & Connectivity",
    body: "West Kootenay Regional Airport (Castlegar) for Vancouver and Calgary connections. Cranbrook Airport for further-afield travel. Cell coverage and fibre internet are strong in town and along the Highway 3A area; thinner in the deeper valleys.",
  },
  {
    title: "Daily Life",
    body: "Baker Street is the cultural and social spine, independent restaurants, the Capitol Theatre, the Civic, gallery openings, and farmers' markets. Most weekends the trail or the lake takes precedence.",
  },
  {
    title: "What to Test First",
    body: "Two trips, ideally, one in summer (lake, trail, garden energy), one in February (snow, ski, and the dark months). Nelson is loved best by people who've experienced both ends of the year.",
  },
];

const scoutingRoutes = [
  {
    href: "/nelson/nelson",
    title: "Walkable Nelson",
    image: brandImages.bakerStreet,
    imageAlt: "Baker Street in Nelson BC",
    fit: "Best when daily life should orbit Baker Street, Lakeside Park, schools, restaurants, and a short town rhythm.",
    test: "Walk it in the rain, park twice, climb the grade, then decide if the charm still feels easy.",
  },
  {
    href: "/nelson/north-shore",
    title: "North Shore Privacy",
    image: brandImages.westArmKootenayLake,
    imageAlt: "West Arm of Kootenay Lake on the North Shore",
    fit: "Best when lake access, quieter neighbours, and Highway 3A privacy matter more than being in the city grid.",
    test: "Drive the route at school-run time, check shoreline exposure, and compare summer access with winter maintenance.",
  },
  {
    href: "/nelson/blewett",
    title: "Acreage Near Town",
    image: brandImages.taghumBeach,
    imageAlt: "Taghum Beach near Nelson BC",
    fit: "Best when you want timber, space, workshops, gardens, or family compound potential without losing Nelson completely.",
    test: "Measure the driveway, water system, outbuildings, road condition, and actual door-to-Baker time.",
  },
  {
    href: "/nelson/slocan-valley",
    title: "Retreat Country",
    image: brandImages.slocanLake,
    imageAlt: "Slocan Lake in British Columbia",
    fit: "Best when river frontage, timber, space, and distance from town are the point, not a compromise.",
    test: "Spend a full day there, not a drive-through. The valley rewards buyers who understand its pace.",
  },
];

export default function RelocationPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Relocation"
        title="A soft landing,"
        emphasis="before you buy."
        lede="Most people who move here have imagined it for years. The smart move is to test the practical parts early: schools, healthcare, winter roads, where to live, and how the first ninety days will actually feel."
        image={brandImages.bakerStreet}
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
              <Reveal key={f.title} delay={(i % 2) * 60} className="bg-[var(--color-bg)] p-9 sm:p-10">
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

      <InquiryCTA
        eyebrow="Relocation Inquiry"
        title="Two trips."
        emphasis="One local map."
        body="Start with a 30-minute call from wherever you are now. Talk through your timeline, needs, and what belongs on the first scouting visit. Then plan the routes."
      />
    </PageLayout>
  );
}
