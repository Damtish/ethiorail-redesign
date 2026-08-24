import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {AboutPage, type AboutPageContent} from "@/components/interior/AboutPage";
import {isAppLocale, routing} from "@/i18n/routing";
import amMessages from "../../../../../messages/am.json";
import enMessages from "../../../../../messages/en.json";

const pageKeys = {
  leadership: "leadership",
  "vision-mission": "visionMission",
} as const;

type PageKey = keyof typeof pageKeys;
type PageProps = {params: Promise<{locale: string; slug: string}>};
type LocaleMessages = {AboutPage: Record<string, AboutPageContent>};

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
  const content = loadMessages(locale).AboutPage[pageKeys[slug]];
  setRequestLocale(locale);
  return {title: content.metadata.title, description: content.metadata.description};
}

export default async function AboutDetailPage({params}: PageProps) {
  const {locale, slug} = await resolveParams(params);
  const content = loadMessages(locale).AboutPage[pageKeys[slug]];
  setRequestLocale(locale);
  return (
    <AboutPage
      content={content}
      breadcrumbs={[
        {label: locale === "am" ? "መነሻ" : "Home", href: "/"},
        {label: locale === "am" ? "ስለ እኛ" : "About", href: "/about"},
        {label: content.hero.eyebrow},
      ]}
    />
  );
}
