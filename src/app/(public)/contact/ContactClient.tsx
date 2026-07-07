"use client";

import CopyButton from "@/components/ui/CopyButton";

const tiers = [
  {
    title: "Quick Question",
    desc: "Have a short question? Email us and we'll respond within 24 hours.",
    copy: "raymorahq@gmail.com",
    label: "Copy Email",
  },
  {
    title: "Start a Project",
    desc: "Tell us about your vision. We'll schedule a free consultation to discuss scope, timeline, and budget.",
    copy: "raymorahq@gmail.com",
    label: "Copy Email",
  },
  {
    title: "Call Us",
    desc: "Prefer to talk? Copy our number and dial us directly.",
    copy: "+923712385700",
    label: "Copy Number",
  },
];

export default function ContactClient() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 mb-14">
        {tiers.map((t) => (
          <div key={t.title} className="glass-card p-6 flex flex-col">
            <h2 className="font-serif text-lg text-soft-cream mb-2">{t.title}</h2>
            <p className="text-sm text-muted-sage mb-5 flex-1">{t.desc}</p>
            <CopyButton
              text={t.copy}
              className="inline-block text-sm bg-clay text-soft-cream px-6 py-2.5 rounded-full text-center transition-all duration-300 hover:bg-clay-light w-full"
            >
              {t.label}
            </CopyButton>
          </div>
        ))}
      </div>

      <div className="glass-card p-8 max-w-2xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-3">Direct Email</p>
        <p className="text-muted-sage text-sm mb-4">Click to copy. We read every message.</p>
        <CopyButton
          text="raymorahq@gmail.com"
          className="text-xl md:text-2xl font-serif text-soft-cream hover:text-clay transition-colors mx-auto"
        >
          raymorahq@gmail.com
        </CopyButton>
      </div>
    </>
  );
}
