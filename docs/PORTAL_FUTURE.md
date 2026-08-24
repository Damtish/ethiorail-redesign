# EthioRail Website Redesign — Future Customer Portal

## 1. Purpose

Ethio Rail Logistics may introduce customer login and internal employee/admin capabilities in a future phase.

The current public website project does NOT include the portal.

However, the public website and technical architecture should be designed so the future portal can be added without requiring a complete rebuild.

This document defines:

* likely customer use cases
* conceptual portal structure
* future employee/admin requirements
* account and organization concepts
* security principles
* integration considerations
* architectural boundaries

Nothing in this document should be treated as an instruction to implement portal functionality during Version 1.

---

# 2. Product Principle

The future portal should solve real logistics problems.

Customers should not be asked to create accounts merely so the company can say it has a customer portal.

Potential account functionality should exist because it gives customers useful capabilities such as:

* shipment visibility
* quotation management
* bookings
* logistics documents
* notifications
* support
* account management

Every future portal feature must eventually be validated against actual EthioRail operations and business processes.

---

# 3. Portal Status

Current status:

```text
FUTURE PHASE
NOT VERSION 1
NOT IMPLEMENTED
```

Version 1 of the website should NOT contain:

* fake login
* fake customer accounts
* fake dashboards
* fake shipment tracking
* fake booking records
* fake documents
* fake analytics
* fake invoices

The future portal entry point should remain dormant until the underlying system exists.

---

# 4. Potential Portal Entry

Potential future public entry:

```text
/portal
```

Potential login:

```text
/portal/login
```

These routes are conceptual.

The final route strategy will be decided during the portal implementation phase.

The portal may eventually live:

* inside the same web application
* as a separate application
* on a dedicated subdomain

Example:

```text
portal.ethiorail.com
```

No decision is approved yet.

---

# 5. Customer Portal Goals

A future authenticated customer should potentially be able to:

1. See current logistics activity.
2. Track shipments.
3. Review quotation requests.
4. Accept or respond to quotations.
5. Create booking requests.
6. Review booking status.
7. Access relevant logistics documents.
8. Receive operational notifications.
9. Communicate with EthioRail support/operations.
10. Manage company account information.
11. Manage authorized users from their organization.
12. Review historical shipments and transactions.

The exact functionality must be validated with management and operations before implementation.

---

# 6. Conceptual Customer Navigation

Potential future portal structure:

```text
Dashboard

Shipments
├── Active
├── Delivered
└── Exceptions

Tracking

Quotes
├── Request Quote
├── Open Quotes
└── Quote History

Bookings
├── New Booking
├── Active Bookings
└── Booking History

Documents

Notifications

Support

Company Account

User Profile
```

This is conceptual information architecture only.

---

# 7. Customer Dashboard

Potential dashboard purpose:

Provide a concise overview of the customer's logistics activity.

Possible information:

* active shipments
* shipments requiring attention
* latest shipment updates
* open quotation requests
* open bookings
* recent documents
* notifications
* support messages

Do not create dashboard widgets merely to fill space.

Every dashboard element should support a real customer action or decision.

---

# 8. Shipments

Potential future shipment information may include:

* shipment reference
* customer reference
* origin
* destination
* transport mode
* cargo description
* booking reference
* container reference
* current status
* estimated departure
* estimated arrival
* actual departure
* actual arrival
* shipment milestones
* documents
* notes or exceptions

The final data model will depend on EthioRail's actual operational systems.

Do not define fields as authoritative until business requirements are gathered.

---

# 9. Shipment Status Model

A future shipment may move through statuses such as:

```text
Requested
Confirmed
Booked
Cargo Received
In Transit
At Terminal
Customs Processing
Departed
Arrived
Out for Delivery
Delivered
Exception
Cancelled
```

These are EXAMPLES ONLY.

Do not adopt these as official operational statuses without approval from EthioRail operations.

The actual status model must map to existing company workflows.

---

# 10. Tracking

Future shipment tracking may allow customers to search using information such as:

* shipment reference
* booking reference
* bill of lading
* container number
* customer reference

The available identifiers depend on actual operational integrations.

Tracking should never expose another customer's data.

Public tracking and authenticated tracking may eventually have different capabilities.

---

# 11. Quote Requests

A future authenticated customer may be able to:

