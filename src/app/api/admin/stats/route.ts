import { NextResponse } from "next/server";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "frixonplayz@gmail.com";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const apiKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ projects: 4, messages: 12, users: 3 });
    }

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { count: projects } = await supabase.from("projects").select("*", { count: "exact", head: true });
    const { count: messages } = await supabase.from("contacts").select("*", { count: "exact", head: true });
    const { count: users } = await supabase.from("profiles").select("*", { count: "exact", head: true });

    return NextResponse.json({ projects: projects ?? 0, messages: messages ?? 0, users: users ?? 0 });
  } catch (err) {
    console.error("Admin stats error:", err);
    return NextResponse.json({ error: "Failed to load stats" }, { status: 500 });
  }
}
