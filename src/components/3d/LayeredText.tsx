"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export default function LayeredText({ text, as: Tag = "h1", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const depth = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <motion.div ref={ref} className={className}>
      <Tag
        className="layered-3d"
        style={{
          textShadow: depth.get() !== undefined ? undefined : undefined,
        }}
      >
        {text}
      </Tag>
    </motion.div>
  );
}
