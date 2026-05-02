import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({ children, centered = false, className = "" }: Props) {
  return (
    <h2
      className={`m-0 mb-7 font-serif font-light leading-[1.05] tracking-[-0.01em] text-[var(--color-text)] [font-size:clamp(36px,5.2vw,68px)] ${
        centered ? "text-center" : ""
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionLede({
  children,
  centered = false,
  align = "left",
  className = "",
}: {
  children: ReactNode;
  centered?: boolean;
  align?: "left" | "right" | "center";
  className?: string;
}) {
  const alignClass =
    align === "right"
      ? "ml-auto text-left"
      : align === "center"
      ? "mx-auto text-center"
      : centered
      ? "mx-auto text-center"
      : "";
  return (
    <p
      className={`m-0 max-w-[580px] leading-[1.7] text-[var(--color-text-muted)] [font-size:clamp(16px,1.3vw,18px)] ${alignClass} ${className}`}
    >
      {children}
    </p>
  );
}
