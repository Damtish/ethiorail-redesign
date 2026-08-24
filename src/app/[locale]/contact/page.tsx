import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {ContactQuotePage} from "@/components/interior/ContactQuotePage";
import {isAppLocale} from "@/i18n/routing";
import {contactQuoteContent} from "@/components/interior/contactQuoteContent";

type Props = {params: Promise<{locale: string}>};
function load(locale: "en" | "am") { return contactQuoteContent[locale].contact; }
export async function generateMetadata({params}: Props): Promise<Metadata> { const {locale} = await params; if (!isAppLocale(locale)) notFound(); const content = load(locale); setRequestLocale(locale); return content.metadata; }
export default async function ContactPage({params}: Props) { const {locale} = await params; if (!isAppLocale(locale)) notFound(); const content = load(locale); setRequestLocale(locale); return <ContactQuotePage kind="contact" content={content} breadcrumbs={[{label: locale === "am" ? "መነሻ" : "Home", href: "/"}, {label: content.hero.eyebrow}]} />; }
