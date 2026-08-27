import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {InteriorCta} from "@/components/interior/InteriorCta";
import {InteriorHero} from "@/components/interior/InteriorHero";
import {EditorialSplit, FeatureList, MediaSplit, ProcessSteps, RelatedLinks} from "@/components/interior/InteriorSections";
import {isAppLocale} from "@/i18n/routing";

type PageProps = {params: Promise<{locale: string}>};

type MultimodalMessages = {
  metadata: {title: string; description: string};
  breadcrumbs: {home: string; services: string; current: string};
  hero: {eyebrow: string; title: string; description: string; image: string; imageAlt: string; video?: string; videoPoster?: string};
  overview: {eyebrow: string; title: string; paragraphs: string[]};
  journey: {eyebrow: string; title: string; steps: Array<{title: string; description: string}>};
  modes: {eyebrow: string; title: string; items: Array<{title: string; description: string}>};
  corridor: {eyebrow: string; title: string; description: string; image: string; imageAlt: string};
  value: {eyebrow: string; title: string; items: Array<{title: string; description: string}>};
  related: {eyebrow: string; title: string; links: Array<{label: string; href: string}>};
  cta: {eyebrow: string; title: string; description: string; primary: string; secondary: string};
};

async function loadMessages(locale: "en" | "am") {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default as {MultimodalService: MultimodalMessages};
  return messages.MultimodalService;
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {locale} = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const messages = await loadMessages(locale);
  return {title: messages.metadata.title, description: messages.metadata.description};
}

export default async function MultimodalTransportationPage({params}: PageProps) {
  const {locale} = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const messages = await loadMessages(locale);

  return (
    <main className="surface-mint-canvas">
      <InteriorHero
        eyebrow={messages.hero.eyebrow}
        title={messages.hero.title}
        description={messages.hero.description}
        image={messages.hero.image}
        imageAlt={messages.hero.imageAlt}
        video={messages.hero.video}
        videoPoster={messages.hero.videoPoster}
        fullBleedVideo={Boolean(messages.hero.video)}
        videoObjectPosition="68% 50%"
        theme="dark"
        breadcrumbs={[
          {label: messages.breadcrumbs.home, href: "/"},
          {label: messages.breadcrumbs.services, href: "/services"},
          {label: messages.breadcrumbs.current},
        ]}
      />
      <EditorialSplit eyebrow={messages.overview.eyebrow} title={messages.overview.title}>
        {messages.overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </EditorialSplit>
      <ProcessSteps eyebrow={messages.journey.eyebrow} title={messages.journey.title} steps={messages.journey.steps} />
      <FeatureList eyebrow={messages.modes.eyebrow} title={messages.modes.title} items={messages.modes.items} columns={3} />
      <MediaSplit
        eyebrow={messages.corridor.eyebrow}
        title={messages.corridor.title}
        description={messages.corridor.description}
        image={messages.corridor.image}
        imageAlt={messages.corridor.imageAlt}
        reversed
      />
      <FeatureList eyebrow={messages.value.eyebrow} title={messages.value.title} items={messages.value.items} />
      <RelatedLinks eyebrow={messages.related.eyebrow} title={messages.related.title} links={messages.related.links} />
      <InteriorCta eyebrow={messages.cta.eyebrow} title={messages.cta.title} description={messages.cta.description} primaryLabel={messages.cta.primary} secondaryLabel={messages.cta.secondary} />
    </main>
  );
}