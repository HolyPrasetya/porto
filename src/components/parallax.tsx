"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/** Image that drifts inside its frame while the card scrolls through the viewport. */
export function ParallaxImage({
  src,
  alt,
  sizes,
  className = "",
  strength = 14,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  /** percent the image travels up/down inside the frame */
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const s = reduce ? 0 : strength;
  const y = useTransform(scrollYProgress, [0, 1], [`${-s}%`, `${s}%`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y, top: `${-strength}%`, bottom: `${-strength}%` }}
        className="absolute inset-x-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover ${className}`}
        />
      </motion.div>
    </div>
  );
}

/** Giant outlined word behind a section that slides sideways as you scroll. */
export function GhostText({
  children,
  from = 5,
  to = -5,
  className = "",
}: {
  children: ReactNode;
  from?: number;
  to?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-24 select-none overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y, WebkitTextStroke: "1.5px rgba(255,255,255,0.07)" }}
        className="whitespace-nowrap text-[clamp(6rem,22vw,20rem)] font-black uppercase leading-none tracking-tighter text-transparent"
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Fixed multi-layer background: each layer moves at its own speed relative to scroll. */
export function ParallaxBackdrop() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const k = reduce ? 0 : 1;
  const slow = useTransform(scrollYProgress, [0, 1], [0, -240 * k]);
  const mid = useTransform(scrollYProgress, [0, 1], [0, -720 * k]);
  const fast = useTransform(scrollYProgress, [0, 1], [0, -1400 * k]);
  const spin = useTransform(scrollYProgress, [0, 1], [0, 220 * k]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0f1b2d_0%,#0a0a0a_60%)]" />
      <motion.div
        style={{ y: slow }}
        className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] h-[140%]"
      />
      <motion.div
        style={{ y: slow }}
        className="absolute -left-40 top-[10%] h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        style={{ y: mid }}
        className="absolute -right-48 top-[60%] h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/10 blur-[140px]"
      />
      <motion.div
        style={{ y: fast, rotate: spin }}
        className="absolute left-[8%] top-[120%] h-40 w-40 rounded-3xl border border-accent/30"
      />
      <motion.div
        style={{ y: mid, rotate: spin }}
        className="absolute right-[10%] top-[70%] h-24 w-24 rounded-full border border-white/10"
      />
      <motion.div
        style={{ y: fast }}
        className="absolute right-[22%] top-[150%] h-3 w-3 rounded-full bg-accent/60"
      />
      <motion.div
        style={{ y: mid }}
        className="absolute left-[30%] top-[95%] h-2 w-2 rounded-full bg-white/30"
      />
    </div>
  );
}

/** Thin gradient bar at the top showing page scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent via-sky-300 to-fuchsia-400"
    />
  );
}
