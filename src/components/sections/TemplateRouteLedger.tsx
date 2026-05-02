import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { featuredListings } from "@/lib/listings";

const firstFeature = featuredListings[0];

const routeLedger = [
  {
    href: "/sellers",
    label: "Seller acquisition",
    title: "A private launch page for serious owners.",
    proof: "Valuation, editorial positioning, film, qualified buyer rollout, showings, negotiation, and discretion.",
  },
  {
    href: "/buyers",
    label: "Buyer discovery",
    title: "Lifestyle routing before listing filters.",
    proof: "Lakefront, walkable Nelson, North Shore privacy, acreage, ski rhythm, relocation, and absentee ownership.",
  },
  {
    href: "/nelson",
    label: "Area authority",
    title: "Local search pages with human judgement.",
    proof: "Nelson, North Shore, Balfour, Blewett, and Slocan Valley each get their own decision context.",
  },
  {
    href: "/listings/luxury",
    label: "Listing index",
    title: "A premium catalog that still works at scale.",
    proof: "Luxury, waterfront, sold, and full-market paths keep hundreds of listings organized without feeling like a portal.",
  },
  {
    href: firstFeature ? `/listings/${firstFeature.slug}` : "/listings",
    label: "Property editorial",
    title: "Every listing can become a property brief.",
    proof: "Real listing data, real images, source facts, room details, gallery, due diligence prompts, and private showing intent.",
  },
  {
    href: "/contact",
    label: "Inquiry routing",
    title: "The form behaves like a private office.",
    proof: "Seller, buyer, relocation, second-home, and brokerage intent are separated before the first reply.",
  },
];

export function TemplateRouteLedger() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-28 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-screen"
        style={{ backgroundImage: "url('/generated/kootenay-contour-texture.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,11,13,0.96),rgba(10,11,13,0.72),rgba(10,11,13,0.96))]" aria-hidden />
      <Container className="relative z-10">
        <Reveal className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.84fr_1fr] lg:items-end">
          <div>
            <Eyebrow>KMD Vertical Template</Eyebrow>
            <SectionHeading className="mt-7">
              Built as a system,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                not a homepage.
              </em>
            </SectionHeading>
          </div>
          <SectionLede align="right">
            For agents and brokerages evaluating Kootenay Made Digital, the concept is deliberately modular: seller pages, buyer journeys, area authority, listing editorial, proof architecture, and private inquiry routing all work together.
          </SectionLede>
        </Reveal>

        <div className="overflow-hidden border border-[var(--color-line)]">
          {routeLedger.map((route, i) => (
            <Reveal
              key={route.href + route.label}
              className="grid grid-cols-1 gap-5 border-b border-[var(--color-line)] bg-[var(--color-bg)] p-7 last:border-b-0 transition-colors hover:bg-[var(--color-surface)] md:grid-cols-[0.58fr_0.95fr_1.35fr_auto] md:items-center md:p-8"
              delay={(i % 6) * 55}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                {route.label}
              </span>
              <h3 className="m-0 font-serif text-[26px] font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                {route.title}
              </h3>
              <p className="m-0 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                {route.proof}
              </p>
              <Link
                href={route.href}
                className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)] transition-colors hover:text-[var(--color-bronze-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-bronze-light)]"
              >
                Open route
                <svg viewBox="0 0 16 16" aria-hidden className="size-[14px]">
                  <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
