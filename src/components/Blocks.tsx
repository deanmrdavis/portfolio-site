import type { Block } from "@/content/types";
import { RichText } from "./RichText";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="max-w-[66ch] text-[1.0625rem] leading-[1.65]">
                <RichText text={b.text} />
              </p>
            );
          case "h":
            return (
              <h3 key={i} className="display-md pt-6 text-[1.3rem]">
                {b.text}
              </h3>
            );
          case "note":
            return (
              <p key={i} className="max-w-[66ch] rounded-2xl bg-mist px-5 py-4 text-[0.95rem] text-steel">
                {b.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="max-w-[66ch] space-y-3.5 leading-[1.6]">
                {b.items.map((it, j) => (
                  <li key={j} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-steel/60">
                    {it.label && <span className="font-semibold">{it.label}. </span>}
                    <RichText text={it.text} />
                  </li>
                ))}
              </ul>
            );
          case "facts":
            return (
              <dl key={i} className="max-w-[66ch] divide-y divide-line border-y border-line">
                {b.items.map((it, j) => (
                  <div key={j} className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                    <dt className="font-semibold tracking-[-0.015em]">{it.label}</dt>
                    <dd className="leading-[1.6]">
                      <RichText text={it.text} />
                    </dd>
                  </div>
                ))}
              </dl>
            );
          case "results":
            return (
              <div key={i} className="grid max-w-[46.5rem] gap-4 sm:grid-cols-2">
                {b.items.map((r, j) => (
                  <div key={j} className="rounded-3xl bg-mist p-7">
                    <p className="text-[0.85rem] text-steel">{r.label}</p>
                    <p className="display-md mt-2 text-[1.35rem]">{r.outcome}</p>
                    <p className="mt-4 text-[0.85rem] text-steel">{r.goalLabel ?? "Goal"}: {r.goal}</p>
                  </div>
                ))}
              </div>
            );
          case "embed":
            return (
              <figure key={i} className="max-w-[46.5rem]">
                <div className="overflow-hidden rounded-2xl bg-mist" style={{ aspectRatio: b.aspect ?? "16 / 10" }}>
                  <iframe src={b.src} title={b.title} loading="lazy" className="h-full w-full" allow="fullscreen" />
                </div>
                <figcaption className="mt-3 text-[0.9rem]">
                  <a href={b.href} target="_blank" rel="noopener noreferrer" className="prose-link">
                    {b.linkLabel}
                  </a>
                </figcaption>
              </figure>
            );
          case "gallery":
            return (
              <div key={i} className={`grid max-w-[46.5rem] gap-4 ${b.items.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {b.items.map((g, j) => (
                  <figure key={j}>
                    <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-mist">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-contain" />
                    </div>
                    {g.caption && <figcaption className="mt-3 text-[0.9rem] text-steel">{g.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            );
          case "stats":
            return (
              <div key={i} className="grid max-w-[46.5rem] gap-4 sm:grid-cols-2">
                {b.items.map((s, j) => (
                  <div key={j} className="rounded-3xl bg-mist p-7">
                    <p className="display text-[2.75rem]">{s.value}</p>
                    <p className="mt-2 max-w-[34ch] text-steel">{s.label}</p>
                  </div>
                ))}
              </div>
            );
          case "video":
            return (
              <figure key={i} id="demo" className="max-w-[46.5rem] scroll-mt-24">
                <video
                  controls
                  preload="none"
                  playsInline
                  poster={b.poster}
                  className="aspect-video w-full rounded-2xl bg-ink"
                  aria-label={b.title}
                >
                  <source src={b.src} type="video/mp4" />
                </video>
                {b.caption && <figcaption className="mt-3 text-[0.9rem] text-steel">{b.caption}</figcaption>}
              </figure>
            );
          case "image":
            return (
              <figure key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt={b.alt} loading="lazy" className="w-full rounded-2xl" />
                {b.caption && <figcaption className="mt-2 text-[0.9rem] text-steel">{b.caption}</figcaption>}
              </figure>
            );
        }
      })}
    </div>
  );
}
