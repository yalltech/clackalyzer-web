import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-ck-navy to-ck-card py-24 md:py-32">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Mechanical <br />
              <span className="text-ck-red">Keyboard Acoustics</span>, In Your Pocket
            </h1>
            <p className="text-xl text-ck-grid mb-8 max-w-2xl mx-auto">
              Real-time FFT-based spectrum analysis for switch enthusiasts, custom builders, reviewers, and manufacturers. Clackalyzer turns your iPhone or iPad into a professional acoustic lab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/app/clackalyzer/id6479999922"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download on App Store
              </a>
              <Link href="/features" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillar Features */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Clackalyzer?</h2>
          <div className="feature-grid">
            <div className="card hover:border-ck-red/50 transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Spectrum Analysis</h3>
              <p className="text-ck-grid">
                FFT visualization updates 8× per window, giving you live insight into keyboard acoustics as you type.
              </p>
            </div>
            <div className="card hover:border-ck-red/50 transition">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Noise-Subtracted Baseline</h3>
              <p className="text-ck-grid">
                Calibrate ambient noise in 5 seconds, then analyze with live reduction stats showing exactly what's filtered out.
              </p>
            </div>
            <div className="card hover:border-ck-red/50 transition">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">Build Comparison</h3>
              <p className="text-ck-grid">
                Record and compare multiple keyboards side-by-side. Validate foam, plate, and switch modifications objectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-16 md:py-24 bg-ck-card/50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Complete Feature Set</h2>
          <div className="feature-grid">
            {features.map((feature) => (
              <Link
                key={feature.slug}
                href={feature.href}
                className="card hover:border-ck-teal hover:shadow-lg transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-ck-teal transition">{feature.title}</h3>
                <p className="text-ck-grid text-sm">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Built for Your Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                href={useCase.href}
                className="card hover:border-ck-red/50 transition group"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-ck-red transition">{useCase.title}</h3>
                <p className="text-ck-grid text-sm">{useCase.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-ck-red to-red-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ck-navy mb-6">Ready to Analyze?</h2>
          <p className="text-ck-navy/80 text-lg mb-8 max-w-2xl mx-auto">
            Download Clackalyzer now and start exploring the acoustic science of mechanical keyboards.
          </p>
          <a
            href="https://apps.apple.com/app/clackalyzer/id6479999922"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-ck-navy hover:bg-black text-ck-red font-bold rounded-lg transition"
          >
            Get on App Store
          </a>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: 'Spectrum Analyzer',
    description: 'Real-time FFT visualization with customizable display modes, overlays, and peak detection.',
    icon: '📊',
    slug: 'spectrum',
    href: '/features/spectrum-analyzer',
  },
  {
    title: 'Recording & Sessions',
    description: 'Capture keyboard audio with detailed metadata: switch type, plate material, foams, and notes.',
    icon: '🎙️',
    slug: 'recording',
    href: '/features/recording',
  },
  {
    title: 'Recording Library',
    description: 'Organize recordings, playback with waveform view, create snapshots, and compare builds.',
    icon: '📚',
    slug: 'library',
    href: '/features/library',
  },
  {
    title: 'Settings & Themes',
    description: 'Fine-tune analysis parameters. Choose from 5 visual themes including Default, Dark, Neon, and more.',
    icon: '⚙️',
    slug: 'settings',
    href: '/features/settings',
  },
  {
    title: 'Noise Calibration',
    description: 'Remove ambient noise intelligently. 5-second calibration with live reduction statistics.',
    icon: '🔇',
    slug: 'calibration',
    href: '/features/calibration',
  },
  {
    title: 'Frequency Filter',
    description: 'Apply lo/hi shelf filters. Keyboard-optimized defaults with fully customizable parameters.',
    icon: '🎚️',
    slug: 'filter',
    href: '/features/frequency-filter',
  },
]

const useCases = [
  {
    title: 'Enthusiasts',
    description: 'Explore switch acoustics objectively and compare builds scientifically.',
    icon: '🎮',
    slug: 'enthusiasts',
    href: '/use-cases/enthusiasts',
  },
  {
    title: 'Builders',
    description: 'Validate custom modifications with objective acoustic data.',
    icon: '🔨',
    slug: 'builders',
    href: '/use-cases/builders',
  },
  {
    title: 'Reviewers',
    description: 'Back your reviews with professional acoustic analysis and snapshots.',
    icon: '📺',
    slug: 'reviewers',
    href: '/use-cases/reviewers',
  },
  {
    title: 'Manufacturers',
    description: 'QA-test for batch consistency and acoustic specifications.',
    icon: '🏭',
    slug: 'manufacturers',
    href: '/use-cases/manufacturers',
  },
]
