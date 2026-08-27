export type NavigationLabelKey =
  | "home"
  | "services"
  | "network"
  | "about"
  | "aboutOverview"
  | "insights"
  | "careers"
  | "contact"
  | "getQuote"
  | "viewAllServices"
  | "viewAllInsights"
  | "company"
  | "leadership"
  | "visionMission"
  | "news"
  | "resources"
  | "networkOverview"
  | "corridor"
  | "locations"
  | "schedulesRoutes"
  | "support"
  | "legal"
  | "privacy"
  | "terms"
  | "multimodalTransportation"
  | "oceanFreightNvocc"
  | "landRailTransportation"
  | "freightForwarding"
  | "customsClearance"
  | "warehousing"
  | "inlandDryPort"
  | "voyageCharter";

export type NavigationItem = {
  href: string;
  labelKey: NavigationLabelKey;
};

export type NavigationGroup = {
  key: "services" | "network" | "about" | "insights";
  labelKey: Extract<
    NavigationLabelKey,
    "services" | "network" | "about" | "insights"
  >;
  items: readonly NavigationItem[];
  viewAll?: NavigationItem;
};

export const desktopPrimaryGroups = [
  {
    key: "services",
    labelKey: "services",
    items: [
      {
        href: "/services/multimodal-transportation",
        labelKey: "multimodalTransportation",
      },
      {
        href: "/services/ocean-freight-nvocc",
        labelKey: "oceanFreightNvocc",
      },
      {
        href: "/services/land-rail-transportation",
        labelKey: "landRailTransportation",
      },
      {
        href: "/services/freight-forwarding",
        labelKey: "freightForwarding",
      },
      {
        href: "/services/customs-clearance",
        labelKey: "customsClearance",
      },
      {href: "/services/warehousing", labelKey: "warehousing"},
      {href: "/services/inland-dry-port", labelKey: "inlandDryPort"},
      {href: "/services/voyage-charter", labelKey: "voyageCharter"},
    ],
    viewAll: {href: "/services", labelKey: "viewAllServices"},
  },
  {
    key: "network",
    labelKey: "network",
    items: [
      {href: "/network/ethiopia-djibouti-corridor", labelKey: "corridor"},
      {href: "/network/locations", labelKey: "locations"},
      {href: "/network/schedules-routes", labelKey: "schedulesRoutes"},
    ],
    viewAll: {href: "/network", labelKey: "networkOverview"},
  },
  {
    key: "about",
    labelKey: "about",
    items: [
      {href: "/about", labelKey: "aboutOverview"},
      {href: "/about/leadership", labelKey: "leadership"},
      {href: "/about/vision-mission", labelKey: "visionMission"},
    ],
  },
  {
    key: "insights",
    labelKey: "insights",
    items: [
      {href: "/insights/news", labelKey: "news"},
      {href: "/insights/resources", labelKey: "resources"},
    ],
    viewAll: {href: "/insights", labelKey: "viewAllInsights"},
  },
] as const satisfies readonly NavigationGroup[];

export const desktopHomeLink = {href: "/", labelKey: "home"} as const;

export const desktopDirectLinks = [
  {href: "/careers", labelKey: "careers"},
] as const satisfies readonly NavigationItem[];

export const footerSections = [
  {
    key: "services",
    labelKey: "services",
    items: [
      {
        href: "/services/multimodal-transportation",
        labelKey: "multimodalTransportation",
      },
      {
        href: "/services/ocean-freight-nvocc",
        labelKey: "oceanFreightNvocc",
      },
      {
        href: "/services/land-rail-transportation",
        labelKey: "landRailTransportation",
      },
      {
        href: "/services/freight-forwarding",
        labelKey: "freightForwarding",
      },
      {
        href: "/services/customs-clearance",
        labelKey: "customsClearance",
      },
      {href: "/services/warehousing", labelKey: "warehousing"},
      {href: "/services/inland-dry-port", labelKey: "inlandDryPort"},
      {href: "/services/voyage-charter", labelKey: "voyageCharter"},
    ],
  },
  {
    key: "network",
    labelKey: "network",
    items: [
      {href: "/network", labelKey: "networkOverview"},
      {href: "/network/ethiopia-djibouti-corridor", labelKey: "corridor"},
      {href: "/network/schedules-routes", labelKey: "schedulesRoutes"},
    ],
  },
  {
    key: "company",
    labelKey: "company",
    items: [
      {href: "/about", labelKey: "company"},
      {href: "/about/leadership", labelKey: "leadership"},
      {href: "/careers", labelKey: "careers"},
      {href: "/insights/news", labelKey: "news"},
    ],
  },
  {
    key: "support",
    labelKey: "support",
    items: [
      {href: "/contact", labelKey: "contact"},
      {href: "/quote", labelKey: "getQuote"},
      {href: "/insights/resources", labelKey: "resources"},
    ],
  },
  {
    key: "legal",
    labelKey: "legal",
    items: [
      {href: "/privacy", labelKey: "privacy"},
      {href: "/terms", labelKey: "terms"},
    ],
  },
] as const;

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === href || pathname === "/en" || pathname === "/am";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}