import { motion } from 'framer-motion'
import { Cloud, Award, Blocks, Server, Database, Code } from 'lucide-react'

const iconMap = {
  aws: Cloud,
  ibm: Award,
  blockchain: Blocks,
  gcp: Server,
  oracle: Database,
  code: Code,
}

const colorMap = {
  aws: { glow: '#f97316', hex: '#f97316' }, // Orange glow
  ibm: { glow: '#9333ea', hex: '#9333ea' }, // Purple glow
  blockchain: { glow: '#06b6d4', hex: '#06b6d4' }, // Cyan glow
  gcp: { glow: '#3b82f6', hex: '#3b82f6' }, // Blue glow
  oracle: { glow: '#ef4444', hex: '#ef4444' }, // Red glow
  code: { glow: '#10b981', hex: '#10b981' }, // Emerald glow
}

export default function CertificationCard({ title, category, description, provider, icon }) {
  const Icon = iconMap[icon] || Award
  const colors = colorMap[icon] || { glow: '#7C3AED', hex: '#7C3AED' }

  return (
    <motion.article
      whileHover={{ y: -6, borderColor: colors.glow }}
      style={{
        background: 'rgba(13,13,20,0.7)',
        backdropFilter: 'blur(16px)',
        border: `1px solid rgba(255,255,255,0.05)`,
        borderRadius: '16px',
        padding: '32px 24px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'border-color 0.3s ease',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <Icon size={48} color={colors.hex} aria-hidden="true" />
      </div>

      <h3
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '20px',
          fontWeight: '700',
          color: '#e8e8f4',
          lineHeight: '1.3',
          marginBottom: '8px',
        }}
      >
        {title}
      </h3>
      
      <div
        style={{
          fontSize: '14px',
          fontWeight: '600',
          color: colors.hex,
          marginBottom: '16px',
        }}
      >
        {provider}
      </div>

      <p style={{ fontSize: '14px', color: '#7070a0', lineHeight: '1.7', flexGrow: 1 }}>
        {description}
      </p>
    </motion.article>
  )
}
