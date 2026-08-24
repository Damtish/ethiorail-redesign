import {InteriorCta} from "./InteriorCta";
import {InteriorHero} from "./InteriorHero";
import {EditorialSplit, FeatureList, RelatedLinks} from "./InteriorSections";
import type {BreadcrumbItem} from "./Breadcrumbs";
import {Container} from "@/components/ui/Container";
import {Link} from "@/i18n/navigation";

export type CareerInsightsContent = {
  metadata: {title: string; description: string};
  hero: {eyebrow: string; title: string; description: string; image: string; imageAlt: string};
  intro: {eyebrow: string; title: string; paragraphs: string[]};
  feature?: {eyebrow: string; title: string; items: Array<{title: string; description: string}>};
  status: {eyebrow: string; title: string; description: string; action?: {label: string; href: string}};
  related: {eyebrow: string; title: string; links: Array<{label: string; href: string}>};
  cta: {eyebrow: string; title: string; description: string; primary: string; secondary: string};
};

export function CareerInsightsPage({content, breadcrumbs}: {content: CareerInsightsContent; breadcrumbs: BreadcrumbItem[]}) {
  return <main className="surface-mint-canvas"><InteriorHero {...content.hero} theme="dark" breadcrumbs={breadcrumbs} /><EditorialSplit eyebrow={content.intro.eyebrow} title={content.intro.title}>{content.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</EditorialSplit>{content.feature ? <FeatureList eyebrow={content.feature.eyebrow} title={content.feature.title} items={content.feature.items} columns={content.feature.items.length > 2 ? 3 : 2} /> : null}<section data-header-theme="light" className="surface-cyan-mist py-[clamp(3.5rem,6vw,5.5rem)]"><Container><div className="max-w-[48rem] border-t border-ethiorail-deep-green/25 pt-6"><span className="text-xs font-semibold uppercase tracking-[0.28em] text-ethiorail-deep-green">{content.status.eyebrow}</span><h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-rail-ink">{content.status.title}</h2><p className="mt-5 max-w-[40rem] text-lg leading-[1.65] text-secondary-text">{content.status.description}</p>{content.status.action ? <Link href={content.status.action.href} className="mt-6 inline-flex min-h-11 items-center border-b-2 border-ethiorail-green py-2 font-semibold text-rail-ink hover:text-ethiorail-deep-green">{content.status.action.label}<span aria-hidden="true" className="ml-2">→</span></Link> : null}</div></Container></section><RelatedLinks {...content.related} /><InteriorCta eyebrow={content.cta.eyebrow} title={content.cta.title} description={content.cta.description} primaryLabel={content.cta.primary} secondaryLabel={content.cta.secondary} /></main>;
}
