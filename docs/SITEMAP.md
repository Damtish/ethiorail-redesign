# EthioRail Website Redesign — Sitemap

## 1. Purpose

This document defines the information architecture for the new Ethio Rail Logistics public website.

The new sitemap intentionally simplifies the current website structure.

The goal is to:

- make core logistics services easy to discover
- reduce unnecessary navigation depth
- prioritize customer actions
- organize corporate information logically
- create room for network/corridor storytelling
- prepare for English and Amharic localization
- reserve clean entry points for future customer services

This document defines logical routes.

Locale prefixes such as `/en/` and `/am/` will be finalized later in ARCHITECTURE.md.

---

# 2. Primary Navigation

Desktop primary navigation:

Home

Services
Network
About
Insights
Careers

Utility/actions:

Contact
Get a Quote
Language Selector

Future:

Customer Portal

The primary header should NOT contain every available page.

Use dropdown/mega-menu navigation where appropriate.

---

# 3. Public Sitemap

## HOME

Route:

/

Purpose:

Primary company introduction, customer conversion, service overview, network story and brand experience.

Major homepage content will be defined separately in HOMEPAGE_SPEC.md.

---

# 4. SERVICES

## Services Overview

Route:

/services

Purpose:

Introduce Ethio Rail Logistics' end-to-end logistics capabilities and guide users to individual service pages.

Services should be presented as parts of one integrated logistics system rather than unrelated offerings.

---

## Multimodal Transportation

Route:

/services/multimodal-transportation

Purpose:

Explain integrated movement across multiple transportation modes and ERL's role as a Multimodal Transport Operator.

---

## Ocean Freight & NVOCC

Route:

/services/ocean-freight-nvocc

Purpose:

Explain ocean freight and Non-Vessel Operating Common Carrier capabilities in customer-friendly language.

"NVOCC" may be used prominently but should always be accompanied by a plain-language explanation.

---

## Land & Rail Transportation

Route:

/services/land-rail-transportation

Purpose:

Explain inland road transportation, rail-linked transportation and coordinated cargo movement.

Keep road and rail together initially because they operate as connected inland logistics capabilities.

If verified business requirements later justify separate pages, this can be reconsidered.

---

## Freight Forwarding

Route:

/services/freight-forwarding

Purpose:

Explain freight coordination and forwarding services.

---

## Customs Clearance

Route:

/services/customs-clearance

Purpose:

Explain customs-related logistics support and clearance coordination.

All regulatory claims must use verified company-approved content.

---

## Warehousing

Route:

/services/warehousing

Purpose:

Explain storage, handling and warehousing capabilities.

---

## Inland Dry Port

Route:

/services/inland-dry-port

Purpose:

Explain inland dry-port logistics and related cargo handling capabilities.

---

## Voyage Charter

Route:

/services/voyage-charter

Purpose:

Explain voyage-charter services for relevant cargo/customer requirements.

---

# 5. NETWORK

Network becomes a major top-level section of the redesigned website.

This is intentional.

Ethio Rail Logistics should visually communicate where and how cargo moves rather than presenting logistics only as a list of services.

---

## Network Overview

Route:

/network

Purpose:

High-level visualization of EthioRail's logistics network and connectivity.

Potential content:

- Ethiopia
- Djibouti
- rail
- road
- port connections
- international ocean connections

Only verified routes and locations may be presented as operational facts.

---

## Ethiopia–Djibouti Corridor

Route:

/network/ethiopia-djibouti-corridor

Purpose:

Visually explain the strategic logistics corridor between Ethiopia and Djibouti.

Potential content:

- corridor map
- major verified logistics points
- rail connection
- inland movement
- port connection
- onward international freight

The existing railway map in `public/media/images/maps/` may be used as reference material.

The final website should eventually use a custom-designed map/route experience rather than simply displaying the reference map as the primary visual.

---

## Locations

Route:

/network/locations

Purpose:

Show verified offices, terminals, facilities, service points or operational locations.

Do not invent locations.

---

## Schedules & Routes

Route:

/network/schedules-routes

Purpose:

Present verified schedules or route information when supplied by the company.

If no reliable structured schedule data exists at launch, the page may instead explain how customers can request current routing/schedule information.

