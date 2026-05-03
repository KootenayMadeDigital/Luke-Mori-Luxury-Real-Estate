"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function scrollTopNow() {
  window.scrollTo(0, 0);
  requestAnimationFrame(() => window.scrollTo(0, 0));
}

export function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.hash) return;
      sessionStorage.setItem("luke-scroll-top", "1");
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    sessionStorage.removeItem("luke-scroll-top");
    scrollTopNow();
  }, [pathname, searchParams]);

  return null;
}
