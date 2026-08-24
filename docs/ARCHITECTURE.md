# EthioRail Website Redesign — Technical Architecture

## 1. Purpose

This document defines the technical architecture for Version 1 of the Ethio Rail Logistics public website.

The architecture should:

- support the approved public website
- provide excellent performance
- support English and Amharic
- support SEO
- support accessible responsive experiences
- support cinematic media without excessive client-side overhead
- remain maintainable
- preserve a clean path toward future customer portal development
- avoid unnecessary enterprise complexity during Version 1

The guiding principle is:

BUILD VERSION 1 CLEANLY.
PREPARE FOR THE FUTURE.
DO NOT BUILD THE FUTURE PREMATURELY.

---

# 2. Version 1 Architecture Decision

Version 1 will use a single Next.js application.

Do NOT begin with a monorepo.

Do NOT create separate website and portal applications today.

The future portal may eventually justify:

- a second application
- a monorepo
- a subdomain
- shared UI packages
- dedicated APIs

That restructuring should occur only when portal requirements are known.

For the current public website, a single application is simpler and more maintainable.

---

# 3. Core Technology Direction

Use:

- Next.js
- App Router
- React
- TypeScript
- Tailwind CSS
- next-intl
- Zod

Use the current stable mutually compatible releases available at application initialization time.

Do not hard-code outdated package versions into this planning document.

The installed package versions must later be committed through the package lockfile.

---

# 4. Package Manager

Use:

npm

Reason:

- standard Node.js tooling
- straightforward Windows development
- sufficient for the current single-application repository
- avoids introducing workspace/package-manager complexity before it is needed

A different package manager should not be introduced without a clear reason.

---

# 5. Application Router

Use the Next.js App Router.

Expected application structure will be based under:

src/app/

Use Server Components by default.

Use Client Components only where browser interactivity is required.

Examples that may require Client Components:

- mobile navigation
- interactive service selector
- animated multimodal journey
- interactive network visualization
- quote-form interactions
- selected motion behavior

Do not mark large page trees with "use client" unnecessarily.

---

# 6. Rendering Strategy

The majority of the public corporate website should be server-rendered and/or statically generated where appropriate.

Examples:

- homepage
- services
- about
- network informational pages
- careers landing page
- contact content

Dynamic behavior should be introduced only when required.

Avoid turning the entire website into a client-rendered SPA.

---

# 7. Localization Architecture

Supported locales:

en
am

Default locale:

en

Preferred URL strategy:

/en/...
/am/...

Use locale-prefixed URLs consistently.

Examples:

/en/services/freight-forwarding
/am/services/freight-forwarding

Root:

/

should resolve visitors into an appropriate locale experience according to the final next-intl routing implementation.

Do not create two separate applications.

---

# 8. Internationalization Library

Use:

next-intl

Responsibilities:

- locale routing
- UI translations
- localized formatting
- translation messages
- language switching

The final implementation must follow the recommended integration for the installed Next.js and next-intl versions.

Do not copy an old middleware/proxy implementation from outdated tutorials.

---

# 9. Translation Files

Expected translation structure:

messages/
├── en.json
└── am.json

Use these primarily for:

- navigation
- buttons
- form labels
- UI messages
- reusable interface text

Large editorial/corporate content may use structured localized content rather than forcing all content into a single enormous translation JSON file.

---

# 10. Localized Content

Recommended content approach for Version 1:

src/content/

Potential structure:

src/content/
├── services/
├── company/
├── network/
├── news/
└── careers/

Structured content should clearly separate:

- English
- Amharic

The exact implementation can use typed TypeScript content or another simple structured format.

Do not introduce a CMS during initial application setup.

---

# 11. Content Management Strategy

Version 1 begins with repository-managed content.

Reason:

The final CMS requirements are not yet known.

Content architecture should make future migration possible for frequently updated content such as:

- news
- careers
- leadership
- resources
- schedules
- selected page content

Do not tightly couple page components to raw hard-coded copy.

Prefer structured content objects/data.

A CMS can be introduced later behind a content-access layer.

---

# 12. Proposed Source Structure

Expected structure:

