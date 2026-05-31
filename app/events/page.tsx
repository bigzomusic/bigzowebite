'use client'

import { motion } from 'framer-motion'
import { Calendar, ChevronRight, Clock, MapPin, Star, Ticket, Zap } from 'lucide-react'
import Image from 'next/image'

const events = [
  {
    date: 'JUN 12, 2026',
    name: 'The Ohio Takeover',
    location: 'No Class • 11213 Detroit Ave, Cleveland, OH 44102',
    time: 'Doors @ 7 PM',
    price: '$15',
    ticketUrl: 'https://ticketnut.com/buy/6791',
    description: 'BigZo headlines the Main Stage for the biggest night in Ohio hip-hop. Don\'t miss this.',
    featured: true,
    image: '/bigzo-guess.png',
  },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="events-hero">
        <div className="events-hero-bg">
          <Image
            src="/1566479.jpg"
            alt="BigZo"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="events-hero-overlay" />
        </div>
        <div className="events-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="events-hero-badge">
              <Zap size={16} />
              <span>LIVE SHOWS</span>
            </div>
            <h1 className="events-hero-title fire-text">EVENTS</h1>
            <p className="events-hero-subtitle">
              Experience BigZo live — raw energy, real music, unforgettable nights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 1, background: 'var(--bg)' }}>
        <div className="section-container" style={{ maxWidth: '1000px' }}>

          {/* Featured Event */}
          {events.filter(e => e.featured).map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="event-card-premium featured"
            >
              <div className="event-featured-badge">
                <Star size={14} />
                <span>FEATURED EVENT</span>
              </div>
              <div className="event-card-left">
                <div className="event-date-badge">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <h3 className="event-name-premium">{event.name}</h3>
                <div className="event-details-row">
                  <div className="event-detail">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-detail">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
              </div>

              <div className="event-card-right">
                {event.image && (
                  <div className="event-image-wrapper">
                    <Image
                      src={event.image}
                      alt={event.name}
                      width={400}
                      height={500}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
                    />
                  </div>
                )}
                <div className="event-price-row">
                  <div className="event-price">
                    <Ticket size={18} />
                    <span>{event.price}</span>
                  </div>
                  <a
                    href={event.ticketUrl}
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
          ))}

          {/* More Events CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="events-cta-card"
          >
            <Zap size={24} className="events-cta-icon" />
            <h3 className="events-cta-title">More Shows Coming Soon</h3>
            <p className="events-cta-text">
              Follow BigZo on social media to be the first to know about new tour dates and performances.
            </p>
            <div className="events-cta-links">
              <a href="https://www.instagram.com/b1gz0/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <span>Follow on IG</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
