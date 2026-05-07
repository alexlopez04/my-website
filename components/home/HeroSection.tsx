"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 flex flex-col-reverse sm:flex-row items-center gap-12 sm:gap-16">

        {/* Text */}
        <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-sm text-[var(--accent)] tracking-widest uppercase mb-4"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text)] mb-4 leading-none"
          >
            Alexander
            <br />
            Lopez
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-[var(--text-muted)] max-w-sm leading-relaxed"
          >
            Computer Engineering @ Georgia Tech —
            embedded systems, software, and the cloud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="/#about"
              className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-light)] transition-colors"
            >
              About me
            </a>
            <a
              href="/experience"
              className="px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--text-muted)] text-sm font-medium hover:border-[var(--accent)]/50 hover:text-[var(--text)] transition-colors"
            >
              My work
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="shrink-0"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-[var(--accent)]/30 bg-[var(--surface)]">
            {/* Replace the placeholder below with:
                <Image src="/photo.jpg" alt="Alexander Lopez" fill className="object-cover" /> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span className="font-mono text-4xl font-bold text-[var(--accent)]/30">AL</span>
              <span className="font-mono text-xs text-[var(--text-muted)]/50">add your photo</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs font-mono text-[var(--text-muted)]/60 tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="text-[var(--text-muted)]/40 text-lg"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
