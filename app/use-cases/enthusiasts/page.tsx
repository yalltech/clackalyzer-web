import Link from 'next/link'

export default function EnthusiastsPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">For Keyboard Enthusiasts</h1>
          <p className="text-xl text-ck-grid mb-12 max-w-3xl">
            Deep-dive into switch science. Compare acoustics across boards, switches, and mods. Build your collection with data-driven insights.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Enthusiasts Love Clackalyzer</h2>
              <p className="text-ck-grid mb-6">
                Mechanical keyboards are about feel, sound, and community. Clackalyzer turns your ears into instruments — measure what makes a keyboard sing.
              </p>
              <div className="space-y-3">
                {whyEnthusiasts.map((reason, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-ck-red">✓</span>
                    <span className="text-ck-grid">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20">
              <h3 className="font-semibold mb-4">The Enthusiast Workflow</h3>
              <div className="space-y-4">
                {workflow.map((step, i) => (
                  <div key={i} className="pb-4 border-b border-ck-grid/20 last:border-b-0 last:pb-0">
                    <p className="font-mono text-ck-red text-sm mb-1">Step {i + 1}</p>
                    <p className="text-ck-grid text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Common Questions */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-6">Common Enthusiast Questions</h3>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-ck-teal mb-2">{faq.q}</h4>
                  <p className="text-ck-grid text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Collection Comparison */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Building Your Acoustic Profile Library</h3>
            <p className="text-ck-grid mb-6">
              The real power is comparing your collection. Record the same switch type across 5 different boards, then stack the waveforms side-by-side:
            </p>
            <div className="card">
              <div className="space-y-4">
                <div className="flex gap-4 items-center text-sm">
                  <span className="font-mono text-ck-red font-bold">1.</span>
                  <span className="text-ck-grid"><strong>Record each board</strong> with standardized settings (20 cm mic distance, same switch type, minimal mods)</span>
                </div>
                <div className="flex gap-4 items-center text-sm">
                  <span className="font-mono text-ck-red font-bold">2.</span>
                  <span className="text-ck-grid"><strong>Use consistent FFT size</strong> across all recordings (4096 recommended) for fair frequency resolution</span>
                </div>
                <div className="flex gap-4 items-center text-sm">
                  <span className="font-mono text-ck-red font-bold">3.</span>
                  <span className="text-ck-grid"><strong>Take snapshots</strong> during recording to freeze peak moments and compare visual spectra</span>
                </div>
                <div className="flex gap-4 items-center text-sm">
                  <span className="font-mono text-ck-red font-bold">4.</span>
                  <span className="text-ck-grid"><strong>Export WAV</strong> files for archival. Build a personal library you can re-analyze with new filters later</span>
                </div>
                <div className="flex gap-4 items-center text-sm">
                  <span className="font-mono text-ck-red font-bold">5.</span>
                  <span className="text-ck-grid"><strong>Share snapshots</strong> to Discord, Reddit, or your community — show the science behind your love for a board</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mod Testing */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4">Testing Mods & Modifications</h3>
            <p className="text-ck-grid text-sm mb-6">
              Want to know if that tape mod actually changed your board's sound? Use Clackalyzer to measure before and after:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {modTests.map((test, i) => (
                <div key={i} className="p-4 bg-ck-navy rounded border border-ck-grid/20">
                  <p className="font-semibold text-ck-teal mb-2">{test.mod}</p>
                  <p className="text-ck-grid text-xs space-y-2">
                    {test.whatToWatch.split(' | ').map((item, j) => (
                      <span key={`${i}-${j}`} className="block">• {item}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Switch Deep Dive */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">The Switch Deep Dive</h3>
            <p className="text-ck-grid mb-6">
              Linear, tactile, clicky — each switch type has a unique acoustic signature. Here's what to listen for (and measure):
            </p>
            <div className="space-y-4">
              {switchTypes.map((switchType, i) => (
                <div key={i} className="card">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-ck-teal mb-2">{switchType.type}</h4>
                      <p className="text-ck-grid text-sm mb-3">{switchType.description}</p>
                      <div className="text-xs font-mono text-ck-red space-y-1">
                        {switchType.metrics.map((metric, j) => (
                          <p key={j}>→ {metric}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community & Sharing */}
          <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4 text-ck-teal">📊 Share Your Results</h3>
            <p className="text-ck-grid text-sm mb-6">
              Clackalyzer WAV exports and snapshots are perfect for Reddit, Discord, and YouTube:
            </p>
            <ul className="space-y-2 text-ck-grid text-sm">
              <li className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>r/MechanicalKeyboards:</strong> Post snapshots in your collection photos for "click science"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>Discord Communities:</strong> Share WAV files with switch enthusiasts for blind listening tests</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>YouTube Videos:</strong> Overlay Clackalyzer snapshots in your keyboard review videos to show real audio data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>Personal Blog:</strong> Archive your collection's acoustic profiles and compare over time</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/use-cases" className="btn-secondary">
              Back to Use Cases
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const whyEnthusiasts = [
  'Measure the acoustic character of every keyboard in your collection',
  'Compare switches objectively — linear vs. tactile vs. clicky with data',
  'Document the impact of mods (tape, foam, stabilizer changes)',
  'Share real audio science with your community on Reddit and Discord',
  'Discover which combinations of boards, plates, and switches create your perfect sound',
  'Build a personal library of keyboard acoustic profiles archived in lossless WAV',
]

const workflow = [
  'Record a few keystrokes on a board or switch',
  'Watch live spectrum update in real-time on your phone',
  'Take snapshots of peak moments for sharing',
  'Compare with other boards in your library',
  'Export WAV or share snapshot to show your friends the science',
]

const faqs = [
  {
    q: 'Should I use the same FFT size for all my recordings?',
    a: 'Yes. Stick to 4096 or 8192 for all recordings in a comparison set. This ensures the frequency resolution is identical and you\'re comparing apples-to-apples.',
  },
  {
    q: 'What mic distance should I use?',
    a: 'The default 20 cm is a good standard. Keep it consistent across all recordings. You\'re testing the keyboard, not the room, so reproducibility matters more than absolute distance.',
  },
  {
    q: 'Do I need noise calibration if I record in a quiet room?',
    a: 'Even quiet rooms have HVAC hum or keyboard-to-desk vibration. A 5-second calibration ensures you\'re measuring keyboard acoustics, not room acoustics. Highly recommended.',
  },
  {
    q: 'Can I compare recordings from different rooms?',
    a: 'Yes, but use the 200–8 kHz frequency filter preset to normalize room effects. Same FFT size is essential. Clackalyzer makes fair comparisons possible despite different acoustic environments.',
  },
  {
    q: 'How do I share my recordings with friends?',
    a: 'Export as WAV (lossless) for serious analysis or M4A (compressed) for casual sharing. Share snapshots directly from the app or export them for your YouTube videos and Reddit posts.',
  },
]

const modTests = [
  {
    mod: 'Tape Mod',
    whatToWatch: 'Peak frequency shifts down | RMS levels drop | High-freq content reduces',
  },
  {
    mod: 'Case/PCB Foam',
    whatToWatch: 'Overall damping increases | Click definition softens | Resonance peaks smooth out',
  },
  {
    mod: 'Stabilizer Swap',
    whatToWatch: 'Spacebar pitch changes | Frequency peak shifts | New resonance modes appear',
  },
  {
    mod: 'Plate Swap',
    whatToWatch: 'Flex resonance changes | Fundamental frequency shifts | Sustain lengthens or shortens',
  },
]

const switchTypes = [
  {
    type: 'Linear Switches',
    description: 'Smooth, no bump. Clean acoustic signature with a prominent click.',
    metrics: [
      'Peak frequency: 2.5–3.5 kHz (the "click")',
      'RMS steady and consistent throughout keystroke',
      'Minimal mid-range resonance variation',
      'Quick attack, fast decay',
    ],
  },
  {
    type: 'Tactile Switches',
    description: 'Bumpy, feedback at actuation. More complex frequency profile.',
    metrics: [
      'Two peaks: bump resonance (1–2 kHz) + click (3–4 kHz)',
      'RMS spike at bump point, then spike again at click',
      'Longer sustain due to bump vibration',
      'Visibly different FFT than linears in same board',
    ],
  },
  {
    type: 'Clicky Switches',
    description: 'Audible click mechanism. High-frequency dominant signature.',
    metrics: [
      'Peak frequency: 4–5 kHz (clicker bar resonance)',
      'Bright high-frequency content above 6 kHz',
      'RMS peaks higher than linears',
      'Distinctive waveform with visible click transient',
    ],
  },
]
