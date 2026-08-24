import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[90rem] px-[clamp(1.125rem,2.5vw,3rem)]",
        className,
      )}
      {...props}
    />
  );
}
