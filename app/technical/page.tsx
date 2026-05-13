export default function TechnicalPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Specifications</h1>
          <p className="text-lg text-ck-grid mb-12">
            Detailed technical requirements and system specifications for Clackalyzer.
          </p>

          <div className="space-y-12">
            {/* System Requirements */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Platform</h3>
                  <p className="text-ck-grid">iOS 17.0+</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Devices</h3>
                  <p className="text-ck-grid">iPhone & iPad (all sizes)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Orientations</h3>
                  <p className="text-ck-grid">Portrait & Landscape</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Bundle ID</h3>
                  <p className="font-mono text-ck-grid text-sm">com.yalltech.Clackalyzer</p>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Frameworks & Technologies</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {frameworks.map((fw, i) => (
                  <div key={i} className="p-3 bg-ck-navy rounded border border-ck-grid/20">
                    <p className="font-mono text-sm text-ck-teal">{fw}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Audio Processing */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Audio Processing</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">FFT Sizes</h3>
                  <p className="text-ck-grid font-mono text-sm">1024 · 2048 · 4096 · 8192 · 16384 (default 16384)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sample Rates</h3>
                  <p className="text-ck-grid font-mono text-sm">44.1 kHz · 48 kHz · 96 kHz · 192 kHz (default 48 kHz)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Overlap Factor</h3>
                  <p className="text-ck-grid">8× (hop = N/8, capped at 256 samples)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">FFT Algorithm</h3>
                  <p className="text-ck-grid">Hann-windowed real-to-complex DFT via Accelerate (vDSP)</p>
                </div>
              </div>
            </div>

            {/* Storage & Sync */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Storage & Sync</h2>
              <div className="space-y-3">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-sm">SwiftData</p>
                    <p className="text-ck-grid text-sm">iCloud CloudDocuments</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">WAV & PNG Files</p>
                    <p className="text-ck-grid text-sm">iCloud Drive</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Preferences</p>
                    <p className="text-ck-grid text-sm">Local (UserDefaults)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Permissions */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Required Permissions</h2>
              <div className="space-y-4">
                {permissions.map((perm, i) => (
                  <div key={i} className="border-b border-ck-grid/20 last:border-0 pb-4 last:pb-0">
                    <h3 className="font-semibold mb-1">{perm.name}</h3>
                    <p className="text-ck-grid text-sm">{perm.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy */}
            <div className="card bg-ck-red/5 border-ck-red/20">
              <h2 className="text-2xl font-bold mb-4 text-ck-red">Privacy & Data</h2>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-ck-red">✓</span>
                  <span className="text-ck-grid">No network requests — fully offline</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ck-red">✓</span>
                  <span className="text-ck-grid">No analytics or tracking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ck-red">✓</span>
                  <span className="text-ck-grid">No user accounts required</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ck-red">✓</span>
                  <span className="text-ck-grid">No advertisements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const frameworks = [
  'SwiftUI',
  'SwiftData',
  'AVFoundation',
  'Accelerate (vDSP)',
  'CoreAudio',
  'iCloud',
]

const permissions = [
  {
    name: 'Microphone',
    reason: 'Required for live spectrum analysis and recording keyboard audio.',
  },
  {
    name: 'Camera',
    reason: 'Optional — allows capturing reference photos during recording sessions.',
  },
  {
    name: 'Photo Library',
    reason: 'Saves spectrum snapshots to your library and allows attaching existing photos to recordings.',
  },
]
