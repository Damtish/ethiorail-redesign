import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {cn} from "@/lib/cn";

type DigitalFutureContent = {
  eyebrow: string;
  headline: string;
  description: string;
  secondarySentence: string;
  capabilities: string[];
};

type DigitalFutureProps = {
  locale: "en" | "am";
  content: DigitalFutureContent;
};

export function DigitalFuture({locale, content}: DigitalFutureProps) {
  const isAmharic = locale === "am";

  return (
    <section
      aria-labelledby="home-digital-future-title"
      className="bg-rail-ink text-text-on-dark"
      data-header-theme="dark"
    >
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)] lg:items-center lg:gap-10">
          <div className="space-y-5">
            <Eyebrow tone="dark" className="text-secondary-text-dark">
              {content.eyebrow}
            </Eyebrow>
            <h2
              id="home-digital-future-title"
              className={cn(
                "max-w-[12ch] text-[clamp(2.2rem,4vw,3.75rem)] font-semibold tracking-[-0.05em] leading-[0.98] text-text-on-dark",
                isAmharic &&
                  "font-ethiopic text-[clamp(2rem,3.6vw,3.35rem)] leading-[1.08] tracking-[-0.03em] max-w-[13ch]",
              )}
            >
              {content.headline}
            </h2>
            <p
              className={cn(
                "max-w-[38rem] text-[clamp(0.98rem,1vw,1.08rem)] leading-[1.68] text-secondary-text-dark",
                isAmharic && "font-ethiopic text-[clamp(0.93rem,0.95vw,1rem)] leading-[1.78]",
              )}
            >
              {content.description}
            </p>
            <p
              className={cn(
                "max-w-[36rem] text-[clamp(0.96rem,0.98vw,1.02rem)] leading-[1.68] text-secondary-text-dark/92",
                isAmharic && "font-ethiopic text-[clamp(0.92rem,0.94vw,0.98rem)] leading-[1.76]",
              )}
            >
              {content.secondarySentence}
            </p>

            <ul className="grid grid-cols-2 gap-2 sm:gap-3">
              {content.capabilities.map((capability) => (
                <li
                  key={capability}
                  className={cn(
                    "min-h-10 rounded-[6px] border border-white/10 bg-white/[0.05] px-3 py-2 text-[0.72rem] font-medium leading-[1.15] text-text-on-dark/94 backdrop-blur-[2px] sm:min-h-11 sm:px-4 sm:py-2.5 sm:text-[0.96rem]",
                    isAmharic && "font-ethiopic text-[0.7rem] leading-[1.2] sm:text-[0.92rem]",
                  )}
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative isolate overflow-hidden rounded-[8px] border border-white/10 bg-deep-slate shadow-[0_24px_44px_rgba(10,25,35,0.24)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(0,179,11,0.16)_0%,rgba(0,179,11,0)_28%),radial-gradient(circle_at_22%_72%,rgba(88,224,242,0.12)_0%,rgba(88,224,242,0)_30%),linear-gradient(180deg,rgba(19,42,56,0.88)_0%,rgba(10,25,35,0.96)_100%)]"
            />
            <div className="relative min-h-[clamp(21.5rem,36vw,30rem)] p-4 sm:p-5">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-35" />
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-10 h-px bg-gradient-to-r from-transparent via-ethiorail-bright-green/70 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-y-6 left-6 w-px bg-gradient-to-b from-transparent via-rail-cyan/70 to-transparent"
              />

              <div className="relative flex h-full flex-col justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-secondary-text-dark">
                    Shipment visibility
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-secondary-text-dark">
                    Documents
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-secondary-text-dark">
                    Requests
                  </span>
                </div>

                <div className="relative grid flex-1 content-center gap-5">
                <div className="relative ml-8 max-w-[18rem] rounded-[8px] border border-white/12 bg-white/[0.08] p-3.5 backdrop-blur-[8px]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-ethiorail-deep-green">
                          Connected request
                        </p>
                        <p className="mt-2 text-lg font-semibold leading-[1.15] text-text-on-dark">
                          Quote, documents, support
                        </p>
                      </div>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-rail-ink/45 text-ethiorail-bright-green">
                        →
                      </span>
                    </div>
                    <div className="mt-4 grid gap-2">
                      <div className="h-2 rounded-full bg-white/[0.08]" />
                      <div className="h-2 w-[78%] rounded-full bg-white/[0.08]" />
                    </div>
                  </div>

                  <div className="ml-1.5 grid grid-cols-[1.08fr_0.92fr] gap-3.5">
                    <div className="rounded-[8px] border border-white/12 bg-white/[0.07] p-3.5 backdrop-blur-[8px]">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-secondary-text-dark">
                        Shipping documents
                      </p>
                      <div className="mt-4 space-y-2">
                        <div className="h-10 rounded-[6px] border border-white/10 bg-white/[0.08]" />
                        <div className="h-10 rounded-[6px] border border-white/10 bg-white/[0.08]" />
                      </div>
                    </div>
                    <div className="self-end rounded-[8px] border border-white/12 bg-white/[0.07] p-3.5 backdrop-blur-[8px]">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-secondary-text-dark">
                        Status signals
                      </p>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-ethiorail-bright-green" />
                          <span className="h-px flex-1 bg-white/12" />
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-rail-cyan" />
                          <span className="h-px flex-1 bg-white/12" />
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.65]" />
                          <span className="h-px flex-1 bg-white/12" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 640 420"
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-90"
                  >
                    <defs>
                      <linearGradient id="digital-route" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(0,179,11,0.12)" />
                        <stop offset="40%" stopColor="rgba(0,179,11,0.85)" />
                        <stop offset="100%" stopColor="rgba(88,224,242,0.65)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M120 310 C190 245, 240 220, 308 190 S440 128, 510 108"
                      fill="none"
                      stroke="url(#digital-route)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="120" cy="310" r="9" fill="#00B30B" fillOpacity="0.8" />
                    <circle cx="308" cy="190" r="8" fill="#00B30B" fillOpacity="0.8" />
                    <circle cx="510" cy="108" r="10" fill="#58E0F2" fillOpacity="0.8" />
                    <path
                      d="M120 310 L120 360 L250 360"
                      fill="none"
                      stroke="#58E0F2"
                      strokeWidth="2"
                      strokeDasharray="5 8"
                      strokeLinecap="round"
                      opacity="0.55"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-3.5">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-secondary-text-dark">
                      Future capabilities
                    </p>
                    <p className="mt-2 text-sm leading-[1.55] text-text-on-dark/85">
                      Shipment visibility, requests, documents, updates, support, and account management.
                    </p>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-ethiorail-bright-green">
                    ●
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
