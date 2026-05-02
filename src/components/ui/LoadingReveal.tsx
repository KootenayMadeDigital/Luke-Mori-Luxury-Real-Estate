"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

/* First-load brand reveal. The overlay fades itself out via CSS animation
   (which honors prefers-reduced-motion via the global rule that collapses
   animation-duration to ~0). State just tracks completion so we can drop
   the node out of the DOM after the animation. */

export function LoadingReveal() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1900);
    return () => window.clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[200] flex items-center justify-center bg-[var(--color-bg)]"
      style={{ animation: "loadFadeOut 1900ms ease-in-out forwards" }}
    >
      <div className="flex flex-col items-center gap-6">
        <div style={{ animation: "loadMarkReveal 1900ms ease-in-out forwards" }}>
          <BrandMark className="size-9 text-[var(--color-bronze)]" />
        </div>
        <span
          className="font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-text-muted)]"
          style={{ animation: "loadMarkReveal 1900ms ease-in-out forwards" }}
        >
          Luke Mori Luxury
        </span>
        <span
          className="block h-px w-[120px] origin-left bg-[var(--color-bronze)]"
          style={{ animation: "loadLineGrow 1900ms ease-in-out forwards" }}
        />
      </div>
    </div>
  );
}
