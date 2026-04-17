import { useState } from 'react'
import { useIsMobile } from '../hooks/useMediaQuery'
import { useInView } from '../hooks/useInView'

function PhoneLink() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="tel:7024347626"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? 'var(--gold-light)' : 'var(--gold)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        letterSpacing: '0.1em',
        transition: 'color 0.3s',
      }}
    >
      (702) 434-7626
    </a>
  )
}

function HourRow({ day, time, showBorder }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '0.75rem',
      borderBottom: showBorder ? '1px solid var(--border)' : 'none',
    }}>
      <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{day}</span>
      <span style={{ color: 'var(--cream)', fontSize: '0.88rem' }}>{time}</span>
    </div>
  )
}

export default function Contact() {
  const isMobile = useIsMobile()
  const [headerRef, headerInView] = useInView()
  const [bodyRef, bodyInView] = useInView()

  const hours = [
    { day: 'Monday – Friday', time: '12:00 PM – 7:00 PM' },
    { day: 'Saturday', time: '12:00 PM – 6:00 PM' },
    { day: 'Sunday', time: '12:00 PM – 5:00 PM' },
  ]

  return (
    <section id="contact" style={{
      padding: isMobile ? '5rem 1.5rem 4rem' : '8rem 2rem 6rem',
      background: 'linear-gradient(to bottom, #0a0809, #1a1025)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className={`section-label fade-up${headerInView ? ' visible' : ''} delay-1`}
            style={{ marginBottom: '1.5rem' }}>Find Us</p>
          <h2 className={`fade-up${headerInView ? ' visible' : ''} delay-2`}
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 300 }}>
            Come{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Visit</em>
          </h2>
          <span className={`gold-rule fade-in${headerInView ? ' visible' : ''} delay-3`}
            style={{ marginTop: '1.5rem' }} />
        </div>

        <div ref={bodyRef}>
          <div className={`fade-up${bodyInView ? ' visible' : ''} delay-1`}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '1px',
              background: 'var(--border)',
              border: '1px solid var(--border)',
              marginBottom: '3rem',
            }}
          >
            <div style={{ background: 'var(--deep)', padding: isMobile ? '2rem 1.5rem' : '3rem' }}>
              <p className="section-label" style={{ marginBottom: '1.5rem' }}>Location</p>
              <p style={{
                fontFamily: 'Cormorant Garant, serif',
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 400, lineHeight: 1.5,
                color: 'var(--cream)', marginBottom: '1.5rem',
              }}>
                661 N Stephanie St<br />Henderson, NV 89014
              </p>
              <PhoneLink />
            </div>

            <div style={{ background: 'var(--deep)', padding: isMobile ? '2rem 1.5rem' : '3rem' }}>
              <p className="section-label" style={{ marginBottom: '1.5rem' }}>Hours</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {hours.map((h, i) => (
                  <HourRow key={i} day={h.day} time={h.time} showBorder={i < hours.length - 1} />
                ))}
              </div>
            </div>
          </div>

          <div className={`fade-up${bodyInView ? ' visible' : ''} delay-2`}
            style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <a
              href="https://maps.google.com/?q=661+N+Stephanie+St+Henderson+NV+89014"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn"
            >
              Get Directions
            </a>
          </div>

          <div className={`fade-up${bodyInView ? ' visible' : ''} delay-3`}
            style={{
              textAlign: 'center',
              borderTop: '1px solid var(--border)',
              paddingTop: '2.5rem',
            }}
          >
            <p style={{
              fontFamily: 'Cormorant Garant, serif',
              fontSize: isMobile ? '1.25rem' : '1.5rem',
              fontWeight: 300, color: 'var(--gold-light)',
              marginBottom: '0.5rem', letterSpacing: '0.05em',
            }}>
              Crystal Alley Emporium
            </p>
            <p style={{
              color: 'var(--text-muted)', fontSize: '0.72rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
            }}>
              Henderson, Nevada · Est. 2000
            </p>
            <p style={{ color: 'var(--gold-dim)', fontSize: '0.7rem', marginTop: '2rem' }}>
              © {new Date().getFullYear()} Crystal Alley Emporium · All Rights Reserved
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}