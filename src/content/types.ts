// Inline links inside any text field use markdown syntax: [label](https://url)

export type ListItem = { label?: string; text: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: ListItem[] }
  | { type: "facts"; items: ListItem[] }
  | { type: "results"; items: { label: string; goal: string; outcome: string; goalLabel?: string }[] }
  | { type: "embed"; src: string; title: string; href: string; linkLabel: string; aspect?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "note"; text: string }
  | { type: "gallery"; items: { src: string; alt: string; caption?: string }[] }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "video"; src: string; poster: string; title: string; caption?: string };

export type Section = { id: string; title: string; blocks: Block[] };

export type Spec = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  image: string;
  imageAlt: string;
  kind: "Consumer" | "B2B";
  // Optional override for the small label above the title on project tiles.
  tileLabel?: string;
  spec: Spec[];
  links?: { label: string; href: string }[];
  sections: Section[];
};
