import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Clackalyzer',
  description: 'Terms of Service for the Clackalyzer app and website.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-ck-grid text-sm mb-10">Effective date: May 16, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Agreement to Terms</h2>
        <p className="text-ck-grid leading-relaxed">
          By downloading, installing, or using Clackalyzer (&ldquo;the App&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, do not use the App. These terms apply to all users of the App and website operated by Clacker_Studios.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Use of the App</h2>
        <p className="text-ck-grid leading-relaxed mb-4">
          Clackalyzer is a mechanical keyboard acoustic analysis tool for personal and professional use. You agree to use the App only for lawful purposes and in accordance with these Terms.
        </p>
        <p className="text-ck-grid leading-relaxed">You agree not to:</p>
        <ul className="list-disc list-inside text-ck-grid space-y-2 leading-relaxed mt-2">
          <li>Reverse engineer, decompile, or disassemble the App</li>
          <li>Use the App in any way that violates applicable laws or regulations</li>
          <li>Attempt to gain unauthorized access to any systems connected to the App</li>
          <li>Use the App to infringe the intellectual property rights of others</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
        <p className="text-ck-grid leading-relaxed">
          The App, including its design, code, graphics, and content, is owned by Clacker_Studios and protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for personal or professional purposes. No rights are transferred to you beyond this license.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">In-App Purchases</h2>
        <p className="text-ck-grid leading-relaxed">
          Some features of the App may require a purchase. All purchases are processed through Apple&apos;s App Store and are subject to Apple&apos;s terms and conditions. All sales are final unless required otherwise by applicable law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Disclaimer of Warranties</h2>
        <p className="text-ck-grid leading-relaxed">
          The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. Clacker_Studios does not warrant that the App will be error-free, uninterrupted, or free of harmful components. Your use of the App is at your sole risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
        <p className="text-ck-grid leading-relaxed">
          To the fullest extent permitted by law, Clacker_Studios shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App, even if advised of the possibility of such damages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Termination</h2>
        <p className="text-ck-grid leading-relaxed">
          We reserve the right to terminate or suspend access to the App at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
        <p className="text-ck-grid leading-relaxed">
          These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Changes to These Terms</h2>
        <p className="text-ck-grid leading-relaxed">
          We may update these Terms from time to time. We will post any changes on this page with an updated effective date. Continued use of the App after changes constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
        <p className="text-ck-grid leading-relaxed">
          If you have any questions about these Terms, please contact us at{' '}
          <a href="mailto:info@clackalyzer.com" className="text-ck-teal hover:underline">
            info@clackalyzer.com
          </a>.
        </p>
      </section>
    </div>
  )
}
