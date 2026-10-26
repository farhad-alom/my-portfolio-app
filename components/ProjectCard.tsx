import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, FolderCode } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import type { Project } from "@/lib/projects"
import { cn } from "@/lib/utils"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg">
      {/* Preview image, or a clean placeholder illustration. */}
      <div className="relative aspect-video overflow-hidden border-b border-border bg-linear-to-br from-primary/15 via-card to-card">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <FolderCode
              className="size-10 text-primary/60 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
          </div>
        )}

        {project.isPlaceholder ? (
          <span className="absolute top-3 left-3 rounded-full border border-border bg-background/80 px-2 py-0.5 font-mono text-[0.65rem] tracking-wider text-muted-foreground uppercase backdrop-blur">
            Placeholder
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "flex-1")}
          >
            Read More
            <ArrowRight aria-hidden="true" />
            <span className="sr-only">about {project.title}</span>
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "flex-1")}
            >
              <ExternalLink aria-hidden="true" />
              View Live Site
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <span
              aria-disabled="true"
              title="No live demo link has been added for this project yet."
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "flex-1 cursor-not-allowed opacity-60"
              )}
            >
              <ExternalLink aria-hidden="true" />
              Live Demo
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
