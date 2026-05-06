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
      { label: "For Buyers", href: "/buyers", description: "Listings, daily-life fit, and fewer wrong tours." },
      { label: "For Sellers", href: "/sellers", description: "Pricing, sale plan, serious showings, and privacy." },
      { label: "Relocation", href: "/buyers/relocation", description: "Nelson, North Shore, schools, seasons, and scouting routes." },
      { label: "International Buyers", href: "/buyers/international", description: "Foreign-buyer questions, advisors, financing, and remote ownership." }
    ],
  },
  {
    label: "Guides",
    href: "/guides",
    items: [
      { label: "All Guides", href: "/guides", description: "Clear buyer, seller, and property review guides for Kootenay real estate." },
      { label: "Buyer Guides", href: "/guides#buyer-guides", description: "Waterfront, relocation, second homes, and offer questions." },
      { label: "Property Review", href: "/guides#due-diligence", description: "Acreage, strata, access, water, winter, and rural systems." },
      { label: "Seller Guides", href: "/guides#seller-guides", description: "Preparation, pricing, marketing, and showing quality." },
    ],
  },
  {
    label: "Properties",
    href: "/listings",
    items: [
      { label: "All Active Listings", href: "/listings", description: "The current market, easier to compare." },
      { label: "Luxury Listings", href: "/listings/luxury", description: "Properties at the top of the Kootenay market." },
      { label: "Waterfront Listings", href: "/listings/waterfront", description: "Lake, river, and dock-access estates." },
      { label: "Acreage", href: "/listings/acreage", description: "Rural homes, land parcels, and larger holdings." },
      { label: "Recently Sold", href: "/listings/sold", description: "Recent sales across the region." },
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
      { label: "Slocan Valley", href: "/nelson/slocan-valley", description: "Riverfront, timber, space, and quiet towns." },
    ],
  },
  {
    label: "About Luke",
    href: "/about",
    items: [
      { label: "About Luke", href: "/about", description: "Born and raised in Nelson. Founder, Luke Mori at Fair Realty." },
      { label: "Awards & Testimonials", href: "/testimonials", description: "Voted Best Luxury Broker BC, 2021 and 2024." },
      { label: "YouTube Home Tours", href: "/#home-tours", description: "Property films and home tours." },
      { label: "FAQ", href: "/faq", description: "Answers before you call." },
      { label: "Contact", href: "/contact", description: "Phone, email, office, and direct inquiry." },
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
            <span className="text-[var(--color-bronze-light)]">Luke Mori Luxury</span>
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
                      data-open={openGroup === group.label}
                      className={`nav-pill group relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-[background,color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] ${
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
                                className="nav-menu-item block rounded-[1.1rem] px-4 py-3.5 transition-[background,color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1 hover:bg-[rgba(212,184,150,0.07)]"
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
              <span>Talk to Luke</span>
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
        className={`fixed inset-0 z-[95] overflow-hidden bg-[radial-gradient(circle_at_18%_14%,rgba(212,184,150,0.12),transparent_32%),radial-gradient(circle_at_86%_78%,rgba(132,162,166,0.08),transparent_34%),rgba(7,8,10,0.98)] px-4 pb-6 pt-36 backdrop-blur-2xl transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-8 sm:pt-44 lg:hidden ${
          mobileOpen ? "pointer-events-auto visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-3 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="pointer-events-none absolute inset-x-6 top-32 h-px bg-[linear-gradient(90deg,transparent,rgba(212,184,150,0.42),transparent)]" aria-hidden />
        <div className="flex h-full flex-col overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mb-6 mt-2 rounded-[2rem] border border-[rgba(212,184,150,0.18)] bg-[rgba(255,255,255,0.025)] p-1.5 shadow-[0_34px_100px_-70px_rgba(0,0,0,0.95)]">
            <div className="rounded-[calc(2rem-0.375rem)] bg-[linear-gradient(135deg,rgba(14,16,18,0.92),rgba(9,10,11,0.96))] px-5 py-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                Private Directory
              </p>
              <p className="m-0 mt-2 max-w-[28ch] font-serif text-[24px] font-light leading-[1.1] text-[var(--color-text)]">
                Find the right next step with Luke.
              </p>
            </div>
          </div>

          <div className="grid gap-3 pb-4">
            {navGroups.map((g, groupIndex) => (
              <div
                key={g.label}
                className={`group rounded-[1.65rem] border border-[rgba(212,184,150,0.16)] bg-[rgba(255,255,255,0.022)] p-1.5 shadow-[0_26px_76px_-64px_rgba(0,0,0,0.95)] transition-[opacity,transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: mobileOpen ? `${120 + groupIndex * 70}ms` : "0ms" }}
              >
                <div className="rounded-[calc(1.65rem-0.375rem)] bg-[linear-gradient(145deg,rgba(15,17,19,0.88),rgba(8,9,10,0.96))] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.045)]">
                  <div className="mb-4 flex items-center justify-between gap-4 border-b border-[rgba(212,184,150,0.13)] pb-4">
                    <Link
                      href={g.href ?? "#"}
                      onClick={() => setMobileOpen(false)}
                      className="font-serif text-[30px] font-light leading-none tracking-[-0.01em] text-[var(--color-text)] transition-colors duration-500 hover:text-[var(--color-bronze-light)]"
                    >
                      {g.label}
                    </Link>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[rgba(212,184,150,0.24)] text-[var(--color-bronze-light)]">
                      <svg viewBox="0 0 16 16" aria-hidden className="size-3.5">
                        <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
                      </svg>
                    </span>
                  </div>
                  <ul className="grid gap-1.5">
                    {g.items.map((it) => {
                      const external = it.href.startsWith("http");
                      return (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noreferrer" : undefined}
                            onClick={() => setMobileOpen(false)}
                            className="group/item flex items-center justify-between gap-4 rounded-[1rem] px-3 py-3 text-[14px] font-medium text-[var(--color-text-muted)] transition-[background,color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-0.5 hover:bg-[rgba(212,184,150,0.07)] hover:text-[var(--color-bronze-light)]"
                          >
                            <span>{it.label}</span>
                            <span className="h-px w-5 bg-[rgba(212,184,150,0.22)] transition-[width,background] duration-500 group-hover/item:w-8 group-hover/item:bg-[var(--color-bronze)]" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[rgba(212,184,150,0.16)] bg-[rgba(255,255,255,0.022)] p-5 text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] shadow-[0_24px_70px_-62px_rgba(0,0,0,0.95)]">
            <div className="mb-4 h-px bg-[linear-gradient(90deg,rgba(212,184,150,0.4),transparent)]" />
            <a href={contact.emailHref} className="block py-2 transition-colors hover:text-[var(--color-bronze-light)]">
              <span className="text-[var(--color-bronze)]">E</span> {contact.email}
            </a>
            <a href={contact.phoneHref} className="block py-2 transition-colors hover:text-[var(--color-bronze-light)]">
              <span className="text-[var(--color-bronze)]">P</span> {contact.phone}
            </a>
            <span className="block py-2 text-[var(--color-text-dim)]">{contact.office}</span>
          </div>
        </div>
      </div>
    </>
  );
}
