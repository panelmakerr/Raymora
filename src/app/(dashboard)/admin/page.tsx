"use client";

import { useEffect, useState } from "react";

interface Stats {
  projects: number;
  messages: number;
  users: number;
}

export default function AdminPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/stats");
        if (!res.ok) throw new Error("Failed to load stats");
        const data = await res.json();
        setStats(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Error loading stats");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Dashboard</p>
        <h1 className="font-serif text-4xl text-soft-cream mb-10">Admin Panel</h1>

        {loading && <p className="text-muted-sage">Loading stats...</p>}
        {error && <p className="text-warm-coral">{error}</p>}

        {stats && (
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-serif text-clay">{stats.projects}</p>
              <p className="text-sm text-muted-sage mt-2">Projects</p>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-serif text-clay">{stats.messages}</p>
              <p className="text-sm text-muted-sage mt-2">Messages</p>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="text-3xl font-serif text-clay">{stats.users}</p>
              <p className="text-sm text-muted-sage mt-2">Users</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
