'use client'

import { useState, useRef } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'
import type { TurnstileInstance } from '@marsidev/react-turnstile'

export default function BetaPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const turnstileRef = useRef<TurnstileInstance>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaToken) {
      setError('Please complete the verification.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, notes, captchaToken }),
      })
      if (!res.ok) throw new Error('Failed to submit.')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email us directly at info@clackalyzer.com.')
      turnstileRef.current?.reset()
      setCaptchaToken('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max max-w-2xl">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 border border-ck-teal/50 text-ck-teal px-3 py-1 rounded text-sm font-semibold mb-6">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              In Development
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Beta Testers Wanted</h1>
            <p className="text-lg text-ck-grid">
              Clackalyzer is under active development. We&apos;re looking for mechanical keyboard enthusiasts to help shape the app before launch. Sign up and we&apos;ll reach out when beta access opens.
            </p>
          </div>

          {/* What to expect */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { label: 'Early Access', desc: 'Try the app before it goes live' },
              { label: 'Shape the Product', desc: 'Your feedback directly influences features' },
              { label: 'Community', desc: 'Join a group of passionate keyboard folks' },
            ].map((item) => (
              <div key={item.label} className="card text-center">
                <p className="font-semibold text-ck-text mb-1">{item.label}</p>
                <p className="text-ck-grid text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          {submitted ? (
            <div className="card border border-ck-teal/40 text-center py-12">
              <svg className="mx-auto mb-4 text-ck-teal" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <h2 className="text-2xl font-bold mb-2">You&apos;re on the list!</h2>
              <p className="text-ck-grid">We&apos;ve received your application and will be in touch when beta access opens.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name <span className="text-ck-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-ck-card border border-ck-grid/30 rounded-lg text-ck-text focus:outline-none focus:border-ck-teal transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email <span className="text-ck-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-ck-card border border-ck-grid/30 rounded-lg text-ck-text focus:outline-none focus:border-ck-teal transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold mb-2">
                  Notes
                </label>
                <textarea
                  id="notes"
                  rows={5}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 bg-ck-card border border-ck-grid/30 rounded-lg text-ck-text focus:outline-none focus:border-ck-teal transition resize-none"
                  placeholder="Tell us about your setup, what keyboards you use, or anything you'd like us to know..."
                />
              </div>

              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={setCaptchaToken}
                onExpire={() => setCaptchaToken('')}
                options={{ theme: 'dark' }}
              />

              <button type="submit" disabled={loading || !captchaToken} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? 'Sending...' : 'Apply for Beta Access'}
              </button>

              {error && (
                <p className="text-ck-red text-sm text-center">{error}</p>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
