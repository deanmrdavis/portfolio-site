import Link from "next/link";
import type { Project } from "@/content/types";

const hasVideo = (p: Project) => p.sections.some((s) => s.blocks.some((b) => b.type === "video"));

// Apple-style product tile: copy centered on a soft gray panel,
// with the product screenshot rising from the bottom edge.
export function ProjectTile({ project, size = "md", headingLevel = 3 }: { project: Project; size?: "md" | "lg"; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const lg = size === "lg";
  return (
    <article className="group flex flex-col overflow-hidden rounded-[28px] bg-mist text-center">
      <div className={`px-8 ${lg ? "pt-16 sm:pt-20" : "pt-12"}`}>
        <p className="text-[0.85rem] text-steel">{project.tileLabel ?? (project.kind === "B2B" ? "Shipped to production" : "Consumer concept")}</p>
        <H className={`display mt-2 ${lg ? "text-[clamp(2rem,4.5vw,3.25rem)]" : "text-[clamp(1.75rem,3vw,2.25rem)]"}`}>
          {project.title}
        </H>
        <p className={`mx-auto mt-3 max-w-[40ch] text-steel ${lg ? "text-[1.2rem]" : "text-[1.05rem]"}`}>{project.tagline}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href={`/${project.slug}`} className="btn btn-primary" aria-label={`Read the ${project.shortTitle} case study`}>
            Read the case study
          </Link>
          {hasVideo(project) && (
            <Link href={`/${project.slug}#demo`} className="btn btn-secondary">Watch the demo</Link>
          )}
          {!hasVideo(project) && project.links?.[0] && (
            <a href={project.links[0].href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              {project.links[0].label}
            </a>
          )}
        </div>
      </div>
      <Link href={`/${project.slug}`} tabIndex={-1} aria-hidden="true" className={`mt-auto block ${lg ? "px-8 pt-14 sm:px-16" : "px-8 pt-10"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="aspect-[16/10] w-full rounded-t-xl object-cover object-top shadow-[0_-1px_0_rgba(0,0,0,0.04),0_20px_50px_-20px_rgba(0,0,0,0.25)] transition-transform duration-700 group-hover:-translate-y-1 motion-reduce:transition-none"
        />
      </Link>
    </article>
  );
}
