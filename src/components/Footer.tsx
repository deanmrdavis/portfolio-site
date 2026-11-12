import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-32 bg-mist">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="display-md text-[1.75rem]">Hiring for product or program management?</p>
            <p className="mt-2 text-steel">I&apos;d like to hear about it.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn btn-primary">Email me</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
            </div>
          </div>
          <nav aria-label="Footer" className="md:col-span-4 md:col-start-9">
            <ul className="grid grid-cols-2 gap-y-2 text-[0.9rem] text-steel">
              <li><Link className="hover:text-ink" href="/projects">Projects</Link></li>
              <li><Link className="hover:text-ink" href="/about">About</Link></li>
              <li><Link className="hover:text-ink" href="/certifications">Certifications</Link></li>
              <li><Link className="hover:text-ink" href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-5 text-[0.8rem] text-steel sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Dean Davis</p>
          <p>{site.email}</p>
        </div>
      </div>
    </footer>
  );
}
