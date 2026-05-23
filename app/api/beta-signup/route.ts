import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const { name, email, notes } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars')
    return NextResponse.json({ error: 'Server misconfiguration.' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD.replace(/\s/g, ''),
    },
  })

  try {
    await transporter.sendMail({
      from: `"Clackalyzer" <${process.env.GMAIL_USER}>`,
      to: 'info@clackalyzer.com',
      replyTo: email,
      subject: `Beta Tester Application — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nNotes:\n${notes || '(none)'}`,
      html: `
        <h2>Beta Tester Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Notes:</strong></p>
        <p>${notes ? notes.replace(/\n/g, '<br>') : '<em>(none)</em>'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send failed:', err)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
