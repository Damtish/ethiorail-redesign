import Image from "next/image";
import {EditorialVideo} from "@/components/shared/EditorialVideo";
import {Breadcrumbs,type BreadcrumbItem} from "./Breadcrumbs";
type Props={eyebrow:string;title:string;description:string;image:string;imageAlt:string;video?:string;videoPoster?:string;breadcrumbs:BreadcrumbItem[];theme?:"dark"|"light";fullBleedVideo?:boolean;videoObjectPosition?:string};
export function InteriorHero({eyebrow,title,description,image,imageAlt,video,videoPoster,breadcrumbs,videoObjectPosition="68% 50%"}:Props){
 return <section className={`interior-hero ${video?"has-video dark-band":""}`}>
 {video&&<><EditorialVideo src={video} poster={videoPoster??image} className="hero-video" posterClassName="hero-video" objectPosition={videoObjectPosition} priority/><div className="hero-overlay"/></>}
 <div className="erl-container"><div className="breadcrumbs"><Breadcrumbs items={breadcrumbs} dark={!!video}/></div>
 <div className="hero-content"><p className="eyebrow"><span className="live-dot" aria-hidden="true"/>{eyebrow}</p><h1>{title}</h1><p className="hero-description">{description}</p></div>
 {!video&&<div className="interior-image"><Image src={image} alt={imageAlt} fill priority sizes="(max-width:767px) 100vw, 1100px"/></div>}</div></section>;
}
