import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type LinkArrowProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: string;
};

export function LinkArrow({ children, className, ...props }: LinkArrowProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center gap-2 font-medium text-rail-ink underline-offset-4 transition-colors duration-200 hover:text-deep-slate focus-visible:text-deep-slate",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-flex h-5 w-5 items-center justify-center text-rail-cyan transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            d="M3.5 8h9m0 0-4-4m4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
