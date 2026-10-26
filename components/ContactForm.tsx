"use client"

import { useState } from "react"
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { isEmailJsConfigured, sendContactMessage } from "@/lib/emailjs"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

type FieldErrors = {
  name?: string
  email?: string
  message?: string
}

type Status = "idle" | "sending" | "success" | "error"

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-destructive"

export default function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>("idle")
  const [feedback, setFeedback] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Stop double submissions.
    if (status === "sending") return

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()

    const nextErrors: FieldErrors = {}
    if (name.length < 2) nextErrors.name = "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address."
    }
    if (message.length < 10) {
      nextErrors.message = "Please write a message of at least 10 characters."
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle")
      setFeedback("")
      return
    }

    if (!isEmailJsConfigured) {
      setStatus("error")
      setFeedback(`The contact form is not set up yet. Please email me at ${site.email}.`)
      return
    }

    setStatus("sending")
    setFeedback("")

    try {
      await sendContactMessage({ name, email, message })
      form.reset()
      setStatus("success")
      setFeedback("Thanks for reaching out! Your message was sent and I will reply as soon as I can.")
    } catch {
      setStatus("error")
      setFeedback(`Something went wrong. Please try again, or email me at ${site.email}.`)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4">
      {!isEmailJsConfigured ? (
        <p className="flex items-start gap-2 rounded-lg border border-border bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
          <CircleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          <span>
            EmailJS keys are missing in this environment. Add them to <code>.env</code> to enable the
            form, or email me directly at {site.email}.
          </span>
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            disabled={status === "sending"}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
          />
          {errors.name ? (
            <p id="name-error" className="text-xs text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            disabled={status === "sending"}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about the role, project, or idea you have in mind."
          disabled={status === "sending"}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass, "resize-y")}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
        >
          {status === "sending" ? (
            <>
              <LoaderCircle className="animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send aria-hidden="true" />
              Send Message
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground">
          I usually reply within a day or two.
        </p>
      </div>

      {feedback ? (
        <div
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={cn(
            "flex items-start gap-2 rounded-lg border px-3 py-2 text-sm",
            status === "error"
              ? "border-destructive/40 bg-destructive/10 text-destructive"
              : "border-primary/40 bg-primary/10 text-foreground"
          )}
        >
          {status === "error" ? (
            <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          ) : (
            <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          )}
          <span>{feedback}</span>
        </div>
      ) : null}
    </form>
  )
}