* create a quote request
* save company/contact information
* reuse common origins/destinations
* provide cargo information
* upload supporting documents
* review submitted requests
* receive quotation responses
* accept/reject/respond to quotations

The public Version 1 `/quote` workflow should be designed so it can later evolve into the authenticated quotation experience.

---

# 12. Bookings

Future booking capabilities may include:

* create booking from accepted quote
* new booking request
* route selection
* cargo information
* container information
* pickup information
* documentation requirements
* booking confirmation
* status updates
* amendment/cancellation requests

Do not implement online booking unless EthioRail's operational process supports it.

A customer-facing booking button must not imply instant confirmation if bookings require manual approval.

---

# 13. Documents

Potential document categories:

* quotation
* booking confirmation
* bill of lading
* invoice
* customs documentation
* packing documentation
* delivery documentation
* proof of delivery
* company correspondence

Document access must be authorization-controlled.

Customers must only access documents belonging to their organization/account and permitted shipments.

---

# 14. Notifications

Potential notification events:

* quotation received
* quotation updated
* booking confirmed
* shipment milestone
* shipment delayed
* documentation required
* document uploaded
* customs update
* shipment delivered
* support response

Potential delivery channels:

* in-portal
* email
* SMS
* other approved channels

Notification channels should not be implemented until business requirements and communication systems are confirmed.

---

# 15. Support / Messaging

Potential future functionality:

* open support request
* shipment-specific inquiry
* quote-specific inquiry
* attach documents
* respond to EthioRail staff
* support history

This should not become an unrestricted real-time chat unless the organization is staffed and prepared to support it.

A structured case/message system may be more appropriate.

---

# 16. Customer Organization Model

Customers are likely to be businesses rather than only individuals.

The portal should therefore anticipate:

```text
Customer Organization
    ↓
Customer Users
```

One customer organization may have multiple users.

Example conceptual roles:

```text
Customer Admin
Customer Member
Customer Viewer
```

Potential permissions:

### Customer Admin

* manage organization users
* submit quotes
* create bookings
* access shipments
* access documents
* manage account details

### Customer Member

* submit quotes/bookings
* access permitted shipments/documents

### Customer Viewer

* read-only access

Final customer roles must be approved later.

---

# 17. Customer Data Isolation

This is a critical future security requirement.

Customer A must never be able to access:

* Customer B shipments
* Customer B quotations
* Customer B bookings
* Customer B documents
* Customer B account data

Authorization must be enforced server-side.

Hiding UI controls is NOT sufficient authorization.

---

# 18. Future Employee / Admin Application

EthioRail employees may require separate operational capabilities.

Potential future employee roles:

```text
SUPER_ADMIN
ADMIN
OPERATIONS
SALES
CUSTOMER_SERVICE
FINANCE
CONTENT_EDITOR
```

These roles are conceptual.

Do not implement them during the public website phase.

---

# 19. Potential Employee Capabilities

## Sales

Potential:

* customer inquiries
* quote requests
* quotations
* prospects/customers

## Operations

Potential:

* bookings
* shipments
* milestones
* shipment status
* operational documents
* exceptions

## Customer Service

Potential:

* customer inquiries
* support cases
* shipment questions
* notifications

## Finance

Potential:

* invoices
* payment status
* financial documents

This does NOT mean the website project should become an ERP.

Existing internal systems should be integrated where appropriate instead of automatically replacing them.

---

# 20. Content Administration

Public website content administration may eventually include:

* news
* announcements
* careers
* leadership
* downloadable resources
* locations
* routes
* schedules
* selected page content

Content-management permissions should be separate from sensitive logistics/operational permissions where possible.

A content editor should not automatically gain access to customer shipments.

---

# 21. Authentication

Authentication technology is NOT chosen in this document.

Future authentication should support:

* secure login
* secure password handling if passwords are used
* password reset / recovery
* session expiration
* logout
* account lockout/rate limiting
* audit capability
* optional MFA
* organization membership
* role-based authorization

Enterprise identity integration may be considered for employees.

The final authentication strategy will be decided later.

---

# 22. Authentication Separation

Customer accounts and employee accounts should be conceptually distinct.

Example:

```text
CUSTOMER USER
→ belongs to customer organization

EMPLOYEE USER
→ belongs to EthioRail
```

Even if both eventually share authentication infrastructure, permissions and data access must remain clearly separated.

