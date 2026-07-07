"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 1500);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="loader"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/images/logo.png" alt="Raymora" width={180} height={48} className="h-12 w-auto opacity-80" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
