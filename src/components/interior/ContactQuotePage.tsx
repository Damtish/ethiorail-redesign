import {EditorialSplit, FeatureList, RelatedLinks} from "./InteriorSections";
import {InteriorCta} from "./InteriorCta";
import {InteriorHero} from "./InteriorHero";
import type {BreadcrumbItem} from "./Breadcrumbs";
import {InquiryForm, type InquiryFormCopy} from "@/components/forms/InquiryForm";
import {Container} from "@/components/ui/Container";

export type ContactQuoteContent = {metadata: {title: string; description: string}; hero: {eyebrow: string; title: string; description: string; image: string; imageAlt: string}; intro: {eyebrow: string; title: string; paragraphs: string[]}; form: InquiryFormCopy & {eyebrow: string; title: string; description: string}; related: {eyebrow: string; title: string; links: Array<{label: string; href: string}>}; cta: {eyebrow: string; title: string; description: string; primary: string; secondary: string}; options?: Array<{title: string; description: string}>};

export function ContactQuotePage({kind, content, breadcrumbs}: {kind: "contact" | "quote"; content: ContactQuoteContent; breadcrumbs: BreadcrumbItem[]}) {
  return <main className="surface-mint-canvas"><InteriorHero {...content.hero} theme="dark" breadcrumbs={breadcrumbs} /><EditorialSplit eyebrow={content.intro.eyebrow} title={content.intro.title}>{content.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</EditorialSplit>{content.options ? <FeatureList eyebrow={content.form.eyebrow} title={content.form.title} items={content.options} /> : null}<section data-header-theme="light" className="surface-cyan-mist py-[clamp(3.5rem,6vw,5.5rem)]"><Container><div className="max-w-[48rem]"><span className="text-xs font-semibold uppercase tracking-[0.28em] text-ethiorail-deep-green">{content.form.eyebrow}</span><h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.05em]">{content.form.title}</h2><p className="mt-4 max-w-[40rem] text-lg leading-[1.65] text-secondary-text">{content.form.description}</p><InquiryForm kind={kind} copy={content.form} /></div></Container></section><RelatedLinks {...content.related} /><InteriorCta eyebrow={content.cta.eyebrow} title={content.cta.title} description={content.cta.description} primaryLabel={content.cta.primary} secondaryLabel={content.cta.secondary} /></main>;
}
