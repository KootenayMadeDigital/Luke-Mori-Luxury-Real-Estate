import { Container } from "@/components/ui/Container";

type Props = {
  eyebrow: string;
  title: string;
  align?: "left" | "right" | "center";
  tone?: "bronze" | "lake" | "office";
};

const toneStyles = {
  bronze: {
    glow: "bg-[rgba(212,184,150,0.16)]",
    line: "from-transparent via-[rgba(212,184,150,0.72)] to-transparent",
    wash: "radial-gradient(circle_at_50%_50%,rgba(212,184,150,0.16),transparent_56%)",
  },
  lake: {
    glow: "bg-[rgba(132,162,166,0.15)]",
    line: "from-transparent via-[rgba(132,162,166,0.58)] to-transparent",
    wash: "radial-gradient(circle_at_50%_50%,rgba(132,162,166,0.14),transparent_58%)",
  },
  office: {
    glow: "bg-[rgba(245,239,229,0.1)]",
    line: "from-transparent via-[rgba(245,239,229,0.48)] to-transparent",
    wash: "radial-gradient(circle_at_50%_50%,rgba(245,239,229,0.1),transparent_58%)",
  },
};

export function SectionTransition({ eyebrow, title, align = "center", tone = "bronze" }: Props) {
  const styles = toneStyles[tone];
  const justify = align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center";
  const textAlign = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div className="relative isolate overflow-hidden bg-[var(--color-bg)] py-10 md:py-12" aria-label={`${eyebrow}: ${title}`}>
      <div className="pointer-events-none absolute inset-0 opacity-80" style={{ background: styles.wash }} aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-[linear-gradient(90deg,var(--tw-gradient-stops))] opacity-70 [--tw-gradient-stops:transparent,rgba(212,184,150,0.48),transparent]" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[120px] -translate-y-1/2 opacity-[0.08]" aria-hidden>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="size-full">
          <path d="M0 70 C160 30 260 30 420 70 S700 110 860 70 1120 30 1440 70" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0 92 C180 54 280 54 450 92 S720 126 900 92 1160 54 1440 92" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className={`flex ${justify}`}>
          <div className={`relative max-w-[620px] ${textAlign}`}>
            <div className={`absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px] ${styles.glow}`} aria-hidden />
            <div className="relative rounded-full border border-[rgba(212,184,150,0.22)] bg-[rgba(10,11,13,0.72)] px-6 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_24px_80px_-54px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:px-8">
              <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                {eyebrow}
              </div>
              <div className="font-serif text-[22px] font-light leading-[1.1] tracking-[-0.005em] text-[var(--color-text)] sm:text-[28px]">
                {title}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={`pointer-events-none absolute bottom-0 left-1/2 h-px w-[74vw] -translate-x-1/2 bg-gradient-to-r ${styles.line}`} aria-hidden />
    </div>
  );
}
