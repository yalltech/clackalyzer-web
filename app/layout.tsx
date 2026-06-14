import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clackalyzer — Mechanical Keyboard Acoustic Analysis Tool',
  description: 'Professional-grade FFT-based spectrum analysis for iOS. Analyze keyboard acoustics in real-time and calibrate ambient noise.',
  applicationName: 'Clackalyzer',
  metadataBase: new URL('https://clackalyzer.com'),
  openGraph: {
    title: 'Clackalyzer — Mechanical Keyboard Acoustic Analysis Tool',
    description: 'Professional-grade FFT-based spectrum analysis for iOS',
    url: 'https://clackalyzer.com',
    siteName: 'Clackalyzer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clackalyzer',
    description: 'Professional mechanical keyboard acoustic analysis tool',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Clackalyzer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-ck-navy text-ck-text font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ck-navy border-b border-ck-grid/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold">Clack</span>
            <span className="text-2xl font-light text-ck-teal">alyzer</span>
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="/features" className="text-ck-grid hover:text-ck-text transition">Features</a>
            <a href="/use-cases" className="text-ck-grid hover:text-ck-text transition">Use Cases</a>
            <a href="/about" className="text-ck-grid hover:text-ck-text transition">About</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
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
            className="hidden sm:inline-flex items-center gap-1.5 bg-ck-teal text-black px-4 py-2 rounded font-semibold text-sm hover:bg-ck-teal/80 transition"
          >
            Join Discord
          </a>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-ck-card border-t border-ck-grid/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="/features" className="text-ck-grid hover:text-ck-text transition">Features</a></li>
              <li><a href="/use-cases" className="text-ck-grid hover:text-ck-text transition">Use Cases</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-ck-grid hover:text-ck-text transition">About</a></li>
              <li><a href="/contact" className="text-ck-grid hover:text-ck-text transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-ck-grid hover:text-ck-text transition">Privacy</a></li>
              <li><a href="/terms" className="text-ck-grid hover:text-ck-text transition">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://discord.gg/CduYCuyBSJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ck-grid hover:text-ck-text transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                  Discord
                </a>
              </li>
              <li><a href="mailto:info@clackalyzer.com" className="text-ck-grid hover:text-ck-text transition">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ck-grid/20 pt-8 text-center text-ck-grid text-sm">
          <p>&copy; 2026 Clacker_Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
