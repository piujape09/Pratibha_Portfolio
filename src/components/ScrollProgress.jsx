import { motion, useSpring, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9998] h-[2px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #00f5ff, #8b5cf6, #ff006e)',
        boxShadow: '0 0 8px rgba(0,245,255,0.8)',
      }}
    />
  )
}
