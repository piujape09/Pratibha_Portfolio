import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

/* ── Floating nebula blobs ────────────────────────────── */
function NebulaMesh() {
  const meshRef = useRef()
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.04
    }
  })
  return (
    <mesh ref={meshRef} position={[2, 1, -6]}>
      <sphereGeometry args={[3.5, 32, 32]} />
      <meshBasicMaterial color="#4f00ff" transparent opacity={0.06} side={THREE.BackSide} />
    </mesh>
  )
}

/* Deterministic pseudo-random — avoids calling Math.random inside render */
function seededRand(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

/* ── Animated particle field ──────────────────────────── */
function ParticleField({ count = 180 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const rand = seededRand(42)
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (rand() - 0.5) * 30
      arr[i * 3 + 1] = (rand() - 0.5) * 20
      arr[i * 3 + 2] = (rand() - 0.5) * 15
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.018
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.006) * 0.08
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.055} color="#00f5ff" transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

/* ── Rotating ring ────────────────────────────────────── */
function OrbitRing() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.12
      ref.current.rotation.x = 1.1
    }
  })
  return (
    <mesh ref={ref} position={[0, 0, -4]}>
      <torusGeometry args={[4.5, 0.012, 16, 200]} />
      <meshBasicMaterial color="#00f5ff" transparent opacity={0.18} />
    </mesh>
  )
}

/* ── R3F canvas ───────────────────────────────────────── */
function SpaceScene() {
  return (
    <>
      <Stars radius={90} depth={60} count={4000} factor={4} saturation={0} fade speed={0.6} />
      <NebulaMesh />
      <ParticleField count={180} />
      <OrbitRing />
    </>
  )
}

/* ── CSS meteor shower (DOM, not R3F) ─────────────────── */
const METEORS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top:      `${Math.random() * 60}%`,
  left:     `${50 + Math.random() * 50}%`,
  delay:    `${Math.random() * 12}s`,
  duration: `${5 + Math.random() * 8}s`,
  size:     `${80 + Math.random() * 160}px`,
}))

function Meteors() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {METEORS.map(m => (
        <span
          key={m.id}
          className="absolute top-0 left-0 block rounded-full rotate-[215deg]"
          style={{
            top: m.top,
            left: m.left,
            width: m.size,
            height: '1px',
            background: 'linear-gradient(90deg, rgba(0,245,255,0.8), transparent)',
            boxShadow: '0 0 6px rgba(0,245,255,0.6)',
            animation: `meteor ${m.duration} linear ${m.delay} infinite`,
          }}
        />
      ))}
    </div>
  )
}

/* ── Exported component ───────────────────────────────── */
export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-space-void">
      {/* Three.js canvas */}
      <Canvas
        className="!absolute inset-0"
        camera={{ position: [0, 0, 6], fov: 70 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'low-power' }}
      >
        <SpaceScene />
      </Canvas>

      {/* Nebula color overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-900/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-900/15 blur-[100px]" />
      </div>

      {/* CSS grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-grid-space opacity-30" />

      {/* Meteor shower */}
      <Meteors />
    </div>
  )
}
