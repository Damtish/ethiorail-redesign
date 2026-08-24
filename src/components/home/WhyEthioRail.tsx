import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {cn} from "@/lib/cn";

type WhyContent = {
  eyebrow: string;
  headline: string;
  description: string;
  pillars: Array<{
    title: string;
    description: string;
  }>;
};

type WhyEthioRailProps = {
  locale: "en" | "am";
  content: WhyContent;
};

export function WhyEthioRail({locale, content}: WhyEthioRailProps) {
  const isAmharic = locale === "am";

  return (
    <section
      aria-labelledby="home-why-title"
      className="surface-rail-neutral"
      data-header-theme="light"
    >
      <Container className="pt-14 pb-18 sm:pt-16 sm:pb-20 lg:py-20">
        <div className="max-w-[58rem]">
          <Eyebrow className="mb-4" tone="green">
            {content.eyebrow}
          </Eyebrow>
          <h2
            id="home-why-title"
            className={cn(
              "max-w-[12ch] text-[clamp(2.65rem,4vw,3.85rem)] font-semibold tracking-[-0.05em] leading-[0.98] text-rail-ink",
                isAmharic &&
                "font-ethiopic text-[clamp(2.4rem,3.7vw,3.35rem)] leading-[1.08] tracking-[-0.03em] max-w-[13ch]",
            )}
          >
            {content.headline}
          </h2>
          <p
            className={cn(
              "mt-4 max-w-[42rem] text-[clamp(0.98rem,1vw,1.06rem)] leading-[1.68] text-secondary-text",
              isAmharic && "font-ethiopic text-[clamp(0.93rem,0.95vw,1rem)] leading-[1.78]",
            )}
          >
            {content.description}
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden border border-steel-mist surface-rail-panel lg:grid-cols-3">
          {content.pillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className={cn(
                index % 2 === 0
                  ? "surface-mint-panel"
                  : "surface-cyan-panel",
                "px-6 py-7 sm:px-8 sm:py-8 lg:px-9",
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ethiorail-deep-green">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className={cn(
                  "mt-4 max-w-[14ch] text-[clamp(1.5rem,2vw,2rem)] font-semibold tracking-[-0.04em] leading-[1.08] text-rail-ink",
                  isAmharic &&
                    "font-ethiopic max-w-[15ch] text-[clamp(1.35rem,1.8vw,1.8rem)] tracking-[-0.03em] leading-[1.14]",
                )}
              >
                {pillar.title}
              </h3>
              <p
                className={cn(
                  "mt-4 max-w-[19rem] text-[0.96rem] leading-[1.68] text-secondary-text",
                  isAmharic && "font-ethiopic text-[0.92rem] leading-[1.78]",
                )}
              >
                {pillar.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
