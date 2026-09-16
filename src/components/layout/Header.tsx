"use client";
import {useLocale,useTranslations} from "next-intl";
import {usePathname,Link} from "@/i18n/navigation";
import {SiteBrand} from "./SiteBrand";
import {DesktopNavigation} from "./DesktopNavigation";
import {MobileNavigation} from "./MobileNavigation";
import {ThemeToggle} from "@/components/shared/ThemeToggle";
export function Header(){const pathname=usePathname();const am=useLocale()==="am";const t=useTranslations("Navigation");return <header className="erl-header"><a className="skip-link" href="#main-content">{am?"ወደ ዋናው ይዘት ይሂዱ":"Skip to content"}</a><div className="header-top"><SiteBrand/><span className="header-tagline"><span lang="en" className="official-motto">Your Trusted Partner in Motion</span></span><div className="header-controls"><nav className="language-control" aria-label={am?"ቋንቋ":"Language"}><Link href={pathname} locale="en" aria-current={!am?"page":undefined}>EN</Link><Link href={pathname} locale="am" aria-current={am?"page":undefined}>አማ</Link></nav><ThemeToggle/><Link href="/digital-logistics#future-portal" className="login-link desktop-only" title={am?"የደንበኛ ፖርታል በዝግጅት ላይ":"Customer portal coming soon"}>{am?"ግባ":"Login"}</Link><Link href="/quote" className="erl-button desktop-only">{t("getQuote")} ↗</Link><MobileNavigation key={pathname} pathname={pathname}/></div></div><DesktopNavigation key={pathname} pathname={pathname}/></header>;}
