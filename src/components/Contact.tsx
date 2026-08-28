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
          Have a question, feedback, or an opportunity you’d like to discuss? I’d love to hear from you. Feel free to send me an email, and I’ll get back to you as soon as possible..
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

      <footer className="mt-32 text-center text-sm text-muted space-y-1">
        <p>&copy; {new Date().getFullYear()} Holpras. All rights reserved.</p>
        <p className="text-xs text-muted/70">
          &ldquo;Spiderman Rigged&rdquo; by{" "}
          <a
            href="https://sketchfab.com/nitwit.friends"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            nitwit.friends
          </a>{" "}
          on Sketchfab, licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            CC BY 4.0
          </a>
          .
        </p>
      </footer>
    </section>
  );
}
