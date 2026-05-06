import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Brand } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { contact, brandImages } from "@/lib/data";

const socialLinks = [
  { label: "YouTube", href: contact.social.youtube },
  { label: "Instagram", href: contact.social.instagram },
  { label: "Facebook", href: contact.social.facebook },
  { label: "X", href: contact.social.twitter },
];

const navLists: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Properties",
    links: [
      { label: "Active Listings", href: "/listings" },
      { label: "Compare Listings", href: "/listings#compare" },
      { label: "$1M+ Homes", href: "/listings/luxury" },
      { label: "Waterfront", href: "/listings/waterfront" },
      { label: "Acreage", href: "/listings/acreage" },
      { label: "Recently Sold", href: "/listings/sold" },
    ],
  },
  {
    heading: "Guidance",
    links: [
      { label: "For Buyers", href: "/buyers" },
      { label: "For Sellers", href: "/sellers" },
      { label: "Relocation", href: "/buyers/relocation" },
      { label: "International Buyers", href: "/buyers/international" },
      { label: "Guides", href: "/guides" },
      { label: "Quick Answers", href: "/faq" },
    ],
  },
  {
    heading: "Places",
    links: [
      { label: "Area Fit Quiz", href: "/buyers/area-fit-quiz" },
      { label: "Nelson", href: "/nelson/nelson" },
      { label: "North Shore", href: "/nelson/north-shore" },
      { label: "Balfour", href: "/nelson/balfour" },
      { label: "Kootenay Lake", href: "/kootenay-lake-waterfront-real-estate" },
      { label: "Slocan Valley", href: "/nelson/slocan-valley" },
    ],
  },
  {
    heading: "Luke Mori",
    links: [
      { label: "About Luke", href: "/about" },
      { label: "Awards & Testimonials", href: "/testimonials" },
      { label: "Property Films", href: "/#home-tours" },
      { label: "Nelson BC Realtor", href: "/nelson-bc-realtor" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const footerSignals = [
  { value: "$169M+", label: "Lifetime sales" },
  { value: "2021 & 2024", label: "Best Luxury Broker BC" },
  { value: "Nelson born", label: "Local market knowledge" },
];

export function ConceptFooter() {
  return (
    <footer className="tone-dark tonal-section relative border-t border-[var(--color-line)] bg-[#050506] pt-16 md:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-bronze-light),transparent)] opacity-55" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden>
        <div className="absolute left-[8%] top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(176,138,91,0.28),transparent_66%)] blur-3xl" />
        <div className="absolute bottom-24 right-[8%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(132,162,166,0.18),transparent_68%)] blur-3xl" />
      </div>

      <Container className="relative">
        <Reveal className="rounded-[1.75rem] border border-[var(--color-line-strong)] bg-[rgba(212,184,150,0.045)] p-1.5 shadow-[0_36px_110px_-76px_rgba(0,0,0,0.95)]">
          <div className="overflow-hidden rounded-[calc(1.75rem-0.375rem)] border border-[rgba(255,247,235,0.06)] bg-[linear-gradient(135deg,rgba(19,21,23,0.94),rgba(10,11,13,0.98)_58%,rgba(31,24,18,0.92))] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] sm:p-7 lg:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
              <div>
                <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[var(--color-line)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze-light)]">
                  <span className="size-1.5 rounded-full bg-[var(--color-bronze)]" />
                  Nelson and Kootenay Lake real estate
                </div>
                <h2 className="m-0 max-w-[680px] font-serif font-light leading-[1.02] tracking-[-0.018em] text-[var(--color-text)] [font-size:clamp(32px,4.8vw,62px)]">
                  Move with a clear plan
                  <br />
                  in Nelson and Kootenay Lake.
                </h2>
                <p className="m-0 mt-5 max-w-[560px] text-[15px] leading-[1.72] text-[var(--color-text-muted)]">
                  Clear local guidance for lakefront, acreage, view homes, relocation, and selling decisions in the Kootenays.
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-[var(--color-line)] bg-[rgba(255,247,235,0.035)] p-5 sm:p-6">
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">Direct line</p>
                <div className="mt-5 space-y-3 text-[18px] font-medium text-[var(--color-text)]">
                  <a href={contact.phoneHref} className="block transition-colors hover:text-[var(--color-bronze-light)]">{contact.phone}</a>
                  <a href={contact.emailHref} className="block transition-colors hover:text-[var(--color-bronze-light)]">{contact.email}</a>
                </div>
                <p className="m-0 mt-5 text-[13px] leading-[1.65] text-[var(--color-text-muted)]">{contact.office}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact#consultation" variant="primary" full>
                    Talk to Luke
                  </Button>
                  <Button href="/guides" variant="ghost" full>
                    Read Guides
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[1.6rem] border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-3">
          {footerSignals.map((signal) => (
            <div key={signal.label} className="bg-[rgba(10,11,13,0.82)] p-6 sm:p-7">
              <p className="m-0 font-serif text-[34px] font-light italic leading-none text-[var(--color-text)]">{signal.value}</p>
              <p className="m-0 mt-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">{signal.label}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-[var(--color-line)] pt-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <Reveal>
            <Brand href="/" />
            <p className="mt-6 max-w-[360px] text-[15px] leading-[1.78] text-[var(--color-text-muted)]">
              Nelson and Kootenay Lake real estate guidance for people who want clear advice, local knowledge, and a thoughtful plan. {contact.brokerage}.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">Brokerage</span>
              <div className="relative h-8 w-32 opacity-80">
                <Image src={brandImages.fairRealty} alt="Fair Realty" fill sizes="140px" className="object-contain object-left" />
              </div>
            </div>

            <div className="mt-9">
              <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">Social</span>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--color-line)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)] transition-[border-color,color,background,transform] duration-500 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:border-[var(--color-bronze)] hover:bg-[rgba(212,184,150,0.07)] hover:text-[var(--color-bronze-light)]">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {navLists.map((list) => (
                <Reveal key={list.heading}>
                  <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">{list.heading}</span>
                  <ul className="space-y-3">
                    {list.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-[14px] leading-none text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mx-auto mt-14 max-w-[900px] border-t border-[var(--color-line)] pt-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
            <span className="size-1.5 rounded-full bg-[var(--color-bronze)]" />
            Kootenay Made Digital
          </div>
          <p className="m-0 text-[14px] leading-[1.75] text-[var(--color-text-muted)]">
            This website is a speculative concept by Kootenay Made Digital, created to demonstrate a higher standard of luxury real estate web experience for the Nelson and Kootenay Lake market. It is not affiliated with, or endorsed by, Luke Mori. Property descriptions, photography, and statistics shown are sourced from publicly available material on lukemori.com to demonstrate concept fidelity.
          </p>
          <div className="mt-7">
            <Button href="mailto:hello@kootenaymade.ca" variant="ghost">
              Build a private real estate experience for your brand
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-[var(--color-line)] py-7">
          <div className="flex flex-col gap-2 text-[11px] tracking-[0.05em] text-[var(--color-text-dim)] md:flex-row md:items-center md:justify-between md:gap-6">
            <span>© 2026 Concept · Kootenay Made Digital</span>
            <span>Listings, testimonials, and photography sourced from lukemori.com under fair-comment concept use.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
