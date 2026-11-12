import type { Metadata } from "next";
import Link from "next/link";
import { about, site } from "@/content/site";
import { RichText } from "@/components/RichText";

export const metadata: Metadata = {
  title: "About",
  description: "How a kid who argued about consoles and sneakers ended up building products.",
};

// A single centered reading column. The photo lives on the homepage only.
export default function AboutPage() {
  return (
    <article className="mx-auto max-w-[44rem] px-6 pt-16 sm:pt-24">
      <h1 className="display text-[clamp(2.5rem,6vw,4.5rem)]">My story.</h1>
      <div className="mt-10 space-y-6">
        {about.paragraphs.map((t, i) => (
          <p key={i} className="text-[1.125rem] leading-[1.75]">
            <RichText text={t} />
          </p>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/projects" className="btn btn-primary">See my work</Link>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          Find me on LinkedIn
        </a>
      </div>
    </article>
  );
}
