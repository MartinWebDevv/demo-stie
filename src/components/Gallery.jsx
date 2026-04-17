import { useState } from 'react'
import { useIsMobile } from '../hooks/useMediaQuery'
import { useInView } from '../hooks/useInView'

const items = [
  {
    label: 'Raw Amethyst Clusters',
    img: 'https://images.unsplash.com/photo-1679395283817-39f56e249ea6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW1ldGh5c3QlMjBjcnlzdGFsfGVufDB8fDB8fHww',
    span: 2,
  },
  {
    label: 'Rose Quartz',
    img: 'https://plus.unsplash.com/premium_photo-1675855748166-a66d26c3b6da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9zZSUyMHF1YXJ0eiUyMGNyeXN0YWx8ZW58MHx8MHx8fDA%3D',
    span: 1,
  },
  {
    label: 'Crystal Collection',
    img: 'https://media.istockphoto.com/id/1292568027/photo/set-of-semi-precious-stones-on-a-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=2I9MCEPQa5DYehDqj-KT2qL471YwuF_1BDim5dhV3j4=',
    span: 1,
  },
  {
    label: 'Tarot Cards',
    img: 'https://images.unsplash.com/photo-1600429991827-5224817554f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    span: 1,
  },
  {
    label: 'Crystal Jewelry',
    img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    span: 1,
  },
]

function GalleryCard({ item, index, isMobile, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fade-up${inView ? ' visible' : ''} delay-${Math.min(index + 1, 6)}`}
      style={{
        gridColumn: isMobile ? 'span 1' : (index === 0 ? 'span 2' : 'span 1'),
        aspectRatio: index === 0 && !isMobile ? '16/9' : '4/3',
        position: 'relative',
        overflow: 'hidden',
        border: hovered ? '1px solid rgba(201,168,76,0.4)' : '1px solid var(--border)',
        cursor: 'pointer',
        transition: 'border 0.4s ease, opacity 0.75s ease, transform 0.75s ease',
      }}
    >
      <img
        src={item.img}
        alt={item.label}
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.7s ease',
          display: 'block',
        }}
      />
      {/* Gold shimmer overlay on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(201,168,76,0.06), transparent)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
      }} />
      {/* Label overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,8,9,0.88) 0%, transparent 55%)',
        opacity: isMobile ? 1 : hovered ? 1 : 0,
        transition: 'opacity 0.4s',
        display: 'flex', alignItems: 'flex-end',
        padding: '1.25rem',
      }}>
        <span style={{
          fontFamily: 'Cormorant Garant, serif',
          fontSize: '1rem', color: 'var(--gold-light)',
          transform: hovered ? 'translateY(0)' : 'translateY(6px)',
          transition: 'transform 0.4s ease',
        }}>{item.label}</span>
      </div>
    </div>
  )
}

export default function Gallery() {
  const isMobile = useIsMobile()
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section id="gallery" style={{
      padding: isMobile ? '5rem 1.5rem' : '8rem 2rem',
      background: '#0a0809',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className={`section-label fade-up${headerInView ? ' visible' : ''} delay-1`}
            style={{ marginBottom: '1.5rem' }}>The Collection</p>
          <h2 className={`fade-up${headerInView ? ' visible' : ''} delay-2`}
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 300 }}>
            Step Inside the{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Emporium</em>
          </h2>
          <span className={`gold-rule fade-in${headerInView ? ' visible' : ''} delay-3`}
            style={{ marginTop: '1.5rem' }} />
        </div>

        <div ref={gridRef} style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '0.75rem',
        }}>
          {items.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} isMobile={isMobile} inView={gridInView} />
          ))}
        </div>
      </div>
    </section>
  )
}