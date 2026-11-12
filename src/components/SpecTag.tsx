import type { Project } from "@/content/types";

// "At a glance" spec strip, set like a product's tech specs.
export function SpecTag({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <dl
      className={`grid grid-cols-2 gap-y-8 border-y border-line py-8 md:grid-cols-4 ${className}`}
      aria-label={`${project.shortTitle} at a glance`}
    >
      {project.spec.map((s, i) => (
        <div key={s.label} className={`px-5 ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 0 ? "md:border-l md:border-line" : ""}`}>
          <dt className="text-[0.8rem] text-steel">{s.label}</dt>
          <dd className="mt-1.5 text-[1.02rem] font-medium leading-snug tracking-[-0.015em]">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
