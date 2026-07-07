import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Raymora",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Error</p>
      <h1 className="font-serif text-6xl text-soft-cream mb-4">404</h1>
      <p className="text-muted-sage mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a href="/" className="text-sm text-clay hover:underline">Back to Home</a>
    </div>
  );
}
