import type { Metadata } from "next";
import { certifications } from "@/content/site";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Project management and analytics certifications held by Dean Davis.",
};

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
      <h1 className="display text-center text-[clamp(2.5rem,6vw,4.5rem)]">Certifications.</h1>
      <div className="mt-16 space-y-20">
        {certifications.map((g) => (
          <section key={g.group} aria-labelledby={g.group}>
            <h2 id={g.group} className="display-md text-[1.75rem]">{g.group}</h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((c) => (
                <li key={c.name}>
                  <a href={c.image} target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-mist p-8 transition-colors group-hover:bg-[#ececef]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.image}
                        alt={`${c.name} certificate issued to Dean Davis by ${c.issuer}`}
                        loading="lazy"
                        className="max-h-full max-w-full rounded-md object-contain shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]"
                      />
                    </div>
                    <p className="mt-4 font-semibold tracking-[-0.015em]">{c.name}</p>
                    <p className="text-[0.9rem] text-steel">{c.issuer}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
