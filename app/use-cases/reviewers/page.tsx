import Link from 'next/link'

export default function ReviewersPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">For Content Creators & Reviewers</h1>
          <p className="text-xl text-ck-grid mb-12 max-w-3xl">
            Add scientific credibility to your reviews. Show your audience the data behind your opinions. Stand out with acoustic analysis no other reviewer uses.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Reviewers Love Clackalyzer</h2>
              <p className="text-ck-grid mb-6">
                Reviews are subjective. But adding real acoustic measurements transforms a subjective opinion into credible analysis that your audience respects.
              </p>
              <div className="space-y-3">
                {whyReviewers.map((reason, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-ck-red">✓</span>
                    <span className="text-ck-grid">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20">
              <h3 className="font-semibold mb-4">Content Formats</h3>
              <div className="space-y-4">
                {contentFormats.map((format, i) => (
                  <div key={i} className="pb-4 border-b border-ck-grid/20 last:border-b-0 last:pb-0">
                    <p className="font-mono text-ck-red text-sm mb-1">{format.format}</p>
                    <p className="text-ck-grid text-sm">{format.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Integration */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-6">Using Clackalyzer in Videos</h3>
            <p className="text-ck-grid mb-6">
              Overlay spectrum snapshots in your keyboard review videos. Show the science in real-time:
            </p>
            <div className="space-y-4">
              {videoIntegration.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-ck-red text-ck-navy flex items-center justify-center font-bold flex-shrink-0 text-sm">{i + 1}</div>
                  <div>
                    <h4 className="font-semibold text-ck-teal mb-1">{step.title}</h4>
                    <p className="text-ck-grid text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Framework */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">A Complete Review Framework</h3>
            <p className="text-ck-grid mb-6">
              Structure your reviews with both subjective and objective analysis:
            </p>
            <div className="card">
              <div className="space-y-6">
                {reviewFramework.map((section, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-ck-teal mb-3">{section.section}</h4>
                    <div className="space-y-2 text-sm text-ck-grid">
                      {section.content.map((item, j) => (
                        <p key={j} className="flex gap-2">
                          <span className="text-ck-red">•</span>
                          <span>{item}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Audience Engagement */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Engaging Your Audience</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {audienceIdeas.map((idea, i) => (
                <div key={i} className="card">
                  <h4 className="font-semibold text-ck-teal mb-3">{idea.idea}</h4>
                  <p className="text-ck-grid text-sm mb-4">{idea.description}</p>
                  <div className="text-ck-amber text-xs italic">How: {idea.howTo}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ for Reviewers */}
          <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20 mb-12">
            <h3 className="text-xl font-bold mb-6">Reviewer FAQ</h3>
            <div className="space-y-6">
              {reviewerFaqs.map((faq, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-ck-teal mb-2">{faq.q}</h4>
                  <p className="text-ck-grid text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publishing Checklist */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Pre-Publish Checklist</h3>
            <div className="card">
              <div className="space-y-2 text-sm text-ck-grid">
                {publishChecklist.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-ck-red">☐</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
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

const whyReviewers = [
  'Add objective acoustic data to subjective listening impressions',
  'Create unique content that differentiates you from other keyboard reviewers',
  'Build a scientific reputation with your audience (credibility = subscribers)',
  'Enable blind listening tests with shared WAV files for audience participation',
  'Document switch comparisons with actual frequency measurements',
  'Show the acoustic impact of design choices (case material, plate type, mods)',
]

const contentFormats = [
  {
    format: 'YouTube Reviews',
    description: 'Overlay Clackalyzer snapshots during typing footage. Show peak frequency, click timing, spectral differences.',
  },
  {
    format: 'Reddit Discussion',
    description: 'Post snapshots in r/MechanicalKeyboards with detailed analysis. Back up opinions with data.',
  },
  {
    format: 'Blog Articles',
    description: 'Embedded spectrum plots. Export WAV files for readers to listen and compare.',
  },
  {
    format: 'Discord Communities',
    description: 'Share WAV files for blind listening tests. Discuss frequency peaks and resonance patterns.',
  },
]

const videoIntegration = [
  {
    title: 'Record During Review',
    description: 'Plug in the keyboard. Record typing sounds with Clackalyzer. Capture 2-3 snapshots of peak moments.',
  },
  {
    title: 'Export Snapshots',
    description: 'Save PNG files of the spectrum at peak keystroke. Use these as B-roll or overlay graphics in your video.',
  },
  {
    title: 'Narrate the Data',
    description: '"Notice the peak at 3.2 kHz — that\'s the click frequency. Compared to Board X, this has 6 dB more presence in the high-mids."',
  },
  {
    title: 'Compare Boards Side-by-Side',
    description: 'Record the same switch on two different boards. Show snapshots in split-screen. The visual difference makes the point.',
  },
]

const reviewFramework = [
  {
    section: 'Subjective Impressions (Your Ears)',
    content: [
      'Sound character: bright, warm, punchy, muted?',
      'Feel feedback: smooth, bumpy, crispy, mushy?',
      'Personal reaction: do you love or dislike typing on this?',
    ],
  },
  {
    section: 'Objective Measurements (Clackalyzer)',
    content: [
      'Peak frequency: where the dominant acoustic energy sits',
      'Click timing: how fast the transient attack is',
      'RMS loudness: overall acoustic energy',
      'Frequency profile: which bands are emphasized or suppressed',
    ],
  },
  {
    section: 'Technical Context',
    content: [
      'Keyboard: board, plate, PCB material, mounting',
      'Switch: type, stem material, spring weight',
      'Modifications: any foams, tape mods, stabilizer changes',
      'Environment: room acoustic baseline (if calibrated)',
    ],
  },
  {
    section: 'Verdict',
    content: [
      'Do your subjective feelings match the data?',
      'How does this keyboard compare acoustically to competitors?',
      'Would you recommend this to the community? Why?',
      'What audience would love this sound signature?',
    ],
  },
]

const audienceIdeas = [
  {
    idea: 'Blind Listening Challenge',
    description: 'Share WAV files of 3 keyboards with no labels. Have your audience guess which is which.',
    howTo: 'Export WAV from Clackalyzer library. Post to Patreon or Discord. Reveal answers with spectrum plots.',
  },
  {
    idea: 'Community Vote',
    description: 'Show 2 competing keyboards\' spectra. Ask audience: which would you choose and why?',
    howTo: 'Record finalists, share snapshots, tally votes, reveal data.',
  },
  {
    idea: 'Acoustic Profile Series',
    description: 'Build a gallery of acoustic profiles for popular keyboards. Let fans explore the data.',
    howTo: 'Create a growing archive of Clackalyzer recordings. Link from your website or Discord.',
  },
  {
    idea: 'Question Submissions',
    description: '"Which switch sounds more tactile?" Record both, show the data, publish your scientific answer.',
    howTo: 'Invite audience to submit comparison questions. Feature winners in monthly episodes.',
  },
]

const reviewerFaqs = [
  {
    q: 'Do I need to be a sound engineer to use Clackalyzer?',
    a: 'No. The app is designed for enthusiasts. You need to understand "higher frequency = brighter" and "higher dB = louder," but that\'s it. Let the visual data do the talking.',
  },
  {
    q: 'How do I explain the spectrum to my audience?',
    a: 'Keep it simple: "Peak frequency is where the keyboard clicks loudest. Linear switches peak at 3.2 kHz, clicky at 4.5 kHz. This keyboard is clicky." Show the plot, let visuals convince them.',
  },
  {
    q: 'Can I use Clackalyzer data in monetized content?',
    a: 'Yes. You own your recordings and analysis. Use the snapshots, WAV files, and data freely in your content.',
  },
  {
    q: 'What settings should I use to make reviews comparable?',
    a: 'Standardize: same FFT size (4096 or 8192), same mic distance (20 cm), same switch type when testing boards, same sample rate across all videos. Consistency is key.',
  },
  {
    q: 'How do I make spectrum plots look professional in videos?',
    a: 'Export snapshots from Clackalyzer. Crop them in your editor. Add labels or arrows pointing to key features. They look modern and scientific.',
  },
]

const publishChecklist = [
  '✓ Used consistent FFT size across all keyboards tested',
  '✓ Documented keyboard config (board, switch, mods, plate)',
  '✓ Took clear snapshots of peak moments',
  '✓ Exported WAV files if sharing with audience',
  '✓ Compared subjective impressions to objective data (do they match?)',
  '✓ Credited Clackalyzer in video description or article',
  '✓ Verified no technical errors in frequency/dB claims',
  '✓ Shared your methods with audience (FFT size, mic placement)',
  '✓ Provided context for non-technical viewers',
  '✓ Invited community feedback and discussion',
]
