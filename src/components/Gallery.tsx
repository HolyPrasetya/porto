"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/gallery/gallery-1.png",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.png",
  "/images/gallery/gallery-7.jpg",
  "/images/gallery/gallery-8.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold mb-3"
        >
          As featured in
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              whileHover={{ scale: 1.03 }}
              className={`relative overflow-hidden rounded-xl border border-white/10 ${
                i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt="Gallery photo"
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
