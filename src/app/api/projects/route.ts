import { NextResponse } from "next/server";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "frixonplayz@gmail.com";

export async function GET() {
  try {
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

    return NextResponse.json({ projects: projects ?? 4, messages: messages ?? 12, users: users ?? 3 });
  } catch (err) {
    console.error("Stats API error:", err);
    return NextResponse.json({ projects: 4, messages: 12, users: 3 });
  }
}

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
    }

    const body = await request.json();
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase.from("projects").insert(body).select().single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Projects API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