src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── services/
│   │   ├── network/
│   │   ├── about/
│   │   ├── insights/
│   │   ├── careers/
│   │   ├── contact/
│   │   └── quote/
│   │
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── home/
│   ├── ui/
│   ├── forms/
│   ├── media/
│   └── shared/
│
├── content/
│   ├── services/
│   ├── network/
│   ├── company/
│   ├── news/
│   └── careers/
│
├── i18n/
│
├── lib/
│
├── types/
│
└── validation/

messages/
├── en.json
└── am.json

public/
└── media/

docs/

This is the preferred conceptual structure.

Minor implementation adjustments are allowed if required by the current framework conventions.

---

# 13. Component Architecture

Components should be grouped by responsibility.

## Layout

Examples:

Header
DesktopNavigation
MobileNavigation
Footer
LanguageSwitcher

## Homepage

Examples:

Hero
QuickActions
CompanyIntro
MultimodalJourney
ServicesShowcase
NetworkSection
WhyEthioRail
MetricsSection
DigitalFuture
NewsPreview
FinalCTA

## Shared UI

Examples:

Button
Container
SectionHeading
Eyebrow
MediaFrame
LinkArrow

Do not create a design-system component for every single HTML element.

Prefer useful reusable abstractions.

---

# 14. Component Rule

Avoid premature abstraction.

If a component is used only once and has no meaningful independent behavior, it may remain within its feature section.

Do not create dozens of one-line wrapper components simply to create a large component library.

---

# 15. Styling

Use:

Tailwind CSS

Use the approved visual direction from:

docs/DESIGN_SYSTEM.md

Translate provisional design tokens into implementation-level CSS variables/theme values.

Examples:

--color-rail-ink
--color-deep-slate
--color-warm-canvas
--color-steel-mist
--color-signal-amber

Do not scatter raw brand color values throughout hundreds of class declarations if reusable tokens can express them.

---

# 16. Global CSS

Keep global CSS focused on:

- design tokens
- typography defaults
- body
- accessibility defaults
- reusable low-level behavior
- reduced motion
- selection
- basic media behavior

Avoid placing entire page implementations into globals.css.

---

# 17. Fonts

English:

Manrope

Amharic:

Noto Sans Ethiopic

Prefer framework-supported font loading and optimization.

Avoid loading unnecessary font families and weights.

Required weights should approximately follow the design system:

400
500
600
700

Verify actual available font configuration during implementation.

---

# 18. Images

Use the framework's optimized image system for local website imagery where appropriate.

Original media remains under:

public/media/

Use:

public/media/media-manifest.json

as the project inventory/source reference.

Do not rename media during application setup.

Do not misrepresent generic stock media as Ethiopian or company-owned media.

---

# 19. Video

Decorative background videos should use native HTML video where appropriate.

Expected properties for decorative video:

autoplay
muted
loop
playsinline

No visible controls for cinematic background media.

Video should NOT automatically become a large client component simply because it is video.

Later optimization should create:

- production-compressed versions
- appropriate poster images
- potentially alternate mobile assets

Do not optimize original files during initialization.

---

# 20. Media Performance

Do not load every homepage video immediately.

Priority:

1. Hero media
2. visible critical imagery
3. below-the-fold assets later

Service videos and lower-page video should load only when reasonably needed.

Implementation may use:

- lazy media loading
- poster images
- Intersection Observer
- conditional video activation

Avoid simultaneously decoding multiple large 4K source videos.

The 4K originals are source assets, not necessarily final production delivery files.

---

# 21. Motion Architecture

Start with:

- CSS transitions
- CSS animation where appropriate
- browser APIs where simple

Do not install a large animation dependency merely because animation may exist.

If implementation later demonstrates that a dedicated motion library substantially simplifies:

- route drawing
- coordinated scroll reveals
- service transitions

then it may be introduced intentionally.

Do not install animation packages during initial application setup unless explicitly approved.

---

# 22. JavaScript Philosophy

Minimize client-side JavaScript.

Default:

Server Component

Add client-side JavaScript only for actual interaction.

The website should remain functional and understandable without excessive hydration.

---

# 23. Quote Form Architecture

Version 1 quote form is a real inquiry workflow, not an automatic price engine.

Validation:

Zod

Client interaction may use native React form patterns first.

A dedicated form library may be introduced only if the final multi-step quote workflow genuinely benefits from it.

