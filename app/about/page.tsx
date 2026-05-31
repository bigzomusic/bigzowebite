import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about BigZo, the global hip-hop artist streaming in 135+ countries.',
  keywords: ['About BigZo', 'BigZo bio', 'BigZo background', 'hip hop artist bio'],
}

export default function AboutPage() {
  return (
    <section className="section-padding flex flex-col items-center justify-center min-h-screen relative z-10 px-4">
      <div className="section-container max-w-2xl mx-auto mt-20 flex flex-col items-center justify-center">
        <h1 className="section-title fire-text text-center">About BigZo</h1>
        <div className="fire-divider" />

        <div className="mt-12 flex flex-col items-center justify-center gap-8 w-full">
          <div className="relative rounded-[var(--radius)] overflow-hidden aspect-square border border-[var(--glass-border)] shadow-[var(--shadow-glow)] w-full max-w-[400px] mx-auto">
            <Image
              src="/bigzo-rockstar.png"
              alt="BigZo in his element"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

          <div className="glass-panel p-8 text-center w-full max-w-2xl mx-auto">
            <p className="text-xl leading-relaxed text-[var(--text)] text-center">
              BigZo is a global hip-hop artist whose music transcends borders. With streams in over 135 countries worldwide, BigZo is pushing the boundaries of modern rap and hip-hop. Known for relentless ambition, high-energy performances, and raw lyricism, the Rockstar lifestyle isn&apos;t just an aesthetic—it&apos;s the reality.
            </p>
            <p className="text-lg leading-relaxed text-[var(--text-muted)] mt-6 text-center">
              Whether in the studio cooking up the next hit or shutting down the main stage at The Ohio Takeover, BigZo&apos;s dedication to the craft is undeniable. Follow the journey on all major platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
