import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap } from 'lucide-react'
import portfolioData from '../../data/portfolioData'

export default function Education() {
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
    <section id="education" aria-label="Education" style={{ padding: 'clamp(80px, 10vw, 140px) 24px', background: '#0d0d14' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <h2 className="section-title">Education</h2>
          <div className="section-accent-line" style={{ margin: '12px auto 32px' }} />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: 'rgba(6,182,212,0.45)' }}
              style={{
                display: 'flex',
                gap: '24px',
                padding: '32px',
                background: 'rgba(13,13,20,0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '16px',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <GraduationCap size={32} color="#06b6d4" aria-hidden="true" />
              </div>
              <div style={{ flexGrow: 1 }}>
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#e8e8f4',
                    marginBottom: '8px',
                  }}
                >
                  {edu.institution}
                </h3>
                <div style={{ fontSize: '14px', color: '#06b6d4', marginBottom: '12px', fontWeight: '500' }}>
                  {edu.duration}
                </div>
                <div style={{ fontSize: '15px', color: '#7070a0', marginBottom: '16px' }}>
                  {edu.degree}
                  {edu.rollNo && ` - Roll No: ${edu.rollNo}`}
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    background: 'rgba(6,182,212,0.1)',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#06b6d4',
                  }}
                >
                  {edu.scoreLabel}: {edu.score}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
