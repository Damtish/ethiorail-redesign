import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {DigitalPrototype} from "@/components/home/DigitalPrototype";
import {isAppLocale} from "@/i18n/routing";
import amMessages from "../../../../messages/am.json";
import enMessages from "../../../../messages/en.json";

type Props = {params: Promise<{locale: string}>};
const content = {en: enMessages.Home.digital, am: amMessages.Home.digital};
export async function generateMetadata({params}: Props): Promise<Metadata> { const {locale} = await params; if (!isAppLocale(locale)) notFound(); return {title: locale === "am" ? "ዲጂታል ሎጂስቲክስ | ኢትዮ ሬይል" : "Digital Logistics | Ethio Rail Logistics", description: content[locale].description}; }
export default async function DigitalLogisticsPage({params}: Props) { const {locale} = await params; if (!isAppLocale(locale)) notFound(); setRequestLocale(locale); return <DigitalPrototype locale={locale} content={content[locale]} />; }
