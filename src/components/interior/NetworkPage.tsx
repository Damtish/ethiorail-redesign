import {InteriorCta} from "./InteriorCta";
import {InteriorHero} from "./InteriorHero";
import type {BreadcrumbItem} from "./Breadcrumbs";
import {EditorialSplit, FeatureList, MediaSplit, ProcessSteps, RelatedLinks} from "./InteriorSections";

export type NetworkItem = {title: string; description: string};
export type NetworkLink = {label: string; href: string};

export type NetworkPageContent = {
  metadata: {title: string; description: string};
  hero: {eyebrow: string; title: string; description: string; image: string; imageAlt: string};
  intro: {eyebrow: string; title: string; paragraphs: string[]};
  feature?: {eyebrow: string; title: string; items: NetworkItem[]};
  media?: {eyebrow: string; title: string; description: string; image: string; imageAlt: string; contain?: boolean};
  journey?: {eyebrow: string; title: string; steps: NetworkItem[]};
  related: {eyebrow: string; title: string; links: NetworkLink[]};
  cta: {eyebrow: string; title: string; description: string; primary: string; secondary: string};
};

export function NetworkPage({content, breadcrumbs}: {content: NetworkPageContent; breadcrumbs: BreadcrumbItem[]}) {
  return (
    <main className="surface-mint-canvas">
      <InteriorHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        image={content.hero.image}
        imageAlt={content.hero.imageAlt}
        theme="dark"
        breadcrumbs={breadcrumbs}
      />
      <EditorialSplit eyebrow={content.intro.eyebrow} title={content.intro.title}>
        {content.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </EditorialSplit>
      {content.media ? (
        <MediaSplit
          eyebrow={content.media.eyebrow}
          title={content.media.title}
          description={content.media.description}
          image={content.media.image}
          imageAlt={content.media.imageAlt}
          contain={content.media.contain}
          reversed
        />
      ) : null}
      {content.journey ? (
        <ProcessSteps eyebrow={content.journey.eyebrow} title={content.journey.title} steps={content.journey.steps} />
      ) : null}
      {content.feature ? (
        <FeatureList eyebrow={content.feature.eyebrow} title={content.feature.title} items={content.feature.items} columns={3} />
      ) : null}
      <RelatedLinks eyebrow={content.related.eyebrow} title={content.related.title} links={content.related.links} />
      <InteriorCta
        eyebrow={content.cta.eyebrow}
        title={content.cta.title}
        description={content.cta.description}
        primaryLabel={content.cta.primary}
        secondaryLabel={content.cta.secondary}
      />
    </main>
  );
}
