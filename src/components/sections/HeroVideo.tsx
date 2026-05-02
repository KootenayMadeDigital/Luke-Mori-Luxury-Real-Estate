"use client";

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

  useEffect(() => {
    const loop = loopRef.current;
    if (!loop) return;

    prepare(loop, 0.92);

    const play = () => {
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
  }, []);

  useEffect(() => {
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
  }, []);

  const videoClass =
    "absolute inset-0 size-full object-cover saturate-[1.08] brightness-[1.42] contrast-[1.06] transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <>
      <video
        ref={loopRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/luke-mori-header-poster.webp"
        className={`${videoClass} ${loopReady ? "opacity-100" : "opacity-[0.88]"}`}
      >
        <source src="/video/luke-mori-hero-loop.mp4" type="video/mp4" />
      </video>

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
    </>
  );
}