Do not install React Hook Form automatically during initialization.

---

# 24. Server-Side Validation

All submitted form data must be validated server-side.

Client-side validation is useful for UX but must not be trusted as the security boundary.

Shared Zod schemas may be used where appropriate.

Potential directory:

src/validation/

---

# 25. Form Submission

Potential Version 1 submissions:

- Get a Quote
- Contact

Submission architecture should use server-side application functionality.

Potential implementation:

Client/Form
↓
Server Action or server endpoint
↓
Validation
↓
approved delivery/storage integration

Do not hard-code an email provider before the company's preferred infrastructure is known.

Do not show a production success state if the submission was not actually delivered.

---

# 26. Form Provider Abstraction

If external email or CRM integration is introduced later, isolate it.

Conceptually:

src/lib/
└── inquiries/
    ├── submit-contact.ts
    └── submit-quote.ts

Page components should not contain vendor-specific API logic.

This allows the company to change provider later.

---

# 27. Database

Version 1 does NOT require a database by default.

Do not install:

- PostgreSQL
- Prisma
- ORM
- database client

during initial website setup.

A database should be added only if a verified Version 1 feature requires durable application data.

Future portal development will almost certainly require persistent operational data, but that is a separate architecture phase.

---

# 28. Authentication

Version 1:

NO CUSTOMER AUTHENTICATION
NO EMPLOYEE AUTHENTICATION

Do not install authentication libraries during initial setup.

Future authentication decisions belong to the portal project.

---

# 29. Customer Portal Boundary

Do not create:

src/app/portal/

during the public website phase simply as a placeholder.

Do not create fake login screens.

The public application should remain clean.

Future portal architecture can later determine whether the portal becomes:

- a second app
- a subdomain
- a route group
- a separate repository

based on actual requirements.

---

# 30. Shared Future Design System

If a portal project begins later, design tokens and genuinely reusable UI primitives can be extracted into a shared package.

Do not create a packages/ monorepo today solely for this hypothetical future.

---

# 31. SEO Architecture

Use framework-supported metadata capabilities.

Pages should support:

- title
- description
- canonical URL
- Open Graph
- social metadata
- localized metadata

Application should provide:

sitemap
robots

Potential structured data may later include:

- Organization
- WebSite
- BreadcrumbList
- Article

Structured data must reflect verified information.

---

# 32. Route Metadata

Each major public page should define appropriate metadata.

Do not reuse one generic title and description across the entire site.

Localized pages require localized metadata.

---

# 33. News Architecture

Version 1 news can initially use structured local content.

Conceptual route:

/[locale]/insights/news
/[locale]/insights/news/[slug]

News model may include:

- slug
- locale
- title
- summary
- published date
- image
- content

Do not create fake production news.

The architecture should make future CMS migration possible.

---

# 34. Careers Architecture

Potential:

/[locale]/careers
/[locale]/careers/[slug]

Version 1 may use repository-managed vacancy data.

If no vacancies exist:

the careers page should still render a useful employer page.

Do not publish fake vacancies.

---

# 35. Resources

Resources may initially be structured local content pointing to approved downloadable files.

Potential model:

- title
- description
- category
- locale
- file URL
- file type

Do not publish unapproved documents.

---

# 36. Maps

Do not use Google Maps as the primary Ethiopia–Djibouti network storytelling experience.

Homepage/network corridor visualization should be custom.

Preferred future technique:

SVG-based responsive visualization.

Advantages:

- controllable design
- accessible labels
- responsive behavior
- route animation
- brand consistency
- limited client overhead

The existing railway map image is reference material.

---

# 37. Office Location Maps

Actual office/location pages may use an external map/embed later if useful.

That is separate from the custom logistics network visualization.

Only verified addresses should be mapped.

---

# 38. Accessibility Architecture

Build accessibility into components rather than fixing it after visual completion.

Requirements include:

- semantic landmarks
- heading hierarchy
- keyboard navigation
- focus visibility
- accessible mobile navigation
- form labels
- validation messages
- alt text
- reduced-motion handling
- contrast
- descriptive links

Interactive custom controls must preserve native accessibility behavior wherever possible.

---

# 39. Reduced Motion

Use:

prefers-reduced-motion

to disable or simplify nonessential motion.

