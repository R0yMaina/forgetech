import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function GarmentSculpture() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.2}>
        <torusKnotGeometry args={[1, 0.35, 200, 32, 2, 3]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#1a1a1a"
          roughness={0.3}
          metalness={0.8}
          distort={0.2}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <spotLight
        position={[5, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={1}
        color="#c4a265"
      />
      <spotLight
        position={[-5, 3, -5]}
        angle={0.5}
        penumbra={1}
        intensity={0.5}
        color="#8b7355"
      />
      <pointLight position={[0, -3, 0]} intensity={0.3} color="#2a2a2a" />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Lighting />
          <GarmentSculpture />
        </Suspense>
      </Canvas>
    </div>
  );
}
