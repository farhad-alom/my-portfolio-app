import { Mail, MapPin, Phone } from "lucide-react"
import { FaLinkedinIn } from "react-icons/fa6"
import { SiGithub } from "react-icons/si"

import ContactForm from "@/components/ContactForm"
import SectionHeading from "@/components/SectionHeading"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const details = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
    href: undefined,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section border-t border-border/60 bg-muted/30"
    >
      <div className="container-page">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a junior role, an internship, or a project idea? Send me a message and I will get back to you."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Send me a message</h3>
            <p className="mt-1 mb-5 text-sm text-muted-foreground">
              Fill in the form and it goes straight to my inbox.
            </p>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">Contact details</h3>

              <ul className="mt-5 grid gap-4">
                {details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <detail.icon className="size-4" aria-hidden="true" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        {detail.label}
                      </p>

                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-0.5 block truncate text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:rounded focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-foreground">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold">Find me online</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  <SiGithub aria-hidden="true" />
                  GitHub
                  <span className="sr-only">(opens in a new tab)</span>
                </a>

                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  <FaLinkedinIn aria-hidden="true" />
                  LinkedIn
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
