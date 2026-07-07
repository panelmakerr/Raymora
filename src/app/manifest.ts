import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raymora — Premium Web Development Agency",
    short_name: "Raymora",
    description: "Premium web development agency crafting custom websites and dashboards.",
    start_url: "/",
    display: "standalone",
    background_color: "#2A2A2A",
    theme_color: "#C47A4E",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
