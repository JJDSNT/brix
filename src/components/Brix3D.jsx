'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'

function Logo() {
  const { scene } = useGLTF('/brix/brix_logo.glb')
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={30}
      position={[0, 0, 0]} // CENTRALIZADO
      rotation={[0, 0, 0]} // SEM INVERTER
    />
  )
}

export default function Brix3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 30 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 2, 5]} intensity={2.5} />
      <directionalLight position={[-2, -1, 3]} intensity={1.2} />

      <Suspense fallback={null}>
        <Logo />
      </Suspense>
    </Canvas>
  )
}
