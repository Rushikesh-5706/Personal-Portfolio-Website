import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import useActiveSection from '../../hooks/useActiveSection'

const NAV_LINKS = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Education', href: 'education' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Contact', href: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.href))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 24px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
          background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(124,58,237,0.15)' : '1px solid transparent',
        }}
      >
        <button
          onClick={() => scrollTo('hero')}
          aria-label="Go to top"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: '800',
            fontSize: '20px',
            color: '#e8e8f4',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: '#7C3AED' }}>R</span>K
        </button>

        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            listStyle: 'none',
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                style={{
                  cursor: 'pointer',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: '600',
                  borderRadius: '100px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  color: activeSection === link.href ? '#ffffff' : '#8888b0',
                  background: activeSection === link.href ? 'rgba(124,58,237,0.15)' : 'transparent',
                  border: activeSection === link.href ? '1px solid rgba(124,58,237,0.3)' : '1px solid transparent',
                  boxShadow: activeSection === link.href ? '0 0 15px rgba(124,58,237,0.1)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.href) {
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href) {
                    e.currentTarget.style.color = '#8888b0'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          style={{
            background: 'none',
            border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '8px',
            padding: '8px',
            cursor: 'pointer',
            color: '#e8e8f4',
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(5,5,8,0.97)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '28px',
                  fontWeight: '700',
                  color: activeSection === link.href ? '#7C3AED' : '#e8e8f4',
                  padding: '12px 32px',
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
