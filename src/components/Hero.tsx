"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted text-lg mb-2"
          >
            Welcome to
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl sm:text-7xl font-extrabold tracking-tight leading-[0.95]"
          >
            Holy&apos;s
            <br />
            Portfolio
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/home"
              className="inline-block rounded-full bg-accent text-white font-semibold px-6 py-3 shadow-[4px_4px_0_rgba(0,0,0,0.6)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_rgba(0,0,0,0.6)] transition-all"
            >
              Get to know me!
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm aspect-[4/5]"
        >
          <div className="absolute -inset-16 -z-10">
            <Scene3D />
          </div>
          <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10">
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
    </section>
  );
}
