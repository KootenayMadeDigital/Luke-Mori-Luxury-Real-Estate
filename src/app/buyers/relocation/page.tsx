import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Relocation · Moving to Nelson & the Kootenays",
  description:
    "A relocation playbook for moving to Nelson, B.C. and the Kootenay Lake region. Schools, neighbourhoods, climate, healthcare, and the local context that makes the move actually work.",
};

const facets = [
  {
    title: "Schools",
    body: "Public, independent, and Waldorf options across Nelson and the surrounding valley. Selkirk College for post-secondary. School District 8 covers most of the region — strong, community-rooted, with multiple French-immersion streams.",
  },
  {
    title: "Healthcare",
    body: "Kootenay Lake Hospital in Nelson is the regional referral centre. Cranbrook (1.5 hours) and Trail (1 hour) for tertiary care. Family physician access varies — we'll be honest about waitlists and walk you through the local clinics.",
  },
  {
    title: "Climate",
    body: "Continental mountain climate. Long, sunlit summers (40 °C extremes; lake-cooled). Cold, snowy winters with 12 m of powder at Whitewater. Spring and fall are short and beautiful. Dress for elevation — the lake is two hundred metres lower than Uphill.",
  },
  {
    title: "Commute & Connectivity",
    body: "West Kootenay Regional Airport (Castlegar) for Vancouver and Calgary connections. Cranbrook Airport for further-afield travel. Cell coverage and fibre internet are strong in town and along the Highway 3A corridor; thinner in the deeper valleys.",
  },
  {
    title: "Daily Life",
    body: "Baker Street is the cultural and social spine — independent restaurants, the Capitol Theatre, the Civic, gallery openings, and farmers' markets. Most weekends the trail or the lake takes precedence.",
  },
  {
    title: "What to Test First",
    body: "Two trips, ideally — one in summer (lake, trail, garden energy), one in February (snow, ski, and the dark months). Nelson is loved best by people who've experienced both ends of the year.",
  },
];

export default function RelocationPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Relocation"
        title="A soft landing,"
        emphasis="in a careful place."
        lede="Most people who move here had been thinking about it for years. Once you commit, the work shifts to the practical: schools, healthcare, where to actually live, and how to spend the first ninety days. Here's the local intelligence."
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

      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-16 max-w-[760px]">
            <Eyebrow>The Six Things That Matter</Eyebrow>
            <SectionHeading className="mt-7">
              The questions
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                relocators actually ask.
              </em>
            </SectionHeading>
            <SectionLede>
              These are the six considerations that come up in nearly every relocation
              conversation. Honest answers, no salesman gloss.
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

      <InquiryCTA
        eyebrow="Relocation Inquiry"
        title="Two trips."
        emphasis="One conversation."
        body="Start with a 30-minute call from wherever you are now — we'll talk through your timeline, your needs, and what's worth doing on your first scouting visit. Then we'll plan the trips."
      />
    </PageLayout>
  );
}
