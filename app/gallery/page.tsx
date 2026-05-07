import Image from "next/image";
import { listImages } from "@/lib/s3";

export const revalidate = 3600; // re-fetch from S3 at most once per hour

export default async function GalleryPage() {
  const images = await listImages("gallery").catch(() => []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-bold text-[var(--text)] mb-2">Gallery</h1>
      <p className="text-[var(--accent)] font-mono text-sm mb-12">/ gallery</p>

      {images.length === 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-[var(--surface)] border border-[var(--border)]"
            />
          ))}
          <p className="col-span-full text-center text-xs font-mono text-[var(--text-muted)] mt-4">
            upload photos to s3://al-website-photo-bucket/gallery/ to see them here
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {images.map((img) => (
            <div
              key={img.key}
              className="relative aspect-square rounded-lg overflow-hidden bg-[var(--surface)] border border-[var(--border)] group"
            >
              <Image
                src={img.url}
                alt={img.filename}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
