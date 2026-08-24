import type {Metadata} from "next";
import localFont from "next/font/local";
import {NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import type {ReactNode} from "react";
import {setRequestLocale} from "next-intl/server";

import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {routing, isAppLocale} from "@/i18n/routing";

import "../globals.css";

const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [
    {
      path: "../../fonts/Manrope-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Manrope-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Manrope-600.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Manrope-700.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const notoSansEthiopic = localFont({
  variable: "--font-ethiopic",
  display: "swap",
  src: [
    {
      path: "../../fonts/NotoSansEthiopic-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSansEthiopic-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSansEthiopic-600.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/NotoSansEthiopic-700.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../../messages/${locale}.json`)).default as {
    Foundation: {
      title: string;
      description: string;
    };
  };

  return {
    title: messages.Foundation.title,
    description: messages.Foundation.description,
  };
}

export default async function LocaleLayout({children, params}: LocaleLayoutProps) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../../messages/${locale}.json`)).default as {
    Foundation: {
      label: string;
      title: string;
      description: string;
      language: string;
    };
    Language: {
      english: string;
      amharic: string;
    };
  };

  return (
    <html lang={locale} className={`${manrope.variable} ${notoSansEthiopic.variable}`}>
      <body className="surface-mint-canvas text-rail-ink antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
