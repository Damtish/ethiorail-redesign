# EthioRail Website Redesign — Homepage Specification

## 1. Homepage Objective

The homepage must immediately position Ethio Rail Logistics as a modern, capable and internationally connected Ethiopian logistics company.

The homepage should not feel like a conventional corporate template.

It should communicate scale, movement, infrastructure and global connectivity while remaining clean, professional and easy to understand.

Primary visitor reaction:

“This is a serious modern logistics company.”

Primary business action:

Get a Quote

Secondary actions:

- Explore Services
- Explore Our Network
- Contact EthioRail

The homepage must tell a coherent story instead of presenting disconnected sections.

---

# 2. Homepage Story

The homepage narrative should be:

ETHIOPIA
↓
LOGISTICS EXPERTISE
↓
MULTIMODAL MOVEMENT
↓
ETHIOPIA–DJIBOUTI CONNECTION
↓
GLOBAL TRADE
↓
CUSTOMER ACTION

The page should gradually move visually from Ethiopia and rail infrastructure toward international ports and global logistics.

---

# 3. Approved Homepage Section Order

The homepage should initially contain:

1. Header
2. Hero
3. Quick Actions
4. Company / Value Introduction
5. Multimodal Journey
6. Services
7. Ethiopia–Djibouti / Network
8. Why Ethio Rail Logistics
9. Company Proof / Verified Metrics
10. Digital Logistics Future
11. Insights / News
12. Final Conversion CTA
13. Footer

The exact internal layouts may evolve during visual implementation, but the storytelling order should remain unless explicitly reviewed.

---

# 4. HEADER

## Desktop

The homepage header initially overlays the hero.

Expected structure:

LEFT:
EthioRail logo

CENTER / PRIMARY NAVIGATION:
Services
Network
About
Insights
Careers

RIGHT:
Contact
Language selector
Get a Quote

Future:
Customer Portal

Customer Portal should NOT appear as an active button unless approved and functional.

## Header behavior

At the top of the page:

- visually lightweight
- transparent or near-transparent over hero
- strong contrast against hero media

After scrolling:

- transition into a solid navigation background
- remain readable
- may become sticky

Do not create excessive animation.

## Navigation interactions

Dropdowns should feel premium and deliberate.

Services may eventually use a wide menu because there are many service categories.

Network, About and Insights should use simpler dropdowns.

Detailed menu design will be defined in DESIGN_SYSTEM.md.

---

# 5. HERO

The hero is the most important visual experience on the website.

## Height

Desktop:

approximately 85–100 viewport height

Mobile:

approximately 75–90 viewport height depending on content and browser viewport behavior

Do not force awkward full-screen behavior on small phones.

---

## Hero Media

Primary approved candidate:

freight-train-dry-landscape-01.mp4

Resolve the exact path using:

public/media/media-manifest.json

Do not assume the path if the manifest differs.

This is stock footage.

It must NOT be described as an actual EthioRail or Ethiopian Railway train.

## Visual treatment

The hero video should:

- fill the available hero area
- maintain aspect ratio
- use object-cover behavior
- have a carefully controlled dark overlay for text legibility
- autoplay only if permitted by browser behavior
- be muted
- loop
- play inline
- not display video controls

The video should not make the text difficult to read.

A fallback poster/static image will be created later during implementation/optimization.

Do not create it during this task.

---

## Hero Content

Working eyebrow:

ETHIO RAIL LOGISTICS

Working headline:

Moving Ethiopia.
Connecting the World.

This is WORKING creative copy and is not final approved corporate wording.

Working description:

Integrated logistics solutions connecting Ethiopian businesses with regional and global markets through rail, road, ocean and multimodal transportation.

Do not treat this copy as verified corporate language until approved.

Primary CTA:

Get a Quote

Secondary CTA:

Explore Our Network

Optional small supporting indicator:

Scroll to discover

Avoid excessive hero text.

---

# 6. QUICK ACTIONS

Immediately below or visually attached to the hero, provide high-value customer actions.

Recommended actions:

Get a Quote
Explore Services
Schedules & Routes
Contact Logistics

Do NOT show shipment tracking unless functional tracking exists.

The quick-action area may visually bridge the hero and the white/light content area below.

Possible visual direction:

a clean horizontal command bar rather than four generic cards.

Desktop:

horizontal layout

Mobile:

stack or horizontally scroll only if usability remains strong

Primary emphasis remains Get a Quote.

---

# 7. COMPANY / VALUE INTRODUCTION

Purpose:

