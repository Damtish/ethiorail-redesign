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
      className="surface-mint-canvas"
      data-header-theme="light"
    >
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-[48rem]">
          <Eyebrow className="mb-4" tone="green">
            {content.eyebrow}
          </Eyebrow>
          <h2
            id="home-trusted-partners-title"
            className={cn(
              "max-w-[14ch] text-[clamp(2.35rem,4vw,3.65rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-rail-ink",
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

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {content.partners.map((partner, index) => (
            <article
              key={partner.name}
              className={cn(
                "group flex min-h-[19rem] flex-col rounded-[8px] border border-steel-mist px-5 py-6 shadow-[0_14px_30px_rgba(10,25,35,0.06)] transition-shadow duration-200 hover:shadow-[0_18px_36px_rgba(10,25,35,0.11)] sm:px-7 sm:py-7",
                index % 2 === 0 ? "surface-mint-panel" : "surface-cyan-panel",
              )}
            >
              <div className="relative flex h-[10rem] items-center justify-center overflow-hidden rounded-[6px] border border-steel-mist/70 bg-white/75 p-6 sm:h-[11rem] sm:p-7">
                <Image
                  src={partner.logoSrc}
                  alt={partner.logoAlt}
                  width={280}
                  height={140}
                  sizes="(min-width: 1024px) 34vw, 80vw"
                  className="h-auto w-auto max-h-[8.5rem] max-w-[78%] object-contain object-center"
                />
              </div>
              <div className="mt-6 flex flex-1 flex-col">
                <h3
                  className={cn(
                    "text-[clamp(1.35rem,1.8vw,1.7rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-rail-ink",
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
                  className="mt-6 w-fit"
                >
                  {content.visitWebsite}
                </LinkArrow>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
