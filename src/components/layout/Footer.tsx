"use client";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import {footerSections} from "@/lib/navigation";
import {SiteBrand} from "./SiteBrand";
export function Footer(){const t=useTranslations("Footer"),nav=useTranslations("Navigation");return <footer className="site-footer"><div className="erl-container"><div className="footer-top"><SiteBrand variant="footer"/><div className="button-row"><Link href="/quote" className="erl-button">{nav("getQuote")} ↗</Link><Link href="/contact" className="text-link">{nav("contact")} →</Link></div></div><div className="footer-links">{footerSections.map(group=><div key={group.key}><h2>{nav(group.labelKey)}</h2><div>{group.items.map(item=><Link href={item.href} key={item.href}>{nav(item.labelKey)}</Link>)}</div></div>)}</div><div className="footer-bottom"><p>{t("copyright")}</p><p><span lang="en" className="official-motto">Your Trusted Partner in Motion</span></p></div></div></footer>;}
