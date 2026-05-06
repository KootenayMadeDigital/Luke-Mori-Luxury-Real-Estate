"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function prepare(video: HTMLVideoElement, rate: number) {
  video.muted = true;
  video.playsInline = true;
  video.defaultMuted = true;
  video.playbackRate = rate;
}

export function HeroVideo() {
  const loopRef = useRef<HTMLVideoElement>(null);
  const fullRef = useRef<HTMLVideoElement>(null);
  const [loopReady, setLoopReady] = useState(false);
  const [fullReady, setFullReady] = useState(false);
  const [shouldUsePoster, setShouldUsePoster] = useState(true);
  const [shouldLoadFullVideo, setShouldLoadFullVideo] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const saveData = Boolean(connection?.saveData);
    const slowConnection = connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";
    const desktopWidth = window.matchMedia("(min-width: 768px)").matches;

    const frame = window.requestAnimationFrame(() => {
      setShouldUsePoster(!desktopWidth || reduceMotion || saveData || slowConnection);
      setShouldLoadFullVideo(desktopWidth && !reduceMotion && !saveData && !slowConnection);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (shouldUsePoster) return;

    const loop = loopRef.current;
    if (!loop) return;

    prepare(loop, 0.92);

    const play = () => {
      if (document.visibilityState === "hidden") return;
      const attempt = loop.play();
      if (attempt) attempt.catch(() => setLoopReady(false));
    };

    const show = () => setLoopReady(true);
    play();
    const retry = window.setTimeout(play, 450);

    loop.addEventListener("playing", show);
    loop.addEventListener("canplay", show);
    document.addEventListener("visibilitychange", play);

    return () => {
      window.clearTimeout(retry);
      loop.removeEventListener("playing", show);
      loop.removeEventListener("canplay", show);
      document.removeEventListener("visibilitychange", play);
    };
  }, [shouldUsePoster]);

  useEffect(() => {
    if (!shouldLoadFullVideo || shouldUsePoster) return;

    const full = fullRef.current;
    const loop = loopRef.current;
    if (!full || !loop) return;

    prepare(full, 0.92);

    const loadFull = () => {
      full.load();
      const start = () => {
        try {
          if (Number.isFinite(loop.currentTime)) {
            full.currentTime = Math.min(loop.currentTime, Math.max(full.duration - 0.5, 0));
          }
        } catch {
          // Browser may reject currentTime before metadata. Fine. Poster stays clean.
        }

        const attempt = full.play();
        if (attempt) {
          attempt
            .then(() => setFullReady(true))
            .catch(() => setFullReady(false));
        }
      };

      if (full.readyState >= 3) start();
      else full.addEventListener("canplay", start, { once: true });
    };

    const preloadTimer = window.setTimeout(loadFull, 1800);

    return () => {
      window.clearTimeout(preloadTimer);
    };
  }, [shouldLoadFullVideo, shouldUsePoster]);

  const videoClass =
    "absolute inset-0 size-full object-cover saturate-[1.08] brightness-[1.42] contrast-[1.06] transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]";

  if (shouldUsePoster) {
    return (
      <Image
        src="/video/luke-mori-header-poster.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className={`${videoClass} opacity-100`}
        aria-hidden
      />
    );
  }

  return (
    <>
      <video
        ref={loopRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video/luke-mori-header-poster.webp"
        className={`${videoClass} ${loopReady ? "opacity-100" : "opacity-[0.88]"}`}
      >
        <source media="(max-width: 767px)" src="/video/luke-mori-hero-loop-mobile.mp4" type="video/mp4" />
        <source src="/video/luke-mori-hero-loop.mp4" type="video/mp4" />
      </video>

      {shouldLoadFullVideo && (
        <video
          ref={fullRef}
          muted
          loop
          playsInline
          preload="none"
          className={`${videoClass} ${fullReady ? "opacity-100" : "opacity-0"}`}
        >
          <source src="/video/luke-mori-hero-full.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
