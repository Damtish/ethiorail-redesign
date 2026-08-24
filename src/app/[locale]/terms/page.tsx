import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {LegalPage} from "@/components/interior/LegalPage";
import {isAppLocale} from "@/i18n/routing";
type Props = {params: Promise<{locale: string}>};
const copy = {en: {eyebrow: "TERMS", title: "Terms information is being prepared.", description: "This page will publish approved terms before the website launch.", paragraphs: ["A complete terms document requires review of the organization’s services, responsibilities, limitations, and governing information.", "No comprehensive legal terms are being invented in this planning build."]}, am: {eyebrow: "ውሎች", title: "የአጠቃቀም ውሎች እየተዘጋጁ ነው።", description: "ይህ ገጽ ከድረ-ገጹ መጀመር በፊት የተፈቀዱ ውሎችን ይይዛል።", paragraphs: ["የተሟላ የአጠቃቀም ውሎች ሰነድ የድርጅቱን አገልግሎቶች፣ ኃላፊነቶች እና ገደቦች ማጽደቅን ይፈልጋል።", "በዚህ የዕቅድ ግንባታ ላይ ሙሉ የሕግ ውሎች አልተፈጠሩም።"]}};
export async function generateMetadata({params}: Props): Promise<Metadata> { const {locale} = await params; if (!isAppLocale(locale)) notFound(); const value = copy[locale]; setRequestLocale(locale); return {title: `${value.eyebrow} | EthioRail Logistics`, description: value.description}; }
export default async function TermsPage({params}: Props) { const {locale} = await params; if (!isAppLocale(locale)) notFound(); const value = copy[locale]; setRequestLocale(locale); return <LegalPage {...value} breadcrumbs={[{label: locale === "am" ? "መነሻ" : "Home", href: "/"}, {label: value.eyebrow}]} />; }
