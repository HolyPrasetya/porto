"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function SpidermanModel() {
  const group = useRef<THREE.Group>(null);
  const hipsRef = useRef<THREE.Object3D | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const { scene, animations } = useGLTF("/spiderman_swing.glb");

  useEffect(() => {
    hipsRef.current = scene.getObjectByName("mixamorigHips_01") ?? null;

    const mixer = new THREE.AnimationMixer(scene);
    mixerRef.current = mixer;
    const clip = animations.find((a) => a.name === "swingStart");
    const action = clip ? mixer.clipAction(clip) : undefined;
    action?.setLoop(THREE.LoopRepeat, Infinity);
    action?.play();

    return () => {
      mixer.stopAllAction();
    };
  }, [scene, animations]);

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

  useFrame((state, delta) => {
    mixerRef.current?.update(delta);
    if (hipsRef.current) {
      hipsRef.current.position.x = 0;
      hipsRef.current.position.z = 0;
    }

    if (!group.current) return;
    scrollVelocity.current *= 0.92;
    const t = state.clock.elapsedTime;
    const idleSway = Math.sin(t * 0.9) * 0.15;
    const kick = THREE.MathUtils.clamp(scrollVelocity.current, -0.6, 0.6);
    group.current.rotation.z = idleSway + kick;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <primitive object={scene} scale={100} position={[-0.1, -3.1, -0.2]} rotation={[0, Math.PI * 0.15, 0]} />
    </group>
  );
}

useGLTF.preload("/spiderman_swing.glb");

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
