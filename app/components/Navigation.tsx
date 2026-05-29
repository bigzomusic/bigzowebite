'use client'

import { useState } from 'react'
import Link from 'next/link'

/* ── SVG Icon Components ────────────────────── */

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const FeaturesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const AboutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const EventsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="main-nav" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={closeMenu} aria-label="BigZo Home">
          BIGZO
        </Link>

        <button
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`} role="menubar">
          <li role="none">
            <Link href="/" className="nav-link" role="menuitem" onClick={closeMenu}>
              <HomeIcon />
              Home
            </Link>
          </li>
          <li role="none">
            <Link href="/features" className="nav-link" role="menuitem" onClick={closeMenu}>
              <FeaturesIcon />
              Features
            </Link>
          </li>
          <li role="none">
            <Link href="/events" className="nav-link" role="menuitem" onClick={closeMenu}>
              <EventsIcon />
              Events
            </Link>
          </li>
          <li role="none">
            <Link href="/about" className="nav-link" role="menuitem" onClick={closeMenu}>
              <AboutIcon />
              About
            </Link>
          </li>
          <li role="none">
            <a
              href="mailto:bigzoproduction15@gmail.com"
              className="nav-cta"
              role="menuitem"
              onClick={closeMenu}
            >
              <ContactIcon />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
