import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px'
        glowRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div ref={glowRef} className="cursor-glow" />
}

function Divider() {
  return <div className="section-divider" />
}

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Gallery />
      <Divider />
      <Events />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
    </>
  )
}

export default App