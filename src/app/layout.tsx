import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const serif = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raymora — Premium Web Development Agency",
  description:
    "Raymora — premium web development agency crafting custom websites, dashboards, and tools with precision engineering and intentional design.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Raymora — Premium Web Development Agency",
    description: "Precision engineering meets creative vision. Premium web development by Raymora.",
    url: "https://raymora.dev",
    siteName: "Raymora",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymora — Premium Web Development Agency",
    description: "Precision engineering meets creative vision.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
