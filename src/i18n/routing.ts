import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "am"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type AppLocale = (typeof routing.locales)[number];

export function isAppLocale(locale: string | undefined): locale is AppLocale {
  return Boolean(locale && routing.locales.includes(locale as AppLocale));
}
