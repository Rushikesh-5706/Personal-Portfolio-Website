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
                whileHover={{ y: -6, borderColor: '#06b6d4' }}
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '32px',
                  background: 'rgba(13,13,20,0.7)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${borderColor}`,
                  borderRadius: '16px',
                  transition: 'border-color 0.3s ease, transform 0.3s ease',
                  height: '100%',
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <Icon size={32} color="#06b6d4" aria-hidden="true" />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '20px',
                      fontWeight: '700',
                      color: achievement.highlight ? '#06b6d4' : '#e8e8f4',
                      marginBottom: '12px',
                      lineHeight: '1.3',
                    }}
                  >
                    {achievement.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#7070a0', lineHeight: '1.7' }}>
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
