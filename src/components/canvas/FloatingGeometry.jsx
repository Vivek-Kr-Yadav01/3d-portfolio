import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({ position, geometry, color, speed = 1, rotationSpeed = 1, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * rotationSpeed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * rotationSpeed
    }
  })

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          roughness={0.4}
          metalness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

export default function FloatingGeometry() {
  return (
    <group>
      {/* 3D geometries with bright pastel colors */}
      {/* Torus - sky blue */}
      <FloatingShape
        position={[3, 1, -2]}
        geometry={<torusGeometry args={[1, 0.3, 16, 32]} />}
        color="#38bdf8"
        speed={0.6}
        rotationSpeed={1.2}
        scale={0.8}
      />

      {/* Octahedron - soft purple */}
      <FloatingShape
        position={[-4, -2, -3]}
        geometry={<octahedronGeometry args={[1, 0]} />}
        color="#c084fc"
        speed={0.7}
        rotationSpeed={0.8}
        scale={0.9}
      />

      {/* Icosahedron - soft pink */}
      <FloatingShape
        position={[4.5, -4, -4]}
        geometry={<icosahedronGeometry args={[1.2, 0]} />}
        color="#f472b6"
        speed={0.5}
        rotationSpeed={0.6}
        scale={1}
      />

      {/* Dodecahedron - soft gold */}
      <FloatingShape
        position={[-3, 3, -4]}
        geometry={<dodecahedronGeometry args={[0.8, 0]} />}
        color="#fbbf24"
        speed={0.9}
        rotationSpeed={1}
        scale={0.7}
      />

      {/* Sphere - soft green */}
      <FloatingShape
        position={[-5, -6, -5]}
        geometry={<sphereGeometry args={[1, 16, 16]} />}
        color="#34d399"
        speed={0.5}
        rotationSpeed={0.4}
        scale={0.85}
      />

      {/* Cone - soft orange */}
      <FloatingShape
        position={[2.5, -7, -3]}
        geometry={<coneGeometry args={[0.8, 1.5, 4]} />}
        color="#fb923c"
        speed={0.8}
        rotationSpeed={0.9}
        scale={0.75}
      />
    </group>
  )
}
