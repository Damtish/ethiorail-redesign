"use client";

import {useLocale, useTranslations} from "next-intl";

import {Link, usePathname} from "@/i18n/navigation";
import {cn} from "@/lib/cn";

const localeOptions = [
  {locale: "en", translationKey: "english", shortTranslationKey: "englishShort"},
  {locale: "am", translationKey: "amharic", shortTranslationKey: "amharicShort"},
] as const;

type LocaleSwitcherProps = {
  variant?: "compact" | "expanded";
  tone?: "light" | "dark";
  className?: string;
};

export function LocaleSwitcher({
  variant = "compact",
  tone = "light",
  className,
}: LocaleSwitcherProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Language");

  return (
    <nav
      aria-label={t("selectorLabel")}
      className={cn(
        "inline-flex flex-wrap items-center gap-1.5 rounded-lg border p-1",
        tone === "dark"
          ? "border-white/10 bg-deep-slate/55"
          : "border-steel-mist surface-rail-panel",
        className,
      )}
    >
      {localeOptions.map((option) => {
        const active = locale === option.locale;

        return (
          <Link
            key={option.locale}
            href={pathname}
            locale={option.locale}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-[4px] px-2.5 py-1.5 text-sm font-semibold transition-colors duration-200",
              active
                ? "bg-ethiorail-green text-cool-canvas"
                : tone === "dark"
                  ? "text-text-on-dark hover:bg-white/5 hover:text-ethiorail-bright-green"
                  : "text-rail-ink hover:bg-[rgba(88,224,242,0.12)] hover:text-deep-slate",
            )}
          >
            {variant === "compact"
              ? t(option.shortTranslationKey)
              : t(option.translationKey)}
          </Link>
        );
      })}
    </nav>
  );
}
