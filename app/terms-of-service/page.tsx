import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | BigZo',
  description: 'Terms of Service for BigZo Official Website. Read the rules and guidelines for using our site.',
  robots: {
    index: false,
    follow: true,
  }
}

export default function TermsOfServicePage() {
  return (
    <div className="legal-page animate-fade-in-up">
      <h1 className="fire-text">Terms of Service</h1>
      <div className="last-updated">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
      
      <p>
        Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the bigzo.com website (the &quot;Service&quot;) operated by BigZo Music (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        The Service and its original content, features, and functionality are and will remain the exclusive property of BigZo Music and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BigZo Music.
      </p>

      <h2>3. Links To Other Web Sites</h2>
      <p>
        Our Service may contain links to third-party web sites or services that are not owned or controlled by BigZo Music.
      </p>
      <p>
        BigZo Music has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that BigZo Music shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
      </p>

      <h2>4. Booking and Features</h2>
      <p>
        Any booking requests, feature inquiries, or scheduling made through third-party services (such as Calendly) are subject to availability and review. BigZo Music reserves the right to decline or cancel any request at our sole discretion.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        In no event shall BigZo Music, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
      </p>

      <h2>6. Changes</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at: <a href="mailto:bigzoproduction15@gmail.com">bigzoproduction15@gmail.com</a>
      </p>
    </div>
  )
}
