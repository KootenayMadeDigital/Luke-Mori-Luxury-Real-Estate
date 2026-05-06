"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { Listing } from "@/lib/listings";

type RevealCopy = {
  eyebrow: string;
  title: string;
  emphasis: string;
  lede: string;
  kicker: string;
  panelTitle: string;
  panelBody: string;
  primaryCta: string;
  primaryHref: string;
};

type Props = {
  listing: Listing;
  variant?: "buyerPreview" | "sellerLaunch";
  copy?: Partial<RevealCopy>;
};

const LuxuryListingReveal = dynamic(
  () => import("@/components/listing/LuxuryListingReveal").then((mod) => mod.LuxuryListingReveal),
  {
    ssr: false,
    loading: () => <div className="tone-dark tonal-section min-h-[720px] border-y border-[var(--color-line)]" aria-hidden />,
  },
);

export function LazyLuxuryListingReveal(props: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return <div ref={ref}>{shouldLoad ? <LuxuryListingReveal {...props} /> : <div className="tone-dark tonal-section min-h-[720px] border-y border-[var(--color-line)]" aria-hidden />}</div>;
}
