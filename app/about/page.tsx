export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold text-[var(--text)] mb-2">About</h1>
      <p className="text-[var(--accent)] font-mono text-sm mb-12">/ about</p>

      {/* Photo slideshow placeholder */}
      <div className="w-full h-72 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center mb-12">
        <p className="text-[var(--text-muted)] text-sm font-mono">
          photo slideshow — coming soon
        </p>
      </div>

      {/* Bio — you'll fill these in */}
      <div className="space-y-6 text-[var(--text-muted)] leading-relaxed text-base">
        <p>
          {/* Write your intro paragraph here */}
          Your introduction paragraph goes here.
        </p>
        <p>
          {/* Second paragraph */}
          A second paragraph about you goes here.
        </p>
        <p>
          {/* Third paragraph */}
          A third paragraph goes here.
        </p>
      </div>
    </div>
  );
}
