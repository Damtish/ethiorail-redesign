import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {NetworkPage, type NetworkPageContent} from "@/components/interior/NetworkPage";
import {isAppLocale, routing} from "@/i18n/routing";
import amMessages from "../../../../../messages/am.json";
import enMessages from "../../../../../messages/en.json";

const pageKeys = {
  "ethiopia-djibouti-corridor": "corridor",
  locations: "locations",
  "schedules-routes": "schedulesRoutes",
} as const;

type PageKey = keyof typeof pageKeys;
type PageProps = {params: Promise<{locale: string; slug: string}>};
type LocaleMessages = {Navigation: Record<string, string>; NetworkPage: Record<string, NetworkPageContent>};

function loadMessages(locale: "en" | "am") {
  return (locale === "am" ? amMessages : enMessages) as LocaleMessages;
}

async function resolveParams(params: PageProps["params"]) {
  const {locale, slug} = await params;
  if (!isAppLocale(locale) || !(slug in pageKeys)) notFound();
  return {locale, slug: slug as PageKey};
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => Object.keys(pageKeys).map((slug) => ({locale, slug})));
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {locale, slug} = await resolveParams(params);
  const messages = loadMessages(locale);
  setRequestLocale(locale);
  return {title: messages.NetworkPage[pageKeys[slug]].metadata.title, description: messages.NetworkPage[pageKeys[slug]].metadata.description};
}

export default async function NetworkDetailPage({params}: PageProps) {
  const {locale, slug} = await resolveParams(params);
  const messages = loadMessages(locale);
  const nav = messages.Navigation;
  const content = messages.NetworkPage[pageKeys[slug]];
  setRequestLocale(locale);
  return (
    <NetworkPage
      content={content}
      breadcrumbs={[
        {label: nav.home ?? (locale === "am" ? "መነሻ" : "Home"), href: "/"},
        {label: nav.network ?? (locale === "am" ? "ኔትወርክ" : "Network"), href: "/network"},
        {label: content.hero.eyebrow},
      ]}
    />
  );
}
