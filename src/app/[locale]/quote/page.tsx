import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {QuoteWizard} from "@/components/forms/QuoteWizard";
import {Breadcrumbs} from "@/components/interior/Breadcrumbs";
import {isAppLocale} from "@/i18n/routing";
import {contactQuoteContent} from "@/components/interior/contactQuoteContent";

type Props = {params: Promise<{locale: string}>};
function load(locale: "en" | "am") { return contactQuoteContent[locale].quote; }
export async function generateMetadata({params}: Props): Promise<Metadata> { const {locale} = await params; if (!isAppLocale(locale)) notFound(); const content = load(locale); setRequestLocale(locale); return content.metadata; }
export default async function QuotePage({params}: Props) { const {locale} = await params; if (!isAppLocale(locale)) notFound(); const content = load(locale); setRequestLocale(locale); return <main id="main-content"><section className="interior-hero quote-hero"><div className="erl-container"><Breadcrumbs items={[{label: locale === "am" ? "መነሻ" : "Home",href:"/"},{label:content.hero.eyebrow}]}/><div className="hero-content"><p className="eyebrow">{content.hero.eyebrow}</p><h1>{locale==="am"?"የጭነት ጉዞዎን ያቅዱ።":"Let’s plan your cargo journey."}</h1><p className="hero-description">{locale==="am"?"በአምስት ደረጃዎች የጭነትዎን ዝርዝር ያዘጋጁ።":"Prepare your shipment details in five simple steps."}</p></div></div></section><QuoteWizard/></main>; }
