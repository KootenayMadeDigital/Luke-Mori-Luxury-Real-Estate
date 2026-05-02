/* The cinematic hero artwork. Pure SVG/CSS — no image dependencies.
   Layered mountain ranges, starlit sky, mirrored lake reflection. */

export function MountainScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 25%, rgba(176,138,91,0.10) 0%, transparent 60%), radial-gradient(ellipse 100% 70% at 30% 0%, rgba(20,28,38,0.6) 0%, transparent 70%), linear-gradient(180deg, #0a0d12 0%, #0a0b0d 60%, #07080a 100%)",
        }}
      />

      {/* Stars */}
      <div
        className="absolute inset-x-0 top-0 h-[50%] opacity-70"
        style={{
          backgroundImage: [
            "radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.5), transparent 50%)",
            "radial-gradient(1px 1px at 28% 32%, rgba(255,255,255,0.3), transparent 50%)",
            "radial-gradient(1px 1px at 44% 12%, rgba(255,255,255,0.4), transparent 50%)",
            "radial-gradient(1.2px 1.2px at 62% 26%, rgba(255,255,255,0.6), transparent 50%)",
            "radial-gradient(1px 1px at 78% 14%, rgba(255,255,255,0.35), transparent 50%)",
            "radial-gradient(1px 1px at 88% 30%, rgba(255,255,255,0.45), transparent 50%)",
            "radial-gradient(1px 1px at 18% 42%, rgba(255,255,255,0.25), transparent 50%)",
            "radial-gradient(1.2px 1.2px at 52% 8%, rgba(255,255,255,0.5), transparent 50%)",
            "radial-gradient(1px 1px at 8% 28%, rgba(255,255,255,0.3), transparent 50%)",
            "radial-gradient(1px 1px at 96% 18%, rgba(255,255,255,0.35), transparent 50%)",
          ].join(", "),
        }}
      />

      {/* Distant range */}
      <svg
        className="absolute inset-x-0 bottom-[42%] h-[60%] w-full opacity-55"
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        style={{ animation: "slowDriftFar 12s ease-in-out infinite" }}
      >
        <path
          d="M0 480 L120 360 L210 410 L320 300 L430 380 L560 280 L690 360 L820 260 L940 340 L1080 280 L1220 360 L1340 300 L1460 380 L1600 320 L1600 600 L0 600 Z"
          fill="#0d1620"
        />
      </svg>

      {/* Mid range */}
      <svg
        className="absolute inset-x-0 bottom-[40%] h-[60%] w-full opacity-85"
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        style={{ animation: "slowDriftMid 9s ease-in-out infinite" }}
      >
        <path
          d="M0 520 L80 440 L180 480 L280 380 L380 460 L500 360 L620 440 L760 340 L880 420 L1020 360 L1180 460 L1320 380 L1460 460 L1600 400 L1600 600 L0 600 Z"
          fill="#0a1218"
        />
      </svg>

      {/* Near range */}
      <svg
        className="absolute inset-x-0 bottom-[38%] h-[60%] w-full"
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
      >
        <path
          d="M0 560 L120 460 L260 520 L380 440 L520 500 L660 420 L820 510 L980 440 L1140 520 L1300 460 L1460 520 L1600 480 L1600 600 L0 600 Z"
          fill="#060a0d"
        />
      </svg>

      {/* Lake */}
      <div
        className="absolute inset-x-0 bottom-0 h-[38%] overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #050708 0%, #08090b 50%, #0a0b0d 100%)",
        }}
      >
        {/* Mirrored mountain reflection */}
        <svg
          className="absolute left-0 top-0 h-[60%] w-full opacity-[0.18]"
          viewBox="0 0 1600 600"
          preserveAspectRatio="none"
          style={{ transform: "scaleY(-1)" }}
        >
          <path
            d="M0 40 L120 140 L260 80 L380 160 L520 100 L660 180 L820 90 L980 160 L1140 80 L1300 140 L1460 80 L1600 120 L1600 0 L0 0 Z"
            fill="#1a2a32"
          />
        </svg>

        {/* Subtle horizontal shimmer overlay */}
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent 0%, rgba(176,138,91,0.04) 50%, transparent 100%), repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255,255,255,0.02) 3px, rgba(255,255,255,0.02) 4px)",
            animation: "lakeShimmer 8s ease-in-out infinite",
          }}
        />

        {/* Faint horizon line */}
        <div className="absolute inset-x-0 top-0 h-px bg-[var(--color-line-strong)] opacity-50" />
      </div>

      {/* Vignette + bottom fade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,11,13,0.7) 0%, rgba(10,11,13,0) 25%, rgba(10,11,13,0) 70%, rgba(10,11,13,0.95) 100%), radial-gradient(ellipse 70% 50% at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}
