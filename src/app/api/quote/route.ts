import {createHash, randomUUID} from 'node:crypto';
import {quoteSchema} from '@/lib/quote/schema';
import {deliverQuote} from '@/lib/quote/email';

const buckets = new Map<string, {count: number; until: number}>();
export const runtime = 'nodejs';

export async function POST(request: Request) {
  const submittedAt = new Date().toISOString();
  const id = 'ERL-Q-' + submittedAt.slice(0, 10).replaceAll('-', '') + '-' + randomUUID();
  const fail = (status: number) => Response.json({
    error: 'Unable to submit your request. Please try again or contact info@ethiorail.com.', reference: id,
  }, {status});
  const origin = request.headers.get('origin');
  if (!origin) return fail(403);
  try {
    const url = new URL(origin);
    if (!['http:', 'https:'].includes(url.protocol) || url.host !== (request.headers.get('host') || new URL(request.url).host)) return fail(403);
  } catch { return fail(403); }
  if (Number(request.headers.get('content-length') || 0) > 16000) return fail(413);
  // Per-instance protection. Configure a shared store/edge limit for multiple instances.
  const now = Date.now();
  for (const [key, bucket] of buckets) if (bucket.until < now) buckets.delete(key);
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const key = createHash('sha256').update(ip).digest('hex');
  const bucket = buckets.get(key) || {count: 0, until: now + 600000};
  if (bucket.count >= 5) return fail(429);
  bucket.count++;
  buckets.set(key, bucket);
  let data;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw) > 16000) return fail(413);
    data = quoteSchema.parse(JSON.parse(raw));
    if (!data.source.startsWith('/' + data.locale + '/')) return fail(400);
  } catch { return fail(400); }
  try {
    await deliverQuote(data, id, submittedAt);
    // Provider acceptance is distinct from inbox receipt. Never log the payload or provider errors.
    console.info('quote_provider_accepted', {reference: id});
    return Response.json({reference: id});
  } catch {
    console.error('quote_delivery_failed', {reference: id});
    return fail(503);
  }
}
