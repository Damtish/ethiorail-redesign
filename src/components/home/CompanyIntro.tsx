import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/cn";

type CompanyIntroContent = {
  eyebrow: string;
  headlineLineOne: string;
  headlineLineTwo: string;
  bodyOne: string;
  bodyTwo: string;
  contextLink: string;
};

type CompanyIntroProps = {
  locale: "en" | "am";
  content: CompanyIntroContent;
};

export function CompanyIntro({locale, content}: CompanyIntroProps) {
  const isAmharic = locale === "am";

  return (
    <section
      aria-labelledby="home-company-intro-title"
      className="relative isolate overflow-hidden surface-cyan-mist"
      data-header-theme="light"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(0,107,7,0.07)_0%,rgba(0,107,7,0)_34%),radial-gradient(circle_at_84%_10%,rgba(88,224,242,0.05)_0%,rgba(88,224,242,0)_30%)] blur-3xl opacity-80"
      />
      <Container className="relative py-10 sm:py-12 lg:py-14">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.92fr)] lg:gap-10">
          <div className="space-y-4">
            <Eyebrow tone="green">{content.eyebrow}</Eyebrow>
            <h2
              id="home-company-intro-title"
              className={cn(
                "max-w-[12ch] text-[clamp(2.1rem,4.15vw,4rem)] font-semibold tracking-[-0.05em] leading-[1.02] text-rail-ink sm:max-w-[11ch] lg:text-[clamp(2.25rem,4vw,3.8rem)]",
                isAmharic &&
                  "font-ethiopic text-[clamp(1.95rem,3.9vw,3.6rem)] leading-[1.08] tracking-[-0.03em] sm:max-w-[12ch] lg:text-[clamp(2.05rem,3.6vw,3.35rem)]",
              )}
            >
              <span className="block">{content.headlineLineOne}</span>
              <span className="block">{content.headlineLineTwo}</span>
            </h2>
          </div>

          <div className="space-y-4 pt-1 lg:pt-6">
            <p
              className={cn(
                "max-w-[36rem] text-[clamp(0.98rem,1.02vw,1.08rem)] leading-[1.68] text-secondary-text lg:max-w-[34rem]",
                isAmharic && "font-ethiopic text-[clamp(0.95rem,0.98vw,1.02rem)] leading-[1.8]",
              )}
            >
              {content.bodyOne}
            </p>
            <p
              className={cn(
                "max-w-[34rem] text-[clamp(0.96rem,1vw,1.06rem)] leading-[1.68] text-secondary-text",
                isAmharic && "font-ethiopic text-[clamp(0.92rem,0.96vw,0.98rem)] leading-[1.8]",
              )}
            >
              {content.bodyTwo}
            </p>
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-semibold text-ethiorail-green transition-colors duration-200 hover:text-ethiorail-bright-green focus-visible:text-ethiorail-bright-green",
                isAmharic && "font-medium tracking-normal",
              )}
            >
              <span>{content.contextLink}</span>
              <span aria-hidden="true" className="text-base leading-none">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
