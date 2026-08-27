"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import {useLocale, useTranslations} from "next-intl";

import {Link} from "@/i18n/navigation";
import {
  desktopDirectLinks,
  desktopHomeLink,
  desktopPrimaryGroups,
  isActivePath,
  type NavigationGroup,
} from "@/lib/navigation";
import {cn} from "@/lib/cn";

type DesktopNavigationProps = {
  pathname: string;
  theme: "dark" | "light";
  onMenuOpenChange?: (open: boolean) => void;
};

type TranslatedGroup = {
  key: NavigationGroup["key"];
  label: string;
  items: Array<{href: string; label: string}>;
  viewAll?: {href: string; label: string};
};

function DropdownButton({
  group,
  pathname,
  theme,
  active,
  open,
  onToggle,
  onOpen,
  onClose,
  isAmharic,
}: {
  group: TranslatedGroup;
  pathname: string;
  theme: "dark" | "light";
  active: boolean;
  open: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
  isAmharic: boolean;
}) {
  const panelId = `desktop-${group.key}-panel`;
  const labelClass = isAmharic ? "font-medium tracking-normal" : "font-semibold";
  const isDarkTheme = theme === "dark";
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      onClose();
      closeTimerRef.current = null;
    }, 220);
  };

  useEffect(() => () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  return (
    <div
      className="relative"
      onPointerEnter={() => {
        cancelClose();
        onOpen();
      }}
      onPointerLeave={scheduleClose}
      onFocusCapture={() => {
        cancelClose();
        onOpen();
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          scheduleClose();
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors duration-200",
          labelClass,
          active || open
            ? "text-ethiorail-green"
            : isDarkTheme
              ? "text-text-on-dark hover:text-ethiorail-bright-green"
              : "text-rail-ink hover:text-deep-slate",
        )}
        onClick={onToggle}
      >
        <span>{group.label}</span>
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
          onPointerEnter={cancelClose}
          onPointerLeave={scheduleClose}
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
      </button>

      {open ? (
        <div
          className={cn(
            "pointer-events-auto absolute top-full z-30 pt-3",
            group.key === "services" ? "left-0" : "left-1/2 -translate-x-1/2",
            group.key === "services"
              ? "w-[min(55rem,calc(100vw-3rem))]"
              : "w-[min(22rem,calc(100vw-3rem))]",
          )}
          onPointerEnter={() => {
            cancelClose();
            onOpen();
          }}
          onPointerLeave={scheduleClose}
        >
          <div
            id={panelId}
            className="rounded-[24px] border border-[rgba(0,149,7,0.12)] surface-mint-panel p-4 shadow-[0_20px_50px_rgba(10,25,35,0.12)]"
          >
          <p className="px-2 pb-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ethiorail-deep-green">
            {group.label}
          </p>
          <div
            className={cn(
              "grid gap-2",
              group.key === "services"
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1",
            )}
          >
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-[10px] px-3.5 py-[0.9rem] text-sm transition-colors duration-200",
                  isAmharic ? "font-medium tracking-normal" : "font-medium",
                  isActivePath(pathname, item.href) &&
                    "bg-[rgba(0,149,7,0.08)] text-ethiorail-green",
                  "text-rail-ink hover:bg-[rgba(88,224,242,0.12)] hover:text-ethiorail-green",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {group.viewAll ? (
            <div className="mt-3 border-t border-steel-mist pt-3">
              <Link
                href={group.viewAll.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ethiorail-green transition-colors duration-200 hover:text-ethiorail-bright-green focus-visible:text-ethiorail-bright-green"
              >
                <span>{group.viewAll.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function DesktopNavigation({pathname, theme, onMenuOpenChange}: DesktopNavigationProps) {
  const locale = useLocale();
  const t = useTranslations("Navigation");
  const [openGroup, setOpenGroup] = useState<NavigationGroup["key"] | null>(null);
  const isAmharic = locale === "am";
  const isDarkTheme = theme === "dark";

  const activeGroupKey = useMemo(() => {
    const match = desktopPrimaryGroups.find((group) =>
      group.items.some((item) => isActivePath(pathname, item.href)),
    );

    return match?.key ?? null;
  }, [pathname]);

  const translatedGroups = useMemo<TranslatedGroup[]>(
    () =>
      desktopPrimaryGroups.map((group) => {
        const navigationGroup = group as NavigationGroup;
        const translatedGroup: TranslatedGroup = {
          key: navigationGroup.key,
          label: t(navigationGroup.labelKey),
          items: navigationGroup.items.map((item) => ({
            href: item.href,
            label: t(item.labelKey),
          })),
        };

        if (navigationGroup.viewAll) {
          translatedGroup.viewAll = {
            href: navigationGroup.viewAll.href,
            label: t(navigationGroup.viewAll.labelKey),
          };
        }

        return translatedGroup;
      }),
    [t],
  );

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenGroup(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  useEffect(() => {
    onMenuOpenChange?.(openGroup !== null);
  }, [onMenuOpenChange, openGroup]);

  return (
    <nav aria-label={t("mainNavigation")} className="flex items-center justify-center">
      <ul className="flex items-center gap-1 lg:gap-1.5">
        <li>
          <Link
            href={desktopHomeLink.href}
            className={cn(
              "rounded-full px-2.5 py-1.5 text-sm transition-colors duration-200",
              isAmharic ? "font-medium tracking-normal" : "font-semibold",
              isActivePath(pathname, desktopHomeLink.href)
                ? "text-ethiorail-green"
                : isDarkTheme
                  ? "text-text-on-dark hover:text-ethiorail-bright-green"
                  : "text-rail-ink hover:text-deep-slate",
            )}
          >
            {t(desktopHomeLink.labelKey)}
          </Link>
        </li>
        {translatedGroups.map((group) => {
          const isOpen = openGroup === group.key;

          return (
            <li key={group.key}>
              <DropdownButton
                group={group}
                pathname={pathname}
                theme={theme}
                active={activeGroupKey === group.key}
                open={isOpen}
                isAmharic={isAmharic}
                onToggle={() => {
                  setOpenGroup((current) =>
                    current === group.key ? null : group.key,
                  );
                }}
                onOpen={() => setOpenGroup(group.key)}
                onClose={() =>
                  setOpenGroup((current) => (current === group.key ? null : current))
                }
              />
            </li>
          );
        })}

        {desktopDirectLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "rounded-full px-2.5 py-1.5 text-sm transition-colors duration-200",
                isAmharic ? "font-medium tracking-normal" : "font-semibold",
                isActivePath(pathname, item.href)
                  ? "text-ethiorail-green"
                  : isDarkTheme
                    ? "text-text-on-dark hover:text-ethiorail-bright-green"
                    : "text-rail-ink hover:text-deep-slate",
              )}
            >
              {t(item.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
