import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 text-center sm:pt-28">
      <h1 className="display text-[clamp(2.5rem,6vw,4.5rem)]">Page not found.</h1>
      <p className="mt-6 mx-auto max-w-[48ch] text-xl text-steel">This page moved or never existed. Everything from the old site is still here.</p>
      <Link href="/" className="btn btn-primary mt-8">
        Go to the homepage
      </Link>
    </div>
  );
}
