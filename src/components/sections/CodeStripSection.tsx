"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images: string[] = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=75",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=75",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=75",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=75",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=75",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=75",
];

export default function CodeStripSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={ref} className="py-24 overflow-hidden bg-deep-navy">
      <div className="mb-10 px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-sage text-center">Code Aesthetic</p>
      </div>
      <motion.div className="flex gap-5 w-max px-6" style={{ x }}>
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="polaroid-card shrink-0"
            style={{ "--rot": `${(Math.random() - 0.5) * 5}deg` } as React.CSSProperties}
          >
            <Image src={src} alt="" width={208} height={128} className="w-52 h-32 object-cover rounded-sm" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
