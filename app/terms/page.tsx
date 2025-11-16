import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Kintaraa',
  description: 'Kintaraa Terms of Service - Usage terms and conditions',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 lg:p-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">
              <strong>Last Updated:</strong> November 16, 2025
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Effective Date:</strong> November 16, 2025
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Kintaraa. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
              Kintaraa mobile application (&quot;App&quot;), website, and related services (collectively, the &quot;Services&quot;)
              provided by Kintaraa (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            </p>
            <p className="text-gray-700 mb-4">
              <strong>By accessing or using our Services, you agree to be bound by these Terms.</strong> If you do
              not agree to these Terms, you may not access or use our Services.
            </p>
            <p className="text-gray-700">
              These Terms constitute a legally binding agreement between you and Kintaraa. Please read them carefully.
            </p>
          </section>

          {/* Description of Service */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Kintaraa is a platform that connects survivors of gender-based violence (GBV) with specialized service
              providers, including healthcare professionals, legal experts, law enforcement, counselors, social
              services, GBV rescue organizations, and community health workers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Core Features</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Anonymous incident reporting</li>
              <li>Intelligent matching with service providers</li>
              <li>Secure, encrypted messaging</li>
              <li>Mental health and wellbeing resources</li>
              <li>Safety planning tools</li>
              <li>Multi-provider care coordination</li>
              <li>Real-time case updates</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Important Disclaimers</h3>
            <div className="bg-yellow-50 border-l-4 border-warning p-4 mb-4">
              <p className="text-gray-700 mb-2">
                <strong>NOT Emergency Services:</strong> Kintaraa is not a substitute for emergency services.
                If you are in immediate danger, please call your local emergency number (911, 999, 112, etc.)
                or contact local law enforcement.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>NOT Medical Advice:</strong> Information provided through Kintaraa does not constitute
                medical, legal, or professional advice. Always consult with qualified professionals for specific
                guidance.
              </p>
              <p className="text-gray-700">
                <strong>Platform Only:</strong> Kintaraa facilitates connections between survivors and service
                providers but is not responsible for the quality, accuracy, or outcomes of services provided by
                third-party professionals.
              </p>
            </div>
          </section>

          {/* User Accounts & Registration */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts & Registration</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Eligibility</h3>
            <p className="text-gray-700 mb-4">
              You must be at least 13 years old to use Kintaraa. By creating an account, you represent that you meet
              this age requirement. Users under 18 are encouraged to use the App with parental guidance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Creation</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                You must provide accurate, current, and complete information during registration
              </li>
              <li>
                You may use a pseudonym if you wish to remain anonymous
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your account credentials
              </li>
              <li>
                You are responsible for all activities that occur under your account
              </li>
              <li>
                You must notify us immediately of any unauthorized access to your account
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Service Provider Accounts</h3>
            <p className="text-gray-700 mb-4">
              Service providers must:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Provide proof of professional credentials and licenses</li>
              <li>Maintain active, valid licenses in good standing</li>
              <li>Comply with all applicable professional standards and regulations</li>
              <li>Update credentials and information promptly when changes occur</li>
              <li>Adhere to the Kintaraa Provider Code of Conduct</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Account Termination</h3>
            <p className="text-gray-700 mb-4">
              We reserve the right to suspend or terminate your account if you violate these Terms, engage in
              fraudulent activity, or misuse the Services.
            </p>
          </section>

          {/* Acceptable Use Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use Policy</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Permitted Use</h3>
            <p className="text-gray-700 mb-4">You may use Kintaraa to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Report incidents and seek support (survivors)</li>
              <li>Provide professional services to survivors (verified providers)</li>
              <li>Communicate with matched providers or survivors</li>
              <li>Access resources and information</li>
              <li>Coordinate care with other providers (with survivor consent)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Prohibited Conduct</h3>
            <p className="text-gray-700 mb-4">You agree NOT to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Misrepresent yourself:</strong> Impersonate others, provide false credentials, or
                misrepresent your identity or qualifications
              </li>
              <li>
                <strong>Harass or abuse:</strong> Engage in harassment, threats, intimidation, or abusive
                behavior toward other users
              </li>
              <li>
                <strong>Share inappropriate content:</strong> Post or share content that is illegal, harmful,
                threatening, abusive, defamatory, obscene, or otherwise objectionable
              </li>
              <li>
                <strong>Violate privacy:</strong> Share others&apos; personal information without consent
              </li>
              <li>
                <strong>Spam or solicit:</strong> Send unsolicited messages, advertisements, or promotional
                content
              </li>
              <li>
                <strong>Interfere with Services:</strong> Disrupt, damage, or impair the functionality of the
                App or Services
              </li>
              <li>
                <strong>Unauthorized access:</strong> Attempt to access accounts, data, or systems without
                authorization
              </li>
              <li>
                <strong>Violate laws:</strong> Use the Services for any illegal purpose or in violation of
                applicable laws
              </li>
              <li>
                <strong>Exploit the platform:</strong> Use automated tools (bots, scrapers) or engage in
                data mining without permission
              </li>
              <li>
                <strong>Retaliate:</strong> Service providers must not contact or retaliate against survivors
                outside the App without explicit consent
              </li>
            </ul>
          </section>

          {/* Content & Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Content & Intellectual Property</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Your Content</h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of any content you submit, post, or share through Kintaraa (&quot;Your Content&quot;),
              including incident reports, messages, and profile information.
            </p>
            <p className="text-gray-700 mb-4">
              By submitting Your Content, you grant Kintaraa a limited, non-exclusive, royalty-free license to use,
              store, display, and transmit Your Content solely to provide the Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Our Intellectual Property</h3>
            <p className="text-gray-700 mb-4">
              The Kintaraa App, website, logo, design, features, and all related intellectual property are owned
              by Kintaraa and protected by copyright, trademark, and other laws.
            </p>
            <p className="text-gray-700 mb-4">
              You may not copy, modify, distribute, sell, or create derivative works from our intellectual property
              without our written permission.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Feedback</h3>
            <p className="text-gray-700 mb-4">
              If you provide feedback, suggestions, or ideas about Kintaraa, you grant us the right to use and
              implement such feedback without any obligation to you.
            </p>
          </section>

          {/* Disclaimers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimers</h2>

            <div className="bg-red-50 border-l-4 border-error p-4 mb-4">
              <p className="text-gray-700 mb-4">
                <strong className="uppercase">Important Legal Disclaimers - Please Read Carefully</strong>
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">6.1 &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</h3>
              <p className="text-gray-700 mb-4">
                The Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties of any kind, either
                express or implied, including but not limited to warranties of merchantability, fitness for a
                particular purpose, or non-infringement.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">6.2 No Guarantee of Outcomes</h3>
              <p className="text-gray-700 mb-4">
                We do not guarantee that use of Kintaraa will result in any particular outcome, resolution, or
                level of support. The effectiveness of services depends on many factors outside our control.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">6.3 Third-Party Service Providers</h3>
              <p className="text-gray-700 mb-4">
                Kintaraa is a platform that connects users with independent service providers. We do not employ,
                supervise, or control service providers. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                <li>The quality, accuracy, or outcomes of services provided</li>
                <li>Actions or omissions of service providers</li>
                <li>Professional conduct or competence of service providers</li>
                <li>Disputes between users and service providers</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2">6.4 No Medical or Legal Advice</h3>
              <p className="text-gray-700 mb-4">
                Information and resources provided through Kintaraa are for general informational purposes only
                and do not constitute professional medical, legal, or mental health advice. Always consult with
                qualified professionals for specific guidance.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">6.5 Technical Limitations</h3>
              <p className="text-gray-700">
                We do not guarantee that the Services will be uninterrupted, secure, or error-free. Technical
                issues, outages, or security breaches may occur despite our best efforts.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <div className="bg-red-50 border-l-4 border-error p-4 mb-4">
              <p className="text-gray-700 mb-4">
                <strong className="uppercase">To the Maximum Extent Permitted by Law:</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Kintaraa, its affiliates, directors, employees, agents, and partners shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Loss of profits, data, or goodwill</li>
                <li>Service interruptions or security breaches</li>
                <li>Actions or omissions of third-party service providers</li>
                <li>Errors, mistakes, or inaccuracies in content</li>
                <li>Personal injury or property damage resulting from use of the Services</li>
                <li>Unauthorized access to your data or communications</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Our total liability to you for any claims arising from or related to the Services shall not exceed
                the amount you paid us in the 12 months prior to the claim (or $100 if you have not paid us anything).
              </p>
              <p className="text-gray-700">
                Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above
                limitations may not apply to you.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify, defend, and hold harmless Kintaraa, its affiliates, officers, directors,
              employees, agents, and partners from any claims, liabilities, damages, losses, costs, or expenses
              (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Your use or misuse of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another person or entity</li>
              <li>Your Content or conduct on the platform</li>
              <li>For service providers: services you provide to survivors through the platform</li>
            </ul>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 By You</h3>
            <p className="text-gray-700 mb-4">
              You may terminate your account at any time by contacting us at{' '}
              <a href="mailto:support@kintaraa.com" className="text-primary hover:underline">
                support@kintaraa.com
              </a>
              . Upon termination, your account will be deleted subject to our data retention policies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 By Us</h3>
            <p className="text-gray-700 mb-4">
              We may suspend or terminate your access to the Services at any time, with or without notice, for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Violation of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Harm to other users or the platform</li>
              <li>Failure to maintain required credentials (service providers)</li>
              <li>Any other reason at our sole discretion</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.3 Effect of Termination</h3>
            <p className="text-gray-700 mb-4">
              Upon termination:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Your right to access the Services immediately ceases</li>
              <li>We may delete your account and data (subject to legal retention requirements)</li>
              <li>Provisions of these Terms that should survive termination will remain in effect</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.1 Informal Resolution</h3>
            <p className="text-gray-700 mb-4">
              If you have a dispute with Kintaraa, please first contact us at{' '}
              <a href="mailto:support@kintaraa.com" className="text-primary hover:underline">
                support@kintaraa.com
              </a>{' '}
              to attempt to resolve the issue informally.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.2 Arbitration</h3>
            <p className="text-gray-700 mb-4">
              If informal resolution fails, you agree that any disputes arising from these Terms or the Services
              will be resolved through binding arbitration rather than in court, except where prohibited by law.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.3 Class Action Waiver</h3>
            <p className="text-gray-700 mb-4">
              You agree that disputes will be resolved on an individual basis only, not as part of a class action
              or collective proceeding.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of [Country/State], without regard to conflict of law principles.
              Any legal action or proceeding related to these Terms shall be brought exclusively in the courts
              located in [Jurisdiction].
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to These Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these Terms from time to time. We will notify you of material changes by:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Posting the updated Terms in the App with a new &quot;Last Updated&quot; date</li>
              <li>Sending you a notification through the App</li>
              <li>Sending you an email (if you&apos;ve provided one)</li>
            </ul>
            <p className="text-gray-700">
              Your continued use of the Services after the effective date of the updated Terms constitutes
              acceptance of the changes. If you do not agree to the updated Terms, you must stop using the Services.
            </p>
          </section>

          {/* General Provisions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. General Provisions</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">13.1 Entire Agreement</h3>
            <p className="text-gray-700 mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and
              Kintaraa regarding the Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">13.2 Severability</h3>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will remain
              in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">13.3 Waiver</h3>
            <p className="text-gray-700 mb-4">
              Our failure to enforce any provision of these Terms does not constitute a waiver of that provision.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">13.4 Assignment</h3>
            <p className="text-gray-700 mb-4">
              You may not assign or transfer these Terms or your account without our written consent. We may assign
              or transfer these Terms at any time.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">13.5 Force Majeure</h3>
            <p className="text-gray-700 mb-4">
              We are not liable for any delay or failure to perform due to circumstances beyond our reasonable
              control, including natural disasters, war, terrorism, riots, or technical failures.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions or concerns about these Terms, please contact us:
            </p>

            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:legal@kintaraa.com" className="text-primary hover:underline">
                  legal@kintaraa.com
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
              <strong>Acknowledgment:</strong> By using Kintaraa, you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
