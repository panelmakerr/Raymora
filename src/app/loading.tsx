export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-6 h-6 border-2 border-clay/30 border-t-clay rounded-full animate-spin" />
        <p className="text-xs font-mono text-muted-sage">Loading...</p>
      </div>
    </div>
  );
}
