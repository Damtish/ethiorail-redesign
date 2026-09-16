import type {CSSProperties} from "react";
export function Journey({steps,compact=false}:{steps:Array<{title:string;description?:string;label?:string}>;compact?:boolean}){
 return <ol className={`journey-line ${compact?"multimodal-line":""}`} style={{"--stages":steps.length} as CSSProperties}>{steps.map((step,i)=><li key={`${i}-${step.title}`}><span className="journey-dot" aria-hidden="true">{String(i+1).padStart(2,"0")}</span>{step.label&&<p className="eyebrow">{step.label}</p>}<h3>{step.title}</h3>{step.description&&<p>{step.description}</p>}</li>)}</ol>;
}
