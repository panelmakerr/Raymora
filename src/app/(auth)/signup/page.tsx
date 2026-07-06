"use client";

import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase auth integration placeholder
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4 text-center">Get Started</p>
        <h1 className="font-serif text-3xl text-soft-cream text-center mb-8">Create Account</h1>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm text-muted-sage block mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-dark-slate border border-clay/10 rounded-lg px-4 py-3 text-soft-cream text-sm outline-none focus:border-clay/50 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm text-muted-sage block mb-2">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-dark-slate border border-clay/10 rounded-lg px-4 py-3 text-soft-cream text-sm outline-none focus:border-clay/50 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-clay text-soft-cream px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-clay-light"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-muted-sage text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-clay hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
}
