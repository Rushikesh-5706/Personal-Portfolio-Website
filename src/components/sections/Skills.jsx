import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SkillBadge from '../ui/SkillBadge'
import portfolioData from '../../data/portfolioData'

const categories = ['AI & ML', 'Cloud', 'Backend', 'Web3']

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="skills"
      aria-label="Skills and technologies"
      style={{
        padding: 'clamp(80px, 10vw, 140px) 24px',
        background: '#0d0d14',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '64px' }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-accent-line" />
          <p style={{ fontSize: '16px', color: '#7070a0', maxWidth: '520px' }}>
            A focused set of technologies I have applied in production systems and research projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
        >
          {categories.map((cat) => {
            const catSkills = portfolioData.skills.filter((s) => s.category === cat)
            if (catSkills.length === 0) return null
            return (
              <motion.div key={cat} variants={itemVariants}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      letterSpacing: '0.12em',
                      color: '#7070a0',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cat}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: '1px',
                      background: 'rgba(124,58,237,0.1)',
                    }}
                    aria-hidden="true"
                  />
                </div>
                <motion.div
                  variants={containerVariants}
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
                >
                  {catSkills.map((skill) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                      <SkillBadge name={skill.name} category={skill.category} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
