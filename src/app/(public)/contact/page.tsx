import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Raymora",
  description: "Start your project with Raymora. Tell us about your vision.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 bg-dark-slate">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Contact</p>
        <h1 className="font-serif text-4xl md:text-6xl text-soft-cream mb-4">Let&apos;s Talk</h1>
        <p className="text-muted-sage mb-6 max-w-md">
          Reach out directly at{" "}
          <a href="mailto:frixonplayz@gmail.com" className="text-clay hover:underline">
            frixonplayz@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
