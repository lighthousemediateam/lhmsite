import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Compass leads go to a dedicated address so they never mix with premium inquiries.
// Override with COMPASS_LEAD_EMAIL in Vercel env vars when Adam confirms the address.
const TO_EMAIL = process.env.COMPASS_LEAD_EMAIL || 'adam@lhmcollective.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Compass Leads <onboarding@resend.dev>';

const PACKAGES = ['Signature', 'Accelerator', 'À la carte', 'Not sure yet'];

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const business = typeof body.business === 'string' ? body.business.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const pkg = typeof body.package === 'string' ? body.package.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !business || !email || !message) {
    return NextResponse.json(
      { error: 'Please fill out name, business, email, and message.' },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (pkg && !PACKAGES.includes(pkg)) {
    return NextResponse.json({ error: 'Invalid package selection.' }, { status: 400 });
  }
  if (name.length > 200 || business.length > 200 || phone.length > 50 || message.length > 5000) {
    return NextResponse.json({ error: 'One of the fields is too long.' }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set — cannot send Compass lead.');
    return NextResponse.json(
      { error: 'Something went wrong on our end. Please email us directly.' },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const rows = [
    ['Name', name],
    ['Business', business],
    ['Email', email],
    ['Phone', phone || '—'],
    ['Interested in', pkg || '—'],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#888;white-space:nowrap;vertical-align:top;">${k}</td><td style="padding:6px 0;">${esc(v)}</td></tr>`
    )
    .join('');

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `New Compass lead — ${name}${business ? ` (${business})` : ''}`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#1a191b;">
        <h2 style="margin:0 0 12px;">New Compass lead</h2>
        <table style="border-collapse:collapse;">${rows}</table>
        <p style="margin:16px 0 4px;color:#888;">Message</p>
        <p style="margin:0;white-space:pre-wrap;">${esc(message)}</p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error sending Compass lead:', error);
    return NextResponse.json(
      { error: 'Something went wrong sending your message. Please try again.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
