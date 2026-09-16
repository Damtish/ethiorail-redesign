import {Link} from "@/i18n/navigation";
export function InteriorCta({eyebrow,title,description,primaryLabel,secondaryLabel,primaryHref,secondaryHref}:{eyebrow:string;title:string;description:string;primaryLabel:string;secondaryLabel:string;primaryHref:string;secondaryHref:string;dark?:boolean}){
 return <section className="interior-cta"><div className="erl-container"><div><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2><p className="section-copy">{description}</p></div><div className="button-row"><Link className="erl-button" href={primaryHref}>{primaryLabel} ↗</Link><Link className="erl-button outline-on-dark" href={secondaryHref}>{secondaryLabel} →</Link></div></div></section>;
}
