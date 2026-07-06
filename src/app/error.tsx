"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Error</p>
        <h1 className="font-serif text-3xl text-soft-cream mb-4">Something went wrong</h1>
        <p className="text-muted-sage text-sm mb-8 max-w-md">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="inline-block bg-clay text-soft-cream px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-clay-light transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
