"use client";

import Image from "next/image";
import {useTranslations} from "next-intl";

import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/cn";

type SiteBrandProps = {
  className?: string;
  variant?: "shell" | "footer";
  theme?: "dark" | "light";
};

export function SiteBrand({
  className,
  variant = "shell",
  theme = "light",
}: SiteBrandProps) {
  const t = useTranslations("Brand");
  const isFooter = variant === "footer";
  const isDarkShell = theme === "dark";
  const shellImageClassName =
    "select-none object-contain object-left lg:origin-left lg:scale-[1.06]";
  const footerImageClassName = "select-none object-contain object-center";
  const src = isFooter
    ? isDarkShell
      ? "/media/brand/ethiorail-logo-dark-surface-display.png"
      : "/media/brand/ethiorail-logo-light-surface-display.png"
    : isDarkShell
      ? "/media/brand/ethiorail-logo-dark-surface-display.png"
      : "/media/brand/ethiorail-logo-light-surface-display.png";

  if (isFooter) {
    return (
      <Link
        href="/"
        aria-label={t("homeLabel")}
        className={cn("inline-flex items-center", className)}
      >
        <span className="relative block h-[64px] w-[170px] sm:h-[68px] sm:w-[184px] lg:h-[86px] lg:w-[228px]">
          <Image
            src={src}
            alt={t("logoAlt")}
            fill
            sizes="(min-width: 1024px) 228px, (min-width: 640px) 184px, 170px"
            className={footerImageClassName}
            priority
          />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label={t("homeLabel")}
      className={cn("inline-flex items-center", className)}
    >
      <span className="relative block h-[60px] w-[150px] sm:h-[64px] sm:w-[160px] lg:h-[84px] lg:w-[210px]">
        <Image
          src={src}
          alt={t("logoAlt")}
          fill
          sizes="(min-width: 1024px) 210px, (min-width: 640px) 160px, 150px"
          className={shellImageClassName}
          priority
        />
      </span>
    </Link>
  );
}
