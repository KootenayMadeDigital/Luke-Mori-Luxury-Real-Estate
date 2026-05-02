import type { ReactNode } from "react";
import { Nav } from "@/components/sections/Nav";
import { ConceptFooter } from "@/components/sections/ConceptFooter";

type Props = { children: ReactNode };

/* Shared wrapper for every subpage: nav, content, footer.
   The home page intentionally manages its own LoadingReveal and skip link,
   so the layout is kept minimal and re-usable. */

export function PageLayout({ children }: Props) {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[300] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-[1px] focus:bg-[var(--color-bronze)] focus:px-5 focus:py-3 focus:text-[12px] focus:font-medium focus:uppercase focus:tracking-[0.2em] focus:text-[var(--color-button-text)]"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">{children}</main>
      <ConceptFooter />
    </>
  );
}
