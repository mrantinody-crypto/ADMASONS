import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to   = process.env.CONTACT_EMAIL || 'theadmasons@gmail.com'

    if (!host || !user || !pass) {
      console.warn('[contact] SMTP env vars missing — skipping email, logging lead instead')
      console.log('[contact lead]', { name, email, message })
      return NextResponse.json({ ok: true })
    }

    const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } })

    await transporter.sendMail({
      from: `"The AdMasons Website" <${user}>`,
      to,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1B2A4A;padding:24px 32px;border-radius:8px 8px 0 0">
            <h2 style="color:#F5C518;margin:0;font-size:22px">New Enquiry — The AdMasons</h2>
          </div>
          <div style="background:#f7f8fa;padding:24px 32px;border-radius:0 0 8px 8px;border:1px solid #e2e5eb;border-top:none">
            <p style="margin:0 0 8px"><strong>Name:</strong> ${name}</p>
            <p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin:16px 0 8px"><strong>Message:</strong></p>
            <p style="margin:0;white-space:pre-wrap;color:#374151">${message}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
