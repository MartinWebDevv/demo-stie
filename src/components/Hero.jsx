import { useIsMobile } from '../hooks/useMediaQuery'

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: `
        radial-gradient(ellipse 80% 60% at 50% 40%, rgba(107,63,160,0.18) 0%, transparent 70%),
        radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,168,76,0.06) 0%, transparent 60%),
        linear-gradient(to bottom, #100d14 0%, #0a0809 100%)
      `,
      padding: isMobile ? '7rem 1.5rem 4rem' : '8rem 2rem 4rem',
    }}>

      {/* Decorative orb - scaled for mobile */}
      <div style={{
        position: 'absolute',
        top: '18%', left: '50%',
        transform: 'translateX(-50%)',
        width: isMobile ? '280px' : '420px',
        height: isMobile ? '280px' : '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107,63,160,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      {/* Decorative rings - hidden on mobile to prevent bleed */}
      {!isMobile && (
        <>
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -52%)',
            width: '500px', height: '500px',
            borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.07)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -52%)',
            width: '650px', height: '650px',
            borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.04)',
            pointerEvents: 'none',
          }} />
        </>
      )}

      <p className="section-label" style={{ marginBottom: '2rem', opacity: 0.8 }}>
        Henderson, Nevada · Est. 2000
      </p>

      <h1 style={{
        fontFamily: 'Cormorant Garant, serif',
        fontSize: 'clamp(3rem, 10vw, 7rem)',
        fontWeight: 300,
        lineHeight: 1.05,
        color: 'var(--cream)',
        marginBottom: '0.25rem',
        letterSpacing: '-0.01em',
      }}>
        Crystal Alley
      </h1>
      <h1 style={{
        fontFamily: 'Cormorant Garant, serif',
        fontSize: 'clamp(3rem, 10vw, 7rem)',
        fontWeight: 600,
        fontStyle: 'italic',
        lineHeight: 1.05,
        background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '2rem',
        letterSpacing: '-0.01em',
      }}>
        Emporium
      </h1>

      <span className="gold-rule" style={{ marginBottom: '2rem' }} />

      <p style={{
        maxWidth: '480px',
        fontSize: isMobile ? '0.95rem' : '1.05rem',
        lineHeight: 1.8,
        color: 'var(--text-muted)',
        marginBottom: '3rem',
        fontWeight: 300,
        padding: isMobile ? '0 0.5rem' : '0',
      }}>
        Your sanctuary for crystals, tarot, candles, herbs & metaphysical tools.
        Where the sacred meets the everyday.
      </p>

      <a href="#about" className="glow-btn">Explore the Shop</a>

      {/* scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: 0.4,
      }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
        }} />
      </div>
    </section>
  )
}