Explain EthioRail quickly before introducing individual services.

Working section label:

INTEGRATED LOGISTICS

Working headline:

One logistics partner.
Every step of the journey.

Working supporting idea:

Ethio Rail Logistics coordinates freight across multiple modes and logistics services to help customers move cargo efficiently from origin to destination.

All final factual claims require verification.

## Layout direction

Avoid a standard:

image left
paragraph right

template if possible.

Preferred:

large editorial statement + supporting content + relevant logistics imagery.

Could incorporate a subtle rail-line visual motif connecting sections.

---

# 8. MULTIMODAL JOURNEY

This should be one of the signature homepage experiences.

Purpose:

Visually explain multimodal logistics.

Proposed journey:

ORIGIN
↓
ROAD
↓
INLAND / DRY PORT
↓
RAIL
↓
DJIBOUTI / PORT
↓
OCEAN
↓
GLOBAL DESTINATION

This is a conceptual logistics journey.

Do not present individual locations or steps as actual ERL operational claims unless verified.

## Desktop behavior

Preferred:

horizontal or gently curved journey visualization.

Possible stages:

01 Origin
02 Inland Transport
03 Dry Port
04 Rail
05 Port
06 Ocean
07 Destination

A line visually connects the stages.

The interaction may animate progressively as the user scrolls.

Animation must remain subtle and performant.

## Mobile behavior

Do NOT compress the full desktop diagram horizontally.

Convert to a vertical journey/timeline.

Each step should remain readable.

## Media

Supporting imagery may draw from:

- rail
- road
- port
- warehouse

Use media-manifest.json to select approved assets.

Generic stock imagery must remain represented as generic logistics imagery.

---

# 9. SERVICES

Purpose:

Show that EthioRail provides an integrated logistics offering.

Services currently defined:

- Multimodal Transportation
- Ocean Freight & NVOCC
- Land & Rail Transportation
- Freight Forwarding
- Customs Clearance
- Warehousing
- Inland Dry Port
- Voyage Charter

## Design direction

Do NOT create a generic 8-card grid with identical icons.

Preferred visual direction:

a high-impact editorial service presentation.

Possible desktop pattern:

LEFT:
service number + service name list

RIGHT:
large changing media area and short description

Example:

01
MULTIMODAL TRANSPORTATION

02
OCEAN FREIGHT & NVOCC

03
LAND & RAIL

04
FREIGHT FORWARDING

...

When a service becomes active through hover, focus or scroll:

- media changes
- supporting description changes
- relevant CTA becomes available

Alternative implementation may use large stacked service panels if it performs better.

## Mobile

Use vertically stacked service items.

Do not depend on hover.

Each service should be clearly tappable.

## Media examples

Rail:
approved rail imagery/video

Warehousing:
warehouse-operations-wide-01.mp4

Ocean:
container-port-aerial-01.mp4 or other approved port footage

Use media-manifest.json for exact paths.

---

# 10. ETHIOPIA–DJIBOUTI / NETWORK SECTION

This should be another signature section.

Working label:

OUR NETWORK

Working headline:

From Ethiopia to global markets.

Purpose:

Explain the importance of logistics connectivity between Ethiopia, Djibouti and international shipping connections.

## Visual centerpiece

Custom route/network visualization.

Initial conceptual direction:

Addis Ababa / Ethiopia
↓
inland / railway connection
↓
Djibouti
↓
international ocean routes

The existing Addis–Djibouti railway map under:

public/media/images/maps/

is reference material only.

Do not make that static map the final homepage centerpiece.

Future implementation should create a custom visual map using web-native elements.

Potential techniques later:

- SVG
- vector map
- animated path
- location nodes
- subtle route motion

Do NOT use a generic Google Map embed as the main visual experience.

## Important factual rule

Do not show specific operational facilities, destinations or routes without verification.

The map can remain conceptually focused until company data is confirmed.

---

# 11. WHY ETHIO RAIL LOGISTICS

Purpose:

Explain why a customer should choose the company.

Avoid generic claims such as:

Best Service
Quality
Innovation
Customer Satisfaction

Potential verified themes from company-approved content may include:

- multimodal logistics capability
- NVOCC / MTO capability
- integrated logistics coordination
- Ethiopia market knowledge
- rail and inland connectivity
- freight forwarding
- customs support
- warehousing

Final claims require verification.

## Design

Use approximately 3–4 strong differentiators.

Preferred visual direction:

large numbered statements rather than small icon cards.

Example structure:

01
INTEGRATED LOGISTICS

short explanation

