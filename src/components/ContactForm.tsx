"use client";

import { useState } from "react";

// Netlify Forms: the form is registered at deploy time via public/__forms.html.
// Submissions show up in the Netlify dashboard and can be emailed to Dean.
type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base outline-none transition-shadow focus:border-ink focus:shadow-[0_0_0_3px_rgba(29,29,31,0.12)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-6 text-center" role="status">
        <p className="display-md text-3xl">Message sent.</p>
        <p className="mt-3 text-steel">Thanks for reaching out. I'll reply to the email you gave within a couple of days.</p>
      </div>
    );
  }

  return (
    <form name="contact" onSubmit={onSubmit} className="space-y-6">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" />
        </label>
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-[0.9rem] font-medium">Name</span>
          <input className={field} name="name" autoComplete="name" required />
        </label>
        <label className="block">
          <span className="text-[0.9rem] font-medium">Email</span>
          <input className={field} type="email" name="email" autoComplete="email" required />
        </label>
      </div>
      <label className="block">
        <span className="text-[0.9rem] font-medium">Company</span> <span className="text-steel">(optional)</span>
        <input className={field} name="company" autoComplete="organization" />
      </label>
      <label className="block">
        <span className="text-[0.9rem] font-medium">Message</span>
        <textarea className={`${field} min-h-40`} name="message" required />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary disabled:opacity-60"
        >
          {status === "sending" ? "Sending message" : "Send message"}
        </button>
        {status === "error" && (
          <p className="text-[0.95rem]" role="alert">
            The message didn't go through. Try again, or email me directly.
          </p>
        )}
      </div>
    </form>
  );
}
