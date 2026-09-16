"use client";
import {useLocale} from "next-intl";
import {Link} from "@/i18n/navigation";
export default function NotFound(){const am=useLocale()==="am";return <main id="main-content"><section className="interior-hero"><div className="erl-container hero-content"><p className="eyebrow">404</p><h1>{am?"ይህ መንገድ እዚህ አይደርስም።":"This route doesn’t go here."}</h1><div className="button-row centered"><Link className="erl-button" href="/">{am?"ወደ መነሻ":"Return Home"}</Link><Link className="erl-button secondary" href="/network">{am?"ኔትወርኩን ይመልከቱ":"Explore Our Network"}</Link></div></div></section></main>;}
