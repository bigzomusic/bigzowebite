import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | BigZo',
  description: 'Privacy Policy for BigZo Official Website. Learn how we collect, use, and protect your data.',
  robots: {
    index: false,
    follow: true,
  }
}

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page animate-fade-in-up">
      <h1 className="fire-text">Privacy Policy</h1>
      <div className="last-updated">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
      
      <p>
        At BigZo Music (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by BigZo and its affiliates.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect personal information that you provide to us when you:</p>
      <ul>
        <li>Visit or interact with our website</li>
        <li>Subscribe to our newsletter</li>
        <li>Purchase merchandise or event tickets</li>
        <li>Contact us for features or bookings (e.g., via Calendly or email)</li>
      </ul>
      <p>The types of information we may collect include your name, email address, phone number, and any other information you choose to provide.</p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve our services and website</li>
        <li>Process transactions and send related information (e.g., confirmations, receipts)</li>
        <li>Respond to your comments, questions, and requests</li>
        <li>Communicate with you about products, services, offers, and events offered by BigZo</li>
        <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
      </ul>

      <h2>3. Information Sharing and Disclosure</h2>
      <p>We do not share your personal information with third parties except as described in this privacy policy or as otherwise disclosed to you. We may share information:</p>
      <ul>
        <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
        <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
        <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of BigZo or others</li>
      </ul>

      <h2>4. Third-Party Services</h2>
      <p>
        Our website may contain links to third-party websites or services, such as Spotify, YouTube, Instagram, TikTok, and Calendly. We are not responsible for the privacy practices or the content of such third-party sites.
      </p>

      <h2>5. Security</h2>
      <p>
        We take reasonable measures to help protect personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:bigzoproduction15@gmail.com">bigzoproduction15@gmail.com</a>
      </p>
    </div>
  )
}
