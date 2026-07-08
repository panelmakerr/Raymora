import Image from "next/image";
import type { Metadata } from "next";
import projects from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Raymora",
  description: "A curated selection of premium digital experiences built by Raymora.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Portfolio</p>
        <h1 className="font-serif text-4xl md:text-6xl text-soft-cream mb-4">Our Projects</h1>
        <p className="text-muted-sage mb-16 max-w-lg">
          Each project is a real product built for a specific industry and problem.
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
              {p.liveUrl !== "#" && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs text-clay border border-clay/30 px-4 py-1.5 rounded-full hover:bg-clay/10 transition-all"
                >
                  Visit Live Site &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
