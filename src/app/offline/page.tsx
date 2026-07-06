import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline — BWN × BOSS",
};

export default function Offline() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Offline</p>
      <h1 className="font-serif text-4xl text-soft-cream mb-4">You&apos;re Offline</h1>
      <p className="text-muted-sage mb-8 max-w-sm">
        Check your internet connection and try again.
      </p>
      <a href="/" className="text-sm text-clay hover:underline">Back to Home</a>
    </div>
  );
}
