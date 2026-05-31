'use client'

import { CalendarDays, Headphones, Info, Menu, Mic2, Sparkles, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { value: 'music', label: 'Music', href: '/#music', icon: Headphones },
  { value: 'features', label: 'Features', href: '/features', icon: Sparkles },
  { value: 'events', label: 'Events', href: '/events', icon: CalendarDays },
  { value: 'about', label: 'About', href: '/about', icon: Info },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const activeValue = navItems.find((item) => item.href === pathname || item.href.startsWith(`${pathname}#`))?.value ?? 'music'

  return (
    <nav className="main-nav" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <Link href="/" className="nav-brand" onClick={closeMenu} aria-label="BigZo Home">
          <span className="nav-brand-mark">
            <Mic2 size={18} />
          </span>
          <span className="nav-brand-text">BIGZO</span>
        </Link>

        <button
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`} role="menubar">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = item.value === activeValue

            return (
              <li key={item.value} role="none">
                <Link
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
          <li role="none">
            <a
              href="mailto:bigzoproduction15@gmail.com"
              className="nav-cta"
              role="menuitem"
              onClick={closeMenu}
            >
              Book BigZo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
