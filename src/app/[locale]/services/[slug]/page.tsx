import type {Metadata} from "next";
import {notFound, permanentRedirect} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {ServiceDetailPage, type ServiceDetailMessages} from "@/components/interior/ServiceDetailPage";
import {isAppLocale, routing} from "@/i18n/routing";
import amMessages from "../../../../../messages/am.json";
import enMessages from "../../../../../messages/en.json";

const serviceKeys = {
  "value-added-logistics": "ValueAddedService",
  "supply-chain-solutions": "SupplyChainService",
  "ocean-freight": "OceanFreightService",
  "rail-inland-transportation": "LandRailService",
  "freight-forwarding": "FreightForwardingService",
  "customs-clearance": "CustomsClearanceService",
  "warehousing-distribution": "WarehousingService",
  "dry-port-terminal-services": "DryPortTerminalService",
  "inland-dry-port": "InlandDryPortService",
  "voyage-charter": "VoyageCharterService",
} as const;

const legacySlugs: Record<string,string> = {"land-rail-transportation":"rail-inland-transportation","ocean-freight-nvocc":"ocean-freight","warehousing":"warehousing-distribution","inland-dry-port":"dry-port-terminal-services"};
type ServiceSlug = keyof typeof serviceKeys;
type PageProps = {params: Promise<{locale: string; slug: string}>};

type LocaleMessages = Record<(typeof serviceKeys)[ServiceSlug], ServiceDetailMessages>;

function loadMessages(locale: "en" | "am", slug: ServiceSlug) {
  const messages = (locale === "am" ? amMessages : enMessages) as LocaleMessages;
  return messages[serviceKeys[slug]];
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => Object.keys(serviceKeys).map((slug) => ({locale, slug})));
}

async function resolveParams(params: PageProps["params"]) {
  const {locale, slug} = await params;
  if (!isAppLocale(locale)) notFound();
  if (Object.hasOwn(legacySlugs,slug)) permanentRedirect("/"+locale+"/services/"+legacySlugs[slug]);
  if (!Object.hasOwn(serviceKeys,slug)) notFound();
  return {locale, slug: slug as ServiceSlug};
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {locale, slug} = await resolveParams(params);
  setRequestLocale(locale);
  const messages = await loadMessages(locale, slug);
  return {title: messages.metadata.title, description: messages.metadata.description};
}

export default async function ServiceDetailRoute({params}: PageProps) {
  const {locale, slug} = await resolveParams(params);
  setRequestLocale(locale);
  const messages = await loadMessages(locale, slug);
  return <ServiceDetailPage messages={messages} />;
}
