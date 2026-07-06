"use client";

import { motion } from "framer-motion";

export default function CustomCursor() {
  return (
    <motion.div
      className="custom-cursor hidden lg:block"
      aria-hidden="true"
      id="custom-cursor"
    />
  );
}
