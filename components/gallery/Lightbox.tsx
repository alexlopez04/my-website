"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { S3Image } from "@/lib/s3";

type Props = {
  images: S3Image[];
  startIndex: number;
  onClose: () => void;
};

export default function Lightbox({ images, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [zoomed, setZoomed] = useState(false);

  const prev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
    setZoomed(false);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => Math.min(images.length - 1, i + 1));
    setZoomed(false);
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const current = images[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-10">
        <a
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-xs font-mono text-white/40 hover:text-white/80 transition-colors"
        >
          ↗ full size
        </a>
        <button
          onClick={onClose}
          className="text-white/50 hover:text-white text-xl transition-colors leading-none"
        >
          ✕
        </button>
      </div>

      {/* Prev */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-5xl text-white/30 hover:text-white transition-colors px-2 py-4"
        >
          ‹
        </button>
      )}

      {/* Next */}
      {index < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-5xl text-white/30 hover:text-white transition-colors px-2 py-4"
        >
          ›
        </button>
      )}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.18 }}
          className="relative mx-16 overflow-hidden"
          style={{ width: "calc(100vw - 8rem)", height: "82vh" }}
          onClick={(e) => { e.stopPropagation(); setZoomed((z) => !z); }}
        >
          <div
            className="relative w-full h-full transition-transform duration-300 origin-center"
            style={{
              transform: zoomed ? "scale(2)" : "scale(1)",
              cursor: zoomed ? "zoom-out" : "zoom-in",
            }}
          >
            <Image
              src={current.url}
              alt={current.filename}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Counter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-mono text-white/30 select-none">
        {index + 1} / {images.length}
      </div>
    </motion.div>
  );
}
