"use client";

import Image from "next/image";
import {useState} from "react";

import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/cn";

type ServiceItem = {
  summary: string;
  label: string;
  href: string;
  mediaSrc: string;
  mediaAlt: string;
  mediaPosition: string;
};

type ServicesContent = {
  eyebrow: string;
  headlineLineOne: string;
  headlineLineTwo: string;
  description: string;
  viewAll: string;
  items: ServiceItem[];
};

type ServicesShowcaseProps = {
  locale: "en" | "am";
  content: ServicesContent;
};

export function ServicesShowcase({locale, content}: ServicesShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isAmharic = locale === "am";
  const activeService = content.items[activeIndex] ?? content.items[0];

  return (
    <section
      aria-labelledby="home-services-title"
      className="surface-mint-canvas"
      data-header-theme="light"
    >
      <Container className="py-10 sm:py-12 lg:py-14 xl:py-16">
        <div className="grid gap-7 xl:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] xl:items-start xl:gap-9">
          <div className="space-y-4">
            <Eyebrow tone="green">{content.eyebrow}</Eyebrow>
            <h2
              id="home-services-title"
              className={cn(
                "max-w-[12ch] text-[clamp(2.65rem,3.6vw,3.6rem)] font-semibold tracking-[-0.05em] leading-[0.96] text-rail-ink xl:text-[clamp(2.8rem,3.2vw,3.4rem)]",
                isAmharic &&
                  "font-ethiopic text-[clamp(2.3rem,3.45vw,3.35rem)] leading-[1.08] tracking-[-0.03em] max-w-[13ch] xl:text-[clamp(2.45rem,3vw,3.1rem)]",
              )}
            >
              <span className="block">{content.headlineLineOne}</span>
              <span className="block">{content.headlineLineTwo}</span>
            </h2>
            <p
              className={cn(
                "max-w-[34rem] text-[clamp(0.96rem,0.98vw,1rem)] leading-[1.66] text-secondary-text xl:max-w-[32rem]",
                isAmharic &&
                  "font-ethiopic text-[clamp(0.92rem,0.94vw,0.98rem)] leading-[1.76] xl:text-[clamp(0.94rem,0.92vw,0.98rem)]",
              )}
            >
              {content.description}
            </p>

            <Link
              href="/services"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold text-ethiorail-green transition-colors duration-200 hover:text-ethiorail-bright-green focus-visible:text-ethiorail-bright-green",
                isAmharic && "font-medium tracking-normal",
              )}
            >
              <span>{content.viewAll}</span>
              <span aria-hidden="true" className="text-base leading-none">
                →
              </span>
            </Link>

            <ol className="mt-2 divide-y divide-steel-mist border-y border-steel-mist">
              {content.items.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      onPointerEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "group flex min-h-[4.5rem] items-start gap-4 px-0 py-[0.72rem] text-left transition-colors duration-200 xl:min-h-[4.75rem] xl:py-[0.78rem]",
                        isActive &&
                          "bg-[linear-gradient(180deg,rgba(247,250,248,0.96)_0%,rgba(239,246,242,0.98)_100%)]",
                      )}
                    >
                      <span className="mt-0.5 text-xs font-semibold uppercase tracking-[0.28em] text-ethiorail-deep-green">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3
                            className={cn(
                              "text-[1rem] font-semibold leading-[1.16] text-rail-ink transition-colors duration-200 group-hover:text-ethiorail-green group-focus-visible:text-ethiorail-green sm:text-[1.02rem]",
                              isAmharic && "font-ethiopic text-[0.95rem] leading-[1.24]",
                            )}
                          >
                            {service.label}
                          </h3>
                          <span
                            aria-hidden="true"
                            className="shrink-0 text-ethiorail-green transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
                          >
                            →
                          </span>
                        </div>
                        <p
                          className={cn(
                            "mt-1.25 max-w-[30rem] text-[0.94rem] leading-[1.5] text-secondary-text",
                            isAmharic && "font-ethiopic text-[0.88rem] leading-[1.64]",
                          )}
                        >
                          {service.summary}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="xl:sticky xl:top-[100px] xl:max-h-[calc(100svh-152px)] xl:self-start xl:pt-1">
            <div className="relative overflow-hidden rounded-[6px] border border-steel-mist surface-mint-panel shadow-[0_18px_32px_rgba(10,25,35,0.07)]">
              <div className="relative h-[clamp(220px,68vw,280px)] sm:h-[clamp(240px,64vw,300px)] xl:h-[clamp(390px,32vw,430px)] 2xl:h-[clamp(440px,30vw,490px)]">
                <Image
                  src={activeService.mediaSrc}
                  alt={activeService.mediaAlt}
                  fill
                  sizes="(min-width: 1536px) 41rem, (min-width: 1280px) 38rem, (min-width: 768px) 100vw, 100vw"
                  className="object-cover"
                  style={{objectPosition: activeService.mediaPosition}}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,25,35,0.02)_0%,rgba(10,25,35,0.1)_38%,rgba(10,25,35,0.58)_100%)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(10,25,35,0)_0%,rgba(10,25,35,0.78)_100%)]"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-text-dark">
                        {String(activeIndex + 1).padStart(2, "0")}
                      </span>
                      <p
                        className={cn(
                          "mt-2 max-w-[18rem] text-[clamp(1.08rem,1.5vw,1.34rem)] font-semibold leading-[1.1] text-text-on-dark",
                          isAmharic && "font-ethiopic text-[clamp(0.98rem,1.2vw,1.18rem)] leading-[1.18]",
                        )}
                      >
                        {activeService.label}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-rail-ink/45 text-ethiorail-bright-green"
                    >
                      →
                    </span>
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
