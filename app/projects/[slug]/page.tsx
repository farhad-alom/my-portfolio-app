import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, FolderCode, Info } from "lucide-react"
import { SiGithub } from "react-icons/si"

import { buttonVariants } from "@/components/ui/button"
import { getProject, projects } from "@/lib/projects"
import { cn } from "@/lib/utils"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) return { title: "Project not found" }

  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  return (
    <article className="section">
      <div className="container-page">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-lg text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to projects
        </Link>

        <header className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {project.title}
          </h1>

          {project.isPlaceholder ? (
            <span className="rounded-full border border-border bg-card px-2.5 py-0.5 font-mono text-[0.65rem] tracking-wider text-muted-foreground uppercase">
              Placeholder
            </span>
          ) : null}
        </header>

        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        {project.isPlaceholder ? (
          <p className="mt-6 flex items-start gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              This is sample content so you can see the page layout. Replace it in{" "}
              <code className="font-mono text-xs">lib/projects.ts</code> with a real project.
            </span>
          </p>
        ) : null}

        {/* Preview */}
        <div className="relative mx-auto mt-8 aspect-video max-w-4xl overflow-hidden rounded-2xl border border-border bg-linear-to-br from-primary/15 via-card to-card">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
            />
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-2 text-muted-foreground">
              <FolderCode className="size-10 text-primary/60" aria-hidden="true" />
              <span className="text-xs">No screenshot added yet</span>
            </div>
          )}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          {/* Main content */}
          <div className="grid gap-10">
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-xl font-semibold">
                Overview
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{project.overview}</p>
            </section>

            <section aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-xl font-semibold">
                Main features
              </h2>
              <ul className="mt-3 grid gap-2.5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="challenges-heading">
              <h2 id="challenges-heading" className="text-xl font-semibold">
                Challenges and solutions
              </h2>
              <div className="mt-3 grid gap-4">
                {project.challenges.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="improvements-heading">
              <h2 id="improvements-heading" className="text-xl font-semibold">
                Future improvements
              </h2>
              <ul className="mt-3 grid gap-2.5">
                {project.improvements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="grid gap-6 rounded-2xl border border-border bg-card p-6">
            <div>
              <h2 className="text-sm font-semibold tracking-wide uppercase">Technology stack</h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold tracking-wide uppercase">Project links</h2>

              <div className="mt-3 grid gap-2">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }), "justify-start")}
                  >
                    <SiGithub aria-hidden="true" />
                    View source code
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : null}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ size: "sm" }), "justify-start")}
                  >
                    <ExternalLink aria-hidden="true" />
                    View live site
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : null}

                {!project.repoUrl && !project.liveUrl ? (
                  <p className="text-sm text-muted-foreground">
                    No repository or live link has been added yet, so no buttons are shown here.
                  </p>
                ) : null}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
