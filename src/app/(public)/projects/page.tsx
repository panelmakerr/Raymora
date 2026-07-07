import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Raymora",
  description: "A curated selection of premium digital experiences built by Raymora.",
};

const projects = [
  {
    title: "ShopWave",
    niche: "E-Commerce / Retail",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=75",
    prd: "Multi-vendor marketplace with real-time inventory management, AI-powered product recommendations, and seamless checkout experience.",
    tech: "Next.js, Stripe, Supabase, Algolia",
    year: "2025",
  },
  {
    title: "MediTrack",
    niche: "HealthTech",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=75",
    prd: "Patient management dashboard with appointment scheduling, EMR integration, telemedicine, and analytics.",
    tech: "React, Node.js, PostgreSQL, WebRTC",
    year: "2025",
  },
  {
    title: "PaySwift",
    niche: "FinTech",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=75",
    prd: "Digital payment platform with instant transfers, budgeting tools, multi-currency support, and fraud detection.",
    tech: "Next.js, Plaid, Stripe, Supabase",
    year: "2025",
  },
  {
    title: "PropVue",
    niche: "Real Estate / PropTech",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75",
    prd: "Property listing portal with virtual 3D tours, AI-powered pricing estimates, and agent CRM.",
    tech: "Next.js, Mapbox, TensorFlow, Supabase",
    year: "2024",
  },
  {
    title: "LearnCraft",
    niche: "EdTech",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=75",
    prd: "Online learning platform with live classes, progress tracking, interactive assessments, and certification.",
    tech: "React, WebRTC, Express, MongoDB",
    year: "2024",
  },
  {
    title: "InsightPro",
    niche: "B2B SaaS / Analytics",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75",
    prd: "Business intelligence dashboard with real-time data visualization, custom reports, and team collaboration.",
    tech: "Next.js, D3.js, ClickHouse, Supabase",
    year: "2024",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Portfolio</p>
        <h1 className="font-serif text-4xl md:text-6xl text-soft-cream mb-4">Our Projects</h1>
        <p className="text-muted-sage mb-16 max-w-lg">
          Six industries. Six solutions. One standard of quality.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group">
              <div className="rounded-xl overflow-hidden bg-dark-slate border border-clay/10 mb-4 shadow-lg transition-shadow duration-500 group-hover:shadow-clay/10 group-hover:shadow-2xl">
                <div className="flex items-center gap-1.5 px-3 py-2.5 bg-dark-slate/90 border-b border-clay/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-warm-coral" />
                  <span className="w-2.5 h-2.5 rounded-full bg-clay" />
                  <span className="w-2.5 h-2.5 rounded-full bg-code-green" />
                  <span className="ml-3 text-[9px] text-muted-sage font-mono">{p.niche}</span>
                </div>
                <Image src={p.img} alt={p.title} width={800} height={224} className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="font-mono text-[10px] text-clay mb-1 uppercase tracking-wider">{p.niche}</p>
              <h2 className="font-serif text-xl text-soft-cream group-hover:text-clay transition-colors">{p.title}</h2>
              <p className="text-sm text-muted-sage mt-2 leading-relaxed">{p.prd}</p>
              <p className="text-xs text-muted-sage/60 mt-2 font-mono">{p.tech}</p>
              <p className="text-xs text-muted-sage/40 mt-1">{p.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
