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
import { ParallaxBackdrop, ScrollProgress } from "./parallax";

const chips = [
  { label: "SwiftUI", pos: "-left-10 top-[12%]", near: true, delay: 0 },
  { label: "ARKit", pos: "-right-8 top-[30%]", near: false, delay: 0.6 },
  { label: "RealityKit", pos: "-left-12 bottom-[22%]", near: false, delay: 1.1 },
  { label: "APICTA Finalist", pos: "-right-10 bottom-[8%]", near: true, delay: 0.3 },
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
  // Layers above move up faster than layers below, so text never overlaps.
  const badgeY = useTransform(p, [0, 1], [0, -170 * k]);
  const titleY = useTransform(p, [0, 1], [0, -110 * k]);
  const subY = useTransform(p, [0, 1], [0, -60 * k]);
  const ctaY = useTransform(p, [0, 1], [0, -30 * k]);
  const textOpacity = useTransform(p, [0.45, 0.9], [1, reduce ? 1 : 0]);
  const photoY = useTransform(p, [0, 1], [0, 90 * k]);
  const chipFar = useTransform(p, [0, 1], [0, -140 * k]);
  const chipNear = useTransform(p, [0, 1], [0, -260 * k]);
  const bigWordY = useTransform(p, [0, 1], [0, -80 * k]);
  const ringRotate = useTransform(p, [0, 1], [0, 90 * k]);
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
            style={{ y: bigWordY, WebkitTextStroke: "2px rgba(255,255,255,0.08)" }}
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
                style={{ y: badgeY, opacity: textOpacity }}
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted backdrop-blur"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Junior iOS Developer · Apple Developer Academy @ BINUS
              </motion.p>

              <motion.div style={{ y: titleY, opacity: textOpacity }}>
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
                style={{ y: subY, opacity: textOpacity }}
                className="mt-6 max-w-md text-lg text-muted"
              >
                Building AR, AI and real-time iOS experiences — and coaching
                taekwondo athletes on the side.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{ y: ctaY, opacity: textOpacity }}
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
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-accent/25 blur-3xl"
              />
              {chips.map((c) => (
                <motion.div
                  key={c.label}
                  style={{ y: c.near ? chipNear : chipFar }}
                  className={`absolute z-10 ${c.pos}`}
                >
                  <motion.span
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + c.delay, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
                    className="block rounded-full border border-white/15 bg-background/70 px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur"
                  >
                    {c.label}
                  </motion.span>
                </motion.div>
              ))}
              <motion.div
                style={{ y: photoY }}
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

    </>
  );
}
