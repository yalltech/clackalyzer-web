import Link from 'next/link'

export default function LibraryPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Recording Library</h1>
          <p className="text-xl text-ck-grid mb-12 max-w-3xl">
            Organize, search, and playback your recordings. Build a personal library of keyboard acoustic profiles.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Library Features</h2>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-ck-red">✓</span>
                    <span className="text-ck-grid">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20">
              <h3 className="font-semibold mb-4">Search & Sort</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-mono text-ck-red text-sm">Search</span>
                  <p className="text-sm text-ck-grid mt-1">By session name or notes</p>
                </div>
                <div className="border-t border-ck-grid/20 pt-3">
                  <span className="font-mono text-ck-red text-sm">Sort By</span>
                  <div className="text-sm text-ck-grid mt-1 space-y-1">
                    <p>• Date (newest first)</p>
                    <p>• Name (A–Z)</p>
                    <p>• Peak level (loudest)</p>
                    <p>• File size</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recording List */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-6">Recording List View</h3>
            <p className="text-ck-grid mb-6">
              Each recording shows at a glance:
            </p>
            <div className="bg-ck-navy rounded p-6 border border-ck-grid/20">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">KBD67 Lite — Gateron Yellow</p>
                    <p className="text-sm text-ck-grid">May 10, 2026 at 2:45 PM</p>
                  </div>
                  <div className="text-right text-sm text-ck-grid">
                    <div className="flex gap-3">
                      <span>Peak: 65.2 dB</span>
                      <span>RMS: 42.1 dB</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-ck-grid">
                  <p>Plate: Polycarbonate | Foams: Case + PCB | Freq Peak: 3.2 kHz | Click: 12 ms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Playback */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Playback & Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {playbackFeatures.map((feature, i) => (
                <div key={i} className="card">
                  <h4 className="font-semibold mb-2 text-ck-teal">{feature.name}</h4>
                  <p className="text-ck-grid text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Snapshots */}
          <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4">Spectrum Snapshots</h3>
            <p className="text-ck-grid mb-6">
              While recording, you can take spectrum snapshots (PNG images) to freeze the moment. Each recording displays its snapshots in a horizontal scroll gallery.
            </p>
            <ul className="space-y-2 text-ck-grid text-sm">
              <li className="flex gap-2">
                <span className="text-ck-red">•</span>
                <span>Tap a snapshot to view fullscreen</span>
              </li>
              <li className="flex gap-2">
                <span className="text-ck-red">•</span>
                <span>Swipe to page through your captured moments</span>
              </li>
              <li className="flex gap-2">
                <span className="text-ck-red">•</span>
                <span>Share snapshots directly from the app</span>
              </li>
            </ul>
          </div>

          {/* Trash */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-4">Trash & Recovery</h3>
            <p className="text-ck-grid mb-4">
              Deleted snapshots move to trash and are automatically purged after 30 days.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span className="text-ck-grid"><strong>Trash section</strong> appears above recordings only when deleted items exist</span>
              </div>
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span className="text-ck-grid">Collapsed by default; expand to see trash items with countdown</span>
              </div>
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span className="text-ck-grid"><strong>Reveal button</strong> shows the trash image before permanent deletion</span>
              </div>
              <div className="flex gap-3">
                <span className="text-ck-amber">→</span>
                <span className="text-ck-grid"><strong>Restore</strong> or <strong>Delete Forever</strong> actions available</span>
              </div>
            </div>
          </div>

          {/* Recording Actions */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Recording Actions</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {actions.map((action, i) => (
                <div key={i} className="card">
                  <h4 className="font-semibold mb-2 text-ck-red">{action.name}</h4>
                  <p className="text-ck-grid text-sm">{action.description}</p>
                </div>
              ))}
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

const features = [
  'Comprehensive recording list with metadata (date, switch, board, peak level)',
  'Search by session name or notes',
  'Sort by date, name, peak level, or file size',
  'Playback with waveform visualization',
  'Play / pause and loop controls',
  'Live metrics readout during playback',
  'Spectrum snapshot gallery per recording',
  'Share WAV or compressed M4A format',
  'Edit metadata and update photos',
  'Delete recordings with confirmation',
  'Trash management with 30-day auto-purge',
  'Restore or permanently delete snapshots',
]

const playbackFeatures = [
  {
    name: 'Waveform View',
    description: '600-sample downsampled audio waveform. Visualize the recording shape.',
  },
  {
    name: 'Playback Controls',
    description: 'Play/pause toggle, loop mode, animated playhead tracking.',
  },
  {
    name: 'Live Metrics',
    description: 'Peak dBFS, RMS, Freq Peak, and Click timing update as you play.',
  },
  {
    name: 'Share Options',
    description: 'Export and share in WAV (lossless) or M4A (compressed) formats.',
  },
  {
    name: 'Metadata Editor',
    description: 'Update session details, swap photos, edit notes after recording.',
  },
]

const actions = [
  {
    name: 'Share WAV',
    description: 'Export lossless 32-bit audio for professionals and archiving',
  },
  {
    name: 'Share M4A',
    description: 'Convert and share compressed format for easy discussion',
  },
  {
    name: 'Edit Metadata',
    description: 'Update keyboard config, notes, photo, and other details',
  },
  {
    name: 'Delete',
    description: 'Remove recording with confirmation. Frees storage.',
  },
  {
    name: 'View Snapshots',
    description: 'Browse spectrum snapshots taken during recording',
  },
  {
    name: 'Playback',
    description: 'Listen to the recorded audio with live metrics',
  },
]
