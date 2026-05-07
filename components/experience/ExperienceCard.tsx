import type { Experience } from "@/lib/data/experience";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--accent)]/40 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
        <h3 className="text-lg font-semibold text-[var(--text)]">{exp.role}</h3>
        <span className="text-xs font-mono text-[var(--text-muted)] whitespace-nowrap">
          {exp.start} — {exp.end}
        </span>
      </div>
      <p className="text-[var(--accent)] text-sm font-medium mb-4">
        {exp.company} · {exp.location}
      </p>

      <ul className="space-y-2 mb-5">
        {exp.bullets.map((b, i) => (
          <li key={i} className="text-sm text-[var(--text-muted)] flex gap-3">
            <span className="text-[var(--accent)] mt-0.5 shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-[var(--surface-raised)] border border-[var(--border)] text-xs text-[var(--text-muted)] font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
