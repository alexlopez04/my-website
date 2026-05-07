import ExperienceCard from "@/components/experience/ExperienceCard";
import { experiences } from "@/lib/data/experience";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold text-[var(--text)] mb-2">Experience</h1>
      <p className="text-[var(--accent)] font-mono text-sm mb-12">/ experience</p>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </div>
    </div>
  );
}
