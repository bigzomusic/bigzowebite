'use client'

import { BigZoHero } from '@/components/ui/bigzo-hero'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { GlowingShadow } from '@/components/ui/glowing-shadow'
import { MagneticDock } from '@/components/ui/magnetic-dock'
import MusicPortfolio from '@/components/ui/music-portfolio'
import { Calendar, Clock, Disc3, Flame, MapPin, Navigation, Ticket, Zap } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'


/* ── Live Countdown Hook ─────────────────── */
function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const targetTime = targetDate.getTime()

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const diff = targetTime - now.getTime()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [targetTime])

  return timeLeft
}

/* ── Event Countdown ─────────────────── */
function EventCountdown() {
  const eventDate = new Date('2026-06-12T19:00:00-04:00')
  const { days, hours, minutes, seconds } = useCountdown(eventDate)

  return (
    <div className="event-countdown-wrap">
      <div className="event-countdown-label">
        <Zap size={14} />
        <span>EVENT STARTS IN</span>
      </div>
      <div className="event-countdown-grid">
        {[
          { value: days, label: 'DAYS' },
          { value: hours, label: 'HRS' },
          { value: minutes, label: 'MIN' },
          { value: seconds, label: 'SEC' },
        ].map((item) => (
          <div key={item.label} className="event-countdown-unit">
            <span className="event-countdown-number">{String(item.value).padStart(2, '0')}</span>
            <span className="event-countdown-sublabel">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Track Data ──────────────────────────── */
const tracks: never[] = []

/* ── Bottom Dock Items ──────────────────── */
const dockItems = [
  {
    link: "https://open.spotify.com/artist/07ZqHkqPIjjH8wrCpYQQxg",
    target: "_blank",
    Icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>,
  },
  {
    link: "#events",
    target: "_self",
    Icon: <Ticket className="w-5 h-5" />,
  },
  {
    link: "https://www.youtube.com/@bigzo423",
    target: "_blank",
    Icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
  },
  {
    link: "https://www.instagram.com/b1gz0/",
    target: "_blank",
    Icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
  },
  {
    link: "https://www.tiktok.com/@bigzomusic",
    target: "_blank",
    Icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>,
  },
]

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO — BigZo Animated Text
          ══════════════════════════════════════ */}
      <section id="hero" className="relative w-full">
        <BigZoHero />
      </section>

      {/* FIXED BOTTOM DOCK */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-100 scale-75 md:scale-100">
        <MagneticDock items={dockItems} />
      </div>


      {/* ══════════════════════════════════════
          NEW RELEASE — I Ain't Write This
          ══════════════════════════════════════ */}
      <section id="new-release" className="relative w-full bg-black overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center gap-5 pb-6 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/50 text-yellow-400 text-xs uppercase tracking-widest font-bold">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true"><path d="M9 18V5l12-2v13M6 21a3 3 0 100-6 3 3 0 000 6zm12-2a3 3 0 100-6 3 3 0 000 6z"/></svg>
                New Single
              </span>
              <h2
                className="text-5xl md:text-[5.5rem] font-black text-white uppercase leading-none tracking-wider"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                I Ain&apos;t Write This
              </h2>
              <p className="text-yellow-400 text-lg font-bold uppercase tracking-[0.2em]">
                Out Now
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <a
                  href="https://open.spotify.com/artist/07ZqHkqPIjjH8wrCpYQQxg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #1DB954 0%, #1ed760 100%)',
                    boxShadow: '0 0 30px rgba(29,185,84,0.45)',
                    color: '#000',
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Stream on Spotify
                </a>
                <a
                  href="https://open.spotify.com/artist/07ZqHkqPIjjH8wrCpYQQxg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-yellow-500/70 hover:text-yellow-400 transition-colors underline underline-offset-4 tracking-wider"
                >
                  View Artist Profile →
                </a>
              </div>
            </div>
          }
        >
          <Image
            src="/i-aint-write-this-album.png"
            alt="I Ain't Write This — BigZo"
            width={800}
            height={800}
            className="mx-auto w-full h-full object-cover rounded-2xl"
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
          EVENTS SECTION — Ohio Takeover
          ══════════════════════════════════════ */}
      <section id="events" className="section-padding events-section overflow-hidden">
        <div className="events-bg-glow" />
        <div className="section-container" style={{ maxWidth: '1000px' }}>
          <div className="section-header-row">
            <Zap className="section-header-icon" size={28} />
            <h2 className="section-title fire-text">Live Events</h2>
          </div>
          <div className="fire-divider" />

          {/* Event Countdown Timer */}
          <EventCountdown />

          {/* Event Card */}
          <div className="ohio-takeover-card">
            <div className="ohio-card-badge">
              <Flame size={14} />
              FEATURED EVENT
            </div>

            <h3 className="ohio-card-title">OHIO TAKEOVER</h3>
            <p className="ohio-card-subtitle">No Class — Cleveland, OH — The biggest hip-hop event of the summer</p>

            <div className="ohio-card-details">
              <div className="ohio-detail">
                <Calendar size={18} />
                <span>June 12, 2026</span>
              </div>
              <div className="ohio-detail">
                <Clock size={18} />
                <span>Doors @ 7 PM</span>
              </div>
              <div className="ohio-detail">
                <MapPin size={18} />
                <span>No Class, 11213 Detroit Ave, Cleveland, OH</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="ohio-card-actions">
              <GlowingShadow>
                <a
                  href="https://ticketnut.com/buy/6791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ohio-ticket-btn"
                >
                  <Ticket size={20} />
                  <span>GET TICKETS</span>
                </a>
              </GlowingShadow>

              <a
                href="https://www.google.com/maps/place/11213+Detroit+Ave,+Cleveland,+OH+44102"
                target="_blank"
                rel="noopener noreferrer"
                className="ohio-directions-btn"
              >
                <Navigation size={18} />
                <span>Directions</span>
              </a>
            </div>
          </div>
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
