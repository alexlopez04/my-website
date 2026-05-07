export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-widest uppercase">
        Hello, world.
      </p>
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[var(--text)] mb-6">
        Alexander Lopez
      </h1>
      <p className="text-lg text-[var(--text-muted)] max-w-md">
        Computer Engineering @ Georgia Tech — embedded systems, software, and cloud.
      </p>
      <p className="mt-8 text-sm text-[var(--border)] font-mono">
        ✦ interactive home page coming soon
      </p>
    </div>
  );
}
