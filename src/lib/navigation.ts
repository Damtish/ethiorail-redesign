export type NavigationLabelKey =
 | "service0" | "service1" | "service2" | "service3" | "service4" | "service5" | "service6" | "service7" | "service8" | "service9" | "service10" | "service11" | "service12"

  | "valueAdded" | "supplyChain" | "dryPortTerminal" | "shareholders" | "faq" | "inlandTerminal"
  | "bids"
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
  | "sustainability"
  | "digitalLogistics"
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
  | "airFreight"
  | "oceanFreightNvocc"
  | "landRailTransportation"
  | "freightForwarding"
  | "customsClearance"
  | "warehousing"
  | "inlandDryPort"
  | "consolidationDeconsolidation"
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
    items: [{"href":"/services/multi-modal-operation","labelKey":"service0"},{"href":"/services/ex-factory-transportation","labelKey":"service1"},{"href":"/services/pre-clearance","labelKey":"service2"},{"href":"/services/customs-clearance","labelKey":"service3"},{"href":"/services/freight","labelKey":"service4"},{"href":"/services/road-rail-transportation","labelKey":"service5"},{"href":"/services/dry-port-handling","labelKey":"service6"},{"href":"/services/last-mile-delivery","labelKey":"service7"},{"href":"/services/cargo-insurance","labelKey":"service8"},{"href":"/services/supply-chain-management","labelKey":"service9"},{"href":"/services/container-rental-management","labelKey":"service10"},{"href":"/services/consolidation-deconsolidation","labelKey":"service11"},{"href":"/services/packaging-labeling","labelKey":"service12"}],
    viewAll: {href: "/services", labelKey: "viewAllServices"},
  },
  {
    key: "network",
    labelKey: "network",
    items: [
      {href: "/network/ethiopia-djibouti-corridor", labelKey: "corridor"},
      {href: "/services/dry-port-handling", labelKey: "service6"},
      {href: "/network/schedules-routes", labelKey: "schedulesRoutes"},
    ],
    viewAll: {href: "/network", labelKey: "networkOverview"},
  },
  {
    key: "about",
    labelKey: "about",
    items: [
      {href: "/about", labelKey: "aboutOverview"},
      {href: "/about/shareholders", labelKey: "shareholders"},
      {href: "/about/vision-mission", labelKey: "visionMission"},
      {href: "/about/sustainability", labelKey: "sustainability"},
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
  {href: "/digital-logistics", labelKey: "digitalLogistics"},
  {href: "/careers", labelKey: "careers"},
] as const satisfies readonly NavigationItem[];

export const footerSections = [
  {
    key: "services",
    labelKey: "services",
    items: [{"href":"/services/multi-modal-operation","labelKey":"service0"},{"href":"/services/ex-factory-transportation","labelKey":"service1"},{"href":"/services/pre-clearance","labelKey":"service2"},{"href":"/services/customs-clearance","labelKey":"service3"},{"href":"/services/freight","labelKey":"service4"},{"href":"/services/road-rail-transportation","labelKey":"service5"},{"href":"/services/dry-port-handling","labelKey":"service6"},{"href":"/services/last-mile-delivery","labelKey":"service7"},{"href":"/services/cargo-insurance","labelKey":"service8"},{"href":"/services/supply-chain-management","labelKey":"service9"},{"href":"/services/container-rental-management","labelKey":"service10"},{"href":"/services/consolidation-deconsolidation","labelKey":"service11"},{"href":"/services/packaging-labeling","labelKey":"service12"}],
  },
  {
    key: "network",
    labelKey: "network",
    items: [
      {href: "/network", labelKey: "networkOverview"},
      {href: "/network/locations", labelKey: "locations"},
      {href: "/network/ethiopia-djibouti-corridor", labelKey: "corridor"},
      {href: "/network/schedules-routes", labelKey: "schedulesRoutes"},
    ],
  },
  {
    key: "company",
    labelKey: "company",
    items: [
      {href: "/about", labelKey: "company"},
      {href: "/about/shareholders", labelKey: "shareholders"},
      {href: "/about/leadership", labelKey: "leadership"},
      {href: "/about/vision-mission", labelKey: "visionMission"},
      {href: "/about/sustainability", labelKey: "sustainability"},
      {href: "/careers", labelKey: "careers"},
      {href: "/insights/news", labelKey: "news"},
    ],
  },
  {
    key: "support",
    labelKey: "support",
    items: [
      {href: "/contact", labelKey: "contact"},
      {href: "/faq", labelKey: "faq"},
      {href: "/digital-logistics", labelKey: "digitalLogistics"},
      {href: "/bids", labelKey: "bids"},
      {href: "/insights", labelKey: "insights"},
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
