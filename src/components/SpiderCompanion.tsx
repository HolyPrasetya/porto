"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function SpidermanModel() {
  const pivot = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/spiderman.glb");

  const scrollVelocity = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      scrollVelocity.current += (y - lastScrollY.current) * 0.015;
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state) => {
    if (!pivot.current) return;
    scrollVelocity.current *= 0.92;
    const t = state.clock.elapsedTime;
    const idleSwing = Math.sin(t * 1.1) * 0.18;
    const kick = THREE.MathUtils.clamp(scrollVelocity.current, -0.7, 0.7);
    pivot.current.rotation.z = idleSwing + kick;
    pivot.current.position.y = Math.sin(t * 1.1) * 0.12;
  });

  return (
    <group ref={pivot} position={[0, 0.9, 0]}>
      <primitive
        object={scene}
        scale={0.55}
        position={[0, -0.84, 0]}
        rotation={[0, Math.PI * 0.15, 0]}
      />
    </group>
  );
}

useGLTF.preload("/spiderman.glb");

export default function SpiderCompanion() {
  return (
    <div
      className="fixed top-20 right-2 sm:right-6 z-40 h-28 w-28 sm:h-36 sm:w-36 pointer-events-none select-none"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 4.5], fov: 35 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 3, 3]} intensity={1.3} />
        <SpidermanModel />
      </Canvas>
    </div>
  );
}
