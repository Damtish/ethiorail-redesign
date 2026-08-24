import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {LinkButton} from "@/components/ui/LinkButton";
import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/cn";

type FinalCtaContent = {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

type FinalCtaProps = {
  locale: "en" | "am";
  content: FinalCtaContent;
};

export function FinalCta({locale, content}: FinalCtaProps) {
  const isAmharic = locale === "am";

  return (
    <section
      aria-labelledby="home-final-cta-title"
      className="relative isolate overflow-hidden bg-rail-ink text-text-on-dark"
      data-header-theme="dark"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(0,179,11,0.14)_0%,rgba(0,179,11,0)_34%),radial-gradient(circle_at_84%_14%,rgba(88,224,242,0.11)_0%,rgba(88,224,242,0)_30%),linear-gradient(180deg,rgba(10,25,35,0.88)_0%,rgba(19,42,56,0.96)_100%)]"
      />
      <Container className="relative py-14 sm:py-16 lg:py-18">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1.02fr)_minmax(18rem,0.98fr)] lg:items-center lg:gap-10">
          <div className="space-y-5">
            <Eyebrow tone="dark" className="text-secondary-text-dark">
              {content.eyebrow}
            </Eyebrow>
            <h2
              id="home-final-cta-title"
              className={cn(
                "max-w-[12ch] text-[clamp(2.65rem,4.25vw,4rem)] font-semibold tracking-[-0.06em] leading-[0.94] text-text-on-dark",
                isAmharic &&
                  "font-ethiopic text-[clamp(2.25rem,3.8vw,3.45rem)] leading-[1.06] tracking-[-0.03em] max-w-[13ch]",
              )}
            >
              {content.headline}
            </h2>
            <p
              className={cn(
                "max-w-[33rem] text-[clamp(0.98rem,1vw,1.08rem)] leading-[1.68] text-secondary-text-dark",
                isAmharic && "font-ethiopic text-[clamp(0.93rem,0.95vw,1rem)] leading-[1.78]",
              )}
            >
              {content.description}
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <LinkButton href="/quote" size="large" className="w-full sm:w-auto">
                {content.primaryCta}
              </LinkButton>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex min-h-11 w-full items-center justify-center rounded-sm border border-white/15 px-5 py-2.5 text-[0.98rem] font-semibold text-text-on-dark transition-colors duration-200 hover:border-ethiorail-bright-green hover:text-ethiorail-bright-green sm:w-auto",
                  isAmharic && "tracking-normal",
                )}
              >
                {content.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="relative min-h-[clamp(12.5rem,19vw,18rem)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[8px] border border-white/10 bg-white/[0.05] shadow-[0_22px_42px_rgba(10,25,35,0.24)] backdrop-blur-[2px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,179,11,0.18)_0%,rgba(0,179,11,0)_34%),radial-gradient(circle_at_24%_74%,rgba(88,224,242,0.12)_0%,rgba(88,224,242,0)_28%)]"
            />
            <div className="relative flex h-full flex-col justify-between p-[1.125rem] sm:p-5 lg:p-6">
              <div className="grid gap-3.5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-ethiorail-deep-green">
                    Logistics move
                  </span>
                </div>
                <div className="grid gap-2 sm:gap-3">
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-ethiorail-bright-green" />
                      <span className="text-[0.95rem] font-semibold text-text-on-dark">
                        Quote request
                      </span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10" />
                  </div>
                  <div className="ml-auto mr-4 w-[86%] rounded-[8px] border border-white/10 bg-white/[0.05] p-3.5">
                    <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-rail-cyan" />
                      <span className="text-[0.95rem] font-semibold text-text-on-dark">
                        Coordination
                      </span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10" />
                  </div>
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-3.5">
                    <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/75" />
                      <span className="text-[0.95rem] font-semibold text-text-on-dark">
                        Cargo journey
                      </span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
