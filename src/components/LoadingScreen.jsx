import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(id)
          setTimeout(onDone, 400)
          return 100
        }
        return p + 2
      })
    }, 25)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-space-void"
    >
      {/* Glowing ring */}
      <div className="relative mb-10">
        <div className="h-28 w-28 rounded-full border border-neon-cyan/20 animate-spin [animation-duration:3s]" />
        <div className="absolute inset-2 rounded-full border border-neon-purple/30 animate-spin [animation-duration:2s] [animation-direction:reverse]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold text-3xl gradient-text">PJ</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden mb-3">
        <div
          className="h-full rounded-full transition-all duration-75"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #00f5ff, #8b5cf6)',
            boxShadow: '0 0 10px rgba(0,245,255,0.7)',
          }}
        />
      </div>
      <p className="font-mono text-xs text-neon-cyan/50 tracking-widest">
        LOADING... {progress}%
      </p>
    </motion.div>
  )
}
