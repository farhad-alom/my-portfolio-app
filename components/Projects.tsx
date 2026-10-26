// import { Info } from "lucide-react"

import ProjectCard from "@/components/ProjectCard"
import SectionHeading from "@/components/SectionHeading"
import { projects } from "@/lib/projects"

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section">
      <div className="container-page">
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Things I have built and I am building"
          description="Hands-on projects are where I learn the most. The three cards below are placeholders, ready to be replaced with real work."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
          {/* <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          <span>
            These are sample cards, not real projects. Each one is marked as a placeholder until you
            add your own title, description, screenshots and links.
          </span> */}
        </p>
      </div>
    </section>
  )
}
