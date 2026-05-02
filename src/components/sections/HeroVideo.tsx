"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.defaultMuted = true;
    video.playbackRate = 0.92;

    const play = () => {
      const attempt = video.play();
      if (attempt) {
        attempt.catch(() => {
          setReady(false);
        });
      }
    };

    play();
    const retry = window.setTimeout(play, 450);
    const show = () => setReady(true);

    video.addEventListener("playing", show);
    video.addEventListener("canplay", show);
    document.addEventListener("visibilitychange", play);

    return () => {
      window.clearTimeout(retry);
      video.removeEventListener("playing", show);
      video.removeEventListener("canplay", show);
      document.removeEventListener("visibilitychange", play);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/video/luke-mori-header-poster.webp"
      className={`absolute inset-0 size-full object-cover saturate-[1.08] brightness-[1.42] contrast-[1.06] transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        ready ? "opacity-100" : "opacity-[0.88]"
      }`}
    >
      <source src="/video/luke-mori-hero-loop.mp4" type="video/mp4" />
    </video>
  );
}
