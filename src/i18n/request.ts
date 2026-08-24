import {notFound} from "next/navigation";
import {getRequestConfig} from "next-intl/server";

import {routing, isAppLocale} from "./routing";

export default getRequestConfig(async ({requestLocale}) => {
  const requestedLocale = await requestLocale;

  if (requestedLocale && !isAppLocale(requestedLocale)) {
    notFound();
  }

  const locale = isAppLocale(requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
