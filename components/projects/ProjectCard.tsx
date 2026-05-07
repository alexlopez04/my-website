import Link from "next/link";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--accent)]/40 transition-colors flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
        <h3 className="text-lg font-semibold text-[var(--text)]">{project.title}</h3>
        <span className="text-xs font-mono text-[var(--text-muted)] whitespace-nowrap">
          {project.start} — {project.end}
        </span>
      </div>
      <p className="text-[var(--accent)] text-sm font-medium mb-3">{project.subtitle}</p>

      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Image placeholder — will be replaced with S3-backed image */}
      <div className="w-full h-40 rounded-lg bg-[var(--surface-raised)] border border-[var(--border)] flex items-center justify-center mb-5">
        <span className="text-xs font-mono text-[var(--text-muted)]">project image</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-[var(--surface-raised)] border border-[var(--border)] text-xs text-[var(--text-muted)] font-mono"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-4">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors"
          >
            GitHub ↗
          </Link>
        )}
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors"
          >
            Live Demo ↗
          </Link>
        )}
      </div>
    </div>
  );
}
