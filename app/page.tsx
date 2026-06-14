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

            {/* In Development badge */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-3 border border-ck-teal/50 text-ck-teal px-6 py-3 rounded-xl font-medium w-fit">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <div>
                  <p className="text-xs leading-none opacity-70">Currently</p>
                  <p className="text-lg font-semibold leading-tight">In Development</p>
                </div>
              </span>
              <a
                href="https://discord.gg/CduYCuyBSJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ck-teal text-black px-6 py-3 rounded-xl font-semibold hover:bg-ck-teal/80 transition"
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

          {/* Phone mockups */}
          <div className="flex-1 flex items-end justify-center gap-3 lg:gap-4 relative">
            {/* Left + right phones — desktop only */}
            <div className="hidden lg:block relative w-[220px] mb-[-20px] opacity-80">
              <PhoneFrame>
                <Image
                  src="/images/screenshot-library.png"
                  alt="Clackalyzer Library screen"
                  fill
                  className="object-cover object-top"
                />
              </PhoneFrame>
            </div>
            {/* Center phone — always visible */}
            <div className="relative w-[200px] lg:w-[240px] z-10">
              <PhoneFrame>
                <Image
                  src="/images/IMG_2096.png"
                  alt="Clackalyzer Frequency Monitor screen"
                  fill
                  className="object-cover object-top"
                />
              </PhoneFrame>
            </div>
            <div className="hidden lg:block relative w-[220px] mb-[-20px] opacity-80">
              <PhoneFrame>
                <Image
                  src="/images/screenshot-settings.png"
                  alt="Clackalyzer Settings screen"
                  fill
                  className="object-cover object-top"
                />
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
