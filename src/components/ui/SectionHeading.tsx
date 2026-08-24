import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  titleAs?: "h2" | "h3" | "h4";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleAs: TitleTag = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-[72rem]",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? <Eyebrow className="mb-4" tone="green">{eyebrow}</Eyebrow> : null}
      <TitleTag className="text-[clamp(2rem,4vw,4.5rem)] font-semibold tracking-[-0.04em] text-rail-ink leading-[1.02]">
        {title}
      </TitleTag>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-[42rem] text-[clamp(1rem,1vw,1.125rem)] leading-[1.65] text-secondary-text",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
