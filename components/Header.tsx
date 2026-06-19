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
          <a
            href="https://apps.apple.com/app/clackalyzer/id6479999922"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded font-semibold text-sm hover:bg-white/90 transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </a>
        </div>

        {/* Mobile: App Store + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://apps.apple.com/app/clackalyzer/id6479999922"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white text-black px-3 py-1.5 rounded font-semibold text-sm hover:bg-white/90 transition"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download
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
          <a href="/about" onClick={() => setOpen(false)} className="py-3 text-ck-grid hover:text-ck-text transition border-b border-ck-grid/10">About</a>
          <a href="https://discord.gg/CduYCuyBSJ" target="_blank" rel="noopener noreferrer" className="py-3 text-ck-grid hover:text-ck-text transition">Discord</a>
        </div>
      )}
    </header>
  )
}
