"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

const steps = [
  { num: "01", title: "Discovery", desc: "We learn your business, audience, and goals. No assumptions — just research and clarity." },
  { num: "02", title: "Architecture", desc: "Clean system design, tech stack selection, and project roadmap. Everything planned before a line is written." },
  { num: "03", title: "Development", desc: "Iterative builds with daily updates. You see progress in real time, not just at the end." },
  { num: "04", title: "Launch & Scale", desc: "Deployment, performance tuning, and ongoing support. Your site grows with your business." },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay text-center mb-4">How We Work</p>
          <h2 className="font-serif text-3xl md:text-5xl text-center text-soft-cream mb-16">Our Process</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.1}>
              <div className="text-center">
                <span className="font-mono text-3xl text-clay/40">{s.num}</span>
                <h3 className="font-serif text-lg text-soft-cream mt-3 mb-2">{s.title}</h3>
                <p className="text-muted-sage text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
