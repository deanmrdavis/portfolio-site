import Link from "next/link";
import type { Project } from "@/content/types";
import { projects } from "@/content/projects";
import { SpecTag } from "./SpecTag";
import { Blocks } from "./Blocks";

export function CaseStudy({ project }: { project: Project }) {
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const hasVideo = project.sections.some((s) => s.blocks.some((b) => b.type === "video"));

  return (
    <article>
      <header className="mx-auto max-w-4xl px-6 pt-16 text-center sm:pt-24">
        <Link href="/projects" className="text-[0.9rem] text-steel hover:text-ink">
          Projects
        </Link>
        <h1 className="display mt-3 text-[clamp(2.5rem,6vw,4.5rem)]">{project.title}</h1>
        <p className="mx-auto mt-4 max-w-[36ch] text-[clamp(1.15rem,2vw,1.4rem)] leading-snug text-steel">{project.tagline}</p>
        {(hasVideo || project.links?.length) && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {hasVideo && (
              <a href="#demo" className="btn btn-primary">Watch the demo</a>
            )}
            {project.links?.map((l, i) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`btn ${i === 0 && !hasVideo ? "btn-primary" : "btn-secondary"}`}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <div className="mx-auto mt-14 max-w-6xl px-6">
        <div className="overflow-hidden rounded-[28px] bg-mist px-6 pt-10 sm:px-14 sm:pt-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full rounded-t-xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
          />
        </div>
        <SpecTag project={project} className="mt-12" />
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-10 px-6 lg:grid-cols-12">
        <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
          <ul className="sticky top-24 space-y-2.5 text-[0.9rem] text-steel">
            {project.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-ink">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-20 lg:col-span-9">
          {project.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="display mb-7 text-[clamp(1.75rem,3vw,2.25rem)]">{s.title}</h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-28 max-w-6xl px-6">
        <Link href={`/${next.slug}`} className="group block rounded-[28px] bg-mist px-8 py-14 text-center transition-colors hover:bg-[#ececef]">
          <span className="text-[0.9rem] text-steel">Next project</span>
          <span className="display mt-2 block text-[clamp(1.75rem,3.5vw,2.5rem)]">{next.title}</span>
          <span className="mt-3 block text-steel">{next.tagline}</span>
        </Link>
      </div>
    </article>
  );
}
