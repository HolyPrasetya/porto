"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Scene3D from "./Scene3D";
import { ParallaxBackdrop, ScrollMarquee, ScrollProgress } from "./parallax";

const roles = [
  "iOS Developer",
  "SwiftUI",
  "AR / RealityKit",
  "Tech Lead",
  "Taekwondo DAN 3",
  "APICTA Finalist",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const k = reduce ? 0 : 1;
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Each layer travels at a different speed => depth.
  const titleY = useTransform(p, [0, 1], [0, -260 * k]);
  const titleScale = useTransform(p, [0, 1], [1, 1 + 0.35 * k]);
  const titleOpacity = useTransform(p, [0.55, 0.95], [1, reduce ? 1 : 0]);
  const subY = useTransform(p, [0, 1], [0, -120 * k]);
  const photoY = useTransform(p, [0, 1], [0, 120 * k]);
  const photoRotate = useTransform(p, [0, 1], [0, -4 * k]);
  const blobY = useTransform(p, [0, 1], [0, -380 * k]);
  const blobScale = useTransform(p, [0, 1], [1, 1 + 0.6 * k]);
  const bigWordX = useTransform(p, [0, 1], ["0%", `${-35 * k}%`]);
  const ringRotate = useTransform(p, [0, 1], [0, 180 * k]);
  const hintOpacity = useTransform(p, [0, 0.12], [1, 0]);

  return (
    <>
      <ScrollProgress />
      <ParallaxBackdrop />

      <div ref={ref} className="relative h-[190vh]">
        <section className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* far layer: giant word */}
          <motion.div
            aria-hidden
            style={{ x: bigWordX, WebkitTextStroke: "2px rgba(255,255,255,0.08)" }}
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[28vw] font-black leading-none tracking-tighter text-transparent"
          >
            HOLY PRASETYA
          </motion.div>

          {/* orbit ring */}
          <motion.div
            aria-hidden
            style={{ rotate: ringRotate }}
            className="pointer-events-none absolute right-[6%] top-[12%] h-72 w-72 rounded-full border border-dashed border-accent/30"
          />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ y: subY }}
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted backdrop-blur"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Junior iOS Developer · Apple Developer Academy @ BINUS
              </motion.p>

              <motion.div style={{ y: titleY, scale: titleScale, opacity: titleOpacity }} className="origin-left">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
                >
                  Holy&apos;s
                  <br />
                  <span className="bg-gradient-to-r from-accent via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </motion.h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                style={{ y: subY }}
                className="mt-6 max-w-md text-lg text-muted"
              >
                Building AR, AI and real-time iOS experiences — and coaching
                taekwondo athletes on the side.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{ y: subY }}
                className="mt-8"
              >
                <Link
                  href="#about"
                  className="inline-block rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-[4px_4px_0_rgba(0,0,0,0.6)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
                >
                  Get to know me!
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto aspect-[4/5] w-full max-w-sm"
            >
              <motion.div
                style={{ y: blobY, scale: blobScale }}
                className="absolute -inset-16 -z-10"
              >
                <Scene3D />
              </motion.div>
              <motion.div
                style={{ y: photoY, rotate: photoRotate }}
                className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-accent/20"
              >
                <Image
                  src="/unnamed-hero.jpg"
                  alt="Ignasius Holy Prasetya"
                  fill
                  sizes="(min-width: 1024px) 384px, 320px"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: hintOpacity }}
            className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted"
          >
            Scroll
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="block h-6 w-px bg-gradient-to-b from-accent to-transparent"
            />
          </motion.div>
        </section>
      </div>

      <div className="pb-20">
        <ScrollMarquee items={roles} />
        <ScrollMarquee items={[...roles].reverse()} reverse />
      </div>
    </>
  );
}
