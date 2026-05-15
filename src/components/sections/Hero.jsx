import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { ChevronDown, Download } from 'lucide-react'
import portfolioData from '../../data/portfolioData'
import MagneticButton from '../ui/MagneticButton'

export default function Hero() {
  const { titles, tagline } = portfolioData
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = titles[roleIndex]
    let timeout

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % titles.length)
    } else {
      timeout = setTimeout(
        () =>
          setDisplayed(
            isDeleting
              ? current.slice(0, displayed.length - 1)
              : current.slice(0, displayed.length + 1)
          ),
        isDeleting ? 45 : 95
      )
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex, titles])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#050508',
      }}
    >
      <Parallax translateY={[-18, 18]} style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
        <motion.div
          className="blob blob-1"
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </Parallax>

      <Parallax translateY={[10, -10]} style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
        <motion.div
          className="blob blob-2"
          animate={{ x: [0, -25, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
      </Parallax>

      <motion.div
        className="blob blob-3"
        aria-hidden="true"
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="grid-overlay" aria-hidden="true" style={{ position: 'absolute', inset: 0 }} />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 24px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '100px',
            border: '1px solid rgba(124,58,237,0.35)',
            background: 'rgba(124,58,237,0.08)',
            marginBottom: '32px',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#7C3AED',
              animation: 'pulse 2s infinite',
            }}
          />
          <span style={{ fontSize: '13px', color: '#a78bfa', fontWeight: '500' }}>
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(3.5rem, 12vw, 8.5rem)',
            fontWeight: '800',
            lineHeight: '0.9',
            letterSpacing: '-0.04em',
            color: '#ffffff',
            marginBottom: '24px',
            textShadow: '0 20px 40px rgba(0,0,0,0.5)',
            width: '100%',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'normal',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '120%', background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 60%)', filter: 'blur(40px)', zIndex: -1, animation: 'pulse 4s infinite alternate' }} aria-hidden="true" />
          Rushikesh
          <br />
          <span className="text-gradient" style={{ textShadow: '0 0 80px rgba(124,58,237,0.3)', display: 'inline-block' }}>Kunisetty</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
            fontWeight: '600',
            color: '#7070a0',
            marginBottom: '20px',
            height: '2.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
          }}
        >
          <span className="shimmer-text" style={{ fontWeight: '700' }}>{displayed}</span>
          <span
            className="animate-blink"
            style={{ color: '#7C3AED', marginLeft: '1px', fontWeight: '300' }}
          >
            |
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#7070a0',
            maxWidth: '560px',
            margin: '0 auto 44px',
            lineHeight: '1.7',
          }}
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <MagneticButton
            onClick={() => scrollTo('projects')}
            className="btn-primary"
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo('contact')}
            className="btn-secondary"
          >
            Get in Touch
          </MagneticButton>
          <MagneticButton
            href={portfolioData.resumeUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ alignItems: 'center', gap: '8px' }}
          >
            <Download size={18} />
            Resume
          </MagneticButton>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#7070a0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#7070a0')}
      >
        <span style={{ fontSize: '11px', letterSpacing: '0.1em' }}>SCROLL</span>
        <ChevronDown size={20} aria-hidden="true" />
      </motion.button>
    </section>
  )
}
