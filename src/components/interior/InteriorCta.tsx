import {Container} from "@/components/ui/Container";
import {LinkButton} from "@/components/ui/LinkButton";
import {cn} from "@/lib/cn";

type InteriorCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  dark?: boolean;
};

export function InteriorCta({eyebrow, title, description, primaryLabel, secondaryLabel, dark = true}: InteriorCtaProps) {
  return (
    <section data-header-theme={dark ? "dark" : "light"} className={cn("py-[clamp(4rem,7vw,6rem)]", dark ? "bg-rail-ink text-text-on-dark" : "surface-mint-canvas text-rail-ink")}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] lg:items-end lg:gap-16">
          <div className="max-w-[46rem]">
            <span className={cn("text-xs font-semibold uppercase tracking-[0.28em]", dark ? "text-rail-cyan" : "text-ethiorail-deep-green")}>{eyebrow}</span>
            <h2 className="mt-4 text-[clamp(2.25rem,4.4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.05em]">{title}</h2>
            <p className={cn("mt-5 max-w-[38rem] text-lg leading-[1.65]", dark ? "text-text-on-dark/75" : "text-secondary-text")}>{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <LinkButton href="/quote" size="large">{primaryLabel}</LinkButton>
            <LinkButton href="/contact" size="large" variant={dark ? "secondary" : "dark"} className={dark ? "border-white/15 bg-white/5 text-text-on-dark hover:bg-white/10 hover:text-text-on-dark" : undefined}>{secondaryLabel}</LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
