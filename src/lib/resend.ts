import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

export const resend = apiKey && apiKey !== "re_placeholder"
  ? new Resend(apiKey)
  : null;
