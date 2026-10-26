import { Heart, Mail } from "lucide-react"
import { FaLinkedinIn } from "react-icons/fa6"
import { SiGithub } from "react-icons/si"

import { site } from "@/lib/site"

const socials = [
  { label: "GitHub profile", href: site.github, icon: SiGithub, external: true },
  { label: "LinkedIn profile", href: site.linkedin, icon: FaLinkedinIn, external: true },
  { label: `Email ${site.name}`, href: `mailto:${site.email}`, icon: Mail, external: false },
]

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container-page flex flex-col items-center gap-4 text-center">
        <ul className="flex items-center gap-2">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                {...(social.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                <social.icon className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Made with{" "}
          <Heart
            className="inline size-3.5 fill-destructive align-[-0.125em] text-destructive"
            aria-hidden="true"
          />
          <span className="sr-only">love</span> in Bangladesh.
        </p>
      </div>
    </footer>
  )
}
