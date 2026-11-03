import {z} from 'zod';
import {services} from '@/lib/services';

const text=z.string().trim().min(1).max(200);
export const quoteSchema=z.object({values:z.object({fullName:text,company:z.string().trim().max(200).default(''),email:z.email().max(254),phone:z.string().regex(/^\+?[\d\s().-]{5,25}$/),movement:z.enum(['import','export']),origin:text,destination:text,date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(v=>Number.isFinite(Date.parse(v))&&new Date(v).toISOString().slice(0,10)===v),cargo:text,load:z.enum(['FCL','LCL','unsure']),size:z.enum(['20','40','40HC','unsure']).optional(),count:z.string().max(10).optional(),weight:z.string().max(20).refine(v=>Number.isFinite(Number(v))&&Number(v)>0)}).strict().superRefine((v,c)=>{if(v.load==='FCL'&&(!v.size||!v.count||!Number.isInteger(Number(v.count))||Number(v.count)<1))c.addIssue({code:'custom',message:'Container details required'});}),services:z.array(z.string()).min(1).max(13).refine(v=>new Set(v).size===v.length&&v.every(x=>services.some(s=>s.slug===x))),locale:z.enum(['en','am']),source:z.string().max(300).regex(/^\/(en|am)\/quote$/),website:z.string().max(0)}).strict();

export type QuoteRequest=z.infer<typeof quoteSchema>;