---

# 23. Authorization

Authorization should be based on:

```text
Identity
+
Role
+
Organization
+
Resource ownership
+
Permission
```

Examples:

A customer may view:

```text
shipment.organizationId === user.organizationId
```

An operations employee may have broader shipment permissions depending on role.

Authorization must always be performed server-side.

---

# 24. Audit Logging

Sensitive future actions may require audit records.

Examples:

* login events
* role changes
* customer-user invitations
* shipment status changes
* document uploads/deletions
* quotation changes
* booking changes
* invoice changes
* administrative actions

Audit requirements should be validated before implementation.

---

# 25. File Security

Future uploaded logistics documents may contain sensitive information.

Requirements may include:

* private storage
* authorization before download
* secure signed access
* file-type validation
* malware scanning
* file-size limits
* audit logging
* retention policies

Do not place sensitive customer documents into a public `/public` directory.

---

# 26. Potential Integrations

The future portal may need to integrate with:

* EthioRail operational systems
* shipment-management systems
* railway/terminal systems
* ERP
* accounting
* CRM
* customs-related systems
* shipping partners
* email
* SMS
* payment systems
* document storage
* analytics

No integration should be assumed to exist until confirmed.

Before the portal is built, management must identify which systems are currently used internally.

---

# 27. API Readiness

The public website architecture should not tightly couple public pages to future portal business logic.

Future APIs may support:

```text
/auth
/customers
/organizations
/users
/quotes
/bookings
/shipments
/tracking
/documents
/notifications
/support
```

These routes are conceptual.

Do not create them during Version 1.

---

# 28. Portal and Website Relationship

The future portal should visually feel related to the public website.

They may share:

* brand tokens
* typography
* buttons
* form patterns
* icons
* spacing
* logo usage
* navigation principles

However:

The public website is editorial/marketing-oriented.

The portal is task-oriented.

Do not force cinematic public-site layouts into operational screens.

---

# 29. Shared Design System

Future architecture should make it possible for the public website and portal to share reusable design primitives.

Potential examples:

* Button
* Input
* Select
* Textarea
* Modal
* Alert
* Tabs
* Typography
* Logo
* Navigation tokens
* colors
* spacing

Complex portal components should remain portal-specific.

---

# 30. Public Quote → Future Portal

Version 1 public flow:

```text
Visitor
↓
Get a Quote
↓
Submit request
↓
EthioRail handles request
```

Potential future authenticated flow:

```text
Customer
↓
Login
↓
Request Quote
↓
Track Quote Status
↓
Accept Quote
↓
Create Booking
↓
Track Shipment
↓
Access Documents
```

The public quote form should not require an account in Version 1.

---

# 31. Public Tracking → Future Portal

Do NOT create public tracking during Version 1 unless a real data source becomes available.

Potential future model:

```text
Public tracking:
limited status information

Authenticated tracking:
full customer shipment details
documents
history
notifications
```

Final privacy rules must be determined later.

---

# 32. Payments

Online payment is NOT part of Version 1.

Potential future payment functionality may include:

* invoices
* outstanding balance
* online payment
* receipts
* payment history

Do not select a payment provider without:

* business requirements
* banking requirements
* Ethiopian payment/regulatory review
* finance-team approval
* security review

---

# 33. Data Privacy

Future portal development must define:

* personal data collected
* corporate data collected
* retention period
* document retention
* privacy policy
* data deletion requirements
* account deletion/deactivation
* employee access rules

Legal/company approval will be required.

---

# 34. Security Baseline

The future portal must be treated as a secure business application.

Minimum principles:

* HTTPS
* server-side authorization
* secure cookies/tokens
* rate limiting
* CSRF protection where relevant
* input validation
* output encoding
* secure headers
* database access controls
* encrypted secrets
* secure file storage
* logging
* monitoring
* backups
* dependency security
* least privilege

Security should not be bolted on after portal development.

---

# 35. Availability and Reliability

Future customer logistics functionality may become operationally important.

Before implementation, define:

* uptime expectations
* backup strategy
* disaster recovery
* monitoring
* incident response
* support ownership

The public website and operational customer platform may eventually require different availability expectations.

---

# 36. Portal Responsive Requirements

The future customer portal should support:

* desktop
* laptop
* tablet
* mobile

Mobile customers should be able to perform essential tasks such as:

