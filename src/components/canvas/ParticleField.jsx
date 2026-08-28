import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField({ count = 600 }) {
  const mesh = useRef()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)
    
    // Nice light theme pastel palette (light blue, lavender, light cyan)
    const palette = [
      new THREE.Color('#93c5fd'), // blue
      new THREE.Color('#c084fc'), // purple
      new THREE.Color('#a5f3fc'), // cyan
    ]

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      pos[i3] = (Math.random() - 0.5) * 40
      pos[i3 + 1] = (Math.random() - 0.5) * 40
      pos[i3 + 2] = (Math.random() - 0.5) * 40

      const randomColor = palette[Math.floor(Math.random() * palette.length)]
      cols[i3] = randomColor.r
      cols[i3 + 1] = randomColor.g
      cols[i3 + 2] = randomColor.b
    }
    return [pos, cols]
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.015
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.005) * 0.05
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  )
}
