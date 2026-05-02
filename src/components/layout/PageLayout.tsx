import type { ReactNode } from "react";
import { ConceptBanner } from "@/components/sections/ConceptBanner";
import { Nav } from "@/components/sections/Nav";
import { ConceptFooter } from "@/components/sections/ConceptFooter";

type Props = { children: ReactNode };

/* Shared wrapper for every subpage — concept banner, nav, content, footer.
   The home page intentionally manages its own LoadingReveal and skip link,
   so the layout is kept minimal and re-usable. */

export function PageLayout({ children }: Props) {
  return (
    <>
      <ConceptBanner />
      <Nav />
      <main id="main">{children}</main>
      <ConceptFooter />
    </>
  );
}
