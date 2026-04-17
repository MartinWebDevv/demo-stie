import { useIsMobile } from '../hooks/useMediaQuery'
import { useInView } from '../hooks/useInView'

const events = [
  {
    date: { day: '19', month: 'Apr' },
    title: 'New Moon Crystal Intention Setting',
    desc: 'Join us for a guided ceremony to cleanse your crystals and set powerful intentions under the new moon energy.',
    time: '6:00 PM – 7:30 PM',
    tag: 'Workshop',
  },
  {
    date: { day: '03', month: 'May' },
    title: 'Tarot for Beginners',
    desc: 'A welcoming introduction to the tarot — learn the major arcana, basic spreads, and how to develop your intuition.',
    time: '1:00 PM – 3:00 PM',
    tag: 'Class',
  },
  {
    date: { day: '17', month: 'May' },
    title: 'Full Moon Sound Bath & Crystal Activation',
    desc: 'Experience the healing vibrations of crystal singing bowls while your stones soak in full moon light.',
    time: '7:00 PM – 8:30 PM',
    tag: 'Event',
  },
]

export default function Events() {
  const isMobile = useIsMobile()
  const [headerRef, headerInView] = useInView()
  const [listRef, listInView] = useInView()

  return (
    <section id="events" style={{
      padding: isMobile ? '5rem 1.5rem' : '8rem 2rem',
      background: `linear-gradient(to bottom, #0a0809, #1a1025 50%, #0a0809)`,
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className={`section-label fade-up${headerInView ? ' visible' : ''} delay-1`}
            style={{ marginBottom: '1.5rem' }}>What's On</p>
          <h2 className={`fade-up${headerInView ? ' visible' : ''} delay-2`}
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 300 }}>
            Upcoming{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Gatherings</em>
          </h2>
          <span className={`gold-rule fade-in${headerInView ? ' visible' : ''} delay-3`}
            style={{ marginTop: '1.5rem' }} />
        </div>

        <div ref={listRef}
          style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
          {events.map((ev, i) => (
            <div key={i}
              className={`fade-up${listInView ? ' visible' : ''} delay-${i + 1}`}
              style={{
                background: 'var(--deep)',
                padding: isMobile ? '1.75rem 1.5rem' : '2rem 2.5rem',
                display: 'grid',
                gridTemplateColumns: isMobile ? '60px 1fr' : '80px 1fr auto',
                gap: isMobile ? '1rem' : '2rem',
                alignItems: isMobile ? 'start' : 'center',
                transition: 'background 0.3s, opacity 0.75s ease, transform 0.75s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--purple-dark)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--deep)'}
            >
              {/* Date */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Cormorant Garant, serif',
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontWeight: 300, color: 'var(--gold)', lineHeight: 1,
                }}>{ev.date.day}</div>
                <div style={{
                  fontSize: '0.65rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'var(--text-muted)',
                  marginTop: '0.25rem',
                }}>{ev.date.month}</div>
              </div>

              {/* Content */}
              <div>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem',
                }}>
                  <h3 style={{
                    fontFamily: 'Cormorant Garant, serif',
                    fontSize: isMobile ? '1.1rem' : '1.2rem',
                    fontWeight: 600, color: 'var(--cream)',
                  }}>{ev.title}</h3>
                  <span style={{
                    fontSize: '0.6rem', letterSpacing: '0.15em',
                    textTransform: 'uppercase', color: 'var(--gold)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    padding: '0.2rem 0.6rem', whiteSpace: 'nowrap',
                  }}>{ev.tag}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {ev.desc}
                </p>
                <p style={{
                  color: 'var(--gold-dim)', fontSize: '0.75rem',
                  marginTop: '0.5rem', letterSpacing: '0.05em',
                }}>◷ {ev.time}</p>

                {isMobile && (
                  <a href="#contact" className="glow-btn"
                    style={{ marginTop: '1rem', display: 'inline-block', fontSize: '0.65rem' }}>
                    Reserve
                  </a>
                )}
              </div>

              {!isMobile && (
                <a href="#contact" className="glow-btn"
                  style={{ whiteSpace: 'nowrap', fontSize: '0.65rem' }}>
                  Reserve
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}