import {cn} from "@/lib/cn";
import {Container} from "@/components/ui/Container";
import {LinkButton} from "@/components/ui/LinkButton";

type HeroContent = {
  eyebrow: string;
  headlineLineOne: string;
  headlineLineTwo: string;
  description: string;
  supportingCue: string;
  primaryCta: string;
  secondaryCta: string;
};

type HeroProps = {
  locale: "en" | "am";
  content: HeroContent;
};

export function Hero({locale, content}: HeroProps) {
  const isAmharic = locale === "am";

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-rail-ink text-text-on-dark"
      data-header-theme="dark"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <video
          className="absolute inset-0 !h-full !w-full object-cover object-[62%_52%] sm:object-[60%_52%] lg:object-[58%_50%]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src="/media/video/hero/freight-train-dry-landscape-01.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,25,35,0.84)_0%,rgba(10,25,35,0.72)_16%,rgba(10,25,35,0.34)_44%,rgba(10,25,35,0.18)_70%,rgba(10,25,35,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_28%,rgba(88,224,242,0.16)_0%,rgba(88,224,242,0)_30%),radial-gradient(circle_at_78%_16%,rgba(0,149,7,0.14)_0%,rgba(0,149,7,0)_26%),linear-gradient(180deg,rgba(10,25,35,0.18)_0%,rgba(10,25,35,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,25,35,0.14)_0%,rgba(10,25,35,0.02)_26%,rgba(10,25,35,0.08)_76%,rgba(10,25,35,0.3)_100%)]" />
      </div>

      <Container className="relative min-h-[100svh] px-[clamp(1.125rem,2.5vw,3rem)] pt-[clamp(5.75rem,8vw,7.5rem)] pb-8 sm:pt-[clamp(6rem,8vw,7.75rem)] sm:pb-10 lg:pt-[clamp(6.5rem,9vw,8.25rem)] lg:pb-12">
        <div className="flex min-h-[inherit] items-center">
          <div className="grid w-full gap-8 pb-2 lg:grid-cols-[minmax(0,40rem)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:pb-6">
            <div className="relative z-10 max-w-[40rem] lg:pb-2">
              <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-white/14 bg-[rgba(247,250,248,0.1)] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ethiorail-bright-green shadow-[0_12px_28px_rgba(10,25,35,0.12)] backdrop-blur-md sm:text-[0.72rem]">
                <span className="h-2 w-2 rounded-full bg-ethiorail-bright-green" />
                {content.eyebrow}
              </div>

              <h1
                className={cn(
                  "mt-5 max-w-[12ch] text-[clamp(3.2rem,7.8vw,6.1rem)] font-extrabold leading-[0.9] tracking-[-0.055em] text-text-on-dark drop-shadow-[0_10px_24px_rgba(10,25,35,0.35)] sm:max-w-[10ch] lg:text-[clamp(3.55rem,5.1vw,5.85rem)]",
                  isAmharic && "max-w-[13ch] tracking-[-0.02em] lg:text-[clamp(3.35rem,4.8vw,5.45rem)]",
                )}
              >
                <span className="block">{content.headlineLineOne}</span>
                <span className="block text-white">{content.headlineLineTwo}</span>
              </h1>

              <p
                className={cn(
                  "mt-5 max-w-[34rem] text-[1rem] leading-[1.72] text-text-on-dark/88 drop-shadow-[0_8px_18px_rgba(10,25,35,0.28)] sm:text-[1.04rem] lg:max-w-[31rem] lg:text-[1.1rem]",
                  isAmharic && "font-medium tracking-normal",
                )}
              >
                {content.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <LinkButton href="/quote" size="large">
                  {content.primaryCta}
                </LinkButton>
                <LinkButton href="/network" variant="secondary" size="large" className="border-white/14 bg-[rgba(247,250,248,0.08)] text-text-on-dark hover:border-white/24 hover:bg-[rgba(247,250,248,0.14)] hover:text-text-on-dark">
                  {content.secondaryCta}
                </LinkButton>
              </div>
            </div>

            <div className="relative z-10 flex justify-start lg:justify-end">
              <div className="max-w-[20rem] rounded-full border border-white/14 bg-[rgba(10,25,35,0.42)] px-4 py-3 text-left text-[0.78rem] font-medium leading-[1.55] text-text-on-dark shadow-[0_16px_32px_rgba(10,25,35,0.18)] backdrop-blur-md sm:max-w-[22rem] sm:text-[0.82rem] lg:mb-4">
                {content.supportingCue}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
