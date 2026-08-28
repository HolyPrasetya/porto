"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3 pointer-events-none"
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-[3px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-4 w-[3px] rounded-full bg-accent/70"
                  style={{ opacity: 1 - i * 0.28 }}
                />
              ))}
            </div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
              Scroll to explore
            </span>
          </div>
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-5 w-5 text-muted ml-9"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
