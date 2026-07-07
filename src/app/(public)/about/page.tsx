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

        <div className="space-y-6 text-muted-sage leading-relaxed max-w-3xl">
          <p className="text-base">
            Raymora is a premium web development agency. We partner with businesses 
            — from ambitious startups to established enterprises — to build custom digital 
            platforms that drive measurable growth.
          </p>

          <h2 className="font-serif text-xl text-soft-cream mt-10">Our Philosophy</h2>
          <p>
            We believe great digital products are built on three pillars: clean architecture, 
            intentional design, and measurable results. Every line of code we write serves a 
            purpose. Every animation is considered. Every pixel is accounted for.
          </p>
          <p>
            We don&apos;t use templates. We don&apos;t cut corners. We build from the ground up 
            — tailored to your business, your audience, and your goals.
          </p>

          <h2 className="font-serif text-xl text-soft-cream mt-10">What We Deliver</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-clay font-mono shrink-0">{"->"}</span>
              <span><strong className="text-soft-cream">Custom Web Applications</strong> — Full-stack platforms built with Next.js, React, and Node.js. Scalable by design.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-clay font-mono shrink-0">{"->"}</span>
              <span><strong className="text-soft-cream">E-Commerce Solutions</strong> — Headless storefronts, custom checkout flows, and inventory management that converts.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-clay font-mono shrink-0">{"->"}</span>
              <span><strong className="text-soft-cream">Data Dashboards</strong> — Real-time analytics interfaces with interactive visualizations and team collaboration.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-clay font-mono shrink-0">{"->"}</span>
              <span><strong className="text-soft-cream">Landing Pages</strong> — High-converting pages designed to capture attention, tell your story, and drive action.</span>
            </li>
          </ul>

          <h2 className="font-serif text-xl text-soft-cream mt-10">Our Process</h2>
          <p>
            Every project begins with discovery — we learn your industry, your audience, and 
            your competition before writing a single line of code. Then we architect, build 
            iteratively, and deploy with performance baked in. You see progress in real time, 
            not just at the end.
          </p>

          <h2 className="font-serif text-xl text-soft-cream mt-10">Let&apos;s Build</h2>
          <p>
            Whether you&apos;re launching a new product or rebuilding an existing platform, 
            we&apos;d love to hear from you. Reach out at{" "}
            <a href="mailto:raymorahq@gmail.com" className="text-clay hover:underline">raymorahq@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
