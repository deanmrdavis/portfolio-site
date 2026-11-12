import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectTile } from "@/components/ProjectTile";

export const metadata: Metadata = {
  title: "Projects",
  description: "Shipped platforms and consumer concepts by Dean Davis.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
      <div className="text-center">
        <h1 className="display text-[clamp(2.5rem,6vw,4.5rem)]">Projects.</h1>
        <p className="mx-auto mt-4 max-w-[52ch] text-[1.2rem] leading-relaxed text-steel">
          Platforms I helped take from research to production, and consumer concepts I&apos;ve researched and prototyped on my own.
        </p>
      </div>
      <div className="mt-16 space-y-5">
        {projects.map((p) => (
          <ProjectTile key={p.slug} project={p} size="lg" headingLevel={2} />
        ))}
      </div>
    </div>
  );
}
