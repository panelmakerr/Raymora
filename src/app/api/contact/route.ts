import { NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "frixonplayz@gmail.com";

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && resendKey !== "re_placeholder") {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "BWN × BOSS <onboarding@resend.dev>",
        to: ADMIN_EMAIL,
        subject: `New Contact: ${name}`,
        text: `From: ${name} (${email})\n\n${message}`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
