import { cn } from "@/lib/utils";
import type { Metadata } from 'next';
import { Geist, Inter, New_Rocker } from 'next/font/google';
import Link from 'next/link';
import Navigation from './components/Navigation';
import './globals.css';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const newRocker = New_Rocker({ weight: '400', subsets: ['latin'], variable: '--font-rockstar' })

export const metadata: Metadata = {
  metadataBase: new URL('https://bigzomusic.com'),
  title: {
    default: 'BigZo | Global Hip-Hop Artist — Official Website',
    template: '%s | BigZo',
  },
  description:
    'BigZo is a global hip-hop artist streaming in 135+ countries. Listen to the latest music, watch videos, get event tickets, and book features. Official website.',
  keywords: [
    'BigZo',
    'Big Zo',
    'BigZo rapper',
    'BigZo music',
    'BigZo artist',
    'BigZo hip hop',
    'BigZo official website',
    'BigZo Spotify',
    'BigZo YouTube',
    'global rapper',
    'hip hop artist',
    'BigZo Ohio',
    'BigZo songs',
    'BigZo new music',
    'BigZo Rockstar',
  ],
  authors: [{ name: 'BigZo' }],
  creator: 'BigZo',
  publisher: 'BigZo Music',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'BigZo | Global Hip-Hop Artist — Official Website',
    description:
      'Stream BigZo music worldwide. Global hip-hop artist in 135+ countries. Latest drops, events, and features.',
    url: 'https://bigzomusic.com',
    siteName: 'BigZo',
    images: [
      {
        url: 'https://bigzomusic.com/1566479.jpg',
        width: 1200,
        height: 1500,
        alt: 'BigZo - Global Hip-Hop Artist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigZo | Global Hip-Hop Artist',
    description:
      'Stream BigZo music in 135+ countries. Official website for music, events, and bookings.',
    creator: '@bigzomusic',
    images: ['https://bigzomusic.com/1566479.jpg'],
  },
  alternates: {
    canonical: 'https://bigzomusic.com',
  },
}

/* ── Platform SVG Icons ────────────────────── */

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

/* ── JSON-LD Structured Data ────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'BigZo',
  alternateName: ['Big Zo', 'BIGZO'],
  url: 'https://bigzomusic.com',
  genre: ['Hip-Hop', 'Rap'],
  description:
    'BigZo is a global hip-hop artist with music streaming in 135+ countries worldwide.',
  image: 'https://bigzomusic.com/1566479.jpg',
  sameAs: [
    'https://open.spotify.com/artist/07ZqHkqPIjjH8wrCpYQQxg',
    'https://www.youtube.com/@bigzo423',
    'https://www.instagram.com/b1gz0/',
    'https://www.tiktok.com/@bigzomusic',
  ],
  email: 'bigzoproduction15@gmail.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${inter.variable} ${newRocker.variable}`}>
        <Navigation />
        <main id="main-content" style={{ paddingTop: '96px' }}>
          {children}
        </main>

        {/* ── Footer ──────────────────────────── */}
        <footer className="site-footer" role="contentinfo">
          <div className="footer-inner">
            <div className="footer-top">
              {/* Brand */}
              <div className="footer-brand">
                <h3 className="fire-text">BIGZO</h3>
                <p>Global hip-hop artist streaming in 135+ countries worldwide.</p>
              </div>

              {/* Navigation */}
              <div className="footer-nav">
                <div className="footer-nav-col">
                  <h4>Navigate</h4>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/features">Features</Link></li>
                    <li><Link href="/events">Events</Link></li>
                    <li><Link href="/about">About</Link></li>
                  </ul>
                </div>
                <div className="footer-nav-col">
                  <h4>Legal</h4>
                  <ul>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link href="/terms-of-service">Terms of Service</Link></li>
                  </ul>
                </div>
                <div className="footer-nav-col">
                  <h4>Contact</h4>
                  <ul>
                    <li><a href="mailto:bigzoproduction15@gmail.com">Email</a></li>
                    <li><a href="mailto:bigzoproduction15@gmail.com">Collaborations</a></li>
                  </ul>
                </div>
              </div>

              {/* Social Icons */}
              <div className="footer-social">
                <div className="footer-social-icons">
                  <a
                    href="https://open.spotify.com/artist/07ZqHkqPIjjH8wrCpYQQxg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    aria-label="BigZo on Spotify"
                  >
                    <SpotifyIcon />
                  </a>
                  <a
                    href="https://www.youtube.com/@bigzo423"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    aria-label="BigZo on YouTube"
                  >
                    <YouTubeIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/b1gz0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    aria-label="BigZo on Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://www.tiktok.com/@bigzomusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    aria-label="BigZo on TikTok"
                  >
                    <TikTokIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
              <div className="footer-copyright">
                &copy; {new Date().getFullYear()} BIGZO MUSIC. ALL RIGHTS RESERVED.
              </div>
              <div className="footer-legal">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms-of-service">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
