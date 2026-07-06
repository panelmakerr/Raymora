"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    quote: "The level of detail and communication was unlike anything I've experienced with other devs.",
    author: "Sarah Chen",
    role: "Founder, Lumina",
    initials: "SC",
  },
  {
    quote: "Our conversion rate doubled after the redesign. Clean code, beautiful design, fast delivery.",
    author: "Marcus Rivera",
    role: "CEO, Storefront Pro",
    initials: "MR",
  },
  {
    quote: "They don't just build — they care about the outcome. True partners, not just vendors.",
    author: "Priya Kapoor",
    role: "CTO, Analytics Hub",
    initials: "PK",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay text-center mb-4">Clients</p>
          <h2 className="font-serif text-3xl md:text-5xl text-center text-soft-cream mb-14">Kind Words</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.08}>
              <div className="glass-card p-7 h-full">
                <p className="text-lg leading-relaxed text-soft-cream mb-5 font-serif italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-clay/20 flex items-center justify-center text-xs font-mono text-clay">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm text-soft-cream">{t.author}</p>
                    <p className="text-xs text-muted-sage">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
