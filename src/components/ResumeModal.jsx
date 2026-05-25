import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

function ResumeModal({ resumeUrl, onClose }) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const { overflow } = document.body.style

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        className="flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-soft dark:bg-slate-950"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800 sm:px-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
              Resume Preview
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Replace the sample PDF by updating the resume URL in your environment variables.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              <FaArrowUpRightFromSquare className="mr-2" />
              Open PDF
            </a>
            <button type="button" className="button-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>

        <iframe
          title="Resume preview"
          src={resumeUrl}
          className="h-full w-full bg-slate-100 dark:bg-slate-900"
        />
      </motion.div>
    </div>
  )
}

export default ResumeModal