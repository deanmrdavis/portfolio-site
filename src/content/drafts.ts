import type { Project } from "./types";

// Projects removed from the live site but kept for later.
// To publish one, move it back into the `projects` array in projects.ts.
export const drafts: Project[] = [
  // ───────────────────────────── Nike x Zellerfeld ─────────────────────────────
  // TODO(Dean): this page is new. Add the problem you set out to solve, who it's
  // for, what you learned, and any usage or feedback you have.
  {
    slug: "zellerfeld",
    title: "Nike x Zellerfeld Design Studio",
    shortTitle: "Nike x Zellerfeld",
    tagline: "Sketch a sneaker. Get a 3D-printable design back.",
    summary:
      "A concept design studio for custom 3D-printed sneakers. Upload or draw a sketch, describe the direction you want, and an AI model turns it into a finished Air Max Platform concept you can keep iterating on.",
    image: "/images/zellerfeld.webp",
    imageAlt: "The Nike x Zellerfeld Design Studio interface, with a sketch upload area on the left and the AI design output panel on the right.",
    kind: "Consumer",
    spec: [
      { label: "Role", value: "Solo builder" },
      { label: "Status", value: "Live prototype" },
      { label: "Category", value: "Footwear, AI design" },
      { label: "Stack", value: "React, Vite, Netlify Functions, Claude, Ideogram" },
    ],
    links: [{ label: "Open the live app", href: "https://merry-blini-0966ae.netlify.app/" }],
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "Zellerfeld prints shoes on demand, which means a sneaker no longer has to be designed for millions of feet at once. This prototype asks what the front door to that world could look like for a Nike customer: a studio where anyone can go from a rough idea to a design they would actually wear.",
          },
          {
            type: "facts",
            items: [
              { label: "Sketch or draw", text: "Upload an image of a sketch, or draw directly in the browser." },
              { label: "Direct the design", text: "Describe the vibe in plain language, like \"Tokyo street culture, orange and black, aggressive sole.\"" },
              { label: "Iterate", text: "Each generation remembers the last five iterations, so feedback builds on what came before instead of starting over." },
            ],
          },
        ],
      },
      {
        id: "build",
        title: "How it's built",
        blocks: [
          {
            type: "list",
            items: [
              { label: "Frontend", text: "React and Vite, deployed on Netlify." },
              { label: "Server-side proxies", text: "Netlify Functions sit between the browser and the Anthropic (Claude) and Ideogram APIs, so API keys never reach the client." },
              { label: "Conversational memory", text: "The last five design iterations are passed back as context on every request." },
            ],
          },
        ],
      },
    ],
  },

];
