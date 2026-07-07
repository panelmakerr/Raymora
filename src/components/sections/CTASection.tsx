"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import CopyButton from "@/components/ui/CopyButton";

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
          <div className="mb-8">
            <CopyButton
              text="raymorahq@gmail.com"
              className="text-sm text-clay font-mono hover:text-clay-light transition-colors"
            >
              raymorahq@gmail.com
            </CopyButton>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CopyButton
              text="raymorahq@gmail.com"
              className="inline-block bg-clay text-soft-cream px-10 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-clay-light hover:scale-105"
            >
              Copy Email
            </CopyButton>
            <CopyButton
              text="+923712385700"
              className="inline-block border border-clay/30 text-soft-cream px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-clay/10"
            >
              Copy Number
            </CopyButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
