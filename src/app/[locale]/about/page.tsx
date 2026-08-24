import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {AboutPage, type AboutPageContent} from "@/components/interior/AboutPage";
import {isAppLocale} from "@/i18n/routing";
import amMessages from "../../../../messages/am.json";
import enMessages from "../../../../messages/en.json";

type PageProps = {params: Promise<{locale: string}>};
type LocaleMessages = {Navigation: Record<string, string>; AboutPage: {overview: AboutPageContent}};

function loadMessages(locale: "en" | "am") {
  return (locale === "am" ? amMessages : enMessages) as LocaleMessages;
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {locale} = await params;
  if (!isAppLocale(locale)) notFound();
  const messages = loadMessages(locale);
  setRequestLocale(locale);
  return {title: messages.AboutPage.overview.metadata.title, description: messages.AboutPage.overview.metadata.description};
}

export default async function AboutOverviewPage({params}: PageProps) {
  const {locale} = await params;
  if (!isAppLocale(locale)) notFound();
  const messages = loadMessages(locale);
  setRequestLocale(locale);
  return (
    <AboutPage
      content={messages.AboutPage.overview}
      breadcrumbs={[
        {label: locale === "am" ? "መነሻ" : "Home", href: "/"},
        {label: locale === "am" ? "ስለ እኛ" : "About"},
      ]}
    />
  );
}
