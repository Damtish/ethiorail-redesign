import {Resend} from 'resend';
import {z} from 'zod';
import {services} from '@/lib/services';
import type {QuoteRequest} from './schema';
import {generateQuotePdf} from './pdf';


const escape = (s: string) => s.replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]!));
const header = (value: string) => value.replace(/[\r\n\u0000-\u001F\u007F]/g, ' ');

export async function deliverQuote(data: QuoteRequest, reference: string, submittedAt: string) {

  const {RESEND_API_KEY, QUOTE_FROM_EMAIL, QUOTE_RECIPIENTS} = process.env;
  const expectedRecipients = ['abrahamd@ethiorail.com', 'info@ethiorail.com', 'ebrahimm@ethiorail.com'];
  const recipients = QUOTE_RECIPIENTS?.split(',').map(recipient => recipient.trim().toLowerCase()).filter(Boolean) || [];
  if (!RESEND_API_KEY || !QUOTE_FROM_EMAIL || !z.email().safeParse(QUOTE_FROM_EMAIL).success ||
      !QUOTE_FROM_EMAIL.toLowerCase().endsWith('@ethiorail.com') || recipients.length !== expectedRecipients.length ||
      new Set(recipients).size !== expectedRecipients.length || !expectedRecipients.every(recipient => recipients.includes(recipient))) {
    throw new Error('QUOTE_CONFIGURATION');
  }
  const selected = data.services.map(slug => services.find(s => s.slug === slug)!.en).join(', ');
  const v = data.values;
  const entries = [
    ['Request ID', reference], ['Customer', v.fullName], ...(v.company ? [['Company', v.company]] : []),
    ['Email', v.email], ['Phone', v.phone], ['Service', selected], ['Origin', v.origin], ['Destination', v.destination],
    ['Submitted (UTC)', submittedAt], ['Website locale', data.locale], ['Source page', data.source],
  ];
  const pdf = await generateQuotePdf(data, reference, submittedAt);
  const resend = new Resend(RESEND_API_KEY);
  const result = await resend.emails.send({
    from: 'ERL Website <' + QUOTE_FROM_EMAIL + '>', to: expectedRecipients, replyTo: v.email,
    subject: 'New ERL Quote Request — ' + header(v.company || v.fullName) + ' — ' + selected + ' — ' + reference,
    text: 'New Quote Request\n\n' + entries.map(([k, value]) => k + ': ' + value).join('\n') + '\n\nThe complete request is attached as a PDF.\nReply to this email to contact the customer.',
    html: '<div style="font-family:Arial,sans-serif;color:#10232D;max-width:680px"><h1 style="color:#009507">New Quote Request</h1><table style="border-collapse:collapse;width:100%">' + entries.map(([k, value]) => '<tr><th style="text-align:left;vertical-align:top;padding:8px;border-bottom:1px solid #EDF8EF">' + escape(k) + '</th><td style="padding:8px;border-bottom:1px solid #EDF8EF;overflow-wrap:anywhere">' + escape(value) + '</td></tr>').join('') + '</table><p>The complete request is attached as a PDF.</p><p>Reply to this email to contact the customer.</p></div>',
    attachments: [{filename: 'ERL-Quote-Request-' + reference + '.pdf', content: pdf, contentType: 'application/pdf'}],
  }, {idempotencyKey: reference});
  if (result.error || !result.data?.id) throw new Error('QUOTE_PROVIDER_REJECTED');
  return result.data.id;
}
