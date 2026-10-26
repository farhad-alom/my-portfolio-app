import { BookOpen, MapPin, Target } from "lucide-react"

import SectionHeading from "@/components/SectionHeading"
import { content, site } from "@/lib/site"

const quickFacts = [
  { icon: MapPin, label: "Based in", value: site.location },
  { icon: Target, label: "Focus", value: "Frontend now, backend next" },
  {
    icon: BookOpen,
    label: "Currently learning",
    value: site.currentlyLearning.slice(0, 3).join(", "),
  },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section">
      <div className="container-page">
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title="Learning by building, one project at a time"
        />

        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {content.aboutIntro}
          </p>

          <dl className="grid gap-5 rounded-2xl border border-border bg-card p-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex gap-3">
                <fact.icon className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
