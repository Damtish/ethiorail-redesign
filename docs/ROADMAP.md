# EthioRail Website Redesign — Project Roadmap

## 1. Purpose

This document defines the implementation sequence for the Ethio Rail Logistics website redesign.

The purpose of the roadmap is to:

- prevent uncontrolled scope expansion
- avoid building too many pages before the visual direction is validated
- create clear review gates
- keep Codex tasks small and reviewable
- ensure responsive, accessibility and performance quality throughout development
- separate the Version 1 public website from the future customer portal

This roadmap does not define calendar dates.

Development should move through approval gates rather than arbitrary deadlines.

---

# 2. Delivery Principle

The project should follow:

PLAN
→
BUILD SMALL
→
REVIEW
→
ADJUST
→
EXPAND
→
TEST
→
LAUNCH

Do not:

BUILD EVERYTHING
→
REVIEW AT THE END

The homepage acts as the primary visual and technical proving ground.

---

# 3. Current Project Status

Completed:

## Discovery / Planning

- existing website review
- logistics competitor research
- initial visual direction
- media collection
- media classification
- media manifest
- project specification
- sitemap
- homepage specification
- design system
- future portal planning
- technical architecture

Planning documents:

- PROJECT_SPEC.md
- SITEMAP.md
- HOMEPAGE_SPEC.md
- DESIGN_SYSTEM.md
- PORTAL_FUTURE.md
- ARCHITECTURE.md
- ROADMAP.md

Current stage:

PLANNING COMPLETE AFTER THIS DOCUMENT

Next:

APPLICATION FOUNDATION

---

# 4. Phase 0 — Repository & Application Foundation

Goal:

Create the technical foundation without building the full website.

Tasks may include:

- initialize Git if not already initialized
- initialize current stable Next.js application
- TypeScript
- App Router
- src directory
- ESLint
- Tailwind CSS
- npm
- import alias
- basic project configuration
- install next-intl
- install Zod
- preserve existing docs/
- preserve existing public/media/
- establish base folder structure
- verify build
- verify lint
- create initial README if appropriate

Do not build homepage sections during the initialization task.

Do not add:

- database
- Prisma
- authentication
- CMS
- animation library
- analytics
- backend server
- portal

## Gate 0

Before continuing:

- application installs successfully
- application builds
- lint passes
- existing media remains intact
- docs remain intact
- folder architecture matches ARCHITECTURE.md
- no unnecessary dependencies are present

---

# 5. Phase 1 — Design Foundation

Goal:

Translate DESIGN_SYSTEM.md into reusable implementation foundations.

Implement:

- color tokens
- typography
- fonts
- spacing foundations
- containers
- global styles
- focus behavior
- basic accessibility defaults
- button styles
- basic links
- section heading patterns
- media treatment primitives where justified

Do not create a giant design-system library.

Only create components that are genuinely useful.

Potential primitives:

Button
Container
SectionHeading
Eyebrow
LinkArrow

## Gate 1

Review:

- colors
- typography
- desktop spacing
- mobile spacing
- button appearance
- focus states
- English font rendering
- Amharic font rendering

The visual foundation should be approved before building the homepage.

---

# 6. Phase 2 — Localization Foundation

Goal:

Establish English/Amharic routing before large amounts of content are built.

Implement:

- next-intl
- `en`
- `am`
- locale-prefixed routes
- language switching
- base translation files
- localized root layout
- localized metadata foundation

Expected route behavior:

/en/...
/am/...

Root `/` should resolve according to the approved routing implementation.

Do not translate large amounts of unapproved corporate content yet.

Use approved working copy where necessary.

## Gate 2

Verify:

- `/en` works
- `/am` works
- language switching works
- locale persists logically during navigation
- unsupported locale behavior is safe
- build passes
- no duplicate applications were created

---

# 7. Phase 3 — Global Layout

Goal:

Build the reusable public-site shell.

Implement:

- Header
- desktop navigation
- mobile navigation
- language switcher
- Get a Quote CTA
- dropdown structures
- Footer
- global page container behavior

Navigation must use the approved sitemap.

Do not activate Customer Portal.

Do not create fake portal links.

## Gate 3

Review:

