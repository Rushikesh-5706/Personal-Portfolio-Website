import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import portfolioData from '../../data/portfolioData'

const stats = [
  { value: '3+', label: 'Production Systems Built' },
  { value: '10+', label: 'Technologies Mastered' },
  { value: 'AWS', label: 'Certified Developer' },
]

export default function About() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="about" aria-label="About me" style={{ padding: 'clamp(80px, 10vw, 140px) 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={childVariants} style={{ marginBottom: '64px' }}>
            <h2 className="section-title">About Me</h2>
            <div className="section-accent-line" />
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            <motion.div variants={childVariants} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    border: '2px solid transparent',
                    background:
                      'linear-gradient(#050508, #050508) padding-box, linear-gradient(135deg, #7C3AED, #06b6d4) border-box',
                    padding: '4px',
                  }}
                >
                  <img
                    src="/images/avatar.jpg"
                    alt="Rushikesh Kunisetty profile photo"
                    width="220"
                    height="220"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div
                    style={{
                      display: 'none',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: 'rgba(124,58,237,0.12)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '52px',
                      fontWeight: '800',
                      color: '#7C3AED',
                    }}
                  >
                    RK
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    inset: '-12px',
                    borderRadius: '50%',
                    border: '1px dashed rgba(124,58,237,0.3)',
                    pointerEvents: 'none',
                  }}
                  aria-hidden="true"
                />
              </div>
            </motion.div>

            <motion.div variants={childVariants}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '36px' }}>
                {portfolioData.bio.map((para, i) => (
                  <p key={i} style={{ fontSize: '16px', color: '#7070a0', lineHeight: '1.8' }}>
                    {para}
                  </p>
                ))}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                }}
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: '16px',
                      background: 'rgba(124,58,237,0.06)',
                      border: '1px solid rgba(124,58,237,0.15)',
                      borderRadius: '12px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: '22px',
                        fontWeight: '800',
                        color: '#7C3AED',
                        marginBottom: '4px',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '11px', color: '#7070a0', lineHeight: '1.4' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
