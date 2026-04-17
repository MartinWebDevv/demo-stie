import { useIsMobile } from '../hooks/useMediaQuery'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    quote: "Absolutely amazing spiritual shop — the best spiritual tools, and shout out to Sam, his dressed candles are the ultimate manifestation tool. The second day I lit the candle I got everything I wanted. If I could put 10 stars I would.",
    name: 'D. Martinez',
    detail: 'Local Guide · May 2024',
    stars: 5,
  },
  {
    quote: "First metaphysical shop we found with powerful energy. Great selection and real value. This place has such a wonderful, grounded vibe — you can feel it the moment you walk in.",
    name: 'Lisa L.',
    detail: 'Verified Review · June 2025',
    stars: 5,
  },
  {
    quote: "The stock is really good and the young man who runs the store is an amazing human. This is the store for all your magik needs — knowledgeable, friendly, and genuinely passionate.",
    name: 'Tanya S.',
    detail: 'Verified Review · August 2025',
    stars: 5,
  },
]

export default function Testimonials() {
  const isMobile = useIsMobile()
  const [headerRef, headerInView] = useInView()
  const [cardsRef, cardsInView] = useInView()

  return (
    <section id="testimonials" style={{
      padding: isMobile ? '5rem 1.5rem' : '8rem 2rem',
      background: '#0a0809',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className={`section-label fade-up${headerInView ? ' visible' : ''} delay-1`}
            style={{ marginBottom: '1.5rem' }}>Kind Words</p>
          <h2 className={`fade-up${headerInView ? ' visible' : ''} delay-2`}
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 300 }}>
            From Our{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Community</em>
          </h2>
          <span className={`gold-rule fade-in${headerInView ? ' visible' : ''} delay-3`}
            style={{ marginTop: '1.5rem' }} />
          <p className={`fade-up${headerInView ? ' visible' : ''} delay-4`}
            style={{ color: 'var(--text-muted)', marginTop: '1.5rem', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
            ★ 4.7 · 355 Reviews on Google
          </p>
        </div>

        <div ref={cardsRef} style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {testimonials.map((t, i) => (
            <div key={i}
              className={`testimonial-card fade-up${cardsInView ? ' visible' : ''} delay-${i + 1}`}
              style={{
                background: 'var(--deep)',
                border: '1px solid var(--border)',
                padding: isMobile ? '2rem 1.5rem' : '2.5rem',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute', top: '1.5rem',
                left: isMobile ? '1.5rem' : '2.5rem',
                fontFamily: 'Cormorant Garant, serif',
                fontSize: '5rem', lineHeight: 1,
                color: 'var(--gold)', opacity: 0.15,
              }}>"</div>

              <div style={{
                color: 'var(--gold)', fontSize: '0.8rem',
                marginBottom: '1.25rem', letterSpacing: '0.1em',
              }}>
                {'★'.repeat(t.stars)}
              </div>

              <p style={{
                color: 'var(--cream)', lineHeight: 1.8,
                fontSize: isMobile ? '0.9rem' : '0.95rem',
                fontFamily: 'Cormorant Garant, serif', fontWeight: 400,
                fontStyle: 'italic', marginBottom: '2rem',
                position: 'relative', zIndex: 1,
              }}>
                "{t.quote}"
              </p>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <p style={{ color: 'var(--cream)', fontSize: '0.85rem', fontWeight: 400 }}>{t.name}</p>
                <p style={{
                  color: 'var(--text-muted)', fontSize: '0.72rem',
                  marginTop: '0.25rem', letterSpacing: '0.05em',
                }}>{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}