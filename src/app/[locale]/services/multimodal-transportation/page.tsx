import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {PrototypeJourneyPage} from "@/components/interior/PrototypeJourneyPage";
import {isAppLocale} from "@/i18n/routing";

type PageProps = {params: Promise<{locale: string}>};

type MultimodalMessages = {
  metadata: {title: string; description: string};
  breadcrumbs: {home: string; services: string; current: string};
  hero: {eyebrow: string; title: string; description: string; image: string; imageAlt: string; video?: string; videoPoster?: string};
  overview: {eyebrow: string; title: string; paragraphs: string[]};
  journey: {eyebrow: string; title: string; steps: Array<{title: string; description: string}>};
  modes: {eyebrow: string; title: string; items: Array<{title: string; description: string}>};
  corridor: {eyebrow: string; title: string; description: string; image: string; imageAlt: string};
  value: {eyebrow: string; title: string; items: Array<{title: string; description: string}>};
  related: {eyebrow: string; title: string; links: Array<{label: string; href: string}>};
  cta: {eyebrow: string; title: string; description: string; primary: string; secondary: string; primaryHref: string; secondaryHref: string};
};

async function loadMessages(locale: "en" | "am") {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default as {MultimodalService: MultimodalMessages};
  return messages.MultimodalService;
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {locale} = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const messages = await loadMessages(locale);
  return {title: messages.metadata.title, description: messages.metadata.description};
}

export default async function MultimodalTransportationPage({params}: PageProps) {
  const {locale} = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const messages = await loadMessages(locale);

  return <PrototypeJourneyPage locale={locale} messages={messages} />;
}
