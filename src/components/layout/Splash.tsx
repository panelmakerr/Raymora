"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const fullText = "BWN x BOSS";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShow(false), 800);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="loader"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.p className="text-2xl md:text-4xl tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {text}
            <span className="animate-pulse ml-1 text-clay">|</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
