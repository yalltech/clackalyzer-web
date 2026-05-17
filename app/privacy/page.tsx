import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Clackalyzer',
  description: 'Privacy Policy for the Clackalyzer app and website.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-ck-grid text-sm mb-10">Effective date: May 16, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <p className="text-ck-grid leading-relaxed">
          Clackalyzer (&ldquo;the App&rdquo;) is a mechanical keyboard acoustic analysis tool developed by Yall Tech Studios. We are committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
        <h3 className="font-semibold mb-2">Microphone / Audio Data</h3>
        <p className="text-ck-grid leading-relaxed mb-4">
          Clackalyzer uses your device&apos;s microphone solely to perform real-time acoustic analysis. Audio is processed entirely on-device and is never transmitted to our servers or stored anywhere outside your device.
        </p>
        <h3 className="font-semibold mb-2">Usage Data</h3>
        <p className="text-ck-grid leading-relaxed mb-4">
          We may collect anonymous, aggregated usage data (such as crash reports and feature usage statistics) to improve the App. This data cannot be used to identify you personally.
        </p>
        <h3 className="font-semibold mb-2">Data You Provide</h3>
        <p className="text-ck-grid leading-relaxed">
          If you contact us by email, we retain your email address and message content only to respond to your inquiry.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-ck-grid space-y-2 leading-relaxed">
          <li>To provide and improve the App&apos;s features</li>
          <li>To diagnose bugs and crashes</li>
          <li>To respond to customer support inquiries</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Data Sharing</h2>
        <p className="text-ck-grid leading-relaxed">
          We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share anonymized, aggregated data that cannot identify any individual.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
        <p className="text-ck-grid leading-relaxed">
          The App is distributed through Apple&apos;s App Store. Apple may collect certain data in accordance with their own privacy policy. We are not responsible for Apple&apos;s data practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
        <p className="text-ck-grid leading-relaxed">
          Audio data is never stored or transmitted. Crash and usage data is retained only as long as necessary to diagnose and fix issues, after which it is deleted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Children&apos;s Privacy</h2>
        <p className="text-ck-grid leading-relaxed">
          Clackalyzer is not directed at children under 13. We do not knowingly collect personal information from children under 13.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
        <p className="text-ck-grid leading-relaxed">
          Depending on your location, you may have the right to access, correct, or delete personal information we hold about you. To exercise these rights, contact us at the address below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
        <p className="text-ck-grid leading-relaxed">
          We may update this Privacy Policy from time to time. We will post any changes on this page with an updated effective date. Continued use of the App after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
        <p className="text-ck-grid leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:info@clackalyzer.com" className="text-ck-teal hover:underline">
            info@clackalyzer.com
          </a>.
        </p>
      </section>
    </div>
  )
}
