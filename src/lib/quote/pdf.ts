import PDFDocument from 'pdfkit';
import path from 'node:path';
import type {QuoteRequest} from './schema';
import {services} from '@/lib/services';

const green = '#009507', ink = '#10232D', muted = '#53666C', cyan = '#58E0F2';
type Entry = [string, string];

/** Private in-memory document; never written to public/ or exposed by a download route. */
export async function generateQuotePdf(data: QuoteRequest, reference: string, submittedAt: string): Promise<Buffer> {
  const doc = new PDFDocument({size: 'A4', margins: {top: 48, left: 48, right: 48, bottom: 20}, bufferPages: true, autoFirstPage: false,
    info: {Title: 'ERL Quote Request ' + reference, Author: 'Ethio Rail Logistics PLC'}});
  const chunks: Buffer[] = [];
  const completed = new Promise<Buffer>((resolve, reject) => {
    doc.on('data', chunk => chunks.push(Buffer.from(chunk)));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);
  });
  doc.registerFont('Body', path.join(process.cwd(), 'src/fonts/Manrope-400.ttf'));
  doc.registerFont('Bold', path.join(process.cwd(), 'src/fonts/Manrope-700.ttf'));
  doc.registerFont('Ethiopic', path.join(process.cwd(), 'src/fonts/NotoSansEthiopic-400.ttf'));
  const fontFor = (value: string) => /[\u1200-\u137f]/.test(value) ? 'Ethiopic' : 'Body';
  let y = 0;
  const newPage = () => {
    doc.addPage();
    doc.image(path.join(process.cwd(), 'public/media/brand/ethiorail-logo-light-surface-display.png'), 48, 36, {width: 110});
    doc.font('Bold').fontSize(13).fillColor(ink).text('ETHIO RAIL LOGISTICS PLC', 190, 44, {width: 357});
    doc.font('Bold').fontSize(21).fillColor(green).text('QUOTE REQUEST', 190, 67, {width: 357});
    doc.moveTo(48, 104).lineTo(547, 104).lineWidth(2).strokeColor(cyan).stroke();
    doc.font('Body').fontSize(8).fillColor(muted).text('Reference: ' + reference, 48, 116, {width: 499});
    doc.text('Submitted: ' + submittedAt + ' (UTC)', 48, 132, {width: 499});
    y = 154;
  };
  const ensure = (height: number) => {if (y + height > 735) newPage();};
  const section = (title: string, entries: Entry[]) => {
    ensure(Math.min(250, 40 + entries.length * 24));
    doc.rect(48, y, 499, 26).fill('#EDF8EF');
    doc.font('Bold').fontSize(11).fillColor(green).text(title, 58, y + 6, {width: 479});
    y += 32;
    for (const [label, raw] of entries) {
      const value = raw.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');
      doc.font(fontFor(value)).fontSize(10);
      // Wrap individual code points too, so long unbroken customer values cannot overflow.
      const lines: string[] = [];
      let line = '';
      for (const word of value.split(/(\s+)/)) {
        if (doc.widthOfString(line + word) <= 345 && !word.includes('\n')) {line += word; continue;}
        if (line.trim()) lines.push(line.trimEnd());
        line = '';
        for (const char of word) {
          if (char === '\n') {lines.push(line); line = ''; continue;}
          if (doc.widthOfString(line + char) > 345) {lines.push(line); line = '';}
          line += char;
        }
      }
      if (line.trim() || !lines.length) lines.push(line.trim());
      const height = Math.max(26, lines.length * 17 + 7);
      if (height <= 520) ensure(height);
      let first = true;
      for (const text of lines) {
        ensure(25);
        if (first) doc.font('Bold').fontSize(9).fillColor(muted).text(label, 58, y + 2, {width: 125, lineBreak: false});
        doc.font(fontFor(text)).fontSize(10).fillColor(ink).text(text, 194, y, {width: 345, lineBreak: false});
        y += 17; first = false;
      }
      y += 7;
      doc.moveTo(58, y - 4).lineTo(537, y - 4).strokeColor('#E5ECE8').lineWidth(0.5).stroke();
    }
    y += 8;
  };
  try {
    newPage();
    const v = data.values;
    section('Customer Information', [['Customer Name', v.fullName], ...(v.company ? [['Company', v.company] as Entry] : []), ['Email', v.email], ['Phone', v.phone]]);
    section('Service Requested', data.services.map(slug => {
      const service = services.find(s => s.slug === slug)!;
      return ['ERL service', service.en + (data.locale === 'am' ? ' / ' + service.am : '')];
    }));
    section('Shipment / Cargo Details', [
      ['Movement', v.movement === 'import' ? 'Import' : 'Export'], ['Origin', v.origin], ['Destination', v.destination],
      ['Shipping Date', v.date], ['Cargo Type', v.cargo], ['Load Type', v.load === 'unsure' ? 'Not sure' : v.load],
      ...(v.load === 'FCL' ? [['Container Size', v.size === 'unsure' ? 'Not sure' : v.size + ' ft'], ['Containers', v.count!]] as Entry[] : []),
      ['Weight (kg)', v.weight],
    ]);
    section('Submission Information', [['Request ID', reference], ['Submitted (UTC)', submittedAt], ['Website Locale', data.locale === 'am' ? 'Amharic (am)' : 'English (en)'], ['Source Page', data.source]]);
    const pages = doc.bufferedPageRange();
    for (let i = 0; i < pages.count; i++) {
      doc.switchToPage(i);
      doc.moveTo(48, 754).lineTo(547, 754).strokeColor(cyan).lineWidth(1).stroke();
      doc.font('Bold').fontSize(8).fillColor(ink).text('Ethio Rail Logistics PLC', 48, 766, {width: 240});
      doc.font('Body').fontSize(8).fillColor(muted).text('www.ethiorail.com  |  info@ethiorail.com', 48, 780, {width: 430});
      doc.text('Page ' + (i + 1) + ' / ' + pages.count, 467, 766, {width: 80, align: 'right'});
      doc.fontSize(7).text('This document contains information submitted through the Ethio Rail Logistics PLC website and is intended for quotation review.', 48, 800, {width: 499});
    }
    doc.end();
  } catch (error) { doc.destroy(); throw error; }
  return completed;
}
