import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { id: 'home',           label: 'Home' },
  { id: 'about',          label: 'About' },
  { id: 'skills',         label: 'Skills' },
  { id: 'projects',       label: 'Projects' },
  { id: 'experience',     label: 'Experience' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact',        label: 'Contact' },
]

export default function SpaceNavbar({ activeSection, onOpenResume }) {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 transition-all duration-500 ${
            scrolled ? 'glass rounded-2xl py-3 mx-4 md:mx-8 border-glow-cyan' : ''
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="group flex items-center gap-2 no-underline cursor-none"
          >
            <div className="relative h-9 w-9 rounded-xl border border-neon-cyan/40 bg-neon-cyan/10 flex items-center justify-center group-hover:shadow-neon-cyan transition-all duration-300">
              <span className="font-mono text-sm font-bold text-neon-cyan">PJ</span>
              <div className="absolute inset-0 rounded-xl border border-neon-cyan/20 animate-pulse-glow" />
            </div>
            <span className="font-display font-bold text-white text-lg hidden sm:block">
              <span className="gradient-text-cyan">Pratibha</span>
              <span className="text-white/60"> Jape</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 cursor-none ${
                  activeSection === link.id
                    ? 'text-neon-cyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Resume button + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="btn-neon hidden sm:inline-flex text-xs px-5 py-2 cursor-none"
            >
              <span>Resume</span>
            </button>
            <button
              onClick={() => setMobileOpen(p => !p)}
              className="md:hidden relative h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-1.5 cursor-none"
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 w-5 bg-neon-cyan transition-all ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 bg-neon-cyan transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 bg-neon-cyan transition-all ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-space-void/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-72 glass flex flex-col pt-24 pb-10 px-6">
              <div className="space-y-1">
                {NAV_LINKS.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-left text-sm font-medium transition-all duration-200 cursor-none ${
                      activeSection === link.id
                        ? 'bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span className="h-1 w-1 rounded-full bg-neon-cyan" />
                    {link.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => { onOpenResume(); setMobileOpen(false) }}
                className="btn-neon-solid mt-8 text-center justify-center cursor-none"
              >
                View Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
