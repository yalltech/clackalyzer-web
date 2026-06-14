'use client'

import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ck-navy border-b border-ck-grid/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-1 shrink-0">
          <span className="text-2xl font-bold">Clack</span>
          <span className="text-2xl font-light text-ck-teal">alyzer</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          <a href="/features" className="text-ck-grid hover:text-ck-text transition">Features</a>
          <a href="/use-cases" className="text-ck-grid hover:text-ck-text transition">Use Cases</a>
          <a href="/about" className="text-ck-grid hover:text-ck-text transition">About</a>
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <span className="inline-flex items-center gap-2 border border-ck-teal/50 text-ck-teal px-4 py-2 rounded font-semibold text-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
            In Development
          </span>
          <a
            href="https://discord.gg/CduYCuyBSJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-ck-teal text-black px-4 py-2 rounded font-semibold text-sm hover:bg-ck-teal/80 transition"
          >
            Join Discord
          </a>
        </div>

        {/* Mobile: Discord + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://discord.gg/CduYCuyBSJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-ck-teal text-black px-3 py-1.5 rounded font-semibold text-sm hover:bg-ck-teal/80 transition"
          >
            Discord
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            className="p-1 text-ck-grid hover:text-ck-text transition"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-ck-grid/20 bg-ck-navy px-4 py-4 flex flex-col gap-1">
          <a href="/features" onClick={() => setOpen(false)} className="py-3 text-ck-grid hover:text-ck-text transition border-b border-ck-grid/10">Features</a>
          <a href="/use-cases" onClick={() => setOpen(false)} className="py-3 text-ck-grid hover:text-ck-text transition border-b border-ck-grid/10">Use Cases</a>
          <a href="/about" onClick={() => setOpen(false)} className="py-3 text-ck-grid hover:text-ck-text transition">About</a>
        </div>
      )}
    </header>
  )
}
