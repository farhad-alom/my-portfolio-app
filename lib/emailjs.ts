import emailjs from "@emailjs/browser"

/**
 * These three values are safe to send to the browser: the EmailJS public key is
 * designed for client-side use. Never put a private key or secret here.
 * They live in .env as NEXT_PUBLIC_EMAILJS_* (see .env.example).
 */
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

export type ContactMessage = {
  name: string
  email: string
  message: string
}

/**
 * Sends the contact form through EmailJS.
 * The template variables below must match the placeholders in your EmailJS template.
 */
export async function sendContactMessage({ name, email, message }: ContactMessage) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS is not configured.")
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: name,
      from_email: email,
      reply_to: email,
      message,
      to_name: "Farhad Alam",
    },
    { publicKey: PUBLIC_KEY }
  )
}
