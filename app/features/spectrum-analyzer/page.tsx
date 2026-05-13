import Link from 'next/link'

export default function SpectrumAnalyzerPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Live Spectrum Analyzer</h1>
          <p className="text-xl text-ck-grid mb-12 max-w-3xl">
            Real-time FFT-based spectrum analysis that runs at up to 8× overlap per FFT window. Visualize mechanical keyboard acoustics with scientific precision.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Capabilities</h2>
              <ul className="space-y-3">
                {capabilities.map((cap, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-ck-red">✓</span>
                    <span className="text-ck-grid">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20">
              <h3 className="font-semibold mb-4">Display Modes</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-mono text-ck-red">Bars</span>
                  <p className="text-sm text-ck-grid">420 logarithmically-spaced bars with smooth animations</p>
                </div>
                <div>
                  <span className="font-mono text-ck-red">Line</span>
                  <p className="text-sm text-ck-grid">Filled area curve for smooth frequency visualization</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4">Overlays & Visualization</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <span className="font-semibold text-ck-amber">Average Curve</span>
                <p className="text-sm text-ck-grid mt-1">EMA trail showing smoothed frequency response over time</p>
              </div>
              <div>
                <span className="font-semibold text-ck-amber">Peak Hold</span>
                <p className="text-sm text-ck-grid mt-1">Configurable hold time (Off, 1s, 5s, 10s, 15s, ∞)</p>
              </div>
              <div>
                <span className="font-semibold text-ck-amber">Max Hold Trace</span>
                <p className="text-sm text-ck-grid mt-1">White line showing cumulative maximum per bin</p>
              </div>
              <div>
                <span className="font-semibold text-ck-amber">Waterfall</span>
                <p className="text-sm text-ck-grid mt-1">Spectrogram scrolling upward showing frequency changes over time</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/features" className="btn-secondary">
              Back to Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const capabilities = [
  'FFT-based real-time visualization',
  'Selectable resolution (1024–16384 FFT size)',
  'Frequency range: 20 Hz–20 kHz (adjustable)',
  'Pinch-to-zoom for frequency range control',
  'Cursor readout showing Hz + dBFS at any frequency',
  'Fullscreen mode for detailed analysis',
  'Settings overlay without covering main display',
  'Logarithmic frequency scale for accurate representation',
]
