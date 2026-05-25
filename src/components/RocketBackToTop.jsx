import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function RocketBackToTop() {
  const [visible, setVisible] = useState(false)
  const [launching, setLaunching] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const launch = () => {
    setLaunching(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => setLaunching(false), 900)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          onClick={launch}
          className="fixed bottom-8 right-6 z-50 h-12 w-12 rounded-2xl border border-neon-cyan/40 bg-space-mid/80 backdrop-blur-md flex items-center justify-center cursor-none shadow-neon-cyan"
          aria-label="Back to top"
        >
          <motion.span
            animate={launching ? { y: -40, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-xl"
          >
            🚀
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
