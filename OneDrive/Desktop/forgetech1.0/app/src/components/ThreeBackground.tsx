import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

const particleData = (() => {
  const count = 2000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

    const rand = Math.random();
    if (rand < 0.4) {
      colors[i * 3] = 0.42;
      colors[i * 3 + 1] = 0.39;
      colors[i * 3 + 2] = 1.0;
    } else if (rand < 0.7) {
      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = 0.42;
      colors[i * 3 + 2] = 0.21;
    } else {
      colors[i * 3] = 0.9;
      colors[i * 3 + 1] = 0.9;
      colors[i * 3 + 2] = 1.0;
    }
  }

  return { positions, colors };
})();

const connectionLineGeometry = (() => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(300 * 3);

  for (let i = 0; i < 100; i++) {
    const x1 = (Math.random() - 0.5) * 20;
    const y1 = (Math.random() - 0.5) * 20;
    const z1 = (Math.random() - 0.5) * 20;

    const x2 = x1 + (Math.random() - 0.5) * 3;
    const y2 = y1 + (Math.random() - 0.5) * 3;
    const z2 = z1 + (Math.random() - 0.5) * 3;

    positions[i * 6] = x1;
    positions[i * 6 + 1] = y1;
    positions[i * 6 + 2] = z1;
    positions[i * 6 + 3] = x2;
    positions[i * 6 + 4] = y2;
    positions[i * 6 + 5] = z2;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  return geometry;
})();

// Particle field component
function ParticleField() {
  const mesh = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  const particles = particleData;
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.05 + mouseRef.current.x * 0.1;
    mesh.current.rotation.x = t * 0.02 + mouseRef.current.y * 0.05;
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating geometric shapes
function FloatingShapes() {
  const group1 = useRef<THREE.Group>(null);
  const group2 = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group1.current) {
      group1.current.rotation.y = t * 0.2;
      group1.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
    if (group2.current) {
      group2.current.rotation.y = -t * 0.15;
      group2.current.rotation.z = t * 0.08;
    }
  });
  
  return (
    <>
      <group ref={group1} position={[4, 2, -5]}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh>
            <icosahedronGeometry args={[1.5, 0]} />
            <meshBasicMaterial color="#6C63FF" wireframe transparent opacity={0.15} />
          </mesh>
        </Float>
      </group>
      
      <group ref={group2} position={[-5, -2, -6]}>
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
          <mesh>
            <octahedronGeometry args={[2, 0]} />
            <meshBasicMaterial color="#FF6B35" wireframe transparent opacity={0.1} />
          </mesh>
        </Float>
      </group>
      
      <Float speed={3} rotationIntensity={0.8} floatIntensity={0.6}>
        <mesh position={[0, 3, -8]}>
          <torusGeometry args={[2, 0.3, 16, 100]} />
          <meshBasicMaterial color="#6C63FF" wireframe transparent opacity={0.08} />
        </mesh>
      </Float>
    </>
  );
}

// Glowing orbs
function GlowingOrbs() {
  const orb1 = useRef<THREE.Mesh>(null);
  const orb2 = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (orb1.current) {
      orb1.current.position.y = Math.sin(t * 0.8) * 0.5 + 1;
    }
    if (orb2.current) {
      orb2.current.position.y = Math.cos(t * 0.6) * 0.5 - 1;
    }
  });
  
  return (
    <>
      <mesh ref={orb1} position={[-6, 1, -4]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#FF6B35" transparent opacity={0.6} />
      </mesh>
      <mesh ref={orb2} position={[6, -1, -3]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#6C63FF" transparent opacity={0.5} />
      </mesh>
    </>
  );
}

// Connection lines between particles
function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const lineGeometry = connectionLineGeometry;
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });
  
  return (
    <lineSegments ref={linesRef} geometry={lineGeometry}>
      <lineBasicMaterial color="#6C63FF" transparent opacity={0.1} />
    </lineSegments>
  );
}

// Main scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <ParticleField />
      <FloatingShapes />
      <GlowingOrbs />
      <ConnectionLines />
      <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade speed={1} />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
