import Link from 'next/link'

export default function CalibrationPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Noise Calibration</h1>
          <p className="text-xl text-ck-grid mb-12 max-w-3xl">
            Intelligently remove ambient noise from your recordings with automatic baseline profiling in just 5 seconds.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Calibrate?</h2>
              <p className="text-ck-grid mb-6">
                Ambient noise (HVAC, traffic, room hum, typing surface vibration) can mask the true acoustic signature of your keyboard. Clackalyzer's noise calibration solves this.
              </p>
              <div className="space-y-3">
                {whyCalibrate.map((reason, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-ck-red">→</span>
                    <span className="text-ck-grid">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20">
              <h3 className="font-semibold mb-4">What Gets Removed</h3>
              <ul className="space-y-2 text-ck-grid text-sm">
                <li className="flex gap-2">
                  <span className="text-ck-red">✓</span>
                  <span>HVAC hum and room vibrations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ck-red">✓</span>
                  <span>Low-frequency rumble</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ck-red">✓</span>
                  <span>Persistent background noise</span>
                </li>
              </ul>
              <div className="border-t border-ck-grid/20 mt-4 pt-4">
                <p className="text-ck-grid text-sm">
                  <strong className="text-ck-teal">Preserved:</strong> Keyboard fundamentals remain unaffected. Click, spring ping, and plate resonance are fully captured.
                </p>
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-6">Calibration Workflow</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {workflow.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-ck-red text-ck-navy flex items-center justify-center font-bold text-lg mb-3 mx-auto">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-ck-grid text-sm">{step.description}</p>
                  {step.duration && (
                    <p className="text-ck-amber text-xs mt-2 font-mono">{step.duration}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Algorithm */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">How It Works (The Science)</h3>
            <div className="space-y-4">
              <p className="text-ck-grid">
                During the 5-second calibration window, Clackalyzer performs a robust noise floor estimation:
              </p>
              <div className="bg-ck-navy rounded-lg p-6 border border-ck-grid/20 space-y-3 text-sm">
                {algorithm.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-mono text-ck-red font-bold">{i + 1}.</span>
                    <span className="text-ck-grid">{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-ck-grid text-sm mt-6">
                <strong className="text-ck-teal">Result:</strong> A per-bin noise profile is saved. On the next FFT frame, the saved floor is subtracted while preserving keyboard signals. The header shows live reduction in dB.
              </p>
            </div>
          </div>

          {/* Live Reduction */}
          <div className="card mb-12">
            <h3 className="text-xl font-bold mb-4 text-ck-teal">📊 Live Reduction Statistics</h3>
            <p className="text-ck-grid mb-6">
              After calibration, the header displays how much noise is being removed:
            </p>
            <div className="bg-ck-navy rounded p-4 border border-ck-grid/20 mb-4">
              <p className="font-mono text-ck-red">Noise Profile: −18.3 dB</p>
            </div>
            <p className="text-ck-grid text-sm">
              This means 18.3 decibels of ambient noise signal is being subtracted from live analysis. Watch this number change as room conditions vary.
            </p>
          </div>

          {/* When to Recalibrate */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4">When to Recalibrate</h3>
            <div className="space-y-3">
              {recalibrateTriggers.map((trigger, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-ck-amber">→</span>
                  <span className="text-ck-grid">{trigger}</span>
                </div>
              ))}
            </div>
            <p className="text-ck-grid text-sm mt-6 italic">
              💡 Profiles are <strong>invalidated automatically</strong> when you change the FFT size, so you'll always be working with compatible calibration data.
            </p>
          </div>

          {/* Managing Profiles */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Managing Your Calibration Profile</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-ck-teal">Enable / Disable</h4>
                <p className="text-ck-grid text-sm">
                  Tap the noise profile button in the header to toggle on/off without deleting calibration data. Useful for comparing with/without noise subtraction.
                </p>
              </div>
              <div className="border-t border-ck-grid/20 pt-4">
                <h4 className="font-semibold mb-2 text-ck-red">Clear Profile</h4>
                <p className="text-ck-grid text-sm">
                  Delete saved calibration data. You can recalibrate anytime.
                </p>
              </div>
              <div className="border-t border-ck-grid/20 pt-4">
                <h4 className="font-semibold mb-2 text-ck-amber">Status Badge</h4>
                <p className="text-ck-grid text-sm">
                  Settings show <span className="font-mono">Active</span> (teal), <span className="font-mono">Bypassed</span>, or <span className="font-mono">Not Set</span> (grey) at a glance.
                </p>
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

const whyCalibrate = [
  'Isolate the true acoustic character of your keyboard',
  'Analyze recordings from different rooms with consistent noise subtraction',
  'Focus on meaningful frequencies (not background noise)',
  'Detect subtle differences between switch types',
  'Improve the SNR (signal-to-noise ratio) of your analysis',
]

const workflow = [
  {
    title: 'Ready',
    description: 'Tap "Calibrate" in Settings or the header',
  },
  {
    title: 'Sample',
    description: 'Record ambient noise silently for 5 seconds',
    duration: '⏱️ 5 sec',
  },
  {
    title: 'Analyze',
    description: 'App computes per-bin noise floor automatically',
  },
  {
    title: 'Done',
    description: 'Profile saved. Auto-dismiss in 1.5 seconds',
  },
]

const algorithm = [
  'Accumulate FFT magnitude frames for 5 seconds',
  'Compute per-bin minimum across all frames (robust noise floor)',
  'Where minimum stayed infinite, fall back to frame-mean',
  'Apply 3-tap smoothing [0.25, 0.5, 0.25] per bin for stability',
  'Save profile + bin count to UserDefaults',
  'On next frame: subtract the per-bin floor while preserving residual',
]

const recalibrateTriggers = [
  'Room conditions change (different building, time of day, etc.)',
  'You move to a quieter or noisier environment',
  'Testing in a new location or different microphone distance',
  'You change the FFT size (profile invalidates automatically)',
  'You want to analyze profiles from different environments',
]
