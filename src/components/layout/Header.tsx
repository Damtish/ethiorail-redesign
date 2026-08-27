"use client";

import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useLocale, useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";
import {LinkButton} from "@/components/ui/LinkButton";
import {LocaleSwitcher} from "@/components/shared/LocaleSwitcher";
import {Link, usePathname} from "@/i18n/navigation";
import {cn} from "@/lib/cn";
import {SiteBrand} from "./SiteBrand";
import {DesktopNavigation} from "./DesktopNavigation";
import {MobileNavigation} from "./MobileNavigation";

type HeaderTheme = "dark" | "light";

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Actions");
  const nav = useTranslations("Navigation");
  const headerRef = useRef<HTMLElement | null>(null);
  const isAmharic = locale === "am";
  const isHomepage = pathname === "/en" || pathname === "/am" || pathname === "/";
  const [theme, setTheme] = useState<HeaderTheme>(isHomepage ? "dark" : "light");
  const [visibility, setVisibility] = useState({hidden: false, pathname});
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const previousScrollYRef = useRef(0);
  const scrollFrameRef = useRef<number | null>(null);
  const desktopMenuOpenRef = useRef(false);
  const mobileMenuOpenRef = useRef(false);
  const pathnameRef = useRef(pathname);
  const accumulatedScrollDeltaRef = useRef(0);

  useEffect(() => {
    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const focusedInsideHeader = headerRef.current?.contains(document.activeElement);

      if (
        currentScrollY < 40 ||
        desktopMenuOpenRef.current ||
        mobileMenuOpenRef.current ||
        focusedInsideHeader
      ) {
        accumulatedScrollDeltaRef.current = 0;
        setVisibility({hidden: false, pathname: pathnameRef.current});
      } else {
        const delta = currentScrollY - previousScrollYRef.current;
        if (Math.sign(delta) !== Math.sign(accumulatedScrollDeltaRef.current)) {
          accumulatedScrollDeltaRef.current = 0;
        }
        accumulatedScrollDeltaRef.current += delta;

        if (accumulatedScrollDeltaRef.current > 10) {
          setVisibility({hidden: true, pathname: pathnameRef.current});
          accumulatedScrollDeltaRef.current = 0;
        } else if (accumulatedScrollDeltaRef.current < -10) {
          setVisibility({hidden: false, pathname: pathnameRef.current});
          accumulatedScrollDeltaRef.current = 0;
        }
      }

      previousScrollYRef.current = currentScrollY;
    };

    const scheduleVisibilityUpdate = () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
      scrollFrameRef.current = window.requestAnimationFrame(updateVisibility);
    };

    previousScrollYRef.current = window.scrollY;
    scheduleVisibilityUpdate();
    window.addEventListener("scroll", scheduleVisibilityUpdate, {passive: true});

    return () => {
      window.removeEventListener("scroll", scheduleVisibilityUpdate);
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    pathnameRef.current = pathname;
    previousScrollYRef.current = window.scrollY;
    accumulatedScrollDeltaRef.current = 0;
  }, [pathname]);

  useLayoutEffect(() => {
    const updateTheme = () => {
      const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 0;
      const probeY = Math.min(window.innerHeight - 1, Math.max(headerHeight + 12, 12));
      const probeX = Math.round(window.innerWidth / 2);

      let nextTheme: HeaderTheme | null = null;
      const elements = document.elementsFromPoint(probeX, probeY);

      for (const element of elements) {
        if (!(element instanceof Element)) {
          continue;
        }

        const themedSection = element.closest<HTMLElement>("[data-header-theme]");
        const value = themedSection?.dataset.headerTheme;
        if (value === "dark" || value === "light") {
          nextTheme = value;
          break;
        }
      }

      if (!nextTheme) {
        const fallbackSection = document.querySelector<HTMLElement>(
          pathname === "/en" || pathname === "/am" || pathname === "/"
            ? "main [data-header-theme]"
            : "[data-header-theme]",
        );
        const fallback = fallbackSection?.dataset.headerTheme;
        if (fallback === "dark" || fallback === "light") {
          nextTheme = fallback;
        }
      }

      if (!nextTheme) {
        nextTheme = isHomepage ? "dark" : "light";
      }

      setTheme((current) => (current === nextTheme ? current : nextTheme));
    };

    let frame = 0;
    const scheduleThemeUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateTheme);
    };

    updateTheme();
    scheduleThemeUpdate();
    window.addEventListener("scroll", scheduleThemeUpdate, {passive: true});
    window.addEventListener("resize", scheduleThemeUpdate);
    window.visualViewport?.addEventListener("resize", scheduleThemeUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleThemeUpdate);
      window.removeEventListener("resize", scheduleThemeUpdate);
      window.visualViewport?.removeEventListener("resize", scheduleThemeUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, [isHomepage, pathname]);

  const isDarkTheme = theme === "dark";

  return (
    <header
      ref={headerRef}
      onFocusCapture={() => setVisibility({hidden: false, pathname: pathnameRef.current})}
      className={cn(
        "z-50 border-b border-transparent transition-transform duration-300 ease-out",
        "fixed inset-x-0 top-0",
        visibility.hidden && visibility.pathname === pathname && !desktopMenuOpen && !mobileMenuOpen ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <Container className="py-2.5 sm:py-3.5">
        <div
          className={cn(
            "flex min-h-[64px] items-center gap-2.5 rounded-full border px-2.5 py-1.5 shadow-[0_10px_24px_rgba(10,25,35,0.06)] backdrop-blur-xl sm:px-3.5",
            isDarkTheme
              ? "border-white/12 bg-[rgba(10,25,35,0.78)]"
              : "border-steel-mist/85 surface-header-pill",
          )}
        >
          <div
            className={cn(
              "relative shrink-0",
              isDarkTheme &&
                "before:pointer-events-none before:absolute before:-inset-2 before:rounded-full before:bg-[radial-gradient(circle,rgba(88,224,242,0.18)_0%,rgba(88,224,242,0.09)_20%,rgba(88,224,242,0)_68%)] before:blur-2xl before:content-['']",
            )}
          >
            <SiteBrand className="shrink-0" theme={theme} />
          </div>

          <div className="hidden min-w-0 flex-1 justify-center lg:flex">
            <div
              className={cn(
                "rounded-full border px-1.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]",
                isDarkTheme
                  ? "border-white/10 bg-[rgba(19,42,56,0.86)]"
                  : "border-steel-mist/80 surface-rail-panel",
              )}
            >
              <DesktopNavigation
                key={pathname}
                pathname={pathname}
                theme={theme}
                onMenuOpenChange={(open) => {
                  desktopMenuOpenRef.current = open;
                  setDesktopMenuOpen(open);
                }}
              />
            </div>
          </div>

          <div className="hidden items-center lg:flex">
            <div
              className={cn(
                "flex items-center gap-1.5 rounded-full border p-1 shadow-[0_6px_16px_rgba(10,25,35,0.04)]",
                isDarkTheme
                  ? "border-white/10 bg-[rgba(19,42,56,0.82)]"
                  : "border-steel-mist/80 surface-rail-panel",
              )}
            >
              <Link
                href="/contact"
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200",
                  isDarkTheme
                    ? "text-text-on-dark hover:bg-white/5 hover:text-ethiorail-bright-green"
                    : "text-rail-ink hover:bg-[rgba(88,224,242,0.1)] hover:text-deep-slate",
                  isAmharic ? "font-medium tracking-normal" : "font-semibold",
                )}
              >
                {nav("contact")}
              </Link>
              <LocaleSwitcher variant="compact" tone={theme} />
              <LinkButton
                href="/quote"
                size="default"
                className="min-h-10 rounded-full px-4 py-2"
              >
                {t("getQuote")}
              </LinkButton>
            </div>
          </div>

          <div className="ml-auto lg:hidden">
            <MobileNavigation
              key={pathname}
              pathname={pathname}
              theme={theme}
              onMenuOpenChange={(open) => {
                mobileMenuOpenRef.current = open;
                setMobileMenuOpen(open);
              }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
