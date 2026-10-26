import { GraduationCap, Sparkles } from "lucide-react"

import SectionHeading from "@/components/SectionHeading"
import { site } from "@/lib/site"

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="section">
      <div className="container-page">
        <SectionHeading
          id="education-heading"
          eyebrow="Education"
          title="Where I started, and where I am heading"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>

              <div>
                <h3 className="text-base font-semibold">{site.education.degree}</h3>

                {site.education.institution ? (
                  <p className="mt-1 text-sm text-muted-foreground">{site.education.institution}</p>
                ) : null}

                <p className="mt-2 inline-flex rounded-full border border-border bg-background/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  {site.education.status}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {site.education.description}
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold">Learning journey</h3>
                <p className="text-sm text-muted-foreground">What I am working on right now</p>
              </div>
            </div>

            <ul className="mt-5 grid gap-2.5">
              {site.currentlyLearning.map((topic) => (
                <li key={topic} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {topic}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
