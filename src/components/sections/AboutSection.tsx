"use client";

import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "6", label: "Industries Served" },
  { num: "100%", label: "Client Satisfaction" },
  { num: "2x", label: "Avg. Conversion Lift" },
];

export default function AboutSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="code-wall">
        <Image src="/images/code-editor-bg.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="code-overlay" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">About Raymora</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-soft-cream mb-6">
            Code is <span className="text-clay italic">Craft</span>
          </h2>
          <p className="text-muted-sage text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Raymora is a premium web development agency built on precision. We partner with 
            businesses to create custom digital platforms that drive growth — from ambitious 
            startups to established enterprises. Every project is engineered with clean architecture, 
            intentional design, and a relentless focus on results.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-clay">{s.num}</p>
                <p className="text-xs text-muted-sage mt-2">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
