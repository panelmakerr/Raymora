import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Raymora",
  description: "Raymora — premium web development agency crafting intentional digital experiences.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">About</p>
        <h1 className="font-serif text-4xl md:text-6xl text-soft-cream mb-8 leading-tight">
          Code is <span className="text-clay italic">Craft</span>
        </h1>

        <div className="space-y-6 text-muted-sage leading-relaxed max-w-2xl">
          <p>
            Raymora is a premium web development agency. We build custom websites,
            dashboards, and digital tools for clients who refuse to settle for template-based design.
          </p>
          <p>
            Every line is intentional. Every animation, considered. Every pixel, accounted for.
            We don&apos;t do templates. We don&apos;t cut corners. We build digital experiences
            that convert visitors into paying clients — clean code, fast performance,
            and design that works.
          </p>
        </div>
      </div>
    </div>
  );
}
