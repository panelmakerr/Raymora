"use client";

import { type ReactNode } from "react";
import ErrorBoundary from "./ErrorBoundary";
import LenisProvider from "@/components/animations/LenisProvider";
import Splash from "@/components/layout/Splash";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <LenisProvider>
        <Splash />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </LenisProvider>
    </ErrorBoundary>
  );
}
