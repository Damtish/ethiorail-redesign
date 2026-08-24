import Image from "next/image";

import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {cn} from "@/lib/cn";

type JourneyContent = {
  eyebrow: string;
  headline: string;
  description: string;
  supportingMediaAlt: string;
  stages: Array<{
    title: string;
  }>;
};

type MultimodalJourneyProps = {
  locale: "en" | "am";
  content: JourneyContent;
};

export function MultimodalJourney({locale, content}: MultimodalJourneyProps) {
  const isAmharic = locale === "am";

  return (
    <section
      aria-labelledby="home-multimodal-journey-title"
      className="bg-rail-ink text-text-on-dark"
      data-header-theme="dark"
    >
      <Container className="py-12 sm:py-14 lg:py-18">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.38fr)_minmax(18rem,0.78fr)] lg:items-start lg:gap-10">
          <div>
            <Eyebrow tone="dark" className="text-secondary-text-dark">
              {content.eyebrow}
            </Eyebrow>
            <h2
              id="home-multimodal-journey-title"
              className={cn(
                "mt-4 max-w-[12ch] text-[clamp(2.1rem,4.1vw,3.85rem)] font-semibold tracking-[-0.05em] leading-[1.02] text-text-on-dark lg:text-[clamp(2.15rem,3.7vw,3.7rem)]",
                isAmharic &&
                  "font-ethiopic text-[clamp(1.98rem,3.95vw,3.7rem)] leading-[1.08] tracking-[-0.03em] max-w-[13ch] lg:text-[clamp(2.05rem,3.45vw,3.45rem)]",
              )}
            >
              {content.headline}
            </h2>
            <p
              className={cn(
                "mt-4 max-w-[38rem] text-[clamp(0.98rem,1vw,1.08rem)] leading-[1.7] text-secondary-text-dark lg:max-w-[36rem]",
                isAmharic &&
                  "font-ethiopic text-[clamp(0.92rem,0.96vw,1rem)] leading-[1.82] max-w-[37rem]",
              )}
            >
              {content.description}
            </p>

            <div className="mt-8">
              <div className="relative hidden lg:block">
                <span
                  aria-hidden="true"
                  className="absolute left-[2.1rem] right-[2.1rem] top-[2.1rem] h-px bg-white/12"
                />
                <ol className="grid grid-cols-7 gap-3.5">
                  {content.stages.map((stage, index) => {
                    const isStart = index === 0;
                    const isEnd = index === content.stages.length - 1;

                    return (
                      <li
                        key={stage.title}
                        className="relative flex min-h-[8.5rem] flex-col items-center text-center"
                      >
                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-secondary-text-dark">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            "mt-4 h-3.5 w-3.5 rounded-full border border-white/15 shadow-[0_0_0_6px_rgba(10,25,35,0.8)]",
                            isStart
                              ? "bg-ethiorail-bright-green"
                              : isEnd
                                ? "bg-rail-cyan"
                                : "bg-ethiorail-green",
                          )}
                        />
                        <h3 className="mt-4 max-w-[11ch] text-[0.95rem] font-semibold leading-[1.2] text-text-on-dark xl:text-base">
                          {stage.title}
                        </h3>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="relative lg:hidden">
                <span
                  aria-hidden="true"
                  className="absolute left-[0.625rem] top-0 bottom-0 w-px bg-white/12"
                />
                <ol className="grid gap-4">
                  {content.stages.map((stage, index) => {
                    const isStart = index === 0;
                    const isEnd = index === content.stages.length - 1;

                    return (
                      <li
                        key={stage.title}
                        className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-4 pl-0"
                      >
                        <div className="relative pt-1">
                          <span
                            aria-hidden="true"
                            className={cn(
                              "absolute left-0 top-2 h-3 w-3 rounded-full border border-white/15 shadow-[0_0_0_5px_rgba(10,25,35,0.84)]",
                              isStart
                                ? "bg-ethiorail-bright-green"
                                : isEnd
                                  ? "bg-rail-cyan"
                                  : "bg-ethiorail-green",
                            )}
                          />
                        </div>
                        <div className="pb-1 pt-0.5">
                          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-secondary-text-dark">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className={cn(
                            "mt-2 text-lg font-semibold leading-[1.18] text-text-on-dark",
                            isAmharic && "font-ethiopic text-[1.05rem] leading-[1.28]",
                          )}>
                            {stage.title}
                          </h3>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>

          <div className="lg:pt-12">
            <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-deep-slate shadow-[0_20px_42px_rgba(10,25,35,0.18)]">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/3]">
                <Image
                  src="/media/images/rail/ethiopia/ethio-djibouti-freight-container-train-01.jpg"
                  alt={content.supportingMediaAlt}
                  fill
                  sizes="(min-width: 1536px) 32rem, (min-width: 1280px) 30rem, (min-width: 1024px) 28rem, 100vw"
                  quality={95}
                  priority
                  className="object-cover object-[68%_50%] saturate-[1.04] contrast-[1.02]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,25,35,0.02)_0%,rgba(10,25,35,0.24)_54%,rgba(10,25,35,0.5)_100%)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(10,25,35,0)_0%,rgba(10,25,35,0.72)_100%)]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
