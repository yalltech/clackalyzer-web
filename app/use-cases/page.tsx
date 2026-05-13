import Link from 'next/link'

export default function UseCasesPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Who Is Clackalyzer For?</h1>
            <p className="text-lg text-ck-grid">
              Clackalyzer serves four distinct communities, each with unique needs for acoustic analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <Link key={useCase.slug} href={useCase.href}>
                <div className="card hover:border-ck-teal hover:shadow-lg transition group h-full">
                  <div className="text-6xl mb-6">{useCase.icon}</div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-ck-teal transition">{useCase.title}</h2>
                  <p className="text-ck-grid mb-6">{useCase.subtitle}</p>
                  <div className="space-y-2 mb-6">
                    {useCase.benefits.map((benefit, i) => (
                      <div key={i} className="text-sm text-ck-grid flex gap-2">
                        <span className="text-ck-red">•</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-ck-red font-semibold group-hover:text-ck-red/80 transition">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const useCases = [
  {
    title: 'Mechanical Keyboard Enthusiasts',
    subtitle: 'Dive deep into acoustic science',
    icon: '🎮',
    slug: 'enthusiasts',
    href: '/use-cases/enthusiasts',
    benefits: [
      'Analyze switches objectively',
      'Understand foam & dampening effects',
      'Identify acoustic resonances',
      'Share findings with the community',
    ],
  },
  {
    title: 'Custom Keyboard Builders',
    subtitle: 'Validate your modifications scientifically',
    icon: '🔨',
    slug: 'builders',
    href: '/use-cases/builders',
    benefits: [
      'Before/after measurement of mods',
      'Test plate material impact',
      'Optimize foam placement',
      'Document build improvements',
    ],
  },
  {
    title: 'Content Creators & Reviewers',
    subtitle: 'Back your reviews with professional data',
    icon: '📺',
    slug: 'reviewers',
    href: '/use-cases/reviewers',
    benefits: [
      'Objective acoustic metrics',
      'Export shareable snapshots',
      'Shareable acoustic snapshots',
      'Build credibility with data',
    ],
  },
  {
    title: 'Manufacturers & QA Teams',
    subtitle: 'Ensure consistent quality across batches',
    icon: '🏭',
    slug: 'manufacturers',
    href: '/use-cases/manufacturers',
    benefits: [
      'Batch consistency testing',
      'Defect detection',
      'Acoustic specification archiving',
      'Production validation',
    ],
  },
]