Desktop:
- header
- navigation
- dropdowns
- sticky behavior

Mobile:
- navigation
- expandable groups
- touch targets
- quote CTA
- language switcher

Footer:
- structure
- responsive behavior

---

# 8. Phase 4 — Homepage Hero

Goal:

Build and perfect the first screen before developing the rest of the homepage.

Implement:

- cinematic hero
- approved primary video
- overlay
- responsive typography
- working headline
- working supporting copy
- Get a Quote CTA
- Explore Our Network CTA
- video accessibility considerations
- responsive media behavior

Primary source asset:

freight-train-dry-landscape-01.mp4

Exact location must be resolved through the existing media inventory.

Do not claim the stock train is Ethiopian or EthioRail-owned.

Do not optimize/delete the original source file.

Production media optimization may occur in a later performance task.

## Gate 4 — HERO REVIEW

This is a major design review gate.

Review:

- does it look premium?
- does it look like an international logistics company?
- does text remain readable?
- does video composition work?
- does the header integrate properly?
- does mobile work?
- is the CTA obvious?
- does it feel custom rather than templated?

Do not proceed into the full homepage if the hero direction is not approved.

---

# 9. Phase 5 — Homepage Core Story

After hero approval, build:

1. Quick Actions
2. Company / Value Introduction
3. Multimodal Journey
4. Services

These sections establish the core visual language.

## Quick Actions

Implement the structured action rail.

Do not create generic floating cards.

## Company Introduction

Use large editorial composition.

## Multimodal Journey

Desktop:
horizontal route

Mobile:
vertical route

Do not compress desktop interaction into mobile.

## Services

Implement approved editorial service presentation.

Avoid generic 8-card grid.

Initial service interaction may use:

- active service
- large media
- description
- navigation list

Hover must not be required for mobile usability.

## Gate 5

Review the homepage from Hero through Services as one continuous experience.

Check:

- visual rhythm
- typography hierarchy
- media quality
- transitions
- responsiveness
- performance
- storytelling

---

# 10. Phase 6 — Homepage Network & Credibility

Build:

5. Ethiopia–Djibouti / Network
6. Why Ethio Rail Logistics
7. Verified Metrics if available

## Network

Create custom web-native route visualization.

Prefer:

SVG / responsive vector implementation.

Use the existing railway map only as reference.

Do not embed the reference map as the final primary network experience.

Do not invent operational locations.

## Why EthioRail

Use approximately 3–4 strong differentiators.

Only verified claims should become production content.

## Metrics

Implement only if verified metrics have been supplied.

If not:

omit the entire metrics section.

Do not display fake placeholder statistics in production.

## Gate 6

Review factual accuracy and network presentation.

---

# 11. Phase 7 — Homepage Completion

Build:

8. Digital Logistics Future
9. Insights / News
10. Final Conversion CTA

## Digital Logistics Future

Present future direction carefully.

Do not imply:

- customer login exists
- shipment tracking exists
- booking exists

unless those systems are actually available.

## Insights

Use real approved content only.

If none exists, the homepage should support the section being hidden.

## Final CTA

Use strong approved media.

Possible source:

port-rail-terminal-aerial-01.mp4

or another approved media asset.

Keep the section simple.

## Gate 7 — FULL HOMEPAGE REVIEW

This is the largest visual approval before secondary pages.

Review the homepage at:

- large desktop
- laptop
- tablet
- mobile

Review:

- design
- visual rhythm
- responsiveness
- accessibility
- performance
- navigation
- motion
- media
- copy
- factual accuracy

Do not proceed to building all public pages until homepage design is approved.

---

# 12. Phase 8 — Shared Interior Page System

Goal:

Define patterns needed by secondary pages before generating every route.

Build representative templates/patterns for:

- page hero
- breadcrumbs if used
- editorial content
- service detail
- related services
- CTA
- network content
- article layouts
- resource lists

Avoid creating a separate design from scratch for each page.

The public site should feel cohesive.

## Gate 8

Approve:

- service-page template
- standard content-page template
- article/content patterns

before scaling.

---

# 13. Phase 9 — Services

Implement:

