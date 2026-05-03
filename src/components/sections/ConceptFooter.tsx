import Image from "next/image";
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
    heading: "Listings",
    links: [
      { label: "Featured Estates", href: "/#estates" },
      { label: "Active Listings", href: "/listings" },
      { label: "Luxury", href: "/listings/luxury" },
      { label: "Waterfront", href: "/listings/waterfront" },
      { label: "Recently Sold", href: "/listings/sold" },
    ],
  },
  {
    heading: "Buyers & Sellers",
    links: [
      { label: "For Buyers", href: "/buyers" },
      { label: "For Sellers", href: "/sellers" },
      { label: "Relocation", href: "/buyers/relocation" },
      { label: "International Buyers", href: "/buyers/international" },
    ],
  },
  {
    heading: "About Nelson",
    links: [
      { label: "Nelson", href: "/nelson/nelson" },
      { label: "North Shore", href: "/nelson/north-shore" },
      { label: "Balfour", href: "/nelson/balfour" },
      { label: "Blewett", href: "/nelson/blewett" },
      { label: "Slocan Valley", href: "/nelson/slocan-valley" },
    ],
  },
  {
    heading: "About Luke",
    links: [
      { label: "About", href: "/about" },
      { label: "Awards & Testimonials", href: "/testimonials" },
      { label: "YouTube Home Tours", href: "/#home-tours" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function ConceptFooter() {
  return (
    <footer className="relative border-t border-[var(--color-line)] bg-[#07080a] pt-24 md:pt-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px opacity-40"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-bronze) 50%, transparent 100%)",
        }}
      />

      <Container>
        {/* KMD concept block */}
        <Reveal className="mx-auto mb-20 max-w-[820px] text-center md:mb-24">
          <div className="mb-7 inline-flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
            <span className="size-1.5 rounded-full bg-[var(--color-bronze)]" />
            Kootenay Made Digital
          </div>
          <h2 className="m-0 mb-6 font-serif font-light leading-[1.15] tracking-[-0.01em] [font-size:clamp(26px,3.6vw,42px)]">
            Built as a concept by{" "}
            <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
              Kootenay Made Digital.
            </em>
          </h2>
          <p className="m-0 mb-9 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
            A speculative concept demonstrating a higher standard of luxury real estate web
            experience for the Nelson and Kootenay Lake market. Not affiliated with, or endorsed
            by, Luke Mori. Property descriptions, photography, and statistics shown are sourced
            from publicly available material on lukemori.com to demonstrate concept fidelity.
          </p>
          <Button href="mailto:hello@kootenaymade.ca" variant="primary">
            Build a private luxury experience for your brand
          </Button>
        </Reveal>

        {/* Brand + nav grid */}
        <div className="grid grid-cols-1 gap-12 border-t border-[var(--color-line)] pt-16 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Brand href="/" />
            <p className="mt-6 max-w-[320px] text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
              Nelson &amp; Kootenay Lake luxury real estate, represented with discretion, taste,
              and local intelligence. {contact.brokerage}.
            </p>
            <div className="mt-7 space-y-2.5 text-[13px] tracking-[0.02em]">
              <a
                href={contact.emailHref}
                className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]"
              >
                {contact.email}
              </a>
              <a
                href={contact.phoneHref}
                className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]"
              >
                {contact.phone}
              </a>
              <span className="block text-[var(--color-text-muted)]">{contact.office}</span>
            </div>
            <div className="mt-7 flex items-center gap-5">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                Brokerage
              </span>
              <div className="relative h-7 w-28 opacity-70">
                <Image
                  src={brandImages.fairRealty}
                  alt="Fair Realty"
                  fill
                  sizes="120px"
                  className="object-contain object-left"
                />
              </div>
            </div>

            <div className="mt-8">
              <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                Social
              </span>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[var(--color-line)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)] transition-[border-color,color,background] duration-500 hover:border-[var(--color-bronze)] hover:bg-[rgba(212,184,150,0.07)] hover:text-[var(--color-bronze-light)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {navLists.map((list) => (
              <div key={list.heading}>
                <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                  {list.heading}
                </span>
                <ul className="space-y-2">
                  {list.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="text-[13px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--color-line)] pt-7 pb-8">
          <div className="flex flex-col gap-2 text-[11px] tracking-[0.05em] text-[var(--color-text-dim)] md:flex-row md:items-center md:justify-between md:gap-6">
            <span>© 2026 Concept · Kootenay Made Digital, Speculative work, not a live site</span>
            <span>
              Listings, testimonials, and photography sourced from lukemori.com under fair-comment concept use.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
