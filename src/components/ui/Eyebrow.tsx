import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type EyebrowTone = "green" | "neutral" | "dark";

type EyebrowProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: EyebrowTone;
};

const toneClasses: Record<EyebrowTone, string> = {
  green: "text-ethiorail-deep-green",
  neutral: "text-secondary-text",
  dark: "text-secondary-text-dark",
};

export function Eyebrow({
  className,
  tone = "green",
  ...props
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex text-[0.75rem] font-semibold uppercase tracking-[0.28em] leading-none",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
