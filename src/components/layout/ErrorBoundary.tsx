"use client";

import { Component, type ReactNode, type ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-clay mb-4">Error</p>
              <h1 className="font-serif text-3xl text-soft-cream mb-4">Something went wrong</h1>
              <p className="text-muted-sage text-sm mb-8 max-w-md">
                {this.state.error?.message || "An unexpected error occurred."}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="inline-block bg-clay text-soft-cream px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-clay-light transition-all"
              >
                Reload Page
              </button>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
