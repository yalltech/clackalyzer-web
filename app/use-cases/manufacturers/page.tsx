import Link from 'next/link'

export default function ManufacturersPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">For Keyboard Manufacturers</h1>
          <p className="text-xl text-ck-grid mb-12 max-w-3xl">
            Validate production batches acoustically. Ensure consistency across manufacturing runs. Document quality benchmarks with objective measurement data.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Manufacturers Need Clackalyzer</h2>
              <p className="text-ck-grid mb-6">
                Manufacturing tolerances affect acoustics. Material sourcing, assembly consistency, and QC procedures impact the final product sound. Measure it, document it, improve it.
              </p>
              <div className="space-y-3">
                {whyManufacturers.map((reason, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-ck-red">✓</span>
                    <span className="text-ck-grid">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20">
              <h3 className="font-semibold mb-4">QC Workflow</h3>
              <div className="space-y-3">
                {qcWorkflow.map((step, i) => (
                  <div key={i} className="pb-3 border-b border-ck-grid/20 last:border-b-0">
                    <p className="font-mono text-ck-teal text-sm mb-1">Stage {i + 1}</p>
                    <p className="text-ck-grid text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Acoustic QC Program */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-6">Building an Acoustic QC Program</h3>
            <p className="text-ck-grid mb-6">
              Establish acoustic specifications and validate each batch against them:
            </p>
            <div className="space-y-4">
              {qaProgram.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-ck-red text-ck-navy flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                  <div>
                    <h4 className="font-semibold text-ck-teal mb-1">{step.title}</h4>
                    <p className="text-ck-grid text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Batch Testing */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Batch Testing Protocol</h3>
            <p className="text-ck-grid mb-6">
              Sample testing strategy for production batches:
            </p>
            <div className="card">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-ck-teal mb-3">Sample Size</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-ck-navy rounded border border-ck-grid/20">
                      <p className="font-mono text-ck-red mb-1">Small Batch</p>
                      <p className="text-ck-grid text-xs">&lt;50 units: Test 5 samples</p>
                    </div>
                    <div className="p-3 bg-ck-navy rounded border border-ck-grid/20">
                      <p className="font-mono text-ck-red mb-1">Medium Batch</p>
                      <p className="text-ck-grid text-xs">50–500 units: Test 10 samples</p>
                    </div>
                    <div className="p-3 bg-ck-navy rounded border border-ck-grid/20">
                      <p className="font-mono text-ck-red mb-1">Large Batch</p>
                      <p className="text-ck-grid text-xs">&gt;500 units: Test 15+ samples</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-ck-teal mb-3">What to Measure</h4>
                  <ul className="space-y-2 text-ck-grid text-sm">
                    {testMetrics.map((metric, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-ck-red">•</span>
                        <span><strong>{metric.metric}:</strong> {metric.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Specification Document */}
          <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4 text-ck-teal">📋 Acoustic Specification Template</h3>
            <p className="text-ck-grid text-sm mb-6">
              Create a spec document for each product model:
            </p>
            <div className="bg-ck-navy rounded p-6 border border-ck-grid/20 text-sm font-mono text-ck-grid space-y-3">
              <div>
                <p className="text-ck-red">Product: KBD67 Lite v2</p>
                <p className="text-ck-amber">Batch: CN-2024-05</p>
              </div>
              <div className="border-t border-ck-grid/20 pt-3">
                <p className="text-ck-teal mb-2">Acoustic Targets (per sample):</p>
                <p>• Peak Frequency: 3.0–3.5 kHz (±0.3 kHz)</p>
                <p>• Click Timing: 8–12 ms (attack duration)</p>
                <p>• RMS Loudness: 40–44 dB (ref 2e-5 Pa)</p>
                <p>• Resonance Peak: &lt;45 dB @ 1.5 kHz</p>
              </div>
              <div className="border-t border-ck-grid/20 pt-3">
                <p className="text-ck-teal mb-2">Pass / Fail Criteria:</p>
                <p>• All 5 metrics within range: PASS</p>
                <p>• 1+ metric out of range: INVESTIGATE</p>
                <p>• 2+ metrics failed: REJECT BATCH</p>
              </div>
            </div>
          </div>

          {/* Deviation Detection */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Detecting Manufacturing Deviations</h3>
            <p className="text-ck-grid mb-6">
              Acoustic changes often signal QC issues before they become customer complaints:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {deviations.map((deviation, i) => (
                <div key={i} className="card">
                  <h4 className="font-semibold text-ck-red mb-3">{deviation.symptom}</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-ck-grid text-xs font-semibold mb-1">Likely Cause:</p>
                      <p className="text-ck-amber text-sm">{deviation.cause}</p>
                    </div>
                    <div>
                      <p className="text-ck-grid text-xs font-semibold mb-1">Action:</p>
                      <p className="text-ck-grid text-xs">{deviation.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4">Documentation & Compliance</h3>
            <p className="text-ck-grid text-sm mb-6">
              Archive acoustic data for traceability and customer support:
            </p>
            <div className="space-y-3 text-sm text-ck-grid">
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>Batch records:</strong> Store snapshot + WAV file for each sample tested. Link to MES or production database.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>Trend analysis:</strong> Monthly acoustic performance report. Identify drift from baseline over time.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>Root cause investigation:</strong> When a batch fails, compare acoustics to previous passing batches. Isolate the change.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span><strong>Customer escalation:</strong> Provide acoustic proof when customers report quality issues. "Your batch shows a 2 dB increase in high-freq content due to foam supplier change."</span>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Manufacturer FAQ</h3>
            <div className="space-y-6">
              {manufacturerFaqs.map((faq, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-ck-teal mb-2">{faq.q}</h4>
                  <p className="text-ck-grid text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Checklist */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4">Implementation Checklist</h3>
            <div className="space-y-2 text-sm text-ck-grid">
              {implChecklist.map((item, i) => (
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

const whyManufacturers = [
  'Validate batch consistency: detect PCB/plate variation before shipment',
  'Correlate acoustic data to manufacturing parameters (supplier, tolerance, assembly process)',
  'Root-cause analysis: when a batch sounds different, measure why',
  'Continuous improvement: use acoustic metrics to optimize assembly QC',
  'Customer satisfaction: ensure every unit meets acoustic spec',
  'Market differentiation: publish acoustic performance data in spec sheets',
]

const qcWorkflow = [
  'Prototype approved: establish acoustic baseline for the model',
  'Production ramp: test first 10 units. Lock in spec limits.',
  'Ongoing sampling: test 5–15 units per batch. Trend the data.',
  'Investigation: if 1+ unit fails, compare to baseline. Find root cause.',
  'Process adjustment: update supplier, assembly procedure, or materials if needed',
]

const qaProgram = [
  {
    title: 'Establish Baseline',
    description: 'Record 3–5 reference units of your model. Define target peak frequency, click timing, loudness range.',
  },
  {
    title: 'Create Specification',
    description: 'Document acceptable ranges for peak frequency, RMS, click timing, resonance peaks. Make it testable.',
  },
  {
    title: 'Define Sampling',
    description: 'Decide: test 1st unit off line, then every Nth unit, or random sampling? Document the procedure.',
  },
  {
    title: 'Train QC Staff',
    description: 'Show your team how to operate Clackalyzer, standardize mic placement and distance, document procedures.',
  },
  {
    title: 'Test & Log',
    description: 'Test each sample. Record snapshot + WAV. Compare to baseline. Log pass/fail in MES or spreadsheet.',
  },
  {
    title: 'Trend & Improve',
    description: 'Monthly review: are batches drifting? Which assembly steps correlate to acoustic changes? Iterate.',
  },
]

const testMetrics = [
  {
    metric: 'Peak Frequency',
    description: 'Most dominant frequency (e.g., 3.0–3.5 kHz). Must be stable across samples.',
  },
  {
    metric: 'Click Timing',
    description: 'Time to first transient (e.g., 8–12 ms). Indicates switch responsiveness.',
  },
  {
    metric: 'RMS Loudness',
    description: 'Overall acoustic energy (e.g., 40–44 dB). Should be consistent batch-to-batch.',
  },
  {
    metric: 'Resonance Profile',
    description: 'Any unwanted peaks (e.g., plate resonance, case ringing). Should be minimal.',
  },
]

const deviations = [
  {
    symptom: 'Peak frequency shifts +0.5 kHz',
    cause: 'PCB supplier change. Thickness or material tolerance shifted.',
    action: 'Contact supplier. Verify specs. Consider alternate source.',
  },
  {
    symptom: 'RMS loudness drops 3 dB',
    cause: 'Foam thickness increased. Stabilizer damping changed. Case mounting loosened.',
    action: 'Inspect assembly procedure. Measure foam thickness. Check stabilizer fit.',
  },
  {
    symptom: 'New resonance peak at 1.2 kHz',
    cause: 'Case material batch. PCB flexing more. Gasket mounting softened.',
    action: 'Compare case sourcing date. Check PCB rigidity. Inspect gasket strip.',
  },
  {
    symptom: 'Click timing increases (slower)',
    cause: 'Switch spring weight changed. Stem tolerance loose. Stabilizer stiff.',
    action: 'Verify switch batch. Measure stem fit. Check stabilizer spec.',
  },
  {
    symptom: 'High-frequency content increases',
    cause: 'Plate thickness reduced. Case reflection increased. Tape mod missing.',
    action: 'Measure plate thickness. Check case assembly. Verify mod application.',
  },
  {
    symptom: 'Unit-to-unit variance increases',
    cause: 'Manual assembly step. Supplier tolerance drift. Environmental factors.',
    action: 'Standardize assembly. Reduce tolerance spread. Control temperature/humidity.',
  },
]

const manufacturerFaqs = [
  {
    q: 'How many units should I test per batch?',
    a: 'Use statistical sampling: small batches (&lt;50): 5 units. Medium (50–500): 10 units. Large (&gt;500): 15+ units. Test first unit, then random samples throughout the batch.',
  },
  {
    q: 'What tolerance is acceptable for peak frequency?',
    a: 'Typical tolerance: ±0.3–0.5 kHz. Define based on your prototype baseline and customer expectations. Tighter tolerance = better consistency but higher manufacturing cost.',
  },
  {
    q: 'Can acoustic data replace mechanical testing?',
    a: 'No, acoustic is complementary. Continue mechanical QC (switch actuation, key cap fit, structural integrity). Acoustic data adds early-warning detection for assembly and material issues.',
  },
  {
    q: 'How do I handle a failed batch?',
    a: 'Don\'t ship. Investigate: compare acoustics to baseline, isolate the change (supplier, process, assembly). Root cause + corrective action before retesting.',
  },
  {
    q: 'Can I publish acoustic specs in my marketing materials?',
    a: 'Yes. Acoustic performance is a competitive advantage. Include snapshot plots in product spec sheets. Differentiates you from competitors without acoustic rigor.',
  },
]

const implChecklist = [
  '✓ Record 3–5 reference units and establish baseline acoustics',
  '✓ Define specification limits for peak frequency, click timing, RMS, resonance',
  '✓ Document sampling strategy (how many units per batch, which ones)',
  '✓ Create QC procedure sheet for your manufacturing line',
  '✓ Train QC staff on Clackalyzer: mic placement, FFT settings, pass/fail criteria',
  '✓ Set up logging system (spreadsheet or MES) to track acoustic data per batch',
  '✓ Establish archive location for snapshots and WAV files (cloud or local storage)',
  '✓ Define investigation protocol: when a unit fails, who investigates and what to check',
  '✓ Plan monthly trend review: identify acoustic drift, correlate to process changes',
  '✓ Communicate acoustic spec to suppliers (PCB, plate, case, foam, switches)',
]
