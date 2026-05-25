import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiArrowDown, HiOutlineEnvelope } from 'react-icons/hi2'

const ROLES = [
  'DevOps Engineer',
  'Full-Stack Developer',
  'Spring Boot Developer',
  'CI/CD Automation Expert',
  'FastAPI & Docker Builder',
]

function TypingText() {
  const [displayed, setDisplayed] = useState('')
  const stateRef = useRef({ roleIdx: 0, deleting: false })
  const timerRef = useRef(null)

  useEffect(() => {
    const tick = () => {
      const { roleIdx, deleting } = stateRef.current
      const current = ROLES[roleIdx]

      setDisplayed(prev => {
        if (!deleting && prev.length < current.length) {
          timerRef.current = setTimeout(tick, 110)          // typing speed
          return current.slice(0, prev.length + 1)
        }
        if (!deleting && prev.length === current.length) {
          timerRef.current = setTimeout(() => {
            stateRef.current.deleting = true
            tick()
          }, 4000)                                          // display hold time
          return prev
        }
        if (deleting && prev.length > 0) {
          timerRef.current = setTimeout(tick, 55)           // delete speed
          return current.slice(0, prev.length - 1)
        }
        // done deleting — advance role
        stateRef.current = { roleIdx: (roleIdx + 1) % ROLES.length, deleting: false }
        timerRef.current = setTimeout(tick, 300)            // pause before next word
        return ''
      })
    }
    timerRef.current = setTimeout(tick, 600)
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <span className="gradient-text font-mono">
      {displayed}
      <span className="ml-0.5 inline-block h-8 w-0.5 bg-neon-cyan align-middle animate-pulse" />
    </span>
  )
}

/* ── Orbital ring decoration ─────────────────────────── */
function OrbitalRings() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {[140, 200, 270].map((r, i) => (
        <div
          key={r}
          className="absolute rounded-full border border-neon-cyan/10"
          style={{
            width: r * 2,
            height: r * 2,
            animation: `orbit ${14 + i * 4}s linear infinite ${i % 2 ? 'reverse' : ''}`,
            '--orbit-r': '0px',
          }}
        >
          <div
            className="absolute h-3 w-3 rounded-full bg-neon-cyan/80 shadow-neon-cyan"
            style={{ top: '50%', left: '-6px', transform: 'translateY(-50%)' }}
          />
        </div>
      ))}
    </div>
  )
}

export default function HeroSection({ siteConfig, onOpenResume }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y      = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax container */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">

          {/* ── Left: text ── */}
          <div className="space-y-8">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass border border-neon-green/30"
            >
              <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-xs font-mono text-neon-green">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              <p className="text-neon-cyan/70 font-mono text-sm mb-2 tracking-[0.25em]">
                &gt; INITIALIZING_PROFILE...
              </p>
              <h1 className="font-display font-bold leading-none">
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">
                  {siteConfig.name.split(' ')[0]}
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl gradient-text mt-1">
                  {siteConfig.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="text-xl sm:text-2xl font-medium text-slate-300"
            >
              <span className="text-slate-500">// </span>
              <TypingText />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-slate-400 leading-8 max-w-lg text-base"
            >
              {siteConfig.intro}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {siteConfig.metrics.map(m => (
                <div key={m.value} className="glass-cyan rounded-2xl px-5 py-3 text-center border-glow-cyan">
                  <p className="font-display font-bold text-2xl text-neon-cyan">{m.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5 max-w-[10rem] leading-4">{m.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button onClick={onOpenResume} className="btn-neon-solid cursor-none">
                View Resume
              </button>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-neon cursor-none"
              >
                Contact Me
              </a>
              <div className="flex items-center gap-3 ml-2">
                <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer"
                  className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all cursor-none">
                  <FaGithub size={18} />
                </a>
                <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer"
                  className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all cursor-none">
                  <FaLinkedinIn size={18} />
                </a>
                <a href={`mailto:${siteConfig.email}`}
                  className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all cursor-none">
                  <HiOutlineEnvelope size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Right: 3D decoration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative h-[420px] w-[420px]">
              <OrbitalRings />
              {/* Core globe */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-48 w-48">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 shadow-neon-cyan animate-pulse-glow" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-neon-cyan/10 to-transparent border border-neon-cyan/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-4xl gradient-text">PJ</span>
                  </div>
                </div>
              </div>
              {/* Floating tech pills */}
              {['Jenkins', 'Docker', 'Spring Boot', 'FastAPI', 'React', 'K8s'].map((tech, i) => {
                const angle = (i / 6) * 2 * Math.PI
                const rx = 190, ry = 160
                const x = Math.cos(angle) * rx
                const y = Math.sin(angle) * ry
                return (
                  <motion.div
                    key={tech}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    className="absolute glass border border-neon-cyan/20 rounded-full px-3 py-1 text-xs font-mono text-neon-cyan whitespace-nowrap"
                    style={{
                      left: `calc(50% + ${x}px - 36px)`,
                      top: `calc(50% + ${y}px - 14px)`,
                    }}
                  >
                    {tech}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-none"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-mono text-slate-500 tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <HiArrowDown className="text-neon-cyan" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
