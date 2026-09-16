import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {cn} from "@/lib/cn";

type WhatWeDoProps = {
  locale: "en" | "am";
  content: {eyebrow: string; headline: string; description: string; items: Array<{label: string; title: string; description: string}>};
};

export function WhatWeDo({locale, content}: WhatWeDoProps) {
  const isAmharic = locale === "am";
  return (
    <section className="surface-cyan-mist" data-header-theme="light" aria-labelledby="home-what-we-do-title">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-[48rem]">
          <Eyebrow className="mb-4" tone="green">{content.eyebrow}</Eyebrow>
          <h2 id="home-what-we-do-title" className={cn("max-w-[12ch] text-[clamp(2.5rem,4.4vw,4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-rail-ink", isAmharic && "font-ethiopic leading-[1.08] tracking-[-0.03em]")}>{content.headline}</h2>
          <p className={cn("mt-4 max-w-[42rem] text-[1rem] leading-[1.7] text-secondary-text", isAmharic && "font-ethiopic leading-[1.8]")}>{content.description}</p>
        </div>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-steel-mist bg-steel-mist sm:grid-cols-2 lg:grid-cols-5">
          {content.items.map((item, index) => <li key={item.label} className="bg-white px-5 py-6 sm:px-6"><span className="text-xs font-semibold tracking-[0.25em] text-ethiorail-deep-green">{String(index + 1).padStart(2, "0")} / {item.label}</span><h3 className={cn("mt-5 text-[1.25rem] font-semibold tracking-[-0.03em] text-rail-ink", isAmharic && "font-ethiopic")}>{item.title}</h3><p className={cn("mt-3 text-sm leading-[1.65] text-secondary-text", isAmharic && "font-ethiopic")}>{item.description}</p></li>)}
        </ol>
      </Container>
    </section>
  );
}
