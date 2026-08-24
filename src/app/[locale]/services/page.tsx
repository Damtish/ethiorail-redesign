import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {InteriorCta} from "@/components/interior/InteriorCta";
import {InteriorHero} from "@/components/interior/InteriorHero";
import {EditorialSplit, FeatureList, MediaSplit, RelatedLinks} from "@/components/interior/InteriorSections";
import {isAppLocale} from "@/i18n/routing";

type ServicesPageProps = {params: Promise<{locale: string}>};

type ServicesMessages = {
  metadata: {title: string; description: string};
  hero: {eyebrow: string; title: string; description: string; image: string; imageAlt: string};
  intro: {eyebrow: string; title: string; paragraphs: string[]};
  overview: {eyebrow: string; title: string; items: Array<{title: string; description: string; href: string}>};
  corridor: {eyebrow: string; title: string; description: string; image: string; imageAlt: string};
  related: {eyebrow: string; title: string; links: Array<{label: string; href: string}>};
  cta: {eyebrow: string; title: string; description: string; primary: string; secondary: string};
};

async function loadServicesMessages(locale: "en" | "am") {
  const messages = (await import(`../../../../messages/${locale}.json`)).default as {ServicesPage: ServicesMessages};
  return messages.ServicesPage;
}

export async function generateMetadata({params}: ServicesPageProps): Promise<Metadata> {
  const {locale} = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const messages = await loadServicesMessages(locale);
  return {title: messages.metadata.title, description: messages.metadata.description};
}

export default async function ServicesPage({params}: ServicesPageProps) {
  const {locale} = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const messages = await loadServicesMessages(locale);

  return (
    <main className="surface-mint-canvas">
      <InteriorHero
        eyebrow={messages.hero.eyebrow}
        title={messages.hero.title}
        description={messages.hero.description}
        image={messages.hero.image}
        imageAlt={messages.hero.imageAlt}
        theme="dark"
        breadcrumbs={[{label: locale === "am" ? "መነሻ" : "Home", href: "/"}, {label: messages.hero.eyebrow}]}
      />
      <EditorialSplit eyebrow={messages.intro.eyebrow} title={messages.intro.title}>
        {messages.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </EditorialSplit>
      <FeatureList eyebrow={messages.overview.eyebrow} title={messages.overview.title} items={messages.overview.items} />
      <MediaSplit eyebrow={messages.corridor.eyebrow} title={messages.corridor.title} description={messages.corridor.description} image={messages.corridor.image} imageAlt={messages.corridor.imageAlt} reversed />
      <RelatedLinks eyebrow={messages.related.eyebrow} title={messages.related.title} links={messages.related.links} />
      <InteriorCta eyebrow={messages.cta.eyebrow} title={messages.cta.title} description={messages.cta.description} primaryLabel={messages.cta.primary} secondaryLabel={messages.cta.secondary} />
    </main>
  );
}
