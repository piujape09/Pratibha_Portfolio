import { LuMoonStar, LuSunMedium } from 'react-icons/lu'

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-900 shadow-soft transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-50"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <LuSunMedium size={18} /> : <LuMoonStar size={18} />}
    </button>
  )
}

export default ThemeToggle