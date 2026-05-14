export default function AboutPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-max max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Clackalyzer</h1>

          <div className="space-y-12">
            {/* Mission */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-ck-grid mb-4">
                Democratize professional acoustic analysis for the mechanical keyboard community. We believe that objective, scientific data should be accessible to enthusiasts, builders, reviewers, and manufacturers alike.
              </p>
              <p className="text-lg text-ck-grid">
                Clackalyzer transforms the iPhone and iPad into portable acoustic laboratories—no external hardware required.
              </p>
            </div>

            {/* Story */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Why We Built This</h2>
              <p className="text-lg text-ck-grid mb-4">
                The mechanical keyboard community has grown exponentially, yet discussions about keyboard sound quality often rely on subjective descriptions. Terms like "thocky," "clacky," and "pingy" are fun, but they lack scientific rigor.
              </p>
              <p className="text-lg text-ck-grid mb-4">
                Professional acoustic analysis tools exist—but they're expensive, complex, and not designed for keyboard enthusiasts. Clackalyzer changes that.
              </p>
              <p className="text-lg text-ck-grid">
                By leveraging modern iOS capabilities (AVFoundation, Accelerate, SwiftUI), we've created a tool that's both powerful and intuitive. Professional accuracy meets consumer accessibility.
              </p>
            </div>

            {/* Features Highlight */}
            <div className="bg-ck-card rounded-lg p-8 border border-ck-grid/20">
              <h3 className="text-xl font-bold mb-4">Built on Cutting-Edge Technologies</h3>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-ck-red">•</span>
                  <span className="text-ck-grid"><strong>FFT-based spectrum analysis</strong> using Accelerate (vDSP)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ck-red">•</span>
                  <span className="text-ck-grid"><strong>SwiftData</strong> for robust local recording storage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ck-red">•</span>
                  <span className="text-ck-grid"><strong>AVFoundation</strong> for real-time audio capture</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ck-red">•</span>
                  <span className="text-ck-grid"><strong>SwiftUI</strong> for responsive, beautiful interfaces</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ck-red">•</span>
                  <span className="text-ck-grid"><strong>iCloud sync</strong> for seamless cross-device access</span>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Yall Tech Studios</h2>
              <p className="text-lg text-ck-grid mb-4">
                Clackalyzer is developed by Yall Tech Studios, a small team passionate about mechanical keyboards and audio science.
              </p>
              <p className="text-lg text-ck-grid">
                We believe in building tools that empower communities. Clackalyzer is designed with the end user in mind: no subscriptions, no analytics, no ads—just pure functionality.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-ck-card/50 rounded-lg p-8 border border-ck-grid/20">
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <p className="text-ck-grid mb-6">
                Have questions, feedback, or partnership ideas? We'd love to hear from you.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-ck-grid mb-1">Email</p>
                  <a href="mailto:support@clackalyzer.com" className="font-mono text-ck-teal hover:text-ck-red transition">
                    support@clackalyzer.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-ck-grid mb-1">GitHub</p>
                  <a href="#" className="font-mono text-ck-teal hover:text-ck-red transition">
                    github.com/yalltech
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-lg text-ck-grid mb-6">Ready to start analyzing?</p>
              <a
                href="https://apps.apple.com/app/clackalyzer/id6479999922"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download on App Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
