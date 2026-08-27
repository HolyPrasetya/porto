"use client";

import { motion } from "framer-motion";

const testimonials = [
  "An ambitious person who always puts in the effort to pursue what he wants. Flexible and creative, he never limits himself to just one solution but always finds alternative ways to solve problems.",
  "A smart, energetic, friendly, and creative person. Hardworking, and talented who always willing to learn and improve.",
  "Kind, caring, highly curious, competitive, and responsible.",
];

export default function Testimonials() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold mb-3"
        >
          Hear what people say about
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12"
        >
          Holy
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((quote, i) => (
            <motion.blockquote
              key={quote.slice(0, 20)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="text-4xl text-accent leading-none">&ldquo;</span>
              <p className="mt-2 text-muted leading-relaxed">{quote}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
