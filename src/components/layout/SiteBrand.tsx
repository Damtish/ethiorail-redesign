"use client";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
export function SiteBrand({className="",variant="shell"}:{className?:string;variant?:"shell"|"footer";theme?:"dark"|"light"}){const t=useTranslations("Brand");return <Link href="/" aria-label={t("homeLabel")} className={`site-brand ${variant==="footer"?"footer-brand":""} ${className}`}><Image src="/media/brand/ethiorail-logo-light-surface-display.png" alt={t("logoAlt")} width={957} height={379} className="brand-light" priority/><Image src="/media/brand/ethiorail-logo-dark-surface-display.png" alt="" aria-hidden="true" width={469} height={187} className="brand-dark" priority/></Link>;}
