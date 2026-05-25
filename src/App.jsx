import { Suspense, lazy, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SpacePage from './pages/SpacePage'
import LoadingScreen from './components/LoadingScreen'

const ResumeModal = lazy(() => import('./components/ResumeModal'))

function App() {
  const [loading, setLoading]       = useState(true)
  const [isResumeOpen, setResume]   = useState(false)
  const resumeUrl = import.meta.env.VITE_RESUME_URL || '/Pratibha Jape.pdf'

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <SpacePage onOpenResume={() => setResume(true)} />
          <Suspense fallback={null}>
            {isResumeOpen && (
              <ResumeModal resumeUrl={resumeUrl} onClose={() => setResume(false)} />
            )}
          </Suspense>
        </>
      )}
    </>
  )
}

export default App
