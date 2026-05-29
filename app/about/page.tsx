import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about BigZo, the global hip-hop artist streaming in 135+ countries.',
  keywords: ['About BigZo', 'BigZo bio', 'BigZo background', 'hip hop artist bio'],
}

export default function AboutPage() {
  return (
    <section className="section-padding" style={{ position: 'relative', zIndex: 1, minHeight: '90vh' }}>
      <div className="section-container" style={{ maxWidth: '900px', marginTop: '80px' }}>
        <h1 className="section-title fire-text">About BigZo</h1>
        <div className="fire-divider" />
        
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '1', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-glow)', width: '100%', maxWidth: '400px' }}>
            <Image
              src="/bigzo-rockstar.png"
              alt="BigZo in his element"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text)' }}>
              BigZo is a global hip-hop artist whose music transcends borders. With streams in over 135 countries worldwide, BigZo is pushing the boundaries of modern rap and hip-hop. Known for relentless ambition, high-energy performances, and raw lyricism, the Rockstar lifestyle isn&apos;t just an aesthetic—it&apos;s the reality.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
              Whether in the studio cooking up the next hit or shutting down the main stage at The Ohio Takeover, BigZo&apos;s dedication to the craft is undeniable. Follow the journey on all major platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
