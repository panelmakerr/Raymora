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
          <p className="text-muted-sage mb-4 max-w-md mx-auto">
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </p>
          <p className="text-sm text-clay font-mono mb-8">
            raymorahq@gmail.com
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:raymorahq@gmail.com"
              className="inline-block bg-clay text-soft-cream px-10 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-clay-light hover:scale-105"
            >
              Start Your Project
            </a>
            <a
              href="tel:+923712385700"
              className="inline-block border border-clay/30 text-soft-cream px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-clay/10"
            >
              Call +92 3712385700
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
