import {InteriorHero} from "./InteriorHero";
import type {BreadcrumbItem} from "./Breadcrumbs";
import {EditorialSplit} from "./InteriorSections";

export function LegalPage({title, description, eyebrow, paragraphs, breadcrumbs}: {title: string; description: string; eyebrow: string; paragraphs: string[]; breadcrumbs: BreadcrumbItem[]}) {
  return <main className="surface-mint-canvas"><InteriorHero eyebrow={eyebrow} title={title} description={description} image="/media/images/rail/ethiopia/ethiopian-railway-locomotive-01.jpg" imageAlt="Ethiopian railway locomotive on a freight route." breadcrumbs={breadcrumbs} theme="dark" /><EditorialSplit eyebrow={eyebrow} title={title}>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</EditorialSplit></main>;
}
