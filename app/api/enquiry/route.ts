import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function field(data: FormData, key: string, max: number) {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}
function errorPage(title: string, message: string, status: number) {
  const body = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><body style="font:16px/1.6 system-ui,sans-serif;background:#f0efe9;color:#131813;max-width:650px;margin:8vh auto;padding:24px"><h1>${title}</h1><p>${message}</p><p><a href="/contact">Return to the enquiry form</a></p><p>Alternative: <a href="mailto:prempugh@gmail.com?subject=Website%20project%20enquiry">prempugh@gmail.com</a></p></body></html>`;
  return new Response(body, {status,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}});
}
export async function POST(request: Request) {
  const type = request.headers.get('content-type') || '';
  if (!type.includes('application/x-www-form-urlencoded') && !type.includes('multipart/form-data')) {
    return errorPage('Invalid submission','Please use the project enquiry form.',415);
  }
  const size = Number(request.headers.get('content-length') || 0);
  if (size > 20000) return errorPage('Submission too large','Please shorten your message and try again.',413);
  try {
    const form = await request.formData();
    if (field(form,'website',200)) {
      return NextResponse.redirect(new URL('/contact/thank-you',request.url),303);
    }
    const name = field(form,'name',120);
    const email = field(form,'email',254);
    const project_type = field(form,'project_type',120);
    const budget = field(form,'budget',80);
    const message = field(form,'message',5000);
    if (!name || !email || !project_type || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return errorPage('Please check the form','Your name, valid email address, project type and project details are required.',400);
    }
    const enquiry = {receivedAt:new Date().toISOString(),name,email,project_type,budget,message};
    await put('enquiries/'+new Date().toISOString().slice(0,10)+'/'+randomUUID()+'.json',JSON.stringify(enquiry),{
      access:'private',contentType:'application/json',addRandomSuffix:false
    });
    return NextResponse.redirect(new URL('/contact/thank-you',request.url),303);
  } catch(e) {
    console.error('Project enquiry storage error',e instanceof Error?e.message:'unknown error');
    return errorPage('We could not save your enquiry','Please try again or email me directly at the address below.',503);
  }
}
export async function GET(){return NextResponse.json({error:'Method not allowed'},{status:405,headers:{Allow:'POST'}})}
