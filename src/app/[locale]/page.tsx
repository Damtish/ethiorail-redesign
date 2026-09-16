import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import {Hero} from "@/components/home/Hero";
import {HomeExperience} from "@/components/home/HomeExperience";
import {isAppLocale} from "@/i18n/routing";

type LocalePageProps = {
  params: Promise<{locale: string}>;
};

async function loadMessages(locale: "en" | "am") {
  return (await import(`../../../messages/${locale}.json`)).default as {
    Home: {
      metadata: {
        title: string;
        description: string;
      };
      hero: {
        eyebrow: string;
        headlineLineOne: string;
        headlineLineTwo: string;
        description: string;
        supportingCue: string;
        primaryCta: string;
        secondaryCta: string;
      };
      quickActions: {
        eyebrow: string;
        getQuote: string;
        exploreServices: string;
        schedulesRoutes: string;
        contactLogistics: string;
      };
      intro: {
        eyebrow: string;
        headlineLineOne: string;
        headlineLineTwo: string;
        bodyOne: string;
        bodyTwo: string;
        contextLink: string;
      };
      journey: {
        eyebrow: string;
        headline: string;
        description: string;
        supportingMediaAlt: string;
        stages: Array<{
          title: string;
        }>;
      };
      services: {
        eyebrow: string;
        headlineLineOne: string;
        headlineLineTwo: string;
        description: string;
        viewAll: string;
        items: Array<{
          summary: string;
          label: string;
          href: string;
          mediaSrc: string;
          mediaAlt: string;
          mediaPosition: string;
        }>;
      };
      network: {
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
      why: {
        eyebrow: string;
        headline: string;
        description: string;
        pillars: Array<{
          title: string;
          description: string;
        }>;
      };
      trustedPartners: {
        eyebrow: string;
        headline: string;
        description: string;
        visitWebsite: string;
        partners: Array<{
          name: string;
          ownership: string;
          description: string;
          logoAlt: string;
          logoSrc: string;
          href: string;
        }>;
      };
      whatWeDo: {eyebrow: string; headline: string; description: string; items: Array<{label: string; title: string; description: string}>};
      segments: {eyebrow: string; headline: string; items: Array<{title: string; description: string}>};
      digital: {
        eyebrow: string;
        headline: string;
        description: string;
        secondarySentence: string;
        capabilities: string[];
      };
      insights: {
        eyebrow: string;
        headline: string;
        description: string;
        links: Array<{
          label: string;
          href: string;
        }>;
      };
      finalCta: {
        eyebrow: string;
        headline: string;
        description: string;
        primaryCta: string;
        secondaryCta: string;
      };
    };
  };
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await loadMessages(locale);

  return {
    title: messages.Home.metadata.title,
    description: messages.Home.metadata.description,
  };
}

export default async function LocalePage({params}: LocalePageProps) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await loadMessages(locale);

  return (
    <main id="main-content" className="surface-mint-canvas">
      <Hero locale={locale} content={messages.Home.hero} />
      <HomeExperience locale={locale} content={messages.Home} />
    </main>
  );
}
