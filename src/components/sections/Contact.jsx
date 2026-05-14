import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Mail } from 'lucide-react'
import portfolioData from '../../data/portfolioData'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rushikeshkunisetty@gmail.com',
    href: 'mailto:rushikeshkunisetty@gmail.com',
    external: false,
    accent: '#7C3AED',
    accentBg: 'rgba(124,58,237,0.08)',
    accentBorder: 'rgba(124,58,237,0.2)',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Rushikesh-5706',
    href: 'https://github.com/Rushikesh-5706',
    external: true,
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.08)',
    accentBorder: 'rgba(167,139,250,0.2)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'rushikeshkunisetty5706',
    href: 'https://www.linkedin.com/in/rushikeshkunisetty5706/',
    external: true,
    accent: '#06b6d4',
    accentBg: 'rgba(6,182,212,0.08)',
    accentBorder: 'rgba(6,182,212,0.2)',
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      style={{
        padding: 'clamp(80px, 10vw, 140px) 24px',
        background: '#0d0d14',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: '24px' }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <div className="section-accent-line" style={{ margin: '12px auto 32px' }} />
          <p style={{ fontSize: '16px', color: '#7070a0', lineHeight: '1.8', marginBottom: '56px' }}>
            I am currently open to new opportunities and collaborations. If you are working on
            something at the intersection of AI, cloud infrastructure, or blockchain, reach out
            through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {contactItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.label}
                variants={itemVariants}
                whileHover={{ x: 6, borderColor: item.accent }}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                aria-label={`${item.label}: ${item.value}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px 24px',
                  background: item.accentBg,
                  border: `1px solid ${item.accentBorder}`,
                  borderRadius: '14px',
                  textDecoration: 'none',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: `${item.accentBg}`,
                    border: `1px solid ${item.accentBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={item.accent} aria-hidden="true" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      letterSpacing: '0.1em',
                      color: '#7070a0',
                      textTransform: 'uppercase',
                      marginBottom: '2px',
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '500', color: '#e8e8f4' }}>
                    {item.value}
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
