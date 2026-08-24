# EthioRail Website Redesign â€” Design System

## 1. Purpose

This document defines the visual and interaction direction for the Ethio Rail Logistics redesign.

The design system should produce a website that feels:

- premium
- industrial
- modern
- authoritative
- internationally credible
- clean
- highly visual
- distinctly connected to Ethiopia and logistics infrastructure

The website must NOT feel like:

- a generic logistics template
- a startup SaaS dashboard
- a cryptocurrency website
- an AI-generated futuristic interface
- an overdesigned animation demo
- a collection of identical rounded cards

The overall visual language should combine:

INDUSTRIAL PRECISION
+
EDITORIAL SIMPLICITY
+
LOGISTICS MOVEMENT
+
ETHIOPIAN AUTHENTICITY

---

# 2. Brand Status

The official production brand guidelines have not yet been supplied.

Therefore, the color values and typography in this document are:

PROVISIONAL DESIGN TOKENS

They are approved for prototype/development direction but may need adjustment when official:

- logo files
- brand colors
- typography guidelines
- corporate identity documents

are supplied.

Do not claim these provisional values are official Ethio Rail Logistics brand colors.

---

# 3. Core Visual Concept

The website should visually reference:

- railway infrastructure
- shipping containers
- logistics routes
- industrial terminals
- ports
- maps
- transport corridors
- movement
- large-scale infrastructure

These references should be subtle.

Examples:

- thin route lines
- grid geometry
- oversized numbering
- long horizontal separators
- map nodes
- directional movement
- strong rectangular image framing

Avoid literal decorative train-track graphics everywhere.

---

# 4. Provisional Color System

## Primary Dark

Name:

Rail Ink

Value:

#0A1923

Usage:

- hero overlays
- dark sections
- navigation
- footer
- typography on light backgrounds
- premium high-contrast areas

---

## Secondary Dark

Name:

Deep Slate

Value:

#132A38

Usage:

- elevated dark surfaces
- secondary dark sections
- hover states
- map backgrounds

---

## Primary Light

Name:

Cool Canvas

Value:

#F4F7F5

Usage:

- major light page sections
- editorial backgrounds
- contrast against industrial photography

The website should not use pure white everywhere.

---

## Surface White

Value:

#FFFFFF

Usage:

- forms
- selected content surfaces
- cards where necessary
- contrast within Cool Canvas areas

---

## Secondary Neutral

Name:

Steel Mist

Value:

#E5ECE9

Usage:

- subtle background distinction
- borders
- disabled states
- map details
- section separators

---

## Primary Text on Light

Value:

#0A1923

---

## Secondary Text on Light

Value:

#53636C

---

## Text on Dark

Primary:

#F7F9F8

Secondary:

#C8D1D5

---

## Primary Brand Accent

Name:

EthioRail Green

Value:

#009507

Usage:

- normal primary CTA
- primary brand interaction color
- significant branded accents

---

## Bright Interaction Accent

Name:

EthioRail Bright Green

Value:

#00B30B

Usage:

- hover
- active state
- selected state
- active route emphasis

---

## Accessible Text Accent

Name:

EthioRail Deep Green

Value:

#006B07

Usage:

- small text on light backgrounds
- eyebrows
- accessible textual accent

---

## Secondary Accent

Name:

Rail Cyan

Value:

#58E0F2

Usage:

- restrained secondary accent
- route nodes
- network/map details
- occasional arrows and logistics graphics

---

# 5. Color Philosophy

The website must not become overwhelmingly green.

Primary visual balance:

dark navy + cool neutrals
+
large logistics photography/video
+
controlled EthioRail green
+
small cyan details

Do not use green/cyan gradients throughout the UI merely because the logo contains both colors.

The logo may retain its original gradient treatment.

Website UI should primarily use solid colors.

Avoid:

- neon green appearance
- cyberpunk styling
- glowing cyan effects
- gradient buttons
- gradient typography everywhere

---

# 6. Ethiopian Identity

The design should feel Ethiopian primarily through:

- authentic Ethiopian railway imagery
- Addis Ababa imagery
- Ethiopiaâ€“Djibouti network storytelling
- company content
- Amharic language support
- geographic context

