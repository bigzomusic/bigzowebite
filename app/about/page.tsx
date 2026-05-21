import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About BigZo',
  description: 'Learn more about BigZo, the global hip-hop artist streaming in over 135 countries worldwide. Read his biography, discover his origins, and see his monumental impact on the global hip-hop scene.',
  openGraph: {
    title: 'About BigZo | Global Hip-Hop Artist',
    description: 'Learn more about BigZo, the global hip-hop artist streaming in over 135 countries worldwide.',
    images: ['/bigzo-rockstar.png'],
  }
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <Image
            src="/bigzo-red.png"
            alt="BigZo in a red-lit studio"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
        </div>
        <div className="about-hero-overlay" />
        <div className="about-hero-content animate-fade-in-up">
          <h1 className="hero-title fire-text" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>ABOUT BIGZO</h1>
          <p className="hero-tagline" style={{ marginTop: '1rem' }}>Global Phenomenon. Hip-Hop Innovator.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="about-content">
          <div className="about-bio">
            <div className="about-bio-image glass-panel animate-fade-in-up delay-1">
              <Image
                src="/bigzo-guess.png"
                alt="BigZo wearing Rockstar gear"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
              />
            </div>
            <div className="about-bio-text animate-fade-in-up delay-2">
              <h2 className="fire-text">THE ORIGIN STORY</h2>
              <div className="fire-divider" style={{ margin: '1rem 0 2rem 0' }} />
              <p>
                Hailing from the heart of Ohio, BigZo is a trailblazing hip-hop artist whose sound transcends geographical boundaries. Fusing raw, authentic storytelling with high-octane, rockstar-infused energy, his music creates an unforgettable sonic experience that has captivated listeners across the globe.
              </p>
              <p>
                What started as a relentless passion for wordplay and rhythm quickly evolved into a full-scale global movement. Today, BigZo&apos;s discography is streaming in over 135 countries, a testament to the universal resonance of his message. Whether he&apos;s delivering hard-hitting verses or crafting anthemic hooks, his versatility makes him one of the most exciting voices in modern hip-hop.
              </p>
              <p>
                BigZo isn&apos;t just releasing songs; he&apos;s curating moments. From sold-out shows in the Midwest to international streaming charts, the momentum is undeniable. With an uncompromising vision and an ever-growing fanbase, the Rockstar from Ohio is here to redefine the sound of a generation.
              </p>
            </div>
          </div>

          <div className="about-stats-grid animate-fade-in-up delay-3">
            <div className="about-stat-card glass-panel">
              <div className="about-stat-number">135+</div>
              <div className="about-stat-label">Countries Streaming</div>
            </div>
            <div className="about-stat-card glass-panel">
              <div className="about-stat-number">24/7</div>
              <div className="about-stat-label">Global Presence</div>
            </div>
            <div className="about-stat-card glass-panel">
              <div className="about-stat-number">100%</div>
              <div className="about-stat-label">Independent</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
