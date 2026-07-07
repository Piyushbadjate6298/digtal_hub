import { Float, OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function GlobeMesh() {
  const group = useRef();

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.28;
      group.current.rotation.x = Math.sin(Date.now() * 0.0007) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.35, 48, 48]} />
        <meshStandardMaterial color="#123f8c" roughness={0.28} metalness={0.42} wireframe />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.02, 32, 32]} />
        <meshStandardMaterial color="#22d3ee" transparent opacity={0.18} roughness={0.15} metalness={0.2} />
      </mesh>
      {Array.from({ length: 9 }).map((_, index) => (
        <mesh key={index} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}>
          <torusGeometry args={[1.6 + index * 0.025, 0.006, 12, 100]} />
          <meshStandardMaterial color={index % 2 ? '#7c3aed' : '#22d3ee'} emissive={index % 2 ? '#4c1d95' : '#0e7490'} />
        </mesh>
      ))}
    </group>
  );
}

export default function DigitalGlobe() {
  return (
    <div className="h-[360px] w-full sm:h-[430px] lg:h-[520px]">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 42 }}>
        <ambientLight intensity={0.75} />
        <pointLight position={[3, 3, 4]} intensity={2.6} color="#22d3ee" />
        <pointLight position={[-4, -2, 3]} intensity={1.8} color="#7c3aed" />
        <Stars radius={80} depth={35} count={1400} factor={3} fade speed={1} />
        <Float speed={2} rotationIntensity={0.42} floatIntensity={0.7}>
          <GlobeMesh />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
    </div>
  );
}
