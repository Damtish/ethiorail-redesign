import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/cn";

type QuickActionsContent = {
  eyebrow: string;
  getQuote: string;
  exploreServices: string;
  schedulesRoutes: string;
  contactLogistics: string;
};

type QuickActionsProps = {
  locale: "en" | "am";
  content: QuickActionsContent;
};

const quickActions = [
  {href: "/quote", labelKey: "getQuote"},
  {href: "/services", labelKey: "exploreServices"},
  {href: "/network/schedules-routes", labelKey: "schedulesRoutes"},
  {href: "/contact", labelKey: "contactLogistics"},
] as const;

export function QuickActions({locale, content}: QuickActionsProps) {
  const isAmharic = locale === "am";

  return (
    <section
      aria-labelledby="home-quick-actions-title"
      className="relative isolate overflow-hidden border-y border-steel-mist/70 surface-mint-canvas"
      data-header-theme="light"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(0,179,11,0.07)_0%,rgba(0,179,11,0)_34%),radial-gradient(circle_at_84%_0%,rgba(88,224,242,0.05)_0%,rgba(88,224,242,0)_28%)] blur-3xl opacity-80"
      />
      <Container className="relative py-4 sm:py-5 lg:py-6">
        <h2 id="home-quick-actions-title" className="sr-only">
          {content.eyebrow}
        </h2>
        <Eyebrow className="mb-3" tone="green">
          {content.eyebrow}
        </Eyebrow>
        <div className="grid gap-px overflow-hidden border border-steel-mist/80 surface-rail-panel shadow-[0_10px_24px_rgba(10,25,35,0.04)] backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action, index) => (
            <Link
              key={action.href}
              href={action.href}
              className={cn(
                "group flex min-h-[4.25rem] flex-col justify-between gap-4 surface-mint-panel px-4 py-3.5 transition-colors duration-200 hover:bg-[linear-gradient(180deg,rgba(248,252,251,0.98)_0%,rgba(236,245,242,0.99)_100%)] focus-visible:bg-[linear-gradient(180deg,rgba(248,252,251,0.98)_0%,rgba(236,245,242,0.99)_100%)] sm:px-5 lg:min-h-[4.4rem] lg:py-3.5",
                isAmharic ? "font-medium" : "font-semibold",
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ethiorail-deep-green/90">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex items-end justify-between gap-4">
                <span
                  className={cn(
                    "max-w-[11ch] text-[1.02rem] leading-[1.18] text-rail-ink transition-colors duration-200 group-hover:text-ethiorail-green group-focus-visible:text-ethiorail-green sm:text-[1.06rem]",
                    isAmharic && "max-w-[12ch] text-[1rem] leading-[1.28]",
                  )}
                >
                  {content[action.labelKey]}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex items-center gap-1 text-ethiorail-green transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
                >
                  <span className="text-xl leading-none">→</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
