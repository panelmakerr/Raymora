export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  tech: string[];
  image_url: string;
  live_url?: string;
  github_url?: string;
  featured: boolean;
  created_at: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  created_at: string;
}

export interface Profile {
  id: string;
  email: string;
  role: "admin" | "user";
  created_at: string;
}
