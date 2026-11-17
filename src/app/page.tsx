import Link from "next/link";
import { home } from "@/content/site";
import { projects } from "@/content/projects";
import { ProjectTile } from "@/components/ProjectTile";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 sm:pt-24 md:grid-cols-12 md:gap-8">
        <div className="settle md:col-span-7">
          <h1 className="display text-[clamp(2.4rem,4.6vw,3.75rem)]">{home.headline}</h1>
          <p className="mt-6 max-w-[50ch] text-[1.2rem] leading-relaxed text-steel">{home.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">See my work</Link>
            <Link href="/contact" className="btn btn-secondary">Get in touch</Link>
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <div className="overflow-hidden rounded-[28px] bg-mist">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dean.webp"
              alt="Dean Davis, smiling, in a dark jacket against a dark background."
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="work" className="mx-auto mt-32 max-w-6xl px-6">
        <div className="text-center">
          <h2 id="work" className="display text-[clamp(2.25rem,4.5vw,3.5rem)]">Selected work.</h2>
          <p className="mx-auto mt-3 max-w-[48ch] text-[1.15rem] text-steel">
            Platforms I took from research to production, my first launched consumer product, and concepts I've prototyped on my own.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectTile key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section aria-labelledby="approach" className="mx-auto mt-32 max-w-4xl px-6 text-center">
        <h2 id="approach" className="text-[1.05rem] text-steel">How I work</h2>
        <p className="display mt-4 text-[clamp(1.6rem,3vw,2.25rem)]">{home.belief}</p>
        <Link href="/about" className="btn btn-secondary mt-10">Read my story</Link>
      </section>
    </>
  );
}
