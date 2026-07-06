"use client";

import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function AboutSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="code-wall">
        <Image src="/images/code-editor-bg.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="code-overlay" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">About</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-soft-cream mb-6">
            Code is{" "}<span className="text-clay italic">Craft</span>
          </h2>
          <p className="text-muted-sage text-base leading-relaxed max-w-xl mx-auto">
            We&apos;re a team of two — BWN builds frontend, backend, and everything
            in between. BOSS ensures every client feels heard and delivered.
            Together, we create premium digital experiences.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