Critical information must never depend exclusively on animation.

---

# 40. Performance Architecture

Core principles:

- Server Components by default
- minimal client components
- optimized images
- optimized production video
- controlled font loading
- lazy-load noncritical media
- limit third-party scripts
- avoid unnecessary libraries
- avoid loading unused page code
- measure rather than guess

Performance should be reviewed throughout implementation rather than only immediately before launch.

---

# 41. Third-Party Scripts

Do not add:

- analytics
- chat
- trackers
- marketing scripts
- social widgets

until approved.

Third-party scripts may materially affect performance and privacy.

---

# 42. Analytics

Analytics provider:

TBD

Potential future options may be evaluated based on:

- company requirements
- privacy
- reporting needs
- hosting

Do not install analytics during initial application initialization.

---

# 43. Error Handling

Application should eventually provide:

- useful 404
- route-level error boundaries where appropriate
- form submission errors
- graceful missing-content behavior

Do not expose stack traces or internal implementation details to production users.

---

# 44. Environment Variables

Use environment variables for:

- provider keys
- API credentials
- environment-specific URLs
- future integrations

Never commit secrets.

Create:

.env.example

later when environment variables actually exist.

Do not create fake variables just to populate the file.

---

# 45. Security Architecture

Version 1 public website security should include:

- dependency hygiene
- input validation
- output safety
- secure headers
- secrets outside repository
- safe form submission
- rate-limit/spam strategy before production
- no sensitive content in public directories

Future portal security requirements are defined separately in:

PORTAL_FUTURE.md

---

# 46. Public Directory Rule

public/

contains assets intentionally accessible to anyone on the internet.

Therefore:

Never store future:

- invoices
- customer documents
- private shipping documents
- authentication files
- sensitive uploads

inside public/.

Current public/media assets are public website media only.

---

# 47. TypeScript

Use strict TypeScript practices.

Avoid:

any

unless genuinely unavoidable and documented.

Prefer typed:

- content models
- component props
- form schemas
- navigation definitions
- media metadata

Do not create elaborate type systems without practical value.

---

# 48. Navigation Data

Primary navigation should be represented as structured data where appropriate rather than duplicated independently across desktop/mobile/footer implementations.

This helps ensure:

- consistency
- localization
- maintainability

Different UI presentations may consume the same logical navigation definitions.

---

# 49. Content Models

Create typed models for repeated structured content.

Examples:

Service
NavigationItem
NewsArticle
CareerOpening
Resource
Location

Do not build a generic universal content engine.

Keep models clear and purpose-specific.

---

# 50. Media Manifest

Existing:

public/media/media-manifest.json

Treat this as the media inventory.

During development:

- do not duplicate hard-coded unknown filenames everywhere
- preserve origin information
- preserve licensing/source metadata
- maintain distinction between genuine Ethiopian and generic stock media

A typed helper may later be introduced if useful.

Do not overengineer media retrieval.

---

# 51. Testing Strategy

Testing should be proportional to risk.

Recommended layers:

## Static quality

- TypeScript
- ESLint

## Component/unit tests

For logic that benefits from automated testing.

Potential candidates:

- validation
- content utilities
- localization helpers

## End-to-end

Important workflows eventually include:

- navigation
- language switching
- quote submission
- contact submission
- major responsive interactions

A browser end-to-end test framework can be introduced when those workflows exist.

Do not install every possible testing library during initial setup.

---

# 52. Development Quality Gates

Before a development task is considered complete:

- application builds
- TypeScript passes
- lint passes
- relevant tests pass
- no broken routes introduced
- responsive behavior reviewed
- accessibility considered

Codex should report failures instead of hiding them.

---

# 53. Browser Support

Target current modern browsers used by customers and businesses.

Include current:

- Chrome
- Edge
- Firefox
- Safari

Mobile:

- iOS Safari
- Android Chromium-based browsers

Do not intentionally support obsolete browsers unless EthioRail provides a business requirement.

---

# 54. Deployment

Final hosting platform is NOT approved yet.

Architecture should remain deployable to normal supported Next.js production environments.

Potential deployment could include:

- managed Next.js hosting
- Node.js server
- containerized hosting

Do not tightly couple business logic to one hosting provider before infrastructure requirements are known.

---

# 55. Repository

