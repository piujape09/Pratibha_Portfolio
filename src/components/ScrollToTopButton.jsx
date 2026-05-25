import { useEffect, useState } from 'react'
import { HiArrowLongUp } from 'react-icons/hi2'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-400 text-slate-950 shadow-soft transition hover:-translate-y-0.5 hover:bg-sky-300"
    >
      <HiArrowLongUp size={20} />
    </button>
  )
}

export default ScrollToTopButton