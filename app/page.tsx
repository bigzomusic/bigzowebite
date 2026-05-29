'use client'

import Image from 'next/image'
import Script from 'next/script'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import MusicPortfolio from '@/components/ui/music-portfolio'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Ticket, Clock, ChevronRight, Flame, Disc3, Zap } from 'lucide-react'

/* ── Countdown Component ─────────────────── */
function AlbumCountdown() {
  const releaseDate = new Date('2026-06-01T00:00:00-04:00')
  const now = new Date()
  const diff = releaseDate.getTime() - now.getTime()
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
  const hours = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  const minutes = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))

  return (
    <div className="countdown-grid">
      <div className="countdown-unit">
        <span className="countdown-number fire-text">{days}</span>
        <span className="countdown-label">DAYS</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-unit">
        <span className="countdown-number fire-text">{hours}</span>
        <span className="countdown-label">HRS</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-unit">
        <span className="countdown-number fire-text">{minutes}</span>
        <span className="countdown-label">MIN</span>
      </div>
    </div>
  )
}

/* ── Track Data ──────────────────────────── */
const tracks = [
  {
    title: "Vent",
    type: "Single",
    year: "2024",
    albumArt: "https://i.pinimg.com/736x/9f/10/23/9f1023c3785097536e164d3ef7ac9fb6.jpg",
  },
  {
    title: "Slide",
    type: "Single",
    year: "2024",
    albumArt: "https://i.pinimg.com/736x/bf/f0/4d/bff04d662db206377de801ec0bc42804.jpg",
  },
  {
    title: "No Love",
    type: "Single",
    year: "2023",
    albumArt: "https://i.pinimg.com/736x/90/cf/ec/90cfec4c5230978dba450909c676fd42.jpg",
  },
  {
    title: "Pain",
    type: "Single",
    year: "2023",
    albumArt: "https://i.pinimg.com/736x/8a/9d/06/8a9d06bccabc53834aa311fb3beb75f6.jpg",
  },
]

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO — Streetwear Landing
          ══════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg-noise" />
        <div className="hero-inner">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="hero-eyebrow"
            >
              Global Artist
            </motion.div>
            <motion.h1
              className="hero-title fire-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{ marginBottom: '1.5rem' }}
            >
              BIGZO
            </motion.h1>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="hero-stat">
                <div className="hero-stat-number">135+</div>
                <div className="hero-stat-label">Countries</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">24/7</div>
                <div className="hero-stat-label">Streaming</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">∞</div>
                <div className="hero-stat-label">Ambition</div>
              </div>
            </motion.div>

            <motion.div
              className="platform-links"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ marginTop: '1.5rem' }}
            >
              <a href="https://open.spotify.com/artist/07ZqHkqPIjjH8wrCpYQQxg" target="_blank" rel="noopener noreferrer" className="platform-link">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                Spotify
              </a>
              <a href="https://www.youtube.com/@bigzo423" target="_blank" rel="noopener noreferrer" className="platform-link">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                YouTube
              </a>
              <a href="https://www.instagram.com/b1gz0/" target="_blank" rel="noopener noreferrer" className="platform-link">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
              <a href="https://www.tiktok.com/@bigzomusic" target="_blank" rel="noopener noreferrer" className="platform-link">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                TikTok
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INTRO & SPOTIFY
          ══════════════════════════════════════ */}
      <section className="section-padding" style={{ paddingBottom: '2rem', paddingTop: '2rem', position: 'relative', zIndex: 1 }}>
        <div className="section-container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '2rem' }}>
            <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/2IQRm4GtcEoMiYWxPiF2p3?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          
          <div className="glass-panel" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent)', flexShrink: 0 }}>
              <Image src="/bigzo-studio.jpg" alt="BigZo" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <h3 className="fire-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Who is BigZo?</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Global hip-hop artist streaming in 135+ countries. Known for relentless ambition, high-energy performances, and raw lyricism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SONG PROMO — I Aint Write This
          ══════════════════════════════════════ */}
      <section id="album-promo" className="album-promo-section">
        <div className="album-promo-bg" />
        <ContainerScroll
          titleComponent={
            <>
              <div className="album-promo-eyebrow">
                <Flame size={18} />
                <span>NEW SONG DROPPING</span>
                <Flame size={18} />
              </div>
              <h2 className="album-promo-title">
                I AINT WRITE THIS
              </h2>
              <p className="album-promo-date">06 • 01 • 2026</p>
              <AlbumCountdown />
              <p className="album-promo-tagline">
                &ldquo;Real music. Real pain. Real life.&rdquo;
              </p>
            </>
          }
        >
          <Image
            src="/album-cover.png"
            alt="I Aint Write This — BigZo Song Cover"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* ══════════════════════════════════════
          MUSIC SECTION — Spotify + YouTube + Tracks
          ══════════════════════════════════════ */}
      <section id="music" className="section-padding" style={{ position: 'relative', zIndex: 1, background: 'var(--bg)' }}>
        <div className="section-container">
          <div className="section-header-row">
            <Disc3 className="section-header-icon" size={28} />
            <h2 className="section-title fire-text">Music</h2>
          </div>
          <div className="fire-divider" />
          <p className="section-subtitle" style={{ marginTop: '1.5rem' }}>
            Stream BigZo worldwide on all major platforms
          </p>

          {/* Track artwork portfolio list */}
          <div className="tracks-portfolio mt-12 mb-16">
            <MusicPortfolio tracks={tracks} />
          </div>

          <div className="music-grid" style={{ marginTop: '4rem' }}>
            {/* Spotify Embed */}
            <div>
              <h3 className="music-section-label">NOW PLAYING</h3>
              <div className="music-embed" style={{ marginBottom: '1.5rem' }}>
                <iframe
                  src="https://open.spotify.com/embed/track/2IQRm4GtcEoMiYWxPiF2p3?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="BigZo on Spotify — Now Playing"
                />
              </div>
              <div className="music-embed">
                <iframe
                  src="https://open.spotify.com/embed/artist/07ZqHkqPIjjH8wrCpYQQxg?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="BigZo Spotify Artist Profile"
                />
              </div>
            </div>

            {/* YouTube Embed */}
            <div>
              <h3 className="music-section-label">LATEST VIDEO</h3>
              <div className="music-embed" style={{ borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src="https://www.youtube.com/embed/sVgAMrEXCTs"
                    title="BigZo — Latest Music Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EVENTS SECTION — Upgraded
          ══════════════════════════════════════ */}
      <section id="events" className="section-padding events-section">
        <div className="events-bg-glow" />
        <div className="section-container" style={{ maxWidth: '1000px' }}>
          <div className="section-header-row">
            <Zap className="section-header-icon" size={28} />
            <h2 className="section-title fire-text">Events</h2>
          </div>
          <div className="fire-divider" />
          <p className="section-subtitle" style={{ marginTop: '1.5rem' }}>
            See BigZo perform live
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="event-card-premium"
          >
            <div className="event-card-left">
              <div className="event-date-badge">
                <Calendar size={16} />
                <span>JUN 12, 2026</span>
              </div>
              <h3 className="event-name-premium">The Ohio Takeover</h3>
              <div className="event-details-row">
                <div className="event-detail">
                  <MapPin size={14} />
                  <span>Columbus, OH • Main Stage</span>
                </div>
                <div className="event-detail">
                  <Clock size={14} />
                  <span>Doors @ 7 PM</span>
                </div>
              </div>
              <p className="event-description">
                BigZo headlines the Main Stage for the biggest night in Ohio hip-hop.
                Don&apos;t miss this — it&apos;s going to be legendary.
              </p>
            </div>

            <div className="event-card-right">
              <div className="event-image-wrapper">
                <Image
                  src="/bigzo-guess.png"
                  alt="BigZo performing live"
                  width={400}
                  height={500}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="event-price-row">
                <div className="event-price">
                  <Ticket size={18} />
                  <span>$15</span>
                </div>
                <a
                  href="https://ticketnut.com/buy/6791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Get Tickets</span>
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURES / BOOKING SECTION
          ══════════════════════════════════════ */}
      <section id="features" className="section-padding" style={{ position: 'relative', zIndex: 1, background: '#050505' }}>
        <div className="section-container" style={{ maxWidth: '900px' }}>
          <h2 className="section-title fire-text">Book a Feature</h2>
          <div className="fire-divider" />
          <p className="section-subtitle" style={{ marginTop: '1.5rem' }}>
            Schedule a call with BigZo for feature verses, production, or collaborations
          </p>

          <div className="glass-panel" style={{ padding: '1.5rem', overflow: 'hidden', background: '#0a0a0a' }}>
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
    </>
  )
}
