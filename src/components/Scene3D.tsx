"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function AnimatedBlob() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.08;
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[1.4, 128, 128]}>
        <MeshDistortMaterial
          color="#3898ec"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.3}
        />
      </Sphere>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <AnimatedBlob />
    </Canvas>
  );
}
