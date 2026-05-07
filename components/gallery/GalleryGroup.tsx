"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { S3Image } from "@/lib/s3";
import type { GalleryGroup as GalleryGroupType } from "@/lib/data/gallery";
import Lightbox from "./Lightbox";

type Props = {
  group: GalleryGroupType & { images: S3Image[] };
};

export default function GalleryGroup({ group }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (group.images.length === 0) return null;

  return (
    <section className="mb-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-2xl font-bold text-[var(--text)]">{group.title}</h2>
        <p className="font-mono text-sm text-[var(--accent)] mt-1">{group.subtitle}</p>
        <p className="text-[var(--text-muted)] text-sm mt-2 max-w-xl leading-relaxed">
          {group.blurb}
        </p>
      </motion.div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {group.images.map((img, i) => (
          <motion.button
            key={img.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 6) * 0.07 }}
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-square rounded-lg overflow-hidden bg-[var(--surface)] border border-[var(--border)] group"
          >
            <Image
              src={img.url}
              alt={img.filename}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={group.images}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
