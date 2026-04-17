import { useIsMobile } from '../hooks/useMediaQuery'
import { useInView } from '../hooks/useInView'

export default function About() {
  const isMobile = useIsMobile()
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  const pillars = [
    { icon: '◈', label: 'Crystals & Gemstones', desc: 'Hundreds of specimens, both raw and polished, loose and set in jewelry.' },
    { icon: '✦', label: 'Tarot & Oracle', desc: 'The largest tarot selection in the Las Vegas valley — find your perfect deck.' },
    { icon: '⬡', label: 'Apothecary', desc: 'Organic herbs, essential oils, dressed candles, and ritual supplies.' },
    { icon: '◉', label: 'Books & Guidance', desc: 'Curated titles for every path — beginner to seasoned practitioner.' },
  ]

  return (
    <section id="about" style={{
      padding: isMobile ? '5rem 1.5rem' : '8rem 2rem',
      background: `linear-gradient(to bottom, #0a0809 0%, #1a1025 50%, #0a0809 100%)`,
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div
          ref={headerRef}
          style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5rem' }}
        >
          <p className={`section-label fade-up${headerInView ? ' visible' : ''} delay-1`}
            style={{ marginBottom: '1.5rem' }}>Our Story</p>

          <h2 className={`fade-up${headerInView ? ' visible' : ''} delay-2`}
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '2rem' }}>
            A Sacred Space,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Over 20 Years</em>{' '}
            in the Making
          </h2>

          <span className={`gold-rule fade-in${headerInView ? ' visible' : ''} delay-3`}
            style={{ marginBottom: '2rem' }} />

          <p className={`fade-up${headerInView ? ' visible' : ''} delay-3`}
            style={{
              maxWidth: '600px', margin: '0 auto',
              color: 'var(--text-muted)', lineHeight: 1.9,
              fontSize: isMobile ? '0.92rem' : '1rem',
              padding: isMobile ? '0 0.25rem' : '0',
            }}>
            Crystal Alley Emporium has been woven into the fabric of the Henderson community
            since 2000. Born from a desire to create a space of light and positive energy,
            we've grown alongside our community while staying true to our original calling —
            providing authentic metaphysical tools to every soul who walks through our doors.
          </p>
        </div>

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.5px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}
        >
          {pillars.map((p, i) => (
            <div key={i}
              className={`fade-up${gridInView ? ' visible' : ''} delay-${i + 1}`}
              style={{
                background: 'var(--deep)',
                padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
                transition: 'background 0.4s, opacity 0.75s ease, transform 0.75s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--purple-dark)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--deep)'}
            >
              <div style={{ fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '1rem', opacity: 0.8 }}>
                {p.icon}
              </div>
              <h3 style={{
                fontFamily: 'Cormorant Garant, serif',
                fontSize: '1.25rem', fontWeight: 600,
                marginBottom: '0.75rem', color: 'var(--cream)',
              }}>{p.label}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}