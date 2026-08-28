"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// A frozen frame from the "swingStart" clip (arm up, legs kicked back) —
// he holds this pose while traversing the screen instead of playing
// through the rest of the animation and drifting.
const POSE_TIME = 0.6;

// How much scroll (px) it takes to cross from the right edge to the left
// edge once. Once he reaches the left edge, he snaps back to the right
// and the next scroll "chunk" starts the crossing again.
const CYCLE_DISTANCE = 1800;
const START_VW = 88;
const END_VW = 6;

function SpidermanModel({ leanRef }: { leanRef: React.MutableRefObject<number> }) {
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

  useFrame((state) => {
    if (!pivot.current) return;
    const t = state.clock.elapsedTime;
    pivot.current.position.y = Math.sin(t * 1.3) * 0.08;
    pivot.current.rotation.z = THREE.MathUtils.lerp(
      pivot.current.rotation.z,
      leanRef.current,
      0.08
    );
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leanRef = useRef(0);
  const lastXRef = useRef(START_VW);

  useEffect(() => {
    const update = () => {
      const progress = (window.scrollY % CYCLE_DISTANCE) / CYCLE_DISTANCE;
      const xVw = START_VW + (END_VW - START_VW) * progress;

      leanRef.current = THREE.MathUtils.clamp(
        (lastXRef.current - xVw) * 0.4,
        -0.6,
        0.6
      );
      lastXRef.current = xVw;

      if (wrapperRef.current) {
        wrapperRef.current.style.left = `${xVw}vw`;
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed top-20 z-40 h-32 w-32 sm:h-40 sm:w-40 pointer-events-none select-none -translate-x-1/2"
      style={{ left: `${START_VW}vw` }}
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 4.5], fov: 35 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 3, 3]} intensity={1.3} />
        <SpidermanModel leanRef={leanRef} />
      </Canvas>
    </div>
  );
}
