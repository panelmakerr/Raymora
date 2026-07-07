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
          <div className="flex flex-col items-center gap-4">
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
            <a
              href="https://www.youtube.com/@Raymoraofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-sage hover:text-clay transition-colors"
              aria-label="Raymora YouTube channel"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
          </div>
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