- Services Overview
- Multimodal Transportation
- Ocean Freight & NVOCC
- Land & Rail Transportation
- Freight Forwarding
- Customs Clearance
- Warehousing
- Inland Dry Port
- Voyage Charter

Content must come from:

- approved company information
- approved working copy clearly isolated for replacement

Do not fabricate operational facts.

Each service page should explain:

- what the service is
- customer value
- relevant capabilities
- process where useful
- related services
- Get a Quote CTA

## Gate 9

Review all services for:

- factual consistency
- duplicate content
- clear differentiation
- responsive layouts
- quote conversion

---

# 14. Phase 10 — Network

Implement:

- Network Overview
- Ethiopia–Djibouti Corridor
- Locations
- Schedules & Routes

Only verified location/schedule data should be published.

If schedules are unavailable:

provide a useful alternative such as contacting the company for current routing information.

Do not fabricate timetable data.

---

# 15. Phase 11 — Corporate Pages

Implement:

- About
- Leadership
- Vision & Mission
- Careers

Only verified:

- leadership names
- titles
- photographs
- corporate history
- vision/mission
- values

should be presented as official information.

Careers must not contain fake vacancies.

---

# 16. Phase 12 — Insights & Resources

Implement:

- Insights Overview
- News & Updates
- individual article route
- Resources

Use structured repository content initially.

Do not create fake production news or documents.

If there is insufficient content at launch, sections can remain intentionally limited.

---

# 17. Phase 13 — Contact

Implement:

- verified contact information
- inquiry form
- location presentation
- office information if supplied

Form must include:

- accessible labels
- validation
- error states
- real delivery behavior before launch

Do not display success if submission failed.

---

# 18. Phase 14 — Quote Workflow

Build `/quote` as a serious customer conversion flow.

Possible stages:

1. Transport
2. Route
3. Cargo
4. Contact
5. Review
6. Submit

Final fields depend on approved requirements.

Use:

- Zod validation
- server-side validation
- accessible inputs
- clear errors

Version 1:

NO automatic pricing.

NO customer account required.

NO booking engine.

Submission must have a real destination before production launch.

## Gate 14

Test full quote workflow thoroughly.

---

# 19. Phase 15 — Localization Content

Once English content is stable:

integrate approved Amharic content.

Review:

- text expansion
- line wrapping
- navigation
- buttons
- forms
- headings
- route visualization labels
- mobile layout
- typography

Do not blindly machine-translate specialized logistics terminology.

---

# 20. Phase 16 — SEO Foundation

Implement/review:

- page titles
- descriptions
- canonical URLs
- localized metadata
- Open Graph
- robots
- sitemap
- heading hierarchy
- internal links
- image alt text
- structured data where appropriate

Structured data must contain verified corporate information.

---

# 21. Phase 17 — Accessibility Review

Review the full website for:

- keyboard navigation
- focus order
- focus visibility
- semantic landmarks
- heading hierarchy
- forms
- error messaging
- mobile menu
- dropdowns
- links
- contrast
- reduced motion
- image alt text
- interactive map accessibility

Fix accessibility issues before production.

---

# 22. Phase 18 — Media Optimization

Only after actual media usage is known:

create optimized production derivatives.

Potential work:

- image resizing
- WebP/AVIF
- poster frames
- video compression
- lower-resolution video versions
- mobile video strategy
- lazy loading
- media preloading strategy

Preserve original source media.

Do not destructively overwrite original assets.

Update media documentation if derivatives are introduced.

---

# 23. Phase 19 — Performance Review

Measure actual performance.

Review:

- Core Web Vitals
- bundle size
- client JavaScript
- font loading
- media
- homepage video
- image sizes
- third-party scripts
- route performance

Fix measured bottlenecks.

Do not optimize randomly without measurement.

---

# 24. Phase 20 — Browser / Device QA

Test:

Desktop:
- Chrome
- Edge
- Firefox
- Safari where available

Mobile:
- iOS Safari
- Android Chromium

Viewport categories:

- large desktop
- laptop
- tablet landscape
- tablet portrait
- modern phone
- smaller phone

Review:

- navigation
- layout
- video
- forms
- map
- typography
- language switching

---

# 25. Phase 21 — Content QA

Before production:

verify:

