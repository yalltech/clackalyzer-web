import Link from 'next/link'

export default function RecordingPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Recording & Session Management</h1>
          <p className="text-xl text-ck-grid mb-12 max-w-3xl">
            Capture keyboard audio with comprehensive metadata, then export in multiple formats for sharing and comparison.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Session Configuration</h2>
              <p className="text-ck-grid mb-6">
                When you start a recording, configure these fields to document your keyboard setup:
              </p>
              <div className="space-y-3">
                {sessionFields.map((field, i) => (
                  <div key={i} className="border-l-2 border-ck-red pl-4">
                    <p className="font-semibold text-sm">{field.name}</p>
                    <p className="text-ck-grid text-sm">{field.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20">
              <h3 className="font-semibold mb-4">What Gets Captured</h3>
              <div className="space-y-4">
                {capturedData.map((item, i) => (
                  <div key={i}>
                    <p className="font-mono text-ck-red text-sm">{item.metric}</p>
                    <p className="text-sm text-ck-grid mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-6">Recording Workflow</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {workflow.map((step, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-ck-red text-ck-navy flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="font-semibold">{step.title}</span>
                  </div>
                  <p className="text-sm text-ck-grid">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Live Metrics */}
          <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4">Live Metrics During Recording</h3>
            <p className="text-ck-grid mb-6">
              While recording, watch real-time statistics update as you type:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {metrics.map((metric, i) => (
                <div key={i} className="p-4 bg-ck-navy rounded border border-ck-grid/20">
                  <p className="font-mono text-ck-amber text-sm">{metric.name}</p>
                  <p className="text-ck-grid text-sm mt-1">{metric.meaning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Export Options */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Export & Sharing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="font-semibold mb-2 text-ck-teal">Export as WAV</h4>
                <p className="text-ck-grid text-sm">
                  Lossless 32-bit float audio. Perfect for audio analysis, archiving, or professional use.
                </p>
              </div>
              <div className="card">
                <h4 className="font-semibold mb-2 text-ck-amber">Export as M4A</h4>
                <p className="text-ck-grid text-sm">
                  Compressed format for easier sharing. Great for discussions or comparisons.
                </p>
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

const sessionFields = [
  {
    name: 'Session Name',
    description: 'Required. Give your recording a meaningful name (e.g., "Gateron Yellow Test")',
  },
  {
    name: 'Board / Keyboard',
    description: 'e.g., "KBD67 Lite" — what keyboard are you testing?',
  },
  {
    name: 'Plate Material',
    description: 'e.g., "Polycarbonate" — affects acoustic resonance',
  },
  {
    name: 'Switch Type',
    description: 'e.g., "Gateron Yellow" — the key switch being analyzed',
  },
  {
    name: 'Foams',
    description: 'Multi-select: Case foam, PCB foam, or Tape mod. Track dampening modifications.',
  },
  {
    name: 'Mic Distance',
    description: 'Default "20 cm" — consistent placement for comparable recordings',
  },
  {
    name: 'Notes',
    description: 'Free-form text. Document anything special about the test conditions.',
  },
  {
    name: 'Reference Photo',
    description: 'Optional photo of the keyboard for visual reference',
  },
]

const capturedData = [
  {
    metric: 'WAV File',
    description: '32-bit float mono audio at your configured sample rate (44.1–192 kHz)',
  },
  {
    metric: 'Peak dBFS',
    description: 'Maximum instantaneous sound level during recording',
  },
  {
    metric: 'RMS dBFS',
    description: 'Running average energy level — overall loudness',
  },
  {
    metric: 'Freq Peak Hz',
    description: 'Most prominent frequency detected across the entire recording',
  },
  {
    metric: 'Click ms',
    description: 'Time to first transient (sharp attack) above threshold',
  },
  {
    metric: 'FFT Magnitudes',
    description: 'Averaged frequency spectrum — serialized for fast comparison',
  },
  {
    metric: 'Snapshots',
    description: 'User-created PNG spectrum images taken during recording',
  },
]

const workflow = [
  {
    title: 'Tap Record',
    description: 'Open the session configuration sheet',
  },
  {
    title: 'Configure',
    description: 'Fill in keyboard details, foams, notes, and optional photo',
  },
  {
    title: 'Record',
    description: 'Live spectrum updates as you type. Watch metrics in real-time.',
  },
  {
    title: 'Save',
    description: 'Tap stop. Audio syncs to iCloud automatically.',
  },
]

const metrics = [
  {
    name: 'Peak dBFS',
    meaning: 'Loudest instantaneous sound detected. Watch for clipping.',
  },
  {
    name: 'RMS dBFS',
    meaning: 'Average energy. Indicates overall loudness consistency.',
  },
  {
    name: 'Freq Peak Hz',
    meaning: 'Most energetic frequency bin. Often the click frequency.',
  },
  {
    name: 'Click ms',
    meaning: 'Milliseconds to first sharp transient. Measures tactile feedback response.',
  },
]
