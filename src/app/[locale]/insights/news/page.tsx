import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {CareerInsightsPage} from "@/components/interior/CareerInsightsPage";
import {careerInsightsContent} from "@/components/interior/careerInsightsContent";
import {isAppLocale} from "@/i18n/routing";

type Props = {params: Promise<{locale: string}>};
export async function generateMetadata({params}: Props): Promise<Metadata> { const {locale} = await params; if (!isAppLocale(locale)) notFound(); setRequestLocale(locale); return careerInsightsContent[locale].news.metadata; }
export default async function NewsPage({params}: Props) { const {locale} = await params; if (!isAppLocale(locale)) notFound(); setRequestLocale(locale); const content = careerInsightsContent[locale].news; return <CareerInsightsPage content={content} breadcrumbs={[{label: locale === "am" ? "መነሻ" : "Home", href: "/"}, {label: locale === "am" ? "ግንዛቤዎች" : "Insights", href: "/insights"}, {label: content.hero.eyebrow}]} />; }