Do NOT simply decorate the website with:

green + yellow + red everywhere.

The national identity should come from authenticity rather than clichÃ©.

---

# 7. Typography

## English Primary Typeface

Preferred:

Manrope

Fallback:

Arial
Helvetica
sans-serif

Manrope should be used for:

- headlines
- body text
- navigation
- buttons
- labels
- statistics

Use different weights rather than unnecessarily introducing many typefaces.

---

## Amharic Typeface

Preferred:

Noto Sans Ethiopic

Fallback:

system sans-serif with Ethiopic support

Amharic typography should receive the same spacing, hierarchy and design attention as English.

Do not assume English line-height or character density works identically for Amharic.

---

# 8. Font Weight Strategy

Use approximately:

400 â€” body

500 â€” labels/navigation

600 â€” emphasized UI

700 â€” major headlines when required

Avoid:

- ultra-thin text
- excessive 800/900 weight everywhere
- mixing too many font weights

Large typography should gain impact primarily through scale and spacing.

---

# 9. Type Scale

Use fluid responsive typography rather than fixed sizes at every breakpoint.

Suggested desktop targets:

Display / Hero:

72â€“104px depending on viewport

Large Section Heading:

52â€“72px

H2:

40â€“56px

H3:

28â€“36px

H4:

20â€“24px

Body Large:

18â€“20px

Body:

16â€“18px

Small:

14px

Eyebrow / Label:

12â€“14px

Mobile targets should scale appropriately.

Hero headline should generally remain:

approximately 44â€“60px

on modern mobile devices depending on available width.

Do not create text smaller than necessary simply to preserve desktop line breaks.

---

# 10. Line Height

Headlines:

approximately 0.95â€“1.1

Body:

approximately 1.5â€“1.7

Labels:

approximately 1.2â€“1.4

Large editorial headlines may use tighter line-height.

Body copy must remain comfortably readable.

---

# 11. Letter Spacing

Large headlines:

slightly tight

Body:

normal

Uppercase eyebrow labels:

moderately increased letter spacing

Do not use heavily tracked uppercase for paragraphs.

---

# 12. Content Width

Recommended maximum general content width:

1440px

Typical editorial content:

1200â€“1320px

Long-form readable text:

approximately 680â€“760px

Full-bleed sections:

may exceed container constraints.

---

# 13. Grid

Desktop:

12-column grid

Large desktop gutters:

32â€“48px

Standard desktop gutters:

24â€“32px

Tablet:

24px

Mobile:

18â€“20px

The exact CSS implementation is an architecture/development decision later.

Use strong alignment across sections.

---

# 14. Spacing System

Base spacing unit:

4px

Preferred spacing sequence:

4
8
12
16
20
24
32
40
48
64
80
96
128
160

Avoid arbitrary spacing values unless visually justified.

---

# 15. Section Spacing

Large desktop:

approximately 120â€“160px vertical section padding

Standard desktop:

96â€“128px

Tablet:

80â€“96px

Mobile:

64â€“80px

Cinematic sections may follow different rules.

Do not make mobile pages excessively long merely because desktop spacing was stacked.

---

# 16. Border Radius

The interface should feel architectural rather than bubbly.

Preferred:

buttons:
2â€“4px

form inputs:
4px

small cards:
4â€“8px

large media:
0â€“8px depending on context

Avoid:

- 20px+ radius everywhere
- pill-shaped cards
- floating bubbly UI

Pills may be used only for genuine tags/status controls.

---

# 17. Borders

Preferred:

1px subtle neutral borders.

Light:

rgba / equivalent based on Steel Mist

Dark:

low-contrast light border

Borders should define structure without making every element look boxed.

---

# 18. Shadows

Use shadows minimally.

Preferred:

- little or no shadow on normal content
- subtle elevation only where hierarchy requires it
- header or floating quick-action bar may use controlled shadow

Avoid:

- heavy SaaS-style card shadows
- glowing effects
- colored shadows

---

# 19. Buttons

## Primary CTA

EthioRail Green background

Rail Ink text

