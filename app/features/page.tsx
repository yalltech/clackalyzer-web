import Link from 'next/link'

export default function FeaturesPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Features</h1>
            <p className="text-lg text-ck-grid">
              Explore the complete toolkit for professional mechanical keyboard acoustic analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link key={feature.slug} href={feature.href}>
                <div className="card hover:border-ck-teal hover:shadow-lg transition group h-full">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-ck-teal transition">{feature.title}</h2>
                  <p className="text-ck-grid mb-4">{feature.description}</p>
                  <span className="text-ck-red font-semibold group-hover:text-ck-red/80 transition">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: 'Spectrum Analyzer',
    description: 'Real-time FFT visualization with multiple display modes, customizable overlays, and peak detection.',
    icon: '📊',
    slug: 'spectrum-analyzer',
    href: '/features/spectrum-analyzer',
  },
  {
    title: 'Recording & Sessions',
    description: 'Capture keyboard audio with comprehensive metadata including switch type, plate material, and custom notes.',
    icon: '🎙️',
    slug: 'recording',
    href: '/features/recording',
  },
  {
    title: 'Recording Library',
    description: 'Organize, search, and playback recordings with waveform view and snapshot gallery.',
    icon: '📚',
    slug: 'library',
    href: '/features/library',
  },
  {
    title: 'Settings & Customization',
    description: 'Fine-tune analysis parameters, audio configuration, and choose from 5 beautiful visual themes.',
    icon: '⚙️',
    slug: 'settings',
    href: '/features/settings',
  },
  {
    title: 'Noise Calibration',
    description: 'Intelligently remove ambient noise in just 5 seconds with live reduction statistics.',
    icon: '🔇',
    slug: 'calibration',
    href: '/features/calibration',
  },
  {
    title: 'Frequency Filter',
    description: 'Apply lo/hi shelf filters with keyboard-optimized presets and fully customizable parameters.',
    icon: '🎚️',
    slug: 'frequency-filter',
    href: '/features/frequency-filter',
  },
]
