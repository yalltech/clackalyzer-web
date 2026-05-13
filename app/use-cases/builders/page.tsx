import Link from 'next/link'

export default function BuildersPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">For Keyboard Designers & Builders</h1>
          <p className="text-xl text-ck-grid mb-12 max-w-3xl">
            Iterate on your PCB, plate, and case designs with real acoustics data. Validate prototypes. Make informed material decisions backed by measurement.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Builders Need Data</h2>
              <p className="text-ck-grid mb-6">
                Designing a keyboard is balancing act: flexi-case? Gasket strips? PCB material? Plate thickness? Clackalyzer lets you measure the impact of each decision in Hz and dB.
              </p>
              <div className="space-y-3">
                {whyBuilders.map((reason, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-ck-red">✓</span>
                    <span className="text-ck-grid">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20">
              <h3 className="font-semibold mb-4">Design Iteration Loop</h3>
              <div className="space-y-3">
                {iterationLoop.map((step, i) => (
                  <div key={i} className="pb-3 border-b border-ck-grid/20 last:border-b-0">
                    <p className="font-mono text-ck-teal text-sm mb-1">Rev {i + 1}</p>
                    <p className="text-ck-grid text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Prototype Testing */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-6">Prototype Testing Workflow</h3>
            <p className="text-ck-grid mb-6">
              From CAD to build to measurement in one seamless loop:
            </p>
            <div className="space-y-4">
              {prototypingSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-ck-red text-ck-navy flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                  <div>
                    <h4 className="font-semibold text-ck-teal mb-1">{step.title}</h4>
                    <p className="text-ck-grid text-sm">{step.description}</p>
                    {step.clackalyzerRole && (
                      <p className="text-ck-amber text-xs mt-2 italic">Clackalyzer: {step.clackalyzerRole}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Material & Design Decisions */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Measuring Design Decisions</h3>
            <p className="text-ck-grid mb-6">
              Every material and structural choice affects acoustics. Use Clackalyzer to quantify the impact:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {designDecisions.map((decision, i) => (
                <div key={i} className="card">
                  <h4 className="font-semibold text-ck-teal mb-3">{decision.decision}</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-ck-grid text-xs font-semibold mb-1">Variable to Test:</p>
                      <p className="text-ck-red text-sm font-mono">{decision.variable}</p>
                    </div>
                    <div>
                      <p className="text-ck-grid text-xs font-semibold mb-1">What Clackalyzer Reveals:</p>
                      <ul className="space-y-1 text-ck-grid text-xs">
                        {decision.reveals.map((item, j) => (
                          <li key={j}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Documentation */}
          <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4 text-ck-teal">📋 Documentation & Sharing</h3>
            <p className="text-ck-grid text-sm mb-6">
              Build a design portfolio with real acoustic evidence. Share with collaborators, investors, or your community:
            </p>
            <div className="space-y-3 text-sm text-ck-grid">
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>Snapshots for design docs:</strong> Include Clackalyzer spectrum plots in your keyboard spec sheets and GitHub repos</span>
              </div>
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>WAV files for review:</strong> Share uncompressed audio with advisors or co-designers for blind listening tests</span>
              </div>
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>Revision archive:</strong> Record each prototype. Track acoustic changes from Rev 1 → Rev 2 → Rev 3</span>
              </div>
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>GB marketing:</strong> Use Clackalyzer snapshots in your Geekhack / IC posts to prove acoustic performance</span>
              </div>
            </div>
          </div>

          {/* Common Decisions */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Common Builder Questions</h3>
            <div className="space-y-6">
              {builderFaqs.map((faq, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-ck-teal mb-2">{faq.q}</h4>
                  <p className="text-ck-grid text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testing Checklist */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4">Builder's Testing Checklist</h3>
            <div className="space-y-2 text-sm text-ck-grid">
              {checklist.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-ck-red">☐</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
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

const whyBuilders = [
  'Quantify the acoustic impact of material choices (PCB FR-4 vs. aluminum, plate FR-4 vs. brass)',
  'Validate that your flexi-mount design achieves the target resonance frequency',
  'Measure your prototype against acoustic targets objectively',
  'Document design iterations: Rev 1 → Rev 2 with before-after acoustic proof',
  'Communicate acoustic performance to GB buyers with real measurements, not marketing hype',
  'Make data-driven decisions on gasket strips, stabilizer mounting, foam placement',
]

const iterationLoop = [
  'Refine CAD based on measurements and feedback',
  'Build updated prototype with new materials or geometry',
  'Record 2-3 keystrokes with standardized settings',
  'Review peak frequency, click timing, resonance peaks against Rev N-1',
  'Adjust design and repeat',
]

const prototypingSteps = [
  {
    title: 'Design Phase',
    description: 'CAD mockup of your PCB, plate, case, and stabilizer mount strategy.',
    clackalyzerRole: 'Not yet. Planning phase.',
  },
  {
    title: 'Prototype Build',
    description: 'Fabricate first sample. Test basic functionality and structural integrity.',
    clackalyzerRole: 'Record baseline acoustics. Document with session notes and reference photo.',
  },
  {
    title: 'Measurement',
    description: 'Hook up Clackalyzer. Record several keystrokes with consistent FFT size and settings.',
    clackalyzerRole: 'Capture peak frequency, click timing, resonance profile. Take snapshots for design docs.',
  },
  {
    title: 'Analysis',
    description: 'Review spectrum. Identify resonances, dampening, or unexpected peaks.',
    clackalyzerRole: 'Use frequency filters to isolate problem bands. Measure against target prototype.',
  },
  {
    title: 'Iteration Decision',
    description: 'Decide: accept, tweak material, or redesign structure.',
    clackalyzerRole: 'Store WAV file in library. Document decision rationale.',
  },
  {
    title: 'Next Revision',
    description: 'Incorporate changes. Build Rev 2 and re-measure with the same protocol.',
    clackalyzerRole: 'Same measurement protocol. Before-after measurements show your optimization worked.',
  },
]

const designDecisions = [
  {
    decision: 'Plate Material',
    variable: 'FR-4 vs. Aluminum vs. Brass',
    reveals: [
      'Resonance frequency shift (material density)',
      'Click character (damping properties)',
      'Sustain length (flex behavior)',
    ],
  },
  {
    decision: 'Gasket Strip Stiffness',
    variable: 'Softer vs. Stiffer strips',
    reveals: [
      'Flex resonance peak frequency',
      'Vertical key travel acoustics',
      'Impact on overall loudness (RMS dB)',
    ],
  },
  {
    decision: 'Case Mounting',
    variable: 'Tray vs. Gasket vs. Flexi-mount',
    reveals: [
      'PCB vibration damping',
      'Fundamental resonance mode',
      'How case material affects sustain',
    ],
  },
  {
    decision: 'Stabilizer Mounting',
    variable: 'PCB-mounted vs. Screw-in vs. Custom',
    reveals: [
      'Spacebar click frequency',
      'Mod key resonance patterns',
      'Rattle or loose coupling (noise)',
    ],
  },
  {
    decision: 'Foam Placement',
    variable: 'Case foam, PCB foam, tape mod',
    reveals: [
      'Overall damping increase (RMS change)',
      'Mid-range smoothing',
      'Loss of desirable resonances',
    ],
  },
  {
    decision: 'PCB Thickness',
    variable: 'Standard vs. Thick vs. Thin',
    reveals: [
      'Flex resonance frequency shift',
      'Structural rigidity (faster clicks)',
      'Click timing (attack/decay)',
    ],
  },
]

const builderFaqs = [
  {
    q: 'How many prototypes should I test before finalizing?',
    a: 'Minimum 2-3 iterations. Rev 1 identifies major issues, Rev 2 validates fixes, Rev 3 tunes details. Use Clackalyzer to quantify improvements at each step.',
  },
  {
    q: 'Should I always target the same frequency as competitors?',
    a: 'No. Your design identity is your target frequency. Measure competitors for reference, but optimize for your intended sonic character. Document your target in your spec sheet.',
  },
  {
    q: 'Can I use Clackalyzer data in my Geekhack IC post?',
    a: 'Absolutely. Snapshots with frequency plots are compelling proof of acoustic design. Include them in your GB post to build buyer confidence.',
  },
  {
    q: 'What FFT size should I use for all my testing?',
    a: 'Pick one and stick with it. 4096 or 8192 are good standards. All your prototypes should use the same FFT size so Rev-to-Rev measurements are consistent.',
  },
  {
    q: 'How do I document acoustic targets for my team?',
    a: 'Record your "reference prototype" and export the snapshots. Store in a shared folder with frequency peak target, click timing range, and acceptable resonance bands. Measure new builds against this baseline.',
  },
]

const checklist = [
  '✓ Define target frequency (peak click frequency for your design)',
  '✓ Document mic placement and distance (use default 20 cm)',
  '✓ Use consistent FFT size across all prototypes (4096 or 8192)',
  '✓ Record baseline with reference switch/stabilizer combination',
  '✓ Take snapshots of peak moments for design docs',
  '✓ Enable noise calibration if testing in non-ideal acoustics',
  '✓ Export WAV files for archival (lossless)',
  '✓ Review Rev N-1 → Rev N acoustic measurements',
  '✓ Document design decision + measurement impact in notebook',
  '✓ Share results with team/collaborators before mass production',
]
