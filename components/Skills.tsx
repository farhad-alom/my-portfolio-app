import { Database, Server, CodeXml } from "lucide-react"

import SectionHeading from "@/components/SectionHeading"
import { skillGroups, type SkillGroup } from "@/lib/skills"

const groupIcons: Record<string, typeof CodeXml> = {
  frontend: CodeXml,
  backend: Server,
  "database-tools": Database,
}

function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = groupIcons[group.id] ?? CodeXml

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="text-base font-semibold">{group.title}</h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill.name}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-2.5 py-1.5 text-xs font-medium text-foreground"
          >
            <skill.icon className="size-4 text-muted-foreground" aria-hidden="true" />
            {skill.name}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section border-y border-border/60 bg-muted/30">
      <div className="container-page">
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="The tools I use to build for the web"
          description="These are the technologies I am actively practising. I am at the start of my journey, so I focus on understanding the fundamentals rather than claiming mastery."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
