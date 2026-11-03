/* eslint-disable @typescript-eslint/no-require-imports -- Tests transpile server modules and mock only Resend. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const recipients = ['abrahamd@ethiorail.com', 'info@ethiorail.com', 'ebrahimm@ethiorail.com'];
const baseEnv = {RESEND_API_KEY: 're_test_not_real', QUOTE_FROM_EMAIL: 'quotes@ethiorail.com', QUOTE_RECIPIENTS: recipients.join(',')};
let sent, options, mode = 'ok', sends = 0;
function load(env = baseEnv) {
  const cache = new Map();
  function moduleAt(file) {
    if (cache.has(file)) return cache.get(file);
    const exports = {};
    cache.set(file, exports);
    const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true}}).outputText;
    vm.runInNewContext(code, {exports, Buffer, URL, Request, Response, process: {env, cwd: () => root}, console: {info() {}, error() {}}, require(name) {
      if (name === 'resend') return {Resend: class {constructor(key) {assert.equal(key, baseEnv.RESEND_API_KEY);} emails = {send: async (message, config) => {
        sends++; sent = message; options = config;
        if (mode === 'throw') throw Error('provider private diagnostics');
        if (mode === 'fail') return {data: null, error: {message: 'provider private diagnostics'}};
        if (mode === 'missing-id') return {data: {}, error: null};
        return {data: {id: 'provider-test-id'}, error: null};
      }};}};
      if (name.startsWith('@/')) return moduleAt(path.join(root, 'src', name.slice(2)) + '.ts');
      if (name.startsWith('.')) return moduleAt(path.resolve(path.dirname(file), name) + '.ts');
      return require(name);
    }}, {filename: file});
    return exports;
  }
  return {post: moduleAt(path.join(root, 'src/app/api/quote/route.ts')).POST, catalog: moduleAt(path.join(root, 'src/lib/services.ts')).services,
    pdf: moduleAt(path.join(root, 'src/lib/quote/pdf.ts')).generateQuotePdf};
}
const body = {values: {fullName: 'QA <Customer>', company: 'QA & Co', email: 'qa@example.com', phone: '+251911111111', movement: 'import', origin: 'Djibouti', destination: 'Modjo', date: '2026-12-01', cargo: 'Machinery', load: 'LCL', weight: '100'}, services: ['freight'], locale: 'en', source: '/en/quote', website: ''};
const req = (data = body, origin = 'http://localhost:3002', headers = {}) => new Request('http://localhost:3002/api/quote', {method: 'POST', headers: {origin, 'content-type': 'application/json', ...headers}, body: JSON.stringify(data)});
let checks = 0;
async function expectStatus(status, data = body, env = baseEnv) {
  const response = await load(env).post(req(data));
  assert.equal(response.status, status);
  const json = await response.json();
  if (status !== 200) {assert(json.error); assert(!JSON.stringify(json).includes('provider private')); assert(!JSON.stringify(json).includes(baseEnv.RESEND_API_KEY));}
  checks++; return json;
}
(async () => {
  const accepted = await expectStatus(200);
  assert.match(accepted.reference, /^ERL-Q-\d{8}-[\da-f-]{36}$/);
  assert.deepEqual(Array.from(sent.to), recipients);
  assert.equal(new Set(sent.to).size, recipients.length);
  assert.equal(sent.from, 'ERL Website <quotes@ethiorail.com>');
  assert.equal(sent.replyTo, body.values.email);
  assert(sent.subject.includes('QA & Co — Freight — ' + accepted.reference));
  assert(sent.html.includes('QA &amp; Co') && sent.html.includes('QA &lt;Customer&gt;'));
  assert(!sent.html.includes('<Customer>'));
  for (const value of [body.values.email, body.values.phone, body.values.origin, body.values.destination, '/en/quote', accepted.reference]) assert(sent.text.includes(value));
  assert(sent.text.includes('The complete request is attached as a PDF.'));
  assert.equal(sent.attachments.length, 1);
  const attachment = sent.attachments[0];
  assert.equal(attachment.filename, 'ERL-Quote-Request-' + accepted.reference + '.pdf');
  assert.equal(attachment.contentType, 'application/pdf');
  assert(Buffer.isBuffer(attachment.content));
  assert.equal(attachment.content.subarray(0, 5).toString(), '%PDF-');
  assert.equal(options.idempotencyKey, accepted.reference);
  const catalog = load().catalog;
  assert.equal(catalog.length, 13);
  for (const service of catalog) {await expectStatus(200, {...body, services: [service.slug]}); assert(sent.subject.includes(service.en));}
  await expectStatus(200, {...body, values: {...body.values, company: ''}});
  assert(sent.subject.includes('QA <Customer> — Freight'));
  await expectStatus(200, {...body, values: {...body.values, company: 'QA\r\nBcc: injection'}});
  assert(!/[\r\n]/.test(sent.subject));
  const am = {...body, locale: 'am', source: '/am/quote', services: catalog.map(s => s.slug), values: {...body.values, fullName: 'የድረ ገጽ ሙከራ', origin: 'አዲስ አበባ', cargo: 'ማሽነሪ '.repeat(20), load: 'FCL', size: '40HC', count: '3'}};
  await expectStatus(200, am);
  assert(sent.text.includes('/am/quote'));
  if (process.env.QUOTE_REVIEW_OUTPUT) {
    fs.mkdirSync(process.env.QUOTE_REVIEW_OUTPUT, {recursive: true});
    fs.writeFileSync(path.join(process.env.QUOTE_REVIEW_OUTPUT, 'amharic-all-services-quote.pdf'), sent.attachments[0].content);
    const pdf = await load().pdf(body, accepted.reference, '2026-11-02T12:00:00.000Z');
    fs.writeFileSync(path.join(process.env.QUOTE_REVIEW_OUTPUT, 'english-quote.pdf'), pdf);
  }
  for (const state of ['fail', 'throw', 'missing-id']) {mode = state; await expectStatus(503);}
  mode = 'ok';
  for (const field of ['RESEND_API_KEY', 'QUOTE_FROM_EMAIL', 'QUOTE_RECIPIENTS']) await expectStatus(503, body, {...baseEnv, [field]: ''});
  for (const recipientConfig of [
    'abrahamd@ethiorail.com,info@ethiorail.com',
    'abrahamd@ethiorail.com,info@ethiorail.com,ebrahimm@ethiorail.com,other@example.com',
    'abrahamd@ethiorail.com,info@ethiorail.com,info@ethiorail.com',
    'other@example.com',
  ]) await expectStatus(503, body, {...baseEnv, QUOTE_RECIPIENTS: recipientConfig});
  await expectStatus(503, body, {...baseEnv, QUOTE_FROM_EMAIL: 'customer@example.com'});
  const beforeInvalid = sends;
  for (const data of [
    {...body, website: 'spam'}, {...body, services: ['air-freight']}, {...body, services: []}, {...body, services: ['freight', 'freight']},
    {...body, values: {...body.values, email: 'invalid'}}, {...body, values: {...body.values, fullName: ''}},
    {...body, values: {...body.values, cargo: 'x'.repeat(201)}}, {...body, values: {...body.values, weight: '-1'}},
    {...body, values: {...body.values, date: '2026-02-30'}}, {...body, values: {...body.values, load: 'FCL'}},
    {...body, source: '/am/quote'}, {...body, values: {...body.values, unexpected: 'extra'}},
  ]) await expectStatus(400, data);
  assert.equal(sends, beforeInvalid);
  assert.equal((await load().post(req(body, 'https://other.example'))).status, 403); checks++;
  assert.equal((await load().post(req(body, 'http://localhost:3002', {'content-length': '16001'}))).status, 413); checks++;
  assert.equal((await load().post(req({...body, website: 'x'.repeat(17000)}))).status, 413); checks++;
  const post = load().post;
  for (let i = 0; i < 5; i++) assert.equal((await post(req())).status, 200);
  assert.equal((await post(req())).status, 429); checks++;
  console.log('PASS: ' + checks + ' quote API cases; 13 services, three enforced recipients, Reply-To, attachment MIME/name/reference, sanitized provider failures, validation, honeypot, origin/body bounds and rate limiting.');
})().catch(error => {console.error(error); process.exitCode = 1;});
