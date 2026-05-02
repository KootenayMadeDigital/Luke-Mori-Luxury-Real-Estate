"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Brand } from "@/components/ui/BrandMark";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { contact } from "@/lib/data";

type NavGroup = {
  label: string;
  href?: string;
  items: { label: string; href: string; description?: string }[];
};

const navGroups: NavGroup[] = [
  {
    label: "Listings",
    href: "/listings",
    items: [
      { label: "All Active Listings", href: "/listings", description: "The current market — curated." },
      { label: "Luxury", href: "/listings/luxury", description: "Properties at the top of the Kootenay market." },
      { label: "Waterfront", href: "/listings/waterfront", description: "Lake, river, and dock-access estates." },
      { label: "Recently Sold", href: "/listings/sold", description: "A discreet ledger of placements." },
    ],
  },
  {
    label: "Buyers",
    href: "/buyers",
    items: [
      { label: "Buying with Luke", href: "/buyers", description: "The five-step process — and the things between." },
      { label: "International Buyers", href: "/buyers/international", description: "Non-Canadian principals, regulatory landscape." },
      { label: "Relocation", href: "/buyers/relocation", description: "Vancouver, Calgary, abroad — landing soft." },
    ],
  },
  {
    label: "Sellers",
    href: "/sellers",
    items: [
      { label: "Selling with Luke", href: "/sellers", description: "Cinematic film, editorial copy, controlled exposure." },
    ],
  },
  {
    label: "About Nelson",
    href: "/nelson",
    items: [
      { label: "Nelson", href: "/nelson/nelson", description: "The Queen City — Baker Street and the West Arm." },
      { label: "North Shore", href: "/nelson/north-shore", description: "Highway 3A — where the lake opens." },
      { label: "Balfour", href: "/nelson/balfour", description: "Where the West Arm meets the main lake." },
      { label: "Blewett", href: "/nelson/blewett", description: "Country acreage, ten minutes from town." },
      { label: "Slocan Valley", href: "/nelson/slocan-valley", description: "Riverfront, heritage timber, quiet wealth." },
    ],
  },
  {
    label: "About Luke",
    href: "/about",
    items: [
      { label: "About Luke", href: "/about", description: "Born and raised in Nelson. Founder, Luke Mori at Fair Realty." },
      { label: "Awards & Testimonials", href: "/testimonials", description: "Voted Best Luxury Broker BC, 2021 & 2024." },
      { label: "FAQ", href: "/faq", description: "The questions worth asking before you call." },
      { label: "Contact", href: "/contact", description: "Phone, email, office. Replies are personal." },
    ],
  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top contact bar — disappears when scrolled */}
      <div
        className={`relative z-[105] hidden border-b border-[var(--color-line)] bg-[#07080a] transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:block ${
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-5 py-2.5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-text-dim)]">
            Fair Realty · 191 Baker Street, Nelson, BC
          </span>
          <div className="flex items-center gap-6 text-[11px] tracking-[0.16em] text-[var(--color-text-muted)]">
            <a
              href={contact.emailHref}
              className="uppercase transition-colors hover:text-[var(--color-bronze-light)]"
            >
              <span className="text-[var(--color-bronze)]">E</span> {contact.email}
            </a>
            <span className="h-3 w-px bg-[var(--color-line-strong)]" />
            <a
              href={contact.phoneHref}
              className="uppercase transition-colors hover:text-[var(--color-bronze-light)]"
            >
              <span className="text-[var(--color-bronze)]">P</span> {contact.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "border-b border-[var(--color-line)] bg-[rgba(10,11,13,0.88)] py-3 backdrop-blur-[14px] backdrop-saturate-150"
            : "border-b border-transparent bg-[var(--color-bg)] py-4"
        }`}
        onMouseLeave={() => setOpenGroup(null)}
      >
        <div className="mx-auto flex w-full max-w-[1320px] items-center gap-8 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <Brand href="/" />

          <nav className="ml-auto hidden lg:flex" aria-label="Primary">
            <ul className="flex items-center gap-9">
              {navGroups.map((group) => (
                <li
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(group.label)}
                >
                  <Link
                    href={group.href ?? "#"}
                    className={`group relative flex items-center gap-1.5 py-2 text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
                      openGroup === group.label
                        ? "text-[var(--color-text)]"
                        : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                    }`}
                  >
                    {group.label}
                    <svg viewBox="0 0 12 12" aria-hidden className="size-2.5 opacity-60">
                      <path
                        d="M2 4 L6 8 L10 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 bg-[var(--color-bronze)] transition-[width,left] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:left-0 group-hover:w-full" />
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      openGroup === group.label
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="min-w-[320px] border border-[var(--color-line-strong)] bg-[#0e1013] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block border-l-2 border-transparent px-4 py-3 transition-[background,border-color] duration-200 hover:border-[var(--color-bronze)] hover:bg-[var(--color-surface)]"
                          onClick={() => setOpenGroup(null)}
                        >
                          <div className="font-serif text-[16px] font-normal text-[var(--color-text)]">
                            {item.label}
                          </div>
                          {item.description && (
                            <div className="mt-1 text-[12px] leading-[1.5] text-[var(--color-text-muted)]">
                              {item.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/contact"
            className="group ml-auto hidden shrink-0 items-center gap-2.5 rounded-[1px] border border-[var(--color-line-strong)] px-[18px] py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-text)] transition-[background,color,border-color] duration-200 hover:border-[var(--color-bronze)] hover:bg-[var(--color-bronze)] hover:text-[var(--color-bg)] sm:inline-flex lg:ml-6"
          >
            <span>Private Consultation</span>
            <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover:translate-x-[3px]">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="ml-auto inline-flex size-10 shrink-0 items-center justify-center border border-[var(--color-line-strong)] lg:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-[var(--color-text)]" />
              <span className="block h-px w-5 bg-[var(--color-text)]" />
              <span className="block h-px w-5 bg-[var(--color-text)]" />
            </span>
          </button>
        </div>

        <ScrollProgress />
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[200] flex flex-col bg-[var(--color-bg)] transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-4 sm:px-8">
          <Brand href="/" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="inline-flex size-10 items-center justify-center border border-[var(--color-line-strong)]"
          >
            <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
              <path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-8 sm:px-8">
          {navGroups.map((g) => (
            <div key={g.label} className="border-b border-[var(--color-line)] py-6">
              <Link
                href={g.href ?? "#"}
                onClick={() => setMobileOpen(false)}
                className="block font-serif text-[28px] font-light text-[var(--color-text)]"
              >
                {g.label}
              </Link>
              <ul className="mt-3 space-y-2">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-[14px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-bronze-light)]"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-8 space-y-3 border-t border-[var(--color-line)] pt-8 text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            <a href={contact.emailHref} className="block hover:text-[var(--color-bronze-light)]">
              <span className="text-[var(--color-bronze)]">E</span> {contact.email}
            </a>
            <a href={contact.phoneHref} className="block hover:text-[var(--color-bronze-light)]">
              <span className="text-[var(--color-bronze)]">P</span> {contact.phone}
            </a>
            <span className="block text-[var(--color-text-dim)]">{contact.office}</span>
          </div>
        </div>
      </div>
    </>
  );
}
