import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Raymora",
  description: "A curated selection of premium digital experiences built by Raymora.",
};

const projects = [
  {
    title: "Outcrowd",
    tag: "Agency Website",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=75",
    tech: "Design Studio",
    desc: "A world-class design studio connecting companies with top creative talent.",
    year: "2025",
    url: "https://outcrowd.io",
  },
  {
    title: "Linear",
    tag: "SaaS",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75",
    tech: "Next.js, React",
    desc: "A full-stack issue tracking platform with real-time updates, team collaboration, and sprint planning.",
    year: "2025",
    url: "https://linear.app",
  },
  {
    title: "Vercel",
    tag: "Platform",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=75",
    tech: "Next.js, Edge Functions",
    desc: "Cloud platform for static and serverless deployment with instant rollbacks and analytics.",
    year: "2025",
    url: "https://vercel.com",
  },
  {
    title: "Stripe",
    tag: "Fintech",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75",
    tech: "React, API Design",
    desc: "Payment infrastructure for the internet with seamless checkout, billing, and financial tools.",
    year: "2024",
    url: "https://stripe.com",
  },
  {
    title: "Apple",
    tag: "Brand Landing",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=75",
    tech: "Next.js, Framer Motion",
    desc: "Premium brand landing page with cinematic animations, product showcases, and immersive storytelling.",
    year: "2024",
    url: "https://apple.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Portfolio</p>
        <h1 className="font-serif text-4xl md:text-6xl text-soft-cream mb-4">Projects</h1>
        <p className="text-muted-sage mb-16 max-w-lg">
          Live websites and digital experiences we&apos;ve crafted.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target={p.url !== "#" ? "_blank" : undefined}
              rel={p.url !== "#" ? "noopener noreferrer" : undefined}
              className="group"
            >
              <div className="rounded-xl overflow-hidden bg-dark-slate border border-clay/10 mb-5 shadow-lg transition-shadow duration-500 group-hover:shadow-clay/10 group-hover:shadow-2xl">
                <div className="flex items-center gap-1.5 px-3 py-2.5 bg-dark-slate/90 border-b border-clay/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-warm-coral" />
                  <span className="w-2.5 h-2.5 rounded-full bg-clay" />
                  <span className="w-2.5 h-2.5 rounded-full bg-code-green" />
                  <span className="ml-3 text-[9px] text-muted-sage font-mono truncate">{p.url}</span>
                </div>
                <Image src={p.img} alt={p.title} width={800} height={224} className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-xs text-clay mb-1">{p.tag}</p>
                  <h2 className="font-serif text-xl text-soft-cream group-hover:text-clay transition-colors">{p.title}</h2>
                </div>
                <span className="text-xs text-muted-sage">{p.year}</span>
              </div>
              <p className="text-sm text-muted-sage mt-2 leading-relaxed">{p.desc}</p>
              <p className="text-xs text-muted-sage mt-2 font-mono">{p.tech}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
