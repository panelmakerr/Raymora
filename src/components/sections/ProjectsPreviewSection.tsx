"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface Project {
  title: string;
  tag: string;
  img: string;
  tech: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Outcrowd",
    tag: "Agency Website",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=75",
    tech: "Design Studio",
    url: "https://outcrowd.io",
  },
  {
    title: "Linear",
    tag: "SaaS",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75",
    tech: "Next.js, React",
    url: "https://linear.app",
  },
  {
    title: "Vercel",
    tag: "Platform",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=75",
    tech: "Next.js, Edge",
    url: "https://vercel.com",
  },
  {
    title: "Stripe",
    tag: "Fintech",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75",
    tech: "Payments API",
    url: "https://stripe.com",
  },
  {
    title: "Apple",
    tag: "Brand Landing",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=75",
    tech: "Framer Motion",
    url: "https://apple.com",
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
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block shrink-0 w-[380px] md:w-[440px] group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
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
          <div className="ml-4 flex-1 bg-deep-navy/60 rounded-full px-3 py-1.5">
            <p className="text-[10px] text-muted-sage font-mono truncate">{project.url}</p>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={project.img}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-slate/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-xs font-mono text-clay">{project.tag}</p>
            <p className="text-sm text-soft-cream font-serif">{project.title}</p>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function ProjectsPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  return (
    <section ref={sectionRef} className="py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-14">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay text-center mb-4">Featured Work</p>
          <h2 className="font-serif text-3xl md:text-5xl text-center text-soft-cream mb-4">Recent Projects</h2>
          <p className="text-muted-sage text-center max-w-md mx-auto">
            Live websites we&apos;ve crafted. Click to explore each one.
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
