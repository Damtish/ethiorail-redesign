import {services} from "@/lib/services";
import type {MetadataRoute} from "next";
const locales = ["en", "am"];
const paths = ["", "/services", "/network", "/network/ethiopia-djibouti-corridor", "/network/locations", "/network/schedules-routes", "/about", "/about/leadership", "/about/vision-mission", "/contact", "/quote", "/careers", "/insights", "/insights/news", "/insights/resources", "/privacy", "/terms"];
const additionalPaths = ["/about/shareholders", "/about/sustainability", "/digital-logistics", "/bids", "/faq"];
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"; return locales.flatMap((locale) => [...paths, ...additionalPaths, ...services.map(s=>"/services/"+s.slug)].map((path) => ({url: `${base}/${locale}${path}`, changeFrequency: "monthly" as const}))); }