* check shipment status
* view quotes
* review booking status
* access documents
* receive notifications
* contact support

Complex administrative workflows may remain optimized for desktop where appropriate.

---

# 37. Accessibility

The portal should maintain the same accessibility standards as the public website.

Especially important:

* forms
* tables
* status indicators
* keyboard navigation
* alerts
* validation
* modals
* document actions
* charts if introduced

Do not communicate shipment status using color alone.

---

# 38. Portal Internationalization

Future customer portal should anticipate:

* English
* Amharic

However, operational terminology must be translated accurately.

Machine translation should not be used blindly for:

* customs terminology
* contracts
* financial documents
* shipping documents
* regulatory language

---

# 39. Questions That Must Be Answered Before Portal Development

Before implementation, EthioRail management/operations should answer:

1. What internal logistics software is currently used?
2. Where are shipment records stored?
3. Is there already a shipment ID/reference system?
4. Are container numbers tracked?
5. How are quotations currently produced?
6. How are bookings currently created?
7. How are shipment statuses updated?
8. Where are customer documents stored?
9. How are invoices generated?
10. How are customers currently notified?
11. What customer roles are required?
12. Which employees need portal access?
13. What operational roles exist?
14. Is there an existing ERP?
15. Is there an existing CRM?
16. Are APIs available?
17. Are railway/port systems available for integration?
18. Is online payment required?
19. What security/compliance requirements apply?
20. Who will own and support the system internally?

Portal implementation must not begin until these questions are substantially answered.

---

# 40. Portal Development Phases

Potential future sequence:

## Phase P0 — Discovery

Document current EthioRail logistics workflows and systems.

## Phase P1 — Requirements

Define portal users, roles, permissions, workflows and integrations.

## Phase P2 — Data Architecture

Define:

* organizations
* users
* customers
* quotes
* bookings
* shipments
* milestones
* documents
* notifications
* support

## Phase P3 — Authentication & Authorization

Implement secure identity and access.

## Phase P4 — Customer MVP

Possible first useful release:

* login
* dashboard
* shipments
* tracking
* documents

## Phase P5 — Quotes & Booking

Introduce quotation and booking workflows.

## Phase P6 — Communications

Notifications and support.

## Phase P7 — Financial Capabilities

Invoices/payments if approved.

## Phase P8 — Analytics / Advanced Services

Only when sufficient reliable operational data exists.

---

# 41. Recommended MVP Philosophy

Do not launch ten incomplete customer capabilities simultaneously.

A better future portal MVP might be:

```text
Secure Login
+
My Shipments
+
Shipment Status
+
Documents
+
Notifications
```

Then expand.

The exact MVP must be based on operational readiness.

---

# 42. Portal Design Principle

The future portal should feel:

* efficient
* calm
* precise
* operational
* trustworthy

Not:

* cinematic
* decorative
* visually overwhelming

Public website:

```text
Tell the EthioRail story.
```

Customer portal:

```text
Help customers get work done.
```

---

# 43. Scope Boundary

This document is FUTURE PLANNING ONLY.

Current website development must not include:

* authentication
* dashboards
* customer database
* shipment database
* booking engine
* tracking engine
* document repository
* employee portal
* payment processing
* portal APIs

unless explicitly added to project scope later.

---

# 44. Architecture Requirement for Current Website

Although the portal is not being built now, the future technical architecture should:

* avoid unnecessary coupling
* support reusable design tokens
* allow portal expansion
* preserve clean URL/domain options
* avoid hard-coding assumptions that all visitors are anonymous
* allow authenticated applications later
* keep public content separate from sensitive customer data
* allow APIs/backends to be introduced later

Do not overengineer Version 1 solely for hypothetical portal functionality.

Prepare for the future without building the future prematurely.

---

# 45. Current Status

Public website:

```text
PLANNING
```

Customer portal:

```text
FUTURE
NOT IN V1
```

Employee/admin platform:

```text
FUTURE
NOT IN V1
```

Completed planning documents:

```text
PROJECT_SPEC.md
SITEMAP.md
HOMEPAGE_SPEC.md
DESIGN_SYSTEM.md
PORTAL_FUTURE.md
```

Next:

```text
ARCHITECTURE.md
ROADMAP.md
```

No portal implementation has started.

Status:

Future Planning Defined
