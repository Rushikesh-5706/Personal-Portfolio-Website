import { Mail } from 'lucide-react'
import { Github, Linkedin } from '../ui/Icons'
import portfolioData from '../../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#0d0d14',
        borderTop: '1px solid rgba(124,58,237,0.12)',
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <div style={{ display: 'flex', gap: '16px' }}>
        <a
          href={portfolioData.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          style={{
            color: '#7070a0',
            transition: 'color 0.2s ease',
            display: 'flex',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#7070a0')}
        >
          <Github size={20} />
        </a>
        <a
          href={portfolioData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          style={{
            color: '#7070a0',
            transition: 'color 0.2s ease',
            display: 'flex',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#7070a0')}
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${portfolioData.email}`}
          aria-label="Send email"
          style={{
            color: '#7070a0',
            transition: 'color 0.2s ease',
            display: 'flex',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#7070a0')}
        >
          <Mail size={20} />
        </a>
      </div>
      <p style={{ fontSize: '13px', color: '#7070a0', textAlign: 'center' }}>
        &copy; {year} Kunisetty Rushikesh. All rights reserved.
      </p>
    </footer>
  )
}
