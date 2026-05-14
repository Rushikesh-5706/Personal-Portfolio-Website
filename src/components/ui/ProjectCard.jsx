import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Github } from './Icons'

export default function ProjectCard({ title, subtitle, description, stack, github, live, accent }) {
  const accentColor = accent === 'cyan' ? '#06b6d4' : '#7C3AED'
  const accentBg = accent === 'cyan' ? 'rgba(6,182,212,0.08)' : 'rgba(124,58,237,0.08)'
  const accentBorder = accent === 'cyan' ? 'rgba(6,182,212,0.15)' : 'rgba(124,58,237,0.15)'
  const accentBorderHover = accent === 'cyan' ? 'rgba(6,182,212,0.45)' : 'rgba(124,58,237,0.45)'

  return (
    <motion.article
      whileHover={{ y: -6, borderColor: accentBorderHover }}
      style={{
        background: 'rgba(13,13,20,0.7)',
        backdropFilter: 'blur(16px)',
        border: `1px solid ${accentBorder}`,
        borderRadius: '16px',
        padding: '28px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s ease',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            background: accentBg,
            border: `1px solid ${accentBorder}`,
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: '600',
            color: accentColor,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          {subtitle}
        </div>
        <h3
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '18px',
            fontWeight: '700',
            color: '#e8e8f4',
            lineHeight: '1.3',
            marginBottom: '12px',
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: '14px', color: '#7070a0', lineHeight: '1.7', flexGrow: 1 }}>
          {description}
        </p>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {stack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: '4px 10px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#7070a0',
                fontFamily: 'monospace',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} on GitHub`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              color: '#e8e8f4',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = accentColor
              e.currentTarget.style.color = accentColor
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = '#e8e8f4'
            }}
          >
            <Github size={14} aria-hidden="true" />
            GitHub
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${title}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                background: accentBg,
                border: `1px solid ${accentBorder}`,
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '500',
                color: accentColor,
                textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = accentBg.replace('0.08', '0.15')
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = accentBg
              }}
            >
              <ExternalLink size={14} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
