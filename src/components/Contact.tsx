"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight"
        >
          Let&apos;s work together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-muted text-lg"
        >
          Punya project atau ide? Kirim email, aku senang ngobrol.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="mailto:ignasius.prasetya@binus.ac.id"
          className="inline-block mt-8 rounded-full bg-accent text-white font-semibold px-6 py-3 hover:brightness-110 transition"
        >
          Say hello
        </motion.a>
      </div>

      <footer className="mt-32 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} Holpras. All rights reserved.
      </footer>
    </section>
  );
}
