"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// A frozen frame from the "swingStart" clip (arm up, legs kicked back) —
// he holds this pose and swings left/right as position, instead of
// playing through the rest of the animation and drifting.
const POSE_TIME = 0.6;

function SpidermanModel() {
  const pivot = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/spiderman_swing.glb");

  useEffect(() => {
    const mixer = new THREE.AnimationMixer(scene);
    const clip = animations.find((a) => a.name === "swingStart");
    if (clip) {
      const action = mixer.clipAction(clip);
      action.play();
      mixer.setTime(POSE_TIME);
    }
    return () => {
      mixer.stopAllAction();
    };
  }, [scene, animations]);

  const scrollVelocity = useRef(0);
  const lastScrollY = useRef(0);
  const swingX = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      scrollVelocity.current += (y - lastScrollY.current) * 0.03;
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state) => {
    if (!pivot.current) return;
    scrollVelocity.current *= 0.94;
    const t = state.clock.elapsedTime;

    const idle = Math.sin(t * 0.8) * 0.4;
    const kick = THREE.MathUtils.clamp(scrollVelocity.current, -1.4, 1.4);
    swingX.current = idle + kick;

    pivot.current.position.x = swingX.current;
    pivot.current.rotation.z = -swingX.current * 0.28;
  });

  return (
    <group ref={pivot}>
      <primitive
        object={scene}
        scale={140}
        position={[0.03, -4.6, -0.53]}
        rotation={[0, Math.PI * 0.15, 0]}
      />
    </group>
  );
}

useGLTF.preload("/spiderman_swing.glb");

export default function SpiderCompanion() {
  return (
    <div
      className="fixed top-20 right-2 sm:right-6 z-40 h-32 w-32 sm:h-44 sm:w-44 pointer-events-none select-none"
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
