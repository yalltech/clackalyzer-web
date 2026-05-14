'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend service or email service
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg text-ck-grid mb-12">
            Have questions, feedback, or partnership opportunities? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-ck-card border border-ck-grid/30 rounded-lg text-ck-text focus:outline-none focus:border-ck-red transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-ck-card border border-ck-grid/30 rounded-lg text-ck-text focus:outline-none focus:border-ck-red transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 bg-ck-card border border-ck-grid/30 rounded-lg text-ck-text focus:outline-none focus:border-ck-red transition"
                  >
                    <option value="">Select a subject...</option>
                    <option value="question">General Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="bug">Bug Report</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-ck-card border border-ck-grid/30 rounded-lg text-ck-text focus:outline-none focus:border-ck-red transition resize-none"
                    placeholder="Tell us what you think..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 bg-ck-red/10 border border-ck-red text-ck-red rounded-lg">
                    Thanks for reaching out! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:customerservice@clackalyzer.com"
                  className="text-ck-teal hover:text-ck-red transition font-mono"
                >
                  customerservice@clackalyzer.com
                </a>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-ck-grid">
                  We try to respond to all inquiries within 24–48 hours.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">What We're Looking For</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-ck-red">•</span>
                    <span className="text-ck-grid">Bug reports & technical issues</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-ck-red">•</span>
                    <span className="text-ck-grid">Feature requests & feedback</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-ck-red">•</span>
                    <span className="text-ck-grid">Partnership opportunities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-ck-red">•</span>
                    <span className="text-ck-grid">Community contributions</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-ck-card/50">
                <h3 className="text-xl font-bold mb-2">Company</h3>
                <p className="text-ck-grid text-sm">
                  Yall Tech Studios<br />
                  Built with ❤️ for the mechanical keyboard community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
