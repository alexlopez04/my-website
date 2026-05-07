"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "Your first paragraph goes here. Tell people who you are — where you're from, what drives you, what kind of engineer you want to be.",
  "Your second paragraph goes here. Maybe talk about what you love outside of engineering — photography, music, travel, whatever feels right.",
  "Your third paragraph goes here. Close with what you're looking for — internships, full-time roles, collaborations, or just a good conversation.",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-6 py-28 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-[var(--accent)] tracking-widest uppercase mb-2">
          / about
        </p>
        <h2 className="text-3xl font-bold text-[var(--text)]">About Me</h2>
      </motion.div>

      <div className="space-y-6">
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="text-[var(--text-muted)] leading-relaxed text-base sm:text-lg"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
