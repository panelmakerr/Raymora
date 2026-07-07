import { NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "raymorahq@gmail.com";
const MAX_MESSAGE_LENGTH = 1000;

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 3;

function getClientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) return true;

  return false;
}

function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/[<>"'\\]/g, "")
    .trim();
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
    }

    const body: ContactBody = await request.json();
    const name = sanitize(body.name || "");
    const email = (body.email || "").trim();
    const message = sanitize(body.message || "");

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (name.length > 100 || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: "Input too long" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && resendKey !== "re_placeholder") {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "Raymora <onboarding@resend.dev>",
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
