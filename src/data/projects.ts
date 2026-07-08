export interface Project {
  title: string;
  niche: string;
  img: string;
  prd: string;
  tech: string;
  year: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "ShopWave",
    niche: "E-Commerce / Retail",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=75",
    prd: "Multi-vendor marketplace with real-time inventory management, AI-powered product recommendations, and seamless checkout experience.",
    tech: "Next.js, Stripe, Supabase, Algolia",
    year: "2025",
    liveUrl: "https://github.com/panelmakerr/ShopWave",
  },
  {
    title: "MediTrack",
    niche: "HealthTech / Telehealth",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=75",
    prd: "Patient management dashboard with appointment scheduling, EMR integration, telemedicine, and analytics.",
    tech: "React, Node.js, PostgreSQL, WebRTC",
    year: "2025",
    liveUrl: "https://github.com/panelmakerr/MediTrack",
  },
  {
    title: "PaySwift",
    niche: "FinTech",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=75",
    prd: "Digital payment platform with instant transfers, budgeting tools, multi-currency support, and fraud detection.",
    tech: "Next.js, Plaid, Stripe, Supabase",
    year: "2025",
    liveUrl: "https://github.com/panelmakerr/PaySwift",
  },
  {
    title: "PropVue",
    niche: "Real Estate / PropTech",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75",
    prd: "Property listing portal with virtual 3D tours, AI-powered pricing estimates, and agent CRM.",
    tech: "Next.js, Mapbox, TensorFlow, Supabase",
    year: "2024",
    liveUrl: "https://github.com/panelmakerr/PropVue",
  },
  {
    title: "LearnCraft",
    niche: "EdTech",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=75",
    prd: "Online learning platform with live classes, progress tracking, interactive assessments, and certification.",
    tech: "React, WebRTC, Express, MongoDB",
    year: "2024",
    liveUrl: "https://github.com/panelmakerr/LearnCraft",
  },
  {
    title: "InsightPro",
    niche: "B2B SaaS / Analytics",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75",
    prd: "Business intelligence dashboard with real-time data visualization, custom reports, and team collaboration.",
    tech: "Next.js, D3.js, ClickHouse, Supabase",
    year: "2024",
    liveUrl: "https://github.com/panelmakerr/InsightPro",
  },
  {
    title: "StreamVibe",
    niche: "Streaming / Entertainment",
    img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=75",
    prd: "Unified streaming layer that learns your taste and pulls great film and series from everywhere, with watch parties and live sync.",
    tech: "Next.js, Mux, TMDB, Supabase Realtime, OpenAI",
    year: "2025",
    liveUrl: "https://streamvibe-tau-two.vercel.app/",
  },
  {
    title: "FoodieHub",
    niche: "Food / Restaurant Discovery",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=75",
    prd: "Personalized restaurant discovery with live wait times, taste-graph recommendations, and one-tap reservations across thousands of venues.",
    tech: "Next.js, PostGIS, Stripe, Supabase, ML",
    year: "2025",
    liveUrl: "https://foodiehub-5i21m3zw3-bwn-x-boss.vercel.app/",
  },
  {
    title: "GreenLeaf",
    niche: "Sustainability / Climate",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=75",
    prd: "Carbon tracking and smart-swap engine with community impact rings and vetted offsets that turn small habits into real planet impact.",
    tech: "Next.js, Plaid, Supabase Realtime, OpenAI, Stripe",
    year: "2025",
    liveUrl: "https://green-leaf-two.vercel.app/",
  },
];

export default projects;
