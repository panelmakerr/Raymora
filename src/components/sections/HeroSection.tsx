"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParticleField from "@/components/3d/ParticleField";

const snippets = [
  { x: "-8%", y: "12%", rot: -6, z: 40 },
  { x: "78%", y: "20%", rot: 4, z: 60 },
  { x: "65%", y: "65%", rot: -3, z: 80 },
  { x: "-4%", y: "58%", rot: 6, z: 30 },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-navy perspective-1000">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="code-wall">
          <Image src="/images/code-editor-bg.jpg" alt="" fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="code-overlay" />
      </motion.div>

      {snippets.map((s, i) => (
        <motion.div
          key={i}
          className="absolute z-[2] hidden lg:block select-none preserve-3d"
          style={{ left: s.x, top: s.y, z: s.z }}
          initial={{ opacity: 0, rotate: s.rot, z: 0 }}
          animate={{ opacity: 0.3, rotate: s.rot, z: s.z }}
          transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
          whileHover={{ scale: 1.1, opacity: 0.5, rotate: 0 }}
        >
          <div className="bg-dark-slate/70 backdrop-blur-sm p-3 rounded-lg border border-clay/10 font-mono text-xs text-muted-sage shadow-xl">
            <p className="text-code-green">// BWN x BOSS</p>
            <p className="text-clay">const agency = &quot;premium&quot;;</p>
            <p className="text-muted-sage">console.log(agency);</p>
          </div>
        </motion.div>
      ))}

      <motion.div className="relative z-[3] text-center px-6 max-w-4xl mx-auto preserve-3d" style={{ y: textY }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-sage mb-4"
        >
          Premium Web Development Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, z: -50 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-soft-cream mb-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className="block">
            We Build{" "}
            <span className="text-clay italic text-layer-3d relative" data-text="Intentional">
              Intentional
            </span>
          </span>
          <span className="block mt-2">
            Digital Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base md:text-lg text-muted-sage max-w-xl mx-auto leading-relaxed"
        >
          BWN × BOSS &mdash; where precision engineering meets creative vision.
          We craft premium websites, dashboards, and tools
          that convert visitors into paying clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="/projects"
            className="inline-block bg-clay text-soft-cream px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-clay-light"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(196,122,78,0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="/contact"
            className="inline-block border border-clay/30 text-soft-cream px-8 py-3 rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-clay/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <ParticleField />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-clay/5 rounded-full blur-3xl pointer-events-none z-[1]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="scroll-indicator" />
      </motion.div>
    </section>
  );
}
