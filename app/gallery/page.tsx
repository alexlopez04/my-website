export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-bold text-[var(--text)] mb-2">Gallery</h1>
      <p className="text-[var(--accent)] font-mono text-sm mb-12">/ gallery</p>

      {/* Grid placeholder — will be populated from S3 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-[var(--surface)] border border-[var(--border)]"
          />
        ))}
      </div>
      <p className="text-center text-xs font-mono text-[var(--text-muted)] mt-8">
        photos coming soon — connecting to S3
      </p>
    </div>
  );
}
