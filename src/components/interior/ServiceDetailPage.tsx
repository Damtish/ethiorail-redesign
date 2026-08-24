import {InteriorCta} from "@/components/interior/InteriorCta";
import {InteriorHero} from "@/components/interior/InteriorHero";
import {EditorialSplit, FeatureList, MediaSplit, ProcessSteps, RelatedLinks} from "@/components/interior/InteriorSections";

export type ServiceDetailMessages = {
  metadata: {title: string; description: string};
  breadcrumbs: {home: string; services: string; current: string};
  hero: {eyebrow: string; title: string; description: string; image: string; imageAlt: string};
  overview: {eyebrow: string; title: string; paragraphs: string[]};
  journey: {eyebrow: string; title: string; steps: Array<{title: string; description: string}>};
  modes: {eyebrow: string; title: string; items: Array<{title: string; description: string}>};
  corridor: {eyebrow: string; title: string; description: string; image: string; imageAlt: string; video?: string; videoPoster?: string};
  value: {eyebrow: string; title: string; items: Array<{title: string; description: string}>};
  related: {eyebrow: string; title: string; links: Array<{label: string; href: string}>};
  cta: {eyebrow: string; title: string; description: string; primary: string; secondary: string};
};

type ServiceDetailPageProps = {messages: ServiceDetailMessages};

export function ServiceDetailPage({messages}: ServiceDetailPageProps) {
  return (
    <main className="surface-mint-canvas">
      <InteriorHero
        eyebrow={messages.hero.eyebrow}
        title={messages.hero.title}
        description={messages.hero.description}
        image={messages.hero.image}
        imageAlt={messages.hero.imageAlt}
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
        video={messages.corridor.video}
        videoPoster={messages.corridor.videoPoster}
        reversed
      />
      <FeatureList eyebrow={messages.value.eyebrow} title={messages.value.title} items={messages.value.items} />
      <RelatedLinks eyebrow={messages.related.eyebrow} title={messages.related.title} links={messages.related.links} />
      <InteriorCta eyebrow={messages.cta.eyebrow} title={messages.cta.title} description={messages.cta.description} primaryLabel={messages.cta.primary} secondaryLabel={messages.cta.secondary} />
    </main>
  );
}