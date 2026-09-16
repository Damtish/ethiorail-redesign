import Image from "next/image";
import {Link} from "@/i18n/navigation";
export type ExplorerItem={label:string;summary:string;href:string;mediaSrc:string;mediaAlt:string};
export function ServiceExplorer({items,locale}:{items:ExplorerItem[];locale:"en"|"am"}){
 return <div className="service-explorer"><div className="service-visual"><Image src={items[0].mediaSrc} alt={items[0].mediaAlt} fill sizes="(max-width:767px) 100vw, 50vw"/><div className="service-visual-caption"><p className="eyebrow">{locale==="am"?"የተገናኙ አገልግሎቶች":"CONNECTED CAPABILITIES"}</p>{locale==="am"?"አንድ ጉዞ። ብዙ ግንኙነቶች።":"One journey. Every connection."}</div></div><div className="service-rows">{items.map((item,i)=><details key={item.href} className="service-row" open={i===0}><summary><span>{String(i+1).padStart(2,"0")}</span><h3>{item.label}</h3><span aria-hidden="true">+</span></summary><div className="service-row-body"><p>{item.summary}</p><Link href={item.href} className="text-link">{locale==="am"?"አገልግሎቱን ይመልከቱ":"Explore service"} <span aria-hidden="true">↗</span></Link></div></details>)}</div></div>;
}
