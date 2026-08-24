import {InteriorCta} from "./InteriorCta";
import {InteriorHero} from "./InteriorHero";
import type {BreadcrumbItem} from "./Breadcrumbs";
import {EditorialSplit, FeatureList, MediaSplit, RelatedLinks} from "./InteriorSections";

export type AboutPageContent = {
  metadata: {title: string; description: string};
  hero: {eyebrow: string; title: string; description: string; image: string; imageAlt: string};
  intro: {eyebrow: string; title: string; paragraphs: string[]};
  feature?: {eyebrow: string; title: string; items: Array<{title: string; description: string}>};
  media?: {eyebrow: string; title: string; description: string; image: string; imageAlt: string; contain?: boolean};
  related: {eyebrow: string; title: string; links: Array<{label: string; href: string}>};
  cta: {eyebrow: string; title: string; description: string; primary: string; secondary: string};
};

export function AboutPage({content, breadcrumbs}: {content: AboutPageContent; breadcrumbs: BreadcrumbItem[]}) {
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
      {content.feature ? (
        <FeatureList eyebrow={content.feature.eyebrow} title={content.feature.title} items={content.feature.items} columns={content.feature.items.length > 2 ? 3 : 2} />
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
