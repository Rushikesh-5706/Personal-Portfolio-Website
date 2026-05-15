import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Medal } from 'lucide-react'
import portfolioData from '../../data/portfolioData'

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="achievements" aria-label="Achievements" style={{ padding: 'clamp(80px, 10vw, 140px) 24px', background: '#050508' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <h2 className="section-title">Achievements</h2>
          <div className="section-accent-line" style={{ margin: '12px auto 32px' }} />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {portfolioData.achievements.map((achievement, idx) => {
            const Icon = achievement.icon === 'trophy' ? Trophy : Medal
            const borderColor = achievement.highlight ? '#06b6d4' : 'rgba(255,255,255,0.05)'
            
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, borderColor: '#06b6d4', boxShadow: achievement.highlight ? '0 12px 40px rgba(6,182,212,0.2)' : '0 12px 30px rgba(0,0,0,0.4)' }}
                style={{
                  display: 'flex',
                  gap: '24px',
                  padding: '40px',
                  background: 'linear-gradient(180deg, rgba(13,13,20,0.8) 0%, rgba(13,13,20,0.4) 100%)',
                  backdropFilter: 'blur(24px)',
                  border: `1px solid ${borderColor}`,
                  borderRadius: '24px',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {achievement.highlight && (
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'rgba(6,182,212,0.1)', filter: 'blur(60px)', pointerEvents: 'none' }} />
                )}
                <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <Icon size={64} color={achievement.highlight ? '#06b6d4' : '#a0a0c0'} aria-hidden="true" style={{ filter: achievement.highlight ? 'drop-shadow(0 0 16px rgba(6,182,212,0.6))' : 'none' }} />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '24px',
                      fontWeight: '800',
                      color: achievement.highlight ? '#06b6d4' : '#ffffff',
                      marginBottom: '16px',
                      lineHeight: '1.3',
                      textShadow: achievement.highlight ? '0 0 20px rgba(6,182,212,0.3)' : 'none',
                    }}
                  >
                    {achievement.title}
                  </h3>
                  <p style={{ fontSize: '16px', color: '#8888b0', lineHeight: '1.8' }}>
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
