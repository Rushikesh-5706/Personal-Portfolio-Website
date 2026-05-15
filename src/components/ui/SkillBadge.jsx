import { motion } from 'framer-motion'
import { Brain, Cloud, Code2, Cpu, Layers, Server, TestTube, Zap } from 'lucide-react'

const categoryConfig = {
  'AI & ML': { icon: Brain, color: '#7C3AED', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.25)' },
  Cloud: { icon: Cloud, color: '#06b6d4', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.25)' },
  Backend: { icon: Server, color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)' },
  Web3: { icon: Layers, color: '#67e8f9', bg: 'rgba(103,232,249,0.1)', border: 'rgba(103,232,249,0.25)' },
}

export default function SkillBadge({ name, category }) {
  const config = categoryConfig[category] || {
    icon: Code2,
    color: '#7070a0',
    bg: 'rgba(112,112,160,0.1)',
    border: 'rgba(112,112,160,0.2)',
  }
  const Icon = config.icon

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4, boxShadow: `0 8px 24px ${config.bg}` }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 20px',
        background: `linear-gradient(135deg, ${config.bg}, rgba(13,13,20,0.8))`,
        border: `1px solid ${config.border}`,
        borderRadius: '12px',
        cursor: 'default',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Icon size={20} color={config.color} aria-hidden="true" />
      <span style={{ fontSize: '14px', fontWeight: '500', color: '#e8e8f4' }}>{name}</span>
    </motion.div>
  )
}
