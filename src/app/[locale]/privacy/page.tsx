import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {LegalPage} from "@/components/interior/LegalPage";
import {isAppLocale} from "@/i18n/routing";
type Props = {params: Promise<{locale: string}>};
const copy = {en: {eyebrow: "PRIVACY", title: "Privacy information is being prepared.", description: "This page will publish approved privacy information before the website launch.", paragraphs: ["A complete privacy policy requires review and approval of the organization’s data practices, contact details, retention rules, and rights information.", "No comprehensive legal policy is being invented in this planning build."]}, am: {eyebrow: "ግላዊነት", title: "የግላዊነት መረጃ እየተዘጋጀ ነው።", description: "ይህ ገጽ ከድረ-ገጹ መጀመር በፊት የተፈቀደ የግላዊነት መረጃ ይይዛል።", paragraphs: ["የተሟላ የግላዊነት ፖሊሲ የድርጅቱን የመረጃ አጠቃቀም እና የመብት መረጃ ማጽደቅን ይፈልጋል።", "በዚህ የዕቅድ ግንባታ ላይ ሙሉ የሕግ ፖሊሲ አልተፈጠረም።"]}};
export async function generateMetadata({params}: Props): Promise<Metadata> { const {locale} = await params; if (!isAppLocale(locale)) notFound(); const value = copy[locale]; setRequestLocale(locale); return {title: `${value.eyebrow} | EthioRail Logistics`, description: value.description}; }
export default async function PrivacyPage({params}: Props) { const {locale} = await params; if (!isAppLocale(locale)) notFound(); const value = copy[locale]; setRequestLocale(locale); return <LegalPage {...value} breadcrumbs={[{label: locale === "am" ? "መነሻ" : "Home", href: "/"}, {label: value.eyebrow}]} />; }
