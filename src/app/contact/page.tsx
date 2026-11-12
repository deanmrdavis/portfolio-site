import type { Metadata } from "next";
import { contact, site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dean Davis about product and program management roles.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
      <div className="text-center">
        <h1 className="display mx-auto max-w-[18ch] text-[clamp(2.5rem,5.5vw,4.25rem)]">{contact.heading}</h1>
        <p className="mx-auto mt-4 max-w-[48ch] text-[1.2rem] leading-relaxed text-steel">{contact.intro}</p>
      </div>
      <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-12">
        <dl className="space-y-6 md:col-span-4">
          <div>
            <dt className="text-[0.85rem] text-steel">Email</dt>
            <dd className="mt-1"><a className="prose-link" href={`mailto:${site.email}`}>{site.email}</a></dd>
          </div>
          <div>
            <dt className="text-[0.85rem] text-steel">LinkedIn</dt>
            <dd className="mt-1"><a className="prose-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">dean-davis-58002469</a></dd>
          </div>
          <div>
            <dt className="text-[0.85rem] text-steel">Based in</dt>
            <dd className="mt-1">Palo Alto, California</dd>
          </div>
        </dl>
        <div className="rounded-[28px] bg-mist p-6 sm:p-10 md:col-span-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
