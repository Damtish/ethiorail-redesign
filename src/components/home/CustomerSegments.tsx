import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {cn} from "@/lib/cn";

export function CustomerSegments({locale, content}: {locale: "en" | "am"; content: {eyebrow: string; headline: string; items: Array<{title: string; description: string}>}}) {
  const isAmharic = locale === "am";
  return <section className="surface-rail-neutral" data-header-theme="light" aria-labelledby="home-segments-title"><Container className="py-14 sm:py-16 lg:py-20"><Eyebrow className="mb-4" tone="green">{content.eyebrow}</Eyebrow><h2 id="home-segments-title" className={cn("max-w-[15ch] text-[clamp(2.35rem,4vw,3.7rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-rail-ink", isAmharic && "font-ethiopic leading-[1.08] tracking-[-0.03em]")}>{content.headline}</h2><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{content.items.map((item) => <article key={item.title} className="rounded-[1.25rem] border border-steel-mist bg-white/80 p-6"><h3 className={cn("text-lg font-semibold tracking-[-0.03em] text-rail-ink", isAmharic && "font-ethiopic")}>{item.title}</h3><p className={cn("mt-3 text-sm leading-[1.65] text-secondary-text", isAmharic && "font-ethiopic")}>{item.description}</p></article>)}</div></Container></section>;
}
