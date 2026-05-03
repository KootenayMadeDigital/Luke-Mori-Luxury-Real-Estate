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
    label: "Clients",
    href: "/buyers",
    items: [
      { label: "For Buyers", href: "/buyers", description: "Private access, lifestyle fit, and area-led search strategy." },
      { label: "For Sellers", href: "/sellers", description: "Pricing, launch sequence, qualified showings, and discretion." },
      { label: "Relocation", href: "/buyers/relocation", description: "Nelson, North Shore, schools, seasons, and scouting routes." },
      { label: "International Buyers", href: "/buyers/international", description: "Foreign-buyer context, advisors, wires, and absentee ownership." },
    ],
  },
  {
    label: "Properties",
    href: "/listings",
    items: [
      { label: "Featured Estates", href: "/#estates", description: "The active portfolio wall on the concept page." },
      { label: "All Active Listings", href: "/listings", description: "The current market, carefully organized." },
      { label: "Luxury Listings", href: "/listings/luxury", description: "Properties at the top of the Kootenay market." },
      { label: "Waterfront Listings", href: "/listings/waterfront", description: "Lake, river, and dock-access estates." },
      { label: "Recently Sold", href: "/listings/sold", description: "A discreet ledger of placements." },
    ],
  },
  {
    label: "Places",
    href: "/nelson",
    items: [
      { label: "Nelson", href: "/nelson/nelson", description: "The Queen City, Baker Street, and the West Arm." },
      { label: "North Shore", href: "/nelson/north-shore", description: "Highway 3A, where the lake opens." },
      { label: "Balfour", href: "/nelson/balfour", description: "Where the West Arm meets the main lake." },
      { label: "Blewett", href: "/nelson/blewett", description: "Country acreage, ten minutes from town." },
      { label: "Slocan Valley", href: "/nelson/slocan-valley", description: "Riverfront, heritage timber, quiet wealth." },
    ],
  },
  {
    label: "Principal",
    href: "/about",
    items: [
      { label: "About Luke", href: "/about", description: "Born and raised in Nelson. Founder, Luke Mori at Fair Realty." },
      { label: "Awards & Testimonials", href: "/testimonials", description: "Voted Best Luxury Broker BC, 2021 and 2024." },
      { label: "YouTube Home Tours", href: "/#home-tours", description: "Property films, tours, and active listing media." },
      { label: "FAQ", href: "/faq", description: "The questions worth asking before you call." },
      { label: "Contact", href: "/contact", description: "Phone, email, office. Replies are personal." },
    ],
  },
];