Medium/semibold weight

Rectangular shape with small radius

Comfortable horizontal padding

Minimum accessible touch target.

Example:

GET A QUOTE â†’

or

Get a Quote

Arrow usage should be consistent.

---

## Primary Hover

Brighter green.

Subtle directional motion may occur on arrow/icon.

Avoid scaling the entire button aggressively.

---

## Dark CTA

Rail Ink background

Cool Canvas text

Used primarily on light sections.

---

## Secondary Button

Transparent background

Visible border

Appropriate text color for background

---

## Text Link

Text + directional arrow

Example:

Explore Our Network â†’

The arrow may move subtly on hover.

---

# 20. CTA Hierarchy

There should generally be one visually dominant CTA per section.

Do not place:

Get Quote
Contact
Learn More
Explore
Download
Read
Register

all at equal visual weight.

Primary conversion remains:

Get a Quote

---

# 21. Navigation Design

## Desktop Header

Approximate height:

76â€“84px

At hero top:

transparent / visually integrated with hero

After scroll:

solid Rail Ink or appropriate high-contrast surface

Navigation typography:

14â€“16px
medium weight

Avoid oversized navigation.

---

## Logo

Use official logo when supplied.

Do not recreate or redraw the corporate logo without approval.

Temporary text treatment may be used only during development if necessary.

---

## Navigation Active State

Use:

- subtle underline
- small accent marker
- text color shift

Avoid large colored backgrounds behind every navigation item.

---

# 22. Dropdowns

Dropdowns should:

- have strong alignment
- use generous spacing
- remain easy to scan
- avoid unnecessary decoration

Services may become a larger menu.

Possible layout:

SERVICES

01 Multimodal Transportation
02 Ocean Freight & NVOCC
03 Land & Rail Transportation
04 Freight Forwarding
05 Customs Clearance
06 Warehousing
07 Inland Dry Port
08 Voyage Charter

Supporting text may appear selectively.

Do not turn the dropdown into a miniature homepage.

---

# 23. Mobile Navigation

Use a full-height or near-full-height mobile navigation experience.

Expected:

Menu button
â†’
navigation panel

Expandable groups:

Services
Network
About
Insights

Direct items:

Careers
Contact

Strong CTA:

Get a Quote

Language switcher included.

Do not use tiny nested desktop dropdowns on mobile.

---

# 24. Imagery

Primary image characteristics:

- large
- authentic
- industrial
- contextual
- minimally processed
- strong composition

Prioritize:

1. genuine Ethiopian logistics/railway photography
2. high-quality supporting stock logistics photography

Never misrepresent stock imagery as company-owned operations.

---

# 25. Image Treatment

Preferred:

- full bleed where appropriate
- strong rectangular crops
- minimal rounded corners
- controlled dark overlays when text overlaps
- natural color treatment

Avoid:

- excessive duotone effects
- artificial gradients over every image
- washed-out stock filters
- unnecessary blur
- floating photo collages

---

# 26. Video Treatment

Video should feel cinematic, not decorative.

Hero video:

full bleed

Overlay:

dark enough for WCAG-conscious text legibility

Do not:

- show controls for decorative background video
- autoplay meaningful audio
- use multiple simultaneous videos unnecessarily
- load all videos immediately

Exact performance behavior will be defined later.

---

# 27. Hero Overlay

Preferred treatment:

dark solid / subtle directional overlay.

Example conceptual intensity:

40â€“65% darkness depending on footage.

If directional gradient is required for text readability, keep it subtle and functional.

Do not use colorful marketing gradients over industrial video.

---

# 28. Service Presentation

Services should not use a standard equal-card grid.

Preferred desktop interaction:

LEFT:
numbered service navigation

RIGHT:
large media display

Example:

01  Multimodal Transportation
02  Ocean Freight & NVOCC
03  Land & Rail Transportation
04  Freight Forwarding
05  Customs Clearance
06  Warehousing
07  Inland Dry Port
08  Voyage Charter

Active item:

EthioRail Green detail or indicator.

Inactive:

neutral typography.

Media transition should be smooth and restrained.

---

