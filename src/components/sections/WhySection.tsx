"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

const values = [
  {
    title: "Precision Engineering",
    desc: "Every line intentional — no bloat, no shortcuts. Clean code that ships fast.",
  },
  {
    title: "User-First Design",
    desc: "Interfaces that feel obvious — accessibility, performance, and beauty in balance.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We don't disappear after launch. Maintenance and support built into every project.",
  },
];

export default function WhySection() {
  return (
    <section className="py-28 px-6 bg-dark-slate/20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay text-center mb-4">Why Us</p>
          <h2 className="font-serif text-3xl md:text-5xl text-center text-soft-cream mb-14">
            Built Different
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.08}>
              <div className="text-center p-6">
                <span className="font-mono text-sm text-clay">{`[${String(i + 1).padStart(2, "0")}]`}</span>
                <h3 className="font-serif text-lg text-soft-cream mt-3 mb-2">{v.title}</h3>
                <p className="text-muted-sage text-sm leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
