"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CopyButton from "@/components/ui/CopyButton";

interface Link {
  href: string;
  label: string;
}

const links: Link[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl px-8 py-3 rounded-2xl bg-dark-slate/40 backdrop-blur-md border border-clay/10 shadow-lg shadow-clay/5"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between">
            <a href="/" className="font-serif text-lg tracking-wider text-soft-cream" aria-label="Raymora home">
              Raymora
            </a>
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm text-muted-sage hover:text-soft-cream transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-clay/60 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
              <CopyButton
                text="raymorahq@gmail.com"
                className="inline-block px-6 py-2 text-sm bg-clay text-soft-cream rounded-full transition-all duration-300 hover:bg-clay-light hover:shadow-lg hover:shadow-clay/20"
              >
                Start Project
              </CopyButton>
            </div>
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-px bg-soft-cream transition-transform ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block w-6 h-px bg-soft-cream transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-soft-cream transition-transform ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </button>
          </div>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 flex flex-col gap-4 pb-4"
            >
              {links.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted-sage hover:text-soft-cream" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <CopyButton text="raymorahq@gmail.com" className="text-sm text-soft-cream bg-clay rounded-full px-4 py-2 text-center w-full">
                Start Project
              </CopyButton>
            </motion.div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
