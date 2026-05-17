import { motion } from 'framer-motion'
import { Cloud, Award, Blocks, Server, Database, Code, FileText, CheckCircle, Brain } from 'lucide-react'

const iconMap = {
  aws: Cloud,
  ibm: Award,
  blockchain: Blocks,
  gcp: Server,
  oracle: Database,
  code: Code,
  microsoft: Brain,
}

const colorMap = {
  aws: { glow: '#f97316', hex: '#f97316' },
  ibm: { glow: '#9333ea', hex: '#9333ea' },
  blockchain: { glow: '#06b6d4', hex: '#06b6d4' },
  gcp: { glow: '#3b82f6', hex: '#3b82f6' },
  oracle: { glow: '#ef4444', hex: '#ef4444' },
  code: { glow: '#10b981', hex: '#10b981' },
  microsoft: { glow: '#38bdf8', hex: '#38bdf8' },
}

export default function CertificationCard({ title, category, description, provider, icon, links, tags }) {
  const Icon = iconMap[icon] || Award
  const colors = colorMap[icon] || { glow: '#7C3AED', hex: '#7C3AED' }

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { y: 0, borderColor: 'rgba(255,255,255,0.05)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' },
        hover: { y: -8, borderColor: colors.glow, boxShadow: `0 12px 30px rgba(${parseInt(colors.hex.slice(1,3), 16)}, ${parseInt(colors.hex.slice(3,5), 16)}, ${parseInt(colors.hex.slice(5,7), 16)}, 0.15)` },
      }}
      style={{
        background: `linear-gradient(180deg, rgba(13,13,20,0.8) 0%, rgba(13,13,20,0.4) 100%)`,
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: 'clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <motion.div
        variants={{
          rest: { opacity: 0.1, filter: 'blur(80px)' },
          hover: { opacity: 0.25, filter: 'blur(60px)' }
        }}
        style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '150px', height: '150px', background: colors.glow, pointerEvents: 'none', transition: 'all 0.4s ease' }} 
      />
      
      <motion.div 
        variants={{
          rest: { y: 0 },
          hover: { y: -6 }
        }}
        style={{ marginBottom: '24px', position: 'relative', zIndex: 1, transition: 'all 0.4s ease', width: 'clamp(48px, 8vw, 64px)', height: 'clamp(48px, 8vw, 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Icon size={48} color={colors.hex} aria-hidden="true" style={{ filter: `drop-shadow(0 0 16px ${colors.glow})` }} />
      </motion.div>

      <h3
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(18px, 4vw, 24px)',
          fontWeight: '800',
          color: '#ffffff',
          lineHeight: '1.3',
          marginBottom: '12px',
          position: 'relative', zIndex: 1,
          overflowWrap: 'anywhere',
          wordBreak: 'break-word',
        }}
      >
        {title}
      </h3>
      
      <div
        style={{
          fontSize: 'clamp(13px, 3vw, 15px)',
          fontWeight: '700',
          color: colors.hex,
          marginBottom: '16px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          position: 'relative', zIndex: 1,
        }}
      >
        {provider}
      </div>

      <p style={{ fontSize: 'clamp(14px, 3vw, 15px)', color: '#8888b0', lineHeight: '1.7', flexGrow: 1, position: 'relative', zIndex: 1, marginBottom: (tags || links) ? '24px' : '0' }}>
        {description}
      </p>

      {tags && tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '4px 10px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                fontSize: 'clamp(11px, 2vw, 12px)',
                color: '#a0a0c0',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '500',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {(links?.view || links?.verify) && (
        <motion.div
          variants={{
            rest: { opacity: 0.8, y: 8 },
            hover: { opacity: 1, y: 0 }
          }}
          style={{
            display: 'flex', gap: '12px', width: '100%', justifyContent: 'center', position: 'relative', zIndex: 1, transition: 'all 0.4s ease'
          }}
        >
          {links.view && (
            <a
              href={links.view}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '12px 24px', background: colors.glow, color: '#050508',
                fontSize: '14px', fontWeight: '700', borderRadius: '10px',
                textDecoration: 'none', transition: 'filter 0.3s ease, transform 0.2s ease',
                filter: `drop-shadow(0 4px 12px rgba(${parseInt(colors.hex.slice(1,3), 16)}, ${parseInt(colors.hex.slice(3,5), 16)}, ${parseInt(colors.hex.slice(5,7), 16)}, 0.4))`
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <FileText size={16} color="#050508" /> View
            </a>
          )}
          {links.verify && (
            <a
              href={links.verify}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '12px 24px', background: 'transparent', color: colors.hex,
                border: `1px solid ${colors.glow}`, fontSize: '14px', fontWeight: '600',
                borderRadius: '10px', textDecoration: 'none', transition: 'background 0.3s ease, color 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)' 
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)' 
              }}
            >
              <CheckCircle size={16} /> Verify
            </a>
          )}
        </motion.div>
      )}
    </motion.article>
  )
}
