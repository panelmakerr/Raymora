"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep-navy py-16 px-6 border-t border-clay/5" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <Image src="/images/logo.png" alt="Raymora" width={120} height={32} className="h-8 w-auto" />
            <p className="text-sm text-muted-sage mt-2 max-w-xs">
              Precision engineering meets creative vision. Premium web development agency.
            </p>
          </div>
          <nav className="flex flex-col md:flex-row gap-6 items-center" aria-label="Footer navigation">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm text-muted-sage hover:text-soft-cream transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-dark-slate pt-8 text-center">
          <p className="text-xs text-muted-sage">
            &copy; {year} Raymora. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
