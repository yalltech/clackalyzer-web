import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Left column */}
          <div className="flex-1 flex flex-col gap-8 max-w-xl">

            {/* Icon + logo */}
            <div className="flex items-center gap-5">
              <Image
                src="/images/app-icon.png"
                alt="Clackalyzer app icon"
                width={90}
                height={90}
                className="rounded-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold leading-none tracking-tight">
                  <span className="text-white">Clack</span>
                  <span className="text-ck-teal">alyzer</span>
                </h1>
                <p className="text-ck-grid text-sm tracking-[0.2em] mt-1">CLICK. CLACK. THOCC. ANALYZE.</p>
              </div>
            </div>

            {/* Hero text */}
            <p className="text-2xl lg:text-3xl font-light leading-snug">
              The ultimate sound analyzer<br />
              for <span className="text-ck-teal font-medium">mechanical keyboard</span> enthusiasts.
            </p>

            {/* Feature bullets */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-ck-teal/20 border border-ck-teal/40 flex items-center justify-center shrink-0">
                  <svg className="text-ck-teal" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>
                  </svg>
                </div>
                <div>
                  <p className="text-ck-teal font-semibold text-lg">Record</p>
                  <p className="text-ck-grid text-sm leading-relaxed">Capture high-quality sound tests with ease.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                  <svg className="text-amber-400" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold text-lg">Analyze</p>
                  <p className="text-ck-grid text-sm leading-relaxed">Advanced FFT analysis with real-time insights.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-ck-red/20 border border-ck-red/40 flex items-center justify-center shrink-0">
                  <svg className="text-ck-red" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-ck-red font-semibold text-lg">Organize</p>
                  <p className="text-ck-grid text-sm leading-relaxed">Save, compare, and manage your sound test library.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://apps.apple.com/us/app/clackalyzer/id6768801860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on the App Store
                </a>
                <a
                  href="https://discord.gg/CduYCuyBSJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-ck-grid/40 text-ck-grid hover:text-ck-text hover:border-ck-grid/70 px-6 py-3 rounded-xl font-medium transition"
                >
                  Join our Discord
                </a>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-4 text-ck-grid text-xs">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
                  Made for iOS
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  Built for enthusiasts
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Privacy first
                </span>
              </div>
            </div>
          </div>

          {/* Mobile: horizontal snap-scroll gallery */}
          <div className="lg:hidden w-full -mx-4 px-8 overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-5 py-4">
            {[
              { src: '/images/screenshot-analyze.png', alt: 'Real-time FFT spectrum analyzer' },
              { src: '/images/screenshot-sessions.png', alt: 'Sessions and recording library' },
              { src: '/images/screenshot-compare.png', alt: 'A/B comparison view' },
            ].map((img) => (
              <div key={img.src} className="snap-center shrink-0 w-[200px]">
                <PhoneFrame>
                  <Image src={img.src} alt={img.alt} fill sizes="200px" className="object-cover object-top" />
                </PhoneFrame>
              </div>
            ))}
          </div>

          {/* Desktop: three-phone stack */}
          <div className="hidden lg:flex flex-1 items-end justify-center gap-4 relative">
            <div className="relative w-[220px] mb-[-20px] opacity-80">
              <PhoneFrame>
                <Image src="/images/screenshot-sessions.png" alt="Clackalyzer Sessions screen" fill sizes="220px" className="object-cover object-top" />
              </PhoneFrame>
            </div>
            <div className="relative w-[240px] z-10">
              <PhoneFrame>
                <Image src="/images/screenshot-analyze.png" alt="Clackalyzer Frequency Analyzer screen" fill sizes="240px" className="object-cover object-top" />
              </PhoneFrame>
            </div>
            <div className="relative w-[220px] mb-[-20px] opacity-80">
              <PhoneFrame>
                <Image src="/images/screenshot-compare.png" alt="Clackalyzer Compare screen" fill sizes="220px" className="object-cover object-top" />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-t border-white/10 bg-[#09090A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

            <div className="flex flex-col gap-2">
              <svg className="text-ck-teal" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/><line x1="3" y1="20" x2="21" y2="20"/>
              </svg>
              <p className="font-semibold text-sm leading-tight">High Resolution<br />FFT Analysis</p>
              <p className="text-ck-grid text-xs">Up to 48kHz / 24-bit</p>
            </div>

            <div className="flex flex-col gap-2">
              <svg className="text-amber-400" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12 Q5 6 8 12 Q11 18 14 12 Q17 6 20 12 Q21 15 22 12"/>
              </svg>
              <p className="font-semibold text-sm leading-tight">Real-time<br />Frequency Monitor</p>
              <p className="text-ck-grid text-xs">See every detail instantly.</p>
            </div>

            <div className="flex flex-col gap-2">
              <svg className="text-ck-red" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
              <p className="font-semibold text-sm leading-tight">Organize &amp; Compare<br />Your Sound Tests</p>
              <p className="text-ck-grid text-xs">Keep your collection in one place.</p>
            </div>

            <div className="flex flex-col gap-2">
              <svg className="text-ck-teal" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
              </svg>
              <p className="font-semibold text-sm leading-tight">Calibrate<br />Your Setup</p>
              <p className="text-ck-grid text-xs">Get accurate results every time.</p>
            </div>

            <div className="flex flex-col gap-2">
              <svg className="text-ck-red" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>
              </svg>
              <p className="font-semibold text-sm leading-tight">Perfect for<br />Keyboard Enthusiasts</p>
              <p className="text-ck-grid text-xs">Click. Clack. Thocc. Analyze.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: '216%' }}>
      <div className="absolute inset-0 rounded-[2.5rem] bg-[#1a1a1a] border-[3px] border-white/20 shadow-2xl overflow-hidden">
        <div className="absolute inset-[3px] rounded-[2.2rem] overflow-hidden bg-black">
          {children}
        </div>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-[#1a1a1a] rounded-b-2xl z-10" />
      </div>
    </div>
  )
}