function Chevron() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden className="size-2.5 opacity-60">
      <path
        d="M2 4 L6 8 L10 4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.82);
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
      <div className="fixed inset-x-0 top-0 z-[110] border-b border-[rgba(212,184,150,0.18)] bg-[rgba(7,8,10,0.78)] shadow-[0_10px_34px_-24px_rgba(0,0,0,0.95)] backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-8 w-full max-w-[1320px] items-center justify-center gap-4 px-4 sm:justify-between sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <span className="hidden min-w-0 truncate text-[9px] font-semibold uppercase tracking-[0.3em] text-[rgba(245,239,229,0.78)] sm:block">
            <span className="text-[var(--color-bronze-light)]">Private office</span>
            <span className="mx-2 text-[rgba(212,184,150,0.38)]">/</span>
            {contact.office}
          </span>
          <div className="flex min-w-0 items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[rgba(245,239,229,0.82)] sm:gap-5 sm:text-[10px]">
            <a
              href={contact.emailHref}
              className="truncate transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[var(--color-bronze-light)]"
            >
              <span className="text-[var(--color-bronze-light)]">E</span> {contact.email}
            </a>
            <span className="h-3 w-px shrink-0 bg-[rgba(212,184,150,0.3)]" />
            <a
              href={contact.phoneHref}
              className="whitespace-nowrap transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[var(--color-bronze-light)]"
            >
              <span className="text-[var(--color-bronze-light)]">P</span> {contact.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className="fixed inset-x-0 top-10 z-[100] px-3 transition-[top,transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-5"
        onMouseLeave={() => setOpenGroup(null)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpenGroup(null);
            setMobileOpen(false);
          }
        }}
      >
        <div
          className={`relative mx-auto max-w-[1320px] rounded-full border p-1.5 shadow-[0_24px_70px_-46px_rgba(0,0,0,0.95)] backdrop-blur-xl backdrop-saturate-150 transition-[border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.82)]"
              : "border-[rgba(212,184,150,0.18)] bg-[rgba(10,11,13,0.16)]"
          }`}
        >
          <div className={`relative flex min-h-[64px] items-center gap-6 rounded-full px-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-5 lg:px-6 ${
            scrolled ? "bg-[rgba(10,11,13,0.78)]" : "bg-[rgba(10,11,13,0.08)]"
          }`}>
            <Brand href="/" />

            <nav className="ml-auto hidden lg:flex" aria-label="Primary">
              <ul className="flex items-center gap-2">
                {navGroups.map((group) => (
                  <li
                    key={group.label}
                    className="relative"
                    onMouseEnter={() => setOpenGroup(group.label)}
                  >
                    <Link
                      href={group.href ?? "#"}
                      onFocus={() => setOpenGroup(group.label)}
                      className={`group relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-[background,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        openGroup === group.label
                          ? "bg-[rgba(212,184,150,0.09)] text-[var(--color-text)]"
                          : "text-[var(--color-text-muted)] hover:bg-[rgba(212,184,150,0.06)] hover:text-[var(--color-text)]"
                      }`}
                    >
                      {group.label}
                      <Chevron />
                    </Link>

                    <div
                      className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        openGroup === group.label
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="rounded-[1.6rem] border border-[var(--color-line-strong)] bg-[rgba(212,184,150,0.055)] p-1.5 shadow-[0_34px_82px_-44px_rgba(0,0,0,0.95)]">
                        <div className="min-w-[344px] rounded-[calc(1.6rem-0.375rem)] bg-[#0e1013] p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                          {group.items.map((item) => {
                            const external = item.href.startsWith("http");
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noreferrer" : undefined}
                                className="block rounded-[1.1rem] px-4 py-3.5 transition-[background,color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1 hover:bg-[rgba(212,184,150,0.07)]"
                                onFocus={() => setOpenGroup(group.label)}
                                onClick={() => setOpenGroup(null)}
                              >
                                <div className="font-serif text-[18px] font-light leading-[1.1] text-[var(--color-text)]">
                                  {item.label}
                                </div>
                                {item.description && (
                                  <div className="mt-1.5 text-[12px] leading-[1.5] text-[var(--color-text-muted)]">
                                    {item.description}
                                  </div>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/#consult"
              className="group ml-auto hidden shrink-0 items-center gap-3 rounded-full border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.025)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-[background,color,border-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] hover:border-[var(--color-bronze)] hover:bg-[var(--color-bronze)] hover:text-[var(--color-button-text)] sm:inline-flex lg:ml-4"
            >
              <span>Private Consultation</span>
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-[rgba(212,184,150,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                <svg viewBox="0 0 16 16" aria-hidden className="size-[13px]">
                  <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                </svg>
              </span>
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((value) => !value)}
              className="relative ml-auto inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-line-strong)] transition-[border-color,background] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--color-bronze)] hover:bg-[rgba(212,184,150,0.07)] lg:hidden"
            >
              <span className="relative block h-4 w-5" aria-hidden>
                <span
                  className={`absolute left-0 top-0 block h-px w-5 bg-[var(--color-text)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mobileOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] block h-px w-5 bg-[var(--color-text)] transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 block h-px w-5 bg-[var(--color-text)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>

            <ScrollProgress />
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        role="navigation"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-[95] bg-[rgba(10,11,13,0.96)] px-5 pb-8 pt-28 backdrop-blur-2xl transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-8 lg:hidden ${
          mobileOpen ? "pointer-events-auto visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-3 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="grid gap-4">
            {navGroups.map((g, groupIndex) => (
              <div
                key={g.label}
                className={`rounded-[1.4rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.025)] p-5 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: mobileOpen ? `${120 + groupIndex * 70}ms` : "0ms" }}
              >
                <Link
                  href={g.href ?? "#"}
                  onClick={() => setMobileOpen(false)}
                  className="block font-serif text-[30px] font-light leading-none text-[var(--color-text)]"
                >
                  {g.label}
                </Link>
                <ul className="mt-4 grid gap-2">
                  {g.items.map((it) => {
                    const external = it.href.startsWith("http");
                    return (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-full px-3 py-2 text-[13px] font-medium text-[var(--color-text-muted)] transition-[background,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[rgba(212,184,150,0.07)] hover:text-[var(--color-bronze-light)]"
                        >
                          {it.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

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
