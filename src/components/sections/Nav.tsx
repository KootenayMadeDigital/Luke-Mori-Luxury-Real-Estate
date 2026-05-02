"use client";

import { useEffect, useState } from "react";
import { Brand } from "@/components/ui/BrandMark";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const links = [
  { label: "Areas", href: "#areas" },
  { label: "Estates", href: "#estates" },
  { label: "The Standard", href: "#standard" },
  { label: "Sellers", href: "#sellers" },
  { label: "Private Access", href: "#private" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[rgba(10,11,13,0.82)] py-3 backdrop-blur-[14px] backdrop-saturate-150"
          : "border-b border-transparent bg-gradient-to-b from-[rgba(10,11,13,0.55)] to-transparent py-[18px]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center gap-8 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <Brand />

        <nav className="mx-auto hidden gap-9 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-1.5 text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
            >
              {l.label}
              <span className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 bg-[var(--color-bronze)] transition-[width,left] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:left-0 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#consult"
          className="group ml-auto inline-flex shrink-0 items-center gap-2.5 rounded-[1px] border border-[var(--color-line-strong)] px-[18px] py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-text)] transition-[background,color,border-color] duration-200 hover:border-[var(--color-bronze)] hover:bg-[var(--color-bronze)] hover:text-[var(--color-bg)]"
        >
          <span className="hidden sm:inline">Private Consultation</span>
          <span className="sm:hidden">Inquire</span>
          <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover:translate-x-[3px]">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <ScrollProgress />
    </header>
  );
}
