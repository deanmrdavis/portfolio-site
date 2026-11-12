import { Fragment } from "react";

// Renders plain text with markdown-style links: [label](https://url)
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const external = /^https?:/.test(m[2]);
        return (
          <a
            key={i}
            href={m[2]}
            className="prose-link"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {m[1]}
          </a>
        );
      })}
    </>
  );
}
