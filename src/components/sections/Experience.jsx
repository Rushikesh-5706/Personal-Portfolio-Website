import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'
import portfolioData from '../../data/portfolioData'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const exp = portfolioData.experience

  return (
    <section id="experience" aria-label="Experience" style={{ padding: 'clamp(80px, 10vw, 140px) 24px', background: '#0d0d14' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="section-accent-line" style={{ margin: '12px auto 32px' }} />
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            padding: '40px',
            background: 'rgba(13,13,20,0.7)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(124,58,237,0.15)',
            borderRadius: '24px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', marginBottom: '32px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{ padding: '8px', background: 'rgba(124,58,237,0.1)', borderRadius: '10px' }}>
                  <Briefcase size={24} color="#7C3AED" />
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '24px', fontWeight: '800', color: '#e8e8f4' }}>
                  {exp.role}
                </h3>
              </div>
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#7C3AED', marginLeft: '52px' }}>
                {exp.company}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start', marginLeft: '52px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7070a0', fontSize: '14px' }}>
                <Calendar size={16} />
                <span>{exp.duration}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7070a0', fontSize: '14px' }}>
                <MapPin size={16} />
                <span>{exp.mode}</span>
              </div>
            </div>
          </div>

          <ul style={{ listStyle: 'none', paddingLeft: '52px', margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {exp.description_points.map((point, idx) => (
              <li key={idx} style={{ position: 'relative', fontSize: '15px', color: '#e8e8f4', lineHeight: '1.7' }}>
                <span style={{ position: 'absolute', left: '-24px', top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }} />
                {point}
              </li>
            ))}
          </ul>

          <div style={{ marginLeft: '52px', display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
            {exp.skills.map((skill, idx) => (
              <span
                key={idx}
                style={{
                  padding: '6px 14px',
                  background: 'rgba(124,58,237,0.06)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: '#a78bfa',
                  fontWeight: '500',
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div style={{ marginLeft: '52px' }}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={exp.certificateUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(124,58,237,0.2))',
                border: '1px solid rgba(124,58,237,0.5)',
                borderRadius: '10px',
                color: '#e8e8f4',
                fontFamily: 'Syne, sans-serif',
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(124,58,237,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <Award size={18} color="#a78bfa" />
              {exp.certificate_button}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
