import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/cn";

type InsightsContent = {
  eyebrow: string;
  headline: string;
  description: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

type InsightsPreviewProps = {
  locale: "en" | "am";
  content: InsightsContent;
};

export function InsightsPreview({locale, content}: InsightsPreviewProps) {
  const isAmharic = locale === "am";

  return (
    <section
      aria-labelledby="home-insights-title"
      className="surface-cyan-mist"
      data-header-theme="light"
    >
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
          <div className="space-y-5">
            <Eyebrow tone="green">{content.eyebrow}</Eyebrow>
            <h2
              id="home-insights-title"
              className={cn(
                "max-w-[12ch] text-[clamp(2.2rem,3.95vw,3.7rem)] font-semibold tracking-[-0.05em] leading-[1] text-rail-ink",
                isAmharic &&
                  "font-ethiopic text-[clamp(2rem,3.55vw,3.2rem)] leading-[1.08] tracking-[-0.03em] max-w-[13ch]",
              )}
            >
              {content.headline}
            </h2>
            <p
              className={cn(
                "max-w-[34rem] text-[clamp(0.98rem,1vw,1.05rem)] leading-[1.68] text-secondary-text",
                isAmharic && "font-ethiopic text-[clamp(0.93rem,0.95vw,1rem)] leading-[1.78]",
              )}
            >
              {content.description}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[8px] border border-steel-mist surface-cyan-panel shadow-[0_16px_28px_rgba(10,25,35,0.05)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,107,7,0.07)_0%,rgba(0,107,7,0)_32%),radial-gradient(circle_at_88%_12%,rgba(88,224,242,0.06)_0%,rgba(88,224,242,0)_28%)] blur-3xl opacity-75"
            />
            <div className="relative grid gap-px">
              {content.links.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                className={cn(
                    "group flex items-center justify-between gap-4 border-b border-steel-mist/80 px-5 py-[1.125rem] text-left transition-colors duration-200 last:border-b-0 hover:bg-[linear-gradient(180deg,rgba(248,252,251,0.98)_0%,rgba(239,246,244,0.99)_100%)] focus-visible:bg-[linear-gradient(180deg,rgba(248,252,251,0.98)_0%,rgba(239,246,244,0.99)_100%)] sm:px-6 sm:py-5",
                    isAmharic ? "font-medium" : "font-semibold",
                  )}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ethiorail-deep-green">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "text-[0.98rem] leading-[1.2] text-rail-ink transition-colors duration-200 group-hover:text-ethiorail-green group-focus-visible:text-ethiorail-green sm:text-[1.02rem]",
                        isAmharic && "font-ethiopic text-[0.94rem] leading-[1.3]",
                      )}
                    >
                      {item.label}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-1 text-ethiorail-green transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
                  >
                    <span className="text-xl leading-none">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
