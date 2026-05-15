import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectCard from '../ui/ProjectCard'
import portfolioData from '../../data/portfolioData'

export default function Projects() {
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
    <section id="projects" aria-label="Projects" style={{ padding: 'clamp(80px, 10vw, 140px) 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '64px' }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-accent-line" />
          <p style={{ fontSize: '16px', color: '#7070a0', maxWidth: '520px' }}>
            Production systems and research implementations across AI, cloud, and blockchain.
          </p>
        </motion.div>

        <motion.div
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
          {portfolioData.projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants} style={{ height: '100%' }}>
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                stack={project.stack}
                github={project.github}
                live={project.live}
                accent={project.accent}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
