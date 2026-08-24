import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/cn";

type NetworkContent = {
  eyebrow: string;
  headline: string;
  description: string;
  viewNetwork: string;
  schedulesRoutes: string;
  labels: {
    ethiopia: string;
    railCorridor: string;
    djibouti: string;
    portGateway: string;
    globalConnections: string;
  };
};

type NetworkCorridorProps = {
  locale: "en" | "am";
  content: NetworkContent;
};

export function NetworkCorridor({locale, content}: NetworkCorridorProps) {
  const isAmharic = locale === "am";

  return (
    <section
      aria-labelledby="home-network-title"
      className="overflow-x-clip bg-deep-slate text-text-on-dark"
      data-header-theme="dark"
    >
      <Container className="py-9 sm:py-11 xl:py-12 2xl:py-14">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:items-center xl:gap-8 2xl:gap-10">
          <div className="space-y-5 xl:pt-1">
            <Eyebrow tone="dark" className="text-secondary-text-dark">
              {content.eyebrow}
            </Eyebrow>
            <h2
              id="home-network-title"
              className={cn(
                "max-w-[12ch] text-[clamp(2.55rem,3.95vw,3.7rem)] font-semibold tracking-[-0.05em] leading-[0.98] text-text-on-dark xl:text-[clamp(2.7rem,3.4vw,3.7rem)]",
                isAmharic &&
                  "font-ethiopic text-[clamp(2.2rem,3.35vw,3.15rem)] leading-[1.08] tracking-[-0.03em] max-w-[13ch] xl:text-[clamp(2.3rem,3vw,3.1rem)]",
              )}
            >
              {content.headline}
            </h2>
            <p
              className={cn(
                "max-w-[36rem] text-[clamp(0.96rem,0.98vw,1.02rem)] leading-[1.64] text-secondary-text-dark xl:max-w-[34rem]",
                isAmharic &&
                  "font-ethiopic text-[clamp(0.92rem,0.92vw,0.98rem)] leading-[1.72] xl:text-[clamp(0.93rem,0.9vw,1rem)]",
              )}
            >
              {content.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/network"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-ethiorail-bright-green bg-ethiorail-green px-5 py-3 text-sm font-semibold text-cool-canvas transition-colors duration-200 hover:bg-ethiorail-bright-green focus-visible:bg-ethiorail-bright-green"
              >
                <span>{content.viewNetwork}</span>
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
              <Link
                href="/network/schedules-routes"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/16 bg-transparent px-5 py-3 text-sm font-semibold text-text-on-dark transition-colors duration-200 hover:border-white/24 hover:bg-white/5 focus-visible:border-white/24 focus-visible:bg-white/5"
              >
                {content.schedulesRoutes}
              </Link>
            </div>
          </div>

          <div className="relative isolate xl:ml-auto xl:w-full xl:max-w-[50rem] xl:min-h-[clamp(20.5rem,25vw,31rem)] 2xl:max-w-[53rem] 2xl:min-h-[clamp(22rem,24vw,33rem)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(19,42,56,0.96)_0%,rgba(19,42,56,0.82)_14%,rgba(19,42,56,0.4)_34%,rgba(19,42,56,0.14)_56%,rgba(19,42,56,0)_76%),linear-gradient(180deg,rgba(10,25,35,0.16)_0%,rgba(10,25,35,0)_18%,rgba(10,25,35,0)_82%,rgba(10,25,35,0.2)_100%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(88,224,242,0.1)_0%,rgba(88,224,242,0)_26%),radial-gradient(circle_at_58%_58%,rgba(0,179,11,0.08)_0%,rgba(0,179,11,0)_30%),radial-gradient(circle_at_28%_48%,rgba(10,25,35,0.1)_0%,rgba(10,25,35,0)_54%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 right-[50%] bg-gradient-to-r from-deep-slate via-deep-slate/84 to-transparent"
            />
            <Image
              src="/media/images/maps/ethio-djibouti-corridor-map.png"
              alt={
                isAmharic
                  ? "የኢትዮጵያ–ጅቡቲ ሎጂስቲክስ ኮሪደር ካርታ፣ ከአዲስ አበባ እስከ ዲሬ ዳዋ እና ጅቡቲ ድረስ የሚዘልቅ፣ ከዚያም ወደ ዓለም ገበያዎች የሚያገናኝ።"
                  : "Map showing the Ethiopia–Djibouti logistics corridor from Addis Ababa through Dire Dawa to Djibouti and onward to global markets."
              }
              width={1402}
              height={1122}
              sizes="(min-width: 1536px) 54vw, (min-width: 1280px) 52vw, (min-width: 1024px) 50vw, 100vw"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.72) 5%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 88%, rgba(0,0,0,0.72) 95%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.72) 5%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 88%, rgba(0,0,0,0.72) 95%, rgba(0,0,0,0) 100%)",
              }}
              className="relative z-10 h-auto w-full max-w-none object-contain object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
