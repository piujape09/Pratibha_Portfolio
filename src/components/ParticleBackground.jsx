import { motion } from 'framer-motion'

const particles = [
  { id: 1, x: '8%', y: '18%', size: 10, duration: 11 },
  { id: 2, x: '18%', y: '62%', size: 16, duration: 13 },
  { id: 3, x: '28%', y: '28%', size: 12, duration: 14 },
  { id: 4, x: '38%', y: '78%', size: 8, duration: 10 },
  { id: 5, x: '54%', y: '14%', size: 18, duration: 16 },
  { id: 6, x: '64%', y: '52%', size: 10, duration: 12 },
  { id: 7, x: '74%', y: '26%', size: 14, duration: 15 },
  { id: 8, x: '84%', y: '68%', size: 12, duration: 13 },
  { id: 9, x: '92%', y: '20%', size: 9, duration: 11 },
]

function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-20" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-sky-400/20 blur-[2px] dark:bg-sky-300/20"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.25, 0.65, 0.25],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground