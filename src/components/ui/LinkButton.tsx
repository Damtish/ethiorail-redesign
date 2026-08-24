"use client";

import type {ComponentProps, ReactNode} from "react";

import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/cn";

type LinkButtonVariant = "primary" | "secondary" | "dark";
type LinkButtonSize = "default" | "large";

type LinkButtonProps = Omit<ComponentProps<typeof Link>, "href" | "children"> & {
  href: string;
  children: ReactNode;
  variant?: LinkButtonVariant;
  size?: LinkButtonSize;
  className?: string;
};

const variantClasses: Record<LinkButtonVariant, string> = {
  primary:
    "border border-ethiorail-green bg-ethiorail-green text-cool-canvas hover:border-ethiorail-bright-green hover:bg-ethiorail-bright-green",
  secondary:
    "border border-steel-mist bg-transparent text-rail-ink hover:border-deep-slate/25 hover:bg-[rgba(88,224,242,0.08)]",
  dark:
    "border border-rail-ink bg-rail-ink text-cool-canvas hover:border-deep-slate hover:bg-deep-slate",
};

const sizeClasses: Record<LinkButtonSize, string> = {
  default: "min-h-11 px-4 py-2.5 text-sm",
  large: "min-h-12 px-5 py-3 text-base",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm border font-semibold tracking-[0.01em] transition-colors duration-200 ease-out",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
