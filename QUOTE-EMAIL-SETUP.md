# ERL transactional quote delivery

The website uses Resend's HTTPS API. No mailbox login or password is used.
Quote messages are delivered only to abrahamd@ethiorail.com, info@ethiorail.com, and ebrahimm@ethiorail.com. The customer address is Reply-To, never From.

## Server-only configuration

Set these in C:\Projects\ethiorail-redesign\.env.local for local testing and Vercel Production environment variables for production:

```dotenv
RESEND_API_KEY=
QUOTE_FROM_EMAIL=quotes@ethiorail.com
QUOTE_RECIPIENTS=abrahamd@ethiorail.com,info@ethiorail.com,ebrahimm@ethiorail.com
```

Never prefix these with NEXT_PUBLIC_. Never commit the local environment or API key.
Restart the local server after setting them. Redeploy after setting production variables.
Use a sending-only API key scoped to the verified ERL domain. The route fails closed if configuration is missing, duplicates a recipient, or does not contain exactly the approved three recipients.

## Sending-domain verification and DNS gate

Add ethiorail.com in the Resend Domains dashboard with sending enabled and receiving disabled. Keep the approved visible sender quotes@ethiorail.com. A dedicated generated return-path subdomain isolates transactional feedback without moving company inboxes. Verifying only a separate sending subdomain does not verify the root-domain From address; do not switch the visible sender without agreement.
Use the exact DNS record names, types, priorities, TTLs and values displayed for that domain and selected region. No account-specific key/selector or regional value can be supplied until the domain is created in Resend.

Required sending verification includes DKIM (the generated TXT public-key record) and the generated SPF/return-path configuration. For domains created after August 2026, Resend may supply CNAME records for SPF/return-path verification instead of the older TXT + return-path MX configuration. Use only the records actually generated in this account; do not guess selectors, keys, regions or targets. Any return-path MX shown is distinct from the company's inbound MX records. Preserve the existing DMARC policy and consult the mail administrator before altering it.

IMPORTANT: Do not add, change, or remove any MX record under the current authorization. Do not enable Resend inbound receiving. Do not replace ethiorail.com's existing SPF record or cPanel inbox routing. If the Resend dashboard requires a new return-path subdomain MX record, document the exact proposed record and obtain separate approval before adding it. If the generated configuration uses CNAME records, it can be verified without modifying MX records. Production sending remains blocked until the actual generated records have been reviewed and Resend reports the domain verified. Existing company mailboxes remain on cPanel.

Official references:
- https://resend.com/docs/dashboard/domains/introduction
- https://resend.com/docs/dashboard/domains/manage-domains
- https://resend.com/docs/api-reference/emails/send-email

## Message and private PDF

Every valid submission creates a unique ERL-Q-date-UUID reference and a UTC timestamp.
The server generates a branded, paginated A4 PDF entirely in memory with PDFKit, the approved logo, and embedded Manrope/Noto Sans Ethiopic fonts. Next file tracing includes these assets for production.
It contains actual collected fields: customer/company (if supplied), email, phone, selected canonical services, movement, origin/destination, shipment date, cargo type, load, FCL container details where applicable, weight, reference, timestamp, locale and source page. The current wizard does not collect country, volume or additional notes; no empty invented fields are added.
The summary email carries the same reference and metadata, with the PDF attached directly as application/pdf. No public PDF URL or local customer-file storage is created.

The API returns success only after Resend returns a successful message ID. This is provider acceptance, not proof of inbox receipt. Log events contain only a reference and generic status; never log provider errors, message contents or secrets.
A failed send preserves the wizard inputs and displays the existing retry state. A timeout can leave delivery uncertain; an operator should check the provider dashboard before asking the customer to retry. Each attempt uses its reference as the provider idempotency key.

## Protections and limitations

Zod strict field validation, input/body bounds, same-origin checks, a honeypot, escaped email HTML and five attempts per IP per ten minutes remain enabled. The in-memory limit is per server instance; production-wide protection requires a shared store or hosting firewall/edge rule. Configure that before exposing the endpoint to substantial traffic. Client headers must be normalized by the hosting proxy.

## Verification

Run npm run lint, npx tsc --noEmit --incremental false, npm run build, npm run test:quote and git diff --check.
Tests mock the Resend API while generating real PDF bytes. Browser success/failure tests may mock /api/quote, clearly identified as UI tests; they do not prove real delivery.
Before launch, set the real API key and verified sender, submit one genuine quote, check Resend provider acceptance for all three internal recipients, and ask each recipient to confirm inbox receipt and open the PDF. No live delivery claim is valid until this is done.