# 29. Section Numbering

Large section numbers may be used selectively:

01
02
03
04

Possible contexts:

services
network
company differentiators

Numbering should support the editorial/industrial style.

Do not number every homepage section.

---

# 30. Rail / Route Motif

A thin directional line may become a recurring visual element.

Potential uses:

- multimodal journey
- section separators
- network map
- service progression
- timeline

Visual characteristics:

1â€“2px line

neutral or accent

simple nodes

minimal animation

Avoid resembling a subway map unless contextually appropriate.

---

# 31. Multimodal Journey Visual System

Desktop:

horizontal journey.

Node style:

small circular or geometric marker.

Selected/current nodes:

EthioRail Bright Green

Default line:

Steel Mist or muted neutral

Active/progress line:

EthioRail Green

Labels:

clear and concise.

Possible stage numbers:

01â€“07.

Mobile:

vertical route.

Do not create a miniature horizontal desktop version.

---

# 32. Network Map

Preferred background:

Deep Slate / Rail Ink

Land:

subtle muted tone

Routes:

EthioRail Bright Green or high-contrast neutral

Nodes:

Rail Cyan

Labels:

clean white/off-white typography

Ocean:

very restrained blue/slate variation

Avoid:

- bright Google-Maps appearance
- excessive geographic labels
- glowing cyberpunk routes
- 3D globes

The map should feel like a premium logistics visualization.

---

# 33. Quick Actions

Do not use four generic floating cards.

Preferred:

single structured action rail / command strip.

Possible desktop pattern:

GET A QUOTE
|
EXPLORE SERVICES
|
SCHEDULES & ROUTES
|
CONTACT

Strong separators.

One item may receive accent emphasis.

---

# 34. Company Differentiators

Preferred:

large numbered editorial blocks.

Example structure:

01
INTEGRATED LOGISTICS

02
MULTIMODAL EXPERTISE

03
ETHIOPIAN MARKET KNOWLEDGE

04
GLOBAL CONNECTIONS

These words remain working copy until verified.

Avoid icon circles above identical paragraphs.

---

# 35. Metrics

If verified metrics become available:

Use large typography.

Example conceptual layout:

25+
YEARS

40
DESTINATIONS

Do NOT implement these example values.

Numbers should dominate visually.

Labels should remain concise.

No fake values.

---

# 36. News Cards

News cards may use:

- strong image
- date
- category
- headline
- arrow/link

Avoid excessive metadata.

Desktop:

maximum three visible on homepage.

Cards should use minimal borders/radius.

---

# 37. Forms

Forms must feel professional and operational.

Inputs:

large enough for comfortable entry

Labels:

always visible

Do not rely on placeholder text as the only label.

Focus:

clear EthioRail Green or accessible equivalent.

Error:

clear textual message + visual indicator.

Avoid:

- excessive rounded fields
- floating labels unless implementation is flawless
- tiny inputs
- massive dropdown libraries for simple fields

---

# 38. Quote Form Visual Direction

Quote workflow may eventually use progressive steps.

Example:

01 Shipment
02 Route
03 Cargo
04 Contact
05 Review

Step indicator may reuse the route-line visual language.

This creates continuity between brand visuals and application behavior.

Do not implement yet.

---

# 39. Icons

Icon style:

simple
monoline
technical
consistent stroke

Avoid:

- multicolor cartoon icons
- random icon packs mixed together
- unnecessary icons beside every heading

Use icons only where they improve comprehension.

The final icon library will be determined later in architecture/implementation.

---

# 40. Motion

Motion levels:

## Level 1 â€” Micro Interaction

Duration:

approximately 150â€“220ms

Examples:

- button hover
- link arrow
- nav indicator
- form focus

## Level 2 â€” UI Transition

Duration:

approximately 250â€“400ms

Examples:

- dropdown
- service-media transition
- mobile menu
- image reveal

## Level 3 â€” Story Motion

Duration:

approximately 500â€“900ms

Examples:

- route progression
- map path
- major editorial reveal

Do not make the entire interface slow merely to feel premium.

---

# 41. Motion Easing

Use smooth natural easing.

Avoid:

