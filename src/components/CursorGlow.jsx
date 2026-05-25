import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [dot, setDot] = useState({ x: -200, y: -200 })
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    let ax = -200, ay = -200

    const onMove = e => {
      setDot({ x: e.clientX, y: e.clientY })
      ax = e.clientX
      ay = e.clientY
    }
    const onDown = () => setClicking(true)
    const onUp   = () => setClicking(false)

    let raf
    const lerp = (a, b, t) => a + (b - a) * t
    let cx = -200, cy = -200
    const loop = () => {
      cx = lerp(cx, ax, 0.12)
      cy = lerp(cy, ay, 0.12)
      setPos({ x: cx, y: cy })
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <>
      {/* Large glow halo */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full mix-blend-screen transition-transform"
        style={{
          width: clicking ? 60 : 40,
          height: clicking ? 60 : 40,
          left: pos.x - (clicking ? 30 : 20),
          top: pos.y - (clicking ? 30 : 20),
          background: 'radial-gradient(circle, rgba(0,245,255,0.25) 0%, transparent 70%)',
          filter: 'blur(4px)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      {/* Tiny dot */}
      <div
        className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-neon-cyan"
        style={{
          left: dot.x - 4,
          top: dot.y - 4,
          boxShadow: '0 0 6px rgba(0,245,255,1)',
        }}
      />
    </>
  )
}
