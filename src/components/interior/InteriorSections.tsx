import Image from "next/image";
import type {ReactNode} from "react";
import {EditorialVideo} from "@/components/shared/EditorialVideo";
import {Journey} from "@/components/shared/Journey";
import {Link} from "@/i18n/navigation";
export type InteriorLink={label:string;href:string};
export function EditorialSplit({eyebrow,title,children,tone="mint"}:{eyebrow:string;title:string;children:ReactNode;tone?:"mint"|"cyan"|"rail"}){
 return <section className={`editorial-intro ${tone==="rail"?"dark-band":""}`}><div className="erl-container split-intro"><div><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2></div><div className="section-copy prose-flow">{children}</div></div></section>;
}
export function MediaSplit({eyebrow,title,description,image,imageAlt,video,videoPoster,contain=false}:{eyebrow:string;title:string;description:string;image:string;imageAlt:string;video?:string;videoPoster?:string;reversed?:boolean;contain?:boolean}){
 if(contain||image.includes("/maps/"))return <section className="corridor-stage"><div className="erl-container"><div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2><p className="section-copy">{description}</p></div><div className="flagship-map"><Image src={image} alt={imageAlt} fill sizes="(max-width:767px) 100vw, 1200px" style={{objectFit:"contain"}}/></div></div></section>;
 return <section className="media-stage"><div className="erl-container media-composition"><div className="media-window">{video?<EditorialVideo src={video} poster={videoPoster??image} className="hero-video" posterClassName="hero-video" sizes="(min-width:768px) 60vw, 100vw"/>:<Image src={image} alt={imageAlt} fill sizes="(min-width:768px) 60vw, 100vw"/>}</div><div className="media-story"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2><p>{description}</p></div></div></section>;
}
export function FeatureList({eyebrow,title,items}:{eyebrow:string;title:string;items:Array<{title:string;description:string;href?:string}>;columns?:2|3}){
 return <section className="feature-section"><div className="erl-container"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2><div className="feature-flow">{items.map((item,i)=><article className="feature-item" key={item.title}><span className="feature-index" aria-hidden="true">{String(i+1).padStart(2,"0")}</span><div><h3>{item.href?<Link href={item.href}>{item.title} →</Link>:item.title}</h3><p>{item.description}</p></div></article>)}</div></div></section>;
}
export function ProcessSteps({eyebrow,title,steps}:{eyebrow:string;title:string;steps:Array<{title:string;description:string}>}){
 return <section className="process-section"><div className="erl-container"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2><Journey steps={steps} compact={steps.length>5}/></div></section>;
}
export function RelatedLinks({eyebrow,title,links}:{eyebrow:string;title:string;links:InteriorLink[]}){
 return <section className="related-section"><div className="erl-container related-layout"><div><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2></div><div className="related-rows">{links.map(link=><Link href={link.href} key={link.href}>{link.label.replace(" / NVOCC","")}<span aria-hidden="true">↗</span></Link>)}</div></div></section>;
}
