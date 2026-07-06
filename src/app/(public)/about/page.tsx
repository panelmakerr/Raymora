import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — BWN × BOSS",
  description: "A two-person team delivering premium web solutions — BWN builds, BOSS connects.",
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
            BWN × BOSS is a two-person web development agency. We build premium websites
            and dashboards for clients who refuse to settle for template-based design.
          </p>
          <p>
            <span className="text-soft-cream">BWN</span> is the engineer — frontend, backend,
            architecture, deployment. Every line is intentional. Every animation, considered.
            Every pixel, accounted for.
          </p>
          <p>
            <span className="text-soft-cream">BOSS</span> is the bridge — client conversations,
            project management, strategy, and delivery. Making sure every client feels heard
            and every project ships on time.
          </p>
          <p>
            We don&apos;t do templates. We don&apos;t cut corners. We build digital experiences
            that convert visitors into paying clients — clean code, fast performance,
            and design that works.
          </p>
        </div>
      </div>
    </div>
  );
}
