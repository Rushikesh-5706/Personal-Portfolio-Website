import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import portfolioData from '../../data/portfolioData'
import MagneticButton from '../ui/MagneticButton'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rushikeshkunisetty@gmail.com',
    href: 'mailto:rushikeshkunisetty@gmail.com',
    external: false,
    accent: '#7C3AED',
    accentBg: 'rgba(124,58,237,0.1)',
    accentBorder: 'rgba(124,58,237,0.25)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'rushikeshkunisetty5706',
    href: 'https://www.linkedin.com/in/rushikeshkunisetty5706/',
    external: true,
    accent: '#06b6d4',
    accentBg: 'rgba(6,182,212,0.1)',
    accentBorder: 'rgba(6,182,212,0.25)',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Rushikesh-5706',
    href: 'https://github.com/Rushikesh-5706',
    external: true,
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.1)',
    accentBorder: 'rgba(167,139,250,0.25)',
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      style={{
        position: 'relative',
        padding: 'clamp(100px, 12vw, 160px) 24px',
        background: '#0d0d14',
        overflow: 'hidden',
      }}
    >
      <div className="grid-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} aria-hidden="true" />
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', maxWidth: '1200px', height: '800px', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 60%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <div className="section-accent-line" style={{ margin: '16px auto 32px' }} />
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#8888b0', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto' }}>
            I am currently open to new opportunities. Whether you have a question about AI, cloud infrastructure, 
            blockchain, or simply want to connect, my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          {contactItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.label}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover="hover"
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                aria-label={`${item.label}: ${item.value}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  padding: '36px 28px',
                  background: 'linear-gradient(180deg, rgba(15,15,22,0.8) 0%, rgba(10,10,15,0.95) 100%)',
                  backdropFilter: 'blur(24px)',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid',
                  transformPerspective: 1000,
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, borderColor: 'rgba(255,255,255,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', rotateX: 0, rotateY: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                  hover: { y: -8, borderColor: item.accentBorder, boxShadow: `0 20px 40px ${item.accentBg}`, rotateX: 2, rotateY: -2 }
                }}
              >
                <motion.div 
                  variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                  style={{ position: 'absolute', inset: 0, background: `linear-gradient(120deg, transparent, ${item.accentBg}, transparent)`, backgroundSize: '200% 100%', animation: 'shimmerBorder 3s infinite linear', pointerEvents: 'none', zIndex: 0 }}
                />

                <motion.div
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1 }
                  }}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: item.accentBg,
                    border: `1px solid ${item.accentBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                    transition: 'all 0.4s ease',
                  }}
                >
                  <Icon size={32} color={item.accent} aria-hidden="true" style={{ filter: `drop-shadow(0 0 12px ${item.accent})` }} />
                </motion.div>
                
                <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '0.15em',
                      color: '#7070a0',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: '600', color: '#e8e8f4', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {item.value}
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            padding: '64px 24px',
            background: 'radial-gradient(ellipse at top, rgba(124,58,237,0.15) 0%, transparent 70%)',
            borderTop: '1px solid rgba(124,58,237,0.2)',
            borderRadius: '32px',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(13,13,20,0.8) 100%)', pointerEvents: 'none' }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', color: '#ffffff', marginBottom: '32px', lineHeight: '1.1', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              Let’s build something <br className="hidden md:block" />
              <span className="text-gradient" style={{ textShadow: '0 0 40px rgba(124,58,237,0.3)' }}>impactful together.</span>
            </h3>
            
            <MagneticButton
              href="mailto:rushikeshkunisetty@gmail.com"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '18px 40px',
                fontSize: '16px',
                fontWeight: '700',
                borderRadius: '100px',
              }}
            >
              Start a Conversation <ArrowRight size={20} />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
