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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center">
        <a href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold">Clack</span>
          <span className="text-2xl font-light text-ck-teal">alyzer</span>
        </a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-ck-card border-t border-ck-grid/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-ck-grid text-sm">
        <p>&copy; 2026 Yall Tech Studios. All rights reserved.</p>
      </div>
    </footer>
  )
}
