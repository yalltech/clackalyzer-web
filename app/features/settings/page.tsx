import Link from 'next/link'

export default function SettingsPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Settings & Customization</h1>
          <p className="text-xl text-ck-grid mb-12 max-w-3xl">
            Fine-tune audio analysis parameters, choose your visual theme, and configure the app to your needs.
          </p>

          <p className="text-ck-grid mb-12 bg-ck-card/50 p-4 rounded border border-ck-grid/20">
            💡 A <strong>Defaults</strong> button resets all settings to keyboard-optimized values in one tap.
          </p>

          <div className="space-y-8">
            {/* Audio Input */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-ck-teal">🎙️ Audio Input</h2>
              <div className="space-y-3">
                <div className="border-l-2 border-ck-red pl-4">
                  <p className="font-semibold">Input Device</p>
                  <p className="text-ck-grid text-sm mt-1">
                    Select from all available AVAudio ports: Built-in mic, headset, USB, Bluetooth. Switch inputs without restarting.
                  </p>
                </div>
              </div>
            </div>

            {/* Audio Settings */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-ck-amber">🔊 Audio Recording</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">Sample Rate</p>
                    <p className="text-ck-grid text-sm mb-3">How many samples per second are captured.</p>
                    <div className="space-y-1 text-sm font-mono text-ck-red">
                      <p>• 44.1 kHz</p>
                      <p>• 48 kHz <span className="text-ck-grid">(default)</span></p>
                      <p>• 96 kHz</p>
                      <p>• 192 kHz <span className="text-ck-grid">(high-res)</span></p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-semibold mb-2">Bit Depth</p>
                    <p className="text-ck-grid text-sm mb-3">Precision of each audio sample.</p>
                    <div className="space-y-1 text-sm font-mono text-ck-red">
                      <p>• 16-bit <span className="text-ck-grid">(standard)</span></p>
                      <p>• 24-bit <span className="text-ck-grid">(default)</span></p>
                      <p>• 32-bit <span className="text-ck-grid">(lossless)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analysis Settings */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-ck-red">📊 Analysis</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-ck-teal pl-4">
                  <p className="font-semibold mb-2">FFT Size</p>
                  <p className="text-ck-grid text-sm mb-3">
                    Larger = better frequency resolution, slower updates.
                  </p>
                  <div className="text-sm font-mono text-ck-teal">
                    1024 · 2048 · 4096 · 8192 · 16384 <span className="text-ck-grid">(default)</span>
                  </div>
                </div>
                <div className="border-l-2 border-ck-teal pl-4 pt-4">
                  <p className="font-semibold mb-2">Auto-Normalize</p>
                  <p className="text-ck-grid text-sm">
                    Automatically scale amplitude. Useful for comparing recordings at different distances.
                  </p>
                </div>
              </div>
            </div>

            {/* Display */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-ck-amber">👁️ Display Range</h2>
              <p className="text-ck-grid mb-4">
                Customize the frequency axis to focus on the ranges that matter for keyboard analysis.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-ck-navy rounded border border-ck-grid/20">
                  <p className="font-semibold mb-1">Min Frequency</p>
                  <p className="font-mono text-ck-red">20 Hz <span className="text-ck-grid">(default)</span></p>
                </div>
                <div className="p-3 bg-ck-navy rounded border border-ck-grid/20">
                  <p className="font-semibold mb-1">Max Frequency</p>
                  <p className="font-mono text-ck-red">20,000 Hz <span className="text-ck-grid">(default)</span></p>
                </div>
              </div>
            </div>

            {/* Spectrum Display */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-ck-red">📈 Spectrum Display</h2>
              <div className="space-y-4">
                {spectrumSettings.map((setting, i) => (
                  <div key={i} className="border-l-2 border-ck-grid pl-4 pb-4 last:pb-0">
                    <p className="font-semibold mb-1">{setting.name}</p>
                    <p className="text-ck-grid text-sm">{setting.description}</p>
                    {setting.options && (
                      <div className="text-sm font-mono text-ck-amber mt-2">
                        {setting.options}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Noise Calibration */}
            <div className="card bg-ck-card/50 border-ck-grid/30">
              <h2 className="text-2xl font-bold mb-4 text-ck-teal">🔇 Noise Calibration</h2>
              <p className="text-ck-grid mb-4">
                Record a baseline of ambient noise, then subtract it from live analysis.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-ck-navy rounded border border-ck-grid/20 text-sm">
                  <p className="font-semibold mb-1">Status Badge</p>
                  <p className="text-ck-grid">Active (teal) · Bypassed · Not Set (grey)</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Calibrate</strong> — Record 5 seconds of silence to establish baseline</p>
                  <p><strong>Clear Profile</strong> — Delete saved calibration and start fresh</p>
                </div>
              </div>
            </div>

            {/* Appearance */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-ck-amber">🎨 Appearance</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-3">Visual Theme</p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {themes.map((theme, i) => (
                      <div
                        key={i}
                        className="h-12 rounded border-2 border-ck-grid/30 flex items-center justify-center text-xs font-semibold"
                        style={{ backgroundColor: theme.bg, color: theme.text }}
                      >
                        {theme.name === 'Default' && <span className="font-bold">✓</span>}
                        {theme.name !== 'Default' && theme.name.slice(0, 1)}
                      </div>
                    ))}
                  </div>
                  <p className="text-ck-grid text-sm mt-3">
                    Default · Dark · Light · Beige · Neon. Each with distinct accent colors.
                  </p>
                </div>

                <div className="border-t border-ck-grid/20 pt-4">
                  <p className="font-semibold mb-2">Colour Scheme</p>
                  <div className="space-y-1 text-sm text-ck-grid">
                    <p>• System <span className="text-ck-grid">(default)</span> — Follows device settings</p>
                    <p>• Light — Force light mode</p>
                    <p>• Dark — Force dark mode</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-ck-red">💾 Storage</h2>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-ck-navy rounded border border-ck-grid/20">
                  <p className="font-semibold">Recording Count</p>
                  <p className="text-ck-grid">View how many recordings are stored</p>
                </div>
                <div className="p-3 bg-ck-navy rounded border border-ck-grid/20">
                  <p className="font-semibold">Clear All Recordings</p>
                  <p className="text-ck-grid">Delete everything (confirmation required)</p>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">ℹ️ About</h2>
              <div className="space-y-2 text-sm text-ck-grid font-mono">
                <p>App Name: Clackalyzer</p>
                <p>Version: 1.4.0</p>
                <p>Developer: Yall Tech Studios</p>
                <p>Build: [version-specific]</p>
                <p>Bundle ID: com.yalltech.Clackalyzer</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/features" className="btn-secondary">
              Back to Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const spectrumSettings = [
  {
    name: 'Display Mode',
    description: 'How the spectrum is rendered.',
    options: 'Bars (420 logarithmically-spaced) · Line (filled area curve)',
  },
  {
    name: 'dB Range',
    description: 'Vertical axis span. Higher = more detail in quiet regions.',
    options: '60 · 73 (default) · 80 · 90 · 100 dB',
  },
  {
    name: 'Bin Smoothing',
    description: 'Average adjacent frequency bins for cleaner appearance.',
    options: 'Off · Fine · Medium · Broad',
  },
  {
    name: 'Waterfall',
    description: 'Show a scrolling spectrogram below the main chart.',
    options: 'On / Off (default: Off)',
  },
  {
    name: 'Graph Settings Overlay',
    description: 'Display FFT size, sample rate, filter, and mode info without covering the graph.',
    options: 'On / Off (default: Off)',
  },
]

const themes = [
  { name: 'Default', bg: '#000000', text: '#FFFFFF' },
  { name: 'Dark', bg: '#0D1B2A', text: '#FFFFFF' },
  { name: 'Light', bg: '#E2E2DC', text: '#000000' },
  { name: 'Beige', bg: '#413C32', text: '#FFFFFF' },
  { name: 'Neon', bg: '#0A071E', text: '#FFFFFF' },
]
