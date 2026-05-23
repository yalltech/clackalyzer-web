import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(req: NextRequest) {
  const { name, email, notes } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }

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