- company name
- service names
- contact details
- leadership
- spelling
- phone/email
- routes
- locations
- schedules
- statistics
- legal content
- links
- Amharic copy
- resource files
- media attribution where required

No placeholder or invented data should remain unnoticed.

---

# 26. Phase 22 — Legacy URL Migration

Inventory existing production URLs.

Create redirect mapping from relevant old pages to new destinations.

Examples may include:

- old service pages
- About pages
- news
- downloads
- schedules
- contact
- quote
- careers

Implement permanent redirects where appropriate.

Do not blindly redirect every removed page to Home.

Choose the closest relevant destination.

---

# 27. Phase 23 — Production Readiness

Before launch confirm:

- production hosting approved
- domain/DNS plan
- HTTPS
- forms deliver correctly
- environment variables configured
- no secrets committed
- analytics decision
- backups where relevant
- error monitoring decision
- legal pages approved
- redirects ready
- SEO metadata ready
- robots configuration correct
- sitemap correct

---

# 28. Phase 24 — Launch

Launch sequence should include:

1. final production build
2. final smoke test
3. DNS/deployment
4. HTTPS verification
5. route verification
6. forms test
7. language switching test
8. mobile test
9. redirect test
10. analytics/monitoring check if enabled

Do not treat successful deployment alone as successful launch.

---

# 29. Phase 25 — Post-Launch Review

After launch monitor:

- form submissions
- broken links
- 404s
- performance
- errors
- user feedback
- search indexing
- analytics if enabled
- content issues

Fix launch defects before adding major new features.

---

# 30. Future Phase — Customer Portal

The customer portal is a separate future project.

Before implementation:

complete portal discovery.

Required business questions are documented in:

PORTAL_FUTURE.md

Potential MVP:

- Secure Login
- Dashboard
- My Shipments
- Shipment Status
- Documents
- Notifications

Do not begin portal development merely because the public website launches.

Operational requirements must be validated first.

---

# 31. Task Size Rule for Codex

Development should be performed in scoped tasks.

A typical task should:

- have one clear objective
- name allowed files/directories
- name prohibited scope
- include validation commands
- require a completion report

Avoid prompts such as:

"Build the entire website."

Prefer:

"Implement homepage hero according to HOMEPAGE_SPEC.md and DESIGN_SYSTEM.md."

This makes changes reviewable.

---

# 32. Codex Completion Report

Every development task should report:

1. Files created
2. Files modified
3. Packages installed/removed
4. Main implementation decisions
5. Tests/checks run
6. Build result
7. Lint result
8. Known limitations
9. Any assumptions
10. Any deviation from planning documents

Codex should not hide failed checks.

---

# 33. Change Control

If implementation reveals that an approved plan is impractical:

Codex should report the issue.

It should not silently rewrite:

- architecture
- product scope
- sitemap
- portal strategy

Major changes require review.

---

# 34. Quality Philosophy

The target is not:

maximum page count

or:

maximum animation.

The target is:

a small number of exceptionally polished experiences that scale consistently across the site.

Homepage quality is especially important.

The website should impress through:

- composition
- clarity
- typography
- real logistics imagery
- movement
- network storytelling
- performance
- attention to detail

rather than gimmicks.

---

# 35. Launch Scope Boundary

Version 1 launch remains:

PUBLIC CORPORATE WEBSITE

It does not include:

- customer authentication
- employee authentication
- customer dashboard
- tracking engine
- booking engine
- payments
- internal ERP
- internal CRM
- shipment database

unless formally added to scope later.

---

# 36. Immediate Next Step

After this ROADMAP.md is approved:

TASK 010 should begin application foundation setup.

TASK 010 should NOT build the homepage yet.

It should only:

- initialize Git if needed
- initialize Next.js
- install approved foundational dependencies
- preserve docs and media
- establish architecture
- validate build/lint

Homepage implementation starts in later tasks after the foundation is reviewed.

---

# 37. Current Status

Planning:

COMPLETE

Media:

INITIAL LIBRARY COMPLETE

Application:

NOT INITIALIZED

Next:

APPLICATION FOUNDATION

Future Customer Portal:

PLANNED
NOT IN VERSION 1

Status:

Ready for Development Foundation
