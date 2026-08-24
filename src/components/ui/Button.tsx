import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "dark" | "secondary";
type ButtonSize = "default" | "large";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-ethiorail-green bg-ethiorail-green text-cool-canvas hover:border-ethiorail-bright-green hover:bg-ethiorail-bright-green",
  dark:
    "border border-rail-ink bg-rail-ink text-cool-canvas hover:border-deep-slate hover:bg-deep-slate",
  secondary:
    "border border-steel-mist bg-transparent text-rail-ink hover:border-deep-slate/25 hover:bg-[rgba(88,224,242,0.08)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "min-h-11 px-4 py-2.5 text-sm",
  large: "min-h-12 px-5 py-3 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      type = "button",
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-sm border font-semibold tracking-[0.01em] transition-colors duration-200 ease-out disabled:cursor-not-allowed disabled:border-steel-mist disabled:bg-[rgba(88,224,242,0.06)] disabled:text-secondary-text/70",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
