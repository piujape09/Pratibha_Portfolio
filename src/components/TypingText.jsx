import { useEffect, useState } from 'react'

function TypingText({ words }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    const finishedTyping = typedText === currentWord
    const finishedDeleting = typedText === ''

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (finishedTyping) {
            setIsDeleting(true)
            return
          }

          setTypedText(currentWord.slice(0, typedText.length + 1))
          return
        }

        if (finishedDeleting) {
          setIsDeleting(false)
          setWordIndex((currentIndex) => (currentIndex + 1) % words.length)
          return
        }

        setTypedText(currentWord.slice(0, typedText.length - 1))
      },
      finishedTyping ? 4000 : isDeleting ? 55 : 110,
    )

    return () => window.clearTimeout(timeout)
  }, [isDeleting, typedText, wordIndex, words])

  return (
    <span className="inline-flex min-h-[1.2em] items-center gap-1 text-gradient">
      {typedText}
      <span className="h-7 w-px animate-pulse bg-sky-400" aria-hidden="true" />
    </span>
  )
}

export default TypingText