import {Fragment} from "react";

import Image from "next/image";

import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {LinkArrow} from "@/components/ui/LinkArrow";
import {cn} from "@/lib/cn";

type TrustedPartnersContent = {
  eyebrow: string;
  headline: string;
  description: string;
  visitWebsite: string;
  partners: Array<{
    name: string;
    description: string;
    logoAlt: string;
    logoSrc: string;
    href: string;
  }>;
};

type TrustedPartnersProps = {
  locale: "en" | "am";
  content: TrustedPartnersContent;
};

export function TrustedPartners({locale, content}: TrustedPartnersProps) {
  const isAmharic = locale === "am";

  return (
    <section
      aria-labelledby="home-trusted-partners-title"
      className="relative isolate overflow-hidden bg-surface-white text-rail-ink"
      data-header-theme="light"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(0,149,7,0.06),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(88,224,242,0.06),transparent_32%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(10,25,35,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(10,25,35,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]"
      />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <div className="max-w-[48rem]">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ethiorail-bright-green shadow-[0_0_0_5px_rgba(0,179,11,0.12)]" />
            <Eyebrow className="mb-0" tone="green">
              {content.eyebrow}
            </Eyebrow>
          </div>
          <h2
            id="home-trusted-partners-title"
            className={cn(
              "mt-4 max-w-[14ch] text-[clamp(2.35rem,4vw,3.65rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-rail-ink",
              isAmharic &&
                "font-ethiopic max-w-[15ch] text-[clamp(2.05rem,3.7vw,3.2rem)] leading-[1.08] tracking-[-0.03em]",
            )}
          >
            {content.headline}
          </h2>
          <p
            className={cn(
              "mt-4 max-w-[40rem] text-[clamp(0.98rem,1vw,1.06rem)] leading-[1.68] text-secondary-text",
              isAmharic && "font-ethiopic text-[clamp(0.93rem,0.95vw,1rem)] leading-[1.78]",
            )}
          >
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] lg:items-stretch">
          {content.partners.map((partner, index) => (
            <Fragment key={partner.name}>
              {index > 0 && (
                <div
                  aria-hidden="true"
                  className="relative flex h-12 items-center justify-center lg:h-auto"
                >
                  <span className="h-full w-px bg-gradient-to-b from-transparent via-ethiorail-green/45 to-transparent lg:h-px lg:w-full lg:bg-gradient-to-r" />
                  <span className="absolute h-3 w-3 rounded-full border-2 border-ethiorail-green/65 bg-white shadow-[0_0_0_6px_rgba(0,149,7,0.08)]" />
                </div>
              )}
              <article className="group flex min-h-[19rem] flex-col rounded-[8px] border border-steel-mist bg-white p-5 shadow-[0_12px_28px_rgba(10,25,35,0.07)] transition-transform transition-colors duration-200 hover:-translate-y-1 hover:border-ethiorail-green/55 hover:shadow-[0_16px_32px_rgba(10,25,35,0.11)] focus-within:border-ethiorail-green/55 sm:p-7">
              <div className="relative flex h-[9rem] items-center justify-center sm:h-[10rem]">
                <Image
                  src={partner.logoSrc}
                  alt={partner.logoAlt}
                  fill
                  sizes="(min-width: 1024px) 35vw, 80vw"
                  className="object-contain object-center p-5 sm:p-6"
                />
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-ethiorail-deep-green">
                  {isAmharic ? "ስትራቴጀያዊ አጋር" : "Strategic Partner"}
                </span>
                <h3
                  className={cn(
                    "mt-3 text-[clamp(1.35rem,1.8vw,1.7rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-rail-ink",
                    isAmharic && "font-ethiopic tracking-[-0.02em] leading-[1.2]",
                  )}
                >
                  {partner.name}
                </h3>
                <p
                  className={cn(
                    "mt-3 max-w-[30rem] text-[0.96rem] leading-[1.65] text-secondary-text",
                    isAmharic && "font-ethiopic text-[0.92rem] leading-[1.78]",
                  )}
                >
                  {partner.description}
                </p>
                <LinkArrow
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-fit !text-rail-ink hover:!text-deep-slate focus-visible:!text-deep-slate"
                >
                  {content.visitWebsite}
                </LinkArrow>
              </div>
              </article>
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
