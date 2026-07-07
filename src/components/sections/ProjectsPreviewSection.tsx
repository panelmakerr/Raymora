"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface Project {
  title: string;
  niche: string;
  img: string;
  prd: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "ShopWave",
    niche: "E-Commerce / Retail",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=75",
    prd: "Multi-vendor marketplace with real-time inventory, AI recommendations, and seamless checkout.",
    url: "#",
  },
  {
    title: "MediTrack",
    niche: "HealthTech",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=75",
    prd: "Patient management dashboard with appointment scheduling, EMR integration, and analytics.",
    url: "#",
  },
  {
    title: "PaySwift",
    niche: "FinTech",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=75",
    prd: "Digital payment platform with instant transfers, budgeting tools, and multi-currency support.",
    url: "#",
  },
  {
    title: "PropVue",
    niche: "Real Estate / PropTech",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75",
    prd: "Property listing portal with virtual tours, AI pricing estimates, and agent CRM.",
    url: "#",
  },
  {
    title: "LearnCraft",
    niche: "EdTech",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=75",
    prd: "Online learning platform with live classes, progress tracking, and interactive assessments.",
    url: "#",
  },
  {
    title: "InsightPro",
    niche: "B2B SaaS / Analytics",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75",
    prd: "Business intelligence dashboard with real-time data viz, custom reports, and team collaboration.",
    url: "#",
  },
];

function BrowserMockup({ project, i }: { project: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(1200px) rotateY(${x * 8}deg) rotateX(${y * -5}deg) translateZ(20px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };

  return (
    <motion.div
      className="block shrink-0 w-[340px] md:w-[400px] group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
    >
      <div
        ref={ref}
        className="w-full rounded-xl overflow-hidden bg-dark-slate border border-clay/10 transition-transform duration-200 ease-out shadow-2xl"
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-dark-slate/90 border-b border-clay/10">
          <span className="w-3 h-3 rounded-full bg-warm-coral" />
          <span className="w-3 h-3 rounded-full bg-clay" />
          <span className="w-3 h-3 rounded-full bg-code-green" />
          <span className="ml-4 text-[10px] text-muted-sage font-mono">{project.niche}</span>
        </div>
        <div className="relative overflow-hidden">
          <Image src={project.img} alt={project.title} width={800} height={500} className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-slate/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-xs font-mono text-clay">{project.niche}</p>
            <p className="text-sm text-soft-cream font-serif mt-1">{project.title}</p>
            <p className="text-xs text-muted-sage mt-1">{project.prd}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 px-1">
        <p className="font-serif text-lg text-soft-cream group-hover:text-clay transition-colors">{project.title}</p>
        <p className="text-xs text-muted-sage mt-1 font-mono">{project.niche}</p>
        <p className="text-xs text-muted-sage/70 mt-1 leading-relaxed">{project.prd}</p>
      </div>
    </motion.div>
  );
}

export default function ProjectsPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={sectionRef} className="py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-14">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay text-center mb-4">Our Work</p>
          <h2 className="font-serif text-3xl md:text-5xl text-center text-soft-cream mb-4">Featured Projects</h2>
          <p className="text-muted-sage text-center max-w-md mx-auto">
            Six industries. Six solutions. One standard of quality.
          </p>
        </ScrollReveal>
      </div>

      <motion.div className="flex gap-6 w-max px-6 pb-4" style={{ x }}>
        {projects.map((p, i) => (
          <BrowserMockup key={p.title} project={p} i={i} />
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <a
          href="/projects"
          className="inline-block text-sm text-clay border border-clay/30 px-8 py-3 rounded-full hover:bg-clay/10 transition-all duration-300"
        >
          View All Projects &rarr;
        </a>
      </div>
    </section>
  );
}
