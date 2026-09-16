"use client";
import {useEffect, useRef, type ReactNode} from "react";
import {usePathname} from "@/i18n/navigation";
export function RouteExperience({children}:{children:ReactNode}) {
 const path=usePathname(); const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const el=root.current;if(!el)return;
  const m=window.matchMedia("(prefers-reduced-motion: reduce)");
  const animations:Animation[]=[];
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(!entry.isIntersecting)return;
   const target=entry.target as HTMLElement;target.dataset.inView="true";
   if(!m.matches) {
    const nodes=target.querySelectorAll(":scope > .erl-container > *, :scope > .erl-container > .journey-line > li, :scope > .erl-container > .feature-flow > *");
    nodes.forEach((node,i)=>{animations.push(node.animate([{opacity:.35,transform:"translateY(18px)"},{opacity:1,transform:"translateY(0)"}],{duration:480,delay:Math.min(i*45,180),easing:"cubic-bezier(.2,.7,.3,1)",fill:"backwards"}));});
   }
   observer.unobserve(target);
  }),{threshold:.08});
  el.querySelectorAll("main > section:not(:first-child)").forEach(n=>observer.observe(n));
  const stop=()=>{if(m.matches)animations.forEach(a=>a.finish());};
  m.addEventListener("change",stop);
  const scroll=()=>{document.documentElement.dataset.scrolled=window.scrollY>30?"true":"false";};
  scroll();window.addEventListener("scroll",scroll,{passive:true});
  return()=>{observer.disconnect();animations.forEach(a=>a.cancel());m.removeEventListener("change",stop);window.removeEventListener("scroll",scroll);};
 },[path]);
 return <div ref={root} className="route-experience" data-route={path||"/"}>{children}</div>;
}
