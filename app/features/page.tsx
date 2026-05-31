import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Feature',
  description: 'Schedule a call with BigZo for feature verses, production, or collaborations.',
  keywords: ['BigZo feature', 'book BigZo', 'BigZo collaboration', 'hip hop feature', 'rap verse'],
}

export default function FeaturesPage() {
  return (
    <section className="section-padding" style={{ position: 'relative', zIndex: 1, minHeight: '90vh' }}>
      <div className="section-container" style={{ maxWidth: '900px', marginTop: '80px' }}>
        <div className="section-header-row">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="section-header-icon"
            width="28"
            height="28"
            aria-hidden="true"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          <h1 className="section-title fire-text">Book a Feature</h1>
        </div>
        <div className="fire-divider" />
        <p className="section-subtitle" style={{ marginTop: '1.5rem' }}>
          Schedule a call with BigZo for feature verses, production, or collaborations
        </p>

        <div className="glass-panel" style={{ padding: '1.5rem', overflow: 'hidden', background: '#0a0a0a', marginTop: '3rem' }}>
          <iframe
            src="https://calendly.com/bigzomusic-proton/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=f2a900"
            width="100%"
            height="700"
            frameBorder="0"
            style={{ minWidth: '320px' }}
          ></iframe>
        </div>
      </div>
    </section>
  )
}
