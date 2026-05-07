import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold text-[var(--text)] mb-2">Projects</h1>
      <p className="text-[var(--accent)] font-mono text-sm mb-12">/ projects</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
