import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Kintaraa',
  description: 'Kintaraa Privacy Policy - Learn how we protect your data and privacy',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 lg:p-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">
              <strong>Last Updated:</strong> November 16, 2025
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Effective Date:</strong> November 16, 2025
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Kintaraa (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our mobile application (the &quot;App&quot;)
              and related services.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Your privacy and safety are our top priorities.</strong> We understand the sensitive nature
              of gender-based violence (GBV) support and have implemented comprehensive measures to protect your
              identity, data, and wellbeing.
            </p>
            <p className="text-gray-700">
              By using Kintaraa, you agree to the collection and use of information in accordance with this policy.
              If you do not agree with our policies and practices, please do not use our App.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Account Information:</strong> When you create an account, we collect your name (or pseudonym
                if you choose anonymity), email address, phone number (optional), and password.
              </li>
              <li>
                <strong>Profile Information:</strong> User type (survivor or service provider), demographic information
                (optional), location (city/region, not precise GPS), preferred language, and profile photo (optional).
              </li>
              <li>
                <strong>Incident Reports:</strong> Details you provide when reporting incidents, including incident
                description, date/time, location (optional), type of violence, and requested services.
              </li>
              <li>
                <strong>Messages and Communications:</strong> Messages you send through the App to service providers
                or support staff, including text, images, and attachments.
              </li>
              <li>
                <strong>Provider Information:</strong> For service providers - professional credentials, licenses,
                specializations, organization details, availability, and case acceptance criteria.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Device Information:</strong> Device type, operating system, unique device identifiers,
                mobile network information, and App version.
              </li>
              <li>
                <strong>Usage Data:</strong> App features used, time spent on pages, navigation paths, interaction
                with features, and error logs.
              </li>
              <li>
                <strong>Log Data:</strong> IP address, access times, pages viewed, and actions taken within the App.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Information We Do NOT Collect</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Precise GPS location (we only collect city/region level)</li>
              <li>Contacts from your device</li>
              <li>Photos or media from your device (unless you explicitly share them)</li>
              <li>Browsing history outside the App</li>
              <li>Financial information (payments are handled by third-party processors)</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>

            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Provide Services:</strong> Connect survivors with appropriate service providers, facilitate
                communication, coordinate care, and deliver support resources.
              </li>
              <li>
                <strong>Improve Our App:</strong> Analyze usage patterns, fix bugs, develop new features, and
                enhance user experience.
              </li>
              <li>
                <strong>Safety and Security:</strong> Detect fraud, prevent abuse, ensure user safety, and maintain
                platform integrity.
              </li>
              <li>
                <strong>Communication:</strong> Send notifications about case updates, new messages, important
                announcements, and service improvements.
              </li>
              <li>
                <strong>Legal Compliance:</strong> Comply with applicable laws, respond to legal requests, and
                protect our rights and the rights of our users.
              </li>
              <li>
                <strong>Research and Analytics:</strong> Conduct anonymized research to improve GBV support services
                and contribute to broader understanding of service delivery (always with de-identified data).
              </li>
            </ul>
          </section>

          {/* Data Security & Encryption */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security & Encryption</h2>
            <p className="text-gray-700 mb-4">
              We implement industry-leading security measures to protect your information:
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>End-to-End Encryption:</strong> Messages between survivors and providers are encrypted
                end-to-end, meaning only you and your provider can read them.
              </li>
              <li>
                <strong>Data Encryption at Rest:</strong> All stored data is encrypted using AES-256 encryption.
              </li>
              <li>
                <strong>Secure Transmission:</strong> All data transmitted between your device and our servers
                uses TLS 1.3 encryption.
              </li>
              <li>
                <strong>Access Controls:</strong> Strict role-based access controls ensure only authorized
                personnel can access specific data.
              </li>
              <li>
                <strong>Regular Security Audits:</strong> We conduct regular security assessments and penetration
                testing.
              </li>
              <li>
                <strong>Secure Infrastructure:</strong> Our servers are hosted on secure, SOC 2 compliant
                infrastructure.
              </li>
            </ul>

            <p className="text-gray-700 mt-4">
              <strong>Important:</strong> No method of transmission over the internet is 100% secure. While we
              strive to protect your data, we cannot guarantee absolute security. If you have reason to believe
              your account has been compromised, please contact us immediately at{' '}
              <a href="mailto:security@kintaraa.com" className="text-primary hover:underline">
                security@kintaraa.com
              </a>
              .
            </p>
          </section>

          {/* Data Sharing & Third Parties */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing & Third Parties</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 When We Share Your Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>With Service Providers:</strong> When you report an incident or request help, we share
                relevant information with matched service providers to facilitate care.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share information with third parties when you explicitly
                consent.
              </li>
              <li>
                <strong>Service Providers & Partners:</strong> We work with trusted third-party service providers
                for hosting, analytics, customer support, and technical services. These providers are
                contractually obligated to protect your data.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required by law, court order,
                or government request, or to protect rights, safety, and property.
              </li>
              <li>
                <strong>Emergency Situations:</strong> In cases of imminent danger or life-threatening situations,
                we may share information with emergency services.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 When We DO NOT Share Your Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>We do not sell your personal information to third parties</li>
              <li>We do not share your data for marketing purposes</li>
              <li>We do not share personally identifiable information for research without your explicit consent</li>
            </ul>
          </section>

          {/* Your Rights & Control */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights & Control</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>

            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Access:</strong> Request a copy of all personal information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or incomplete information.
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and associated data (subject to legal
                retention requirements).
              </li>
              <li>
                <strong>Data Portability:</strong> Request your data in a structured, machine-readable format.
              </li>
              <li>
                <strong>Restrict Processing:</strong> Request restriction of processing in certain circumstances.
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent for data processing where consent was the basis.
              </li>
              <li>
                <strong>Anonymity:</strong> Choose to use the App anonymously (limited features may be available).
              </li>
            </ul>

            <p className="text-gray-700 mt-4">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@kintaraa.com" className="text-primary hover:underline">
                privacy@kintaraa.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-4">
              Kintaraa is intended for users aged 13 and older. We do not knowingly collect personal information
              from children under 13. If you are a parent or guardian and believe your child has provided us with
              personal information, please contact us at{' '}
              <a href="mailto:privacy@kintaraa.com" className="text-primary hover:underline">
                privacy@kintaraa.com
              </a>
              , and we will delete such information.
            </p>
            <p className="text-gray-700">
              For users aged 13-17, we recommend parental guidance when using the App, especially when reporting
              incidents or communicating with service providers.
            </p>
          </section>

          {/* International Users */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Users</h2>
            <p className="text-gray-700 mb-4">
              Kintaraa is based in [Country]. If you access the App from outside [Country], your information may
              be transferred to, stored, and processed in [Country] or other countries where our service providers
              operate.
            </p>
            <p className="text-gray-700 mb-4">
              By using Kintaraa, you consent to the transfer of your information to countries that may have
              different data protection laws than your country of residence.
            </p>
            <p className="text-gray-700">
              <strong>For EU/EEA Users:</strong> We comply with GDPR requirements, including lawful basis for
              processing, data subject rights, and appropriate safeguards for international transfers.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
            <p className="text-gray-700 mb-4">We retain your information for as long as necessary to:</p>

            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Provide services and support</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>Account Data:</strong> Retained while your account is active and for up to 90 days after
              deletion (unless legal requirements mandate longer retention).
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Incident Reports:</strong> Retained for up to 7 years to support ongoing cases and legal
              requirements.
            </p>
            <p className="text-gray-700">
              <strong>Messages:</strong> Retained while your account is active. You can delete individual messages
              at any time.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
              legal requirements, or other factors. We will notify you of any material changes by:
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Posting the updated policy in the App with a new &quot;Last Updated&quot; date</li>
              <li>Sending you a notification through the App</li>
              <li>Sending you an email (if you&apos;ve provided one)</li>
            </ul>

            <p className="text-gray-700">
              Your continued use of Kintaraa after the effective date of the updated Privacy Policy constitutes
              acceptance of the changes.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact us:
            </p>

            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@kintaraa.com" className="text-primary hover:underline">
                  privacy@kintaraa.com
                </a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Security Issues:</strong>{' '}
                <a href="mailto:security@kintaraa.com" className="text-primary hover:underline">
                  security@kintaraa.com
                </a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>General Support:</strong>{' '}
                <a href="mailto:support@kintaraa.com" className="text-primary hover:underline">
                  support@kintaraa.com
                </a>
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Mailing Address:</strong><br />
                Kintaraa<br />
                [Company Address]<br />
                [City, State/Province, Postal Code]<br />
                [Country]
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="mt-12 p-6 bg-gray-100 rounded-lg">
            <p className="text-gray-700">
              <strong>Acknowledgment:</strong> By using Kintaraa, you acknowledge that you have read and understood
              this Privacy Policy and agree to its terms.
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Thank you for trusting Kintaraa with your safety and wellbeing.</strong>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
