import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {AboutPage, type AboutPageContent} from "@/components/interior/AboutPage";
import {isAppLocale} from "@/i18n/routing";

type Props = {params: Promise<{locale: string}>};
const content: Record<"en" | "am", AboutPageContent> = {
  en: {
    metadata: {title: "Sustainability | Ethio Rail Logistics", description: "Explore a more responsible approach to connected freight movement."},
    hero: {eyebrow: "SUSTAINABILITY", title: "Moving freight more responsibly.", description: "We are building a logistics approach that considers efficient modes, coordinated routes, and the environmental context of moving cargo.", image: "/media/images/rail/ethiopia/ethiopian-railway-locomotive-01.jpg", imageAlt: "Rail locomotive moving freight through Ethiopia."},
    intro: {eyebrow: "A PRACTICAL DIRECTION", title: "Efficiency and responsibility belong in the same journey.", paragraphs: ["Greater use of rail where appropriate, route optimization, shipment consolidation, and reducing empty movements can support more considered freight planning.", "Fleet efficiency, environmental monitoring, emissions awareness, and waste reduction are part of the direction for improving logistics over time. This page does not publish unverified emissions figures or certifications."]},
    feature: {eyebrow: "AREAS OF FOCUS", title: "Small decisions across the route add up.", items: [{title: "Rail where suitable", description: "Consider rail-centered movement for appropriate long-distance freight requirements."}, {title: "Consolidated journeys", description: "Coordinate shared cargo and fewer unnecessary movements where the route allows."}, {title: "Continuous awareness", description: "Build environmental monitoring and efficiency considerations into future planning."}]},
    related: {eyebrow: "KEEP EXPLORING", title: "See the services and route behind the approach.", links: [{label: "Services", href: "/services"}, {label: "Ethiopia–Djibouti Corridor", href: "/network/ethiopia-djibouti-corridor"}, {label: "About EthioRail", href: "/about"}]},
    cta: {eyebrow: "PLAN A MOVE", title: "Start with the route and the cargo.", description: "Share the movement context so the right combination of stages can be considered.", primary: "Get a Quote", secondary: "Contact Logistics", primaryHref: "/quote", secondaryHref: "/contact"},
  },
  am: {
    metadata: {title: "ዘላቂነት | ኢትዮ ሬይል ሎጂስቲክስ", description: "ለተገናኘ የጭነት እንቅስቃሴ የበለጠ ኃላፊነት ያለውን አቀራረብ ይመልከቱ።"},
    hero: {eyebrow: "ዘላቂነት", title: "ጭነትን በበለጠ ኃላፊነት ማንቀሳቀስ።", description: "ቀልጣፋ ሞዶችን፣ የተቀናጁ መንገዶችን እና የጭነት እንቅስቃሴ የአካባቢ አውድን የሚያስቡ የሎጂስቲክስ አቀራረቦችን እየገነባን ነው።", image: "/media/images/rail/ethiopia/ethiopian-railway-locomotive-01.jpg", imageAlt: "በኢትዮጵያ የጭነት ባቡር ሎኮሞቲቭ።"},
    intro: {eyebrow: "ተግባራዊ አቅጣጫ", title: "ቅልጥፍና እና ኃላፊነት በአንድ ጉዞ ውስጥ።", paragraphs: ["ተስማሚ በሆነ ጊዜ ባቡርን በበለጠ መጠቀም፣ መንገድን ማመቻቸት፣ ጭነትን ማጠናከር እና ባዶ እንቅስቃሴን መቀነስ የተሻለ የጭነት ዕቅድን ይደግፋል።", "የተሽከርካሪ ቅልጥፍና፣ የአካባቢ ክትትል፣ የልቀት ግንዛቤ እና የብክነት ቅነሳ በጊዜ ሂደት ሎጂስቲክስን ለማሻሻል የሚያግዙ አቅጣጫዎች ናቸው።" ]},
    feature: {eyebrow: "የትኩረት መስኮች", title: "በመንገዱ ላይ ያሉ ትንንሽ ውሳኔዎች ውጤት ይኖራቸዋል።", items: [{title: "ባቡር ተስማሚ ሲሆን", description: "ለተስማሚ የረጅም ርቀት ጭነት የባቡር ማዕከላዊ እንቅስቃሴን ያስቡ።"}, {title: "የተጠናከረ ጉዞ", description: "መንገዱ በሚፈቅድበት ጊዜ የተካፈለ ጭነትን እናስተባብራለን።"}, {title: "ቀጣይ ግንዛቤ", description: "የአካባቢ ክትትልን እና የቅልጥፍና ጉዳዮችን በወደፊት ዕቅድ ውስጥ እናካትታለን።"}]},
    related: {eyebrow: "ተጨማሪ ይመልከቱ", title: "ከአቀራረቡ በስተጀርባ ያለውን አገልግሎት እና መንገድ ይመልከቱ።", links: [{label: "አገልግሎቶች", href: "/services"}, {label: "ኢትዮ–ጅቡቲ ኮሪደር", href: "/network/ethiopia-djibouti-corridor"}, {label: "ስለ ኢትዮ ሬይል", href: "/about"}]},
    cta: {eyebrow: "ጉዞ ያቅዱ", title: "በመንገዱ እና በጭነቱ ይጀምሩ።", description: "ተስማሚው የእንቅስቃሴ ደረጃ እንዲታሰብ የጭነቱን አውድ ያካፍሉ።", primary: "ጥቅስ ይጠይቁ", secondary: "አግኙን", primaryHref: "/quote", secondaryHref: "/contact"},
  },
};

export async function generateMetadata({params}: Props): Promise<Metadata> { const {locale} = await params; if (!isAppLocale(locale)) notFound(); return content[locale].metadata; }
export default async function SustainabilityPage({params}: Props) { const {locale} = await params; if (!isAppLocale(locale)) notFound(); setRequestLocale(locale); return <AboutPage content={content[locale]} breadcrumbs={[{label: locale === "am" ? "መነሻ" : "Home", href: "/"}, {label: content[locale].hero.eyebrow}]} />; }
