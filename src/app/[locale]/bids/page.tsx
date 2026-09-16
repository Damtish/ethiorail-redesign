import {BidsPanel} from "@/components/shared/BidsPanel";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {isAppLocale} from "@/i18n/routing";
type Props={params:Promise<{locale:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {locale}=await params;if(!isAppLocale(locale))notFound();return {title:locale==="am"?"ጨረታዎች | ኢትዮ ሬይል":"Bids | Ethio Rail Logistics"};}
export default async function BidsPage({params}:Props){const {locale}=await params;if(!isAppLocale(locale))notFound();setRequestLocale(locale);const am=locale==="am";return <main id="main-content" className="section-white"><div className="erl-container bids-shell"><p className="eyebrow">{am?"ጨረታዎች":"BIDS & PROCUREMENT"}</p><h1 className="section-title">{am?"ግልጽ እና የተደራሽ የግዥ መረጃ":"A clear view of procurement opportunities."}</h1><p className="section-copy">{am?"አሁን የሚገኙ እና የተዘጉ ጨረታዎች በዚህ ገጽ ይታያሉ።":"Active and archived opportunities will appear here as they are published."}</p><BidsPanel am={am}/></div></main>}
