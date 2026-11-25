"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ScrollProgress } from "./parallax";

/** Deterministic ridgeline so server and client render the same path. */
function ridge(seed: number, amp: number, base: number) {
  let s = seed * 9301 + 49297;
  const r = () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
  const p = [r() * 6, r() * 6, r() * 6];
  let d = "M0 400 ";
  for (let i = 0; i <= 120; i++) {
    const x = (i / 120) * 1440;
    const t = (i / 120) * Math.PI * 2;
    const y =
      base -
      amp *
        (0.5 * Math.sin(t * 1.3 + p[0]) +
          0.3 * Math.sin(t * 3.1 + p[1]) +
          0.2 * Math.sin(t * 7.7 + p[2])) -
      r() * amp * 0.12;
    d += `L${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d + "L1440 400 Z";
}

// far -> near. Far layers lag behind the scroll more, near layers less.
const layers = [
  { d: ridge(3, 70, 190), fill: "#2a2f66", speed: 0.38, h: "h-[46%]" },
  { d: ridge(7, 60, 210), fill: "#1f2554", speed: 0.26, h: "h-[38%]" },
  { d: ridge(11, 50, 230), fill: "#151a3e", speed: 0.15, h: "h-[30%]" },
  { d: ridge(19, 40, 250), fill: "#0a0a0a", speed: 0.06, h: "h-[22%]" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const k = reduce ? 0 : 1;
  const { scrollY } = useScroll();

  const l0 = useTransform(scrollY, (v) => v * layers[0].speed * k);
  const l1 = useTransform(scrollY, (v) => v * layers[1].speed * k);
  const l2 = useTransform(scrollY, (v) => v * layers[2].speed * k);
  const l3 = useTransform(scrollY, (v) => v * layers[3].speed * k);
  const layerY = [l0, l1, l2, l3];

  // Copy drifts down slowly and fades; it never moves sideways or scales.
  const copyY = useTransform(scrollY, (v) => v * 0.18 * k);
  const copyOpacity = useTransform(scrollY, (v) =>
    reduce ? 1 : Math.max(0, 1 - v / 520),
  );
  const photoY = useTransform(scrollY, (v) => v * 0.1 * k);
  const veil = useTransform(scrollY, (v) => Math.min(0.85, (v / 700) * 1.1));
  const hint = useTransform(scrollY, (v) => Math.max(0, 0.85 - v / 200));

  return (
    <>
      <ScrollProgress />
      <section className="relative h-[max(100svh,680px)] overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#1b2250] to-[#4a3578] text-foreground">
        {/* stars */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 [background-image:radial-gradient(1px_1px_at_20%_30%,#fff,transparent),radial-gradient(1px_1px_at_70%_20%,#fff,transparent),radial-gradient(1.5px_1.5px_at_85%_55%,#fff,transparent),radial-gradient(1px_1px_at_40%_60%,#fff,transparent),radial-gradient(1px_1px_at_10%_70%,#fff,transparent)]"
        />

        {/* mountain layers */}
        {layers.map((l, i) => (
          <motion.svg
            key={i}
            aria-hidden
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
            style={{ y: layerY[i], fill: l.fill }}
            className={`pointer-events-none absolute inset-x-0 bottom-0 w-full ${l.h}`}
          >
            <path d={l.d} />
          </motion.svg>
        ))}

        <motion.div
          aria-hidden
          style={{ opacity: veil }}
          className="pointer-events-none absolute inset-0 bg-background"
        />

        <div className="relative z-10 mx-auto grid h-full w-full max-w-6xl items-center gap-12 px-6 pb-24 pt-28 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div style={{ y: copyY, opacity: copyOpacity }}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Junior iOS Developer · Apple Developer Academy @ BINUS
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-6xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl"
            >
              Holy&apos;s
              <br />
              <span className="bg-gradient-to-r from-accent via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-md text-lg text-white/80"
            >
              Building AR, AI and real-time iOS experiences — and coaching
              taekwondo athletes on the side.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8"
            >
              <Link
                href="#about"
                className="inline-block rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-[4px_4px_0_rgba(0,0,0,0.6)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
              >
                Get to know me!
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ y: photoY }}
            className="relative mx-auto aspect-[4/5] w-full max-w-xs lg:max-w-sm"
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/50">
              <Image
                src="/unnamed-hero.jpg"
                alt="Ignasius Holy Prasetya"
                fill
                sizes="(min-width: 1024px) 384px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: hint }}
          className="pointer-events-none absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/80"
        >
          Scroll to explore
          <span className="block h-6 w-px bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>
    </>
  );
}
