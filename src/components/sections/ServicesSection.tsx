"use client";

import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface Service {
  title: string;
  desc: string;
  icon: string;
}

const services: Service[] = [
  { title: "Web Development", desc: "Full-stack sites with Next.js, TypeScript, and modern architectures.", icon: "<>" },
  { title: "Landing Pages", desc: "High-converting pages designed to capture attention and drive action.", icon: "//" },
  { title: "E-commerce", desc: "Custom online stores with seamless checkout and inventory management.", icon: "$_" },
  { title: "Dashboards", desc: "Data-driven interfaces with real-time updates and authentication.", icon: "{}" },
  { title: "Performance Optimization", desc: "Speed audits, lazy loading, image optimization, and Core Web Vitals improvement.", icon: "->" },
  { title: "Maintenance", desc: "Keep your site fast, secure, and up-to-date with ongoing support.", icon: "##" },
];

function TiltCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <motion.div
      ref={cardRef}
      className="glass-card p-7 h-full group cursor-default transition-transform duration-200 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ borderColor: "rgba(196,122,78,0.3)" }}
    >
      <span className="font-mono text-xl text-clay">{service.icon}</span>
      <h3 className="font-serif text-lg text-soft-cream mt-4 mb-2 group-hover:text-clay transition-colors">{service.title}</h3>
      <p className="text-muted-sage text-sm leading-relaxed">{service.desc}</p>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-28 px-6 bg-dark-slate/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay text-center mb-4">Services</p>
          <h2 className="font-serif text-3xl md:text-5xl text-center text-soft-cream mb-14">What We Build</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.07}>
              <TiltCard service={s} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
