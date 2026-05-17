import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CertificationCard from '../ui/CertificationCard'
import portfolioData from '../../data/portfolioData'

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="certifications" aria-label="Certifications" style={{ padding: 'clamp(80px, 10vw, 140px) 24px', background: '#050508' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <h2 className="section-title">Certifications</h2>
          <div className="section-accent-line" style={{ margin: '12px auto 32px' }} />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {portfolioData.certifications.map((cert) => (
            <motion.div key={cert.title} variants={cardVariants} style={{ height: '100%' }}>
              <CertificationCard
                title={cert.title}
                category={cert.category}
                description={cert.description}
                provider={cert.provider}
                icon={cert.icon}
                links={cert.links}
                tags={cert.tags}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
