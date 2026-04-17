import { useState, useEffect } from 'react'
import { useIsMobile } from '../hooks/useMediaQuery'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Gallery', 'Events', 'Testimonials', 'Contact']

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '1rem 1.5rem' : '1.25rem 3rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.5s ease',
        background: scrolled || menuOpen
          ? 'linear-gradient(to bottom, rgba(10,8,9,0.97), rgba(10,8,9,0.95))'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}>
        <a href="#hero" style={{
          fontFamily: 'Cormorant Garant, serif',
          fontSize: '1.4rem',
          fontWeight: 600,
          color: 'var(--gold-light)',
          textDecoration: 'none',
          letterSpacing: '0.05em',
        }}>
          Crystal Alley
        </a>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{
              display: 'block', width: '24px', height: '1px',
              background: 'var(--gold)',
              transition: 'all 0.3s',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '24px', height: '1px',
              background: 'var(--gold)',
              transition: 'all 0.3s',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '24px', height: '1px',
              background: 'var(--gold)',
              transition: 'all 0.3s',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }} />
          </button>
        ) : (
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map(l => (
              <NavLink key={l} label={l} />
            ))}
          </ul>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 99,
          background: 'rgba(10,8,9,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          padding: '6rem 2rem 2.5rem',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={handleLinkClick}
              style={{
                color: 'var(--cream)',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontFamily: 'Cormorant Garant, serif',
                fontWeight: 300,
                letterSpacing: '0.1em',
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

function NavLink({ label }) {
  const [hovered, setHovered] = useState(false)

  return (
    <li>
      <a
        href={`#${label.toLowerCase()}`}
        style={{
          color: hovered ? 'var(--gold-light)' : 'var(--text-muted)',
          textDecoration: 'none',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          transition: 'color 0.3s',
          fontWeight: 300,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </a>
    </li>
  )
}