import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ title, subtitle, description, stack, github, live, accent }) {
  const accentColor = accent === 'cyan' ? '#06b6d4' : '#7C3AED'
  const accentBg = accent === 'cyan' ? 'rgba(6,182,212,0.08)' : 'rgba(124,58,237,0.08)'
  const accentBorder = accent === 'cyan' ? 'rgba(6,182,212,0.15)' : 'rgba(124,58,237,0.15)'
  const accentBorderHover = accent === 'cyan' ? 'rgba(6,182,212,0.45)' : 'rgba(124,58,237,0.45)'

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { y: 0, scale: 1, rotateX: 0, rotateY: 0, borderColor: accentBorder, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' },
        hover: { y: -12, scale: 1.02, rotateX: 2, rotateY: -2, borderColor: accentColor, boxShadow: `0 20px 40px ${accentBg}` },
      }}
      style={{
        background: `linear-gradient(180deg, rgba(13,13,20,0.8) 0%, rgba(13,13,20,0.4) 100%)`,
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: 'clamp(24px, 5vw, 36px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid',
        transformPerspective: 1000,
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      <motion.div 
        variants={{ rest: { opacity: 0.5, scale: 1 }, hover: { opacity: 1, scale: 1.2 } }}
        style={{ position: 'absolute', top: '-20px', right: '-20px', width: '200px', height: '200px', background: accentBg, filter: 'blur(60px)', pointerEvents: 'none', transition: 'all 0.4s ease' }} 
      />
      <div style={{ marginBottom: '24px', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            background: accentBg,
            border: `1px solid ${accentBorder}`,
            borderRadius: '8px',
            fontSize: 'clamp(10px, 2vw, 12px)',
            fontWeight: '600',
            color: accentColor,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            overflowWrap: 'anywhere',
            wordBreak: 'break-word',
          }}
        >
          {subtitle}
        </div>
        <h3
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(18px, 4vw, 22px)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: '1.3',
            marginBottom: '16px',
            overflowWrap: 'anywhere',
            wordBreak: 'break-word',
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: 'clamp(14px, 3vw, 15px)', color: '#8888b0', lineHeight: '1.7', flexGrow: 1 }}>
          {description}
        </p>
      </div>

      <div style={{ marginTop: 'auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {stack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: '4px 10px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                fontSize: 'clamp(12px, 2vw, 13px)',
                color: '#a0a0c0',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '500',
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