- springy/bouncy motion for corporate logistics
- overshoot
- playful elastic transitions

The website should feel controlled and precise.

---

# 42. Scroll Animation

Elements may reveal with:

- slight vertical movement
- opacity
- clipping/masking
- line drawing

Distance should remain restrained.

Avoid:

elements flying in from different directions.

---

# 43. Reduced Motion

When the user prefers reduced motion:

- remove nonessential reveal animation
- stop route drawing animation
- avoid animated parallax
- provide static state
- preserve navigation functionality

Background video behavior should be reviewed during implementation.

---

# 44. Breakpoint Philosophy

Do not design only:

Desktop
Mobile

Consider:

Large Desktop
Desktop
Laptop
Tablet Landscape
Tablet Portrait
Mobile

The exact technical breakpoints will be decided during implementation.

---

# 45. Mobile Design Philosophy

Mobile should feel like the same premium brand.

Do NOT:

- hide important content merely because it is difficult to adapt
- keep hover interactions
- force giant maps into tiny horizontal viewports
- make every section 100vh
- load unnecessary media

Convert interactions appropriately.

Examples:

horizontal multimodal route
â†’
vertical timeline

interactive service list
â†’
stacked service panels

large map
â†’
simplified responsive map

---

# 46. Dark / Light Rhythm

Expected homepage rhythm:

HERO
Dark cinematic

QUICK ACTION
Light/elevated

INTRODUCTION
Cool Canvas

MULTIMODAL
Cool Canvas

SERVICES
Rail Ink

NETWORK
Deep Slate / Rail Ink

WHY ERL
Cool Canvas

METRICS
High contrast

DIGITAL
Rail Ink

INSIGHTS
Cool Canvas

FINAL CTA
Cinematic

FOOTER
Rail Ink

Do not alternate backgrounds mechanically if a better transition exists.

---

# 47. Accessibility Color Rules

All production color combinations must meet appropriate WCAG contrast requirements.

Particular attention:

- amber text on light backgrounds
- white text over video
- muted text on dark backgrounds
- disabled form controls
- map labels

If the provisional palette fails contrast in a particular context, accessibility takes priority.

---

# 48. Design Anti-Patterns

Do NOT introduce:

- glassmorphism
- neon gradients
- huge blur blobs
- random glowing lines
- excessive rounded cards
- floating dashboard widgets
- giant pill buttons
- excessive drop shadows
- animated cursor replacements
- scroll hijacking
- spinning globes
- generic AI circuit imagery
- stock 3D logistics icons
- unverified partner logos
- unverified statistics

---

# 49. Desired Emotional Tone

The user should feel:

CONFIDENCE

SCALE

MOVEMENT

CONTROL

CONNECTION

TRUST

The experience should not feel:

playful
cute
experimental
gamified
overly futuristic

---

# 50. Implementation Flexibility

This document defines design direction, not final CSS.

During implementation, minor adjustments may be made for:

- accessibility
- responsive behavior
- performance
- content constraints
- actual logo dimensions
- actual Amharic typography
- actual media composition

Major visual deviations should be reviewed before implementation.

---

# 51. Current Design Direction Summary

Working identity:

Rail Ink
+
Cool Canvas
+
EthioRail Green
+
restrained Rail Cyan
+
industrial photography
+
large typography
+
precise route graphics
+
minimal radius
+
controlled motion

English:

Manrope

Amharic:

Noto Sans Ethiopic

Primary CTA:

EthioRail Green #009507

Hover / active:

EthioRail Bright Green #00B30B

Visual signature:

rail / logistics route line with green active paths and restrained cyan nodes/details.

Design status:

PROVISIONAL APPROVED DIRECTION

Official corporate identity can override provisional brand tokens when supplied.

---

# 52. Current Project Status

PROJECT_SPEC.md â€” defined
SITEMAP.md â€” defined
HOMEPAGE_SPEC.md â€” defined
DESIGN_SYSTEM.md â€” defined by this document

Next:

PORTAL_FUTURE.md

Then:

ARCHITECTURE.md
ROADMAP.md

No application implementation has started.

Status:

Planning