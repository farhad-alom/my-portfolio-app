import Image from "next/image"
import { Mail, MapPin } from "lucide-react"
import { FaLinkedinIn } from "react-icons/fa6"
import { SiGithub } from "react-icons/si"

import profileImage from "@/public/My image.png"
import DownloadResumeButton from "@/components/DownloadResumeButton"
import { buttonVariants } from "@/components/ui/button"
import { content, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-border/60">
      {/* Soft accent glow. Purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-80 w-2xl -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
        {/* Text */}
        <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="size-6 text-primary" aria-hidden="true" />
            {site.location}
          </p>

          <h1
            id="hero-heading"
            className="mt-5 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            Hi, I&apos;m <span className="text-primary">Farhad Alam</span>
          </h1>

          <p className="mt-3 text-lg font-medium text-foreground/90 sm:text-xl">{site.title}</p>

          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {content.heroIntro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <DownloadResumeButton size="lg" />

            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <SiGithub aria-hidden="true" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <FaLinkedinIn aria-hidden="true" />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>

            {/* <a
              href={`mailto:${site.email}`}
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
            >
              <Mail aria-hidden="true" />
              Email
            </a> */}

            <a
              href={`https://mail.google.com/mail/?view=cm&to=${site.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
            >
              <Mail aria-hidden="true" />
              Email
            </a>

          </div>
        </div>

        {/* Photo */}
        <div className="animate-in fade-in-0 zoom-in-95 relative mx-auto w-full max-w-[20rem] duration-500 sm:max-w-sm">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-3xl bg-primary/10 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-sm">
            <div className="aspect-square overflow-hidden rounded-xl bg-muted">
              <Image
                src={profileImage}
                alt="Portrait of Farhad Alam"
                width={560}
                height={560}
                priority
                sizes="(max-width: 640px) 80vw, 384px"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