02
MULTIMODAL EXPERTISE

short explanation

03
LOCAL KNOWLEDGE.
GLOBAL CONNECTIONS.

short explanation

The copy above is working language only.

---

# 12. VERIFIED COMPANY METRICS

A visually strong statistics section is desirable.

BUT:

No statistics may be invented.

Until management provides verified data, use clearly marked content placeholders in planning/design only.

Possible future metrics:

- years operating
- destinations
- shipments
- facilities
- customers
- network coverage

Do not publish:

00+
XX
1000+

as fake production values.

## Design behavior

If verified numbers are unavailable by implementation time, this entire section may be removed rather than filled with meaningless placeholders.

The homepage must still work without it.

---

# 13. DIGITAL LOGISTICS FUTURE

Purpose:

Show that EthioRail intends to develop more digital customer capabilities without pretending they already exist.

Working label:

DIGITAL LOGISTICS

Working headline:

A more connected logistics experience.

Potential future capabilities:

- shipment visibility
- quotations
- bookings
- logistics documents
- notifications
- account management

## Important

Do not display fake screenshots of a functioning portal unless explicitly designed as a labeled concept.

Do not provide fake login.

Do not provide fake tracking.

Do not imply these capabilities are currently available.

If management approves future-facing language, the section may use:

Customer digital services — coming in a future phase.

Otherwise present it as the company's digital direction without a release promise.

## Visual direction

Could use:

- abstract logistics interface elements
- route/data visualization
- clean conceptual dashboard illustration

Avoid cliché futuristic holograms.

---

# 14. INSIGHTS / NEWS

Purpose:

Give the homepage freshness and provide access to company announcements.

Working headline:

Latest from Ethio Rail Logistics

Show:

maximum 3 recent approved items

Potential card content:

- image
- category
- title
- date
- short excerpt

CTA:

View All News

Do not create fake news.

If approved news content is not available, this section may be temporarily hidden.

---

# 15. FINAL CONVERSION CTA

The homepage should end with a strong conversion moment before the footer.

Potential media:

port-rail-terminal-aerial-01.mp4

or another high-quality approved background.

Working headline:

Let's move your cargo.

Working supporting text:

Tell us where your cargo needs to go and our team will help identify the right logistics solution.

CTA:

Get a Quote

Secondary:

Contact Us

Working copy only.

## Visual treatment

Large.
Simple.
Cinematic.

Do not add unnecessary cards around the CTA.

---

# 16. FOOTER

The footer should feel intentional and premium, not like an afterthought.

Potential structure:

LOGO / COMPANY

Services
Company
Network
Support

Get a Quote CTA

Contact details

Language

Social links if verified

Legal:

Privacy
Terms

Copyright

Do not invent contact or social information.

---

# 17. PAGE COLOR RHYTHM

The homepage should not use one continuous background color.

Recommended rhythm:

Hero
dark / cinematic

Quick Actions
light or elevated neutral

Introduction
light

Multimodal Journey
light

Services
dark or high contrast

Network
dark / map-focused

Why EthioRail
light

Metrics
brand/high-contrast

Digital Logistics
dark

Insights
light

Final CTA
cinematic

Footer
dark

The exact colors are NOT defined here.

DESIGN_SYSTEM.md will define color values.

---

# 18. MEDIA RHYTHM

Do not play five videos simultaneously.

Video should be used strategically.

Preferred homepage video usage:

1. Hero video
2. potentially one major service/network visual
3. final CTA or another major section

Other sections should primarily use optimized still images.

During implementation, videos that are not visible should not continue consuming unnecessary resources.

Performance strategy will be defined later.

---

# 19. MOTION PRINCIPLES

Motion should communicate:

- movement
- routes
- logistics flow
- scale

Potential motion:

- hero media
- line/path drawing
- subtle image reveals
- service transitions
- number animation if verified metrics exist
- route progression
- navigation transitions

Avoid:

- bouncing icons
- excessive parallax
- constant text movement
- unnecessary spinning elements
- large entrance animations on every section
- scroll hijacking
- cursor gimmicks

Motion should enhance comprehension.

---

# 20. SCROLL EXPERIENCE

The page should have smooth visual continuity.

It should not feel like:

card
card
card
card
card

Sections should visually connect.

Potential connectors:

- rail-line motif
- route line
- typography transitions
- media transitions
- alternating light/dark sections
- oversized section numbering

Do NOT implement scroll hijacking.

Native browser scrolling should remain intact.

---

# 21. DESKTOP LAYOUT PRINCIPLES

