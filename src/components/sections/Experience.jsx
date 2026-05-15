import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, Award, Users } from 'lucide-react'
import portfolioData from '../../data/portfolioData'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const experiences = portfolioData.experience

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

        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'relative',
                padding: '48px',
                background: 'linear-gradient(180deg, rgba(13,13,20,0.9) 0%, rgba(13,13,20,0.5) 100%)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(124,58,237,0.2)',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'rgba(124,58,237,0.08)', filter: 'blur(80px)', pointerEvents: 'none' }} />
              
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                    <div style={{ padding: '12px', background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(124,58,237,0.05))', borderRadius: '12px', border: '1px solid rgba(124,58,237,0.3)' }}>
                      <Briefcase size={28} color="#a78bfa" />
                    </div>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '28px', fontWeight: '800', color: '#ffffff' }}>
                      {exp.role}
                    </h3>
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '700', color: '#7C3AED', marginLeft: '68px', letterSpacing: '0.02em' }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start', marginLeft: '68px', padding: '12px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a0a0c0', fontSize: '15px', fontWeight: '500' }}>
                    <Calendar size={18} color="#7C3AED" />
                    <span>{exp.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a0a0c0', fontSize: '15px', fontWeight: '500' }}>
                    {exp.mode === 'Student Leadership Program' ? (
                      <Users size={18} color="#06b6d4" />
                    ) : (
                      <MapPin size={18} color="#06b6d4" />
                    )}
                    <span>{exp.mode}</span>
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative', paddingLeft: '68px', zIndex: 1 }}>
                <div style={{ position: 'absolute', left: '26px', top: '0', bottom: '0', width: '2px', background: 'linear-gradient(180deg, rgba(124,58,237,0.5) 0%, rgba(124,58,237,0) 100%)' }} />
                
                <ul style={{ listStyle: 'none', margin: '0 0 36px 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {exp.description_points.map((point, idx) => (
                    <li key={idx} style={{ position: 'relative', fontSize: '16px', color: '#e8e8f4', lineHeight: '1.8' }}>
                      <span style={{ position: 'absolute', left: '-46px', top: '10px', width: '8px', height: '8px', borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 10px #a78bfa' }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginLeft: '68px', display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: exp.certificate_button ? '32px' : '0', position: 'relative', zIndex: 1 }}>
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

              {exp.certificate_button && (
                <div style={{ marginLeft: '68px', position: 'relative', zIndex: 1 }}>
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
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
