import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clackalyzer — Mechanical Keyboard Acoustic Analysis Tool',
  description: 'Professional-grade FFT-based spectrum analysis for iOS. Analyze keyboard acoustics in real-time, compare builds, and calibrate ambient noise.',
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
            <a href="/technical" className="text-ck-grid hover:text-ck-text transition">Technical</a>
            <a href="/about" className="text-ck-grid hover:text-ck-text transition">About</a>
          </nav>
        </div>
        <a
          href="https://apps.apple.com/app/clackalyzer/id6479999922"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ck-red hover:bg-red-600 text-ck-navy px-4 py-2 rounded font-semibold transition"
        >
          App Store
        </a>
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
              <li><a href="/technical" className="text-ck-grid hover:text-ck-text transition">Technical</a></li>
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
              <li><a href="#" className="text-ck-grid hover:text-ck-text transition">Privacy</a></li>
              <li><a href="#" className="text-ck-grid hover:text-ck-text transition">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-ck-grid hover:text-ck-text transition">GitHub</a></li>
              <li><a href="mailto:scott@mutterer.com" className="text-ck-grid hover:text-ck-text transition">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ck-grid/20 pt-8 text-center text-ck-grid text-sm">
          <p>&copy; 2026 Yall Tech Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