Expected maximum content width:

approximately 1280–1440px depending on section.

Hero and cinematic sections may be full bleed.

Use strong grid alignment.

Avoid excessive content centered in narrow columns.

Use whitespace intentionally.

Some headlines may intentionally extend across large areas.

Exact grid measurements belong in DESIGN_SYSTEM.md.

---

# 22. TABLET

Tablet layouts must be designed intentionally.

Do not simply inherit desktop until a mobile breakpoint.

Consider:

- navigation change
- service layouts
- multimodal journey
- map behavior
- typography scale
- media ratios

---

# 23. MOBILE

Mobile is a primary experience.

Requirements:

- strong readable hero
- accessible navigation
- no hover-dependent functionality
- vertical multimodal journey
- service items remain easy to browse
- maps remain understandable
- CTA buttons remain easy to reach
- video should not create poor performance
- text must not overlay visually noisy media without sufficient contrast

Avoid extremely tall sections caused by desktop effects being stacked blindly.

---

# 24. ACCESSIBILITY

Homepage must support:

- keyboard navigation
- focus states
- semantic structure
- correct heading hierarchy
- descriptive links
- accessible buttons
- reduced-motion preferences
- video fallback
- adequate contrast
- no information conveyed through motion alone

Decorative video should not require captions if it contains no meaningful spoken content.

If future video contains meaningful audio/dialogue, accessibility requirements change.

---

# 25. PERFORMANCE

Homepage contains significant visual media, so performance must be carefully controlled.

Later implementation must consider:

- poster frames
- compressed web video
- responsive images
- modern image formats
- lazy-loading below-the-fold media
- preload only critical assets
- avoid loading every service video immediately
- respect device/network constraints where appropriate
- reduce unnecessary JavaScript

Do NOT optimize assets during this planning task.

---

# 26. WORKING COPY STATUS

All homepage copy in this document is categorized as:

WORKING CREATIVE COPY

unless explicitly marked as verified company content.

Examples:

“Moving Ethiopia. Connecting the World.”

“One logistics partner. Every step of the journey.”

“From Ethiopia to global markets.”

“Let's move your cargo.”

These may be changed before production.

Do not treat them as official approved corporate slogans.

---

# 27. HOMEPAGE MEDIA PRIORITY

Current preferred media hierarchy:

PRIMARY HERO:
freight-train-dry-landscape-01.mp4

STRONG SECONDARY:
port-rail-terminal-aerial-01.mp4

PORT / OCEAN:
container-port-aerial-01.mp4

WAREHOUSING:
warehouse-operations-wide-01.mp4

RAIL SUPPORT:
freight-train-container-terminal-01.mp4
freight-rail-yard-aerial-01.mp4

AUTHENTICITY:
genuine Ethiopian railway photography
Addis Ababa photography

MAP:
Addis–Djibouti railway map is reference material

Always verify exact asset names and paths against:

public/media/media-manifest.json

Do not rename or move assets during this task.

---

# 28. HOMEPAGE CONTENT DEPENDENCIES

Before production, the company should eventually provide:

- approved logo files
- final company description
- approved service descriptions
- verified statistics
- verified office/contact information
- approved locations
- route/schedule information
- leadership details
- company-owned photography if available
- approved news
- careers information
- legal content
- approved English/Amharic copy

The homepage should be designed so unavailable content can be omitted gracefully.

---

# 29. WHAT THE HOMEPAGE MUST NOT BECOME

Do not design:

- a generic freight template
- a dashboard
- a collection of equal-sized cards
- a giant corporate brochure
- a futuristic AI interface
- a one-page site containing every detail
- an animation showcase
- a fake logistics application

The website is first:

a premium corporate logistics experience

with a future path toward digital customer services.

---

# 30. HOMEPAGE SUCCESS CRITERIA

A new visitor should understand within approximately the first screen:

1. This is Ethio Rail Logistics.
2. The company moves freight/logistics.
3. The business is connected to Ethiopia and international trade.
4. The visitor can request a quote.

After scrolling approximately halfway through the homepage, the visitor should understand:

5. What major services are offered.
6. How multimodal logistics fits together.
7. Why the Ethiopia–Djibouti connection matters.

By the bottom of the homepage:

8. The visitor should know how to contact the company or request logistics services.

---

# 31. CURRENT STATUS

PROJECT_SPEC.md — defined
SITEMAP.md — defined
HOMEPAGE_SPEC.md — defined by this document

Next:

DESIGN_SYSTEM.md

Status:

Planning
