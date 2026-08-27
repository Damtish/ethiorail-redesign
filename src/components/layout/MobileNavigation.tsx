"use client";

import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {useLocale, useTranslations} from "next-intl";

import {Link} from "@/i18n/navigation";
import {
  desktopDirectLinks,
  desktopHomeLink,
  desktopPrimaryGroups,
  type NavigationGroup,
  isActivePath,
} from "@/lib/navigation";
import {cn} from "@/lib/cn";
import {LinkButton} from "@/components/ui/LinkButton";
import {LocaleSwitcher} from "@/components/shared/LocaleSwitcher";

type MobileNavigationProps = {
  pathname: string;
  theme: "dark" | "light";
  onMenuOpenChange?: (open: boolean) => void;
};

function Chevron({open}: {open: boolean}) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
    >
      <path
        d="M4.25 6.5 8 10.25l3.75-3.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MobileNavigation({pathname, theme, onMenuOpenChange}: MobileNavigationProps) {
  const locale = useLocale();
  const t = useTranslations("Shell");
  const nav = useTranslations("Navigation");
  const [open, setOpen] = useState(false);
  const isAmharic = locale === "am";
  const isDarkTheme = theme === "dark";
  const [expanded, setExpanded] = useState<Record<NavigationGroup["key"], boolean>>({
    services: false,
    network: false,
    about: false,
    insights: false,
  });

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onMenuOpenChange?.(open);
  }, [onMenuOpenChange, open]);

  return (
    <>
      <button
        type="button"
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-[6px] border transition-colors duration-200 lg:hidden",
          isDarkTheme
            ? "border-white/10 bg-[rgba(19,42,56,0.82)] text-text-on-dark hover:border-ethiorail-green hover:text-ethiorail-bright-green"
            : "border-steel-mist surface-mint-panel text-rail-ink hover:border-ethiorail-green hover:text-ethiorail-green",
        )}
        aria-label={t("openMenu")}
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path
            d="M4 7.5h16M4 12h16M4 16.5h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open ? createPortal((
        <>
          <button
            type="button"
            aria-label={t("closeMenu")}
              className="fixed inset-x-0 bottom-0 top-[5.75rem] z-[55] bg-rail-ink/30 backdrop-blur-[2px] motion-safe:animate-[mobile-drawer-backdrop-in_220ms_ease-out] lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-navigation-panel"
            className="fixed inset-x-0 bottom-0 top-[5.75rem] z-[60] overflow-hidden rounded-t-[26px] bg-rail-ink text-text-on-dark shadow-[0_-18px_50px_rgba(10,25,35,0.22)] motion-safe:animate-[mobile-drawer-in_220ms_ease-out] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={t("mobileNavigation")}
        >
          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="mx-auto grid w-full max-w-[90rem] gap-6 px-[clamp(1.125rem,2.5vw,3rem)] py-8 sm:py-10">
                <nav aria-label={t("mobileNavigation")} className="grid">
                  <Link
                    href={desktopHomeLink.href}
                    className={cn(
                      "border-b border-white/12 py-4 text-base text-text-on-dark transition-colors duration-200 hover:text-ethiorail-bright-green",
                      isAmharic ? "font-medium tracking-normal" : "font-semibold",
                      isActivePath(pathname, desktopHomeLink.href) && "text-ethiorail-bright-green",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {nav(desktopHomeLink.labelKey)}
                  </Link>
                  {desktopPrimaryGroups.map((group: NavigationGroup) => {
                    const isExpanded = expanded[group.key];

                    return (
                      <div
                        key={group.key}
                        className="border-b border-white/12 last:border-b-0"
                      >
                        <button
                          type="button"
                          className={cn(
                            "flex w-full items-center justify-between gap-4 py-4 text-left text-base text-text-on-dark transition-colors duration-200 hover:text-ethiorail-bright-green",
                            isAmharic ? "font-medium tracking-normal" : "font-semibold",
                          )}
                          aria-expanded={isExpanded}
                          aria-controls={`mobile-${group.key}-panel`}
                          onClick={() =>
                            setExpanded((current) => ({
                              ...current,
                              [group.key]: !current[group.key],
                            }))
                          }
                        >
                          <span>{nav(group.labelKey)}</span>
                          <Chevron open={isExpanded} />
                        </button>

                        {isExpanded ? (
                          <div
                            id={`mobile-${group.key}-panel`}
                            className="pb-4 pl-4 pr-2"
                          >
                            <div className="border-l border-white/10 pl-4">
                              <div className="grid gap-1">
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={cn(
                                    "block py-2 text-sm text-secondary-text-dark transition-colors duration-200 hover:text-text-on-dark",
                                    isAmharic ? "font-medium tracking-normal" : "font-medium",
                                    isActivePath(pathname, item.href) &&
                                      "text-ethiorail-bright-green",
                                  )}
                                  onClick={() => setOpen(false)}
                                >
                                  {nav(item.labelKey)}
                                </Link>
                              ))}
                              {group.viewAll ? (
                                <Link
                                  href={group.viewAll.href}
                                  className={cn(
                                    "mt-2 inline-flex items-center gap-2 text-sm text-ethiorail-bright-green transition-colors duration-200 hover:text-cool-canvas",
                                    isAmharic ? "font-medium tracking-normal" : "font-semibold",
                                  )}
                                  onClick={() => setOpen(false)}
                                >
                                  <span>{nav(group.viewAll.labelKey)}</span>
                                  <span aria-hidden="true">→</span>
                                </Link>
                              ) : null}
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </nav>

                <div className="grid gap-1 border-t border-white/12 pt-4">
                  {desktopDirectLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "border-b border-white/12 py-4 text-base text-text-on-dark transition-colors duration-200 hover:text-ethiorail-bright-green last:border-b-0",
                        isAmharic ? "font-medium tracking-normal" : "font-semibold",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {nav(item.labelKey)}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className={cn(
                      "border-b border-white/12 py-4 text-base text-text-on-dark transition-colors duration-200 hover:text-ethiorail-bright-green",
                      isAmharic ? "font-medium tracking-normal" : "font-semibold",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {nav("contact")}
                  </Link>
                </div>

                <div className="grid gap-4 border-t border-white/12 pt-4 text-text-on-dark">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ethiorail-deep-green">
                    {t("language")}
                  </p>
                  <LocaleSwitcher variant="expanded" tone="dark" />
                  <LinkButton href="/quote" size="large" className="justify-center">
                    {nav("getQuote")}
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      ), document.body) : null}
    </>
  );
}
