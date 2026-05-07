"use client";

import { motion } from "framer-motion";

export default function GalleryIntro({ intro }: { intro: string }) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-[var(--text)] mb-2">Gallery</h1>
        <p className="text-[var(--accent)] font-mono text-sm mb-6">/ gallery</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-[var(--text-muted)] leading-relaxed max-w-2xl"
      >
        {intro}
      </motion.p>
    </div>
  );
}
