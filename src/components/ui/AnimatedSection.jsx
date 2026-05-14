import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
