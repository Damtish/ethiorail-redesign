import Image from "next/image";
import type {ReactNode} from "react";

import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {SectionHeading} from "@/components/ui/SectionHeading";
import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/cn";

export type InteriorLink = {label: string; href: string};

type EditorialSplitProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  tone?: "mint" | "cyan" | "rail";
};

const toneClasses = {
  mint: "surface-mint-canvas",
  cyan: "surface-cyan-mist",
  rail: "bg-rail-ink text-text-on-dark",
};

export function EditorialSplit({eyebrow, title, children, tone = "mint"}: EditorialSplitProps) {
  const dark = tone === "rail";

  return (
    <section data-header-theme="light" className={cn("py-[clamp(3.5rem,6vw,5.5rem)]", toneClasses[tone])}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <Eyebrow tone={dark ? "dark" : "green"}>{eyebrow}</Eyebrow>
            <h2 className={cn("mt-5 max-w-[11ch] text-[clamp(2.25rem,4.4vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.05em]", dark ? "text-text-on-dark" : "text-rail-ink")}>{title}</h2>
          </div>
          <div className={cn("max-w-[42rem] space-y-5 text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.7]", dark ? "text-text-on-dark/78" : "text-secondary-text")}>{children}</div>
        </div>
      </Container>
    </section>
  );
}

type MediaSplitProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  contain?: boolean;
};
export function MediaSplit({eyebrow, title, description, image, imageAlt, reversed = false, contain = false}: MediaSplitProps) {
  return (
    <section data-header-theme="light" className="surface-rail-neutral py-[clamp(3.5rem,6vw,5.5rem)]">
      <Container>
        <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", reversed && "lg:[&>div:first-child]:order-2")}>
          <div className={cn("relative min-h-[18rem] overflow-hidden rounded-[0.5rem] border border-steel-mist/80 sm:min-h-[24rem]", contain && "bg-deep-slate")}>
            <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className={cn(contain ? "object-contain p-3 sm:p-5" : "object-cover")} />
          </div>
          <div className="max-w-[38rem]">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,3.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-rail-ink">{title}</h2>
            <p className="mt-5 text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.7] text-secondary-text">{description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

type FeatureListProps = {eyebrow: string; title: string; items: Array<{title: string; description: string}>; columns?: 2 | 3};

export function FeatureList({eyebrow, title, items, columns = 2}: FeatureListProps) {
  return (
    <section data-header-theme="light" className="surface-mint-canvas py-[clamp(3.5rem,6vw,5.5rem)]">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className={cn("mt-8 grid border-t border-ethiorail-deep-green/20", columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2")}>
          {items.map((item, index) => (
            <article key={item.title} className="border-b border-ethiorail-deep-green/20 py-6 md:nth-[odd]:border-r md:nth-[odd]:pr-8 md:nth-[even]:pl-8">
              <div className="flex gap-4">
                <span className="pt-1 text-sm font-semibold text-ethiorail-deep-green">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-rail-ink">{item.title}</h3>
                  <p className="mt-2 text-base leading-[1.65] text-secondary-text">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

type ProcessStepsProps = {eyebrow: string; title: string; steps: Array<{title: string; description: string}>};

export function ProcessSteps({eyebrow, title, steps}: ProcessStepsProps) {
  return (
    <section data-header-theme="dark" className="bg-deep-slate py-[clamp(3.5rem,6vw,5.5rem)] text-text-on-dark">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} className="[&_h2]:text-text-on-dark [&_p]:text-text-on-dark/72" />
        <ol className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-white/15 pt-4">
              <span className="text-sm font-semibold text-rail-cyan">0{index + 1}</span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-3 text-base leading-[1.6] text-text-on-dark/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

type RelatedLinksProps = {eyebrow: string; title: string; links: InteriorLink[]};

export function RelatedLinks({eyebrow, title, links}: RelatedLinksProps) {
  return (
    <section data-header-theme="light" className="surface-cyan-mist py-[clamp(3.25rem,5vw,5rem)]">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-[14ch] text-[clamp(2rem,3.6vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-rail-ink">{title}</h2>
          </div>
          <div className="grid w-full max-w-[38rem] border-t border-ethiorail-deep-green/20 sm:grid-cols-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="group border-b border-ethiorail-deep-green/20 py-4 font-semibold text-rail-ink transition-colors hover:text-ethiorail-deep-green">
                <span className="flex items-center justify-between gap-4">{link.label}<span aria-hidden="true" className="text-rail-cyan transition-transform group-hover:translate-x-1">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}