Do not display invented schedules.

---

# 6. ABOUT

## Company

Route:

/about

Purpose:

Main corporate About page.

Consolidate information that would otherwise create too many small corporate pages.

Potential sections:

- company overview
- history
- mandate
- company story
- key capabilities
- why Ethio Rail Logistics
- values
- strategic direction

Do not create separate pages solely to reproduce every page from the old website.

---

## Leadership

Route:

/about/leadership

Purpose:

Approved leadership profiles and leadership message.

Only verified names, titles, biographies and photos may be used.

The old separate "Board Chairman & CEO Message" concept can be incorporated here rather than becoming a major navigation item.

---

## Vision & Mission

Route:

/about/vision-mission

Purpose:

Present approved:

- vision
- mission
- mandate
- core values

Core Values should NOT require its own top-level navigation page unless future content justifies it.

---

# 7. INSIGHTS

## Insights Overview

Route:

/insights

Purpose:

Landing page for news, company updates and useful logistics information.

---

## News & Updates

Route:

/insights/news

Purpose:

Company news, announcements, events, milestones and updates.

Individual article pattern:

/insights/news/[slug]

Example only:

/insights/news/example-article-title

Do not create fake articles.

---

## Resources

Route:

/insights/resources

Purpose:

Replace the generic concept of "Downloads" with a more useful Resources section.

Potential future content:

- company profile
- brochures
- forms
- policies
- logistics guides
- approved downloadable documents

Do not create fake documents.

---

# 8. CAREERS

Route:

/careers

Purpose:

Present EthioRail as an employer and display approved opportunities.

Potential future individual vacancy route:

/careers/[slug]

If no vacancies exist, the page should still work as a company careers page without displaying fake openings.

---

# 9. CONTACT

Route:

/contact

Purpose:

Provide verified contact information and a general inquiry form.

Potential content:

- head office
- address
- telephone
- email
- business hours
- map/location
- inquiry form

Only verified contact details may be published.

---

# 10. GET A QUOTE

Route:

/quote

Purpose:

Primary conversion page.

This should be treated as a dedicated customer workflow rather than an ordinary Contact page.

Potential flow:

1. Transport requirement
2. Origin and destination
3. Cargo information
4. Customer information
5. Review
6. Submit

The final fields and submission behavior will be specified later.

Automatic pricing is outside Version 1 scope.

---

# 11. FUTURE CUSTOMER PORTAL

Potential entry route:

/portal

or another route approved later.

Status:

FUTURE — NOT VERSION 1

Potential future areas:

/portal/login
/portal/dashboard
/portal/shipments
/portal/quotes
/portal/bookings
/portal/documents
/portal/support
/portal/account

These routes are conceptual only.

Do not implement them.

Do not create placeholder dashboards.

Do not create fake tracking.

---

# 12. FUTURE SHIPMENT TRACKING

Potential public route:

/track

Status:

FUTURE

Do not ship a tracking form that implies real tracking exists unless a working backend/data integration exists.

If management wants shipment tracking before the customer portal, it must become a separately approved feature.

---

# 13. LEGAL / UTILITY PAGES

Reserve the following routes:

/privacy
/terms

Content must be legally/company approved before production.

Additional utility pages may be added later if genuinely required.

Do not create unnecessary legal pages simply to make the footer look larger.

---

# 14. ERROR PAGE

Application should eventually support:

404 / Not Found

Design should remain consistent with the EthioRail visual system and provide useful navigation back into the website.

Implementation happens later.

---

# 15. PRIMARY HEADER STRUCTURE

Recommended desktop navigation:

ETHIORAIL LOGO

Services ▼
Network ▼
About ▼
Insights ▼
Careers

Contact

[ Get a Quote ]

Language

Future:
Customer Portal

Do not display an inactive Customer Portal button in production unless management explicitly wants a "Coming Soon" experience.

The architecture should prepare for the portal without requiring a dead navigation item.

---

# 16. SERVICES MENU

Recommended structure:

SERVICES

Multimodal Transportation
Ocean Freight & NVOCC
Land & Rail Transportation
Freight Forwarding
Customs Clearance
Warehousing
Inland Dry Port
Voyage Charter

Supporting CTA:

