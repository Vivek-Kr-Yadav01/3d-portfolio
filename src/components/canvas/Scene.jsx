import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import ParticleField from './ParticleField'
import FloatingGeometry from './FloatingGeometry'

export default function Scene({ scrollProgress }) {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      // Slowly rotate the scene and shift vertically based on scroll progress
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.75
      groupRef.current.position.y = scrollProgress * 6
    }
  })

  return (
    <>
      {/* Bright lighting setup for light theme */}
      <ambientLight intensity={0.8} color="#f8fafc" />
      <directionalLight position={[5, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#e2e8f0" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#93c5fd" />

      <group ref={groupRef}>
        <ParticleField count={500} />
        <FloatingGeometry />
      </group>

      {/* Fog color matching light background `#f8fafc` */}
      <fog attach="fog" args={['#f8fafc', 6, 22]} />
    </>
  )
}
