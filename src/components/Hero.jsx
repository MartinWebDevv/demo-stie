import { useEffect, useState } from 'react'
import { useIsMobile } from '../hooks/useMediaQuery'

export default function Hero() {
  const isMobile = useIsMobile()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

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

      {/* Floating orb */}
      <div className="hero-orb" style={{
        position: 'absolute',
        top: '18%', left: '50%',
        width: isMobile ? '280px' : '420px',
        height: isMobile ? '280px' : '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107,63,160,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      {/* Decorative rings - desktop only */}
      {!isMobile && (
        <>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -52%)',
            width: '500px', height: '500px', borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.07)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -52%)',
            width: '650px', height: '650px', borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.04)',
            pointerEvents: 'none',
          }} />
        </>
      )}

      {/* Twinkling stars - desktop only */}
      {!isMobile && [
        { top: '15%', left: '12%', delay: '0s' },
        { top: '25%', left: '88%', delay: '1.2s' },
        { top: '70%', left: '8%',  delay: '0.6s' },
        { top: '65%', left: '92%', delay: '1.8s' },
        { top: '40%', left: '5%',  delay: '2.4s' },
        { top: '80%', left: '80%', delay: '0.3s' },
      ].map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: s.top, left: s.left,
          width: '2px', height: '2px',
          borderRadius: '50%',
          background: 'var(--gold)',
          animation: `twinkle ${2 + i * 0.4}s ease-in-out infinite`,
          animationDelay: s.delay,
          pointerEvents: 'none',
        }} />
      ))}

      <p className={`section-label fade-up${visible ? ' visible' : ''} delay-1`}
        style={{ marginBottom: '2rem', opacity: visible ? undefined : 0 }}>
        Henderson, Nevada · Est. 2000
      </p>

      <h1 className={`fade-up${visible ? ' visible' : ''} delay-2`}
        style={{
          fontFamily: 'Cormorant Garant, serif',
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          fontWeight: 300, lineHeight: 1.05,
          color: 'var(--cream)',
          marginBottom: '0.25rem',
          letterSpacing: '-0.01em',
        }}>
        Crystal Alley
      </h1>

      <h1 className={`gold-shimmer fade-up${visible ? ' visible' : ''} delay-3`}
        style={{
          fontFamily: 'Cormorant Garant, serif',
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          fontWeight: 600, fontStyle: 'italic',
          lineHeight: 1.05, marginBottom: '2rem',
          letterSpacing: '-0.01em',
        }}>
        Emporium
      </h1>

      <span className={`gold-rule fade-in${visible ? ' visible' : ''} delay-4`}
        style={{ marginBottom: '2rem' }} />

      <p className={`fade-up${visible ? ' visible' : ''} delay-4`}
        style={{
          maxWidth: '480px',
          fontSize: isMobile ? '0.95rem' : '1.05rem',
          lineHeight: 1.8, color: 'var(--text-muted)',
          marginBottom: '3rem', fontWeight: 300,
          padding: isMobile ? '0 0.5rem' : '0',
        }}>
        Your sanctuary for crystals, tarot, candles, herbs & metaphysical tools.
        Where the sacred meets the everyday.
      </p>

      <a href="#about" className={`glow-btn fade-up${visible ? ' visible' : ''} delay-5`}>
        Explore the Shop
      </a>

      {/* Scroll hint */}
      <div className={`fade-in${visible ? ' visible' : ''} delay-6`}
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.5rem', opacity: 0.4,
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