The project should use Git before implementation work begins.

Recommended initial repository scope:

single Next.js application
+
docs
+
public media

Do not create a monorepo.

Future portal development can trigger repository restructuring if justified.

---

# 56. Git Rules

Do not commit:

- secrets
- .env files containing secrets
- generated build output
- dependency directories
- temporary optimization files

Normal .gitignore should cover framework artifacts.

Media currently approved for the website may remain versioned if repository/storage limits permit.

If video size becomes problematic, media-hosting strategy can be revisited before production.

---

# 57. Expected Root Structure After Initialization

Conceptually:

ethiorail-redesign/
├── docs/
├── messages/
├── public/
│   └── media/
├── src/
│   ├── app/
│   ├── components/
│   ├── content/
│   ├── i18n/
│   ├── lib/
│   ├── types/
│   └── validation/
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.*
├── postcss.config.*
└── framework/tooling configuration

Exact generated configuration filenames may differ according to the current stable framework/toolchain.

Do not force obsolete config-file patterns.

---

# 58. Initialization Principle

When application initialization begins later:

Use the official current Next.js project initialization workflow.

Configure:

- TypeScript
- ESLint
- App Router
- src directory
- Tailwind
- import alias

Do not manually assemble outdated framework boilerplate from memory.

---

# 59. Import Alias

Preferred:

@/*

mapping to:

src/*

Example:

@/components/layout/Header
@/lib/navigation

---

# 60. Page Development Sequence

Do NOT generate all 26 routes immediately.

Initial application work should be:

1. foundation
2. design tokens
3. typography
4. root/localized layout
5. header
6. homepage
7. homepage review

Only after homepage approval should broader route development begin.

This prevents large amounts of rework.

---

# 61. Homepage Implementation Philosophy

Build homepage sections as deliberate components.

Do not create all sections simultaneously in one giant page.tsx.

However, do not fragment each small element into unnecessary files.

Balance maintainability with clarity.

---

# 62. Content During Prototype

If verified corporate copy is unavailable:

Use clearly isolated working copy from the approved planning documents.

Do not invent:

- metrics
- locations
- customers
- partners
- certifications
- executives
- operational claims

Placeholder content should be obvious to the development team and easy to replace.

---

# 63. No Fake Features

Never create UI that appears functional when no backend exists.

Examples:

Do not create:

- fake shipment tracker
- fake customer login
- fake customer dashboard
- fake chat
- fake payment
- fake live schedules

A disabled or concept feature should only be shown if explicitly approved.

---

# 64. Future API Boundary

The V1 public website does not need a standalone API server.

Do not create:

- NestJS backend
- Express backend
- separate API repository

for the public corporate website.

Next.js server-side capabilities are sufficient for normal public-site functionality initially.

Future portal requirements may justify a separate backend/API layer.

That decision belongs to the portal project.

---

# 65. Future Database Boundary

Do not design the future portal database now.

PORTAL_FUTURE.md identifies conceptual entities but they are not an approved data model.

When portal discovery begins:

workflows first
data model second
implementation third

---

# 66. Architecture Anti-Patterns

Do not introduce during Version 1:

- microservices
- Kubernetes
- event buses
- GraphQL without need
- Redux without need
- global state management without need
- Prisma without database requirements
- authentication framework without authentication
- complex monorepo tooling
- design-system package extraction
- premature CMS integration
- client-side rendering everywhere

Complexity must earn its place.

---

# 67. Architecture Summary

Version 1:

Next.js
App Router
React
TypeScript
Tailwind CSS
next-intl
Zod

Architecture:

single application
server-first
minimal client JavaScript
repository-managed content initially
no database by default
no authentication
no portal
no CMS initially
no separate API backend

Localization:

English
Amharic
locale-prefixed routes

Media:

existing public/media library
optimized later for production

Future:

customer portal architecture remains separate until business requirements are known.

---

# 68. Current Project Status

Completed:

PROJECT_SPEC.md
SITEMAP.md
HOMEPAGE_SPEC.md
DESIGN_SYSTEM.md
PORTAL_FUTURE.md
ARCHITECTURE.md

Remaining planning document:

ROADMAP.md

After ROADMAP.md is approved:

application initialization may begin.

Status:

Architecture Defined
