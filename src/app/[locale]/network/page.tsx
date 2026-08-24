import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {NetworkPage, type NetworkPageContent} from "@/components/interior/NetworkPage";
import {isAppLocale} from "@/i18n/routing";
import amMessages from "../../../../messages/am.json";
import enMessages from "../../../../messages/en.json";

type PageProps = {params: Promise<{locale: string}>};
type LocaleMessages = {Navigation: Record<string, string>; NetworkPage: {overview: NetworkPageContent}};

function loadMessages(locale: "en" | "am") {
  return (locale === "am" ? amMessages : enMessages) as LocaleMessages;
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {locale} = await params;
  if (!isAppLocale(locale)) notFound();
  const messages = loadMessages(locale);
  setRequestLocale(locale);
  return {title: messages.NetworkPage.overview.metadata.title, description: messages.NetworkPage.overview.metadata.description};
}

export default async function NetworkOverviewPage({params}: PageProps) {
  const {locale} = await params;
  if (!isAppLocale(locale)) notFound();
  const messages = loadMessages(locale);
  setRequestLocale(locale);
  return (
    <NetworkPage
      content={messages.NetworkPage.overview}
      breadcrumbs={[
        {label: messages.Navigation.home ?? (locale === "am" ? "መነሻ" : "Home"), href: "/"},
        {label: messages.Navigation.network ?? (locale === "am" ? "ኔትወርክ" : "Network")},
      ]}
    />
  );
}
