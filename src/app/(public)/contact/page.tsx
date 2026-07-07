import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Raymora",
  description: "Start your project with Raymora. Tell us about your vision.",
};

const tiers = [
  {
    title: "Quick Question",
    desc: "Have a short question? Email us and we'll respond within 24 hours.",
    action: "raymorahq@gmail.com",
    href: "mailto:raymorahq@gmail.com",
    label: "Send Email",
  },
  {
    title: "Start a Project",
    desc: "Tell us about your vision. We'll schedule a free consultation to discuss scope, timeline, and budget.",
    action: "raymorahq@gmail.com",
    href: "mailto:raymorahq@gmail.com?subject=Project%20Inquiry",
    label: "Start Your Project",
  },
  {
    title: "Call Us",
    desc: "Prefer to talk? Call or WhatsApp for a direct conversation.",
    action: "+92 3712385700",
    href: "tel:+923712385700",
    label: "+92 3712385700",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 bg-dark-slate">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Contact</p>
        <h1 className="font-serif text-4xl md:text-6xl text-soft-cream mb-4">Let&apos;s Talk</h1>
        <p className="text-muted-sage mb-14 max-w-lg">
          No fluff. No sales pitch. Just tell us what you need and we&apos;ll figure out if we&apos;re the right fit.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {tiers.map((t) => (
            <div key={t.title} className="glass-card p-6 flex flex-col">
              <h2 className="font-serif text-lg text-soft-cream mb-2">{t.title}</h2>
              <p className="text-sm text-muted-sage mb-5 flex-1">{t.desc}</p>
              <a
                href={t.href}
                className="inline-block text-sm bg-clay text-soft-cream px-6 py-2.5 rounded-full text-center transition-all duration-300 hover:bg-clay-light"
              >
                {t.label}
              </a>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-clay mb-3">Direct Email</p>
          <p className="text-muted-sage text-sm mb-4">Write to us directly. We read every message.</p>
          <a
            href="mailto:raymorahq@gmail.com"
            className="text-xl md:text-2xl font-serif text-soft-cream hover:text-clay transition-colors"
          >
            raymorahq@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
