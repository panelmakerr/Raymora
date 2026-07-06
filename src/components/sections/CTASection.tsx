"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-28 px-6 bg-dark-slate/20">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Let&apos;s Build</p>
          <h2 className="font-serif text-3xl md:text-5xl text-soft-cream mb-6 leading-tight">
            Ready to Create Something{" "}<span className="text-clay italic">Intentional</span>?
          </h2>
          <p className="text-muted-sage mb-10 max-w-md mx-auto">
            One conversation can change everything. Tell us about your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-clay text-soft-cream px-10 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-clay-light hover:scale-105"
          >
            Start Your Project
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
