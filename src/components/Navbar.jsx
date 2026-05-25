import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2'
import ThemeToggle from './ThemeToggle'
import { cn } from '../utils/classNames'

function Navbar({ links, activeSection, theme, onToggleTheme, onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleNavClick() {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-white/75 px-4 py-3 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75 sm:px-6">
        <a href="#home" className="font-display text-lg font-semibold text-slate-950 dark:text-slate-50">
          Pratibha<span className="text-gradient">.dev</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition',
                activeSection === link.id
                  ? 'bg-sky-400/15 text-sky-600 dark:text-sky-300'
                  : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-50',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button type="button" className="button-secondary" onClick={onOpenResume}>
            View Resume
          </button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-900 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-50"
            onClick={() => setIsOpen((currentValue) => !currentValue)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <HiXMark size={20} /> : <HiBars3BottomRight size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/15 bg-white/90 p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium transition',
                    activeSection === link.id
                      ? 'bg-sky-400/15 text-sky-600 dark:text-sky-300'
                      : 'text-slate-600 dark:text-slate-300',
                  )}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                className="button-secondary mt-2"
                onClick={() => {
                  handleNavClick()
                  onOpenResume()
                }}
              >
                View Resume
              </button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar