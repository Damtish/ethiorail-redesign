import Image from "next/image";

import {Container} from "@/components/ui/Container";
import {Eyebrow} from "@/components/ui/Eyebrow";
import {EditorialVideo} from "@/components/shared/EditorialVideo";
import {cn} from "@/lib/cn";
import {BreadcrumbItem, Breadcrumbs} from "./Breadcrumbs";

type InteriorHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  video?: string;
  videoPoster?: string;
  breadcrumbs: BreadcrumbItem[];
  theme?: "dark" | "light";
  fullBleedVideo?: boolean;
  videoObjectPosition?: string;
};

export function InteriorHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  video,
  videoPoster,
  breadcrumbs,
  theme = "dark",
  fullBleedVideo = false,
  videoObjectPosition = "68% 50%",
}: InteriorHeroProps) {
  const dark = theme === "dark";
  const poster = videoPoster ?? image;

  return (
    <section
      data-header-theme={theme}
      className={cn(
        "relative isolate overflow-hidden",
        fullBleedVideo && "min-h-[clamp(42rem,70vh,52rem)]",
        dark ? "bg-rail-ink text-text-on-dark" : "surface-cyan-mist text-rail-ink",
      )}
    >
      {fullBleedVideo && video ? (
        <EditorialVideo
          src={video}
          poster={poster}
          objectPosition={videoObjectPosition}
          className="absolute inset-0 !h-full !w-full object-cover"
          posterClassName="absolute inset-0 object-cover object-[68%_50%]"
          sizes="100vw"
          priority
          preload={fullBleedVideo ? "auto" : "metadata"}
          playLabel="Play video"
        />
      ) : null}
      {dark ? (
        <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", fullBleedVideo && video ? "bg-[radial-gradient(circle_at_78%_18%,rgba(88,224,242,0.13),transparent_32%),linear-gradient(115deg,rgba(10,25,35,0.92)_0%,rgba(10,25,35,0.68)_48%,rgba(10,25,35,0.24)_100%),linear-gradient(180deg,rgba(10,25,35,0.16)_0%,rgba(10,25,35,0.02)_58%,rgba(10,25,35,0.12)_100%)]" : "bg-[radial-gradient(circle_at_78%_18%,rgba(88,224,242,0.13),transparent_32%),linear-gradient(115deg,rgba(10,25,35,0.98)_0%,rgba(10,25,35,0.84)_48%,rgba(10,25,35,0.48)_100%)]")} />
      ) : null}
      <Container className={cn(
        "relative z-10 pt-[clamp(7rem,12vw,8rem)] pb-[clamp(2.5rem,6vw,4rem)] lg:pt-[clamp(8.25rem,9vw,9.25rem)] lg:pb-[clamp(3rem,4vw,4rem)]",
        fullBleedVideo && video && "flex min-h-[clamp(42rem,70vh,52rem)] flex-col",
      )}>
        <div className="mb-8 lg:mb-10">
          <Breadcrumbs items={breadcrumbs} dark={dark} />
        </div>
        <div className={cn(
          "grid items-center gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(24rem,1fr)] lg:gap-14",
          fullBleedVideo && video && "flex min-h-0 flex-1 items-center",
        )}>
          <div className="max-w-[44rem]">
            <Eyebrow tone={dark ? "dark" : "green"}>{eyebrow}</Eyebrow>
            <h1 className={cn(
              "mt-5 max-w-[17ch] text-[clamp(2.375rem,4.5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em]",
              dark ? "text-text-on-dark" : "text-rail-ink",
            )}>
              {title}
            </h1>
            <p className={cn(
              "mt-6 max-w-[36rem] text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.65]",
              dark ? "text-text-on-dark/78" : "text-secondary-text",
            )}>
              {description}
            </p>
          </div>
          {!fullBleedVideo || !video ? <div className="relative min-h-[16rem] overflow-hidden rounded-[0.5rem] border border-white/10 shadow-[0_24px_70px_rgba(10,25,35,0.2)] sm:min-h-[20rem] lg:mt-7 lg:min-h-[clamp(24.5rem,31vw,27rem)]">
            {video ? (
              <EditorialVideo
                src={video}
                poster={poster}
                className="absolute inset-0 !h-full !w-full object-cover object-[68%_50%]"
                posterClassName="absolute inset-0 object-cover object-[68%_50%]"
                sizes="(min-width: 1024px) 52vw, 100vw"
                priority
                preload="metadata"
                playLabel="Play video"
              />
            ) : (
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[68%_50%]"
              />
            )}
            <div aria-hidden="true" className={cn("absolute inset-0", dark ? "bg-[linear-gradient(90deg,rgba(10,25,35,0.42),transparent_58%)]" : "bg-[linear-gradient(90deg,rgba(244,247,245,0.16),transparent_58%)]")} />
          </div> : null}
        </div>
      </Container>
    </section>
  );
}