"use client";

import type {JSX} from "react";

import {useTranslations} from "next-intl";

import {LinkButton} from "@/components/ui/LinkButton";
import {LocaleSwitcher} from "@/components/shared/LocaleSwitcher";
import {Link} from "@/i18n/navigation";
import {footerSections} from "@/lib/navigation";
import {cn} from "@/lib/cn";
import {SiteBrand} from "./SiteBrand";
type SocialIconProps = {
  className?: string;
};

type SocialPlatform = {
  name: string;
  href: string;
  label: string;
  hoverClassName: string;
  Icon: (props: SocialIconProps) => JSX.Element;
};

const socialPlatforms: SocialPlatform[] = [
  {
    name: "TikTok",
    href: "#",
    label: "Visit Ethio Rail Logistics on TikTok",
    hoverClassName:
      "hover:border-[#111827] hover:bg-[#111827] hover:text-white hover:shadow-[0_8px_18px_rgba(17,24,39,0.18)]",
    Icon: ({className}) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.2 4.2c.3 2.1 1.5 3.4 3.6 3.6v2.7a8 8 0 0 1-3.6-1.1v6.2a4.6 4.6 0 1 1-4.6-4.6c.3 0 .6 0 .9.1v2.8a2 2 0 1 0 1.3 1.7V4.2h2.4Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    label: "Visit Ethio Rail Logistics on Instagram",
    hoverClassName:
      "hover:border-[#C13584] hover:bg-[linear-gradient(135deg,#F58529,#DD2A7B_52%,#8134AF)] hover:text-white hover:shadow-[0_8px_18px_rgba(193,53,132,0.2)]",
    Icon: ({className}) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="17.5" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    label: "Visit Ethio Rail Logistics on X",
    hoverClassName:
      "hover:border-[#111827] hover:bg-[#111827] hover:text-white hover:shadow-[0_8px_18px_rgba(17,24,39,0.18)]",
    Icon: ({className}) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.4 4.5h3.4l3.1 4.4 3.8-4.4h2.9l-5.3 6.2 5.7 8.8h-3.4l-3.5-5.3-4.6 5.3H4.6l6.1-7.1-5.3-7.9Zm2.1 1.8 7.2 11.4h1.7L9.2 6.3H7.5Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    label: "Visit Ethio Rail Logistics on Facebook",
    hoverClassName:
      "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:shadow-[0_8px_18px_rgba(24,119,242,0.2)]",
    Icon: ({className}) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.4 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.2-1.4 1.5-1.4h1.5V4.5c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.2H8.4V13h2.4v7h2.6Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    label: "Visit Ethio Rail Logistics on LinkedIn",
    hoverClassName:
      "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_8px_18px_rgba(10,102,194,0.2)]",
    Icon: ({className}) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.2 8.1A1.7 1.7 0 1 1 5.2 4.7a1.7 1.7 0 0 1 0 3.4ZM3.7 9.5h3v9.8h-3V9.5Zm4.9 0h2.9v1.3h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8v5.4h-3v-4.8c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4v4.9h-3V9.5Z" />
      </svg>
    ),
  },
];

export function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navigation");
  const actions = useTranslations("Actions");

  return (
    <footer
      className="relative isolate bg-[#DDEBE7] text-rail-ink"
      data-header-theme="light"
    >
      <div className="mx-auto max-w-[92rem] px-4 py-3.5 sm:px-5 sm:py-4 lg:px-8 lg:py-5">
        <div className="relative overflow-hidden rounded-[24px] border border-[rgba(0,149,7,0.14)] bg-[linear-gradient(110deg,#E5F1EC_0%,#EEF5F2_46%,#DDF3F7_100%)] shadow-[0_20px_56px_rgba(10,25,35,0.09)] sm:rounded-[30px] lg:rounded-[36px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(0,149,7,0.12)_0%,rgba(0,149,7,0.04)_20%,rgba(0,149,7,0)_44%),radial-gradient(circle_at_86%_18%,rgba(88,224,242,0.11)_0%,rgba(88,224,242,0.04)_16%,rgba(88,224,242,0)_34%),radial-gradient(circle_at_56%_78%,rgba(0,179,11,0.045)_0%,rgba(0,179,11,0.015)_14%,rgba(0,179,11,0)_32%)] opacity-90"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,149,7,0.14)] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(88,224,242,0.1)] to-transparent" />

          <div className="relative z-10 px-5 py-[1.625rem] sm:px-7 sm:py-7 lg:px-9 lg:py-9 xl:px-11 xl:py-10">
            <div className="grid gap-7 lg:grid-cols-[minmax(0,0.37fr)_minmax(0,0.63fr)] lg:gap-9 xl:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)]">
              <div className="relative space-y-[1.125rem]">
                <div className="relative z-10 max-w-[21rem] sm:max-w-[24rem] lg:max-w-[26rem]">
                  <SiteBrand variant="footer" />
                </div>

                <div className="relative z-10 flex flex-wrap gap-2.5 pt-1">
                  <LinkButton href="/quote" size="default" className="rounded-full px-4">
                    {actions("getQuote")}
                  </LinkButton>
                  <Link
                    href="/contact"
                    className={cn(
                      "inline-flex items-center justify-center rounded-full border border-[rgba(0,149,7,0.14)] bg-[rgba(221,243,247,0.72)] px-4 py-2.5 text-sm font-semibold text-rail-ink transition-colors duration-200 hover:border-[rgba(0,107,7,0.2)] hover:bg-[rgba(221,243,247,0.92)] hover:text-deep-slate",
                    )}
                  >
                    {actions("contact")}
                  </Link>
                </div>

                <nav aria-label="Social media" className="relative z-10 flex flex-wrap gap-2 pt-0.5">
                  {socialPlatforms.map(({name, href, label, hoverClassName, Icon}) => (
                    <a
                      key={name}
                      href={href}
                      aria-label={label}
                      className={cn(
                        "inline-flex size-11 items-center justify-center rounded-full border border-[rgba(10,25,35,0.16)] bg-[rgba(255,255,255,0.38)] text-rail-ink transition-[background-color,border-color,color,box-shadow,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ethiorail-green focus-visible:ring-offset-2 focus-visible:ring-offset-[#E5F1EC] sm:size-12",
                        hoverClassName,
                      )}
                    >
                      <Icon className="size-5" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5 xl:gap-7">
                {footerSections.map((section) => (
                  <div key={section.key} className="space-y-2.5">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-deep-green">
                      {nav(section.labelKey)}
                    </p>
                    <div className="grid gap-1.5">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "text-sm leading-[1.45] font-medium text-rail-ink transition-colors duration-200 hover:text-ethiorail-green",
                            item.labelKey === "getQuote" && "text-ethiorail-green",
                          )}
                        >
                          {nav(item.labelKey)}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 border-t border-[rgba(0,149,7,0.15)] pt-3.5 sm:mt-8 sm:pt-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <p className="text-sm text-secondary-text">{t("copyright")}</p>
                <LocaleSwitcher variant="expanded" tone="light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