View All Services

---

# 17. NETWORK MENU

NETWORK

Network Overview
Ethiopia–Djibouti Corridor
Locations
Schedules & Routes

---

# 18. ABOUT MENU

ABOUT

Company
Leadership
Vision & Mission

Do not expose every small corporate-content section as a separate navigation item.

---

# 19. INSIGHTS MENU

INSIGHTS

News & Updates
Resources

---

# 20. MOBILE NAVIGATION

Mobile navigation should preserve the same information architecture.

Expected structure:

Services
  expandable submenu

Network
  expandable submenu

About
  expandable submenu

Insights
  expandable submenu

Careers

Contact

Get a Quote

Language

Future Customer Portal when available

Do not simply shrink the desktop navigation.

Detailed behavior will be defined in HOMEPAGE_SPEC.md and DESIGN_SYSTEM.md.

---

# 21. FOOTER INFORMATION ARCHITECTURE

The footer should provide a useful secondary navigation system.

Potential groups:

## Services

Multimodal Transportation
Ocean Freight & NVOCC
Land & Rail Transportation
Freight Forwarding
Customs Clearance
Warehousing

## Company

About
Leadership
Careers
News

## Network

Network Overview
Ethiopia–Djibouti Corridor
Schedules & Routes

## Support

Contact
Get a Quote
Resources

## Legal

Privacy
Terms

Also include verified:

- company name
- address
- phone
- email
- social links

Do not invent social accounts or company information.

---

# 22. URL PRINCIPLES

URLs should:

- be lowercase
- use hyphens
- be descriptive
- remain concise
- avoid unnecessary nesting
- avoid file extensions
- avoid dates unless required
- remain stable after launch

Good:

/services/freight-forwarding
/network/ethiopia-djibouti-corridor
/insights/news
/quote

Avoid:

/page?id=42
/services/service-page-3
/about-us/about-company-profile

---

# 23. Localization Readiness

The logical sitemap above is language-independent.

The architecture must later support English and Amharic.

A likely future pattern may be:

/en/services/freight-forwarding
/am/services/freight-forwarding

However, the exact locale-routing strategy is NOT approved in this document.

ARCHITECTURE.md will make the final technical decision.

Do not create translated URL slugs yet.

---

# 24. Legacy Content Migration

The current website contains pages and URLs that may not exist one-for-one in the redesign.

Examples include separate pages for:

- Why ERL
- CEO/Chairman message
- Company Profile
- Vision/Mission/Mandate
- Core Values
- individual existing service URLs
- News & Updates
- Schedules & Routes
- Downloads
- Career
- Contact
- Get a Quote

Before production launch, legacy URLs must be inventoried and mapped to their appropriate new destination.

Permanent redirects should later be implemented where appropriate.

Do NOT implement redirects during this planning task.

---

# 25. V1 Public Page Inventory

Expected primary V1 pages:

1. Home
2. Services Overview
3. Multimodal Transportation
4. Ocean Freight & NVOCC
5. Land & Rail Transportation
6. Freight Forwarding
7. Customs Clearance
8. Warehousing
9. Inland Dry Port
10. Voyage Charter
11. Network Overview
12. Ethiopia–Djibouti Corridor
13. Locations
14. Schedules & Routes
15. About
16. Leadership
17. Vision & Mission
18. Insights
19. News & Updates
20. Resources
21. Careers
22. Contact
23. Get a Quote
24. Privacy
25. Terms
26. 404

Dynamic pages may later include:

- news article
- career vacancy

This inventory can be reduced if final approved company content does not justify a dedicated page.

Quality and clarity are more important than page count.

---

# 26. Explicitly Excluded From Current Sitemap

Do not currently add:

- customer dashboard
- employee dashboard
- admin dashboard
- pricing calculator
- payment portal
- shipment-management application
- ERP
- CRM
- live chat
- customer document center
- fake tracking
- fake booking system
- generic pages added only for SEO

---

# 27. Current Approval Status

Approved information architecture:

Home
Services
Network
About
Insights
Careers
Contact
Get a Quote

Future:

Customer Portal
Shipment Tracking

Status: Planning — Sitemap Defined

Next document:

HOMEPAGE_SPEC.md
